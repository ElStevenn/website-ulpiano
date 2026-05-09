import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Checklist de l'Expedient Successori a Catalunya — 47 Punts de Control",
  description:
    "Descarrega gratis el checklist que utilitzen els despatxos per no deixar caps per lligar a la gestió successòria. 47 punts de control amb normativa catalana actualitzada (CCCat · Llei 19/2010).",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/checklist-expedient-successori",
    languages: {
      es: "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
      ca: "https://ulpiano.es/ca/recursos/checklist-expedient-successori",
    },
  },
  openGraph: {
    title: "Checklist de l'Expedient Successori a Catalunya — 47 Punts de Control",
    description:
      "El checklist professional per gestionar herències a Catalunya sense deixar caps per lligar. Normativa actualitzada.",
    url: "https://ulpiano.es/ca/recursos/checklist-expedient-successori",
    type: "article",
  },
};

export default function ChecklistExpedientPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Recursos", href: "/ca/recursos" },
          {
            name: "Checklist",
            href: "/ca/recursos/checklist-expedient-successori",
          },
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
                Checklist de l'Expedient Successori a Catalunya
              </h1>
              <p className="body-lg">
                47 punts de control que tot despatx hauria de revisar en un
                expedient successori. Amb referències al CCCat i la Llei
                19/2010.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
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
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <h2 className="h3" style={{ marginBottom: "var(--space-md)" }}>
                Documentació inicial
              </h2>
              <p style={{ color: "var(--slate)" }}>
                Certificats de defunció, testament, últimes voluntats, documents
                de legitimació, poder notarial. Verificació del domicili del
                causant.
              </p>
            </div>

            <div
              style={{
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <h2 className="h3" style={{ marginBottom: "var(--space-md)" }}>
                Inventari patrimonial
              </h2>
              <p style={{ color: "var(--slate)" }}>
                Immobles (folio real, catastro), actius financers (comptes,
                valors), participacions socials (empreses, cooperatives),
                deutes, béns mobles de valor. Documentació completa de cada actiu.
              </p>
            </div>

            <div
              style={{
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <h2 className="h3" style={{ marginBottom: "var(--space-md)" }}>
                Fiscalitat
              </h2>
              <p style={{ color: "var(--slate)" }}>
                Càlcul de l'ISD amb normativa de Catalunya, plusvàlua municipal,
                Model 650 (devolució d'arrendadors), Model 660 (modificació),
                declaració de béns i deures si procedeix.
              </p>
            </div>

            <div
              style={{
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--surface)",
                borderRadius: "8px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <h2 className="h3" style={{ marginBottom: "var(--space-md)" }}>
                Partició i adjudicació
              </h2>
              <p style={{ color: "var(--slate)" }}>
                Quadern particional, escriptura d'herència, registre de la
                propietat per a immobles, notificacions de comunicacions finals
                de béns i deutes.
              </p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          style={{
            backgroundColor: "var(--surface)",
            paddingTop: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
          }}
        >
          <div className="container" style={{ maxWidth: "680px" }}>
            <div
              style={{
                padding: "var(--space-lg)",
                backgroundColor: "var(--white)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 className="h3" style={{ marginBottom: "var(--space-md)" }}>
                Descarrega el checklist complet
              </h3>
              <p style={{ marginBottom: "var(--space-md)", color: "var(--slate)" }}>
                Introdueix el teu correu i t'enviem el PDF amb els 47 punts de
                control i normativa de referència.
              </p>
              <p style={{ fontSize: "14px", color: "var(--slate)" }}>
                (Formulari de descàrrega — proximament disponible)
              </p>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section
          style={{
            backgroundColor: "var(--white)",
            paddingTop: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
          }}
        >
          <div className="container" style={{ maxWidth: "680px" }}>
            <h3 className="h3" style={{ marginBottom: "var(--space-md)" }}>
              Contingut relacionat
            </h3>
            <div
              style={{
                padding: "var(--space-md)",
                backgroundColor: "var(--surface)",
                borderRadius: "6px",
              }}
            >
              <Link
                href="/ca/pensat-per/despatxos"
                style={{
                  color: "var(--ulpiano-green)",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Solució per a despatxos d'advocats
              </Link>
              <p style={{ margin: "var(--space-sm) 0 0", color: "var(--slate)" }}>
                Com Ulpiano automatitza la gestió d'expedients successoris.
              </p>
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
