import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "Gestió d'herències en un despatx: del caos al procés",
  description:
    "Un expedient successori típic genera més de 40 gestions entre hereus, documents i administracions. El problema no és el dret: és la coordinació.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/gestio-herencies-despatx",
    languages: {
      es: "https://ulpiano.es/recursos/blog/gestion-herencias-despacho",
      ca: "https://ulpiano.es/ca/recursos/blog/gestio-herencies-despatx",
      "x-default": "https://ulpiano.es/recursos/blog/gestion-herencias-despacho",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Gestió d'herències en un despatx: del caos al procés",
    description:
      "Per què un expedient successori dispers en Excel, Word, PDF, correu i WhatsApp costa temps, i què ha de tenir un sistema de gestió per evitar-ho.",
    url: "https://ulpiano.es/ca/recursos/blog/gestio-herencies-despatx",
    locale: "ca_ES",
    type: "article",
  },
};

export default function GestioHerenciesDespatxArticlePageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "Gestió d'herències en un despatx",
            href: "/ca/recursos/blog/gestio-herencies-despatx",
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
                  9 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Gestió d&rsquo;herències en un despatx: del caos documental al
                procés estructurat
              </h1>
              <p className="body-lg mt-6 text-slate">
                Un expedient successori típic genera més de 40 gestions entre
                hereus, documents i administracions. No és el dret el que consumeix
                temps. És la coordinació.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d&rsquo;Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                He comptat les vegades que, en un expedient típic, s&rsquo;envia el
                mateix certificat de defunció: quatre. Una a la notaria, una altra
                al banc, una altra a l&rsquo;administració tributària, una altra al
                Registre de la Propietat. I això no és un problema del certificat.
                És un símptoma que l&rsquo;expedient no té una font única de veritat.
                Viu dispers: en l&rsquo;Excel de càlcul, en el Word del quadern
                particional, en carpetes de PDF sense ordre, en fils de correu, en
                el WhatsApp de l&rsquo;hereu. I quan alguna cosa canvia —una dada de
                l&rsquo;actiu, una rectificació del testament, un canvi en la
                normativa fiscal— no canvia en un sol lloc. Canvia en tres,
                s&rsquo;oblida en un, i algú ha de refer feina.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El diagnòstic: on viu avui un expedient
              </h2>
              <p className="mt-5">
                Pregunta al teu equip on resideix la veritat en un expedient
                successori. Probablement respondrà així:
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Excel de càlcul.</strong> On quadren el cabal relicte, les
                  llegítimes, les quotes hereditàries. Columnes per hereu, fórmules
                  que s&rsquo;hereten d&rsquo;expedients antics (amb dades del client
                  anterior? Ningú no ho recorda). Cada canvi de norma fiscal
                  requereix actualitzar totes les files obertes. Algú ho fa;
                  d&rsquo;altres no ho veuen fins que el client pregunta per què li
                  ha pujat l&rsquo;ISD.
                </li>
                <li>
                  <strong>Word del quadern particional.</strong> On quadren números
                  d&rsquo;un altre Excel. Terminis de l&rsquo;apartat de partició.
                  Signatures. Referències creuades manuals. Si l&rsquo;Excel va
                  canviar i el Word no, el client rep un document inconsistent.
                </li>
                <li>
                  <strong>Carpeta de PDF.</strong> El testament escanejat, la nota
                  simple de l&rsquo;immoble, l&rsquo;extracte bancari. Ordenats
                  cronològicament si tenen sort. Sense metadades que diguin quina és
                  la versió final i quina era revisió.
                </li>
                <li>
                  <strong>Fils de correu.</strong> Hereus que envien documents sense
                  un assumpte consistent. Canvis de decisió que arriben com un
                  &ldquo;si us plau, posa-ho així&rdquo;. El client pregunta què va
                  passar amb la seva demanda de declaració d&rsquo;hereus. Navegues
                  els últims tres mesos de safata per trobar on va respondre
                  l&rsquo;advocat.
                </li>
                <li>
                  <strong>WhatsApp de l&rsquo;hereu.</strong> Un hereu que no vol
                  esperar el correu formal. &ldquo;Confirmem el valor de la casa o
                  no?&rdquo;. La confirmació queda al telèfon del professional. Si
                  aquesta persona marxa de l&rsquo;empresa o perd el mòbil, la
                  decisió desapareix.
                </li>
              </ul>
              <p className="mt-5">
                Cadascun d&rsquo;aquests llocs és una versió potencial de la veritat.
                Quan són quatre o cinc expedients oberts, gestionar quina versió és
                l&rsquo;actual es converteix en feina de coordinació pura.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El cost invisible: reenviaments, versions i buits d&rsquo;error
              </h2>
              <p className="mt-5">No es factura, però consumeix temps:</p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Reenviaments de documents.</strong> &ldquo;Em reenvieu el
                  certificat de defunció? No el trobo&rdquo;. El professional el
                  busca, el localitza a la carpeta de l&rsquo;expedient de 2022 (vuit
                  mesos enrere), el reenvia. Mateix document, quarta vegada en tres
                  mesos.
                </li>
                <li>
                  <strong>Versions que no són versions.</strong> El client pregunta
                  si està inclosa la reducció d&rsquo;habitatge habitual en la
                  liquidació de l&rsquo;ISD. El professional va a l&rsquo;Excel,
                  calcula, envia un número. L&rsquo;endemà, rectificació fiscal:
                  l&rsquo;habitatge no és habitual, és segona residència. El número
                  que es va enviar ahir ja no val. Algú ha de recalcular i avisar. Si
                  no avisa a temps, el client presenta el 650 amb la xifra
                  equivocada.
                </li>
                <li>
                  <strong>Plantilles contaminades.</strong> Fas servir la plantilla
                  del quadern particional de l&rsquo;expedient anterior. Copies,
                  canvies dades. Al cap de dos mesos, el client pregunta per un
                  paràgraf estrany de l&rsquo;apartat de deutes que no recorda haver
                  autoritzat. Era de l&rsquo;herència de la seva mare, fa dos anys.
                  Ningú no va notar que la plantilla portava dades del client
                  anterior.
                </li>
                <li>
                  <strong>Alertes que no existeixen.</strong> El termini voluntari de
                  presentació de l&rsquo;ISD és de 6 mesos des de la defunció
                  (l&rsquo;Administració, per la seva banda, disposa d&rsquo;un
                  termini de resolució de dotze mesos, ampliable en supòsits
                  d&rsquo;especial complexitat —art. 682-7 del Decret Legislatiu
                  1/2024, que refon la gestió tributària catalana). Algú ho sap a
                  l&rsquo;agenda personal. Algú ho anota a l&rsquo;Excel. Ningú no ho
                  valida per a tots els expedients oberts contra el calendari. Venç
                  un termini per un expedient que &ldquo;feia temps que era
                  obert&rdquo; però que no era a la llista de pendents.
                </li>
                <li>
                  <strong>Traçabilitat de decisió zero.</strong> El client pregunta:
                  &ldquo;Per què no vau incloure la donació prenupcial en el cabal
                  successori?&rdquo;. Buscar per què es va prendre aquesta decisió
                  requereix navegar correus de fa quatre mesos amb el gestor que ja
                  no hi és, o una nota a l&rsquo;Excel amb la justificació que ningú
                  no va escriure.
                </li>
              </ul>
              <p className="mt-5">
                Això no és negligència. És arquitectura d&rsquo;informació trencada.
                Quan les dades estan disperses, la coordinació reemplaça el sistema.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Què ha de tenir un sistema de gestió de l&rsquo;expedient successori
              </h2>
              <p className="mt-5">
                Si deleguessis la gestió d&rsquo;herències a una aplicació de notes o
                una carpeta al núvol, continuaries tenint els mateixos problemes. El
                programari no és el que defineix si el procés escala. L&rsquo;estructura
                sí.
              </p>
              <p className="mt-5">
                Un sistema de gestió de l&rsquo;expedient successori ha de tenir:
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Font única de veritat.</strong> Un registre central on viu
                  tota la informació de l&rsquo;expedient: dades del causant, hereus,
                  actius, passius. Quan canvies una dada allà, el canvi es reflecteix
                  en tots els documents derivats. No hi ha diverses versions de quin
                  és el cabal net.
                </li>
                <li>
                  <strong>Control documental per expedient.</strong> No una carpeta
                  genèrica a Dropbox. Cada document lligat a l&rsquo;expedient, amb
                  metadades de versió, data de lliurament i qui el va carregar. El
                  certificat de defunció es carrega una sola vegada. Quan cal en un
                  altre context, es referencia des del mateix lloc.
                </li>
                <li>
                  <strong>Alertes de terminis.</strong> El termini de 6 mesos de
                  l&rsquo;ISD, la data de l&rsquo;escriptura notarial, la del dipòsit
                  en garantia si n&rsquo;hi ha. El sistema avisa amb antelació, sense
                  que algú hagi de revisar un calendari. Per a cada expedient, el pas
                  següent és evident.
                </li>
                <li>
                  <strong>Traçabilitat de càlcul.</strong> No un resultat a
                  l&rsquo;Excel sense mostrar el raonament. Cada xifra ha de tenir una
                  justificació: la norma aplicada, la dada d&rsquo;origen, la lògica
                  fiscal. Si un assessor fiscal audita l&rsquo;expedient, o Hisenda el
                  revisa, el professional pot mostrar el raonament pas a pas.
                </li>
                <li>
                  <strong>Portal perquè el client vegi l&rsquo;estat.</strong> No
                  informes per correu cada dues setmanes. Un accés on el client entra,
                  veu l&rsquo;estat del seu expedient, descarrega documents, veu quines
                  decisions s&rsquo;han pres i per què. No és un correu que es perd. És
                  una font de veritat del client. Això redueix correu i trucades de
                  seguiment.
                </li>
              </ul>

              <h2 className="h2 mt-12 text-ink">
                Com es veu aquest flux a la pràctica
              </h2>
              <p className="mt-5">
                La Marta és advocada en un despatx de Girona. Gestiona uns 50
                expedients d&rsquo;herències l&rsquo;any. Fins fa poc, aquest era el
                seu flux de treball típic:
              </p>

              <h3 className="mt-8 font-dm-sans text-xl font-bold text-ink">
                Abans: el flux dispers
              </h3>
              <p className="mt-5">
                <strong>Dilluns.</strong> Entra un expedient nou. Client: hereu del
                seu pare. La Marta obre l&rsquo;Excel, copia la plantilla de
                l&rsquo;expedient anterior, canvia el nom, comença a introduir dades:
                domicili del difunt, data de defunció, valor dels béns llistats a la
                nota simple, extracte bancari. Mentrestant, obre el Word, crea el
                quadern particional. Copia la plantilla, canvia números. A la tarda,
                el client truca. Hi ha un bé més que no apareix a la nota simple. La
                Marta obre l&rsquo;Excel, afegeix la fila, torna a calcular.
                Actualitza el Word manualment.
              </p>
              <p className="mt-5">
                <strong>Dimecres.</strong> El gestor li pregunta si aquest expedient
                és per a liquidació de l&rsquo;ISD. La Marta va a l&rsquo;Excel, veu
                el cabal, obre un altre Excel paral·lel de càlcul fiscal, repassa la
                normativa catalana de l&rsquo;impost (Llei 19/2010). Detecta que una
                hereva té més de 75 anys i té dret a una reducció addicional. Va al
                Word, afegeix una nota al peu. A l&rsquo;Excel de fiscal, els números
                pugen. Ja ho ha reflectit al quadern? No. Va al Word, actualitza.
              </p>
              <p className="mt-5">
                <strong>Divendres.</strong> El client pregunta &ldquo;quant em costarà
                això?&rdquo;. La Marta envia el quadern particional per correu. El
                client pregunta per què la quantitat final ha canviat respecte a
                l&rsquo;estimació de fa tres dies. La Marta no recorda quina era
                l&rsquo;estimació de fa tres dies. Busca a l&rsquo;historial del Word.
                Troba una versió anterior: &ldquo;Quadern_Particional_v1.docx&rdquo;.
                L&rsquo;obre. Són números diferents. Aquella era abans de la reducció
                per edat. Li envia al client la versió nova. Client: &ldquo;És segur
                aquest número?&rdquo;.
              </p>
              <p className="mt-5">
                Això són els primers cinc dies d&rsquo;un expedient estàndard, repetit
                50 vegades l&rsquo;any.
              </p>

              <h3 className="mt-8 font-dm-sans text-xl font-bold text-ink">
                Ara: amb un sistema de gestió de l&rsquo;expedient
              </h3>
              <p className="mt-5">
                <strong>Dilluns.</strong> Entra l&rsquo;expedient. La Marta crea un
                expedient nou a la plataforma. Carrega el testament (la plataforma el
                llegeix automàticament, extreu dades estructurades), la nota simple
                (extreu béns), el certificat de defunció. Les dades del difunt,
                hereus i béns apareixen ja prefigurades. La Marta valida i corregeix
                si cal. Una sola font de dades. Al panell del client, apareix
                automàticament que l&rsquo;expedient és en fase d&rsquo;inventari, i
                es veu l&rsquo;estat del cabal.
              </p>
              <p className="mt-5">
                <strong>Dimecres.</strong> El gestor requereix dades per a l&rsquo;ISD.
                La Marta obre el mòdul de càlcul fiscal. La plataforma ja té totes les
                dades de l&rsquo;expedient (cabal, hereus, relació de parentiu). El
                domicili del causant és a Girona: el sistema aplica la normativa
                catalana (Llei 19/2010). Valida automàticament que l&rsquo;hereva té
                més de 75 anys (dades de l&rsquo;expedient) i aplica la reducció. El
                càlcul es genera. La Marta el verifica una vegada. Està lligat a les
                dades d&rsquo;origen. Si alguna cosa canvia, recalcular és un botó.
              </p>
              <p className="mt-5">
                <strong>Divendres.</strong> El client pregunta què li costarà. La
                Marta genera el quadern particional des de la plataforma. Tots els
                números vénen del mateix lloc. El client rep el document amb
                l&rsquo;estat més recent. Si hi havia una versió anterior, la
                plataforma mostra l&rsquo;historial de canvis (quines dades es van
                modificar, quan i per qui). No hi ha ambigüitat sobre quina és la
                versió actual.
              </p>
              <p className="mt-5">
                <strong>Final de l&rsquo;expedient.</strong> La plataforma calcula
                automàticament que el termini de presentació de l&rsquo;ISD és de 6
                mesos. La Marta té una alerta al panell. Quan falten 15 dies, la
                plataforma l&rsquo;avisa. El Model 650 es genera directament des dels
                càlculs de l&rsquo;expedient. La Marta el revisa (el seu criteri
                jurídic continua sent el que decideix), el signa amb els hereus, el
                presenta.
              </p>
              <p className="mt-5">
                <strong>Què no canvia:</strong> el criteri jurídic i la relació amb el
                client continuen sent del professional. La plataforma no decideix res.
                Estructura, valida, coordina i documenta. L&rsquo;advocat continua sent
                qui pren les decisions sobre partició, sobre si incloure o excloure un
                bé, sobre si aplicar una reducció específica. El que canvia és que
                aquestes decisions no es perden en tres llocs diferents.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El futur: deixa de reenviar el mateix certificat
              </h2>
              <p className="mt-5">
                Quan el procés successori té font única i control documental, passa
                una cosa evident: la feina administrativa desapareix. No desapareix el
                dret, desapareix la coordinació trencada.
              </p>
              <p className="mt-5">
                El certificat de defunció no es reenvia quatre vegades perquè es
                carrega una sola vegada i es referencia on cal. El client no pregunta
                deu vegades quin és l&rsquo;estat perquè el veu en un portal. La
                plantilla no es contamina amb dades d&rsquo;expedients anteriors perquè
                cada expedient està encapsulat. El termini no venç perquè el sistema el
                controla. La versió final del quadern és evident perquè és derivada de
                dades úniques.
              </p>
              <p className="mt-5">
                Aquesta és la feina que guanya un despatx que fa servir un sistema de
                gestió d&rsquo;expedients. No treballa més ràpid sense més. Treballa més
                ràpid perquè ja no perd temps en allò que el sistema pot fer per ell.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    El cost d&rsquo;un expedient successori no és en el dret, sinó a
                    coordinar informació dispersa en Excel, Word, PDF, correu i
                    WhatsApp.
                  </li>
                  <li>
                    Sense font única de veritat, cada canvi es propaga a mà:
                    s&rsquo;oblida en algun lloc i algú refà feina.
                  </li>
                  <li>
                    Un sistema de gestió necessita font única de dades, control
                    documental, alertes de terminis, traçabilitat de càlcul i un
                    portal de client.
                  </li>
                  <li>
                    El criteri jurídic continua sent del professional; la plataforma
                    estructura, valida, coordina i documenta, no decideix.
                  </li>
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
                Aquest article descriu un flux de treball de referència; cada despatx
                ha d&rsquo;adaptar el procés al seu volum d&rsquo;expedients, als
                sistemes ja implantats i als terminis i normativa aplicables a cada
                territori.
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/ca/recursos/blog/retencio-fidelitzacio-client-assessories"
        label="Retenir l'hereu"
        description="L'expedient ben resolt és la mètrica que l'assessoria no mira."
      />
    </>
  );
}
