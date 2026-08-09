import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "La digitalització del dret successori: l'onada que ve",
  description:
    "Per què a Espanya la gestió successòria continua sent manual, per què la infraestructura no vindrà de fora i què canvia quan l'expedient viu sobre un sistema amb el CCCat integrat.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/digitalitzacio-dret-successori",
    languages: {
      es: "https://ulpiano.es/recursos/blog/digitalizacion-derecho-sucesorio",
      ca: "https://ulpiano.es/ca/recursos/blog/digitalitzacio-dret-successori",
    },
  },
  openGraph: {
    title: "La digitalització del dret successori: l'onada que ve",
    description:
      "3 bilions d'euros es transferiran a Espanya en tres dècades. La infraestructura per gestionar-los s'ha de construir aquí, sobre el dret civil català.",
    url: "https://ulpiano.es/ca/recursos/blog/digitalitzacio-dret-successori",
    locale: "ca_ES",
    type: "article",
  },
};

export default function DigitalitzacioDretSuccessoriArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "La digitalització del dret successori",
            href: "/ca/recursos/blog/digitalitzacio-dret-successori",
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
                <span className="badge">Tecnologia</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  7 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                La digitalització del dret successori: l’onada que ve
              </h1>
              <p className="body-lg mt-6 text-slate">
                Als Estats Units, la gestió d’herències passa dins de
                plataformes especialitzades. A Espanya, passa a Excel, Word i
                correu. La diferència no és la tecnologia: és que la llei no és
                la mateixa.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d’Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <h2 className="h2 mt-0 text-ink">
                Per què a Espanya la gestió successòria continua sent manual
              </h2>
              <p className="mt-5">
                Als Estats Units, fa anys que els despatxos d’advocats, les
                firmes de gestió patrimonial i les asseguradores operen amb
                plataformes especialitzades en planificació i tramitació
                d’herències. La categoria existeix, es diu <em>estate-tech</em>,
                té inversió de capital de risc al darrere i creix cada any. El
                professional porta l’expedient dins d’un sistema. El client veu
                un portal. Els documents es generen automàticament. La liquidació
                fiscal és traçable.
              </p>
              <p className="mt-5">
                A Espanya, aquest mateix procés passa a Excel, Word i correu.
              </p>
              <p className="mt-5">
                No és perquè els advocats espanyols siguin menys competents. No
                és perquè la tecnologia sigui diferent. És perquè allò que
                funciona a Nova York no funciona a Barcelona si la llei no és la
                mateixa.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El mur: dret civil local vs. infraestructura importada
              </h2>
              <p className="mt-5">
                La raó profunda d’aquesta bretxa és clara: el dret successori
                depèn de la llei civil de cada territori. Als EUA, un programari
                &ldquo;nacional&rdquo; aplica el dret de Nova York o el de
                Califòrnia dins d’un marc comú que el fa escalable. A Espanya
                conviuen el Codi Civil estatal i els drets civils propis. I el
                Codi Civil de Catalunya no és una variant de l’estatal: legítima
                reduïda a la{" "}
                <Link
                  href="/ca/recursos/blog/la-legitima-catalana"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  quarta part
                </Link>
                , pactes successoris (heretaments), figures com la quarta viudal
                i la quarta falcídia, institució d’hereu obligatòria (amb la
                excepció històrica del dret de Tortosa, art. 423-1 CCCat).
              </p>
              <p className="mt-5">
                Això vol dir que una eina genèrica construïda a Nova York, o a
                Silicon Valley, o a Londres, no pot funcionar aquí sense una
                reescriptura completa del motor normatiu.
              </p>
              <p className="mt-5">
                La ironia: precisament perquè el dret foral català existeix, el
                problema és més acuciant. No poden copiar la solució dels EUA.
                L’han de construir. I ningú ho estava fent.
              </p>

              <h2 className="h2 mt-12 text-ink">
                L’onada que ve: 3 bilions d’euros en 30 anys
              </h2>
              <p className="mt-5">Els números del mercat són contundents:</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                <li>
                  <strong>~3 bilions d’euros</strong> es transferiran a Espanya
                  en les properes tres dècades. És patrimoni heretat, no comprat:
                  l’onada de transferència generacional més gran que hem vist.
                </li>
                <li>
                  <strong>~433.000 defuncions l’any</strong> a Espanya segons
                  l’INE (2024). Cada defunció genera, potencialment, un expedient
                  successori.
                </li>
                <li>
                  <strong>403.854 habitatges heretats</strong> el 2024, segons el
                  Consell General del Notariat. Les adjudicacions d’herència
                  representen el 19,4% dels actes notarials totals.
                </li>
                <li>
                  <strong>~15% de renúncies</strong> a herències. D’aquests
                  403.000 actes, el 15% surt del sistema perquè algú diu que no:
                  coordinació fallida, complexitat, fricció.
                </li>
              </ul>
              <p className="mt-5">
                Això és volum. Això és oportunitat d’infraestructura.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El contrast visible: 3 dies vs. 20 minuts
              </h2>
              <p className="mt-5">
                En un despatx tradicional, preparar un{" "}
                <Link
                  href="/ca/recursos/blog/quadern-particional-catalunya"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  quadern particional
                </Link>{" "}
                —el document central que distribueix l’herència entre els hereus
                i serveix de base per a la liquidació fiscal— pot consumir dies de
                feina tècnica repartits entre lectura de documents, càlcul de
                quotes, aplicació de reduccions, comparació d’escenaris i
                redacció. Feina correcta, però en bona part mecànica.
              </p>
              <p className="mt-5">
                Amb infraestructura: si el patrimoni està inventariat, els hereus
                classificats i el motor normatiu carrega el CCCat, l’esborrany del
                quadern que costava tres dies surt en vint minuts. No perquè sigui
                menys rigorós —és exactament igual de rigorós—, sinó perquè allò
                que era càlcul manual ara és càlcul automàtic. Aquelles hores de
                feina tècnica no facturable tornen al despatx: capacitat per a més
                expedients sense més gent, o per a més criteri en els expedients
                que ja tens.
              </p>
              <p className="mt-5">
                Però hi ha una cosa més valuosa que el temps: la precisió.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La precisió com a diferenciador
              </h2>
              <p className="mt-5">
                Quan calcules la legítima, o apliques la bonificació per empresa
                familiar al{" "}
                <Link
                  href="/ca/models/model-650"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Model 650
                </Link>
                , o confirmes que una reducció és aplicable, cadascun d’aquests
                passos té un marc normatiu molt específic. Un error no només costa
                temps al professional que ha de revisar. Costa al client que pot
                rebre un avís d’Hisenda mesos després del tancament de
                l’expedient. Costa al despatx que ha d’explicar per què el càlcul
                va ser incorrecte.
              </p>
              <p className="mt-5">
                Un sistema on cada decisió es pren dins d’un marc normatiu
                verificable —on la norma és visible, on cada càlcul és auditable,
                on Hisenda pot entendre exactament per què s’ha calculat d’aquesta
                manera— és un sistema que redueix risc. I aquest risc reduït és
                diners.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Per què la infraestructura no vindrà de fora
              </h2>
              <p className="mt-5">
                Un proveïdor anglosaxó no pot prestar servei aquí sense construir
                la peça foral des de zero: la norma no és una capa d’interfície
                que es tradueix, és el fonament del sistema. El motor que calcula
                una legítima catalana o liquida la Llei 19/2010 no s’adapta des
                d’un producte pensat per a Delaware; es construeix des de
                l’articulat.
              </p>
              <p className="mt-5">
                Per això la infraestructura s’ha de construir aquí. No perquè
                sigui complicat, sinó perquè és territorial i específica. Això sona
                com una barrera. Ho és. Però també és una oportunitat de mercat per
                a qui la construeixi primer.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Què canvia quan treballes sobre infraestructura
              </h2>
              <p className="mt-5">
                El professional que treballa sobre un sistema de gestió
                successòria estructurat —en lloc de sobre Excel + Word + email—
                guanya quatre coses:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Traçabilitat.</strong> Cada pas de l’expedient queda
                  registrat: d’on ve cada dada, quina norma s’ha aplicat, quan
                  s’ha pres cada decisió. És útil per a revisions de qualitat, però
                  sobretot quan l’Administració pregunta per què s’ha calculat una
                  cosa d’aquesta manera: a la pantalla es veu la norma, la base i
                  el càlcul.
                </li>
                <li className="pl-2">
                  <strong>Estandardització.</strong> En lloc que cada expedient
                  sigui un cas únic amb la seva pròpia estructura de carpetes i el
                  seu propi flux, tots segueixen el mateix. Això no el fa monòton:
                  el fa comparable. Si de mitjana passen 20 dies en un expedient
                  simple i un triga 50, veus on hi ha fricció.
                </li>
                <li className="pl-2">
                  <strong>Dades per expedient.</strong> En lloc d’hores disperses
                  en registres sense relació amb expedients, tens visibilitat del
                  temps de preparació, nombre d’escenaris, documents per bé i
                  canvis normatius aplicats. Això alimenta mètriques d’operació.
                </li>
                <li className="pl-2">
                  <strong>Servei visible per al client.</strong> L’hereu entén què
                  passa. No perquè la complexitat desaparegui —les herències sempre
                  són complexes—, sinó perquè està estructurada. La caixa negra es
                  converteix en un panell.
                </li>
              </ol>
              <p className="mt-5">
                El que <strong>no</strong> canvia: el teu criteri jurídic. La
                capacitat d’interpretar el dret foral. La responsabilitat davant
                del client. Això continua sent teu.
              </p>

              <h2 className="h2 mt-12 text-ink">On comença: Catalunya</h2>
              <p className="mt-5">
                El dret successori es digitalitza per geografia, no per salts,
                perquè cada geografia té el seu codi. Per això la infraestructura
                comença a Catalunya: és on el dret civil és més diferenciat, on la
                complexitat normativa —legítima reduïda, pactes successoris, quarta
                viudal— és màxima, i on el diferencial entre fer un càlcul manual i
                un d’automàtic és més visible.
              </p>
              <p className="mt-5">
                Quan tens un motor que sap CCCat, que implementa la Llei 19/2010
                sense excepcions i que genera el{" "}
                <Link
                  href="/ca/models/model-660"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Model 660
                </Link>{" "}
                i el 650 des de dades estructurades, aquest motor no es replica en
                una setmana. Però un cop existeix, és la peça central de tot el que
                ve després.
              </p>

              <h2 className="h2 mt-12 text-ink">El rol de la plataforma</h2>
              <p className="mt-5">
                Ulpiano és exactament això: la infraestructura de digitalització
                del dret successori per al mercat català primer. Motor normatiu que
                sap CCCat. Estructura d’expedient que acompanya el professional pas
                a pas. Portal client que dona visibilitat. Integració de dades de
                patrimoni, hereus, obligacions tributàries i documentació notarial.
              </p>
              <p className="mt-5">
                No reemplaça l’advocat. El mou del territori de recopilar papers i
                calcular al territori d’interpretar dret i assessorar. Això és el
                que hauria d’estar fent.
              </p>
              <p className="mt-5">
                L’onada de 3 bilions d’euros no necessita més advocats. Necessita
                advocats més ràpids, més precisos, menys ocupats en admin i més
                ocupats en criteri. Això és el que la infraestructura digital
                permet.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La gestió successòria continua sent manual a Espanya no per
                    manca de tecnologia, sinó perquè el dret civil és territorial i
                    la infraestructura importada no el contempla.
                  </li>
                  <li>
                    ~3 bilions d’euros es transferiran per herència en tres
                    dècades: és un problema d’infraestructura, no de talent.
                  </li>
                  <li>
                    Sobre un sistema amb el CCCat integrat, l’esborrany del quadern
                    particional passa de dies a minuts, amb la mateixa rigorositat i
                    menys risc.
                  </li>
                  <li>
                    La infraestructura s’ha de construir aquí i comença per
                    Catalunya, on la complexitat normativa és màxima.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Per a professionals del successori</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novetats i doctrina comentades per a professionals
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Subscriu-te a la newsletter quinzenal d’Ulpiano i descarrega el
                  checklist de l’expedient successori per estructurar els teus
                  expedients des del primer dia.
                </p>
                <NewsletterSignupCa />
                <Link
                  href="/ca/recursos/checklist-expedient-successori"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
                >
                  <Download aria-hidden="true" size={18} />
                  Descarregar el checklist de l’expedient successori
                </Link>
              </aside>

              <p className="mt-8 rounded-lg border border-mist bg-surface p-6 text-[15px] leading-7 text-slate">
                Descobreix com Ulpiano digitalitza l’expedient successori català de
                principi a fi a les{" "}
                <Link
                  href="/ca/solucions"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  nostres solucions
                </Link>
                , o mira com encaixa en la feina dels{" "}
                <Link
                  href="/ca/pensat-per/despatxos"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  despatxos
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
