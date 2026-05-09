import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNavCa } from "@/components/modelos/ModelNavCa";
import { Model650InteractiveShellsCa } from "./Model650Client";

export const metadata: Metadata = {
  title: "Model 650 Catalunya: Guia Completa de l'Impost sobre Successions | Ulpiano",
  description:
    "Guia completa del Model 650: què és, qui el presenta, termini de 6 mesos, reduccions catalanes (Llei 19/2010), càlcul de la quota i com Ulpiano el genera automàticament des de l'expedient successori.",
  alternates: {
    canonical: "https://ulpiano.es/ca/models/model-650",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-650",
      ca: "https://ulpiano.es/ca/models/model-650",
    },
  },
};

/* ─── Static data ─── */

const summaryTable = [
  { field: "Denominació oficial",    value: "Autoliquidació de l'ISD — Successions" },
  { field: "Base legal estatal",      value: "Llei 29/1987 (LISD) + RD 1629/1991 (RISD)" },
  { field: "Base legal autonòmica",   value: "Llei 19/2010, del 7 de juny" },
  { field: "Fet imposable",           value: "Adquisició de béns i drets per herència, llegat o qualsevol títol successori" },
  { field: "Subjecte passiu",         value: "Cada hereu, legatari o beneficiador individualment" },
  { field: "Termini",                 value: "6 mesos des de la defunció (prorrogable 6 mesos més)" },
  { field: "Administració competent", value: "ATC de residència habitual del causant (ATC a Catalunya)" },
  { field: "Acompaña a",              value: "Model 660 (Inventari de béns)" },
];

const reductions = [
  { concept: "Grup I (desc. < 21 anys)",              law: "Art. 2.1", amount: "100.000€ + 12.000€/any < 21, màx. 196.000€" },
  { concept: "Grup II (desc. ≥ 21, cònjuge, asc.)",  law: "Art. 2.2", amount: "100.000€" },
  { concept: "Grup III (col. 2.n i 3.er grau)",      law: "Art. 2.3", amount: "50.000€" },
  { concept: "Grup IV (col. 4.t i estranys)",        law: "Art. 2.4", amount: "Sense reducció" },
  { concept: "Vivenda habitual",                      law: "Art. 5",   amount: "95%, màx. 500.000€ per subjecte passiu" },
  { concept: "Empresa familiar",                      law: "Art. 7",   amount: "95% del valor" },
  { concept: "Patrimoni cultural",                    law: "Art. 6",   amount: "95% del valor" },
  { concept: "Discapacitat ≥ 33%",                    law: "Art. 3",   amount: "275.000€" },
  { concept: "Discapacitat ≥ 65%",                    law: "Art. 3",   amount: "650.000€" },
  { concept: "Persona major de 75 anys",              law: "Art. 4",   amount: "275.000€" },
];

const funnelRows = [
  { label: "Base imposable",          value: "€ 385.000,00",  note: "Valor béns adquirits",                        indent: false },
  { label: "Reducció parentesc",      value: "−€ 100.000,00", note: "Art. 2 Llei 19/2010 (Grup II)",                indent: true  },
  { label: "Reducció vivenda",        value: "−€ 95.000,00",  note: "Art. 5 (95%, màx. 500.000€)",                 indent: true  },
  { label: "Base liquidable",         value: "€ 190.000,00",  note: "",                                             indent: false },
  { label: "Tarifa progressiva",      value: "€ 23.580,00",   note: "Escala autonòmica",                           indent: false },
  { label: "Coeficient multiplicador", value: "× 1,0000",    note: "Grup II, patrimoni < 500.000€",               indent: false },
  { label: "Quota íntegra",           value: "€ 23.580,00",   note: "",                                             indent: false },
  { label: "Bonificació Grup II",     value: "−€ 22.401,00",  note: "Art. 12 Llei 19/2010 (≈99%)",                 indent: true  },
];

const faqs = [
  {
    q: "Quina és la diferència entre el Model 650 i el Model 660?",
    a: "El Model 650 és l'autoliquidació individual — conté el càlcul de la quota tributària de cada hereu. El Model 660 és la declaració de l'inventari de béns, drets i deutes del causant. Tots dos es presenten conjuntament: el 660 com a suport documental i el 650 com a liquidació per beneficiador.",
  },
  {
    q: "Es presenta un Model 650 per cada hereu?",
    a: "Sí. Cada hereu, legatari o beneficiador d'assegurança de vida presenta el seu propi Model 650 amb la seva liquidació individual. Si hi ha 3 hereus, es presenten 3 Models 650 (i un únic Model 660).",
  },
  {
    q: "Quin és el termini per presentar el Model 650?",
    a: "6 mesos des de la data de defunció del causant. Existeix la possibilitat de sol·licitar una pròrroga de 6 mesos addicionals dins dels primers 5 mesos (Art. 68 RISD). La pròrroga comporta interessos de demora.",
  },
  {
    q: "Què passa si presento el Model 650 fora de termini?",
    a: "S'apliquen els recàrrecs del Art. 27 LGT: 5% (fins a 3 mesos), 10% (3-6 mesos), 15% (6-12 mesos), 20% (més de 12 mesos) amb interessos de demora a partir dels 12 mesos.",
  },
  {
    q: "Quines reduccions s'apliquen a Catalunya?",
    a: "La Llei 19/2010 estableix reduccions per parentesc (fins a 196.000€ per a menors de 21 anys, 100.000€ per a Grup II), vivenda habitual (95%, màx. 500.000€), empresa familiar (95%), discapacitat (275.000€ o 650.000€), i persona major de 75 anys (275.000€). A més, bonificacions en quota de fins al 99% per a Grups I i II.",
  },
  {
    q: "Pot Ulpiano generar el Model 650 automàticament?",
    a: "Sí. Ulpiano pren les dades de l'expedient successori — inventari patrimonial, escenari hereditari i configuració fiscal — i genera el Model 650 de cada hereu amb la quota calculada, les reduccions aplicades i la normativa citada. El professional revisa i valida abans de presentar.",
  },
];

export default function Model650CaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici",          href: "/ca" },
          { name: "Models fiscals", href: "/ca/models" },
          { name: "Model 650",      href: "/ca/models/model-650" },
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
        <div aria-hidden="true" className="mono" style={{ position:"absolute", top:40, right:40, fontSize:160, fontWeight:700, color:"rgba(255,255,255,0.04)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>
          650
        </div>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom:"var(--space-3)" }}>
            <ol style={{ listStyle:"none", display:"flex", gap:8, padding:0, margin:0, fontSize:13, color:"rgba(255,255,255,0.5)" }}>
              <li><Link href="/ca" style={{ color:"inherit", textDecoration:"none" }}>Inici</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/ca/models" style={{ color:"inherit", textDecoration:"none" }}>Models</Link></li>
              <li aria-hidden="true">›</li>
              <li style={{ color:"rgba(255,255,255,0.8)" }}>Model 650</li>
            </ol>
          </nav>

          <ModelNavCa active="650" />

          <div className="eyebrow" style={{ color:"rgba(255,255,255,0.5)", marginTop:"var(--space-8)" }}>MODEL FISCAL</div>
          <h1 className="h1" style={{ color:"var(--white)", maxWidth:720, marginTop:"var(--space-4)" }}>
            Model 650: Autoliquidació de l'Impost sobre Successions
          </h1>
          <p className="body-lg" style={{ color:"rgba(255,255,255,0.75)", maxWidth:620, marginTop:"var(--space-6)" }}>
            El Model 650 és el formulari d'autoliquidació que cada hereu
            o legatari ha de presentar davant l'administració tributària
            autonòmica per a liquidar l'Impost sobre Successions i Donacions
            (ISD) en la seva modalitat de successions mortis causa.
          </p>
          <div style={{ marginTop:"var(--space-4)" }}>
            <span style={{ display:"inline-block", background:"rgba(45,106,79,0.15)", color:"var(--green-light)", fontSize:13, fontWeight:500, padding:"6px 14px", borderRadius:6 }}>
              Normativa aplicable a Catalunya: Llei 19/2010, del 7 de juny
            </span>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES (SSR) ── */}
      <section style={{ background:"var(--white)", padding:"var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color:"var(--slate)", marginBottom:"var(--space-4)" }}>DEFINICIÓ</div>
          <h2 className="h2" style={{ color:"var(--ink)", maxWidth:560 }}>Què és el Model 650?</h2>
          <div style={{ maxWidth:720, marginTop:"var(--space-8)", fontSize:16, color:"var(--slate)", lineHeight:1.7 }}>
            <p style={{ marginBottom:"var(--space-4)" }}>
              El Model 650 és el document d'autoliquidació de l'Impost sobre Successions
              i Donacions (ISD) en la seva modalitat d'adquisicions mortis causa. Cada hereu,
              legatari o beneficiador d'una assegurança de vida vinculada a una successió ha
              de presentar el seu propi Model 650 davant l'administració tributària de la comunitat
              autònoma on el causant tenia la seva residència habitual.
            </p>
            <p style={{ marginBottom:"var(--space-4)" }}>
              A Catalunya, la gestió de l'impost correspon a l'Agència Tributària de
              Catalunya (ATC) i es regeix per la Llei 19/2010, del 7 de juny, que estableix
              reduccions i bonificacions pròpies diferenciades de la normativa estatal.
            </p>
            <p>
              El Model 650 recull el càlcul complet de la quota tributària: des de la base
              imposable fins a la quota a ingressar, passant per reduccions, tarifa progressiva,
              coeficient multiplicador i bonificacions autonòmiques.
            </p>
          </div>

          {/* Summary table — SSR */}
          <div style={{ marginTop:"var(--space-10)" }}>
            <div style={{ background:"var(--surface)", borderRadius:12, overflow:"hidden", border:"1px solid var(--mist)" }}>
              {summaryTable.map((row, i) => (
                <div key={row.field} className="mod-summary-row" style={{ borderTop: i > 0 ? "1px solid var(--mist)" : "none" }}>
                  <div className="mod-summary-field">{row.field}</div>
                  <div className="mod-summary-value">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OBLIGADOS (SSR) ── */}
      <section style={{ background:"var(--surface)", padding:"var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color:"var(--slate)", marginBottom:"var(--space-4)" }}>OBLIGATS TRIBUTARIS</div>
          <h2 className="h2" style={{ color:"var(--ink)", maxWidth:520 }}>Qui ha de presentar el Model 650?</h2>
          <p className="body-lg" style={{ color:"var(--slate)", maxWidth:720, marginTop:"var(--space-6)" }}>
            Està obligat a presentar el Model 650 tota persona física que adquireixi béns
            o drets per causa de mort. L'obligació és individual: cada hereu o
            legatari presenta el seu propi model amb la seva pròpia liquidació.
          </p>
          <div className="mod-obligados-grid" style={{ marginTop:"var(--space-10)" }}>
            {[
              { title:"Hereus universals o en quota",      desc:"Qui succeeix al causant en la totalitat o una part alícuota dels seus béns i drets. Inclou hereus testamentaris i intestats." },
              { title:"Legataris",                         desc:"Qui rep béns concrets per disposició testamentària del causant: un immoble específic, una quantitat de diners, una joia." },
              { title:"Beneficiadors d'assegurances de vida", desc:"Qui percep el capital d'una assegurança de vida per defunció de l'assegurat, quan el beneficiador no és el prenedor. Pot requerir-se també el Model 652." },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ marginBottom:"var(--space-3)" }}>{item.title}</h3>
                <p style={{ fontSize:15, color:"var(--slate)", lineHeight:1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Alerta extemporaneidad — SSR */}
          <div style={{ marginTop:"var(--space-10)", background:"var(--warning-bg)", border:"1px solid rgba(180,83,9,0.2)", borderRadius:12, padding:"var(--space-6)" }}>
            <div style={{ display:"flex", gap:"var(--space-3)", alignItems:"flex-start" }}>
              <span style={{ flexShrink:0, marginTop:2, color:"var(--warning)", fontWeight:700, fontSize:18 }}>⚠</span>
              <div>
                <div style={{ fontWeight:600, fontSize:15, color:"var(--warning)", marginBottom:"var(--space-2)" }}>TERMINI I EXTEMPORANEÏTAT</div>
                <p style={{ fontSize:14, color:"var(--ink)", lineHeight:1.7, marginBottom:"var(--space-3)" }}>
                  El termini de presentació és de 6 mesos des de la data de defunció.
                  Si el Model 650 es presenta fora de termini, s'apliquen els recàrrecs del Art. 27 LGT:
                </p>
                <ul style={{ fontSize:14, color:"var(--ink)", lineHeight:1.8, paddingLeft:20 }}>
                  <li>Fins a 3 mesos de retard: 5% (sense interessos ni sanció)</li>
                  <li>De 3 a 6 mesos: 10%</li>
                  <li>De 6 a 12 mesos: 15%</li>
                  <li>Més de 12 mesos: 20% + interessos de demora</li>
                </ul>
                <p style={{ fontSize:14, color:"var(--slate)", lineHeight:1.6, marginTop:"var(--space-3)" }}>
                  Ulpiano monitoritza la data de defunció i calcula el recàrrec per extemporaneïtat del Art. 27 LGT si l'expedient s'acosta al venciment del període voluntari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÁLCULO (SSR) ── */}
      <section style={{ background:"var(--white)", padding:"var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color:"var(--slate)", marginBottom:"var(--space-4)" }}>CÀLCUL</div>
          <h2 className="h2" style={{ color:"var(--ink)", maxWidth:560 }}>Com es calcula la quota del Model 650</h2>
          <p className="body-lg" style={{ color:"var(--slate)", maxWidth:640, marginTop:"var(--space-6)" }}>
            El Model 650 recull un embut de liquidació complet. Cada pas redueix
            o incrementa la quota segons la normativa aplicable.
          </p>

          <div style={{ marginTop:"var(--space-10)", background:"var(--surface)", borderRadius:12, border:"1px solid var(--mist)", padding:"var(--space-6)", maxWidth:720, overflowX:"auto" }}>
            {funnelRows.map((row, i) => (
              <div key={row.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", padding:"10px 0", borderTop: i > 0 ? "1px dashed var(--mist)" : "none", paddingLeft: row.indent ? "var(--space-4)" : 0 }}>
                <span style={{ fontSize:14, color: row.indent ? "var(--slate)" : "var(--ink)", fontWeight: row.indent ? 400 : 500 }}>
                  {row.indent ? "−" : ""} {row.label}
                </span>
                <div style={{ display:"flex", alignItems:"baseline", gap:"var(--space-4)", flexShrink:0 }}>
                  <span className="mono" style={{ fontSize:15, color:"var(--ink)", fontWeight:500 }}>{row.value}</span>
                  {row.note && <span style={{ fontSize:12, color:"var(--fog)", whiteSpace:"nowrap" }}>{row.note}</span>}
                </div>
              </div>
            ))}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", padding:"14px 0 4px", borderTop:"2px solid var(--mist)", marginTop:4 }}>
              <span style={{ fontSize:15, fontWeight:600, color:"var(--ink)" }}>QUOTA A INGRESSAR</span>
              <span className="mono" style={{ fontSize:20, fontWeight:700, color:"var(--ulpiano-green)" }}>€ 1.179,00</span>
            </div>
          </div>

          {/* Tabla reducciones — SSR */}
          <div style={{ marginTop:"var(--space-12)" }}>
            <h3 style={{ marginBottom:"var(--space-6)" }}>Reduccions a Catalunya (Llei 19/2010)</h3>
            <div style={{ overflowX:"auto" }}>
              <table className="mod-table">
                <thead>
                  <tr><th>Concepte</th><th>Base legal</th><th>Import / Percentatge</th></tr>
                </thead>
                <tbody>
                  {reductions.map((r) => (
                    <tr key={r.concept}>
                      <td>{r.concept}</td>
                      <td className="mono" style={{ fontSize:13 }}>{r.law}</td>
                      <td>{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── ULPIANO (SSR) ── */}
      <section style={{ background:"var(--surface)", padding:"var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color:"var(--slate)", marginBottom:"var(--space-4)" }}>AMB ULPIANO</div>
          <h2 className="h2" style={{ color:"var(--ink)", maxWidth:600 }}>El Model 650, generat des de l'expedient</h2>
          <p className="body-lg" style={{ color:"var(--slate)", maxWidth:640, marginTop:"var(--space-6)" }}>
            Introduïxs les dades de l'expedient una vegada. Ulpiano calcula la quota
            de cada hereu i genera el Model 650 amb tots els camps completats.
          </p>
          <div style={{ marginTop:"var(--space-10)" }}>
            {[
              { title:"Un 650 per hereu, coherent amb l'inventari", desc:"El motor fiscal pren les dades de l'inventari patrimonial (Model 660) i calcula la quota individual de cada hereu aplicant la normativa catalana vigent." },
              { title:"Reduccions i bonificacions aplicades automàticament", desc:"Parentesc, vivenda habitual, empresa familiar, discapacitat — cada reducció s'aplica segons la Llei 19/2010 sense revisió manual de taules." },
              { title:"Alerta de extemporaneïtat abans del venciment", desc:"Ulpiano monitoritza la data de defunció i calcula el recàrrec per extemporaneïtat del Art. 27 LGT si l'expedient s'acosta al venciment del període voluntari." },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom:"var(--space-8)" }}>
                <div style={{ display:"flex", gap:"var(--space-3)", alignItems:"flex-start" }}>
                  <span style={{ flexShrink:0, marginTop:2, color:"var(--ulpiano-green)", fontSize:18 }}>✓</span>
                  <div>
                    <div style={{ fontWeight:600, fontSize:16, color:"var(--ink)", marginBottom:"var(--space-2)" }}>{item.title}</div>
                    <p style={{ fontSize:15, color:"var(--slate)", lineHeight:1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ display:"flex", gap:"var(--space-4)", flexWrap:"wrap", marginTop:"var(--space-6)" }}>
              <Link href="/ca/demo" className="btn-primary">Sol·licita la teva demo</Link>
              <Link href="/ca/solucions/fiscalitat-successoria" className="btn-ghost btn-ghost--dark">Veure motor fiscal complet →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (interactive islands via Client Component) ── */}
      <Model650InteractiveShellsCa faqs={faqs} />

      {/* ── MODELOS RELACIONADOS (SSR) ── */}
      <section style={{ background:"var(--surface)", padding:"var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color:"var(--slate)", marginBottom:"var(--space-4)" }}>MODELS RELACIONATS</div>
          <h2 className="h2" style={{ color:"var(--ink)", maxWidth:560 }}>Altres models de l'Impost sobre Successions i Donacions</h2>
          <div className="mod-related-grid" style={{ marginTop:"var(--space-10)" }}>
            {[
              { number:"660", name:"Declaració / Inventari", relation:"Acompaña sempre al Model 650",                         href:"/ca/models/model-660" },
              { number:"651", name:"Donacions",               relation:"Si la transmissió és inter vivos, no mortis causa",   href:"/ca/models/model-651" },
              { number:"652", name:"Assegurances de Vida",    relation:"Si el beneficiador de l'assegurança tributa apart",   href:"/ca/models/model-652" },
              { number:"653", name:"Consolidació de Domini",  relation:"Quan s'extingeix l'usdefruit constituït",             href:"/ca/models/model-653" },
            ].map((m) => (
              <Link key={m.number} href={m.href} className="card" style={{ textDecoration:"none", display:"block" }}>
                <span className="mono" style={{ fontSize:36, fontWeight:700, color:"var(--ulpiano-green)", lineHeight:1 }}>{m.number}</span>
                <h3 style={{ marginTop:"var(--space-3)", marginBottom:"var(--space-2)" }}>{m.name}</h3>
                <p style={{ fontSize:14, color:"var(--slate)", lineHeight:1.6 }}>{m.relation}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL (SSR) ── */}
      <section style={{ background:"linear-gradient(180deg, #0F1F3D 0%, #142647 100%)", padding:"var(--space-20) 0" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <h2 className="h2" style={{ color:"var(--white)", maxWidth:640, margin:"0 auto" }}>
            El Model 650 de cada hereu. Calculat, generat i llest per presentar.
          </h2>
          <p className="body-lg" style={{ color:"rgba(255,255,255,0.75)", maxWidth:560, margin:"var(--space-6) auto 0" }}>
            Sol·licita una demo i comprova com Ulpiano genera l'autoliquidació
            de cada beneficiador des de les dades de l'expedient successori.
          </p>
          <div style={{ display:"flex", gap:"var(--space-4)", justifyContent:"center", marginTop:"var(--space-10)", flexWrap:"wrap" }}>
            <Link href="/ca/demo" className="btn-primary">Sol·licita la teva demo</Link>
            <Link href="/ca/solucions/fiscalitat-successoria" className="btn-ghost">Veure motor fiscal →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
