import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Models de l'Impost sobre Successions i Donacions | Guia Completa | Ulpiano",
  description:
    "Guia dels Models 650, 651, 652, 653 i 660 de l'Impost sobre Successions i Donacions. Què són, quan es presenten i com Ulpiano els genera automàticament des de l'expedient successori.",
  alternates: {
    canonical: "https://ulpiano.es/ca/models",
    languages: {
      es: "https://ulpiano.es/modelos",
      ca: "https://ulpiano.es/ca/models",
    },
  },
};

export default function ModelsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Models fiscals", href: "/ca/models" },
        ]}
      />

      <article>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: "var(--night)",
            color: "var(--white)",
            paddingTop: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "680px" }}>
              <h1 className="h1">
                Models de l'Impost sobre Successions i Donacions
              </h1>
              <p className="body-lg">
                Guia completa dels cinc models (650, 651, 652, 653 i 660) per a
                presentar l'ISD. Sabem quan es presenten i com Ulpiano els
                genera automàticament des de l'expedient.
              </p>
            </div>
          </div>
        </section>

        {/* Models Grid Section */}
        <section
          style={{
            backgroundColor: "var(--white)",
            paddingTop: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
          }}
        >
          <div className="container">
            <h2 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
              Els cinc models de l'ISD
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-xl)",
              }}
            >
              {/* Model 650 */}
              <div
                style={{
                  padding: "var(--space-lg)",
                  backgroundColor: "var(--surface)",
                  borderRadius: "8px",
                  borderTop: "4px solid var(--ulpiano-green)",
                }}
              >
                <h3 className="h3">Model 650</h3>
                <p style={{ color: "var(--slate)", marginBottom: "var(--space-md)" }}>
                  Autoliquidació de l'ISD en successions per mort de persona
                  física.
                </p>
                <Link
                  href="/ca/models/model-650"
                  style={{
                    color: "var(--ulpiano-green)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Més informació →
                </Link>
              </div>

              {/* Model 651 */}
              <div
                style={{
                  padding: "var(--space-lg)",
                  backgroundColor: "var(--surface)",
                  borderRadius: "8px",
                  borderTop: "4px solid var(--ulpiano-green)",
                }}
              >
                <h3 className="h3">Model 651</h3>
                <p style={{ color: "var(--slate)", marginBottom: "var(--space-md)" }}>
                  Autoliquidació de l'ISD en donacions de béns mobles i drets.
                </p>
                <Link
                  href="/ca/models/model-651"
                  style={{
                    color: "var(--ulpiano-green)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Més informació →
                </Link>
              </div>

              {/* Model 652 */}
              <div
                style={{
                  padding: "var(--space-lg)",
                  backgroundColor: "var(--surface)",
                  borderRadius: "8px",
                  borderTop: "4px solid var(--ulpiano-green)",
                }}
              >
                <h3 className="h3">Model 652</h3>
                <p style={{ color: "var(--slate)", marginBottom: "var(--space-md)" }}>
                  Autoliquidació de l'ISD en donacions de béns immobles.
                </p>
                <Link
                  href="/ca/models/model-652"
                  style={{
                    color: "var(--ulpiano-green)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Més informació →
                </Link>
              </div>

              {/* Model 653 */}
              <div
                style={{
                  padding: "var(--space-lg)",
                  backgroundColor: "var(--surface)",
                  borderRadius: "8px",
                  borderTop: "4px solid var(--ulpiano-green)",
                }}
              >
                <h3 className="h3">Model 653</h3>
                <p style={{ color: "var(--slate)", marginBottom: "var(--space-md)" }}>
                  Declaració d'herències per a qui per la seua entitat o
                  naturalesa estiguin exemptes de l'ISD.
                </p>
                <Link
                  href="/ca/models/model-653"
                  style={{
                    color: "var(--ulpiano-green)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Més informació →
                </Link>
              </div>

              {/* Model 660 */}
              <div
                style={{
                  padding: "var(--space-lg)",
                  backgroundColor: "var(--surface)",
                  borderRadius: "8px",
                  borderTop: "4px solid var(--ulpiano-green)",
                }}
              >
                <h3 className="h3">Model 660</h3>
                <p style={{ color: "var(--slate)", marginBottom: "var(--space-md)" }}>
                  Modificació de l'autoliquidació de l'ISD presentada
                  anteriorment.
                </p>
                <Link
                  href="/ca/models/model-660"
                  style={{
                    color: "var(--ulpiano-green)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Més informació →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide Section */}
        <section
          style={{
            backgroundColor: "var(--surface)",
            paddingTop: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
          }}
        >
          <div className="container" style={{ maxWidth: "680px" }}>
            <h2 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
              Quan es presenta cada model
            </h2>
            <div
              style={{
                padding: "var(--space-lg)",
                backgroundColor: "var(--white)",
                borderRadius: "8px",
              }}
            >
              <p style={{ marginBottom: "var(--space-md)" }}>
                <strong>Model 650:</strong> Presentar dins dels 30 dies hàbils
                després de la mort del causant. Imprescindible per a successions
                inter vivos.
              </p>
              <p style={{ marginBottom: "var(--space-md)" }}>
                <strong>Models 651 i 652:</strong> Dins dels 30 dies següents a
                la data de donació per a béns mobles i immobles respectivament.
              </p>
              <p style={{ marginBottom: "var(--space-md)" }}>
                <strong>Model 653:</strong> Per a casos d'exempció o especial
                condició del hereu.
              </p>
              <p>
                <strong>Model 660:</strong> Quan cal modificar una declaració
                prèvia per a correccions o variacions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            backgroundColor: "var(--white)",
            paddingTop: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
          }}
        >
          <div className="container" style={{ maxWidth: "680px" }}>
            <div
              style={{
                padding: "var(--space-lg)",
                backgroundColor: "var(--night)",
                color: "var(--white)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 className="h3" style={{ color: "var(--white)", marginBottom: "var(--space-md)" }}>
                Genera els models automàticament amb Ulpiano
              </h3>
              <p style={{ marginBottom: "var(--space-md)" }}>
                Ulpiano calcula i genera els models 650, 651, 652 i 660 de
                forma automàtica a partir de les dades de l'expedient.
              </p>
              <Link
                href="/ca/solucions/fiscalitat-successoria"
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--ulpiano-green)",
                  color: "var(--night)",
                  padding: "var(--space-sm) var(--space-md)",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Explora la solució de fiscalitat
              </Link>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section
          style={{
            backgroundColor: "var(--surface)",
            paddingTop: "var(--space-lg)",
            paddingBottom: "var(--space-lg)",
          }}
        >
          <div className="container" style={{ maxWidth: "680px", textAlign: "center" }}>
            <Link
              href="/ca"
              style={{
                color: "var(--ulpiano-green)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              ← Torna a l'inici
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
