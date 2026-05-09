import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export interface Lead {
  name: string;
  email: string;
  company?: string;
  source: string;
  subject?: string;
  message?: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureDataDir() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory exists
  }
}

async function readLeads(): Promise<Lead[]> {
  try {
    const data = await readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveLead(lead: Omit<Lead, "createdAt">): Promise<Lead> {
  await ensureDataDir();
  const leads = await readLeads();
  const newLead: Lead = {
    ...lead,
    createdAt: new Date().toISOString(),
  };
  leads.push(newLead);
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
  return newLead;
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
