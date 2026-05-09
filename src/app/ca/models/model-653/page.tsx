import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ModelNavCa } from "@/components/modelos/ModelNavCa";
import { Model653InteractiveShellsCa } from "./Model653Client";

export const metadata: Metadata = {
  title: "Model 653 Catalunya: Consolidació de Domini i Extinció d'Usdefruit | Ulpiano",
  description: "Guia completa del Model 653: què és, quan es presenta, causes d'extinció de l'usdefruit, càlcul de la quota complementària (Art. 26.c LISD) i com Ulpiano simula la consolidació abans de constituir l'usdefruit.",
  alternates: {
    canonical: "https://ulpiano.es/ca/models/model-653",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-653",
      ca: "https://ulpiano.es/ca/models/model-653",
    },
  },
};

const summaryTable = [
  { field: "Denominació oficial", value: "Autoliquidació de l'ISD — Consolidació de domini" },
  { field: "Base legal estatal", value: "Art. 26.c) Llei 29/1987 (LISD) + Art. 51.2 RD 1629/1991 (RISD)" },
  { field: "Fet imposable", value: "Extinció de l'usdefruit i consolidació del ple domini en el nu propietari" },
  { field: "Subjecte passiu", value: "Nu propietari que consolida el ple domini" },
  { field: "Termini", value: "6 mesos des de l'extinció de l'usdefruit" },
  { field: "Administració competent", value: "CA on es va presentar el Model 650 original" },
  { field: "Model previ", value: "Model 650 (autoliquidació per nua propietat)" },
];

const faqs = [
  {
    q: "Quan neix l'obligació de presentar el Model 653?",
    a: "L'obligació neix quan s'extingeix l'usdefruit que va ser constituït en la successió. La causa més habitual és el falleciment de l'usufructuari (cònjuge vidu). El termini és de 6 mesos des de la data d'extinció, igual que en el Model 650.",
  },
  {
    q: "Com es calcula la quota del Model 653?",
    a: "Es calcula la quota que correspondria al ple domini del bé aplicant les normes vigents en el moment del desmembrament original (falleciment del primer causant), i es resta la quota que ja s'ha ingressat per la nua propietat en el Model 650. La diferència és la quota complementària.",
  },
  {
    q: "S'apliquen les normes del moment de la consolidació o del moment de la defunció original?",
    a: "S'apliquen les normes i tipus vigents en el moment del desmembrament original (el falleciment que va generar el Model 650), no les del moment de la consolidació. Tanmateix, l'edat de l'usufructuari en el moment de l'extinció pot afectar al càlcul de la valoració de l'usdefruit.",
  },
  {
    q: "Què passa si no es va presentar correctament el Model 650 en el seu moment?",
    a: "La presentació del Model 653 pot revelar inconsistències amb l'autoliquidació original. Si la nua propietat no es va liquidar correctament, l'Administració pot regularitzar ambdues liquidacions. És recomanable revisar l'expedient original abans de presentar el 653.",
  },
  {
    q: "Pot Ulpiano simular la consolidació abans que s'extingeixi l'usdefruit?",
    a: "Sí. Ulpiano permet executar una simulació prospectiva: calcula la quota complementària que haurà de pagar el nu propietari quan es produeixi la consolidació, abans que ocorri. Això permet al professional planificar la càrrega fiscal total de l'operació successòria des de l'inici.",
  },
];

export default function Model653PageCa() {
  return (
    <main>

      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Models fiscals", href: "/ca/models" },
          { name: "Model 653", href: "/ca/models/model-653" },
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
          <ModelNavCa active="653" />
          <div style={{ marginTop: "var(--space-8)" }}>
            <div className="eyebrow" style={{ color: "var(--mist)", marginBottom: "var(--space-4)" }}>
              MODEL FISCAL
            </div>
            <h1 className="h1" style={{ color: "var(--white)", marginBottom: "var(--space-6)" }}>
              Model 653: Consolidació de Domini
            </h1>
            <p className="body-lg" style={{ maxWidth: 640, color: "var(--mist)", marginBottom: "var(--space-6)" }}>
              El Model 653 és l'autoliquidació complementària que el nu propietari ha de presentar quan s'extingeix l'usdefruit i consolida el ple domini sobre els béns heretats. És el tancament fiscal d'una successió amb desmembrament del domini.
            </p>
            <div style={{ display: "inline-block", padding: "var(--space-3) var(--space-4)", background: "var(--warning-bg)", borderRadius: "6px", fontSize: "13px", color: "var(--warning)" }}>
              Normativa: Art. 26.c) LISD + Art. 51.2 RISD
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            DEFINICIÓ
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Què és el Model 653?
          </h2>
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
            Quan s'extingeix l'usdefruit?
          </h2>
          <div className="mod-obligados-grid">
            <div>
              <h3>Falleciment de l'usufructuari</h3>
              <p>La causa més habitual. L'usdefruit del cònjuge vidu s'extingeix amb el seu falleciment i els fills nous propietaris consoliden el ple domini.</p>
            </div>
            <div>
              <h3>Renúncia de l'usufructuari</h3>
              <p>Acte jurídic voluntari formalitzat en escriptura pública. La consolidació es produeix en el moment de la renúncia.</p>
            </div>
            <div>
              <h3>Venciment del termini o compliment de condició</h3>
              <p>Si l'usdefruit va ser constituït per temps determinat o condició, la consolidació opera al complir-se el termini o condició.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            CÀLCUL
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            La quota complementària del Model 653
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-8)", maxWidth: 720 }}>
            El càlcul del Model 653 es basa en determinar la diferència entre el que correspondria tributar pel ple domini en el moment original del falleciment i el ja ingressat per la nua propietat. Aquesta quota complementària representa el valor fiscal de l'usdefruit que s'extingeix.
          </p>
          <div className="mod-calc-steps">
            <div className="mod-calc-step">
              <div className="mod-calc-step-num">Pas 1</div>
              <div className="mod-calc-step-text">
                Calcular la quota del ple domini aplicant les normes vigents en el moment del desmembrament original (falleciment del primer causant).
              </div>
            </div>
            <div className="mod-calc-step">
              <div className="mod-calc-step-num">Pas 2</div>
              <div className="mod-calc-step-text">
                Restar la quota ja ingressada per la nua propietat en el Model 650 original. La diferència és la quota complementària a ingressar.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}>
            Amb Ulpiano
          </h2>
          <p style={{ color: "var(--slate)", fontSize: "16px", lineHeight: 1.7, marginBottom: "var(--space-6)", maxWidth: 640 }}>
            Ulpiano permet simular la consolidació del domini abans que es produeixi l'extinció de l'usdefruit. Calcula la quota complementària prospectivament, permetent al professional planificar la càrrega fiscal total des de la constitució de l'usdefruit i comparar escenaris sucesoris.
          </p>
          <ul style={{ marginBottom: "var(--space-8)", paddingLeft: "var(--space-6)" }}>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Simulació prospectiva: calcula el Model 653 abans que s'extingeixi l'usdefruit.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Comparació d'escenaris: evalua distintes causes d'extinció (falleciment, renúncia, venciment) i el seu impacte fiscal.
            </li>
            <li style={{ color: "var(--slate)", fontSize: "15px", lineHeight: 1.7, marginBottom: "var(--space-3)" }}>
              Integració amb el Model 650: connecta la nua propietat original amb la consolidació posterior.
            </li>
          </ul>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/ca/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Veure demo
            </a>
            <a href="/ca/solucions/planificacio-successoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--ink)" }}>
              Veure planificació
            </a>
          </div>
        </div>
      </section>

      <Model653InteractiveShellsCa faqs={faqs} />

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
            <a href="/ca/models/model-652" style={{ display: "block" }}>
              <h4>Model 652</h4>
              <p>Autoliquidació d'assegurances de vida en successions.</p>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--night)", color: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2 className="h2" style={{ color: "var(--white)", marginBottom: "var(--space-6)", maxWidth: 640 }}>
            El cost fiscal de l'usdefruit, calculat abans de constituir-lo.
          </h2>
          <p className="body-lg" style={{ color: "var(--mist)", marginBottom: "var(--space-8)", maxWidth: 640 }}>
            Sol·licita una demo i comprova com Ulpiano simula la consolidació de domini i compara escenaris sucesoris abans de prendre decisions.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <a href="/ca/demo" className="btn-primary" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", background: "var(--ulpiano-green)", color: "var(--white)" }}>
              Sol·licita demo
            </a>
            <a href="/ca/solucions/planificacio-successoria" className="btn-ghost" style={{ padding: "var(--space-3) var(--space-6)", textDecoration: "none", borderRadius: "6px", border: "1px solid var(--mist)", color: "var(--white)" }}>
              Veure planificació
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
