/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";
import LegalTable from "@/components/legal/LegalTable";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies d'ulpiano.es: categories, taula de cookies i com acceptar, rebutjar o retirar el consentiment.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/cookies",
    languages: {
      es: "https://ulpiano.es/legal/cookies",
      ca: "https://ulpiano.es/ca/legal/cookies",
      "x-default": "https://ulpiano.es/legal/cookies",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/legal/cookies",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      updatedLabel="Versió 1.1 — en vigor des del 28 d'agost de 2026"
    >
      <p>
        Aquesta Política de Cookies es publica en castellà i en català. En cas de discrepància
        d'interpretació prevaldrà la versió castellana, sens perjudici de l'aplicació de les normes
        imperatives que corresponguin.
      </p>

      <h2>1. Identitat de l'editor</h2>
      <IdentidadTitular locale="ca" />

      <h2>2. Objecte i àmbit d'aplicació</h2>
      <p>
        Aquesta Política informa sobre l'ús de cookies i tecnologies similars al lloc web
        ulpiano.es (el «Lloc Web»). És aplicable als dispositius des dels quals s'accedeixi al Lloc
        Web.
      </p>
      <p>
        L'emmagatzematge o l'accés a informació a l'equip terminal es regeix per l'article 22.2 de
        la Llei 34/2002, d'11 de juliol, de serveis de la societat de la informació i de comerç
        electrònic (LSSI). Quan la informació obtinguda amb cookies constitueixi dada personal,
        també serà aplicable el Reglament (UE) 2016/679 (RGPD), en particular els seus articles 6.1
        i 7.
      </p>

      <h2>3. Què són les cookies</h2>
      <p>
        Les cookies són petits fitxers o tecnologies similars que es descarreguen o als quals
        s'accedeix des del dispositiu de l'usuari en visitar un lloc web. Permeten, entre altres
        finalitats, recordar eleccions, facilitar funcionalitats tècniques o mesurar l'ús del Lloc
        Web.
      </p>
      <p>
        Les cookies poden ser <strong>pròpies</strong> (gestionades des d'equips o dominis
        d'Ulpiano) o <strong>de tercers</strong> (gestionades des d'equips o dominis d'una altra
        entitat); i <strong>de sessió</strong> (s'eliminen en tancar el navegador) o{" "}
        <strong>persistents</strong> (romanen durant el termini configurat o fins que l'usuari les
        elimini).
      </p>

      <h2>4. Categories, base de licitud i règim de consentiment</h2>
      <h3>4.1. Cookies necessàries</h3>
      <p>
        Són les imprescindibles per transmetre una comunicació per una xarxa de comunicacions
        electròniques o per prestar una funcionalitat del Lloc Web expressament sol·licitada per
        l'usuari. Estan exemptes del deure d'obtenir consentiment d'acord amb l'excepció de
        l'article 22.2 LSSI.
      </p>
      <p>
        La cookie pròpia <code>gt_consent</code> s'utilitza per conservar l'elecció de l'usuari
        sobre l'ús de cookies. Per la seva finalitat està inclosa en aquesta categoria i no
        requereix consentiment previ: el seu ús es fonamenta en la necessitat de recordar i aplicar
        l'opció de privacitat expressada per l'usuari.
      </p>

      <h3>4.2. Cookies analítiques</h3>
      <p>
        Permeten mesurar i analitzar l'ús del Lloc Web —per exemple, amb dades sobre navegació,
        pàgines visitades o interacció amb continguts— amb la finalitat de comprendre'l i
        millorar-lo.
      </p>
      <p>
        La seva instal·lació o lectura requereix el consentiment previ, lliure, específic, informat
        i inequívoc de l'usuari, d'acord amb l'article 22.2 LSSI i, quan comportin tractament de
        dades personals, amb els articles 6.1.a) i 7 RGPD.{" "}
        <strong>Es mantenen desactivades fins que l'usuari les accepti expressament.</strong>
      </p>

      <h3>4.3. Cookies de màrqueting</h3>
      <p>
        Es destinen a mesurar campanyes, atribuir conversions, crear o utilitzar perfils
        publicitaris, personalitzar publicitat o compartir dades amb plataformes publicitàries.
      </p>
      <p>
        La seva instal·lació o lectura requereix el consentiment previ, lliure, específic, informat
        i inequívoc de l'usuari, d'acord amb l'article 22.2 LSSI i, quan escaigui, amb els articles
        6.1.a) i 7 RGPD.{" "}
        <strong>Es mantenen desactivades fins que l'usuari les accepti expressament.</strong>
      </p>
      <p>
        <strong>
          Després d'acceptar la categoria de màrqueting, el Lloc Web pot instal·lar cookies de
          màrqueting dels serveis que utilitza
        </strong>{" "}
        (Google, per mitjà de Tag Manager i Consent Mode, i HubSpot). Mentre l'usuari no accepti
        aquesta categoria, aquestes cookies no s'instal·len.
      </p>

      <h3>4.4. Configuració de consentiment</h3>
      <p>
        Ulpiano utilitza un bàner propi i un panell de preferències amb selecció granular per les
        categories necessàries, analítiques i de màrqueting. Les categories analítiques i de
        màrqueting estan <strong>desactivades per defecte</strong>: cap cookie o tecnologia no
        exempta no s'activa abans de l'acceptació expressa corresponent.
      </p>
      <p>
        L'eina de mesurament es configura amb <strong>Google Consent Mode v2</strong>, amb els
        paràmetres <code>analytics_storage</code>, <code>ad_storage</code>,{" "}
        <code>ad_user_data</code> i <code>ad_personalization</code>. Mentre no existeixi
        consentiment aplicable, aquests paràmetres es mantenen en estat de denegació i les
        etiquetes operen de manera compatible amb aquesta elecció.
      </p>
      <p>
        El consentiment no s'obté per la simple navegació, la inacció o el tancament del bàner.
      </p>

      <h2>5. Taula de cookies i tecnologies</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Titular</th>
            <th>Tipus</th>
            <th>Finalitat</th>
            <th>Categoria</th>
            <th>Durada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>gt_consent</code>
            </td>
            <td>Ulpiano</td>
            <td>Pròpia</td>
            <td>
              Conserva l'elecció de l'usuari sobre cookies i permet aplicar-ne les preferències en
              visites posteriors.
            </td>
            <td>Necessària</td>
            <td>
              182 dies. <code>SameSite=Lax; Secure</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>_ga</code>
            </td>
            <td>Google Ireland Limited</td>
            <td>Tercer</td>
            <td>
              Distingeix usuaris per generar estadístiques d'ús del Lloc Web. Només s'instal·la
              després d'acceptar la categoria analítica.
            </td>
            <td>Analítica</td>
            <td>2 anys</td>
          </tr>
          <tr>
            <td>
              <code>_ga_FW9TKGSK59</code>
            </td>
            <td>Google Ireland Limited</td>
            <td>Tercer</td>
            <td>
              Conserva l'estat de sessió i permet el mesurament d'ús associat a la propietat de
              Google Analytics 4 <code>G-FW9TKGSK59</code>. Només s'instal·la després d'acceptar la
              categoria analítica.
            </td>
            <td>Analítica</td>
            <td>2 anys</td>
          </tr>
          <tr>
            <td>
              <code>_gcl_au</code>
            </td>
            <td>Google Ireland Limited</td>
            <td>Tercer</td>
            <td>
              Atribució de clics i conversions de campanyes de Google. Només s'instal·la després
              d'acceptar la categoria de màrqueting.
            </td>
            <td>Màrqueting</td>
            <td>90 dies</td>
          </tr>
          <tr>
            <td>
              <code>hubspotutk</code>
            </td>
            <td>HubSpot Ireland Limited</td>
            <td>Tercer</td>
            <td>
              Identifica el visitant per atribuir l'enviament de formularis i el seguiment de
              campanyes a HubSpot. Només s'instal·la després d'acceptar la categoria de màrqueting.
            </td>
            <td>Màrqueting</td>
            <td>13 mesos</td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        <strong>Google Tag Manager</strong> (contenidor <code>GTM-MBNWK2CW</code>) és un gestor
        d'etiquetes: per si sol no instal·la cookies. Pot carregar etiquetes de mesurament i de
        màrqueting dels serveis que Ulpiano utilitza (Google i HubSpot){" "}
        <strong>únicament després del consentiment de la categoria corresponent</strong>.
      </p>
      <p>
        La llista exacta de cookies que instal·la cada proveïdor, i la seva durada, també es pot
        consultar a la política de privacitat de Google (
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
        </a>
        ) i de HubSpot (
        <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">
          https://legal.hubspot.com/privacy-policy
        </a>
        ).
      </p>
      <p>
        <strong>Advertiment operatiu.</strong> Abans d'incorporar qualsevol píxel, etiqueta o
        tecnologia de tercers nova cal actualitzar prèviament aquesta taula, el panell de
        preferències i la configuració de bloqueig previ.
      </p>

      <h2>6. Acceptació, rebuig, modificació i revocació de preferències</h2>
      <p>
        L'usuari pot acceptar, rebutjar o configurar per categories les cookies no necessàries des
        del bàner inicial i el panell de preferències.
      </p>
      <p>
        L'usuari pot modificar o retirar el seu consentiment{" "}
        <strong>
          en qualsevol moment, sense cost i amb una facilitat equivalent a la que va tenir per
          atorgar-lo
        </strong>, amb l'enllaç permanent <strong>«Ajustos de cookies»</strong> situat al peu de pàgina de
        totes les pàgines del Lloc Web. Aquest enllaç obre directament el panell de preferències,
        sense obligar l'usuari a cercar l'opció dins d'aquesta Política ni a desplaçar-s'hi.
      </p>
      <p>
        La retirada del consentiment impedeix noves operacions d'emmagatzematge o accés de les
        cookies afectades i, quan és tècnicament possible, provoca l'eliminació de les cookies no
        necessàries prèviament activades. L'usuari també pot eliminar o bloquejar cookies des de la
        configuració del seu navegador; aquesta configuració és complementària i no substitueix el
        mecanisme propi de gestió de preferències del Lloc Web.
      </p>

      <h2>7. Conseqüències de rebutjar cada categoria</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Conseqüència del rebuig</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Necessàries</td>
            <td>
              No es poden desactivar des del panell mentre siguin estrictament necessàries. Si es
              bloquegen des del navegador, determinades funcions essencials o la conservació de
              l'elecció de privacitat poden no operar correctament.
            </td>
          </tr>
          <tr>
            <td>Analítiques</td>
            <td>
              No s'instal·laran ni es llegiran cookies analítiques. Ulpiano no rebrà la informació
              de mesurament associada a aquestes tecnologies. L'accés al contingut i a les
              funcionalitats essencials del Lloc Web no queda condicionat a la seva acceptació.
            </td>
          </tr>
          <tr>
            <td>Màrqueting</td>
            <td>
              No s'instal·laran ni es llegiran cookies de màrqueting ni es duran a terme, amb
              aquestes tecnologies, operacions de personalització publicitària, atribució de
              campanyes o elaboració de perfils publicitaris. L'accés al contingut i a les
              funcionalitats essencials del Lloc Web no queda condicionat a la seva acceptació.
            </td>
          </tr>
        </tbody>
      </LegalTable>

      <h2>8. Tercers i transferències internacionals</h2>
      <p>
        Quan l'usuari accepta les cookies analítiques, <strong>Google Ireland Limited</strong>{" "}
        (Gordon House, Barrow Street, Dublín 4, Irlanda) tracta la informació derivada de l'ús de
        Google Analytics 4 d'acord amb les seves pròpies condicions i polítiques, en qualitat
        d'encarregat del tractament d'Ulpiano. Les cookies <code>_ga</code> i{" "}
        <code>_ga_FW9TKGSK59</code> se serveixen des del domini <code>.ulpiano.es</code>.
      </p>
      <p>
        Quan l'usuari accepta les cookies de màrqueting, Google i HubSpot poden instal·lar les
        cookies identificades a la taula anterior. El tractament que realitzen es regeix per les
        seves pròpies polítiques:{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          política de privacitat de Google
        </a>{" "}
        i{" "}
        <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">
          política de privacitat de HubSpot
        </a>
        .
      </p>
      <p>
        Abans d'incorporar un proveïdor de màrqueting addicional cal actualitzar aquesta taula, el
        panell de preferències i el bloqueig previ.
      </p>

      <h2>9. Simetria de les opcions del bàner</h2>
      <p>
        El bàner del Lloc Web compleix simultàniament les condicions següents, exigides per
        l'article 22.2 LSSI i la Guia sobre l'ús de les cookies de l'AEPD:
      </p>
      <ul>
        <li>
          La primera capa ofereix, amb la mateixa visibilitat, mida i nombre d'interaccions, les
          opcions <strong>«Rebutjar»</strong>, <strong>«Ajustos»</strong> i{" "}
          <strong>«Acceptar»</strong>.
        </li>
        <li>
          El panell obert des d'«Ajustos» permet desar una selecció parcial i no conté caselles
          premarcades a favor de les categories analítiques o de màrqueting.
        </li>
        <li>
          No s'empren dissenys que indueixin a acceptar ni que dificultin materialment el rebuig.
        </li>
        <li>
          L'enllaç permanent de gestió de preferències està disponible al peu de pàgina després de
          tancar el bàner.
        </li>
      </ul>

      <h2>10. Actualitzacions d'aquesta Política</h2>
      <p>
        Ulpiano podrà actualitzar aquesta Política per reflectir canvis normatius, tècnics o
        operatius, en especial la incorporació, modificació o retirada de cookies, etiquetes,
        píxels o tercers. Quan un canvi afecti les finalitats, categories, tercers o condicions
        sobre les quals es va obtenir el consentiment, Ulpiano actualitzarà la informació i
        recaptarà de nou el consentiment abans d'activar el tractament afectat, quan resulti
        exigible.
      </p>

      <h2>11. Informació addicional</h2>
      <p>
        La informació sobre el tractament de dades personals dut a terme per Ulpiano es pot
        consultar a la <Link href="/ca/legal/privacitat">Política de Privacitat</Link>.
      </p>
    </LegalPage>
  );
}
