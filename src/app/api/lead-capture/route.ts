import { NextRequest, NextResponse } from "next/server";
import { validateEmail } from "@/lib/leads";
import { buildEvidenceRecord, rejectIfNoConsent } from "@/lib/legal/evidence";
import { submitToHubSpot } from "@/lib/leads/hubspot";

export const runtime = "nodejs";
export const preferredRegion = "fra1";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const consent = rejectIfNoConsent(body);
    if (consent instanceof NextResponse) return consent;
    if (consent.formId !== "resource-download" && consent.formId !== "newsletter") {
      return NextResponse.json(
        { error: "formId no válido para este endpoint", code: "INVALID_FORM_ID" },
        { status: 400 },
      );
    }

    const { name, email, source } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nombre requerido (mínimo 2 caracteres)" },
        { status: 400 },
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Email profesional válido requerido" },
        { status: 400 },
      );
    }

    if (!source || typeof source !== "string") {
      return NextResponse.json(
        { error: "Origen del lead requerido" },
        { status: 400 },
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      source,
    };

    const record = buildEvidenceRecord(request, consent, payload);
    await submitToHubSpot(record, request.headers.get("cookie"));

    return NextResponse.json({ ok: true, submission_id: record.submission_id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
