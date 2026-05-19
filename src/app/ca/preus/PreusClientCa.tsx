"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, Minus, ChevronDown, ArrowRight, Star } from "lucide-react";

/* =============================================
   SCROLL REVEAL HOOK
   ============================================= */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const els = Array.from(node.querySelectorAll<HTMLElement>(".reveal"));
    const show = (el: Element) => {
      el.classList.add("animate-fade-in-up");
      el.classList.remove("opacity-0");
    };

    if (typeof IntersectionObserver === "undefined") {
      els.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    els.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    // Safety net: critical pricing content must never stay invisible if
    // the observer fails to fire (no-JS edge cases, fast scroll, etc.).
    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        if (el.classList.contains("opacity-0")) show(el);
      });
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return ref;
}

/* =============================================
   DADES — font: Ulpiano_Pricing_Packaging_v1 (v1.1)
   ============================================= */
type Tier = {
  id: string;
  name: string;
  monthly: number | null;
  annual: number | null;
  tagline: string;
  highlight?: boolean;
  cta: { label: string; href: string };
  bullets: string[];
};

const tiers: Tier[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    annual: 0,
    tagline: "Per conèixer la plataforma amb un expedient real.",
    cta: { label: "Comença gratis", href: "/ca/demo" },
    bullets: [
      "1 usuari · 1 expedient actiu",
      "Inventari, arbre familiar i actius digitals",
      "Models AEAT en pagament per ús (15€/model)",
      "5 GB d'emmagatzematge",
    ],
  },
  {
    id: "esencial",
    name: "Esencial",
    monthly: 199,
    annual: 169,
    tagline: "Per al despatx que comença a digitalitzar herències.",
    cta: { label: "Comença la prova", href: "/ca/demo" },
    bullets: [
      "2 usuaris · 5 expedients actius",
      "Càlculs fiscals: valor mínim, reduccions i bonificacions",
      "Digitalització amb extracció AI",
      "Branding del portal · suport 48-72h",
    ],
  },
  {
    id: "avanzado",
    name: "Avançat",
    monthly: 449,
    annual: 382,
    tagline: "Dissenyat per al despatx boutique: 20-100 expedients/any.",
    highlight: true,
    cta: { label: "Comença la prova", href: "/ca/demo" },
    bullets: [
      "5 usuaris · 15 expedients actius",
      "20 models AEAT/mes inclosos",
      "Comprensió documental AI · white-label",
      "Escenaris en 1 clic i API bàsica (pròx.)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 999,
    annual: 849,
    tagline: "Per a assessories de volum i despatxos consolidats.",
    cta: { label: "Comença la prova", href: "/ca/demo" },
    bullets: [
      "10 usuaris · 50 expedients actius",
      "50 models AEAT/mes inclosos",
      "White-label amb domini propi · suport dedicat",
      "API completa amb SSO/SCIM (pròx.)",
    ],
  },
];

const variableRows = [
  { tier: "Free", incl: "0", extra: "15€", bienes: "5", bienExtra: "2€" },
  { tier: "Esencial", incl: "0", extra: "15€", bienes: "5", bienExtra: "2€" },
  { tier: "Avançat", incl: "20", extra: "9€", bienes: "10", bienExtra: "1€" },
  { tier: "Pro", incl: "50", extra: "5€", bienes: "20", bienExtra: "0,50€" },
];

const featureGroups: { group: string; rows: [string, string, string, string, string][] }[] = [
  {
    group: "General",
    rows: [
      ["Branding personalitzat (portal)", "—", "—", "✓", "white-label + domini"],
      ["Portal del client", "—", "—", "✓ brandable", "white-label"],
      ["Col·laboració amb partners", "—", "—", "✓", "✓"],
      ["Sistema de notificacions", "✓", "✓", "✓", "✓"],
      ["Emmagatzematge", "5 GB", "50 GB", "250 GB", "500 GB"],
      ["Suport (SLA)", "Comunitat", "48-72h", "24-48h prio.", "Dedicat"],
    ],
  },
  {
    group: "Ulpiano IA",
    rows: [
      ["Assistent conversacional", "—", "—", "Pròx. set.", "Pròx. set."],
      ["Digitalització — extracció", "—", "✓", "✓", "✓"],
      ["Digitalització — comprensió", "—", "—", "✓", "✓"],
      ["Generació de documents successoris", "—", "Pròx.", "Pròx.", "Pròx."],
    ],
  },
  {
    group: "Gestió patrimonial",
    rows: [
      ["Inventari de béns", "✓", "✓", "✓", "✓"],
      ["Registre de deutes", "✓", "✓", "✓", "✓"],
      ["Documents per bé (adjunts)", "✓", "✓", "✓", "✓"],
      ["Actius digitals", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    group: "Planificació successòria",
    rows: [
      ["Arbre familiar (visual)", "✓", "✓", "✓", "✓"],
      ["Títols i institucions successòries", "✓", "✓", "✓", "✓"],
      ["Escenaris de planificació", "1/exped.", "3/exped.", "6/exped.", "12/exped."],
      ["Crear escenaris en 1 clic", "—", "—", "Pròx.", "Pròx."],
      ["Comparador d'escenaris", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    group: "Fiscalitat de l'herència",
    rows: [
      ["Càlcul valor fiscal mínim immobles", "—", "✓", "✓", "✓"],
      ["Detall de reduccions fiscals", "—", "✓", "✓", "✓"],
      ["Detall de bonificacions fiscals", "—", "✓", "✓", "✓"],
      ["Model S05 — Sol·licitud de pròrroga", "Pag./ús", "Pag./ús", "20/mes incl.", "50/mes incl."],
      ["Model 660 — Relació d'inventari", "Pag./ús", "Pag./ús", "20/mes incl.", "50/mes incl."],
      ["Model 650 — Declarar herència", "Pag./ús", "Pag./ús", "20/mes incl.", "50/mes incl."],
      ["Model 651 — Declarar donació", "Pag./ús", "Pag./ús", "20/mes incl.", "50/mes incl."],
      ["Model 652 — Declarar assegurança de vida", "Pag./ús", "Pag./ús", "20/mes incl.", "50/mes incl."],
      ["Càlcul de plusvàlua municipal", "—", "—", "Pròx.", "Pròx."],
    ],
  },
  {
    group: "Integracions / API / Seguretat",
    rows: [
      ["API (endpoints)", "—", "—", "Pròx. bàsica", "Pròx. completa + SSO/SCIM"],
      ["Connectors", "Passarel·les", "Passarel·les", "Zapier + passarel·les", "A mida"],
    ],
  },
];

const discounts = [
  { label: "Pagament anual", value: "–15%", note: "Tots els plans de pagament, per defecte al checkout." },
  { label: "Compromís 2 anys", value: "–25%", note: "Sobre el preu anual, en plans Pro i Enterprise." },
  { label: "Early Adopter", value: "–25% de per vida", note: "Per als primers 20 clients. Fins al 31 des. 2026." },
  { label: "Col·legi professional", value: "–15%", note: "Per a col·legiats de qualsevol col·legi professional." },
];

const faqs = [
  {
    q: "Què passa si supero els models inclosos al meu pla?",
    a: "Res es bloqueja per defecte. Els models addicionals es facturen al preu variable del teu pla (9€/model a Avançat, 5€ a Pro) i s'acumulen a la factura del mes. Reps un avís in-app quan arribes al 200% de l'inclòs —normalment vol dir que pujar de pla et surt més barat—. Pots activar un límit dur opcional si prefereixes no generar extres.",
  },
  {
    q: "Puc canviar de pla en qualsevol moment?",
    a: "Sí. El canvi de pla és immediat i el prorrateig s'ajusta a la factura següent. No hi ha permanència: els plans mensuals es cancel·len quan vulguis i l'anual cobreix el període contractat.",
  },
  {
    q: "Els preus inclouen IVA?",
    a: "Els preus mostrats són sense IVA. S'aplica l'IVA vigent a la factura segons el teu domicili fiscal.",
  },
  {
    q: "Com es factura i quines formes de pagament hi ha?",
    a: "Facturació mensual o anual amb factura electrònica. La quota fixa i el consum variable (models i béns extra) apareixen desglossats per separat a la mateixa factura.",
  },
  {
    q: "En què es diferencien Free i Esencial si comparteixen el pagament per ús?",
    a: "El preu per model i per bé és el mateix en tots dos (15€/model, 2€/bé extra). Esencial afegeix capacitat (més usuaris, expedients i emmagatzematge), els càlculs fiscals (valor mínim, reduccions i bonificacions), la digitalització amb AI, el branding del portal i suport amb SLA.",
  },
  {
    q: "Què cobreix el pla Enterprise?",
    a: "Capacitat i límits a mida, API completa amb SSO/SCIM, SLA i onboarding dedicat. Es dissenya cas a cas: contacta'ns per a una proposta.",
  },
  {
    q: "I el servei de tramitació (Ulpiano Back-Office)?",
    a: "Ulpiano Back-Office és un servei d'outsourcing operatiu que es contracta a part de la subscripció, disponible com a complement per a qualsevol pla (inclòs Free). Té la seva pròpia pàgina i condicions; escriu-nos i te'n passem el detall.",
  },
];

/* =============================================
   CELL RENDER
   ============================================= */
function Cell({ value }: { value: string }) {
  if (value === "✓") {
    return <Check size={18} className="mx-auto text-emerald-600" aria-label="Inclòs" />;
  }
  if (value === "—") {
    return <Minus size={16} className="mx-auto text-slate-300" aria-label="No inclòs" />;
  }
  return <span className="text-[13px] text-slate-600">{value}</span>;
}

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function PreusClientCa() {
  const revealRef = useReveal();
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const fmt = (n: number) => new Intl.NumberFormat("ca-ES").format(n);

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section className="bg-night pt-[calc(64px+4rem)] pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-emerald-500 opacity-[0.12] blur-[120px]" />

        <div className="container relative z-10 text-center max-w-[850px]">
          <div className="flex items-center justify-center gap-3 mb-8 reveal">
            <div className="h-px w-8 bg-emerald-500/50" />
            <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
              Preus
            </span>
            <div className="h-px w-8 bg-emerald-500/50" />
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-6 reveal tracking-tight text-balance"
            style={{ animationDelay: "100ms" }}
          >
            Un pla per a cada fase del teu despatx
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed text-white/60 mb-10 reveal text-balance mx-auto max-w-[640px]"
            style={{ animationDelay: "200ms" }}
          >
            Preus públics i sense permanència. Quota fixa predictible i consum
            variable només quan generes valor. El motor del dret civil i de
            l&apos;ISD, inclòs en tots els plans.
          </p>

        </div>
      </section>

      {/* ═══ TIER CARDS ═══ */}
      <section className="bg-surface py-16 md:py-20 border-b border-slate-200">
        <div className="container">
          <div className="reveal mb-10 flex justify-center">
            <div
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm"
              role="group"
              aria-label="Periodicitat de facturació"
            >
              <button
                type="button"
                onClick={() => setAnnual(false)}
                aria-pressed={!annual}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  !annual ? "bg-night text-white" : "text-slate-500 hover:text-ink"
                }`}
              >
                Mensual
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                aria-pressed={annual}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  annual ? "bg-night text-white" : "text-slate-500 hover:text-ink"
                }`}
              >
                Anual
                <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                  –15%
                </span>
              </button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, i) => {
              const price = annual ? t.annual : t.monthly;
              return (
                <div
                  key={t.id}
                  className={`reveal relative flex flex-col rounded-3xl border bg-white p-8 transition-all ${
                    t.highlight
                      ? "border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/20"
                      : "border-slate-200 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {t.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-ulpiano-green px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                        <Star size={12} className="fill-white" /> Més popular
                      </span>
                    </div>
                  )}

                  <h2 className="text-xl font-bold text-ink">{t.name}</h2>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed min-h-[40px]">
                    {t.tagline}
                  </p>

                  <div className="mt-6 mb-1 flex items-end gap-1">
                    <span className="font-mono text-4xl font-bold text-ink">
                      {price === 0 ? "0€" : `${fmt(price as number)}€`}
                    </span>
                    <span className="mb-1 text-sm text-slate-500">/mes</span>
                  </div>
                  <p className="text-[13px] text-slate-400 min-h-[20px]">
                    {price === 0
                      ? "Gratis, sense targeta"
                      : annual
                        ? "facturat anualment"
                        : "facturat mensualment"}
                  </p>

                  <Link
                    href={t.cta.href}
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-all ${
                      t.highlight
                        ? "bg-ulpiano-green text-white hover:bg-green-light hover:-translate-y-0.5 shadow-btn"
                        : "border border-slate-300 text-ink hover:border-ulpiano-green hover:text-ulpiano-green"
                    }`}
                  >
                    {t.cta.label}
                  </Link>

                  <ul className="mt-8 space-y-3">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-600">
                        <Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Enterprise strip */}
          <div className="reveal mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-night p-8 text-white md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold">Enterprise</h2>
              <p className="mt-1 text-sm text-white/60 max-w-xl">
                Capacitat i límits a mida, API completa amb SSO/SCIM, SLA i
                onboarding dedicat. Per a grups, xarxes de despatxos i notaries
                amb volum.
              </p>
            </div>
            <Link
              href="/ca/contacte"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-night"
            >
              Contactar vendes <ArrowRight size={16} />
            </Link>
          </div>

          <p className="reveal mt-6 text-center text-[13px] text-slate-500">
            Preus sense IVA. El motor de càlcul de l&apos;ISD i del dret civil
            està inclòs en tots els plans, sense excepcions.
          </p>
        </div>
      </section>

      {/* ═══ VARIABLE PRICING ═══ */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-200">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-10">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Consum variable
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">
              Pagues més només quan produeixes més
            </h2>
          </div>

          <div className="reveal overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="px-5 py-4 font-semibold text-slate-600">Pla</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Models inclosos/mes</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Model extra</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Béns inclosos/model</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Bé extra</th>
                </tr>
              </thead>
              <tbody>
                {variableRows.map((r) => (
                  <tr key={r.tier} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-medium text-ink">{r.tier}</td>
                    <td className="px-5 py-4 text-slate-600">{r.incl}</td>
                    <td className="px-5 py-4 text-slate-600">{r.extra}</td>
                    <td className="px-5 py-4 text-slate-600">{r.bienes}</td>
                    <td className="px-5 py-4 text-slate-600">{r.bienExtra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="reveal mt-4 text-[13px] text-slate-500">
            El consum variable s&apos;acumula durant el mes i es factura per
            separat de la quota.
          </p>
        </div>
      </section>

      {/* ═══ FULL-FEATURE COMPARATOR ═══ */}
      <section className="bg-surface py-16 md:py-20 border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center mb-10">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Comparativa completa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Tot el que inclou cada pla
            </h2>
          </div>

          <div className="reveal overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead className="sticky top-0">
                <tr className="bg-night text-white">
                  <th className="px-5 py-4 text-left font-semibold w-[34%]">Funcionalitat</th>
                  <th className="px-3 py-4 text-center font-semibold">Free</th>
                  <th className="px-3 py-4 text-center font-semibold">Esencial</th>
                  <th className="px-3 py-4 text-center font-semibold">
                    Avançat <span className="text-emerald-300">★</span>
                  </th>
                  <th className="px-3 py-4 text-center font-semibold">Pro</th>
                  <th className="px-3 py-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureGroups.map((g) => (
                  <FeatureGroup key={g.group} group={g.group} rows={g.rows} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ DISCOUNTS ═══ */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-200">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-10">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Descomptes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Maneres de pagar menys
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {discounts.map((d, i) => (
              <div
                key={d.label}
                className="reveal rounded-2xl border border-slate-200 p-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-ink">{d.label}</span>
                  <span className="font-mono text-lg font-bold text-ulpiano-green">
                    {d.value}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{d.note}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-6 text-center text-[13px] text-slate-400">
            No fem servir cupons públics ni Black Friday: el preu és seriós i
            estable tot l&apos;any.
          </p>
        </div>
      </section>

      {/* ═══ BACK-OFFICE / PARTNERS CALLOUT ═══ */}
      <section className="bg-surface py-16 md:py-20 border-b border-slate-200">
        <div className="container max-w-[900px]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="reveal rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Ulpiano Back-Office</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Servei de tramitació digitalitzada d&apos;extrem a extrem. Tu
                captes i signes; nosaltres tramitem. Complement per a qualsevol
                pla, amb preu majorista i PVP suggerit per al teu despatx.
              </p>
              <p className="mt-4 font-mono text-sm text-ink">des de 850€/paquet</p>
              <Link
                href="/ca/contacte"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ulpiano-green hover:text-green-light"
              >
                Sol·licitar informació <ArrowRight size={15} />
              </Link>
            </div>
            <div className="reveal rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Programa Partners</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Funeràries, asseguradores i banca privada: model de revenue
                share o llicència de plataforma amb paquet Back-Office adaptat.
              </p>
              <Link
                href="/ca/contacte"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ulpiano-green hover:text-green-light"
              >
                Parlar amb l&apos;equip <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-[760px]">
          <div className="reveal text-center mb-10">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Preguntes freqüents
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Dubtes sobre preus i plans
            </h2>
          </div>

          <div className="reveal divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-ink">{f.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-night py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(45,106,79,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 text-center max-w-[680px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            Prova-ho amb un expedient real
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Comença gratis o reserva una demo de 25 minuts sobre la plataforma,
            amb un cas real aplicat en directe.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/ca/demo"
              className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]"
            >
              Reserva la teva demo
            </Link>
            <Link
              href="/ca/contacte"
              className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20"
            >
              Parlar amb vendes <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureGroup({
  group,
  rows,
}: {
  group: string;
  rows: [string, string, string, string, string][];
}) {
  return (
    <>
      <tr>
        <td
          colSpan={6}
          className="bg-surface px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500"
        >
          {group}
        </td>
      </tr>
      {rows.map((r) => (
        <tr key={r[0]} className="border-t border-slate-100">
          <td className="px-5 py-3 text-[14px] text-ink">{r[0]}</td>
          <td className="px-3 py-3 text-center"><Cell value={r[1]} /></td>
          <td className="px-3 py-3 text-center"><Cell value={r[2]} /></td>
          <td className="px-3 py-3 text-center bg-emerald-50/40"><Cell value={r[3]} /></td>
          <td className="px-3 py-3 text-center"><Cell value={r[4]} /></td>
          <td className="px-3 py-3 text-center"><Cell value="A mida" /></td>
        </tr>
      ))}
    </>
  );
}
