import { Metadata } from "next";
import Link from "next/link";
import { Modelo651InteractiveShells } from "./Modelo651Client";
import { ModelNav } from "@/components/modelos/ModelNav";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Modelo 651 Catalunya: Guía Completa del Impuesto de Donaciones | Ulpiano",
  description:
    "Guía completa del Modelo 651: qué es, quién lo presenta, plazo de 30 días hábiles, reducciones catalanas para donaciones (Llei 19/2010), comparativa donación vs herencia y cómo Ulpiano calcula la cuota automáticamente.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-651",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-651",
      ca: "https://ulpiano.es/ca/models/model-651",
    },
  },
};

const summaryTable = [
  {
    field: "Denominación oficial",
    value: "Autoliquidación del ISD — Donaciones",
  },
  {
    field: "Base legal estatal",
    value: "Ley 29/1987 (LISD) + RD 1629/1991 (RISD)",
  },
  {
    field: "Base legal autonómica",
    value: "Llei 19/2010, Títol II (Arts. 15-23)",
  },
  {
    field: "Hecho imponible",
    value:
      "Adquisición de bienes y derechos por donación o cualquier negocio jurídico gratuito inter vivos",
  },
  { field: "Sujeto pasivo", value: "El donatario (quien recibe la donación)" },
  {
    field: "Plazo",
    value: "30 días hábiles desde la fecha de la donación",
  },
  {
    field: "Administración competente",
    value:
      "CA de residencia habitual del donatario (ATC en Catalunya)",
  },
  {
    field: "IRPF del donante",
    value: "Ganancia patrimonial tributable en IRPF del transmitente",
  },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre el Modelo 651 y el Modelo 650?",
    a: "El Modelo 651 liquida donaciones (transmisiones inter vivos gratuitas): el donante transmite en vida. El Modelo 650 liquida sucesiones (adquisiciones mortis causa): los bienes se transmiten por fallecimiento. Las reducciones y bonificaciones son distintas — en general, la sucesión tributa menos que la donación en Catalunya gracias a la bonificación de hasta el 99% en cuota para Grupos I y II.",
  },
  {
    q: "¿Tiene la donación implicaciones en el IRPF del donante?",
    a: "Sí. A diferencia de la sucesión, la donación genera una ganancia patrimonial en el IRPF del donante por la diferencia entre el valor de adquisición y el valor real del bien en el momento de la donación. En sucesiones, existe la exención conocida como 'plusvalía del muerto' (Art. 33.3.b LIRPF). Esta tributación adicional en IRPF debe valorarse siempre al planificar una donación.",
  },
  {
    q: "¿Cuál es el plazo para presentar el Modelo 651?",
    a: "30 días hábiles desde la fecha de la donación (fecha de la escritura pública o del acto que formalice la transmisión). No se computan sábados, domingos ni festivos. No existe prórroga como en sucesiones. Si se presenta fuera de plazo, se aplican los recargos del Art. 27 LGT.",
  },
  {
    q: "¿Qué reducciones se aplican a las donaciones en Catalunya?",
    a: "La Llei 19/2010 (Títol II, Arts. 15-23) establece reducciones por parentesco (hasta 196.000€ para menores de 21 años, 60.000€ para Grupo II), primera vivienda (95%, máx. 60.000€), empresa familiar (95%), discapacidad (120.000€ o 240.000€) y donaciones dinerarias para primera vivienda. La bonificación en cuota para cónyuge y descendientes puede alcanzar el 60%.",
  },
  {
    q: "¿Puede Ulpiano calcular y comparar donación vs herencia?",
    a: "Sí. Ulpiano genera el Modelo 651 automáticamente y además permite comparar escenarios: qué coste fiscal tendría transmitir un bien en vida (donación) frente a transmitirlo por herencia. El comparador incluye el impacto en IRPF del donante y la diferencia de reducciones y bonificaciones entre ambas vías.",
  },
];

export default function Modelo651Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Modelos fiscales", href: "/modelos" },
          { name: "Modelo 651", href: "/modelos/modelo-651" },
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

      {/* Hero Section */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          color: "white",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "var(--space-8)" }}>
            <ol
              style={{
                display: "flex",
                gap: "8px",
                fontSize: "14px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
              <li>
                <Link
                  href="/modelos"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                >
                  Modelos
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
              <li style={{ color: "rgba(255,255,255,0.9)" }}>Modelo 651</li>
            </ol>
          </nav>

          <ModelNav active="651" />

          <div
            className="eyebrow"
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "var(--space-4)",
              marginTop: "var(--space-6)",
            }}
          >
            MODELO FISCAL
          </div>

          <h1 className="h1" style={{ color: "white", marginBottom: "var(--space-6)" }}>
            Modelo 651: Autoliquidación del Impuesto de Donaciones
          </h1>

          <p className="body-lg" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720 }}>
            El Modelo 651 es el formulario de autoliquidación que el donatario
            debe presentar para liquidar el Impuesto sobre Sucesiones y
            Donaciones (ISD) en su modalidad de adquisiciones inter vivos
            gratuitas — donaciones.
          </p>

          <div
            style={{
              display: "inline-block",
              marginTop: "var(--space-6)",
              padding: "12px 16px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "6px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.85)",
              borderLeft: "3px solid var(--ulpiano-green)",
            }}
          >
            Normativa aplicable en Catalunya: Llei 19/2010, Títol II
            (Arts. 15-23)
          </div>
        </div>
      </section>

      {/* ¿Qué es el Modelo 651? */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            DEFINICIÓN
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            ¿Qué es el Modelo 651?
          </h2>

          <div style={{ maxWidth: 720, marginBottom: "var(--space-8)" }}>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.6 }}>
              El Modelo 651 es el documento de autoliquidación del Impuesto sobre
              Sucesiones y Donaciones (ISD) en su modalidad de transmisiones inter
              vivos gratuitas. Se utiliza cuando una persona realiza una donación
              —es decir, transmite bienes o derechos a título gratuito en vida—.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--slate)",
                lineHeight: 1.6,
                marginTop: "var(--space-4)",
              }}
            >
              A diferencia de las sucesiones mortis causa (Modelo 650), donde los
              bienes se transmiten por fallecimiento del donante, en la donación
              ambas partes están vivas. En Catalunya, la regulación específica se
              encuentra en la Llei 19/2010, que establece reducciones y
              bonificaciones propias del territorio.
            </p>
          </div>

          {/* Summary Table */}
          <div style={{ marginTop: "var(--space-12)" }}>
            {summaryTable.map((row, idx) => (
              <div key={idx} className="mod-summary-row">
                <div className="mod-summary-field">{row.field}</div>
                <div className="mod-summary-value">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Quién debe presentar? */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            OBLIGADOS TRIBUTARIOS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            ¿Quién debe presentar el Modelo 651?
          </h2>

          <div style={{ maxWidth: 720, marginBottom: "var(--space-10)" }}>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.6 }}>
              El sujeto pasivo del Modelo 651 es el donatario, es decir, la
              persona que recibe la donación. Es el donatario quien debe
              presentar la autoliquidación ante la Agencia Tributaria de
              Catalunya (ATC) en el plazo de 30 días hábiles desde la fecha del
              acto de donación (fecha de la escritura pública).
            </p>
          </div>

          {/* Warning Box */}
          <div
            style={{
              background: "rgba(251, 191, 36, 0.08)",
              border: "1px solid rgba(251, 191, 36, 0.3)",
              borderRadius: "8px",
              padding: "var(--space-6)",
              marginTop: "var(--space-10)",
              maxWidth: 720,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "20px", lineHeight: 1 }}>⚠</div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "var(--space-2)",
                    fontSize: "15px",
                  }}
                >
                  IMPLICACIÓN EN EL IRPF DEL DONANTE
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--slate)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Aunque la autoliquidación la presenta el donatario, el donante
                  debe incluir en su declaración del IRPF la ganancia patrimonial
                  derivada de la donación. A diferencia de las sucesiones (Art.
                  33.3.b LIRPF), donde existe exención por la "plusvalía del
                  muerto", en las donaciones esta exención no aplica. Esta
                  tributación adicional en IRPF debe tenerse en cuenta al
                  planificar una donación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donación vs Herencia */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            COMPARATIVA
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-10)" }}>
            ¿Donación o herencia? Diferencias fiscales clave
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table className="mod-table">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th>Modelo 651 (Donación)</th>
                  <th>Modelo 650 (Herencia)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plazo presentación</td>
                  <td>30 días hábiles</td>
                  <td>6 meses</td>
                </tr>
                <tr>
                  <td>Bonificación cuota Grupos I-II</td>
                  <td>Hasta 60%</td>
                  <td>Hasta 99%</td>
                </tr>
                <tr>
                  <td>IRPF del transmitente</td>
                  <td>Sí (ganancia patrimonial)</td>
                  <td>No (exento Art. 33.3.b LIRPF)</td>
                </tr>
                <tr>
                  <td>Reducción parentesco Grupo II</td>
                  <td>60.000€</td>
                  <td>100.000€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Con Ulpiano */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            CON ULPIANO
          </div>
          <h2
            className="h2"
            style={{
              color: "var(--ink)",
              marginBottom: "var(--space-8)",
              maxWidth: 500,
            }}
          >
            Donación vs herencia: la respuesta está en los números
          </h2>

          <div style={{ maxWidth: 720, marginBottom: "var(--space-10)" }}>
            <ul style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.8 }}>
              <li>
                Cálculo automático de la cuota del ISD en Catalunya con
                reducciones y bonificaciones aplicables.
              </li>
              <li>
                Comparador de escenarios: qué coste fiscal tendría la donación
                frente a transmitir por herencia.
              </li>
              <li>
                Impacto completo en IRPF del donante, incluida la ganancia
                patrimonial.
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/demo"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Solicita una demo
            </Link>
            <Link
              href="/soluciones/fiscalidad-sucesoria"
              className="btn-ghost btn-ghost--dark"
              style={{ textDecoration: "none" }}
            >
              Ver motor fiscal completo →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Modelo651InteractiveShells faqs={faqs} />

      {/* Modelos relacionados */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-10)" }}>
            Modelos relacionados
          </h2>

          <div className="mod-related-grid">
            <Link
              href="/modelos/modelo-650"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODELO 650
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Sucesiones mortis causa
              </div>
            </Link>

            <Link
              href="/modelos/modelo-652"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODELO 652
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Seguros de Vida
              </div>
            </Link>

            <Link
              href="/modelos/modelo-653"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODELO 653
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Consolidación de Dominio
              </div>
            </Link>

            <Link
              href="/modelos/modelo-660"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODELO 660
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Inventario de Bienes
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "var(--night)",
          padding: "var(--space-20) 0",
          color: "white",
        }}
      >
        <div className="container">
          <h2
            className="h2"
            style={{
              color: "white",
              marginBottom: "var(--space-6)",
              maxWidth: 500,
            }}
          >
            ¿Donación o herencia? La respuesta está en los números.
          </h2>
          <p
            className="body-lg"
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "var(--space-8)",
              maxWidth: 500,
            }}
          >
            Solicita una demo y comprueba cómo Ulpiano calcula, compara y
            genera la autoliquidación de donaciones con el impacto fiscal
            completo.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/demo"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Solicita una demo
            </Link>
            <Link
              href="/soluciones/fiscalidad-sucesoria"
              className="btn-ghost btn-ghost--dark"
              style={{ textDecoration: "none" }}
            >
              Ver motor fiscal completo →
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
