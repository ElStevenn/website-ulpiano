import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNav } from "@/components/modelos/ModelNav";
import { Modelo652InteractiveShells } from "./Modelo652Client";

export const metadata: Metadata = {
  title: "Modelo 652 Cataluña: Tributación de Seguros de Vida en Sucesiones | Ulpiano",
  description: "Guía completa del Modelo 652: tributación del capital de seguros de vida cuando el beneficiario no es el tomador, plazo de 6 meses, reducciones catalanas (Llei 19/2010) y cómo Ulpiano lo genera automáticamente desde el expediente.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-652",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-652",
      ca: "https://ulpiano.es/ca/models/model-652",
    },
  },
};

const summaryTable = [
  { field: "Denominación oficial", value: "Autoliquidación del ISD — Seguros de Vida" },
  { field: "Base legal estatal", value: "Art. 9.c) Ley 29/1987 (LISD) + Art. 39 RD 1629/1991 (RISD)" },
  { field: "Base legal autonómica", value: "Llei 19/2010, del 7 de juny (reducciones y bonificaciones)" },
  { field: "Hecho imponible", value: "Percepción de cantidades por seguros de vida cuando el beneficiario es persona distinta del tomador" },
  { field: "Sujeto pasivo", value: "El beneficiario del seguro de vida" },
  { field: "Plazo", value: "6 meses desde la fecha de fallecimiento del asegurado" },
  { field: "Administración competente", value: "CA de residencia habitual del causante (ATC en Catalunya)" },
  { field: "Relación con otros modelos", value: "Se presenta junto al Modelo 660 cuando forma parte de un expediente sucesorio" },
];

const faqs = [
  {
    q: "¿Cuándo se presenta un Modelo 652 en lugar de incluir el seguro en el Modelo 650?",
    a: "El Modelo 652 se presenta cuando el beneficiario del seguro de vida es una persona distinta del tomador de la póliza y la percepción se produce por causa de muerte. Si el beneficiario es también heredero, puede tributar por el 650 y el 652 simultáneamente: por el 650 como heredero de los bienes del causante y por el 652 como beneficiario del seguro. En la práctica, cuando el expediente incluye seguro y herencia, Ulpiano genera ambos modelos conectados.",
  },
  {
    q: "¿Qué reducción específica existe para seguros de vida en Catalunya?",
    a: "El Art. 10 de la Llei 19/2010 establece una reducción del 100% del capital percibido por seguros de vida con un límite de 9.195,49€. Esta reducción es compatible con la reducción por parentesco. Además, se aplican las bonificaciones en cuota del Art. 12 (hasta el 99% para cónyuge y Grupos I y II).",
  },
  {
    q: "¿Qué plazo hay para presentar el Modelo 652?",
    a: "El plazo es de 6 meses desde la fecha de fallecimiento del asegurado, el mismo que rige para el Modelo 650. Se puede solicitar una prórroga de 6 meses adicionales dentro de los primeros 5 meses (Art. 68 RISD), que conlleva intereses de demora.",
  },
  {
    q: "¿El Modelo 652 requiere acompañar un Modelo 660?",
    a: "Cuando el seguro de vida forma parte de un expediente sucesorio (lo habitual), el capital del seguro se incluye en el inventario del Modelo 660 como bien del caudal relicto. Si el beneficiario solo percibe el seguro y no hereda bienes, puede no ser necesario un 660 independiente, pero la práctica habitual es incluirlo en el inventario del expediente.",
  },
  {
    q: "¿Puede Ulpiano generar el Modelo 652 automáticamente?",
    a: "Sí. Ulpiano incorpora los seguros de vida como categoría dentro del inventario patrimonial. Cuando se registra una póliza con beneficiario distinto del tomador, el motor fiscal genera automáticamente el Modelo 652 con la cuota calculada, las reducciones aplicadas y la normativa citada, conectado con el resto de modelos del expediente.",
  },
];

export default function Modelo652Page() {
  return (
    <main>
      
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 652", href: "/modelos/modelo-652" },
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
          <ModelNav active="652" />
          <div style={{ marginTop: "var(--space-8)" }}>
            <div className="eyebrow" style={{ color: "var(--mist)", marginBottom: "var(--space-4)" }}>
              MODELO FISCAL
            </div>
            <h1 className="h1" style={{ color: "var(--white)", marginBottom: "var(--space-6)" }}>
              Modelo 652: Autoliquidación de Seguros de Vida
            </h1>
            <p className="body-lg" style={{ maxWidth: 640, color: "var(--mist)", marginBottom: "var(--space-6)" }}>
              El Modelo 652 es el formulario de autoliquidación del Impuesto sobre Sucesiones y Donaciones (ISD) para la
              tributación del capital percibido por seguros de vida cuando el beneficiario es persona distinta del tomador
              de la póliza, y la percepción se produce por causa de muerte.
            </p>
            <div style={{ display: "inline-block", padding: "var(--space-3) var(--space-4)", background: "var(--warning-bg)", borderRadius: "6px", fontSize: "13px", color: "var(--warning)" }}>
              Normativa: Art. 9.c) LISD + Llei 19/2010 (Art. 10)
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DEFINICIÓN
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-6)" }}>
            ¿Qué es el Modelo 652?
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-6)", maxWidth: 720 }}>
            El Modelo 652 es la autoliquidación complementaria del Impuesto sobre Sucesiones y Donaciones que debe presentar el
            beneficiario de un seguro de vida cuando éste es una persona distinta del tomador de la póliza y la percepción del capital
            se produce por causa de muerte del asegurado. Se trata de un tributo autonómico en Cataluña, sujeto a las bonificaciones
            y reducciones establecidas en la Llei 19/2010.
          </p>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-8)", maxWidth: 720 }}>
            A diferencia del Modelo 650 (autoliquidación por herencia de bienes del caudal relicto), el Modelo 652 grava específicamente
            la percepción del capital del seguro de vida, independientemente de que el beneficiario sea o no heredero del resto del patrimonio
            del causante. En la práctica, cuando un expediente sucesorio incluye tanto herencia como seguros de vida, el beneficiario puede
            estar obligado a presentar tanto el Modelo 650 como el 652.
          </p>
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
            ¿Cuándo se tributa por el Modelo 652?
          </h2>
          <div className="mod-obligados-grid">
            <div>
              <h3>Beneficiario distinto del tomador</h3>
              <p>La condición principal: quien cobra el seguro debe ser diferente de quien pagaba las primas.</p>
            </div>
            <div>
              <h3>Percepción por causa de muerte</h3>
              <p>El hecho que origina el cobro es el fallecimiento del asegurado. No aplica a seguros de vida en vida o invalidez.</p>
            </div>
            <div>
              <h3>Persona física beneficiaria</h3>
              <p>El sujeto pasivo es siempre una persona física. Si el beneficiario es una persona jurídica, el tratamiento fiscal es diferente.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Con Ulpiano
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-6)", maxWidth: 640 }}>
            Ulpiano integra los seguros de vida dentro del patrimonio del causante y calcula automáticamente la tributación a través del
            Modelo 652, aplicando las reducciones específicas de Cataluña y conectando la información con el resto del expediente sucesorio.
          </p>
          <ul style={{ marginBottom: "var(--space-8)", paddingLeft: "var(--space-6)" }}>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Generación automática del Modelo 652 cuando se registra un seguro con beneficiario distinto del tomador.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Aplicación de reducciones catalanas (Art. 10 Llei 19/2010) y bonificaciones por parentesco.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Conexión del Modelo 652 con el Modelo 660 (inventario) y el Modelo 650 (herencia).
            </li>
          </ul>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Ver demo
            </a>
            <a href="/soluciones/fiscalidad-sucesoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--ink)" }}>
              Ver motor fiscal completo
            </a>
          </div>
        </div>
      </section>

      <Modelo652InteractiveShells faqs={faqs} />

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
            <a href="/modelos/modelo-653" style={{ display: "block" }}>
              <h4>Modelo 653</h4>
              <p>Consolidación de dominio por extinción del usufructo.</p>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--night)", color: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--white)", marginBottom: "var(--space-6)", maxWidth: 640 }}>
            Cada modelo del expediente, generado desde los mismos datos.
          </h2>
          <p className="body-lg" style={{ color: "var(--mist)", marginBottom: "var(--space-8)", maxWidth: 640 }}>
            Solicita una demo y comprueba cómo Ulpiano genera el Modelo 652 del beneficiario del seguro junto con el resto de modelos del
            expediente sucesorio.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Solicita demo
            </a>
            <a href="/soluciones/fiscalidad-sucesoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--white)" }}>
              Ver solución
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
