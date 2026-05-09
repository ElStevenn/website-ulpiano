import { NextRequest, NextResponse } from "next/server";
import { saveLead, validateEmail } from "@/lib/leads";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nombre requerido (mínimo 2 caracteres)" },
        { status: 400 }
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Email profesional válido requerido" },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2) {
      return NextResponse.json(
        { error: "Nombre del despacho requerido" },
        { status: 400 }
      );
    }

    const lead = await saveLead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      source: "demo-request",
    });

    return NextResponse.json({ ok: true, lead }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
