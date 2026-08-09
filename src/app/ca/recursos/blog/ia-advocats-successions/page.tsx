import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignupCa from "@/features/blog/NewsletterSignupCa";

export const metadata: Metadata = {
  title: "IA per a advocats de successions: fins on arriba i on no",
  description:
    "La IA accelera la lectura i la redacció, però calcular una legítima o liquidar l'ISD exigeix un motor determinista amb norma citada i rastre auditable. La frontera entre el decidible i l'auditable.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog/ia-advocats-successions",
    languages: {
      es: "https://ulpiano.es/recursos/blog/ia-abogados-sucesiones",
      ca: "https://ulpiano.es/ca/recursos/blog/ia-advocats-successions",
    },
  },
  openGraph: {
    title: "IA per a advocats de successions: fins on arriba i on no",
    description:
      "IA on aporta —lectura, redacció, cerca—. Motor determinista on és crític —càlcul, norma, traçabilitat—. Com es veu una arquitectura defensable davant d'Hisenda.",
    url: "https://ulpiano.es/ca/recursos/blog/ia-advocats-successions",
    locale: "ca_ES",
    type: "article",
  },
};

export default function IaAdvocatsSuccessionsArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
          {
            name: "IA per a advocats de successions",
            href: "/ca/recursos/blog/ia-advocats-successions",
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
                <span className="badge">IA</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  9 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                IA per a advocats de successions: la pregunta que gairebé tothom
                fa malament
              </h1>
              <p className="body-lg mt-6 text-slate">
                &ldquo;Puc fer servir IA al meu despatx?&rdquo; no és la pregunta.
                La pregunta real és quines decisions pots delegar a un model
                probabilístic i quines has de prendre amb motor determinista,
                norma citada i rastre auditable.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Per Miquel Fàbrega · Advocat (ICAGI 3861) i fundador d’Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Un model de llenguatge és extraordinari per llegir documents:
                accepta PDF caòtic, extreu dades estructurades, enllaça cada dada
                a la línia de l’original. És excel·lent per redactar esborranys
                —quaderns particionals, escrits de l’expedient, comunicacions al
                client—. Pot cercar articles del CCCat i citar-los. Detecta
                incoherències entre peces de l’expedient.
              </p>
              <p className="mt-5">
                Però un model no hauria de calcular una legítima. No hauria de
                liquidar un ISD. No hauria de generar els models tributaris 650,
                651, 652, 653 ni 660. La diferència no és semàntica: és la
                diferència entre &ldquo;una tasca complicada però
                terceritzable&rdquo; i &ldquo;una responsabilitat professional que
                no es pot terceritzar a un algorisme probabilístic&rdquo;.
              </p>
              <p className="mt-5">
                Aquest article va sobre aquesta frontera. Sobre per què un advocat
                modern pot portar un despatx amb IA —i per què ho ha de fer amb
                cura—.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El volum documental és el primer coll d’ampolla real
              </h2>
              <p className="mt-5">
                Una successió mitjana implica testament (o diversos, en cas de
                revocacions parcials), certificat de defunció, últimes voluntats,
                notes simples del Registre de la Propietat (una per immoble),
                certificats bancaris de tots els comptes, extractes de brokers si
                hi ha cartera de valors, documentació de participacions en
                empreses familiars, pòlisses d’assegurances i possibles donacions
                anteriors que afectin el càlcul de la legítima.
              </p>
              <p className="mt-5">
                Això són fàcilment 20-40 documents. Alguns en mal estat
                d’escaneig. Alguns amb taules complexes. Tots amb estructures
                diferents segons qui els va emetre. A mà: hores de lectura pura,
                extracció i consolidació en un full de càlcul, amb risc d’error
                —un número omès, una propietat duplicada per un error de
                tipografia, un immoble que apareix en dos documents amb codis
                cadastrals diferents—.
              </p>
              <p className="mt-5">
                Un model de llenguatge ben orientat amb documentació successòria
                espanyola llegeix els 40 documents en paral·lel en segons, extreu
                cada dada (beneficiari, NIF, bé, valor, càrrega) amb nivell de
                confiança per camp, enllaça cada dada a la línia exacta del PDF
                original, ho estructura en una taula normalitzada i et assenyala
                les inconsistències (per exemple, un compte esmentat en dos
                documents amb saldos diferents).
              </p>
              <p className="mt-5">
                Això val hores. I és qualitativament diferent d’Excel + ulls: és
                traçable. Si un client pregunta d’on surt el saldo del compte del
                Banc X, assenyales la línia del PDF. Si ho pregunta un fiscal o un
                jutge, tens evidència. La lectura documental no substitueix el
                criteri de l’advocat: l’amplifica. Tu continues llegint el
                testament, interpretant clàusules, validant les dades i decidint
                si una clàusula és vàlida o problemàtica. La IA simplement no
                deixa dades pel camí.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La redacció assistida és legítima perquè verifiques abans de
                signar
              </h2>
              <p className="mt-5">
                Un quadern particional té estructura: inventari de béns, càlcul de
                legítimes, partició, liquidació de l’ISD, distribució final. Cada
                secció té lògica. Un model pot produir un esborrany en minuts a
                partir de les dades estructurades de l’expedient i generar un
                document coherent que un client pot llegir.
              </p>
              <p className="mt-5">
                Però aquest esborrany és exactament això: un esborrany. Tu el
                llegeixes línia a línia, verifiques cada xifra contra l’expedient,
                corregeixes incoherències, afegeixes matisos legals que no es
                deriven automàticament de les dades i signes el document final. La
                IA fa el que fa millor —accelerar la part mecànica—; tu fas el que
                fas millor —criteri jurídic, interpretació, responsabilitat—.
              </p>
              <p className="mt-5">
                L’important és ser explícit sobre on acaba l’automàtic i comença el
                verificat. Un sistema ben dissenyat et mostra l’esborrany generat
                (en gris, draft), la teva edició aprovada (en verd, final) i el log
                de canvis entre tots dos. Així un jutge, un fiscal o un client
                poden veure: el sistema va proposar X, l’advocat va canviar a Y,
                per aquestes raons. La redacció assistida no reemplaça la teva
                responsabilitat: la documenta.
              </p>

              <h2 className="h2 mt-12 text-ink">
                On la IA no ha de prendre decisions —i per què—
              </h2>
              <h3 className="mt-10 text-xl font-semibold text-ink">
                La legítima segons el CCCat: article 451-5
              </h3>
              <p className="mt-5">
                La legítima catalana és la quarta part d’una base de càlcul pròpia
                (art. 451-5 CCCat): el valor dels béns a la mort del causant, menys
                deutes i despeses, més determinades donacions. A Catalunya és, a
                més, un dret de crèdit i no una quota de béns (art. 451-1 CCCat),
                cosa que la converteix precisament en una xifra calculable. Aquesta
                quarta part és global i es reparteix entre els legitimaris: no és
                un quart per cap.
              </p>
              <p className="mt-5">Sona simple. No ho és. Inclou preguntes com ara:</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                <li>Quins deutes i despeses són deduïbles per construir la base?</li>
                <li>
                  Com es valora cada bé a data de defunció? (Valor de mercat,
                  taxació pericial: depèn del tipus de bé.)
                </li>
                <li>
                  Quines donacions dels deu anys anteriors s’afegeixen a la base i
                  quines s’imputen a la legítima del mateix donatari? (arts. 451-5
                  i 451-8 CCCat)
                </li>
                <li>
                  Concorre la quarta viudal del cònjuge o convivent (art. 452-1
                  CCCat), que és una institució diferent de la legítima?
                </li>
                <li>Hi ha prellegats a compte de legítima que alteren el repartiment?</li>
              </ul>
              <p className="mt-5">
                Cadascuna d’aquestes decisions té conseqüències fiscals, civils i
                de responsabilitat professional. Un model probabilístic no pot
                decidir això. Pot llegir-ho d’Aranzadi o de jurisprudència, pot
                oferir-te la redacció de l’article, però no ha de calcular la
                legítima com si fos una caixa negra que produeix un número.
              </p>
              <p className="mt-5">
                Per què? Perquè si aquest número és incorrecte, la cadena de
                responsabilitat ha de ser clara. Hisenda, un jutge o un client no
                acceptaran &ldquo;ho va dir el model&rdquo; com a explicació. Per
                això un motor determinista és obligatori: regles explícites
                (legítima global = base computable × 0,25; individual = global
                dividida entre els legitimaris que computen), norma citada a cada
                línia (art. 451-5 CCCat), traçabilitat de cada càlcul intermedi i
                reproductibilitat —mateix expedient, mateix resultat sempre—. Això
                és el que diferencia un sistema que puguis defensar davant
                d’Hisenda d’un que esperes que ningú qüestioni.
              </p>

              <h3 className="mt-10 text-xl font-semibold text-ink">
                L’ISD (Llei 19/2010 de l’Impost sobre Successions i Donacions)
              </h3>
              <p className="mt-5">
                Mateix argument, amplificat. L’embut de liquidació té capes: base
                imposable, reduccions (parentiu, discapacitat, persona més gran de
                75 anys, habitatge habitual, empresa familiar), base liquidable,
                tarifa progressiva per grup de parentiu, coeficient multiplicador
                segons patrimoni previ de l’hereu, bonificació autonòmica (a
                Catalunya, taules progressives per als grups I i II i del 99% per a
                cònjuge i parella estable) i recàrrec per extemporaneïtat.
              </p>
              <p className="mt-5">
                Cada paràmetre té norma. Cada norma té excepcions. Cada excepció
                pot canviar d’un any a l’altre. Un model no ha de fer això: un
                motor determinista auditable, amb la Llei citada a cada pas, sí. És
                l’única manera d’assegurar que, si un client discuteix la
                liquidació davant l’ATC o un tribunal, puguis assenyalar cada
                decisió, cada norma i cada pas.
              </p>

              <h3 className="mt-10 text-xl font-semibold text-ink">
                Els models tributaris: 650, 651, 652, 653, 660
              </h3>
              <p className="mt-5">
                Són documents legals que es presenten a Hisenda i són
                responsabilitat del professional que els signa. Un generador de
                documents no els hauria de produir, no perquè no sigui tècnicament
                possible, sinó perquè un canvi normatiu a mig exercici, una
                inconsistència a l’expedient o una xifra sense base traçable
                converteixen &ldquo;el sistema ho va generar&rdquo; en una resposta
                insuficient davant d’Hisenda. Un motor determinista dedicat a això,
                amb cada camp validat contra la norma, és l’únic disseny
                defensable.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Com es veu una arquitectura correcta: la frontera explícita
              </h2>
              <p className="mt-5">
                Imagina un despatx que fa servir una plataforma de successions ben
                dissenyada. El flux es veuria així:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Fase 1 · Lectura (IA).</strong> Puges els documents. La
                  IA llegeix tot, extreu dades i les estructura en taula, cadascuna
                  amb nivell de confiança i enllaç al PDF. Marca en vermell allò
                  inconsistent. El teu rol: revisar, corregir, resoldre. Output:
                  taula completa verificada per tu.
                </li>
                <li className="pl-2">
                  <strong>Fase 2 · Càlcul de legítima (motor determinista).</strong>{" "}
                  Introdueixes els paràmetres verificats (cabal net, legitimaris,
                  donacions en vida). El motor calcula segons l’art. 451-5 CCCat,
                  amb cada línia auditable i la norma citada. El teu rol: validar
                  que els paràmetres són correctes.
                </li>
                <li className="pl-2">
                  <strong>Fase 3 · Liquidació ISD (motor determinista).</strong>{" "}
                  Hereu per hereu, el motor executa l’embut (base imposable →
                  reduccions → base liquidable → tarifa → coeficient → bonificació
                  → quota) amb la Llei 19/2010 citada i alertes si un paràmetre surt
                  de rang. Output: liquidació per beneficiari i models
                  650/651/652/653 generats amb norma integrada.
                </li>
                <li className="pl-2">
                  <strong>Fase 4 · Redacció del quadern (IA + verificació).</strong>{" "}
                  El sistema genera l’esborrany integrant dades i càlculs, amb
                  explicació de norma. El teu rol: llegir, ajustar, afegir
                  interpretacions del cas i signar. Output: quadern final amb
                  traçabilitat de què és automàtic i què és decisió de l’advocat.
                </li>
              </ol>
              <p className="mt-5">
                Línia clara: IA on aporta (lectura, redacció, cerca); motor
                determinista on és crític (càlcul, norma, traçabilitat). Resultat:
                un sistema que pots defensar davant de qualsevol fiscal, jutge o
                client.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Què preguntar a qualsevol proveïdor legal-tech abans de signar
              </h2>
              <p className="mt-5">
                Abans de comprometre el despatx, aquests són els quatre punts no
                negociables:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Què calcula la IA i què calcula un motor
                  determinista?</strong> Si la legítima la calcula IA, pregunta com
                  es valida que inclou totes les excepcions del CCCat, qui audita si
                  falla i com ho documentes davant d’Hisenda. Si la calcula un
                  motor, demana veure la lògica de regles: ha de ser llegible, no
                  una caixa negra. Senyal vermell: &ldquo;No et preocupis, confia en
                  el sistema&rdquo;.
                </li>
                <li className="pl-2">
                  <strong>Cita la norma literalment?</strong> Apareix &ldquo;Llei
                  19/2010, art. XX&rdquo; per a cada xifra important al document o
                  al log d’auditoria? Senyal vermell: &ldquo;És obvi que apliquem la
                  llei&rdquo;. No és obvi: necessites poder demostrar-ho.
                </li>
                <li className="pl-2">
                  <strong>Deixa log auditable?</strong> Canvia un paràmetre (per
                  exemple, l’edat de l’hereu) i verifica si el log mostra el
                  recàlcul amb el resultat anterior, el nou i la norma. Senyal
                  vermell: &ldquo;No hi ha log&rdquo;. Aleshores no és auditable.
                </li>
                <li className="pl-2">
                  <strong>Mateix input dona mateix output?</strong> Desa un
                  expedient, espera un mes, torna’l a carregar. El càlcul és
                  idèntic? Senyal vermell: &ldquo;Depèn de l’entrenament del
                  model&rdquo;. Aleshores no és reproduïble. No signis.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                La frontera no és &ldquo;IA sí&rdquo; i &ldquo;IA no&rdquo;. És
                &ldquo;decidible&rdquo; davant d’&ldquo;auditable&rdquo;
              </h2>
              <p className="mt-5">
                Pots fer servir IA al teu despatx de successions, i molts dels
                millors despatxos aviat ho faran. Però la pregunta no és &ldquo;tinc
                IA?&rdquo;, sinó &ldquo;puc defensar cada decisió que la IA va
                ajudar a prendre?&rdquo;. Si un client pregunta d’on surt un número,
                has de poder mostrar on es va originar la dada (línia del PDF), quina
                norma es va aplicar (article citat), quin càlcul es va fer (pas a
                pas) i quan i qui ho va verificar (log). Això és responsabilitat
                professional.
              </p>
              <p className="mt-5">
                La IA que produeix un número sense poder mostrar per què, o que
                canvia el resultat si s’executa dues vegades, o que et demana que
                confiïs en ella, és la que has d’evitar —no per por a la tecnologia,
                sinó per rigor professional—.{" "}
                <strong>
                  Intel·ligència artificial on aporta. Motor determinista on és
                  crític.
                </strong>{" "}
                Aquesta frase ho captura tot: un despatx modern necessita totes
                dues.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesi</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La IA excel·leix en lectura documental, detecció
                    d’incoherències i redacció d’esborranys: accelera i fa traçable
                    la part mecànica.
                  </li>
                  <li>
                    El càlcul de la legítima, la liquidació de l’ISD i els models
                    650-660 exigeixen un motor determinista amb norma citada, log
                    auditable i reproductibilitat.
                  </li>
                  <li>
                    Una arquitectura correcta separa fases: IA en lectura i
                    redacció, motor determinista en càlcul i norma, amb l’advocat
                    validant a cada pas.
                  </li>
                  <li>
                    Abans de signar amb un proveïdor: què calcula cada part, si cita
                    la norma, si deixa log auditable i si el mateix input dona el
                    mateix output.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Per a professionals del successori</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novetats del successori català, explicades per a professionals
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Subscriu-te a la newsletter quinzenal d’Ulpiano: jurisprudència
                  comentada, canvis normatius i decisions de disseny de la
                  plataforma. I descarrega el checklist de l’expedient successori.
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
                Ulpiano aplica exactament aquesta frontera: IA on aporta, motor
                determinista on és crític. Descobreix-ho a{" "}
                <Link
                  href="/ca/ia"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Ulpiano IA
                </Link>{" "}
                i a les{" "}
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
    </>
  );
}
