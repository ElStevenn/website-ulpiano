import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preus | Ulpiano",
  description:
    "Plans i preus d'Ulpiano, la plataforma integral de gestió successòria per a despatxos, assessories i notaries.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://ulpiano.es/ca/preus",
  },
};

export default function PreusPage() {
  return (
    <article>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "var(--night)",
          color: "var(--white)",
          paddingTop: "var(--space-xl)",
          paddingBottom: "var(--space-xl)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="h1" style={{ marginBottom: "var(--space-md)" }}>
            Preus
          </h1>
          <p className="body-lg" style={{ color: "var(--mist)" }}>
            Pròximament
          </p>
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
