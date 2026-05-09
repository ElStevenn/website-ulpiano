import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNavCa } from "@/components/modelos/ModelNavCa";
import { Model660InteractiveShellsCa } from "./Model660Client";

export const metadata: Metadata = {
  title: "Model 660 Catalunya: Declaració de Successions i Inventari de Béns | Ulpiano",
  description: "Guia completa del Model 660: declaració de l'inventari de béns, drets i deutes del causant. Què inclou, documentació necessària, termini de 6 mesos i com Ulpiano el genera automàticament des de l'expedient successori.",
  alternates: {
    canonical: "https://ulpiano.es/ca/models/model-660",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-660",
      ca: "https://ulpiano.es/ca/models/model-660",
    },
  },
};

/* ─── Static data ─── */

const summaryTable = [
  { field: "Denominació oficial", value: "Declaració de l'Impost sobre Successions — Inventari de Béns" },
  { field: "Base legal estatal", value: "Art. 31 Llei 29/1987 (LISD) + Arts. 37-38 RD 1629/1991 (RISD)" },
  { field: "Fet imposable", value: "No és autoliquidació — declara l'inventari patrimonial del causant" },
  { field: "Presentació", value: "Un únic Model 660 per successió (no un per hereu)" },
  { field: "Termini", value: "6 mesos des de la defunció (prorrogable 6 mesos més)" },
  { field: "Administració competent", value: "CA de residència habitual del causant (ATC a Catalunya)" },
  { field: "Acompanya a", value: "Model 650 (Autoliquidació individual de cada hereu)" },
];

const faqs = [
  { q: "Quina és la diferència entre el Model 660 i el Model 650?", a: "El Model 660 és la declaració de l'inventari patrimonial: enumera tots els béns, drets i deutes del causant. No conté càlcul tributari. El Model 650 és l'autoliquidació individual on cada hereu calcula la seva quota. Es presenten conjuntament: un únic 660 amb tants 650 com hereus." },
  { q: "Es presenta un Model 660 per cada hereu?", a: "No. A diferència del Model 650, el Model 660 és únic per successió. L'inventari patrimonial és comú a tots els hereus — el que varia entre ells és la quota tributària, que es recull en el seu Model 650 individual." },
  { q: "Què passa si un bé no s'inclou en el Model 660?", a: "Si l'Administració detecta béns no declarats, pot iniciar un procediment de comprovació de valors (Art. 34 LISD) i practicar una liquidació complementaria amb recàrrecs i interessos. És fonamental que l'inventari sigui exhaustiu." },
  { q: "Com es valora l'aixovar domèstic?", a: "L'Art. 15 de la LISD estableix una presunció del 3% del cabal relicte com a valor de l'aixovar domèstic. Aquest percentatge s'aplica automàticament llevat que es demostri un valor inferior (per exemple, si el causant vivia de lloguer i no tenia estris significatius) o superior." },
  { q: "Quins deutes són deduïbles en el Model 660?", a: "Són deduïbles els deutes del causant acreditats documentalment a la data de defunció: hipoteques pendents, préstecs, deutes tributaris, despeses de darrera malaltia i despeses d'enterrament i funeral. La càrrega de la prova correspon al contribuent." },
  { q: "Pot Ulpiano generar el Model 660 automàticament?", a: "Sí. Ulpiano pren l'inventari patrimonial de l'expedient successori — amb cada bé ja categoritzat i valorat — i genera el Model 660 complet. El mateix inventari alimenta els Models 650 de cada hereu. Sense duplicar dades ni transcriure formularis." },
];

const contentCards = [
  { title: "Béns immobles", desc: "Pisos, cases, finques rústiques, locals comercials, garatges i trasters. S'inclou el valor cadastral i el valor de mercat." },
  { title: "Béns mobles i actius financers", desc: "Comptes bancaris, valors, fons d'inversió, assegurances, vehicles, joies i objectes d'art." },
  { title: "Drets i participacions", desc: "Participacions en societats, drets de crèdit, usufructes actius i qualsevol dret econòmic transmissible." },
  { title: "Deutes deduïbles", desc: "Hipoteques pendents, préstecs, deutes tributaris, despeses de darrera malaltia i despeses d'enterrament i funeral." },
];

const relatedModels = [
  { number: "650", name: "Autoliquidació individual", relation: "Cada hereu presenta el seu Model 650", href: "/ca/models/model-650" },
  { number: "651", name: "Donacions", relation: "Si la transmissió és inter vivos, no mortis causa", href: "/ca/models/model-651" },
  { number: "652", name: "Assegurances de Vida", relation: "Si el beneficiari de l'assegurança tributa apart", href: "/ca/models/model-652" },
  { number: "653", name: "Consolidació de Domini", relation: "Quan s'extingeix l'usdefruit constituït", href: "/ca/models/model-653" },
];

export default function Model660CaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Models fiscals", href: "/ca/models" },
          { name: "Model 660", href: "/ca/models/model-660" },
        ]}
      />

      {/* FAQPage schema — SSR, visible a Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO (SSR) ── */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" className="mono" style={{ position: "absolute", top: 40, right: 40, fontSize: 160, fontWeight: 700, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          660
        </div>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: "var(--space-3)" }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, padding: 0, margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              <li>
                <Link href="/ca" style={{ color: "inherit", textDecoration: "none" }}>
                  Inici
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/ca/models" style={{ color: "inherit", textDecoration: "none" }}>
                  Models
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li style={{ color: "rgba(255,255,255,0.8)" }}>Model 660</li>
            </ol>
          </nav>

          <ModelNavCa active="660" />

          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginTop: "var(--space-8)" }}>
            MODEL FISCAL
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginTop: "var(--space-4)" }}>
            Model 660: Declaració de Successions (Inventari de Béns)
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginTop: "var(--space-6)" }}>
            El Model 660 és la declaració que acompanya el Model 650: recull l'inventari complet de béns, drets i deutes deduïbles del causant. No és una autoliquidació — no calcula quota tributària — sinó el suport documental que fonamenta la liquidació de cada hereu.
          </p>
          <div style={{ marginTop: "var(--space-4)" }}>
            <span style={{ display: "inline-block", background: "rgba(45,106,79,0.15)", color: "var(--green-light)", fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 6 }}>
              Normativa: Art. 31 LISD + Llei 19/2010, del 7 de juny
            </span>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES (SSR) ── */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DEFINICIÓ
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560 }}>
            Què és el Model 660?
          </h2>
          <div style={{ maxWidth: 720, marginTop: "var(--space-8)", fontSize: 16, color: "var(--slate)", lineHeight: 1.7 }}>
            <p style={{ marginBottom: "var(--space-4)" }}>
              El Model 660 és la declaració de l'inventari patrimonial del causant en matèria d'Impost sobre Successions. A diferència d'altres models fiscals, el 660 no és una autoliquidació — no conté càlculs de quotes tributàries — sinó un llistat exhaustiu i ordenat de tots els béns, drets i deutes que formaven el patrimoni del causant a la data de la seva defunció.
            </p>
            <p style={{ marginBottom: "var(--space-4)" }}>
              L'inventari és el suport documental fonamental sobre el qual s'assenta la liquidació tributària. Cada hereu el pren com a base per complimentar el seu Model 650 individual, on calcula la seva quota segons el valor dels béns que li corresponen i la seva base imposable personal.
            </p>
          </div>

          {/* Summary table — SSR */}
          <div style={{ marginTop: "var(--space-10)" }}>
            <div style={{ background: "var(--surface)", borderRadius: 12, overflow: "hidden", border: "1px solid var(--mist)" }}>
              {summaryTable.map((row, i) => (
                <div key={row.field} className="mod-summary-row" style={{ borderTop: i > 0 ? "1px solid var(--mist)" : "none" }}>
                  <div className="mod-summary-field">{row.field}</div>
                  <div className="mod-summary-value">{row.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight warning */}
          <div style={{ marginTop: "var(--space-10)", background: "var(--surface)", border: "1px solid rgba(180,83,9,0.2)", borderLeft: "4px solid var(--ulpiano-green)", borderRadius: 12, padding: "var(--space-6)" }}>
            <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              ⚠ A diferència del Model 650, es presenta UN ÚNIC Model 660 per successió, independentment del nombre d'hereus.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO (SSR) ── */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            CONTINGUT
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 520 }}>
            Què inclou l'inventari del Model 660
          </h2>
          <div className="mod-obligados-grid" style={{ marginTop: "var(--space-10)" }}>
            {contentCards.map((card) => (
              <div key={card.title} className="card">
                <h3 style={{ marginBottom: "var(--space-3)" }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CON ULPIANO (SSR) ── */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            AUTOMATITZACIÓ
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 600 }}>
            L'inventari de l'expedient, convertit en Model 660
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-6)" }}>
            Introduces les dades de l'expedient una vegada. Ulpiano genera el Model 660 amb tots els camps completats.
          </p>
          <div style={{ marginTop: "var(--space-10)" }}>
            {[
              { title: "Un inventari únic, coherent per a tots els hereus", desc: "Ulpiano pren cada bé de l'expedient successori — ja categoritzat i valorat — i el vessa en el format del Model 660. No hi ha duplicació de dades." },
              { title: "El mateix inventari alimenta els Models 650 individuals", desc: "El motor fiscal genera automàticament un Model 650 per hereu prenent com a base l'inventari patrimonial del 660, mantenint total coherència entre documents." },
              { title: "Sense transcripció manual, sense errors", desc: "Totes les transferències de dades es realitzen automàticament de l'expedient al Model 660 i d'aquí als Models 650, eliminant errors de transcripció i accelerant la presentació." },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom: "var(--space-8)" }}>
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 2, color: "var(--ulpiano-green)", fontSize: 18 }}>
                    ✓
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
              <Link href="/ca/demo" className="btn-primary">
                Sol·licita la teva demo
              </Link>
              <Link href="/ca/solucions/planificacio-successoria" className="btn-ghost btn-ghost--dark">
                Veure planificació successòria →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (interactive islands via Client Component) ── */}
      <Model660InteractiveShellsCa faqs={faqs} />

      {/* ── MODELOS RELACIONADOS (SSR) ── */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            MODELS RELACIONATS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 560 }}>
            Altres models de l'Impost sobre Successions i Donacions
          </h2>
          <div className="mod-related-grid" style={{ marginTop: "var(--space-10)" }}>
            {relatedModels.map((m) => (
              <Link key={m.number} href={m.href} className="card" style={{ textDecoration: "none", display: "block" }}>
                <span className="mono" style={{ fontSize: 36, fontWeight: 700, color: "var(--ulpiano-green)", lineHeight: 1 }}>
                  {m.number}
                </span>
                <h3 style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-2)" }}>{m.name}</h3>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>{m.relation}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL (SSR) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--white)", maxWidth: 640, margin: "0 auto" }}>
            L'inventari de l'expedient, convertit en Model 660. Sense omplir formularis.
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0" }}>
            Sol·licita una demo i comprova com Ulpiano genera l'inventari patrimonial complet des de les dades de l'expedient successori.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-10)",
              flexWrap: "wrap",
            }}
          >
            <Link href="/ca/demo" className="btn-primary">
              Sol·licita una demo
            </Link>
            <Link href="/ca/solucions/planificacio-successoria" className="btn-ghost">
              Veure planificació successòria →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Shared scoped styles ── */}
    </>
  );
}
