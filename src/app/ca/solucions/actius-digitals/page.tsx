import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Actius digitals en herències",
  description:
    "Inventari de criptomonedes, wallets i patrimoni digital del causant, amb valoració i traçabilitat a l'expedient successori.",
  esPath: "/soluciones/activos-digitales",
  caPath: "/ca/solucions/actius-digitals",
  locale: "ca",
});

const blocs = [
  {
    title: "Criptomonedes i wallets",
    desc: "Adreces, custodis, exchanges i saldos entren a l'inventari amb el mateix rigor que un immoble o un compte bancari. Sense una línia solta en un Excel paral·lel.",
  },
  {
    title: "Comptes i patrimoni digital",
    desc: "Correus, núvols, dominis, perfils i actius en línia del causant entren a l'expedient. Allò que no s'inventaria no es parteix ni es liquida.",
  },
  {
    title: "Valoració i cabal relict",
    desc: "El valor dels actius digitals suma al cabal relict net. El motor successori i l'ISD treballen sobre un inventari únic, no sobre dues realitats.",
  },
  {
    title: "Traçabilitat per al professional",
    desc: "Qui ha aportat cada dada, quan i amb quin suport. El quadern i els models fiscals hereten el mateix inventari, sense reescriptura manual.",
  },
];

export default function ActiusDigitalsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Actius digitals", href: "/ca/solucions/actius-digitals" },
        ]}
      />

      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          color: "var(--white)",
        }}
      >
        <div className="container">
          <div
            className="eyebrow"
            style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
          >
            SOLUCIONS
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            Actius digitals a l&apos;expedient successori
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Criptomonedes, wallets i comptes en línia no apareixen sols al
            certificat de darreres voluntats. Si el despatx no els inventaria,
            no existeixen per a la partició ni per a Hisenda. Ulpiano els tracta
            com a categoria de primer nivell.
          </p>
          <div style={{ marginTop: "var(--space-8)" }}>
            <Link href="/ca/demo" className="btn-primary">
              Sol·licitar demo
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-6)" }}>
            El patrimoni digital també forma part de l&apos;herència
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", marginBottom: "var(--space-10)" }}>
            Un wallet sense custodi, un exchange estranger o un compte de correu
            amb factures de cripto no caben a l&apos;inventari tradicional. El
            professional acaba amb un annex informal —i un risc: ometre béns,
            liquidar malament l&apos;ISD o signar un quadern incomplet.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {blocs.map((b) => (
              <div key={b.title} className="card">
                <h3 className="h3" style={{ color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                  {b.title}
                </h3>
                <p style={{ color: "var(--slate)", margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-4)" }}>
            Un inventari. També per al que és digital.
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", marginBottom: "var(--space-8)" }}>
            En 25 minuts veus com entra un wallet al cabal, com es valora i com
            arriba al quadern particional i als models fiscals.
          </p>
          <Link href="/ca/demo" className="btn-primary">
            Veure-ho en una demo
          </Link>
        </div>
      </section>

      <CrossLink
        href="/ca/solucions/planificacio-successoria"
        label="Planificació successòria"
        description="Els actius digitals alimenten el mateix inventari que immobles, comptes i empresa familiar."
      />
    </>
  );
}
