import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Quarta falcídia: el parany més car del testament",
  description:
    "Què és la quarta falcídia (arts. 427-40 i ss. CCCat): quan salta, com es calcula i el checklist per detectar-la abans d'acceptar l'encàrrec.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/quarta-falcidia",
    languages: {
      es: "https://ulpiano.es/recursos/blog/quarta-falcidia",
      ca: "https://ulpiano.es/ca/recursos/blog/quarta-falcidia",
      "x-default": "https://ulpiano.es/recursos/blog/quarta-falcidia",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Quarta falcídia: el parany més car del testament",
    description:
      "Quan salta, com es calcula i què ha de revisar el professional abans de pagar llegats en una successió catalana.",
    url: "https://ulpiano.es/ca/recursos/blog/quarta-falcidia",
    locale: "ca_ES",
    type: "article",
  },
};

export default function QuartaFalcidiaArticlePageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "Quarta falcídia",
            href: "/ca/recursos/blog/quarta-falcidia",
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
                <span className="badge">Dret Civil</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  8 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Quarta falcídia: el parany més car del testament
              </h1>
              <p className="body-lg mt-6 text-slate">
                Un expedient successori pot semblar net —testament vàlid, hereu
                identificat, béns catalogats— i, tot i així, deixar l&rsquo;hereu
                per sota de la quarta part del cabal líquid. El que ningú no ha
                mirat és la quarta falcídia.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Massa expedients avancen sense que el professional l&rsquo;hagi
                comprovada. Quan arriba el càlcul final, la responsabilitat és
                de l&rsquo;assessor. Aquesta figura —articles 427-40 a 427-45 del
                Codi Civil de Catalunya— és de les més cares que pot saltar en
                un testament català. I, alhora, de les més fàcils de veure si
                es mira a temps.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Què és la quarta falcídia segons el CCCat
              </h2>
              <p className="mt-5">
                La quarta falcídia és el dret de l&rsquo;hereu a retenir, com a
                mínim, la quarta part del cabal hereditari líquid quan el
                testador ha repartit l&rsquo;herència de manera que els{" "}
                <strong>llegats</strong> específics ultrapassen les tres quartes
                parts d&rsquo;aquest mateix cabal.
              </p>
              <p className="mt-5">
                El dret successori català vol que tot hereu conservi una porció
                mínima del patrimoni hereditari davant de disposicions
                testamentàries excessives en llegats. No és un gest de
                flexibilitat. És una garantia legal amb nom de norma.
              </p>
              <p className="mt-5">
                El testador pot distribuir lliurement el patrimoni mitjançant
                llegats. Aquesta llibertat té un límit. Si el valor total dels
                llegats supera el 75% del cabal hereditari net, l&rsquo;hereu
                entraria en pèrdua. La llei li dona una sortida: pot retenir el
                25% de l&rsquo;actiu hereditari líquid i reduir els llegats en
                allò que calgui.
              </p>
              <p className="mt-5">
                Dit d&rsquo;una altra manera: <strong>abans de pagar
                llegats, l&rsquo;hereu pot assegurar la seva quarta
                part</strong>. Només el que queda per sobre es reparteix en
                forma de llegats.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Quan salta: tres condicions alhora
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Hi ha d&rsquo;haver hereu.</strong> Sense hereu
                  instituït o universal, no hi ha quarta falcídia. Si el
                  testament només crea legataris, la norma no entra en joc.
                </li>
                <li className="pl-2">
                  <strong>Els llegats han de superar les tres quartes parts
                  del cabal hereditari líquid.</strong> Aquest cabal és
                  l&rsquo;actiu del causant menys els passius deduïbles (deutes,
                  despeses funeràries, despeses de darrera malaltia) i menys
                  l&rsquo;import de les{" "}
                  <Link
                    href="/ca/recursos/blog/la-legitima-catalana"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    llegítimes
                  </Link>
                  —inclosa la del mateix hereu quan sigui legitimari— (art.
                  427-41 CCCat). Oblidar la deducció de les llegítimes infla el
                  cabal i fa retenir a l&rsquo;hereu més del que li toca.
                </li>
                <li className="pl-2">
                  <strong>El testador no l&rsquo;ha d&rsquo;haver exclosa
                  expressament.</strong> El CCCat permet derogar la quarta
                  falcídia. Si el testament ho diu de forma explícita, la norma
                  no opera. És rar, però passa, i s&rsquo;ha de verificar a la
                  primera lectura.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                Com opera: reducció proporcional dels llegats
              </h2>
              <p className="mt-5">
                Quan les tres condicions concórren, no hi ha negociació. El
                mecanisme és determinista:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  Identificar el cabal hereditari líquid: actius − passius
                  deduïbles − llegítimes.
                </li>
                <li className="pl-2">
                  Calcular la quarta part protegida: el 25% d&rsquo;aquest cabal.
                </li>
                <li className="pl-2">
                  Comprovar si els llegats superen el 75%.
                </li>
                <li className="pl-2">
                  Si és així, reduir els llegats proporcionalment. No es
                  redueixen els imputables a la llegítima ni els que el testador
                  hagi declarat preferents, que només cedeixen quan ja s&rsquo;han
                  esgotat els altres (art. 427-42 CCCat).
                </li>
              </ol>

              <h3 className="mt-10 text-xl font-semibold text-ink">
                Un exemple numèric
              </h3>
              <p className="mt-5">
                Causant amb hereu únic. Patrimoni i llegats:
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg border border-mist">
                <table className="min-w-full border-collapse text-left text-[15px] leading-6">
                  <caption className="sr-only">
                    Càlcul de la quarta falcídia sobre un cabal de 175.000 euros
                  </caption>
                  <thead className="bg-surface text-sm text-slate">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">
                        Component
                      </th>
                      <th scope="col" className="px-5 py-3 text-right font-semibold">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    <tr>
                      <td className="px-5 py-3">Casa a Barcelona</td>
                      <td className="px-5 py-3 text-right">250.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Compte bancari</td>
                      <td className="px-5 py-3 text-right">80.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Deutes hipotecaris</td>
                      <td className="px-5 py-3 text-right">(150.000 €)</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Altres passius (funerals, despeses)</td>
                      <td className="px-5 py-3 text-right">(5.000 €)</td>
                    </tr>
                    <tr className="bg-green-bg font-semibold text-ink">
                      <td className="px-5 py-3">Cabal hereditari líquid</td>
                      <td className="px-5 py-3 text-right">175.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Llegat al germà</td>
                      <td className="px-5 py-3 text-right">80.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Llegat a l&rsquo;amiga</td>
                      <td className="px-5 py-3 text-right">45.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Llegat al nebot</td>
                      <td className="px-5 py-3 text-right">25.000 €</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="px-5 py-3">Total llegats</td>
                      <td className="px-5 py-3 text-right">150.000 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>El 75% del cabal són 131.250 €. Els llegats (150.000 €) el superen en 18.750 €.</li>
                <li>Si l&rsquo;hereu fa valer la quarta falcídia, reté 43.750 € (el 25% de 175.000 €).</li>
                <li>Els llegats es redueixen al 87,5% de cadascun: 70.000 €, 39.375 € i 21.875 €.</li>
                <li>Resultat: l&rsquo;hereu cobra 43.750 € i els llegats sumen 131.250 €. Total: 175.000 €.</li>
              </ul>

              <h2 className="h2 mt-12 text-ink">
                L&rsquo;inventari és condició per conservar el dret
              </h2>
              <p className="mt-5">
                No n&rsquo;hi ha prou que la norma sigui aplicable.
                L&rsquo;hereu que vulgui beneficiar-se&apos;n ha de practicar
                inventari del cabal hereditari en temps i forma. Sense
                inventari, perd el dret: és l&rsquo;únic mecanisme que prova el
                cabal líquid de manera irrefutable davant de tercers.
              </p>
              <p className="mt-5">
                El termini és de sis mesos des que l&rsquo;hereu coneix o pot
                conèixer raonablement la delació (art. 426-20 CCCat, per
                remissió de l&rsquo;art. 427-40), davant de notari o per via
                judicial. Un hereu que ometi l&rsquo;inventari i pagui llegats
                sense verificar la quarta falcídia no podrà recuperar després
                allò lliurat de més.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Checklist en obrir l&rsquo;expedient
              </h2>
              <p className="mt-5">
                La quarta falcídia no és cap sorpresa si es verifica des del
                primer dia:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Lectura del testament.</strong> Hi ha hereu
                  instituït, no només legataris? Hi ha llegats específics
                  significatius? Existeix clàusula d&rsquo;exclusió?
                </li>
                <li className="pl-2">
                  <strong>Inventari.</strong> Actius valorats a mercat, passius
                  identificats, cabal líquid = actius − passius deduïbles −
                  llegítimes.
                </li>
                <li className="pl-2">
                  <strong>Llindar.</strong> Comparar la suma dels llegats amb
                  el 75% del cabal. Si el superen, calcular la reducció
                  proporcional.
                </li>
                <li className="pl-2">
                  <strong>Si aplica.</strong> Inventari formal, informar
                  l&rsquo;hereu del dret de retenció i comunicar als legataris
                  les quantitats definitives.
                </li>
                <li className="pl-2">
                  <strong>Documentació.</strong> Inventari a l&rsquo;expedient,
                  càlcul pas a pas amb la norma citada, i{" "}
                  <Link
                    href="/ca/recursos/blog/quadern-particional-catalunya"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    quadern particional
                  </Link>{" "}
                  que reflecteixi la reducció.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                El risc de no veure-la venir
              </h2>
              <p className="mt-5">
                Un hereu que accepta l&rsquo;herència i paga llegats sense
                aquest càlcul pot acabar reclamant l&rsquo;excés als legataris:
                litigi, fricció i reputació malmesa. El cost de recuperar allò
                indegudament lliurat supera de llarg el d&rsquo;una revisió
                disciplinada en obrir l&rsquo;expedient.
              </p>
              <p className="mt-5">
                A Catalunya aquesta norma no és fosca. És articulat del CCCat.
                Conèixer-la és obligatori. Ignorar-la corre el risc de
                considerar-se negligència.
              </p>

              <h2 className="h2 mt-12 text-ink">
                On un motor determinista evita l&rsquo;error
              </h2>
              <p className="mt-5">
                El càlcul a mà falla fàcilment quan es porten diversos
                expedients alhora: s&rsquo;oblida la proporció de llegats o es
                comet un error aritmètic en la reducció. Un sistema que
                codifica els articles 427-40 a 427-45 i els aplica en carregar
                actius, passius i llegats converteix aquest risc en un càlcul
                traçable. La màquina verifica. L&rsquo;advocat revisa i decideix.
              </p>
              <p className="mt-5">
                A Ulpiano, la quarta falcídia forma part del motor normatiu
                català. Quan l&rsquo;expedient té hereu, llegats i cabal, el
                sistema calcula si s&rsquo;assoleix el llindar, aplica la
                reducció si escau i genera el quadern ja rectificat. El
                professional pot verificar el raonament pas a pas.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La quarta falcídia garanteix a l&rsquo;hereu el 25% del cabal
                    hereditari líquid quan els llegats superen el 75%.
                  </li>
                  <li>
                    El cabal es calcula restant passius i llegítimes. Ometre
                    les llegítimes és l&rsquo;error més perillós.
                  </li>
                  <li>
                    Sense inventari en temps i forma, l&rsquo;hereu perd el dret.
                  </li>
                  <li>
                    Detectar-la el primer dia és un checklist; detectar-la tard
                    és un litigi.
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
                  una secció específica per a clàusules crítiques com la quarta
                  falcídia.
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
                d&rsquo;un cas concret. La quarta falcídia exigeix revisar el
                testament, l&rsquo;inventari i les circumstàncies de cada
                successió. Per situar-la a l&rsquo;expedient, vegeu també la{" "}
                <Link
                  href="/ca/recursos/blog/la-legitima-catalana"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  llegítima catalana
                </Link>{" "}
                i com redactar el{" "}
                <Link
                  href="/ca/recursos/blog/quadern-particional-catalunya"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  quadern particional
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/quadern-particional-catalunya"
        label="Quadern particional a Catalunya"
        description="Inventari, cabal relicte i adjudicacions coherents amb els models 660 i 650."
      />
    </>
  );
}
