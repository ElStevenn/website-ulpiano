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
   DATA — fuente: Ulpiano_Pricing_Packaging_v1 (v1.1)
   ============================================= */
type Tier = {
  id: string;
  name: string;
  monthly: number | null; // null = a medida
  annual: number | null; // €/mes equivalente con -15%
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
    tagline: "Para conocer la plataforma con un expediente real.",
    cta: { label: "Empieza gratis", href: "/demo" },
    bullets: [
      "1 usuario · 1 expediente activo",
      "Inventario, árbol familiar y activos digitales",
      "Modelos AEAT en pago por uso (15€/modelo)",
      "5 GB de almacenamiento",
    ],
  },
  {
    id: "esencial",
    name: "Esencial",
    monthly: 199,
    annual: 169,
    tagline: "Para el despacho que empieza a digitalizar herencias.",
    cta: { label: "Empieza la prueba", href: "/demo" },
    bullets: [
      "2 usuarios · 5 expedientes activos",
      "Cálculos fiscales: valor mínimo, reducciones y bonificaciones",
      "Digitalización con extracción AI",
      "Branding del portal · soporte 48-72h",
    ],
  },
  {
    id: "avanzado",
    name: "Avanzado",
    monthly: 449,
    annual: 382,
    tagline: "Diseñado para el despacho boutique: 20-100 expedientes/año.",
    highlight: true,
    cta: { label: "Empieza la prueba", href: "/demo" },
    bullets: [
      "5 usuarios · 15 expedientes activos",
      "20 modelos AEAT/mes incluidos",
      "Comprensión documental AI · white-label",
      "Escenarios en 1 click y API básica (próx.)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 999,
    annual: 849,
    tagline: "Para asesorías de volumen y despachos consolidados.",
    cta: { label: "Empieza la prueba", href: "/demo" },
    bullets: [
      "10 usuarios · 50 expedientes activos",
      "50 modelos AEAT/mes incluidos",
      "White-label con dominio propio · soporte dedicado",
      "API completa con SSO/SCIM (próx.)",
    ],
  },
];

const variableRows = [
  { tier: "Free", incl: "0", extra: "15€", bienes: "5", bienExtra: "2€" },
  { tier: "Esencial", incl: "0", extra: "15€", bienes: "5", bienExtra: "2€" },
  { tier: "Avanzado", incl: "20", extra: "9€", bienes: "10", bienExtra: "1€" },
  { tier: "Pro", incl: "50", extra: "5€", bienes: "20", bienExtra: "0,50€" },
];

const featureGroups: { group: string; rows: [string, string, string, string, string][] }[] = [
  {
    group: "General",
    rows: [
      ["Branding personalizado (portal)", "—", "—", "✓", "white-label + dominio"],
      ["Portal del cliente", "—", "—", "✓ brandable", "white-label"],
      ["Colaboración con partners", "—", "—", "✓", "✓"],
      ["Sistema de notificaciones", "✓", "✓", "✓", "✓"],
      ["Almacenamiento", "5 GB", "50 GB", "250 GB", "500 GB"],
      ["Soporte (SLA)", "Comunidad", "48-72h", "24-48h prio.", "Dedicado"],
    ],
  },
  {
    group: "Ulpiano IA",
    rows: [
      ["Asistente conversacional", "—", "—", "Próx. sept.", "Próx. sept."],
      ["Digitalización — extracción", "—", "✓", "✓", "✓"],
      ["Digitalización — comprensión", "—", "—", "✓", "✓"],
      ["Generación de documentos sucesorios", "—", "Próx.", "Próx.", "Próx."],
    ],
  },
  {
    group: "Gestión patrimonial",
    rows: [
      ["Inventario de bienes", "✓", "✓", "✓", "✓"],
      ["Registro de deudas", "✓", "✓", "✓", "✓"],
      ["Documentos por bien (adjuntos)", "✓", "✓", "✓", "✓"],
      ["Activos digitales", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    group: "Planificación sucesoria",
    rows: [
      ["Árbol familiar (visual)", "✓", "✓", "✓", "✓"],
      ["Títulos e instituciones sucesorias", "✓", "✓", "✓", "✓"],
      ["Escenarios de planificación", "1/exped.", "3/exped.", "6/exped.", "12/exped."],
      ["Crear escenarios en 1 click", "—", "—", "Próx.", "Próx."],
      ["Comparador de escenarios", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    group: "Fiscalidad de la herencia",
    rows: [
      ["Cálculo valor fiscal mínimo inmuebles", "—", "✓", "✓", "✓"],
      ["Detalle de reducciones fiscales", "—", "✓", "✓", "✓"],
      ["Detalle de bonificaciones fiscales", "—", "✓", "✓", "✓"],
      ["Modelo S05 — Solicitud de prórroga", "Pago/uso", "Pago/uso", "20/mes incl.", "50/mes incl."],
      ["Modelo 660 — Relación de inventario", "Pago/uso", "Pago/uso", "20/mes incl.", "50/mes incl."],
      ["Modelo 650 — Declarar herencia", "Pago/uso", "Pago/uso", "20/mes incl.", "50/mes incl."],
      ["Modelo 651 — Declarar donación", "Pago/uso", "Pago/uso", "20/mes incl.", "50/mes incl."],
      ["Modelo 652 — Declarar seguro de vida", "Pago/uso", "Pago/uso", "20/mes incl.", "50/mes incl."],
      ["Cálculo de plusvalía municipal", "—", "—", "Próx.", "Próx."],
    ],
  },
  {
    group: "Integraciones / API / Seguridad",
    rows: [
      ["API (endpoints)", "—", "—", "Próx. básica", "Próx. completa + SSO/SCIM"],
      ["Conectores", "Pasarelas", "Pasarelas", "Zapier + pasarelas", "A medida"],
    ],
  },
];

const discounts = [
  { label: "Pago anual", value: "–15%", note: "Todos los planes de pago, por defecto en el checkout." },
  { label: "Compromiso 2 años", value: "–25%", note: "Sobre el precio anual, en planes Pro y Enterprise." },
  { label: "Early Adopter", value: "–25% de por vida", note: "Para los primeros 20 clientes. Hasta el 31 dic 2026." },
  { label: "Colegio profesional", value: "–15%", note: "Para colegiados de cualquier colegio profesional." },
];

const faqs = [
  {
    q: "¿Qué pasa si supero los modelos incluidos en mi plan?",
    a: "Nada se bloquea por defecto. Los modelos adicionales se facturan al precio variable de tu plan (9€/modelo en Avanzado, 5€ en Pro) y se acumulan en la factura del mes. Recibes un aviso in-app cuando llegas al 200% de lo incluido —normalmente significa que upgradear te sale más barato—. Puedes activar un límite duro opcional si prefieres no generar extras.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí. El cambio de plan es inmediato y el prorrateo se ajusta en la siguiente factura. No hay permanencia: los planes mensuales se cancelan cuando quieras y el anual cubre el periodo contratado.",
  },
  {
    q: "¿Los precios incluyen IVA?",
    a: "Los precios mostrados son sin IVA. Se aplica el IVA vigente en la factura según tu domicilio fiscal.",
  },
  {
    q: "¿Cómo se factura y qué formas de pago hay?",
    a: "Facturación mensual o anual con factura electrónica. La cuota fija y el consumo variable (modelos y bienes extra) aparecen desglosados por separado en la misma factura.",
  },
  {
    q: "¿En qué se diferencian Free y Esencial si comparten el pago por uso?",
    a: "El precio por modelo y por bien es el mismo en ambos (15€/modelo, 2€/bien extra). Esencial añade capacidad (más usuarios, expedientes y almacenamiento), los cálculos fiscales (valor mínimo, reducciones y bonificaciones), la digitalización con AI, el branding del portal y soporte con SLA.",
  },
  {
    q: "¿Qué cubre el plan Enterprise?",
    a: "Capacidad y límites a medida, API completa con SSO/SCIM, SLA y onboarding dedicado. Se diseña caso a caso: contáctanos para una propuesta.",
  },
  {
    q: "¿Y el servicio de tramitación (Ulpiano Back-Office)?",
    a: "Ulpiano Back-Office es un servicio de outsourcing operativo que se contrata aparte de la suscripción, disponible como complemento para cualquier plan (incluido Free). Tiene su propia página y condiciones; escríbenos y te pasamos el detalle.",
  },
];

/* =============================================
   CELL RENDER
   ============================================= */
function Cell({ value }: { value: string }) {
  if (value === "✓") {
    return <Check size={18} className="mx-auto text-emerald-600" aria-label="Incluido" />;
  }
  if (value === "—") {
    return <Minus size={16} className="mx-auto text-slate-300" aria-label="No incluido" />;
  }
  return <span className="text-[13px] text-slate-600">{value}</span>;
}

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function PreciosClient() {
  const revealRef = useReveal();
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const fmt = (n: number) => new Intl.NumberFormat("es-ES").format(n);

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
              Precios
            </span>
            <div className="h-px w-8 bg-emerald-500/50" />
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-6 reveal tracking-tight text-balance"
            style={{ animationDelay: "100ms" }}
          >
            Un plan para cada fase de tu despacho
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed text-white/60 mb-10 reveal text-balance mx-auto max-w-[640px]"
            style={{ animationDelay: "200ms" }}
          >
            Precios públicos y sin permanencia. Cuota fija predecible y consumo
            variable solo cuando generas valor. El motor del derecho civil
            y del ISD, incluido en todos los planes.
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
              aria-label="Periodicidad de facturación"
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
                        <Star size={12} className="fill-white" /> Más popular
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
                      ? "Gratis, sin tarjeta"
                      : annual
                        ? "facturado anualmente"
                        : "facturado mensualmente"}
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
          <div
            className="reveal mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-night p-8 text-white md:flex-row md:items-center"
          >
            <div>
              <h2 className="text-xl font-bold">Enterprise</h2>
              <p className="mt-1 text-sm text-white/60 max-w-xl">
                Capacidad y límites a medida, API completa con SSO/SCIM, SLA y
                onboarding dedicado. Para grupos, redes de despachos y notarías
                con volumen.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-night"
            >
              Contactar ventas <ArrowRight size={16} />
            </Link>
          </div>

          <p className="reveal mt-6 text-center text-[13px] text-slate-500">
            Precios sin IVA. El motor de cálculo del ISD y del derecho civil
            está incluido en todos los planes, sin excepciones.
          </p>
        </div>
      </section>

      {/* ═══ VARIABLE PRICING ═══ */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-200">
        <div className="container max-w-[900px]">
          <div className="reveal text-center mb-10">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Consumo variable
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">
              Pagas más solo cuando produces más
            </h2>
          </div>

          <div className="reveal overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="px-5 py-4 font-semibold text-slate-600">Plan</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Modelos incluidos/mes</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Modelo extra</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Bienes incluidos/modelo</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">Bien extra</th>
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
            El consumo variable se acumula durante el mes y se factura por
            separado de la cuota.
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
              Todo lo que incluye cada plan
            </h2>
          </div>

          <div className="reveal overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead className="sticky top-0">
                <tr className="bg-night text-white">
                  <th className="px-5 py-4 text-left font-semibold w-[34%]">Funcionalidad</th>
                  <th className="px-3 py-4 text-center font-semibold">Free</th>
                  <th className="px-3 py-4 text-center font-semibold">Esencial</th>
                  <th className="px-3 py-4 text-center font-semibold">
                    Avanzado <span className="text-emerald-300">★</span>
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
              Descuentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Formas de pagar menos
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
            No usamos cupones públicos ni Black Friday: el precio es serio y
            estable todo el año.
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
                Servicio de tramitación digitalizada de extremo a extremo. Tú
                captas y firmas; nosotros tramitamos. Complemento para cualquier
                plan, con precio mayorista y PVP sugerido para tu despacho.
              </p>
              <p className="mt-4 font-mono text-sm text-ink">desde 850€/paquete</p>
              <Link
                href="/contacto"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ulpiano-green hover:text-green-light"
              >
                Solicitar información <ArrowRight size={15} />
              </Link>
            </div>
            <div className="reveal rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Programa Partners</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Funerarias, aseguradoras y banca privada: modelo de revenue
                share o licencia de plataforma con paquete Back-Office adaptado.
              </p>
              <Link
                href="/contacto"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ulpiano-green hover:text-green-light"
              >
                Hablar con el equipo <ArrowRight size={15} />
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
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Dudas sobre precios y planes
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
            Pruébalo con un expediente real
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Empieza gratis o reserva una demo de 25 minutos sobre la plataforma,
            con un caso real aplicado en directo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/demo"
              className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]"
            >
              Reserva tu demo
            </Link>
            <Link
              href="/contacto"
              className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20"
            >
              Hablar con ventas <ArrowRight size={18} className="ml-2 inline" />
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
          <td className="px-3 py-3 text-center"><Cell value="A medida" /></td>
        </tr>
      ))}
    </>
  );
}
