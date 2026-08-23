import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "Llegítima catalana: què és, quant és i l'error del terç",
  description:
    "La llegítima catalana és la quarta part del cabal computable segons l'article 451-5 del CCCat. Guia pràctica sobre càlcul, legitimaris i errors de procés.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/la-legitima-catalana",
    languages: {
      es: "https://ulpiano.es/recursos/blog/la-legitima-catalana",
      ca: "https://ulpiano.es/ca/recursos/blog/la-legitima-catalana",
      "x-default": "https://ulpiano.es/recursos/blog/la-legitima-catalana",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Llegítima catalana: què és, quant és i l'error del terç",
    description:
      "Una guia pràctica sobre l'article 451-5 CCCat, el càlcul de la llegítima i els errors que arriben a quaderns signats.",
    url: "https://ulpiano.es/ca/recursos/blog/la-legitima-catalana",
    locale: "ca_ES",
    type: "article",
  },
};

export default function CatalanForcedHeirshipArticlePageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "La llegítima catalana",
            href: "/ca/recursos/blog/la-legitima-catalana",
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
                  12 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Llegítima catalana: què és, quant és i per què l&rsquo;error del
                terç apareix en quaderns signats
              </h1>
              <p className="body-lg mt-6 text-slate">
                La llegítima catalana no és un terç. És la quarta part d&rsquo;una
                base de càlcul pròpia —el cabal computable— segons l&rsquo;article
                451-5 del Codi Civil de Catalunya. I, tot i així, l&rsquo;esquema
                del terç del Codi Civil estatal continua apareixent en quaderns
                particionals signats.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                No acostuma a ser un error de coneixement. Qualsevol civilista que
                exerceix a Catalunya sap que el Llibre IV va reduir la llegítima a
                la quarta part. És un error de procés: la plantilla de Word o
                l&rsquo;Excel de càlcul vénen d&rsquo;un expedient anterior —de
                vegades d&rsquo;un altre territori, de vegades d&rsquo;una altra
                dècada— i ningú no ha integrat en el flux una validació que
                pregunti quina norma s&rsquo;aplica i la citi en el resultat.
              </p>
              <p className="mt-5">
                Aquest article repassa què és la llegítima catalana, com es
                calcula, qui són legitimaris, en què es diferencia del règim
                estatal i on fallen els quaderns a la pràctica.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Què és la llegítima catalana: un dret de crèdit, no una quota de
                béns
              </h2>
              <p className="mt-5">
                En el Dret civil català, la llegítima és el valor patrimonial
                mínim que la llei atribueix a determinats parents del causant,
                encara que el testament no els deixi res. Dos trets la defineixen
                davant l&rsquo;esquema estatal:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>És un dret de crèdit.</strong> El legitimari no és
                  cotitular dels béns de l&rsquo;herència. Té dret a exigir un
                  valor, que l&rsquo;hereu pot pagar en diners o en béns de la
                  mateixa herència. Això simplifica la partició, però obliga a
                  liquidar el crèdit amb precisió en el{" "}
                  <Link
                    href="/ca/recursos/blog/quadern-particional-catalunya"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    quadern particional
                  </Link>
                  .
                </li>
                <li className="pl-2">
                  <strong>És curta.</strong> La quarta part de la base de càlcul,
                  davant dels dos terços —llegítima estricta més millora— que el
                  Codi Civil estatal reserva als descendents. El testador català
                  disposa lliurement de les tres quartes parts del seu patrimoni.
                </li>
              </ol>
              <p className="mt-5">
                Aquesta combinació —crèdit i quantia reduïda— respon a la llibertat
                de testar com a regla, amb un mínim familiar com a excepció.
                Trasplantar mecànicament l&rsquo;esquema estatal no produeix un
                error menor, sinó un quadern amb una distribució equivocada de
                base.
              </p>

              <h2 className="h2 mt-12 text-ink">Qui són legitimaris a Catalunya</h2>
              <p className="mt-5">
                El cercle de legitimaris del CCCat és més estret que l&rsquo;estatal:
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Els fills del causant, per parts iguals.</strong> Els
                  descendents d&rsquo;un fill premort, desheretat o indigne ocupen
                  el seu lloc per estirps.
                </li>
                <li>
                  <strong>A falta de descendents, els progenitors.</strong> Només
                  els pares: els avis i la resta d&rsquo;ascendents no són
                  legitimaris a Catalunya.
                </li>
                <li>
                  <strong>El cònjuge no és legitimari.</strong> El cònjuge vidu o
                  el convivent en parella estable té, si escau, la quarta vidual,
                  regulada en els articles 452-1 i següents del CCCat.
                </li>
              </ul>
              <p className="mt-5">
                La quarta vidual és un dret de crèdit de fins a la quarta part de
                l&rsquo;actiu hereditari líquid quan el vidu no té recursos
                suficients per atendre les seves necessitats. És una institució
                diferent, amb pressupòsits i càlcul propis, i no s&rsquo;acumula
                conceptualment a una llegítima del cònjuge que en Dret català no
                existeix.
              </p>
              <p className="mt-5">
                La preterició d&rsquo;un legitimari no invalida per si sola el
                testament: genera, com a regla, una reclamació de valor. El quadern
                ha de calcular i satisfer la llegítima de tots els legitimaris,
                estiguin o no esmentats en el testament.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Quant és la llegítima catalana: el 25% del cabal computable
              </h2>
              <p className="mt-5">
                La quantia la fixa l&rsquo;article 451-5 CCCat: la quarta part de la
                base de càlcul que resulta d&rsquo;aplicar les regles d&rsquo;aquest
                mateix article.
              </p>
              <p className="mt-5">
                <strong>La quarta part és global.</strong> El 25% és l&rsquo;import
                conjunt de la llegítima, que es divideix entre els legitimaris que
                computen. Amb tres fills, la llegítima individual de cadascun és
                1/12 del cabal computable, no 1/4. Atribuir una quarta part a cada
                fill triplica la llegítima i, amb quatre fills, supera el mateix
                cabal.
              </p>
              <p className="mt-5">
                <strong>La base no és el relicte sense més.</strong> El cabal
                computable es construeix així:
              </p>
              <ol className="mt-5 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li>
                  Valor dels béns de l&rsquo;herència en el moment de la mort del
                  causant.
                </li>
                <li>
                  Menys deutes del causant, despeses de darrera malaltia i
                  d&rsquo;enterrament o incineració.
                </li>
                <li>
                  Més el valor dels béns donats pel causant en els deu anys
                  anteriors a la seva mort, segons les regles de l&rsquo;article
                  451-5.
                </li>
              </ol>
              <p className="mt-5">
                Les donacions fetes a favor de legitimaris en concepte de llegítima
                o imputables a aquesta es computen amb independència de la data. Les
                donacions rebudes per un legitimari poden imputar-se a la seva
                pròpia llegítima segons l&rsquo;article 451-8 CCCat: qui ja va rebre
                en vida pot tenir el seu crèdit cobert totalment o parcialment.
              </p>

              <h2 className="h2 mt-12 text-ink">Exemple de càlcul</h2>
              <p className="mt-5">
                Causant amb veïnatge civil català, mort a Girona. Tres fills, sense
                cònjuge supervivent.
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg border border-mist">
                <table className="min-w-full border-collapse text-left text-[15px] leading-6">
                  <caption className="sr-only">
                    Càlcul del cabal computable i de la llegítima catalana
                  </caption>
                  <thead className="bg-surface text-sm text-slate">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Component</th>
                      <th scope="col" className="px-5 py-3 text-right font-semibold">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    <tr><td className="px-5 py-3">Habitatge</td><td className="px-5 py-3 text-right">450.000 €</td></tr>
                    <tr><td className="px-5 py-3">Compte corrent</td><td className="px-5 py-3 text-right">50.000 €</td></tr>
                    <tr><td className="px-5 py-3">Fons d&rsquo;inversió</td><td className="px-5 py-3 text-right">120.000 €</td></tr>
                    <tr><td className="px-5 py-3">Criptoactius, valorats a data de defunció</td><td className="px-5 py-3 text-right">30.000 €</td></tr>
                    <tr className="font-semibold"><td className="px-5 py-3">Béns de l&rsquo;herència</td><td className="px-5 py-3 text-right">650.000 €</td></tr>
                    <tr><td className="px-5 py-3">Hipoteca pendent</td><td className="px-5 py-3 text-right">(120.000 €)</td></tr>
                    <tr><td className="px-5 py-3">Deutes i despeses d&rsquo;enterrament</td><td className="px-5 py-3 text-right">(8.000 €)</td></tr>
                    <tr className="font-semibold"><td className="px-5 py-3">Relicte net</td><td className="px-5 py-3 text-right">522.000 €</td></tr>
                    <tr><td className="px-5 py-3">Donació a un fill, fa 2 anys</td><td className="px-5 py-3 text-right">+ 50.000 €</td></tr>
                    <tr className="bg-green-bg font-semibold text-ink"><td className="px-5 py-3">Cabal computable, article 451-5</td><td className="px-5 py-3 text-right">572.000 €</td></tr>
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li><strong>Llegítima global:</strong> 572.000 € × 1/4 = 143.000 €.</li>
                <li><strong>Llegítima individual, tres fills:</strong> 143.000 € / 3 = 47.666,67 € cadascun.</li>
                <li>El fill que va rebre la donació de 50.000 €, si és imputable a la seva llegítima, té el crèdit cobert; els altres dos conserven el seu davant de l&rsquo;hereu.</li>
                <li><strong>Lliure disposició efectiva del causant:</strong> les tres quartes parts restants.</li>
              </ul>
              <p className="mt-5">
                Compareu-ho amb el mateix cas resolt amb una plantilla estatal: la
                distribució canvia del tot, i amb ella la liquidació de l&rsquo;Impost
                sobre Successions i Donacions.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Diferències operatives amb el règim estatal que afecten el quadern
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2"><strong>Naturalesa.</strong> A Catalunya el legitimari és creditor; l&rsquo;hereu tria, com a regla, pagar en diners o en béns. En l&rsquo;esquema estatal la llegítima és, amb matisos, cotitularitat sobre la massa.</li>
                <li className="pl-2"><strong>Cercle de legitimaris.</strong> Cònjuge no legitimari, quarta vidual a part, i ascendents limitats als progenitors, davant de l&rsquo;esquema estatal.</li>
                <li className="pl-2"><strong>Còmput de donacions.</strong> El CCCat fixa la regla dels deu anys de l&rsquo;article 451-5; oblidar el donatum en la base desquadra la llegítima i, en cascada, el quadern i els models fiscals.</li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                On fallen els quaderns a la pràctica: cinc errors de procés
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2"><strong>El terç estatal en territori CCCat.</strong> La plantilla diu un terç en concepte de llegítima estricta i ningú no ho qüestiona perquè el document sempre ha funcionat.</li>
                <li className="pl-2"><strong>La quarta part per cap.</strong> Aplicar el 25% a cada legitimari infla la llegítima global i redueix indegudament la lliure disposició.</li>
                <li className="pl-2"><strong>Donacions computables omeses.</strong> La base es calcula sobre el relicte sense preguntar per donacions dels últims deu anys.</li>
                <li className="pl-2"><strong>Confondre llegítima i quarta vidual.</strong> Tractar el cònjuge com a legitimari del 25%, o reconèixer-li llegítima més quarta vidual, duplica drets que la llei no acumula.</li>
                <li className="pl-2"><strong>Valoració a data equivocada i incoherència amb el 660/650.</strong> Els béns es valoren a la mort del causant. El Model 660, els Models 650 i el quadern han d&rsquo;explicar la mateixa història.</li>
              </ol>

              <h2 className="h2 mt-12 text-ink">Què s&rsquo;hi juga el professional</h2>
              <p className="mt-5">
                Un error de llegítima no és un defecte d&rsquo;estil. Pot suposar
                pagaments indeguts entre cohereus, una liquidació de l&rsquo;ISD
                sobre bases incorrectes, la impugnació del quadern i una reclamació
                de responsabilitat professional.
              </p>
              <p className="mt-5">
                La pretensió del legitimari disposa d&rsquo;un termini de prescripció
                de deu anys des de la mort del causant segons l&rsquo;article 451-27
                CCCat. Llevat de disposició contrària del causant, la llegítima
                merita l&rsquo;interès legal des de la mort segons l&rsquo;article
                451-14 CCCat.
              </p>
              <p className="mt-5">
                El càlcul, ben plantejat, és objectiu: base computable, quarta part,
                divisió entre legitimaris i imputacions. Tot el que necessita és que
                les dades d&rsquo;entrada siguin completes i que la regla aplicada
                sigui la del territori correcte.
              </p>

              <h2 className="h2 mt-12 text-ink">Com ho tracta un flux estructurat</h2>
              <p className="mt-5">
                Un procés que evita aquests errors captura el domicili i el veïnatge
                civil del causant en obrir l&rsquo;expedient, pregunta expressament
                per donacions dels últims deu anys, calcula la llegítima amb una
                regla tancada que cita l&rsquo;article en el resultat i reconcilia el
                quadern amb els Models 660 i 650 abans de la signatura.
              </p>
              <p className="mt-5">
                A Ulpiano, aquest càlcul l&rsquo;executa un motor determinista —no
                una plantilla ni un model de llenguatge— segons l&rsquo;article 451-5
                CCCat, amb la norma citada en el resultat i cada pas traçable. El
                criteri jurídic continua sent de l&rsquo;advocat; el que desapareix
                és la plantilla heretada com a font de la quantia.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>La llegítima catalana és la quarta part del cabal computable, global i a repartir entre els qui computen.</li>
                  <li>Els legitimaris són els fills i, a falta seva, els progenitors. El cònjuge no és legitimari.</li>
                  <li>La base inclou les donacions dels deu anys anteriors; les donacions al mateix legitimari poden imputar-se a la seva llegítima.</li>
                  <li>Els errors que arriben a quaderns signats són de procés i es corregeixen amb una validació normativa integrada.</li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Per a professionals del successori</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novetats i doctrina comentades per a professionals
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Subscriu-te a la newsletter quinzenal d&rsquo;Ulpiano i descarrega
                  el checklist de l&rsquo;expedient successori per obrir i tancar
                  expedients sense buits.
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
                d&rsquo;un cas concret. L&rsquo;aplicació de la llegítima exigeix
                revisar la documentació, les dates i les circumstàncies de cada
                successió.
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/gestio-herencies-despatx"
        label="Gestió d'herències al despatx"
        description="De l'inventari a un expedient que es pot signar."
      />
    </>
  );
}
