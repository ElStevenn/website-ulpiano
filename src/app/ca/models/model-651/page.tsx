import { Metadata } from "next";
import Link from "next/link";
import { Model651InteractiveShellsCa } from "./Model651Client";
import { ModelNavCa } from "@/components/modelos/ModelNavCa";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Model 651 Catalunya: Guia Completa de l'Impost de Donacions | Ulpiano",
  description:
    "Guia completa del Model 651: què és, qui el presenta, termini de 30 dies hàbils, reduccions catalanes per a donacions (Llei 19/2010, Arts. 15-23), comparativa donació vs herència i com Ulpiano calcula la quota automàticament.",
  alternates: {
    canonical: "https://ulpiano.es/ca/models/model-651",
    languages: {
      es: "https://ulpiano.es/modelos/modelo-651",
      ca: "https://ulpiano.es/ca/models/model-651",
    },
  },
};

const summaryTable = [
  {
    field: "Denominació oficial",
    value: "Autoliquidació de l'ISD — Donacions",
  },
  {
    field: "Base legal estatal",
    value: "Llei 29/1987 (LISD) + RD 1629/1991 (RISD)",
  },
  {
    field: "Base legal autonòmica",
    value: "Llei 19/2010, Títol II (Arts. 15-23)",
  },
  {
    field: "Fet imposable",
    value:
      "Adquisició de béns i drets per donació o qualsevol negoci jurídic gratuït inter vivos",
  },
  {
    field: "Subjecte passiu",
    value: "El donatari (qui rep la donació)",
  },
  {
    field: "Termini",
    value: "30 dies hàbils des de la data de la donació",
  },
  {
    field: "Administració competent",
    value: "CA de residència habitual del donatari (ATC a Catalunya)",
  },
  {
    field: "IRPF del donant",
    value: "Guany patrimonial tributable en IRPF del transmitent",
  },
];

const faqs = [
  {
    q: "Quina és la diferència entre el Model 651 i el Model 650?",
    a: "El Model 651 liquida donacions (transmissions inter vivos gratuïtes): el donant transmet en vida. El Model 650 liquida successions (adquisicions mortis causa): els béns es transmeten per falleciment. Les reduccions i bonificacions són distintes — en general, la successió tributa menys que la donació a Catalunya gràcies a la bonificació fins al 99% en quota per a Grups I i II.",
  },
  {
    q: "Té la donació implicacions en l'IRPF del donant?",
    a: "Sí. A diferència de la successió, la donació genera un guany patrimonial en l'IRPF del donant per la diferència entre el valor d'adquisició i el valor real del bé en el moment de la donació. En successions, existeix l'exempció coneguda com a 'plusvàlua del mort' (Art. 33.3.b LIRPF). Aquesta tributació addicional en IRPF ha de valorar-se sempre en planificar una donació.",
  },
  {
    q: "Quin és el termini per presentar el Model 651?",
    a: "30 dies hàbils des de la data de la donació (data de l'escriptura pública o de l'acte que formalitzi la transmissió). No es computen dissabtes, diumenges ni festius. No hi ha pròrroga com en successions. Si es presenta fora de termini, s'apliquen els recàrrecs de l'Art. 27 LGT.",
  },
  {
    q: "Quines reduccions s'apliquen a les donacions a Catalunya?",
    a: "La Llei 19/2010 (Títol II, Arts. 15-23) estableix reduccions per parentiu (fins a 196.000€ per a menors de 21 anys, 60.000€ per a Grup II), primera vivenda (95%, màx. 60.000€), empresa familiar (95%), discapacitat (120.000€ o 240.000€) i donacions dineraries per a primera vivenda. La bonificació en quota per a cònjuge i descendents pot arribar al 60%.",
  },
  {
    q: "Pot Ulpiano calcular i comparar donació vs herència?",
    a: "Sí. Ulpiano genera el Model 651 automàticament i permet comparar escenaris: quin seria el cost fiscal si transmetéssiu un bé en vida (donació) enfront de transmeteu-lo per herència. El comparador inclou l'impacte en IRPF del donant i la diferència de reduccions i bonificacions entre ambdues vies.",
  },
];

export default function Model651CaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Models fiscals", href: "/ca/models" },
          { name: "Model 651", href: "/ca/models/model-651" },
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

      {/* Hero Section */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          color: "white",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "var(--space-8)" }}>
            <ol
              style={{
                display: "flex",
                gap: "8px",
                fontSize: "14px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link
                  href="/ca"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                >
                  Inici
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
              <li>
                <Link
                  href="/ca/models"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                >
                  Models
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
              <li style={{ color: "rgba(255,255,255,0.9)" }}>Model 651</li>
            </ol>
          </nav>

          <ModelNavCa active="651" />

          <div
            className="eyebrow"
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "var(--space-4)",
              marginTop: "var(--space-6)",
            }}
          >
            MODEL FISCAL
          </div>

          <h1
            className="h1"
            style={{ color: "white", marginBottom: "var(--space-6)" }}
          >
            Model 651: Autoliquidació de l'Impost de Donacions
          </h1>

          <p
            className="body-lg"
            style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720 }}
          >
            El Model 651 és el formulari d'autoliquidació que el donatari ha de
            presentar per liquidar l'Impost sobre Successions i Donacions (ISD)
            en la seva modalitat d'adquisicions inter vivos gratuïtes —
            donacions.
          </p>

          <div
            style={{
              display: "inline-block",
              marginTop: "var(--space-6)",
              padding: "12px 16px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "6px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.85)",
              borderLeft: "3px solid var(--ulpiano-green)",
            }}
          >
            Normativa a Catalunya: Llei 19/2010, Títol II (Arts. 15-23)
          </div>
        </div>
      </section>

      {/* Què és el Model 651? */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            DEFINICIÓ
          </div>
          <h2
            className="h2"
            style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}
          >
            Què és el Model 651?
          </h2>

          <div style={{ maxWidth: 720, marginBottom: "var(--space-8)" }}>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.6 }}>
              El Model 651 és el document d'autoliquidació de l'Impost sobre
              Successions i Donacions (ISD) en la seva modalitat de transmissions
              inter vivos gratuïtes. S'utilitza quan una persona realitza una
              donació — és a dir, transmet béns o drets a títol gratuït en vida
              —.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--slate)",
                lineHeight: 1.6,
                marginTop: "var(--space-4)",
              }}
            >
              A diferència de les successions mortis causa (Model 650), on els
              béns es transmeten per falleciment del donant, en la donació ambdues
              parts estan vives. A Catalunya, la regulació específica es troba en
              la Llei 19/2010, que estableix reduccions i bonificacions pròpies
              del territori.
            </p>
          </div>

          {/* Summary Table */}
          <div style={{ marginTop: "var(--space-12)" }}>
            {summaryTable.map((row, idx) => (
              <div key={idx} className="mod-summary-row">
                <div className="mod-summary-field">{row.field}</div>
                <div className="mod-summary-value">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qui ha de presentar? */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            OBLIGATS TRIBUTARIS
          </div>
          <h2
            className="h2"
            style={{ color: "var(--ink)", marginBottom: "var(--space-8)" }}
          >
            Qui ha de presentar el Model 651?
          </h2>

          <div style={{ maxWidth: 720, marginBottom: "var(--space-10)" }}>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.6 }}>
              El subjecte passiu del Model 651 és el donatari, és a dir, la
              persona que rep la donació. És el donatari qui ha de presentar
              l'autoliquidació davant de l'Agència Tributaria de Catalunya (ATC)
              en el termini de 30 dies hàbils des de la data de l'acte de donació
              (data de l'escriptura pública).
            </p>
          </div>

          {/* Warning Box */}
          <div
            style={{
              background: "rgba(251, 191, 36, 0.08)",
              border: "1px solid rgba(251, 191, 36, 0.3)",
              borderRadius: "8px",
              padding: "var(--space-6)",
              marginTop: "var(--space-10)",
              maxWidth: 720,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "20px", lineHeight: 1 }}>⚠</div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "var(--space-2)",
                    fontSize: "15px",
                  }}
                >
                  IMPLICACIÓ EN L'IRPF DEL DONANT
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--slate)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Encara que l'autoliquidació la presenta el donatari, el donant
                  ha d'incloure en la seva declaració de l'IRPF el guany
                  patrimonial derivat de la donació. A diferència de les
                  successions (Art. 33.3.b LIRPF), on existeix exempció per la
                  'plusvàlua del mort', en les donacions aquesta exempció no
                  aplica. Aquesta tributació addicional en IRPF ha de tenir-se
                  en compte en planificar una donació.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donació vs Herència */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            COMPARATIVA
          </div>
          <h2
            className="h2"
            style={{ color: "var(--ink)", marginBottom: "var(--space-10)" }}
          >
            Donació o herència? Diferències fiscals clau
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table className="mod-table">
              <thead>
                <tr>
                  <th>Criteri</th>
                  <th>Model 651 (Donació)</th>
                  <th>Model 650 (Herència)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Termini presentació</td>
                  <td>30 dies hàbils</td>
                  <td>6 mesos</td>
                </tr>
                <tr>
                  <td>Bonificació quota Grups I-II</td>
                  <td>Fins al 60%</td>
                  <td>Fins al 99%</td>
                </tr>
                <tr>
                  <td>IRPF del transmitent</td>
                  <td>Sí (guany patrimonial)</td>
                  <td>No (exempt Art. 33.3.b LIRPF)</td>
                </tr>
                <tr>
                  <td>Reducció parentiu Grup II</td>
                  <td>60.000€</td>
                  <td>100.000€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Amb Ulpiano */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            AMB ULPIANO
          </div>
          <h2
            className="h2"
            style={{
              color: "var(--ink)",
              marginBottom: "var(--space-8)",
              maxWidth: 500,
            }}
          >
            Donació o herència? La resposta està en els números.
          </h2>

          <div style={{ maxWidth: 720, marginBottom: "var(--space-10)" }}>
            <ul style={{ fontSize: "16px", color: "var(--slate)", lineHeight: 1.8 }}>
              <li>
                Càlcul automàtic de la quota de l'ISD a Catalunya amb reduccions
                i bonificacions aplicables.
              </li>
              <li>
                Comparador d'escenaris: quin seria el cost fiscal de la donació
                enfront de transmetre per herència.
              </li>
              <li>
                Impacte complet en IRPF del donant, inclòs el guany patrimonial.
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/ca/demo"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Sol·licita una demo
            </Link>
            <Link
              href="/ca/solucions/fiscalitat-successoria"
              className="btn-ghost btn-ghost--dark"
              style={{ textDecoration: "none" }}
            >
              Veure motor fiscal complet →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Model651InteractiveShellsCa faqs={faqs} />

      {/* Models relacionats */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <h2
            className="h2"
            style={{ color: "var(--ink)", marginBottom: "var(--space-10)" }}
          >
            Models relacionats
          </h2>

          <div className="mod-related-grid">
            <Link
              href="/ca/models/model-650"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODEL 650
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Successions mortis causa
              </div>
            </Link>

            <Link
              href="/ca/models/model-652"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODEL 652
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Assegurances de Vida
              </div>
            </Link>

            <Link
              href="/ca/models/model-653"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODEL 653
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Consolidació de Domini
              </div>
            </Link>

            <Link
              href="/ca/models/model-660"
              style={{
                textDecoration: "none",
                padding: "var(--space-6)",
                background: "var(--white)",
                borderRadius: "8px",
                border: "1px solid var(--mist)",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-2)",
                }}
              >
                MODEL 660
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Inventari de Béns
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "var(--night)",
          padding: "var(--space-20) 0",
          color: "white",
        }}
      >
        <div className="container">
          <h2
            className="h2"
            style={{
              color: "white",
              marginBottom: "var(--space-6)",
              maxWidth: 500,
            }}
          >
            Donació o herència? La resposta està en els números.
          </h2>
          <p
            className="body-lg"
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "var(--space-8)",
              maxWidth: 500,
            }}
          >
            Sol·licita una demo i comprova com Ulpiano calcula, compara i
            genera l'autoliquidació de donacions amb l'impacte fiscal complet.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/ca/demo"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Sol·licita una demo
            </Link>
            <Link
              href="/ca/solucions/fiscalitat-successoria"
              className="btn-ghost btn-ghost--dark"
              style={{ textDecoration: "none" }}
            >
              Veure motor fiscal complet →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
