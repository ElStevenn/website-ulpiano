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
    label: "Lectura de documents",
    tagline: "PDF en dades estructurades",
    title: "De PDFs a dades en segons",
    description:
      "Extreu dades estructurades de testaments, certificats de defunció, darreres voluntats, escriptures i notes simples. Tu verifiques, Ulpiano no inventa.",
    Icon: FileSearch,
    bullets: [
      "OCR + NLP entrenat amb documentació catalana i espanyola",
      "Dades mapejades directament a l'expedient",
      "Confiança per camp i enllaç al PDF original",
    ],
    preview: {
      kind: "extract",
      doc: {
        title: "Certificat de Darreres Voluntats",
        meta: "PDF · 2 pàgines",
      },
      fields: [
        { key: "Causant", value: "Joan Puig Ribas" },
        { key: "DNI", value: "46 815 299-B" },
        { key: "Data de defunció", value: "12/02/2026" },
        { key: "Testament", value: "Notaria Montaner · 04/11/2021" },
      ],
    },
  },
  {
    id: "redaccio",
    label: "Redacció assistida",
    tagline: "Esborrany des de l'expedient",
    title: "Crea el quadern particional sense teclejar",
    description:
      "Genera l'esborrany del quadern particional, escrits i comunicacions als hereus des de les dades ja estructurades de l'expedient. Sense transcriure dues vegades el mateix.",
    Icon: PenLine,
    bullets: [
      "Plantilles connectades al cas real",
      "L'advocat revisa i signa. La IA només redacta",
      "Traçabilitat garantida per camp",
    ],
    preview: {
      kind: "draft",
      doc: {
        title: "Quadern particional · Esborrany",
        meta: "Expedient #2026-042",
      },
      draft: [
        { line: "COMPAREIXEN" },
        {
          line: "Sra. Marta Puig Serra, major d'edat, amb DNI 46 815 300-A…",
          highlight: true,
        },
        { line: "EXPOSICIONS" },
        {
          line: "Primer. — En Joan Puig Ribas va morir el 12 de febrer de 2026…",
          highlight: true,
        },
      ],
    },
  },
  {
    id: "consulta",
    label: "Consulta normativa",
    tagline: "Respostes amb citació literal",
    title: "Consulta el dret foral amb precisió",
    description:
      "Pregunta sobre el CCCat, l'ISD català o la Llei 29/1987. Ulpiano IA respon amb citació literal de l'article i enllaç a la font oficial. Si no té font, no respon.",
    Icon: BookOpenCheck,
    bullets: [
      "Corpus normatiu estatal i autonòmic",
      "Resposta amb article, número i text íntegre",
      "Mai inventa jurisprudència: sense font no respon",
    ],
    preview: {
      kind: "consult",
      doc: {
        title: "Consulta · Codi Civil de Catalunya",
        meta: "Llei 10/2008",
      },
      question:
        "Quina és la quantia de la llegítima col·lectiva a Catalunya?",
      answer: {
        text: "La llegítima a Catalunya és de la quarta part del valor net de l'herència.",
        citation: "Art. 451-5 Codi Civil de Catalunya (Llibre IV)",
      },
    },
  },
  {
    id: "validacio",
    label: "Validació de coherència",
    tagline: "Expedient revisat abans que tu",
    title: "Un segon parell d'ulls per al teu expedient",
    description:
      "Revisa l'expedient complet i assenyala inconsistències: hereu sense NIF, actiu sense valoració, document posterior a la defunció, legitimaris no identificats.",
    Icon: ShieldCheck,
    bullets: [
      "Regles deterministes + raonament de la IA",
      "Incidències prioritzades per impacte",
      "Revisió automàtica abans de signar",
    ],
    preview: {
      kind: "validate",
      doc: {
        title: "Revisió de l'expedient",
        meta: "Expedient #2026-042 · 14 comprovacions",
      },
      checks: [
        { label: "Hereus amb NIF identificat", status: "ok" },
        { label: "Valoració d'immobles completa", status: "ok" },
        { label: "Document datat posterior a l'òbit", status: "warn" },
        { label: "Legitimari sense notificació legal", status: "error" },
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
            Dades extretes per IA
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
            Pregunta de l'advocat
          </p>
          <p className="text-[15px] font-medium text-white/90">{block.question}</p>
        </div>
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-emerald-400" />
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-400">
              Resposta d'Ulpiano IA
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
                  ? "Correcte"
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

export default function IaClientCa() {
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
              Intel·ligència artificial on aporta.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[var(--ulpiano-green)]">
                Motor determinista on és crític.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/60 max-w-[700px] mx-auto">
              Ulpiano IA s'aplica al que la intel·ligència artificial fa bé: llegir, redactar, consultar i validar. El càlcul de l'ISD i les llegítimes es resolen amb motors deterministes auditables. <strong className="text-white font-medium">Mai amb IA.</strong>
            </p>
          </div>

          {/* TABS + PREVIEW */}
          <div className="mt-20 lg:mt-28 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Tabs */}
            <nav
              aria-label="Capacitats d'Ulpiano IA"
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
              La frontera és clara
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              La IA mai calcula la quota de l'ISD
            </h2>
            <p className="text-[17px] leading-relaxed text-white/60">
              Tot allò que pugui acabar davant d'Hisenda, un jutge o un client, ho resol un motor determinista amb la norma citada i cada pas auditable. <strong className="text-white font-medium">Ulpiano IA acompanya; no decideix el que no ha de decidir.</strong>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-[900px] mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-colors" />
              <div className="mb-6 flex items-center gap-2 font-bold text-[12px] uppercase tracking-[0.15em] text-emerald-400">
                <Sparkles size={16} strokeWidth={2} />
                Amb Ulpiano IA
              </div>
              <ul className="space-y-4 text-[15.5px] text-white/80 font-medium">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Lectura i extracció de documents de l'expedient</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Redacció assistida del quadern particional i escrits</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Consulta normativa amb citació literal d'articles</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" /> Validació de coherència de l'expedient</li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
              <div className="mb-6 flex items-center gap-2 font-bold text-[12px] uppercase tracking-[0.15em] text-blue-400">
                <ShieldCheck size={16} strokeWidth={2} />
                Amb motor determinista
              </div>
              <ul className="space-y-4 text-[15.5px] text-white/80 font-medium">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Càlcul de llegítimes segons el CCCat</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Motor fiscal ISD (base, reduccions, bonificacions)</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Models tributaris 650, 651, 652, 653, 660</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" /> Escenaris successoris i simulacions</li>
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
                Veu Ulpiano IA sobre un expedient real
              </h3>
              <p className="text-[17px] leading-relaxed text-white/60">
                25 minuts. Portem un expedient successori i t'ensenyem on la IA ajuda i on el motor determinista pren el relleu. Sense compromís.
              </p>
            </div>
            <Link
              href="/ca/demo"
              className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-4 text-[16px] whitespace-nowrap"
            >
              Reserva la teva demo <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}