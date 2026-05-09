import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNav } from "@/components/modelos/ModelNav";
import { Modelo653InteractiveShells } from "./Modelo653Client";

export const metadata: Metadata = {
  title: "Modelo 653 Cataluña: Consolidación de Dominio y Extinción de Usufructo | Ulpiano",
  description: "Guía completa del Modelo 653: qué es, cuándo se presenta, causas de extinción del usufructo, cálculo de la cuota complementaria (Art. 26.c LISD) y cómo Ulpiano simula la consolidación antes de constituir el usufructo.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-653",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-653",
      ca: "https://ulpiano.es/ca/models/model-653",
    },
  },
};

const summaryTable = [
  { field: "Denominación oficial", value: "Autoliquidación del ISD — Consolidación de dominio" },
  { field: "Base legal estatal", value: "Art. 26.c) Ley 29/1987 (LISD) + Art. 51.2 RD 1629/1991 (RISD)" },
  { field: "Hecho imponible", value: "Extinción del usufructo y consolidación del pleno dominio en el nudo propietario" },
  { field: "Sujeto pasivo", value: "Nudo propietario que consolida el pleno dominio" },
  { field: "Plazo", value: "6 meses desde la extinción del usufructo" },
  { field: "Administración competente", value: "CA donde se presentó el Modelo 650 original" },
  { field: "Modelo previo", value: "Modelo 650 (autoliquidación por nuda propiedad)" },
];

const faqs = [
  {
    q: "¿Cuándo nace la obligación de presentar el Modelo 653?",
    a: "La obligación nace cuando se extingue el usufructo que fue constituido en la sucesión. La causa más habitual es el fallecimiento del usufructuario (cónyuge viudo). El plazo es de 6 meses desde la fecha de extinción, igual que en el Modelo 650.",
  },
  {
    q: "¿Cómo se calcula la cuota del Modelo 653?",
    a: "Se calcula la cuota que correspondería al pleno dominio del bien aplicando las normas vigentes en el momento de la desmembración original (fallecimiento del primer causante), y se resta la cuota que ya se ingresó por la nuda propiedad en el Modelo 650. La diferencia es la cuota complementaria.",
  },
  {
    q: "¿Se aplican las normas del momento de la consolidación o del momento del fallecimiento original?",
    a: "Se aplican las normas y tipos vigentes en el momento del desmembramiento original (el fallecimiento que generó el Modelo 650), no las del momento de la consolidación. Sin embargo, la edad del usufructuario en el momento de la extinción puede afectar al cálculo de la valoración del usufructo.",
  },
  {
    q: "¿Qué ocurre si no se presentó correctamente el Modelo 650 en su momento?",
    a: "La presentación del Modelo 653 puede revelar inconsistencias con la autoliquidación original. Si la nuda propiedad no se liquidó correctamente, la Administración puede regularizar ambas liquidaciones. Es recomendable revisar el expediente original antes de presentar el 653.",
  },
  {
    q: "¿Puede Ulpiano simular la consolidación antes de que se extinga el usufructo?",
    a: "Sí. Ulpiano permite ejecutar una simulación prospectiva: calcula la cuota complementaria que deberá pagar el nudo propietario cuando se produzca la consolidación, antes de que ocurra. Esto permite al profesional planificar la carga fiscal total de la operación sucesoria desde el inicio.",
  },
];

export default function Modelo653Page() {
  return (
    <main>
      
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 653", href: "/modelos/modelo-653" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <section style={{ background: "var(--night)", color: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "var(--space-6)" }}>
            <a href="/modelos" style={{ fontSize: "14px", color: "var(--mist)", textDecoration: "none" }}>
              Modelos fiscales
            </a>
          </div>
          <ModelNav active="653" />
          <div style={{ marginTop: "var(--space-8)" }}>
            <div className="eyebrow" style={{ color: "var(--mist)", marginBottom: "var(--space-4)" }}>
              MODELO FISCAL
            </div>
            <h1 className="h1" style={{ color: "var(--white)", marginBottom: "var(--space-6)" }}>
              Modelo 653: Consolidación de Dominio
            </h1>
            <p className="body-lg" style={{ maxWidth: 640, color: "var(--mist)", marginBottom: "var(--space-6)" }}>
              El Modelo 653 es la autoliquidación complementaria que el nudo propietario debe presentar cuando se extingue el usufructo
              y consolida el pleno dominio sobre los bienes heredados. Es el cierre fiscal de una sucesión con desmembramiento del dominio.
            </p>
            <div style={{ display: "inline-block", padding: "var(--space-3) var(--space-4)", background: "var(--warning-bg)", borderRadius: "6px", fontSize: "13px", color: "var(--warning)" }}>
              Normativa: Art. 26.c) LISD + Art. 51.2 RISD
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DEFINICIÓN
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            ¿Qué es el Modelo 653?
          </h2>
          <div style={{ marginTop: "var(--space-8)" }}>
            {summaryTable.map((row) => (
              <div key={row.field} className="mod-summary-row">
                <div className="mod-summary-field">{row.field}</div>
                <div className="mod-summary-value">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            SUPUESTOS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            ¿Cuándo se extingue el usufructo?
          </h2>
          <div className="mod-obligados-grid">
            <div>
              <h3>Fallecimiento del usufructuario</h3>
              <p>La causa más habitual. El usufructo del cónyuge viudo se extingue con su fallecimiento y los hijos nudos propietarios consolidan el pleno dominio.</p>
            </div>
            <div>
              <h3>Renuncia del usufructuario</h3>
              <p>Acto jurídico voluntario formalizado en escritura pública. La consolidación se produce en el momento de la renuncia.</p>
            </div>
            <div>
              <h3>Vencimiento del plazo o cumplimiento de condición</h3>
              <p>Si el usufructo fue constituido por tiempo determinado o condición, la consolidación opera al cumplirse el término o condición.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            CÁLCULO
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            La cuota complementaria del Modelo 653
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-8)", maxWidth: 720 }}>
            El cálculo del Modelo 653 se basa en determinar la diferencia entre lo que correspondería tributar por el pleno dominio en el momento
            original del fallecimiento y lo ya ingresado por la nuda propiedad. Esta cuota complementaria representa el valor fiscal del usufructo
            que se extingue.
          </p>
          <div className="mod-calc-steps">
            <div className="mod-calc-step">
              <div className="mod-calc-step-num">Paso 1</div>
              <div className="mod-calc-step-text">
                Calcular la cuota del pleno dominio aplicando las normas vigentes en el momento del desmembramiento original (fallecimiento del primer
                causante).
              </div>
            </div>
            <div className="mod-calc-step">
              <div className="mod-calc-step-num">Paso 2</div>
              <div className="mod-calc-step-text">
                Restar la cuota ya ingresada por la nuda propiedad en el Modelo 650 original. La diferencia es la cuota complementaria a ingresar.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Con Ulpiano
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-6)", maxWidth: 640 }}>
            Ulpiano permite simular la consolidación del dominio antes de que se produzca la extinción del usufructo. Calcula la cuota complementaria
            prospectivamente, permitiendo al profesional planificar la carga fiscal total desde la constitución del usufructo y comparar escenarios
            sucesorios.
          </p>
          <ul style={{ marginBottom: "var(--space-8)", paddingLeft: "var(--space-6)" }}>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Simulación prospectiva: calcula el Modelo 653 antes de que se extinga el usufructo.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Comparación de escenarios: evalúa distintas causas de extinción (fallecimiento, renuncia, vencimiento) y su impacto fiscal.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Integración con el Modelo 650: conecta la nuda propiedad original con la consolidación posterior.
            </li>
          </ul>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Ver demo
            </a>
            <a href="/soluciones/planificacion-sucesoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--ink)" }}>
              Ver planificación
            </a>
          </div>
        </div>
      </section>

      <Modelo653InteractiveShells faqs={faqs} />

      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Otros modelos relacionados
          </h2>
          <div className="mod-related-grid">
            <a href="/modelos/modelo-650" style={{ display: "block" }}>
              <h4>Modelo 650</h4>
              <p>Autoliquidación por herencia de bienes y derechos del caudal relicto.</p>
            </a>
            <a href="/modelos/modelo-660" style={{ display: "block" }}>
              <h4>Modelo 660</h4>
              <p>Inventario de bienes y derechos que integran el caudal hereditario.</p>
            </a>
            <a href="/modelos/modelo-651" style={{ display: "block" }}>
              <h4>Modelo 651</h4>
              <p>Autoliquidación por donación de bienes y derechos entre vivos.</p>
            </a>
            <a href="/modelos/modelo-652" style={{ display: "block" }}>
              <h4>Modelo 652</h4>
              <p>Autoliquidación de seguros de vida en sucesiones.</p>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--night)", color: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--white)", marginBottom: "var(--space-6)", maxWidth: 640 }}>
            El coste fiscal del usufructo, calculado antes de constituirlo.
          </h2>
          <p className="body-lg" style={{ color: "var(--mist)", marginBottom: "var(--space-8)", maxWidth: 640 }}>
            Solicita una demo y comprueba cómo Ulpiano simula la consolidación de dominio y compara escenarios sucesorios antes de tomar decisiones.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Solicita demo
            </a>
            <a href="/soluciones/planificacion-sucesoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--white)" }}>
              Ver planificación
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
