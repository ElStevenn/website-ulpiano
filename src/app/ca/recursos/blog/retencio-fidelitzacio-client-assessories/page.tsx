import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "Retenir l'hereu: la mètrica que la teva assessoria no mira",
  description:
    "Per què les assessories perden les famílies després de la mort del client titular, i com retenir els hereus en el moment crític.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/retencio-fidelitzacio-client-assessories",
    languages: {
      es: "https://ulpiano.es/recursos/blog/retencion-fidelizacion-cliente-asesorias",
      ca: "https://ulpiano.es/ca/recursos/blog/retencio-fidelitzacio-client-assessories",
      "x-default": "https://ulpiano.es/recursos/blog/retencion-fidelizacion-cliente-asesorias",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Retenir l'hereu: la mètrica que la teva assessoria no mira",
    description:
      "El 61% dels hereus confia en el seu advocat i el 49% en el seu comptable per al successori. Tot i així, la majoria d'assessories perden la família sencera quan mor el client històric.",
    url: "https://ulpiano.es/ca/recursos/blog/retencio-fidelitzacio-client-assessories",
    locale: "ca_ES",
    type: "article",
  },
};

export default function RetencioClientsAssessoriesArticlePageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "Retenir l'hereu",
            href: "/ca/recursos/blog/retencio-fidelitzacio-client-assessories",
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
                <span className="badge">Despatxos</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  6 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Quan mor el client històric: la mètrica de retenció que la teva
                assessoria no mira
              </h1>
              <p className="body-lg mt-6 text-slate">
                Fa trenta anys que és amb l&rsquo;assessoria. Quan mor, la família
                hauria de quedar-se amb vosaltres. Les dades diuen que vol
                quedar-s&rsquo;hi. La majoria d&rsquo;assessories, tot i així, la
                perden.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Fa trenta anys que és amb l&rsquo;assessoria. Ha vist créixer els
                impostos, canviar quatre governs i dues generacions d&rsquo;assessors.
                Quan mor, la família hauria de quedar-se amb vosaltres. Les dades diuen
                que vol quedar-s&rsquo;hi: el 61% dels hereus confia en el seu advocat
                per al successori i el 49% en el seu comptable, davant de només el 20%
                que confia en el seu assessor financer o el seu banc (Funds Society).
              </p>
              <p className="mt-5">Però no s&rsquo;hi queda.</p>
              <p className="mt-5">
                La realitat és més brutal: un cop el client històric desapareix, la
                majoria d&rsquo;assessories perden la relació familiar sencera. I
                aquesta pèrdua no apareix mai al vostre tauler de cartera. No la veieu
                fins que és massa tard.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El problema no és la confiança. És el servei invisible.
              </h2>
              <p className="mt-5">
                Imaginem dues assessories del mateix perfil, a la mateixa ciutat,
                davant de la mateixa situació: mor un client titular d&rsquo;una
                cartera important. En totes dues comença el procés successori. És un
                escenari hipotètic, però qualsevol que porti una cartera familiar
                reconeixerà les dues meitats.
              </p>
              <p className="mt-5">
                <strong>A la primera assessoria,</strong> la comunicació va ser
                correcta. &ldquo;El nostre condol. Necessitem documents. Us enviem un
                llistat per correu. Aneu signant i us anem demanant el que falta.&rdquo;
                L&rsquo;hereu, que vivia en una altra ciutat, no entenia què estava
                passant amb l&rsquo;herència, ni quan es resoldria, ni per què la
                gestió s&rsquo;allargava. Després de dos mesos veient papers sense
                coherència, va decidir endur-s&rsquo;ho tot a un despatx gran de
                Barcelona. Amb l&rsquo;herència se&rsquo;n va anar també la cartera de
                la família.
              </p>
              <p className="mt-5">
                <strong>A la segona assessoria,</strong> l&rsquo;aproximació va ser
                diferent. Quan va morir el client, van obrir un expedient dins del
                mateix sistema de gestió que l&rsquo;hereu ja coneixia. Li van enviar un
                accés: &ldquo;Aquí veus tots els documents, l&rsquo;estat de cada pas,
                quan necessitem la teva intervenció i quan no.&rdquo; L&rsquo;hereu podia
                veure, en qualsevol moment, on era el procés. No era una caixa negra.
                Sis mesos després, quan liquidaven el{" "}
                <Link
                  href="/ca/models/model-660"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Model 660
                </Link>{" "}
                i el 650, la família ja se sentia dins de l&rsquo;operació. Van mantenir
                l&rsquo;hereu com a client. Ara gestiona el patrimoni del causant i
                continua amb ells.
              </p>
              <p className="mt-5">
                La diferència no era el criteri tècnic. Totes dues assessories sabien
                calcular la quota de l&rsquo;ISD i preparar la liquidació fiscal. La
                diferència era <strong>la infraestructura de visibilitat</strong>. Una
                mostrava; l&rsquo;altra, no.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La dada que sona bé però passa poc
              </h2>
              <p className="mt-5">
                Les dades de Funds Society diuen que el 61% dels hereus confia en el
                seu advocat i el 49% en el seu comptable per al successori. És una dada
                esperançadora. Però mesura la confiança <em>en la persona</em>, no la
                retenció <em>del client</em>. Quan arriba el moment crític —quan has de
                liquidar 200.000 € de patrimoni i no entens què està passant—, la
                confiança en la persona s&rsquo;evapora si l&rsquo;experiència és opaca.
              </p>
              <p className="mt-5">
                El mateix estudi, citant dades d&rsquo;Accenture, recull que
                aproximadament 9 de cada 10 hereus no mantenen l&rsquo;assessor financer
                del causant. No és un fenomen específic de la successió. És una
                tendència del relleu generacional en assessorament: els hereus volen
                començar de zero. Però en el cas de l&rsquo;assessoria fiscal i la
                gestoria, el patró és diferent. L&rsquo;hereu sí que vol quedar-s&rsquo;hi.
                El que no vol és quedar-s&rsquo;hi amb incertesa.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La retenció com a mètrica de cartera
              </h2>
              <p className="mt-5">
                Quan feu la revisió anual de clients, comptabilitzeu cartera, quotes
                recurrents, volum d&rsquo;expedients. Poques vegades hi incloeu la{" "}
                <strong>retenció de l&rsquo;hereu del client titular</strong> com a
                mètrica pròpia.
              </p>
              <p className="mt-5">Aquest és el forat.</p>
              <p className="mt-5">
                Un client de trenta anys genera un lifetime value concentrat. Però el
                seu valor real no surt quan el client és viu. Surt quan la família
                decideix si es queda o se&rsquo;n va. Si perds l&rsquo;hereu en el moment
                de la successió, no només perds aquell client. Perds una cartera de tres
                dècades i l&rsquo;oportunitat de tenir la generació següent durant uns
                altres trenta anys.
              </p>
              <p className="mt-5">
                Feu el càlcul amb la vostra pròpia cartera: compteu quants titulars
                tenen més de setanta anys, multipliqueu-ho pel que factura cada família
                l&rsquo;any en quotes recurrents —IRPF, societats, patrimoni, nòmines— i
                pregunteu-vos quina part d&rsquo;aquesta facturació sobreviurà al relleu
                generacional si els fills no us coneixen de res el dia que toca tramitar
                l&rsquo;herència. Aquesta xifra no apareix en cap informe anual. I és,
                probablement, el risc silenciós més gran de la firma.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La infraestructura de la retenció
              </h2>
              <p className="mt-5">
                Retenir l&rsquo;hereu no requereix més talent tècnic. Requereix que en
                el moment crític —quan el client acaba de morir, quan la família té
                dubtes, quan la complexitat de l&rsquo;expedient és màxima—,
                l&rsquo;hereu vegi:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Un expedient amb identitat clara.</strong> No és un correu
                  solt. És un expedient obert dins del vostre sistema, amb el nom del
                  difunt, la data i l&rsquo;estat.
                </li>
                <li className="pl-2">
                  <strong>Accés visible a la documentació.</strong> L&rsquo;hereu sap
                  quins papers heu recopilat, quins falten i per què. No és &ldquo;us
                  falta el testament&rdquo;; és &ldquo;necessitem el testament per
                  confirmar qui sou hereus i calcular la quota&rdquo; + data de la
                  propera trucada.
                </li>
                <li className="pl-2">
                  <strong>Coordinació clara del procés fiscal.</strong> L&rsquo;hereu
                  veu que esteu preparant el Model 660 (inventari), que necessiteu
                  confirmació de valors, que després ve el 650 (liquidació individual) i
                  que tot té termini.
                </li>
                <li className="pl-2">
                  <strong>Liquidació traçable.</strong> Quan arriba el moment de
                  liquidar, l&rsquo;hereu no veu només &ldquo;ISD: 4.500 €&rdquo;. Veu
                  l&rsquo;embut complet: cabal relicte net → base imposable → reduccions
                  aplicables → tarifa → coeficient multiplicador → bonificació (Llei
                  19/2010, amb les reduccions introduïdes per la Llei 5/2020 per als
                  grups I i II) → quota a ingressar.
                </li>
              </ol>
              <p className="mt-5">
                Això és el que diferencia &ldquo;l&rsquo;assessoria que va gestionar la
                meva herència&rdquo; de &ldquo;l&rsquo;assessoria que em va etzibar un
                correu amb números sense explicació&rdquo;.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El checklist que et posa en posició
              </h2>
              <p className="mt-5">
                Si heu perdut famílies després d&rsquo;una successió, podeu començar
                avui: creant un expedient successori amb estructura de procés, donant
                accés a l&rsquo;hereu a un portal on vegi documentació i estat, i
                coordinant cada pas fiscal amb claredat.
              </p>
              <p className="mt-5">
                El programari no és el primer. El primer és la decisió: que
                l&rsquo;hereu sigui client de l&rsquo;assessoria, no un tràmit de pas.
              </p>
              <p className="mt-5">
                Ulpiano és la plataforma que posa la infraestructura darrere d&rsquo;aquesta
                decisió. No és un complement. És el sistema on passa l&rsquo;expedient
                complet: des de l&rsquo;inventari patrimonial automatitzat, passant pel
                càlcul de llegítimes segons el Codi Civil de Catalunya, fins a la
                liquidació del Model 660 i el 650 amb coordinació documental visible.
                L&rsquo;hereu té un portal clar d&rsquo;accés. L&rsquo;assessoria té
                traçabilitat completa de cada decisió.
              </p>
              <p className="mt-5">
                El temps de preparació d&rsquo;un expedient complex baixa
                significativament. Però el més important: l&rsquo;hereu entén què està
                passant.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La confiança en el professional no garanteix la retenció: fins a 9
                    de cada 10 hereus abandonen l&rsquo;assessor financer del causant,
                    però en l&rsquo;assessoria fiscal l&rsquo;hereu sí que vol
                    quedar-s&rsquo;hi si l&rsquo;experiència és visible.
                  </li>
                  <li>
                    La pèrdua de la família després d&rsquo;una successió no apareix mai
                    al tauler de cartera; cal mesurar la retenció de l&rsquo;hereu com a
                    mètrica pròpia.
                  </li>
                  <li>
                    El veritable lifetime value d&rsquo;un client longeu es decideix en
                    el moment de la successió, no abans.
                  </li>
                  <li>
                    Retenir l&rsquo;hereu exigeix un expedient amb identitat clara,
                    documentació visible, coordinació fiscal explicada i una liquidació
                    traçable pas a pas.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Per a professionals del successori</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novetats i doctrina comentades per a professionals
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Subscriu-te a la newsletter quinzenal d&rsquo;Ulpiano i descarrega el
                  checklist de l&rsquo;expedient successori per identificar en quin
                  moment de la successió esteu perdent els hereus.
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
                Aquest article descriu un escenari de referència per il·lustrar un patró
                habitual en assessories i despatxos; cada firma ha de valorar la seva
                pròpia cartera i adaptar el procés al seu volum d&rsquo;expedients i als
                sistemes ja implantats. Descobreix com Ulpiano acompanya les{" "}
                <Link
                  href="/ca/pensat-per/assessories"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  assessories
                </Link>{" "}
                en cada expedient successori a les{" "}
                <Link
                  href="/ca/solucions"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  nostres solucions
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/ia-advocats-successions"
        label="IA per a advocats de successions"
        description="On aporta la IA i on cal un motor determinista."
      />
    </>
  );
}
