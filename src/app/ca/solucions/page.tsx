import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Solucions de Gestió Successòria | Ulpiano",
  description:
    "Totes les solucions d'Ulpiano: planificació successòria, fiscalitat automatitzada, documentació i processament documental per a advocats, assessors i notaries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions",
    languages: {
      es: "https://ulpiano.es/soluciones",
      ca: "https://ulpiano.es/ca/solucions",
    },
  },
};

const solucions = [
  {
    href: "/ca/solucions/planificacio-successoria",
    title: "Planificació Successòria",
    desc: "Inventari patrimonial complet, arbre familiar, càlcul de llegítimes segons el CCCat i escenaris de distribució comparats.",
    tag: "Inventari · Distribució",
  },
  {
    href: "/ca/solucions/fiscalitat-successoria",
    title: "Fiscalitat Successòria",
    desc: "Autoliquidació automatitzada dels Models 650, 651, 652, 653 i 660 amb normativa estatal i autonòmica actualitzada.",
    tag: "ISD · ATC · Models fiscals",
  },
  {
    href: "/ca/solucions/documentacio-successoria",
    title: "Documentació Successòria",
    desc: "Generació del quadern particional, escriptura de partició i inventari formal des de les dades de l'expedient. Sense transcriure.",
    tag: "Quadern particional · Escriptures",
  },
  {
    href: "/ca/solucions/processament-documental",
    title: "Processament Documental",
    desc: "OCR i IA per digitalitzar, classificar i extreure dades de certificats de defunció, testaments i escriptures.",
    tag: "OCR · IA · Digitalització",
  },
];

export default function SolucionsHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
        ]}
      />

      {/* HERO */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          color: "var(--white)",
        }}
      >
        <div className="container">
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}>
            SOLUCIONS
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            Solucions per a la gestió successòria professional
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Ulpiano cobreix cada etapa del procés successori: des de l'inventari patrimonial fins a la documentació final, passant per la fiscalitat i el processament digital. Totes les solucions dins d'una mateixa plataforma, sense salts entre sistemes.
          </p>
        </div>
      </section>

      {/* SOLUCIONS GRID */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {solucions.map((s) => (
              <Link key={s.href} href={s.href} className="card" style={{ textDecoration: "none", display: "block" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--ulpiano-green)",
                    background: "var(--green-bg)",
                    padding: "3px 10px",
                    borderRadius: 4,
                    marginBottom: "var(--space-4)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {s.tag}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{s.desc}</p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "var(--space-5)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--ulpiano-green)",
                  }}
                >
                  Veure solució →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--white)", maxWidth: 640, margin: "0 auto", marginBottom: "var(--space-6)" }}>
            Descobreix com Ulpiano automatitza tota la gestió successòria
          </h2>
          <Link href="/ca/demo" className="btn-primary">
            Sol·licita la teva demo gratuïta
          </Link>
        </div>
      </section>
    </>
  );
}
