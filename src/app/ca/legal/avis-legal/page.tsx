/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";

export const metadata: Metadata = {
  title: "Avís legal",
  description:
    "Avís legal d'ulpiano.es: identitat del titular, condicions d'ús i règim de responsabilitat.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/avis-legal",
    languages: {
      es: "https://ulpiano.es/legal/aviso-legal",
      ca: "https://ulpiano.es/ca/legal/avis-legal",
      "x-default": "https://ulpiano.es/legal/aviso-legal",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/legal/avis-legal",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function AvisLegalPage() {
  return (
    <LegalPage title="Avís legal" updatedLabel="Darrera actualització: 28 d'agost de 2026">
      <h2>1. Identificació del titular</h2>
      <p>
        En compliment del deure d'informació que preveu l'article 10 de la Llei 34/2002, d'11 de
        juliol, de serveis de la societat de la informació i de comerç electrònic («LSSI»),
        s'informa que el titular del lloc web ulpiano.es (el «Lloc Web») és:
      </p>
      <IdentidadTitular locale="ca" />
      <p>
        El correu electrònic <strong>hola@ulpiano.es</strong> constitueix el mitjà de comunicació
        directa i efectiva amb el titular als efectes de l'article 10.1.a) LSSI. Les comunicacions
        trameses a aquesta adreça s'atenen en horari laboral.
      </p>
      <p>
        El Lloc Web està destinat a presentar informació corporativa, continguts tècnics i
        informatius i, si escau, recursos relatius a la plataforma tecnològica Ulpiano.
      </p>

      <h2>2. Objecte, accés i condicions d'ús</h2>
      <p>
        Aquest Avís Legal regula l'accés, la navegació i l'ús del Lloc Web. L'accés al Lloc Web té
        caràcter gratuït, sens perjudici del cost de connexió i dels mitjans de telecomunicació
        contractats per cada persona usuària.
      </p>
      <p>
        La persona que accedeixi, navegui o utilitzi el Lloc Web adquireix la condició d'usuària i
        declara acceptar aquest Avís Legal des d'aquest accés. La persona usuària s'obliga a
        utilitzar el Lloc Web, els seus continguts i recursos de manera diligent, lícita i conforme
        amb aquest Avís Legal, la bona fe, l'ordre públic i la normativa aplicable.
      </p>
      <p>En particular, resta prohibit:</p>
      <ul>
        <li>
          utilitzar els continguts per a finalitats il·lícites, fraudulentes o lesives de drets o
          interessos de tercers;
        </li>
        <li>
          introduir o difondre programes, codis o elements susceptibles de danyar, alterar,
          interceptar o impedir el funcionament del Lloc Web, els seus sistemes o els sistemes de
          tercers;
        </li>
        <li>
          accedir o intentar accedir a àrees restringides, sistemes, comptes o dades sense
          autorització;
        </li>
        <li>
          reproduir, extreure, reutilitzar, distribuir, transformar o explotar els continguts fora
          dels límits que preveu aquest Avís Legal o permesos per la llei; i
        </li>
        <li>
          utilitzar el Lloc Web d'una manera que pugui comprometre'n la disponibilitat, la
          seguretat o la integritat.
        </li>
      </ul>
      <p>
        El titular podrà modificar, suspendre, retirar o actualitzar el Lloc Web, els seus
        continguts i aquest Avís Legal quan resulti necessari, sens perjudici dels drets que
        corresponguin a les persones usuàries d'acord amb la normativa aplicable. La versió vigent
        serà la publicada al Lloc Web en cada moment.
      </p>
      <p>
        L'eventual contractació de la plataforma Ulpiano es regirà exclusivament per les condicions
        contractuals que s'acceptin expressament per a aquest servei. La simple navegació pel Lloc
        Web, l'accés a un recurs o la tramesa d'una consulta no constitueix contractació de la
        plataforma ni genera obligació de prestació de serveis per part del titular.
      </p>
      <p>
        <strong>Preus publicats.</strong> El Lloc Web publica, a la pàgina de preus, les tarifes
        vigents dels plans de subscripció a la plataforma. Els imports s'expressen en euros i{" "}
        <strong>no inclouen l'Impost sobre el Valor Afegit</strong>, que es repercutirà al tipus
        legalment aplicable en el moment de la facturació. Els preus publicats tenen caràcter
        informatiu i orientatiu: les condicions econòmiques aplicables a cada client són
        exclusivament les que recullen el Full de Subscripció i l'Acord Marc de Serveis que se
        subscriguin, els quals prevalen sobre qualsevol import publicat al Lloc Web.
      </p>
      <p>
        <strong>Codis de conducta.</strong> El titular no es troba adherit a cap codi de conducta
        en el sentit de l'article 10.1.g) LSSI. Si en el futur s'adhereix a algun, s'identificarà
        en aquesta clàusula juntament amb el mitjà electrònic per consultar-lo.
      </p>

      <h2>3. Propietat intel·lectual i industrial</h2>
      <p>
        L'estructura, el disseny, el codi font, les interfícies, els textos, els materials
        gràfics, les imatges, els signes distintius, les bases de dades, els recursos
        descarregables, les eines orientatives i la resta d'elements del Lloc Web estan protegits
        per la normativa de propietat intel·lectual i industrial.
      </p>
      <p>
        Llevat que s'indiqui expressament una titularitat diferent, els drets d'explotació sobre
        aquests elements corresponen al titular o s'utilitzen amb l'autorització o llicència
        corresponent. L'accés al Lloc Web no implica cessió, llicència ni transmissió cap de drets
        de propietat intel·lectual o industrial, més enllà de l'autorització limitada, no
        exclusiva, revocable i no transferible necessària per a la navegació i l'ús privat lícit
        del Lloc Web.
      </p>
      <p>
        El blog tecnicojurídic publicat al Lloc Web, inclosos els seus articles, la selecció,
        l'ordenació i la presentació de continguts, constitueix una obra original protegida. En
        resta prohibida la reproducció, distribució, comunicació pública, transformació, extracció
        sistemàtica, posada a disposició o explotació, total o parcial, sense autorització prèvia i
        escrita del titular, llevat dels casos legalment permesos.
      </p>
      <p>
        Les marques, els noms comercials, els dominis i la resta de signes distintius que
        apareguin al Lloc Web pertanyen als seus titulars respectius. El seu ús sense autorització
        està prohibit.
      </p>
      <p>
        Les sol·licituds relatives a drets de propietat intel·lectual o industrial es podran
        adreçar a <strong>hola@ulpiano.es</strong>.
      </p>

      <h2>4. Continguts informatius, blog, guies, eines i recursos</h2>
      <p>
        Els articles, les guies, els continguts tècnics, els continguts jurídics divulgatius, els
        recursos descarregables, els materials, els simuladors, les calculadores, les eines
        orientatives i qualsevol altra informació disponible al Lloc Web tenen caràcter general,
        merament informatiu i no personalitzat.
      </p>
      <p>En conseqüència:</p>
      <ul>
        <li>
          no constitueixen assessorament jurídic, fiscal, successori, comptable, financer ni
          professional de cap tipus;
        </li>
        <li>
          no substitueixen l'anàlisi individualitzada dels fets, la documentació aplicable, la
          normativa vigent ni la consulta a un professional competent;
        </li>
        <li>
          no s'han d'utilitzar com a base exclusiva per adoptar decisions, dur a terme actuacions,
          presentar declaracions, autoliquidacions, sol·licituds, recursos, documents o tràmits
          davant l'administració tributària competent, òrgans judicials, notaris, registres,
          entitats financeres o qualsevol tercer; i
        </li>
        <li>
          la seva lectura, descàrrega, utilització o la tramesa d'una consulta per mitjà del Lloc
          Web no crea una relació advocat-client, professional-client, encàrrec professional ni
          relació d'assessorament amb el titular.
        </li>
      </ul>
      <p>
        El titular no dirigeix tècnicament expedients successoris ni assumeix la responsabilitat
        professional derivada d'una decisió, actuació o assessorament que correspongui a un
        despatx, assessoria, gestoria o un altre professional. La responsabilitat d'avaluar
        l'adequació de qualsevol contingut o resultat orientatiu a un cas concret correspon
        exclusivament a la persona usuària i, si escau, al professional que l'assessori.
      </p>
      <p>
        El titular procura que els continguts siguin exactes i estiguin actualitzats, però no en
        garanteix l'exhaustivitat, l'exactitud, la vigència, la disponibilitat, l'adequació a un
        supòsit concret ni l'absència d'errors. Les normes, els criteris administratius, les
        interpretacions i les circumstàncies de cada cas poden variar. Dins dels límits admesos
        per la normativa aplicable, el titular no respondrà de les decisions o actuacions
        adoptades a partir dels continguts del Lloc Web ni dels danys o perjudicis que se'n puguin
        derivar.
      </p>
      <p>
        Res del que preveu aquesta clàusula no exclou ni limita responsabilitat quan aquesta
        exclusió o limitació no sigui vàlida d'acord amb una norma imperativa aplicable.
      </p>

      <h2>5. Disponibilitat, seguretat i enllaços de tercers</h2>
      <p>
        El titular no garanteix la disponibilitat, la continuïtat, l'absència d'errors ni la
        seguretat ininterrompuda del Lloc Web. Sens perjudici de les mesures raonables que pugui
        adoptar, tampoc no garanteix la inexistència de virus, codis maliciosos o altres elements
        perjudicials. La persona usuària haurà de disposar de mitjans adequats de protecció i
        assumir les mesures raonables de seguretat durant la navegació i la descàrrega de
        continguts.
      </p>
      <p>
        El Lloc Web pot incloure enllaços, referències o hipervincles a llocs, recursos o serveis
        de tercers. Aquests enllaços es faciliten únicament per a comoditat i informació de la
        persona usuària. El titular no en controla, aprova ni garanteix els continguts, la
        disponibilitat, la seguretat, les polítiques, les condicions d'ús o les pràctiques de
        tractament de dades, i no respon dels danys o perjudicis derivats del seu accés o
        utilització.
      </p>
      <p>
        La inclusió d'un enllaç no implica associació, patrocini, aprovació, col·laboració ni
        participació del titular amb el tercer enllaçat. La persona usuària haurà de consultar les
        condicions i polítiques pròpies de cada lloc o servei de tercers.
      </p>

      <h2>6. Protecció de dades i cookies</h2>
      <p>
        El tractament de les dades personals recollides per mitjà del Lloc Web es regula a la{" "}
        <Link href="/ca/legal/privacitat">Política de Privacitat</Link>. L'ús de cookies i
        tecnologies d'emmagatzematge i recuperació de dades a l'equip terminal de la persona
        usuària es regula a la <Link href="/ca/legal/cookies">Política de Cookies</Link>. L'ús del
        Lloc Web i dels seus recursos descarregables es regula, a més, als{" "}
        <Link href="/ca/legal/termes">Termes d'Ús del Lloc Web</Link>.
      </p>

      <h2>7. Llei aplicable i fur</h2>
      <p>Aquest Avís Legal es regeix pel Dret espanyol.</p>
      <p>
        Qualsevol controvèrsia relacionada amb l'accés, la navegació o l'ús del Lloc Web se
        sotmetrà als jutjats i tribunals que resultin competents d'acord amb la normativa
        processal aplicable. Quan les parts tinguin la condició d'empresaris o professionals i
        sigui vàlid un pacte exprés de submissió, les parts se sotmeten als jutjats i tribunals de
        Girona, amb renúncia expressa a qualsevol altre fur que els pogués correspondre.
      </p>
    </LegalPage>
  );
}
