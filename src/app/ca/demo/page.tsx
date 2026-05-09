import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sol·licita la teva Demo | Ulpiano — Gestió Successòria",
  description:
    "Reserva una sessió de 25 minuts sobre la plataforma real. Veuràs com s'inventaría un patrimoni, es calcula l'ISD amb la norma citada i es genera el quadern particional. Sense compromís.",
  alternates: {
    canonical: "https://ulpiano.es/ca/demo",
    languages: {
      es: "https://ulpiano.es/demo",
      ca: "https://ulpiano.es/ca/demo",
    },
  },
};

export default function DemoPage() {
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
            <h1 className="h1">Reserva la teva demo de 25 minuts</h1>
            <p className="body-lg">
              Descobreix en viu com funciona Ulpiano. Els nostres especialistes
              et mostraran com gestionar expedients successoris, calcular l'ISD i
              generar documents automàticament.
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
          borderBottom: "1px solid var(--mist)",
        }}
      >
        <div className="container" style={{ maxWidth: "680px" }}>
          <h2 className="h2" style={{ marginBottom: "var(--space-lg)" }}>
            Què veuràs a la demo
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <li
              style={{
                padding: "var(--space-md)",
                backgroundColor: "var(--surface)",
                borderRadius: "6px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <strong>Inventari patrimonial interactiu</strong>
              <p style={{ margin: "var(--space-sm) 0 0", color: "var(--slate)" }}>
                Com structurar i documentar un patrimoni sencer de forma
                ordenada i traçable.
              </p>
            </li>
            <li
              style={{
                padding: "var(--space-md)",
                backgroundColor: "var(--surface)",
                borderRadius: "6px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <strong>Càlcul fiscal automàtic de l'ISD</strong>
              <p style={{ margin: "var(--space-sm) 0 0", color: "var(--slate)" }}>
                Simulacions en temps real amb normativa actualitzada, normes
                de aplicació i plantilles per a Cònjuges, Parella estable,
                Ascendents, Descendents, etc.
              </p>
            </li>
            <li
              style={{
                padding: "var(--space-md)",
                backgroundColor: "var(--surface)",
                borderRadius: "6px",
                borderLeft: "4px solid var(--ulpiano-green)",
              }}
            >
              <strong>Generació automàtica de documents</strong>
              <p style={{ margin: "var(--space-sm) 0 0", color: "var(--slate)" }}>
                Quadern particional, Models 650/660 i altres documents
                llestos per presentar a notaria sense reelaborar.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
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
              textAlign: "center",
              padding: "var(--space-lg)",
              backgroundColor: "var(--white)",
              borderRadius: "8px",
            }}
          >
            <h3 className="h3" style={{ marginBottom: "var(--space-md)" }}>
              Properament disponible
            </h3>
            <p style={{ marginBottom: "var(--space-md)", color: "var(--slate)" }}>
              Estamos preparando el sistema de reserva de demostraciones. Mentretant,
              pots contactar amb nosaltres directament:
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--ulpiano-green)",
              }}
            >
              hola@ulpiano.es
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          backgroundColor: "var(--white)",
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
