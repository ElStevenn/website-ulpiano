"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  FileSearch,
  PenLine,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* =============================================
   MODULES — real AI capabilities only
   ============================================= */

type Module = {
  id: string;
  label: string;
  tagline: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  preview: PreviewBlock;
  bullets: string[];
};

type PreviewBlock = {
  kind: "extract" | "draft" | "consult" | "validate";
  doc: { title: string; meta: string };
  fields?: { key: string; value: string }[];
  draft?: { line: string; highlight?: boolean }[];
  question?: string;
  answer?: { text: string; citation: string };
  checks?: { label: string; status: "ok" | "warn" | "error" }[];
};

const modules: Module[] = [
  {
    id: "lectura",
    label: "Lectura de documentos",
    tagline: "PDF en datos estructurados",
    title: "De PDFs a datos en segundos",
    description:
      "Extrae datos estructurados de testamentos, certificados de defunción, últimas voluntades, escrituras y notas simples. Tú verificas, Ulpiano no inventa.",
    Icon: FileSearch,
    bullets: [
      "OCR + NLP entrenado con documentación española",
      "Datos mapeados directamente al expediente",
      "Confianza por campo y enlace al PDF original",
    ],
    preview: {
      kind: "extract",
      doc: {
        title: "Certificado de Últimas Voluntades",
        meta: "PDF · 2 páginas",
      },
      fields: [
        { key: "Causante", value: "Joan Puig Ribas" },
        { key: "DNI", value: "46 815 299-B" },
        { key: "Fecha de defunción", value: "12/02/2026" },
        { key: "Testamento", value: "Notaría Montaner · 04/11/2021" },
      ],
    },
  },
  {
    id: "redaccion",
    label: "Redacción asistida",
    tagline: "Borrador desde el expediente",
    title: "Crea el cuaderno particional sin teclear",
    description:
      "Genera el borrador del cuaderno particional, escritos y comunicaciones a herederos desde los datos ya estructurados del expediente. Sin transcribir dos veces lo mismo.",
    Icon: PenLine,
    bullets: [
      "Plantillas conectadas al caso real",
      "El abogado revisa y firma. La IA solo redacta",
      "Trazabilidad garantizada por campo",
    ],
    preview: {
      kind: "draft",
      doc: {
        title: "Cuaderno particional · Borrador",
        meta: "Expediente #2026-042",
      },
      draft: [
        { line: "COMPARECEN" },
        {
          line: "D.ª Marta Puig Serra, mayor de edad, con DNI 46 815 300-A…",
          highlight: true,
        },
        { line: "EXPOSICIONES" },
        {
          line: "Primero. — Don Joan Puig Ribas falleció el 12 de febrero de 2026…",
          highlight: true,
        },
      ],
    },
  },
  {
    id: "consulta",
    label: "Consulta normativa",
    tagline: "Respuestas con cita literal",
    title: "Consulta el derecho foral con precisión",
    description:
      "Pregunta sobre el CCCat, el ISD catalán o la Ley 29/1987. Ulpiano IA responde con cita literal del artículo y enlace a la fuente oficial. Si no tiene fuente, no responde.",
    Icon: BookOpenCheck,
    bullets: [
      "Corpus normativo estatal y autonómico",
      "Respuesta con artículo, número y texto íntegro",
      "Nunca inventa jurisprudencia: sin fuente no responde",
    ],
    preview: {
      kind: "consult",
      doc: {
        title: "Consulta · Código Civil Catalán",
        meta: "Llei 10/2008",
      },
      question:
        "¿Cuál es la cuantía de la legítima colectiva en Cataluña?",
      answer: {
        text: "La legítima en Cataluña es de la cuarta parte del valor neto de la herencia.",
        citation: "Art. 451-5 Codi Civil de Catalunya (Llibre IV)",
      },
    },
  },
  {
    id: "validacion",
    label: "Validación de coherencia",
    tagline: "Expediente revisado antes que tú",
    title: "Un segundo par de ojos para tu expediente",
    description:
      "Revisa el expediente completo y señala inconsistencias: heredero sin NIF, activo sin valoración, documento posterior al fallecimiento, legitimarios no identificados.",
    Icon: ShieldCheck,
    bullets: [
      "Reglas deterministas + razonamiento de la IA",
      "Incidencias priorizadas por impacto",
      "Revisión automática antes de firmar",
    ],
    preview: {
      kind: "validate",
      doc: {
        title: "Revisión del expediente",
        meta: "Expediente #2026-042 · 14 comprobaciones",
      },
      checks: [
        { label: "Herederos con NIF identificado", status: "ok" },
        { label: "Valoración de inmuebles completa", status: "ok" },
        { label: "Documento fechado posterior al óbito", status: "warn" },
        { label: "Legitimario sin notificación legal", status: "error" },
      ],
    },
  },
];

/* =============================================
   PREVIEW RENDERERS
   ============================================= */

function DocHeader({
  doc,
  Icon,
}: {
  doc: PreviewBlock["doc"];
  Icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-5 py-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 shadow-inner">
        <Icon size={20} strokeWidth={2} />
      </span>
      <div>
        <p className="text-[15px] font-semibold text-white">{doc.title}</p>
        <p className="text-[12px] font-medium text-white/50">{doc.meta}</p>
      </div>
    </div>
  );
}

function ExtractPreview({ block }: { block: PreviewBlock }) {
  return (
    <div className="h-full flex flex-col">
      <DocHeader doc={block.doc} Icon={FileSearch} />
      <div className="p-5 flex-1 flex flex-col justify-center">
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="border-b border-white/10 px-5 py-3 text-[11px] uppercase font-bold tracking-[0.15em] text-emerald-400 bg-white/5">
            Datos extraídos por IA
          </div>
          <ul className="divide-y divide-white/5">
            {block.fields?.map((f) => (
              <li
                key={f.key}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-white/5 transition-colors"
              >
                <span className="text-[14px] font-medium text-white/60">{f.key}</span>
                <span className="font-mono text-[13px] font-medium text-white">
                  {f.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DraftPreview({ block }: { block: PreviewBlock }) {
  return (
    <div className="h-full flex flex-col">
      <DocHeader doc={block.doc} Icon={PenLine} />
      <div className="p-5 flex-1 flex flex-col justify-center">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 font-serif shadow-inner relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50" />
          {block.draft?.map((l, i) => (
            <p
              key={i}
              className={`text-[14.5px] leading-relaxed ${
                l.highlight
                  ? "text-white/90 bg-emerald-500/10 px-2 py-0.5 rounded -mx-2"
                  : "mt-4 mb-2 text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-500 font-sans"
              }`}
            >
              {l.line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConsultPreview({ block }: { block: PreviewBlock }) {
  return (
    <div className="h-full flex flex-col">
      <DocHeader doc={block.doc} Icon={BookOpenCheck} />
      <div className="p-5 flex-1 flex flex-col justify-center gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">
            Pregunta del abogado
          </p>
          <p className="text-[15px] font-medium text-white/90">{block.question}</p>
        </div>
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-emerald-400" />
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-400">
              Respuesta de Ulpiano IA
            </p>
          </div>
          <p className="text-[15px] leading-relaxed text-white">
            {block.answer?.text}
          </p>
          <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <p className="font-mono text-[12px] font-medium text-emerald-400/80">
              {block.answer?.citation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValidatePreview({ block }: { block: PreviewBlock }) {
  const statusColors: Record<string, string> = {
    ok: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    warn: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    error: "text-red-400 bg-red-400/10 border-red-400/20",
  };
  
  const dotColors: Record<string, string> = {
    ok: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
    warn: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
    error: "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]",
  };

  return (
    <div className="h-full flex flex-col">
      <DocHeader doc={block.doc} Icon={ShieldCheck} />
      <div className="p-5 flex-1 flex flex-col justify-center">
        <ul className="space-y-3">
          {block.checks?.map((c, i) => (
            <li
              key={i}
              className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-colors ${statusColors[c.status]}`}
            >
              <span
                className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${dotColors[c.status]}`}
                aria-hidden="true"
              />
              <span className="text-[14px] font-medium text-white/90">{c.label}</span>
              <span
                className="ml-auto text-[11px] font-bold uppercase tracking-[0.1em]"
              >
                {c.status === "ok"
                  ? "Correcto"
                  : c.status === "warn"
                    ? "Revisar"
                    : "Error"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Preview({ block }: { block: PreviewBlock }) {
  if (block.kind === "extract") return <ExtractPreview block={block} />;
  if (block.kind === "draft") return <DraftPreview block={block} />;
  if (block.kind === "consult") return <ConsultPreview block={block} />;
  return <ValidatePreview block={block} />;
}

/* =============================================
   MAIN CLIENT
   ============================================= */

export default function IaClient() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((m) => m.id === activeId) ?? modules[0];

  return (
    <main className="bg-night text-white font-sans min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-[calc(64px+5rem)] pb-24 lg:pb-32"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }}
      >
        {/* Background glow effects */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,var(--ulpiano-green)_0%,transparent_50%)] opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.3)_0%,transparent_60%)] opacity-30 blur-[80px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-[800px] mx-auto text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-emerald-500/50" />
              <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                <Sparkles size={14} strokeWidth={2} />
                Ulpiano IA
              </span>
              <div className="h-[1px] w-8 bg-emerald-500/50" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
              Inteligencia artificial donde aporta.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[var(--ulpiano-green)]">
                Motor determinista donde es crítico.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/60 max-w-[700px] mx-auto">
              Ulpiano IA se aplica a lo que la inteligencia artificial hace bien: leer, redactar, consultar y validar. El cálculo del ISD y las legítimas se resuelven con motores deterministas auditables. <strong className="text-white font-medium">Nunca con IA.</strong>
            </p>
          </div>

          {/* TABS + PREVIEW */}
          <div className="mt-20 lg:mt-28 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Tabs */}
            <nav
              aria-label="Capacidades de Ulpiano IA"
              className="flex flex-col gap-3"
            >
              {modules.map((m) => {
                const isActive = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveId(m.id)}
                    className={`group relative flex items-center justify-between rounded-xl px-5 py-4 text-left transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "bg-white/10 border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)] scale-[1.02]"
                        : "bg-white/5 border-transparent hover:bg-white/[0.08] hover:border-white/10"
                    } border`}
                    aria-pressed={isActive}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/50 group-hover:text-white/80'}`}>
                        <m.Icon size={18} strokeWidth={2} />
                      </div>
                      <span className={`text-[16px] font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                        {m.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Preview Area */}
            <div className="flex flex-col h-full">
              <div className="mb-8 max-w-[600px] animate-fade-in-up" key={`header-${activeId}`}>
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="h-[1px] w-6 bg-emerald-500/50" />
                  <p className="font-bold text-[12px] uppercase tracking-[0.2em] text-emerald-400">
                    {active.tagline}
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  {active.title}
                </h2>
                <p className="text-[16.5px] leading-relaxed text-white/60">
                  {active.description}
                </p>
              </div>
              
              <div className="flex-1 relative rounded-2xl border border-white/10 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5),0_0_40px_-10px_rgba(45,106,79,0.3)] bg-[#09090b]/80 backdrop-blur-xl overflow-hidden animate-fade-in-up" key={`preview-${activeId}`}>
                <Preview block={active.preview} />
              </div>
              
              <ul className="mt-8 grid gap-4 sm:grid-cols-3 animate-fade-in-up" key={`bullets-${activeId}`}>
                {active.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-[14px] leading-relaxed text-white/70"
                  >
                    <span className="mt-0.5 text-emerald-500 flex-shrink-0">
                      <Sparkles size={16} strokeWidth={2} />
                    </span>
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BLOCK — IA vs Determinista ═══ */}
      <section className="border-t border-white/10 bg-[#09090b] py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mb-14 max-w-[700px] text-center mx-auto animate-fade-in-up">
            <p className="mb-4 font-bold text-[12px] uppercase tracking-[0.2em] text-white/40">
              La frontera es clara
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              La IA nunca calcula la cuota del ISD
            </h2>
            <p className="text-[17px] leading-relaxed text-white/60">
              Todo lo que pueda acabar ante Hacienda, un juez o un cliente, lo resuelve un motor determinista con la norma citada y cada paso auditable. <strong className="text-white font-medium">Ulpiano IA acompaña; no decide lo que no debe decidir.</strong>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-[900px] mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-colors" />
              <div className="mb-6 flex items-center gap-2 font-bold text-[12px] uppercase tracking-[0.15em] text-emerald-400">
                <Sparkles size={16} strokeWidth={2} />
                Con Ulpiano IA
              </div>
              <ul className="space-y-4 text-[15.5px] text-white/80 font-medium">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Lectura y extracción de documentos del expediente</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Redacción asistida del cuaderno particional y escritos</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Consulta normativa con cita literal de artículos</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Validación de coherencia del expediente</li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
              <div className="mb-6 flex items-center gap-2 font-bold text-[12px] uppercase tracking-[0.15em] text-blue-400">
                <ShieldCheck size={16} strokeWidth={2} />
                Con motor determinista
              </div>
              <ul className="space-y-4 text-[15.5px] text-white/80 font-medium">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Cálculo de legítimas según el CCCat</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Motor fiscal ISD (base, reducciones, bonificaciones)</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Modelos tributarios 650, 651, 652, 653, 660</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Escenarios sucesorios y simulaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 relative">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 sm:p-14 backdrop-blur-xl shadow-2xl animate-fade-in-up">
            <div className="max-w-[600px] text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ve Ulpiano IA sobre un expediente real
              </h3>
              <p className="text-[17px] leading-relaxed text-white/60">
                25 minutos. Traemos un expediente sucesorio y te enseñamos dónde la IA ayuda y dónde el motor determinista toma el relevo. Sin compromiso.
              </p>
            </div>
            <Link
              href="/demo"
              className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-4 text-[16px] whitespace-nowrap"
            >
              Reserva tu demo <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}