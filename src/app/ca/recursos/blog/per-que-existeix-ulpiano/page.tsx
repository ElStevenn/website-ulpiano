import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "Per què existeix Ulpiano: la història darrere de la plataforma",
  description:
    "Miquel Fàbrega explica per què va néixer Ulpiano: convertir l'expedient successori en alguna cosa visible, traçable i precisa, amb IA on aporta i motor determinista on és crític.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/per-que-existeix-ulpiano",
    languages: {
      es: "https://ulpiano.es/recursos/blog/por-que-existe-ulpiano",
      ca: "https://ulpiano.es/ca/recursos/blog/per-que-existeix-ulpiano",
      "x-default": "https://ulpiano.es/recursos/blog/por-que-existe-ulpiano",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Per què existeix Ulpiano: la història darrere de la plataforma",
    description:
      "Una clienta va preguntar què estava pagant exactament. Aquella pregunta, i la decisió de no delegar càlculs crítics a una caixa negra, és per què existeix Ulpiano.",
    url: "https://ulpiano.es/ca/recursos/blog/per-que-existeix-ulpiano",
    locale: "ca_ES",
    type: "article",
  },
};

export default function PerQueExisteixUlpianoArticlePageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "Per què existeix Ulpiano",
            href: "/ca/recursos/blog/per-que-existeix-ulpiano",
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
                <span className="badge">Visió</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  5 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">Per què existeix Ulpiano</h1>
              <p className="body-lg mt-6 text-slate">
                Fa tres anys, una clienta em va fer una pregunta que ho va
                canviar tot. L&rsquo;herència estava al dia als meus sistemes. A
                la pantalla, ella hi veia un caos.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                La mare acabava de morir. L&rsquo;herència era mitjana: un pis a
                Girona, un compte corrent, una mica de mobiliari. Res
                excepcional. Ens va encarregar que en gestionéssim la successió.
                Jo era al despatx de Girona, amb uns quants{" "}
                <Link
                  href="/ca/recursos/blog/gestio-herencies-despatx"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  expedients successoris
                </Link>{" "}
                oberts alhora, com s&rsquo;obren: Excel per als càlculs, Word
                per al quadern particional, una carpeta compartida, el correu, i
                uns apunts del que el client havia dit per telèfon.
              </p>
              <p className="mt-5">
                Expedient correcte. Càlculs al dia. Documentació completa.
                Terminis complerts.
              </p>
              <p className="mt-5">
                Un divendres, ens va trucar. Pregunta directa: &ldquo;I jo què
                estic pagant, exactament? On veig el que esteu fent?&rdquo;
              </p>
              <p className="mt-5">
                Era una pregunta justa. I no sabia respondre-la sense muntar tot
                l&rsquo;expedient a la pantalla: l&rsquo;Excel obert, el Word a
                una altra finestra, el correu per recuperar quina decisió s&rsquo;havia
                pres sobre quin bé. L&rsquo;expedient estava perfectament al dia
                als meus sistemes. Però a la pantalla, la clienta hi veia caos:
                versions de documents, xifres que canviaven d&rsquo;un correu a
                l&rsquo;altre, la sensació que la seva herència vivia dins
                d&rsquo;una caixa negra.
              </p>
              <p className="mt-5">
                Allò em va incomodar. La confiança en el despatx no es
                sosté només amb resultats. Es sosté en el fet que el client entengui
                què estàs fent, per què, i que ho vegi. No és transparència
                freda. És que el professional sigui capaç de mostrar, en una
                pantalla coherent, on és l&rsquo;expedient, quines decisions
                s&rsquo;han pres, quin és el pas següent. I que això sigui
                veritat.
              </p>
              <p className="mt-5">
                Les setmanes següents vaig reorganitzar el flux. Vaig consolidar
                totes les dades en una sola font de veritat. La clienta, quan
                va tornar a preguntar, va poder veure en una pantalla l&rsquo;estat
                complet de l&rsquo;herència. Va veure quan es carregava cada
                document, quines dades estaven verificades, quina era la seva
                quota, i per què. El nivell de confiança va canviar de manera
                visible. Però va ser feina manual. Sistema al darrere, no n&rsquo;hi
                havia.
              </p>
              <p className="mt-5">
                Aquesta és la raó per la qual existeix Ulpiano.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Confiança a través de la visibilitat
              </h2>
              <p className="mt-5">
                En el dret —sobretot en herències— hi ha una asimetria. El
                professional coneix el laberint: com es calcula la{" "}
                <Link
                  href="/ca/recursos/blog/la-legitima-catalana"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  llegítima segons el Codi Civil de Catalunya
                </Link>
                , quines reduccions i bonificacions de l&rsquo;ISD corresponen a
                cada hereu, en quin ordre s&rsquo;actua notarialment. El client,
                no. La mare acaba de morir. El seu món administratiu s&rsquo;ha
                trossejat entre notaries, bancs, administració tributària,
                registres. L&rsquo;únic que hauria de tenir visibilitat completa
                és l&rsquo;advocat o l&rsquo;assessor que contracta.
              </p>
              <p className="mt-5">
                Però aquest professional, a la pràctica, té l&rsquo;herència en
                un Excel, un Word, un correu, un WhatsApp. Si ell mateix no
                coneix l&rsquo;estructura de l&rsquo;expedient, tampoc no té
                visibilitat completa. I si no la té, no la pot transmetre.
              </p>
              <p className="mt-5">
                La confiança no és un regal emocional. Neix quan el client pot
                comprovar que confia en la persona adequada, que sap què fa, i
                que fa el que diu que fa.
              </p>
              <p className="mt-5">
                Ulpiano va néixer per això: per convertir l&rsquo;expedient
                successori —el procés més fragmentat, emocionalment carregat i
                jurídicament complex del dret civil— en alguna cosa estructurada,
                visible i precisa. Primer a dins del despatx. Després, per al
                client.
              </p>

              <h2 className="h2 mt-12 text-ink">
                On aporta la intel·ligència artificial, i on no
              </h2>
              <p className="mt-5">
                Quan vaig començar a estructurar Ulpiano, vaig haver de resoldre
                una tensió que en el legal-tech gairebé ningú no explica bé.
              </p>
              <p className="mt-5">
                La intel·ligència artificial és extraordinària llegint
                documents. Pot extreure d&rsquo;un testament escanejat les dades
                clau de l&rsquo;hereu, els béns, les condicions. És ràpida i
                redueix errors de digitació. Però no és bona quan ha de produir
                un número que presentaràs davant Hisenda, o davant un jutge, o
                davant el client. Això demana una cadena de raonament que puguis
                auditar, que pugui citar la norma, que sigui matemàticament
                traçable. En dret, &ldquo;gairebé correcte&rdquo; és incorrecte.
              </p>
              <p className="mt-5">
                Per això Ulpiano té una frontera explícita:{" "}
                <strong>
                  intel·ligència artificial on aporta, motor determinista on és
                  crític
                </strong>
                .
              </p>
              <p className="mt-5">
                La IA llegeix documents, n&rsquo;extreu dades, genera
                esborranys. El motor determinista calcula llegítimes segons el
                Codi Civil de Catalunya, liquida l&rsquo;ISD amb cada
                bonificació citada, genera els models tributaris (660, 650, 651,
                652, 653) amb traçabilitat auditada. Quan tu verifiques,
                verifiques contra norma i dades, no contra el que una xarxa
                neuronal va creure que volia dir un paràgraf del testament.
              </p>
              <p className="mt-5">
                Aquesta frontera no és tecnològica. És una decisió ètica. Com a
                advocat, sé que un error en un càlcul de llegítima o en
                l&rsquo;aplicació d&rsquo;una reducció fiscal pot acabar en un
                litigi, en una multa d&rsquo;Hisenda, o en la desconfiança d&rsquo;un
                client. No puc demanar a un client que es fii d&rsquo;una caixa
                negra d&rsquo;aprenentatge automàtic. Li puc demanar que confiï
                en un motor determinista que cita la norma a cada pas.
              </p>
              <p className="mt-5">
                Aquest principi forma part de l&rsquo;ADN d&rsquo;Ulpiano. No és
                un posicionament de màrqueting. És una decisió que ve de saber
                què vol dir ser advocat. Ho desenvolupem amb més detall a{" "}
                <Link
                  href="/ca/recursos/blog/ia-advocats-successions"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  IA per a advocats de successions
                </Link>
                .
              </p>

              <h2 className="h2 mt-12 text-ink">Del despatx a la plataforma</h2>
              <p className="mt-5">
                Els primers mesos, Ulpiano va ser només nostre. Un sistema intern
                del despatx Fàbrega Legal per gestionar els expedients. Funciona.
                Genera documentació coherent. El client entén el que veu.
              </p>
              <p className="mt-5">
                Però va passar una cosa que no havia previst: col·legues d&rsquo;altres
                despatxos van començar a preguntar com gestionàvem els
                expedients. No volien comprar el programari; volien copiar el
                procés. Era senyal que no era un problema nostre: era un
                problema de l&rsquo;ofici.
              </p>
              <p className="mt-5">
                Girona és una ciutat de despatxos boutique. Molts advocats
                porten herències com una part important de la cartera, però
                sense especialització fiscal integrada, sense coordinació
                documental, sense alertes de terminis. Tenen el mateix que jo
                tenia: una estructura trencada.
              </p>
              <p className="mt-5">
                Vaig decidir convertir Ulpiano en producte. No com un programari
                per a nosaltres. Com una plataforma que altres{" "}
                <Link
                  href="/ca/pensat-per/despatxos"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  despatxos
                </Link>
                , assessors i notaries poguessin fer servir per gestionar els
                seus expedients sota el seu criteri professional.
              </p>
              <p className="mt-5">
                El canvi conceptual va ser important. Ulpiano no és un
                programari que pren decisions. Ulpiano és la infraestructura on
                passen les decisions. Tu decides si incloure una donació
                antenupcial al cabal successori. Ulpiano s&rsquo;assegura que
                aquesta decisió quedi registrada, traçable, que es reflecteixi
                en tots els càlculs derivats, que la puguis mostrar al client.
                És el sistema operatiu del procés. No és el procés.
              </p>
              <p className="mt-5">
                Per això el claim és el que és:{" "}
                <strong>&ldquo;El sistema operatiu de les
                herències.&rdquo;</strong>{" "}
                No &ldquo;el programari que gestiona herències&rdquo;. Un
                sistema operatiu és on passen totes les operacions, on cada
                decisió es registra, on la informació és consistent. És
                infraestructura.
              </p>

              <h2 className="h2 mt-12 text-ink">El que ve després</h2>
              <p className="mt-5">
                Avui Ulpiano cobreix Catalunya —dret foral, norma autonòmica
                fiscal, escenaris que només s&rsquo;apliquen al Codi Civil de
                Catalunya—. És deliberat. Abans d&rsquo;anar a escala estatal,
                prefereixo construir bé una peça foral que no pas mitja de
                nacional.
              </p>
              <p className="mt-5">
                Quan un client d&rsquo;un despatx de Màlaga o de Madrid pugui
                fer servir Ulpiano amb la norma de la seva comunitat autònoma,
                serà perquè haurem resolt correctament la norma de Catalunya. La
                precedència és: rigor local abans d&rsquo;escala nacional.
              </p>
              <p className="mt-5">
                Això vol dir que Ulpiano creixerà a poc a poc. Però creixerà des
                d&rsquo;una base de precisió, no de màrqueting. El professional
                jurídic no compra pel discurs. Compra pel que funciona quan ho
                prova, pel que li treu fricció de veritat, i pel que pot mostrar
                al client amb confiança.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    Ulpiano neix d&rsquo;una pregunta de client: què estic
                    pagant i on ho veig.
                  </li>
                  <li>
                    La confiança en un expedient successori es construeix amb
                    visibilitat, no només amb el resultat.
                  </li>
                  <li>
                    IA on aporta —lectura, extracció, esborranys—. Motor
                    determinista on el número s&rsquo;ha de poder defensar
                    davant Hisenda.
                  </li>
                  <li>
                    Catalunya primer: rigor local abans d&rsquo;escala nacional.
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
                  descarrega el checklist de l&rsquo;expedient successori.
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
                Aquí tens la història. Si vols veure com funciona a la pràctica,
                o com Ulpiano s&rsquo;adapta al teu despatx, ho trobaràs a{" "}
                <Link
                  href="/ca/solucions"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  les nostres solucions
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/gestio-herencies-despatx"
        label="Gestió d'herències en un despatx"
        description="De l'Excel, el Word i el WhatsApp a un expedient amb una sola font de veritat."
      />
    </>
  );
}
