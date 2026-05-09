import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNav } from "@/components/modelos/ModelNav";
import { Modelo660InteractiveShells } from "./Modelo660Client";

export const metadata: Metadata = {
  title: "Modelo 660 Cataluña: Declaración de Sucesiones e Inventario de Bienes | Ulpiano",
  description: "Guía completa del Modelo 660: declaración del inventario de bienes, derechos y deudas del causante. Qué incluye, documentación necesaria, plazo de 6 meses y cómo Ulpiano lo genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-660",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-660",
      ca: "https://ulpiano.es/ca/models/model-660",
    },
  },
};

/* ─── Static data ─── */

const summaryTable = [
  { field: "Denominación oficial", value: "Declaración del Impuesto sobre Sucesiones — Inventario de Bienes" },
  { field: "Base legal estatal", value: "Art. 31 Ley 29/1987 (LISD) + Arts. 37-38 RD 1629/1991 (RISD)" },
  { field: "Hecho imponible", value: "No es autoliquidación — declara el inventario patrimonial del causante" },
  { field: "Presentación", value: "Un único Modelo 660 por sucesión (no uno por heredero)" },
  { field: "Plazo", value: "6 meses desde el fallecimiento (prorrogable 6 meses más)" },
  { field: "Administración competente", value: "CA de residencia habitual del causante (ATC en Catalunya)" },
  { field: "Acompaña a", value: "Modelo 650 (Autoliquidación individual de cada heredero)" },
];

const faqs = [
  { q: "¿Cuál es la diferencia entre el Modelo 660 y el Modelo 650?", a: "El Modelo 660 es la declaración del inventario patrimonial: enumera todos los bienes, derechos y deudas del causante. No contiene cálculo tributario. El Modelo 650 es la autoliquidación individual donde cada heredero calcula su cuota. Se presentan conjuntamente: un único 660 con tantos 650 como herederos." },
  { q: "¿Se presenta un Modelo 660 por cada heredero?", a: "No. A diferencia del Modelo 650, el Modelo 660 es único por sucesión. El inventario patrimonial es común a todos los herederos — lo que varía entre ellos es la cuota tributaria, que se recoge en su Modelo 650 individual." },
  { q: "¿Qué ocurre si un bien no se incluye en el Modelo 660?", a: "Si la Administración detecta bienes no declarados, puede iniciar un procedimiento de comprobación de valores (Art. 34 LISD) y practicar una liquidación complementaria con recargos e intereses. Es fundamental que el inventario sea exhaustivo." },
  { q: "¿Cómo se valora el ajuar doméstico?", a: "El Art. 15 de la LISD establece una presunción del 3% del caudal relicto como valor del ajuar doméstico. Este porcentaje se aplica automáticamente salvo que se demuestre un valor inferior (por ejemplo, si el causante vivía de alquiler y no tenía enseres significativos) o superior." },
  { q: "¿Qué deudas son deducibles en el Modelo 660?", a: "Son deducibles las deudas del causante acreditadas documentalmente a la fecha de fallecimiento: hipotecas pendientes, préstamos, deudas tributarias, gastos de última enfermedad y gastos de entierro y funeral. La carga de la prueba corresponde al contribuyente." },
  { q: "¿Puede Ulpiano generar el Modelo 660 automáticamente?", a: "Sí. Ulpiano toma el inventario patrimonial del expediente sucesorio — con cada bien ya categorizado y valorado — y genera el Modelo 660 completo. El mismo inventario alimenta los Modelos 650 de cada heredero. Sin duplicar datos ni transcribir formularios." },
];

const contentCards = [
  { title: "Bienes inmuebles", desc: "Pisos, casas, fincas rústicas, locales comerciales, garajes y trasteros. Se incluye el valor catastral y el valor de mercado." },
  { title: "Bienes muebles y activos financieros", desc: "Cuentas bancarias, valores, fondos de inversión, seguros, vehículos, joyas y objetos de arte." },
  { title: "Derechos y participaciones", desc: "Participaciones en sociedades, derechos de crédito, usufructos activos y cualquier derecho económico transmisible." },
  { title: "Deudas deducibles", desc: "Hipotecas pendientes, préstamos, deudas tributarias, gastos de última enfermedad y gastos de entierro y funeral." },
];

const relatedModels = [
  { number: "650", name: "Autoliquidación individual", relation: "Cada heredero presenta su Modelo 650", href: "/modelos/modelo-650" },
  { number: "651", name: "Donaciones", relation: "Si la transmisión es inter vivos, no mortis causa", href: "/modelos/modelo-651" },
  { number: "652", name: "Seguros de Vida", relation: "Si el beneficiario del seguro tributa aparte", href: "/modelos/modelo-652" },
  { number: "653", name: "Consolidación de Dominio", relation: "Cuando se extingue el usufructo constituido", href: "/modelos/modelo-653" },
];

export default function Modelo660Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 660", href: "/modelos/modelo-660" },
        ]}
      />

      {/* FAQPage schema — SSR, visible a Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO (SSR) ── */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" className="mono" style={{ position: "absolute", top: 40, right: 40, fontSize: 160, fontWeight: 700, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          660
        </div>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: "var(--space-3)" }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, padding: 0, margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              <li>
                <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/modelos" style={{ color: "inherit", textDecoration: "none" }}>
                  Modelos
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Modelo 660</li>
            </ol>
          </nav>

          <ModelNav active="660" />

          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)" }}>
            MODELO FISCAL
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)" }}>
            Modelo 660: Declaración de Sucesiones (Inventario de Bienes)
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)" }}>
            El Modelo 660 es la declaración que acompaña al Modelo 650: recoge el inventario completo de bienes, derechos y deudas deducibles del causante. No es una autoliquidación — no calcula cuota tributaria — sino el soporte documental que fundamenta la liquidación de cada heredero.
          </p>
          <div style={{ marginTop: "var(--space-4)" }}>
            <span style={{ display: "inline-block", background: "rgba(45,106,79,0.15)", color: "var(--green-light)", fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 6 }}>
              Normativa: Art. 31 LISD + Llei 19/2010, del 7 de juny
            </span>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES (SSR) ── */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DEFINICIÓN
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560 }}>
            ¿Qué es el Modelo 660?
          </h2>
          <div style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7 }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El Modelo 660 es la declaración del inventario patrimonial del causante en materia de Impuesto sobre Sucesiones. A diferencia de otros modelos fiscales, el 660 no es una autoliquidación — no contiene cálculos de cuotas tributarias — sino un listado exhaustivo y ordenado de todos los bienes, derechos y deudas que formaban el patrimonio del causante a la fecha de su fallecimiento.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El inventario es el soporte documental fundamental sobre el que se asienta la liquidación tributaria. Cada heredero lo toma como base para cumplimentar su Modelo 650 individual, donde calcula su cuota según el valor de los bienes que le corresponden y su base imponible personal.
            </p>
          </div>

          {/* Summary table — SSR */}
          <div style={{ marginTop: "var(--space-10)" }}>
            <div style={{ background: "var(--surface)", borderRadius: 12, overflow: "hidden", border: "1px solid var(--mist)" }}>
              {summaryTable.map((row, i) => (
                <div key={row.field} className="mod-summary-row" style={{ borderTop: i > 0 ? "1px solid var(--mist)" : "none" }}>
                  <div className="mod-summary-field">{row.field}</div>
                  <div className="mod-summary-value">{row.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight warning */}
          <div style={{ marginTop: "var(--space-10)", background: "var(--surface)", border: "1px solid rgba(180,83,9,0.2)", borderLeft: "4px solid var(--ulpiano-green)", borderRadius: 12, padding: "var(--space-6)" }}>
            <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              ⚠ A diferencia del Modelo 650, se presenta UN ÚNICO Modelo 660 por sucesión, independientemente del número de herederos.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO (SSR) ── */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            CONTENIDO
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 520 }}>
            Qué incluye el inventario del Modelo 660
          </h2>
          <div className="mod-obligados-grid" style={{ marginTop: "var(--space-10)" }}>
            {contentCards.map((card) => (
              <div key={card.title} className="card">
                <h3 style={{ marginBottom: "var(--space-3)" }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CON ULPIANO (SSR) ── */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            AUTOMATIZACIÓN
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600 }}>
            El inventario del expediente, convertido en Modelo 660
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)" }}>
            Introduces los datos del expediente una vez. Ulpiano genera el Modelo 660 con todos los campos completados.
          </p>
          <div style={{ marginTop: "var(--space-10)" }}>
            {[
              { title: "Un inventario único, coherente para todos los herederos", desc: "Ulpiano toma cada bien del expediente sucesorio — ya categorizado y valorado — y lo vierte en el formato del Modelo 660. No hay duplicación de datos." },
              { title: "El mismo inventario alimenta los Modelos 650 individuales", desc: "El motor fiscal genera automáticamente un Modelo 650 por heredero tomando como base el inventario patrimonial del 660, manteniendo total coherencia entre documentos." },
              { title: "Sin transcripción manual, sin errores", desc: "Todas las transferencias de datos se realizan automáticamente desde el expediente al Modelo 660 y de ahí a los Modelos 650, eliminando errores de trascripción y acelerando la presentación." },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom: "var(--space-8)" }}>
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 2, color: "var(--ulpiano-green)", fontSize: 18 }}>
                    ✓
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
              <Link href="/demo" className="btn-primary">
                Solicita una demo
              </Link>
              <Link href="/soluciones/planificacion-sucesoria" className="btn-ghost btn-ghost--dark">
                Ver planificación sucesoria →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (interactive islands via Client Component) ── */}
      <Modelo660InteractiveShells faqs={faqs} />

      {/* ── MODELOS RELACIONADOS (SSR) ── */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            MODELOS RELACIONADOS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560 }}>
            Otros modelos del Impuesto sobre Sucesiones y Donaciones
          </h2>
          <div className="mod-related-grid" style={{ marginTop: "var(--space-10)" }}>
            {relatedModels.map((m) => (
              <Link key={m.number} href={m.href} className="card" style={{ textDecoration: "none", display: "block" }}>
                <span className="mono" style={{ fontSize: 36, fontWeight: 700, color: "var(--ulpiano-green)", lineHeight: 1 }}>
                  {m.number}
                </span>
                <h3 style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-2)" }}>{m.name}</h3>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>{m.relation}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL (SSR) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--white)", maxWidth: 640, margin: "0 auto" }}>
            El inventario del expediente, convertido en Modelo 660. Sin rellenar formularios.
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0" }}>
            Solicita una demo y comprueba cómo Ulpiano genera el inventario patrimonial completo desde los datos del expediente sucesorio.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-10)",
              flexWrap: "wrap",
            }}
          >
            <Link href="/demo" className="btn-primary">
              Solicita una demo
            </Link>
            <Link href="/soluciones/planificacion-sucesoria" className="btn-ghost">
              Ver planificación sucesoria →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Shared scoped styles ── */}
    </>
  );
}
