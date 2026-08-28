/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";

export const metadata: Metadata = {
  title: "Termes d'Ús",
  description:
    "Termes d'ús del lloc web ulpiano.es i dels recursos que es posen a disposició per mitjà seu.",
  alternates: {
    canonical: "https://ulpiano.es/ca/legal/termes",
    languages: {
      es: "https://ulpiano.es/legal/terminos",
      ca: "https://ulpiano.es/ca/legal/termes",
      "x-default": "https://ulpiano.es/legal/terminos",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/legal/termes",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function TermesPage() {
  return (
    <LegalPage
      title="Termes d'Ús del Lloc Web i Recursos d'Ulpiano"
      updatedLabel="Versió 1.0 — en vigor des del 28 d'agost de 2026"
    >
      <p>
        <strong>Àmbit.</strong> Aquests termes regulen exclusivament l'accés, la navegació i l'ús
        del lloc web ulpiano.es i dels continguts, eines i recursos que es posin a disposició per
        mitjà seu. <strong>No regulen l'ús de la plataforma SaaS d'Ulpiano</strong>, que es regeix
        pel seu propi Acord Marc de Serveis.
      </p>

      <h2>1. Identificació del titular</h2>
      <IdentidadTitular locale="ca" />
      <p>
        Als efectes del deure d'informació previst a l'article 10 de la Llei 34/2002, d'11 de
        juliol, de serveis de la societat de la informació i de comerç electrònic (la «LSSI»), la
        informació completa del titular figura a l'<Link href="/ca/legal/avis-legal">Avís Legal</Link>.
      </p>

      <h2>2. Objecte, acceptació i àmbit dels Termes</h2>
      <p>
        2.1. Aquests Termes d'Ús regulen l'accés, la navegació i la utilització del Lloc Web,
        incloses les seves pàgines informatives, publicacions de blog, continguts jurídics
        divulgatius, pàgines relatives a models tributaris de successions, formularis i els
        recursos descarregables o eines que Ulpiano pugui posar a disposició (conjuntament, els
        «Recursos»).
      </p>
      <p>
        2.2. L'accés, la navegació o l'ús del Lloc Web atribueix a qui el fa la condició d'usuari
        (l'«Usuari») i implica l'acceptació d'aquests Termes d'Ús. Si l'Usuari no hi està d'acord,
        s'ha d'abstenir d'utilitzar el Lloc Web i els Recursos.
      </p>
      <p>
        2.3. Ulpiano podrà modificar aquests Termes d'Ús quan sigui necessari per raons legals,
        tècniques, operatives o d'actualització dels continguts i Recursos. La versió vigent serà
        la publicada al Lloc Web en cada moment. L'ús posterior a la seva publicació suposarà
        l'acceptació de la versió actualitzada.
      </p>
      <p>
        2.4. El Lloc Web s'adreça principalment a professionals i organitzacions que desenvolupin
        la seva activitat a Espanya. L'Usuari que hi accedeixi des d'una altra jurisdicció ho farà
        sota la seva exclusiva responsabilitat i haurà de verificar que aquest accés i ús resulten
        conformes amb la normativa que li sigui aplicable.
      </p>

      <h2>3. Delimitació expressa respecte de la plataforma SaaS</h2>
      <p>
        3.1. Aquests Termes d'Ús i les condicions contractuals de la plataforma SaaS d'Ulpiano són
        documents diferents, amb objecte, àmbit subjectiu i règim jurídic propis.
      </p>
      <p>
        3.2. El Lloc Web és un entorn públic d'informació, divulgació i, si escau, posada a
        disposició de Recursos. La plataforma SaaS d'Ulpiano és un servei B2B diferenciat, destinat
        a despatxos professionals, assessories fiscals, gestories i notaries que formalitzin la
        contractació corresponent.
      </p>
      <p>
        3.3. L'accés o ús del Lloc Web, la descàrrega d'un Recurs, la tramesa d'un formulari o la
        subscripció a comunicacions <strong>no</strong> constitueixen contractació de la plataforma
        SaaS, <strong>no</strong> confereixen dret d'accés a aquesta, <strong>no</strong> habiliten
        l'ús de les seves funcionalitats i <strong>no</strong> creen un compte en aquesta
        plataforma.
      </p>
      <p>
        3.4. L'accés a la plataforma SaaS requerirà, en tot cas, la formalització separada de
        l'Acord Marc de Serveis i del Full de Subscripció corresponents i el compliment dels
        requisits d'alta, contractació i pagament que s'hi preveuen. En cas de contradicció entre
        aquests Termes d'Ús i les condicions contractuals de la plataforma SaaS respecte d'aquesta
        darrera, prevaldran aquestes darreres.
      </p>

      <h2>4. Condicions d'accés i ús del Lloc Web</h2>
      <p>
        4.1. L'accés al Lloc Web és, amb caràcter general, lliure i gratuït, sens perjudici del
        cost de connexió i dels mitjans de telecomunicacions contractats per l'Usuari amb el seu
        proveïdor.
      </p>
      <p>
        4.2. Alguns Recursos podran requerir l'emplenament previ d'un formulari, l'acceptació de
        condicions particulars, l'acreditació de determinats requisits o la facilitació de dades de
        contacte. Quan hi hagi una condició particular, aquesta es mostrarà a l'Usuari abans del
        seu accés o descàrrega i complementarà aquests Termes d'Ús.
      </p>
      <p>
        4.3. L'Usuari s'obliga a utilitzar el Lloc Web i els Recursos de manera diligent, lícita i
        conforme amb aquests Termes d'Ús, la bona fe, l'ordre públic i la normativa aplicable. En
        particular, s'abstindrà de:
      </p>
      <ul>
        <li>
          utilitzar els continguts o Recursos per a finalitats il·lícites, fraudulentes o que
          lesionin drets o interessos d'Ulpiano o de tercers;
        </li>
        <li>
          introduir o difondre virus, codi maliciós, programes o qualssevol elements capaços
          d'alterar, interrompre o danyar sistemes, xarxes, dades o continguts;
        </li>
        <li>
          accedir o intentar accedir sense autorització a zones restringides, comptes, sistemes o
          dades d'Ulpiano o de tercers;
        </li>
        <li>
          fer extracció sistemàtica, mineria de dades, scraping, indexació no autoritzada,
          enginyeria inversa o ús automatitzat del Lloc Web o dels Recursos que excedeixi la
          navegació ordinària;
        </li>
        <li>
          suplantar la identitat de tercers, utilitzar dades alienes sense autorització o
          facilitar informació falsa, incompleta, fraudulenta o il·lícita; i
        </li>
        <li>
          reproduir, distribuir, comunicar públicament, transformar, posar a disposició, cedir,
          subllicenciar, comercialitzar o explotar continguts o Recursos fora dels usos
          expressament permesos en aquests Termes d'Ús o per la llei.
        </li>
      </ul>
      <p>
        4.4. Ulpiano podrà suspendre, limitar o denegar l'accés al Lloc Web o a Recursos concrets
        quan apreciï un ús contrari a aquests Termes d'Ús, un risc per a la seguretat o integritat
        dels seus sistemes, o una obligació legal de fer-ho, sens perjudici de les accions que li
        puguin correspondre.
      </p>

      <h2>5. Informació divulgativa, eines orientatives i calculadores</h2>
      <p>
        5.1. Els continguts del Lloc Web tenen caràcter general, divulgatiu i informatiu. No
        constitueixen assessorament jurídic, fiscal, comptable, notarial, financer ni de cap altra
        naturalesa professional, ni substitueixen l'anàlisi de les circumstàncies concretes de
        cada cas per un professional competent.
      </p>
      <p>
        5.2. Les eines orientatives, simuladors, qüestionaris i calculadores —incloses les que
        puguin referir-se a l'Impost sobre Successions i Donacions («ISD») o altres tributs— es
        faciliten exclusivament amb finalitats informatives i d'aproximació. Els seus resultats són
        estimacions basades en les dades introduïdes per l'Usuari i en les hipòtesis, abast, data
        d'actualització i limitacions que, si escau, s'indiquin a cada eina.
      </p>
      <p>
        5.3. En particular, el resultat d'una calculadora d'ISD{" "}
        <strong>no constitueix</strong> una liquidació, autoliquidació, declaració, valoració,
        informe pericial, criteri vinculant, instrucció de compliment ni document apte per a la
        seva presentació davant de l'administració tributària competent. El càlcul tributari pot
        dependre, entre altres extrems, de fets, valoracions, parentiu, residència, normativa
        aplicable, beneficis fiscals, terminis, documentació disponible i criteris administratius
        o judicials que una eina pública no pot verificar ni resoldre de manera exhaustiva.
      </p>
      <p>
        5.4. L'Usuari haurà de revisar, contrastar i, quan resulti pertinent, sotmetre a validació
        professional independent qualsevol resultat obtingut abans d'adoptar decisions, formular
        recomanacions, efectuar pagaments, presentar documents o dur a terme actuacions amb
        transcendència jurídica, tributària, econòmica o patrimonial. Ulpiano no assumeix la
        direcció ni la responsabilitat professional d'aquestes decisions o actuacions.
      </p>
      <p>
        5.5. Les eines del Lloc Web no adopten decisions automatitzades amb efectes jurídics per a
        l'Usuari ni per a tercers en el sentit de l'article 22 del Reglament (UE) 2016/679.
        L'eventual introducció de dades en una eina no determina per si mateixa drets, obligacions,
        quotes tributàries, terminis ni resultats jurídicament vinculants.
      </p>
      <p>
        5.6. En la màxima mesura permesa per la normativa aplicable, Ulpiano no respondrà de les
        decisions, actes, omissions, declaracions, presentacions, càlculs definitius, pagaments o
        perjudicis que l'Usuari o un tercer adopti, executi o pateixi basant-se exclusivament o
        principalment en continguts, estimacions o resultats de les eines del Lloc Web. Aquesta
        exclusió no limita la responsabilitat que no pugui excloure's o limitar-se vàlidament per
        norma imperativa.
      </p>

      <h2>6. Recursos descarregables</h2>
      <p>
        6.1. Els Recursos descarregables, com ara plantilles, llistes de comprovació d'expedients,
        guies, documents de treball o altres materials anàlegs, es faciliten per a l'ús propi de
        l'Usuari d'acord amb la llicència limitada prevista en aquesta clàusula. La seva descàrrega
        o disponibilitat no suposa la prestació per part d'Ulpiano d'un servei professional a
        l'Usuari ni a un tercer.
      </p>
      <p>
        6.2. Llevat que un Recurs o les seves condicions particulars estableixin expressament una
        altra cosa, Ulpiano concedeix a l'Usuari una llicència no exclusiva, revocable, personal,
        professional, intransferible i no subllicenciable per descarregar, reproduir i utilitzar el
        Recurs únicament per a les seves necessitats internes i la seva pràctica professional
        pròpia.
      </p>
      <p>
        6.3. Queda expressament prohibit, sense autorització prèvia i escrita d'Ulpiano: (a)
        redistribuir, compartir, publicar, allotjar, posar a disposició de tercers o incorporar a
        repositoris públics o privats els Recursos; (b) vendre'ls, revendre'ls, llogar-los,
        llicenciar-los, subllicenciar-los o explotar-los comercialment de manera autònoma; (c)
        eliminar-ne els avisos de titularitat, limitar o eludir mesures tècniques de protecció; o
        (d) presentar-los com a propis o atribuir-ne l'autoria a una persona diferent d'Ulpiano o
        del titular identificat al Recurs.
      </p>
      <p>
        6.4. Els Recursos són materials generals i requereixen una adaptació i revisió professional
        específiques per a cada supòsit, atenent els fets, documents, parts intervinents,
        legislació aplicable i finalitat perseguida. L'Usuari és l'únic responsable d'aquesta
        adaptació, del seu ús i de verificar-ne l'adequació, integritat, vigència i licitud abans
        d'utilitzar-lo, facilitar-lo a un tercer, signar-lo o presentar-lo davant de qualsevol
        organisme o autoritat.
      </p>

      <h2>7. Formularis i veracitat de les dades</h2>
      <p>
        7.1. L'Usuari garanteix que les dades que faciliti per mitjà de formularis del Lloc Web són
        veraces, exactes, completes, lícites i actualitzades, i que disposa de base jurídica
        suficient per comunicar qualsevol dada de tercers. Així mateix, es compromet a
        actualitzar-les quan sigui necessari.
      </p>
      <p>
        7.2. L'Usuari respondrà davant d'Ulpiano i davant de tercers dels danys i perjudicis que es
        derivin de dades falses, inexactes, incompletes, desactualitzades, il·lícites o facilitades
        sense l'autorització necessària.
      </p>
      <p>
        7.3. El lliurament d'un Recurs podrà condicionar-se al fet que l'Usuari faciliti les dades
        identificades com a obligatòries al formulari corresponent i al fet que presti el
        consentiment requerit per al tractament de les seves dades. La negativa a facilitar-les
        podrà impedir la gestió de la sol·licitud, sense que això generi cap dret davant
        d'Ulpiano.
      </p>
      <p>
        7.4. Les dades personals facilitades mitjançant formularis es tractaran d'acord amb la{" "}
        <Link href="/ca/legal/privacitat">Política de Privacitat</Link>, que identifica les
        finalitats, bases jurídiques, destinataris, terminis de conservació i manera d'exercici
        dels drets aplicables a cada formulari, en compliment de l'article 13 del Reglament (UE)
        2016/679 i de l'article 11 de la Llei Orgànica 3/2018.
      </p>

      <h2>8. Continguts generats per usuaris</h2>
      <p>
        8.1.{" "}
        <strong>
          A la data d'aquests Termes d'Ús, el Lloc Web no habilita comentaris, fòrums ni cap altra
          funcionalitat de publicació de continguts per part dels Usuaris.
        </strong>{" "}
        Les clàusules 8.2 a 8.5 resultaran d'aplicació únicament si Ulpiano habilita en el futur
        alguna d'aquestes funcionalitats.
      </p>
      <p>
        8.2. Si Ulpiano habilita comentaris, fòrums o una altra funcionalitat de publicació de
        continguts, l'Usuari serà l'únic responsable dels continguts, manifestacions, dades,
        enllaços, arxius o materials que publiqui (els «Continguts d'Usuari»). L'Usuari garanteix
        que disposa dels drets, autoritzacions i bases jurídiques necessaris per a la seva
        publicació.
      </p>
      <p>
        8.3. L'Usuari no podrà publicar Continguts d'Usuari que siguin il·lícits, falsos,
        difamatoris, amenaçadors, discriminatoris, obscens, infractors de drets de propietat
        intel·lectual o industrial, vulneradors de la confidencialitat, de dades personals o del
        secret professional, ni continguts publicitaris o comercials no autoritzats, spam, codi
        maliciós o enllaços a materials d'aquesta naturalesa.
      </p>
      <p>
        8.4. Ulpiano podrà moderar, bloquejar, retirar o comunicar a les autoritats els Continguts
        d'Usuari quan tingui coneixement efectiu de la seva il·licitud, infracció o incompatibilitat
        amb aquests Termes d'Ús, o quan resulti raonablement necessari per preservar la seguretat,
        els drets de tercers o la integritat del Lloc Web. Aquesta facultat no suposa una
        obligació general de supervisió prèvia.
      </p>
      <p>
        8.5. La publicació de Continguts d'Usuari no concedeix a l'Usuari cap dret sobre el Lloc
        Web ni obliga Ulpiano a conservar, publicar o respondre aquests continguts. L'Usuari
        mantindrà indemne Ulpiano davant de reclamacions de tercers originades pels seus
        Continguts d'Usuari, sens perjudici dels límits legalment aplicables.
      </p>

      <h2>9. Propietat intel·lectual i industrial; règim de cites</h2>
      <p>
        9.1. El Lloc Web, els seus textos, articles, Recursos, dissenys, marques, noms comercials,
        logotips, fotografies, gràfics, vídeos, programari, codi font, bases de dades i altres
        elements, així com els drets de propietat intel·lectual i industrial que hi recauen,
        pertanyen a Ulpiano o als seus llicenciadors. El seu accés no atribueix a l'Usuari cap
        dret d'explotació diferent dels expressament reconeguts en aquests Termes d'Ús.
      </p>
      <p>
        9.2. Sens perjudici dels límits i excepcions legalment aplicables, i en particular dels
        articles 17 i següents i 32 del text refós de la Llei de Propietat Intel·lectual, aprovat
        pel Reial Decret Legislatiu 1/1996, de 12 d'abril («LPI»), queda prohibida la reproducció,
        distribució, comunicació pública, posada a disposició, transformació o explotació dels
        continguts del Lloc Web, totals o parcials, sense autorització prèvia i escrita d'Ulpiano.
      </p>
      <p>
        9.3. Ulpiano autoritza expressament els professionals i les organitzacions a citar
        fragments raonables d'articles publicats al Lloc Web, sempre que concorrin conjuntament les
        condicions següents: (a) que la cita s'integri en una obra, publicació o contingut propi i
        tingui finalitat de cita, anàlisi, comentari o judici crític; (b) que no alteri el sentit
        del contingut citat ni indueixi a error sobre el seu abast o vigència; (c) que s'atribueixi
        de manera clara a Ulpiano, amb identificació de l'autor quan hi consti; (d) que s'inclogui
        un enllaç visible, funcional i directe a l'article original a ulpiano.es; i (e) que no es
        reprodueixi l'article íntegre ni una part substancial que permeti prescindir de la consulta
        de la font original.
      </p>
      <p>
        9.4. L'autorització de cita de la clàusula 9.3 no permet la reproducció íntegra d'articles,
        l'agregació sistemàtica de continguts, la publicació en repositoris, l'adaptació,
        traducció, comercialització, explotació publicitària ni cap ús que excedeixi el que és
        necessari per a la cita atribuïda. Tampoc autoritza a emprar marques, logotips o elements
        gràfics d'Ulpiano sense consentiment previ i escrit.
      </p>
      <p>
        9.5. Les sol·licituds d'autorització per a usos no previstos en aquesta clàusula, així com
        les comunicacions relatives a una eventual infracció, s'han d'adreçar a{" "}
        <strong>hola@ulpiano.es</strong>.
      </p>

      <h2>10. Enllaços a tercers</h2>
      <p>
        10.1. El Lloc Web pot incloure enllaços a llocs, plataformes, documents o recursos de
        tercers. Aquests enllaços es proporcionen únicament per facilitar la navegació o ampliar
        informació i no impliquen aprovació, recomanació, associació, control o garantia per part
        d'Ulpiano respecte dels seus continguts, serveis, disponibilitat, seguretat o polítiques.
      </p>
      <p>
        10.2. En accedir a un lloc de tercer, l'Usuari quedarà subjecte a les condicions,
        polítiques de privacitat, cookies i altres normes d'aquest tercer. Ulpiano no respon dels
        danys o perjudicis derivats de l'accés, la navegació, la contractació o l'ús de llocs i
        serveis de tercers.
      </p>
      <p>
        10.3. No es permet establir enllaços al Lloc Web des de pàgines que continguin continguts
        il·lícits o que puguin danyar la reputació, imatge o drets d'Ulpiano, ni presentar el Lloc
        Web o els seus continguts de manera que suggereixi associació, patrocini o aprovació
        inexistents. Ulpiano podrà sol·licitar la retirada de qualsevol enllaç que incompleixi
        aquesta clàusula.
      </p>

      <h2>11. Disponibilitat, modificacions i exclusió de garanties</h2>
      <p>
        11.1. Ulpiano procurarà mantenir el Lloc Web i els Recursos disponibles i raonablement
        actualitzats, però no en garanteix la disponibilitat ininterrompuda, l'absència d'errors,
        la seguretat absoluta, la compatibilitat amb tots els dispositius o navegadors, ni
        l'exactitud, integritat, actualitat o idoneïtat de tots els continguts per a una finalitat
        particular.
      </p>
      <p>
        11.2. Ulpiano podrà, en qualsevol moment i sense obligació de preavís, modificar,
        actualitzar, retirar, restringir, suspendre o eliminar continguts, Recursos, funcionalitats
        o el mateix Lloc Web, totalment o parcialment, sense que això generi dret a compensació per
        a l'Usuari.
      </p>
      <p>
        11.3. L'Usuari haurà d'utilitzar mitjans adequats per protegir els seus sistemes i dades
        davant de programes nocius i riscos propis de les comunicacions electròniques. En la
        màxima mesura permesa per la normativa aplicable, Ulpiano no respondrà de danys derivats
        d'interrupcions, fallades de telecomunicacions, indisponibilitat, accessos no autoritzats,
        atacs, virus o elements tecnològicament perjudicials, quan no li siguin imputables.
      </p>
      <p>
        11.4. Cap previsió d'aquests Termes d'Ús exclou o limita la responsabilitat per dol, ni cap
        altra responsabilitat l'exclusió o limitació de la qual estigui prohibida per una norma
        imperativa.
      </p>

      <h2>12. Protecció de dades i cookies</h2>
      <p>
        12.1. El tractament de dades personals derivat de l'ús del Lloc Web i dels seus formularis
        es regula a la <Link href="/ca/legal/privacitat">Política de Privacitat</Link>. L'ús de
        tecnologies d'emmagatzematge i recuperació de dades a l'equip terminal de l'Usuari es
        regula a la <Link href="/ca/legal/cookies">Política de Cookies</Link>, de conformitat amb
        l'article 22.2 de la LSSI.
      </p>
      <p>
        12.2. Les polítiques indicades a la clàusula anterior formen part del marc informatiu del
        Lloc Web, però tenen objecte propi i no se substitueixen per aquests Termes d'Ús.
      </p>

      <h2>13. Comunicacions</h2>
      <p>
        13.1. Les comunicacions de l'Usuari relatives al Lloc Web o a aquests Termes d'Ús s'han de
        trametre a <strong>hola@ulpiano.es</strong>. Les relatives a protecció de dades, a{" "}
        <strong>privacidad@ulpiano.es</strong>.
      </p>
      <p>
        13.2. Ulpiano podrà efectuar comunicacions relatives a aquests Termes d'Ús mitjançant la
        seva publicació al Lloc Web o, quan escaigui i disposi de les dades necessàries, per
        mitjans electrònics.
      </p>

      <h2>14. Llei aplicable i jurisdicció</h2>
      <p>
        14.1. Aquests Termes d'Ús es regiran i s'interpretaran d'acord amb el Dret espanyol.
      </p>
      <p>
        14.2. Per a qualsevol controvèrsia derivada d'aquests Termes d'Ús o de l'ús del Lloc Web,
        les parts se sotmeten als jutjats i tribunals de Girona, llevat que una norma imperativa
        estableixi un altre fur aplicable. Si l'Usuari tingués la condició de consumidor o usuari,
        es respectaran els furs imperatius que li resultin aplicables.
      </p>

      <h2>15. Nul·litat parcial i no renúncia</h2>
      <p>
        15.1. La declaració de nul·litat, invalidesa o ineficàcia d'alguna disposició d'aquests
        Termes d'Ús no afectarà la validesa de les restants, que continuaran vigents en la màxima
        mesura permesa per la llei.
      </p>
      <p>
        15.2. La manca d'exercici o el retard d'Ulpiano en l'exercici d'un dret o facultat no
        constituirà renúncia a aquest.
      </p>
    </LegalPage>
  );
}
