import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNavCa } from "@/components/modelos/ModelNavCa";
import { Model652InteractiveShellsCa } from "./Model652Client";

export const metadata: Metadata = {
  title: "Model 652 Catalunya: Tributació d'Assegurances de Vida en Successions | Ulpiano",
  description: "Guia completa del Model 652: tributació del capital d'assegurances de vida quan el beneficiari no és el prenedor, termini de 6 mesos, reduccions catalanes (Llei 19/2010, Art. 10) i com Ulpiano el genera automàticament des de l'expedient.",
  alternates: {
    canonical: "https://ulpiano.es/ca/models/model-652",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-652",
      ca: "https://ulpiano.es/ca/models/model-652",
    },
  },
};

const summaryTable = [
  { field: "Denominació oficial", value: "Autoliquidació de l'ISD — Assegurances de Vida" },
  { field: "Base legal estatal", value: "Art. 9.c) Llei 29/1987 (LISD) + Art. 39 RD 1629/1991 (RISD)" },
  { field: "Base legal autonòmica", value: "Llei 19/2010, del 7 de juny (reduccions i bonificacions)" },
  { field: "Fet imposable", value: "Percepció de quantitats per assegurances de vida quan el beneficiari és persona diferent del prenedor" },
  { field: "Subjecte passiu", value: "El beneficiari de l'assegurança de vida" },
  { field: "Termini", value: "6 mesos des de la data de defunció de l'assegurat" },
  { field: "Administració competent", value: "CA de residència habitual del causant (ATC a Catalunya)" },
  { field: "Relació amb altres models", value: "Es presenta juntament amb el Model 660 quan forma part d'un expedient successori" },
];

const faqs = [
  {
    q: "Quan es presenta un Model 652 en lloc d'incloure l'assegurança al Model 650?",
    a: "El Model 652 es presenta quan el beneficiari de l'assegurança de vida és una persona diferent del prenedor de la pòlissa i la percepció es produeix per causa de mort. Si el beneficiari és també hereu, pot tributar per el 650 i el 652 simultàniament: per el 650 com a hereu dels béns del causant i per el 652 com a beneficiari de l'assegurança. En la pràctica, quan l'expedient inclou assegurança i herència, Ulpiano genera tots dos models conectats.",
  },
  {
    q: "Quina reducció específica existeix per a assegurances de vida a Catalunya?",
    a: "L'Art. 10 de la Llei 19/2010 estableix una reducció del 100% del capital percebut per assegurances de vida amb un límit de 9.195,49€. Aquesta reducció és compatible amb la reducció per parentiu. A més, s'apliquen les bonificacions en quota de l'Art. 12 (fins al 99% per a cònjuge i Grups I i II).",
  },
  {
    q: "Quin termini hi ha per al Model 652?",
    a: "El termini és de 6 mesos des de la data de defunció de l'assegurat, el mateix que rige per al Model 650. Es pot sol·licitar una pròrroga de 6 mesos addicionals dins dels primers 5 mesos (Art. 68 RISD), que comporta interessos de demora.",
  },
  {
    q: "El Model 652 requereix acompanyar un Model 660?",
    a: "Quan l'assegurança de vida forma part d'un expedient successori (l'habitual), el capital de l'assegurança s'inclou a l'inventari del Model 660 com a bé del caudal relicte. Si el beneficiari només percep l'assegurança i no hereta béns, pot no ser necessari un 660 independent, però la pràctica habitual és incloure'l a l'inventari de l'expedient.",
  },
  {
    q: "Pot Ulpiano generar el Model 652 automàticament?",
    a: "Sí. Ulpiano incorpora les assegurances de vida com a categoria dins de l'inventari patrimonial. Quan es registra una pòlissa amb beneficiari diferent del prenedor, el motor fiscal genera automàticament el Model 652 amb la quota calculada, les reduccions aplicades i la normativa citada, conectat amb la resta de models de l'expedient.",
  },
];

export default function Model652PageCa() {
  return (
    <main>

      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Models fiscals", href: "/ca/models" },
          { name: "Model 652", href: "/ca/models/model-652" },
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

      <section style={{ background: "var(--night)", color: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ marginBottom: "var(--space-6)" }}>
            <a href="/ca/models" style={{ fontSize: "14px", color: "var(--mist)", textDecoration: "none" }}>
              Models fiscals
            </a>
          </div>
          <ModelNavCa active="652" />
          <div style={{ marginTop: "var(--space-8)" }}>
            <div className="eyebrow" style={{ color: "var(--mist)", marginBottom: "var(--space-4)" }}>
              MODEL FISCAL
            </div>
            <h1 className="h1" style={{ color: "var(--white)", marginBottom: "var(--space-6)" }}>
              Model 652: Autoliquidació d'Assegurances de Vida
            </h1>
            <p className="body-lg" style={{ maxWidth: 640, color: "var(--mist)", marginBottom: "var(--space-6)" }}>
              El Model 652 és el formulari d'autoliquidació de l'Impost sobre Successions i Donacions (ISD) per a la tributació del capital percebut per assegurances de vida quan el beneficiari és persona diferent del prenedor de la pòlissa, i la percepció es produeix per causa de mort.
            </p>
            <div style={{ display: "inline-block", padding: "var(--space-3) var(--space-4)", background: "var(--warning-bg)", borderRadius: "6px", fontSize: "13px", color: "var(--warning)" }}>
              Normativa: Art. 9.c) LISD + Llei 19/2010 (Art. 10)
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DEFINICIÓ
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-6)" }}>
            Què és el Model 652?
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-6)", maxWidth: 720 }}>
            El Model 652 és l'autoliquidació complementària de l'Impost sobre Successions i Donacions que ha de presentar el beneficiari d'una assegurança de vida quan aquesta és una persona diferent del prenedor de la pòlissa i la percepció del capital es produeix per causa de mort de l'assegurat. Es tracta d'un tribut autonòmic a Catalunya, subjecte a les bonificacions i reduccions establertes en la Llei 19/2010.
          </p>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-8)", maxWidth: 720 }}>
            A diferència del Model 650 (autoliquidació per herència de béns i drets del caudal relicte), el Model 652 grava específicament la percepció del capital de l'assegurança de vida, independentment de que el beneficiari sigui o no hereu del resta del patrimoni del causant. En la pràctica, quan un expedient successori inclou tant herència com assegurances de vida, el beneficiari pot estar obligat a presentar tant el Model 650 com el 652.
          </p>
          <div style={{ marginTop: "var(--space-8)" }}>
            {summaryTable.map((row) => (
              <div key={row.field} className="mod-summary-row">
                <div className="mod-summary-field">{row.field}</div>
                <div className="mod-summary-value">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            SUPÒSITS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Quan es tributa pel Model 652?
          </h2>
          <div className="mod-obligados-grid">
            <div>
              <h3>Beneficiari diferent del prenedor</h3>
              <p>La condició principal: qui cobra l'assegurança ha de ser diferent de qui pagava les primes.</p>
            </div>
            <div>
              <h3>Percepció per causa de mort</h3>
              <p>El fet que origina el cobrament és el falleciment de l'assegurat. No aplica a assegurances de vida en vida o invalidesa.</p>
            </div>
            <div>
              <h3>Persona física beneficiària</h3>
              <p>El subjecte passiu és sempre una persona física. Si el beneficiari és una persona jurídica, el tractament fiscal és diferent.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Amb Ulpiano
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-6)", maxWidth: 640 }}>
            Ulpiano integra les assegurances de vida dins del patrimoni del causant i calcula automàticament la tributació a través del Model 652, aplicant les reduccions específiques de Catalunya i conectant la informació amb la resta de l'expedient successori.
          </p>
          <ul style={{ marginBottom: "var(--space-8)", paddingLeft: "var(--space-6)" }}>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Generació automàtica del Model 652 quan es registra una assegurança amb beneficiari diferent del prenedor.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Aplicació de reduccions catalanes (Art. 10 Llei 19/2010) i bonificacions per parentiu.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Connexió del Model 652 amb el Model 660 (inventari) i el Model 650 (herència).
            </li>
          </ul>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/ca/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Veure demo
            </a>
            <a href="/ca/solucions/fiscalitat-successoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--ink)" }}>
              Veure motor fiscal complet
            </a>
          </div>
        </div>
      </section>

      <Model652InteractiveShellsCa faqs={faqs} />

      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Altres models relacionats
          </h2>
          <div className="mod-related-grid">
            <a href="/ca/models/model-650" style={{ display: "block" }}>
              <h4>Model 650</h4>
              <p>Autoliquidació per herència de béns i drets del caudal relicte.</p>
            </a>
            <a href="/ca/models/model-660" style={{ display: "block" }}>
              <h4>Model 660</h4>
              <p>Inventari de béns i drets que integren el caudal hereditari.</p>
            </a>
            <a href="/ca/models/model-651" style={{ display: "block" }}>
              <h4>Model 651</h4>
              <p>Autoliquidació per donació de béns i drets entre vius.</p>
            </a>
            <a href="/ca/models/model-653" style={{ display: "block" }}>
              <h4>Model 653</h4>
              <p>Consolidació de domini per extinció de l'usdefruit.</p>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--night)", color: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--white)", marginBottom: "var(--space-6)", maxWidth: 640 }}>
            Cada model de l'expedient, generat des de les mateixes dades.
          </h2>
          <p className="body-lg" style={{ color: "var(--mist)", marginBottom: "var(--space-8)", maxWidth: 640 }}>
            Sol·licita una demo i comprova com Ulpiano genera el Model 652 del beneficiari de l'assegurança juntament amb la resta de models de l'expedient successori.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/ca/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Sol·licita demo
            </a>
            <a href="/ca/solucions/fiscalitat-successoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--white)" }}>
              Veure solució
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
