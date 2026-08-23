import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Quadern particional: com redactar-lo sense errors",
  description:
    "Guia pas a pas del quadern particional a Catalunya: inventari, cabal relicte, llegítima (art. 451-5 CCCat), adjudicacions i coherència amb els models 660 i 650.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/quadern-particional-catalunya",
    languages: {
      es: "https://ulpiano.es/recursos/blog/quadern-particional-cataluna",
      ca: "https://ulpiano.es/ca/recursos/blog/quadern-particional-catalunya",
      "x-default": "https://ulpiano.es/recursos/blog/quadern-particional-cataluna",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Quadern particional: com redactar-lo sense errors",
    description:
      "Inventari, cabal relicte, llegítima i adjudicacions: cinc passos per tancar un quadern coherent amb els models 660 i 650.",
    url: "https://ulpiano.es/ca/recursos/blog/quadern-particional-catalunya",
    locale: "ca_ES",
    type: "article",
  },
};

export default function QuadernParticionalArticlePageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "El quadern particional a Catalunya",
            href: "/ca/recursos/blog/quadern-particional-catalunya",
          },
        ]}
      />
      <main>
        <article className="pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="container">
            <Link
              href="/ca/recursos/blog"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green no-underline transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
            >
              <ArrowLeft aria-hidden="true" size={18} />
              Torna al blog
            </Link>

            <header className="mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">Catalunya</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  8 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Com redactar un quadern particional sense errors
              </h1>
              <p className="body-lg mt-6 text-slate">
                El quadern particional és el document on es veu si els números
                d&rsquo;una herència estan ben fets. No és un tràmit: és la
                partició. Fixa què rep cada hereu i cada legatari, i és la base
                sobre la qual es liquida l&rsquo;Impost de Successions.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Si el quadern té errors, els models fiscals n&rsquo;hereten
                l&rsquo;error —i el que era un document intern acaba sent un
                requeriment de l&rsquo;Agència Tributària de Catalunya o una
                discussió entre germans. Els errors, però, segueixen un patró.
                Un procés disciplinat els evita.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Què ha de contenir un quadern particional
              </h2>
              <p className="mt-5">Com a mínim, cinc blocs:</p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Relació de causant, hereus i legataris</strong>, amb
                  el títol successori (testament, pacte successori o declaració
                  d&rsquo;hereus).
                </li>
                <li className="pl-2">
                  <strong>Inventari del patrimoni</strong>, amb la valoració de
                  cada bé a la data de la defunció.
                </li>
                <li className="pl-2">
                  <strong>Determinació del cabal relicte net</strong> (actiu
                  menys passiu deduïble).
                </li>
                <li className="pl-2">
                  <strong>Càlcul de la{" "}
                  <Link
                    href="/ca/recursos/blog/la-legitima-catalana"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    llegítima
                  </Link>
                  </strong>{" "}
                  conforme a l&rsquo;art. 451-5 del Codi Civil de Catalunya.
                </li>
                <li className="pl-2">
                  <strong>Adjudicacions:</strong> quin bé va a qui, amb quin
                  valor, i les compensacions en diners si n&rsquo;hi ha.
                </li>
              </ol>
              <p className="mt-5">
                Cada bloc ha de citar la norma que aplica. No és
                academicisme: és la garantia —per a tu i per al client— que la
                partició s&rsquo;ha fet amb la llei a la vista, no amb la
                plantilla de l&rsquo;expedient anterior.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Pas 1 — Inventari complet i valorat
              </h2>
              <p className="mt-5">
                Cada bé, identificat i valorat <strong>a la data de la
                defunció</strong>:
              </p>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Immobles:</strong> referència cadastral, nota simple
                  actualitzada, càrregues (la hipoteca pendent es deduirà del
                  passiu), coeficient de participació si escau.
                </li>
                <li>
                  <strong>Comptes i productes financers:</strong> certificat
                  bancari de saldo a data de defunció. Compte amb els béns del
                  cònjuge si el règim econòmic era de comunitat.
                </li>
                <li>
                  <strong>Empresa familiar i participacions:</strong>
                  percentatge i criteri de valoració justificat.
                </li>
                <li>
                  <strong>Actius digitals:</strong> criptomonedes i comptes en
                  línia, valorats a la data de la defunció. És on més
                  inventaris coixegen: o no hi apareixen, o hi apareixen amb la
                  valoració del dia que algú se&apos;n va recordar.
                </li>
                <li>
                  <strong>Altres béns mobles rellevants.</strong>
                </li>
              </ul>
              <p className="mt-5">
                I igual d&rsquo;important: què <strong>no</strong> entra a
                l&rsquo;herència (drets que s&rsquo;extingeixen amb la mort,
                béns que el causant tenia en usdefruit).
              </p>

              <h2 className="h2 mt-12 text-ink">
                Pas 2 — El cabal relicte net
              </h2>
              <p className="mt-5">
                <strong>Cabal relicte net = actiu − passiu deduïble.</strong>
              </p>
              <p className="mt-5">
                Passiu deduïble: deutes acreditats del causant, despeses de
                darrera malaltia i d&rsquo;enterrament o incineració. No es
                dedueix l&rsquo;impost de successions que es pagarà després: la
                liquidació ve més tard i sobre la base que ara estàs fixant.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Pas 3 — La llegítima: una quarta part global, no per cap
              </h2>
              <p className="mt-5">
                A Catalunya, la llegítima és <strong>la quarta part</strong>{" "}
                d&rsquo;una base de càlcul pròpia (art. 451-5 CCCat): el valor
                dels béns a la mort del causant, menys deutes i despeses,{" "}
                <strong>més</strong> les donacions fetes pel causant en els deu
                anys anteriors, segons les regles del mateix article.
              </p>
              <p className="mt-5">Dues precisions que estalvien litigis:</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>És global.</strong> El 25% és la llegítima de tots els
                  legitimaris junts, a repartir entre ells. Amb tres fills, la
                  llegítima individual és 1/12 del cabal computable —no una
                  quarta part per cap. L&rsquo;error de la &ldquo;quarta part
                  per fill&rdquo; infla la llegítima i desquadra tota la
                  partició.
                </li>
                <li>
                  <strong>És un dret de crèdit.</strong> El legitimari no és
                  copropietari dels béns: té dret a un valor, que l&rsquo;hereu
                  pot pagar en diners o en béns. I si el legitimari ja va rebre
                  donacions imputables en vida (art. 451-8 CCCat), el seu crèdit
                  pot quedar totalment o parcialment cobert.
                </li>
              </ul>
              <p className="mt-5">
                Recorda també que el cònjuge vidu <strong>no és
                legitimari</strong> en dret català: la seva institució és la{" "}
                <strong>quarta vidual</strong> (art. 452-1 CCCat), amb
                pressupòsits propis. Barrejar-les és un clàssic de les
                plantilles d&rsquo;origen estatal.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Pas 4 — Adjudicacions coherents amb el cabal
              </h2>
              <p className="mt-5">
                Definits el cabal i la llegítima, s&rsquo;adjudiquen els béns.
                Tres comprovacions:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Els valors d&rsquo;adjudicació són els de
                  l&rsquo;inventari</strong> (data de defunció), no valors
                  &ldquo;rodons&rdquo; ni antics. Per als immobles, a efectes de
                  l&rsquo;ISD cal tenir present el valor de referència del
                  Cadastre: si és superior al valor declarat, preval com a base
                  imposable (Llei 11/2021 de mesures contra el frau fiscal).
                </li>
                <li className="pl-2">
                  <strong>Cada legitimari té el seu crèdit cobert</strong>, en
                  béns o en diners, i les compensacions en metàl·lic queden
                  documentades al quadern.
                </li>
                <li className="pl-2">
                  <strong>Els llegats es computen abans de repartir el
                  romanent</strong> —i si són tan grans que deixen l&rsquo;hereu
                  per sota de la quarta part de l&rsquo;actiu líquid, cal
                  analitzar la{" "}
                  <Link
                    href="/ca/recursos/blog/quarta-falcidia"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    quarta falcídia
                  </Link>{" "}
                  (arts. 427-40 i següents CCCat) abans de pagar-los.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                Pas 5 — Validació creuada amb els models 660 i 650
              </h2>
              <p className="mt-5">
                El quadern i la liquidació fiscal han d&rsquo;explicar la
                mateixa història:
              </p>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>
                    <Link
                      href="/ca/models/model-660"
                      className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                    >
                      Model 660
                    </Link>{" "}
                    (inventari):
                  </strong>{" "}
                  els béns i valors declarats han de coincidir amb
                  l&rsquo;inventari del quadern, un per un.
                </li>
                <li>
                  <strong>
                    <Link
                      href="/ca/models/model-650"
                      className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                    >
                      Model 650
                    </Link>{" "}
                    (autoliquidació de cada hereu):
                  </strong>{" "}
                  la base imposable de cadascú ha de correspondre amb allò que
                  rep segons el quadern, i les reduccions aplicades (parentiu,
                  habitatge habitual, empresa familiar — Llei 19/2010) han de
                  tenir el seu suport en el mateix expedient.
                </li>
              </ul>
              <p className="mt-5">
                Una casa que val 300.000 € al quadern i 280.000 € al 650 és
                exactament el tipus d&rsquo;incoherència que provoca una
                comprovació. El termini, a més, no espera: sis mesos des de la
                defunció per a la presentació en període voluntari, prorrogables
                per sis mesos més si la pròrroga se sol·licita dins dels primers
                cinc mesos del termini.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Els errors que més es repeteixen
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Dades de l&rsquo;expedient anterior a la
                  plantilla.</strong> El quadern nou arrenca copiant el vell, i
                  un paràgraf o una xifra de l&rsquo;altra família sobreviu
                  fins a la signatura. Cada expedient ha de començar de zero.
                </li>
                <li className="pl-2">
                  <strong>Valoracions incoherents entre documents.</strong> Una
                  xifra per bé, justificada, i la mateixa a tot arreu: quadern,
                  660 i 650.
                </li>
                <li className="pl-2">
                  <strong>Llegítima mal computada.</strong> Per cap en lloc de
                  global, sense les donacions dels deu anys, o amb el cònjuge
                  com a legitimari.
                </li>
                <li className="pl-2">
                  <strong>Compensacions en diners no documentades.</strong> Si
                  un hereu rep més valor en béns i ho compensa en metàl·lic, el
                  quadern ho ha de dir. Si no, els números no tanquen.
                </li>
                <li className="pl-2">
                  <strong>El 650 que no reflecteix l&rsquo;adjudicació
                  real.</strong> La base imposable de cada hereu és el que
                  rep —béns i diners—, no només el bé principal.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                La comprovació final
              </h2>
              <p className="mt-5">
                Abans de tancar: la suma d&rsquo;adjudicacions ha de ser igual
                al cabal partible; la suma de llegítimes individuals ha de ser
                exactament la quarta part de la base computable; i cada xifra
                del 660 i del 650 ha de traçar-se fins a l&rsquo;inventari.
              </p>
              <p className="mt-5">
                Són comprovacions mecàniques —i per això són les que un motor
                determinista fa millor que ningú. A Ulpiano, la llegítima es
                calcula conforme a l&rsquo;art. 451-5 CCCat amb la norma citada
                al resultat, les adjudicacions es validen contra el cabal, i els
                models 660 i 650 es generen des de les mateixes dades del
                quadern: una sola font, cap desquadre. El criteri jurídic —què
                s&rsquo;adjudica a qui, com es paga la llegítima— continua sent
                teu.
              </p>
              <p className="mt-5">
                Com dic sempre als col·legues:{" "}
                <strong>Ulpiano no et substitueix; et treu la calculadora
                de sobre.</strong>
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    El quadern fixa la partició i alimenta la liquidació
                    fiscal: un error aquí es replica al 660 i al 650.
                  </li>
                  <li>
                    La llegítima catalana és una quarta part global, no per
                    cap, i el cònjuge no és legitimari.
                  </li>
                  <li>
                    Els llegats massa grans exigeixen revisar la quarta falcídia
                    abans de pagar-los.
                  </li>
                  <li>
                    Una sola xifra per bé, a tot arreu, valorada a data de
                    defunció.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Per a professionals del successori</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novetats i doctrina comentades per a professionals
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Subscriu-te a la newsletter quinzenal d&rsquo;Ulpiano i
                  descarrega el checklist de l&rsquo;expedient successori, amb
                  una secció específica de coherència del quadern.
                </p>
                <NewsletterSignupCa />
                <Link
                  href="/ca/recursos/checklist-expedient-successori"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
                >
                  <Download aria-hidden="true" size={18} />
                  Descarregar el checklist de l&rsquo;expedient successori
                </Link>
              </aside>

              <p className="mt-8 rounded-lg border border-mist bg-surface p-6 text-[15px] leading-7 text-slate">
                Aquest article és informatiu i no substitueix l&rsquo;anàlisi
                d&rsquo;un cas concret. Si vols veure com queda un quadern fet
                així —amb un cas anonimitzat, sense compromís—{" "}
                <Link
                  href="/ca/contacte"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  escriu-me
                </Link>
                . Sóc advocat a Girona, com molts de vosaltres, i m&rsquo;estimo
                més ensenyar-ho que explicar-ho.
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/quarta-falcidia"
        label="Quarta falcídia"
        description="El parany més car del testament català, i com detectar-lo abans d'acceptar l'encàrrec."
      />
    </>
  );
}
