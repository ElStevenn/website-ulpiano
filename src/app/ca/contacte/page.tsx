import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacte | Ulpiano",
  description:
    "Contacta amb l'equip d'Ulpiano. Resolem els teus dubtes sobre la plataforma de gestió successòria integral per a despatxos, assessories i notaries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/contacte",
    languages: {
      es: "https://ulpiano.es/contacto",
      ca: "https://ulpiano.es/ca/contacte",
    },
  },
};

export default function ContactePage() {
  return (
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
            <h1 className="h1">Contacta amb nosaltres</h1>
            <p className="body-lg">
              Tenim aquí per resoldre els teus dubtes sobre la plataforma de
              gestió successòria d'Ulpiano.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
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
              backgroundColor: "var(--surface)",
              borderRadius: "8px",
              marginBottom: "var(--space-lg)",
            }}
          >
            <h2 className="h3" style={{ marginBottom: "var(--space-md)" }}>
              Contacte directe
            </h2>
            <p style={{ marginBottom: "var(--space-md)", color: "var(--slate)" }}>
              Envia'ns un correu electrònic i et respondrem en les properes 24 hores.
            </p>
            <a
              href="mailto:hola@ulpiano.es"
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "var(--ulpiano-green)",
                textDecoration: "none",
              }}
            >
              hola@ulpiano.es
            </a>
          </div>

          <div
            style={{
              padding: "var(--space-lg)",
              backgroundColor: "var(--surface)",
              borderRadius: "8px",
            }}
          >
            <h3 className="h3" style={{ marginBottom: "var(--space-md)" }}>
              Per suport tècnic
            </h3>
            <p style={{ marginBottom: "var(--space-md)", color: "var(--slate)" }}>
              Si tens dubtes sobre l'ús de la plataforma, contacta amb el nostre
              equip de suport:
            </p>
            <a
              href="mailto:suport@ulpiano.es"
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "var(--ulpiano-green)",
                textDecoration: "none",
              }}
            >
              suport@ulpiano.es
            </a>
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
  );
}
