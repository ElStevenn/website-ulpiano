import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Quadern particional: cómo redactarlo sin errores",
  description:
    "Guía paso a paso del cuaderno particional en Cataluña: inventario, caudal relicto, legítima (art. 451-5 CCCat), adjudicaciones y coherencia con los modelos 660 y 650.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/quadern-particional-cataluna",
    languages: {
      es: "https://ulpiano.es/recursos/blog/quadern-particional-cataluna",
      ca: "https://ulpiano.es/ca/recursos/blog/quadern-particional-catalunya",
      "x-default": "https://ulpiano.es/recursos/blog/quadern-particional-cataluna",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Quadern particional: cómo redactarlo sin errores",
    description:
      "Inventario, caudal relicto, legítima y adjudicaciones: cinco pasos para cerrar un cuaderno coherente con los modelos 660 y 650.",
    url: "https://ulpiano.es/recursos/blog/quadern-particional-cataluna",
    locale: "es_ES",
    type: "article",
  },
};

export default function QuadernParticionalArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "El quadern particional en Cataluña",
            href: "/recursos/blog/quadern-particional-cataluna",
          },
        ]}
      />
      <main>
        <article className="pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="container">
            <Link
              href="/recursos/blog"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green no-underline transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
            >
              <ArrowLeft aria-hidden="true" size={18} />
              Volver al blog
            </Link>

            <header className="mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">Cataluña</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  8 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Cómo redactar un quadern particional sin errores
              </h1>
              <p className="body-lg mt-6 text-slate">
                El cuaderno particional es el documento donde se ve si los
                números de una herencia están bien hechos. No es un trámite: es
                la partición. Fija qué recibe cada heredero y cada legatario, y
                es la base sobre la que se liquida el Impuesto sobre Sucesiones.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Si el cuaderno tiene errores, los modelos fiscales heredan el
                error —y lo que era un documento interno acaba siendo un
                requerimiento de la Agència Tributària de Catalunya o una
                discusión entre hermanos. Los errores, sin embargo, siguen un
                patrón. Un proceso disciplinado los evita.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Qué debe contener un cuaderno particional
              </h2>
              <p className="mt-5">Como mínimo, cinco bloques:</p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Relación de causante, herederos y legatarios</strong>,
                  con el título sucesorio (testamento, pacto sucesorio o
                  declaración de herederos).
                </li>
                <li className="pl-2">
                  <strong>Inventario del patrimonio</strong>, con la valoración
                  de cada bien a la fecha de la defunción.
                </li>
                <li className="pl-2">
                  <strong>Determinación del caudal relicto neto</strong> (activo
                  menos pasivo deducible).
                </li>
                <li className="pl-2">
                  <strong>Cálculo de la{" "}
                  <Link
                    href="/recursos/blog/la-legitima-catalana"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    legítima
                  </Link>
                  </strong>{" "}
                  conforme al art. 451-5 del Codi Civil de Catalunya.
                </li>
                <li className="pl-2">
                  <strong>Adjudicaciones:</strong> qué bien va a quién, con qué
                  valor, y las compensaciones en dinero si las hay.
                </li>
              </ol>
              <p className="mt-5">
                Cada bloque debe citar la norma que aplica. No es academicismo:
                es la garantía —para ti y para el cliente— de que la partición
                se ha hecho con la ley a la vista, no con la plantilla del
                expediente anterior.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Paso 1 — Inventario completo y valorado
              </h2>
              <p className="mt-5">
                Cada bien, identificado y valorado <strong>a la fecha de la
                defunción</strong>:
              </p>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Inmuebles:</strong> referencia catastral, nota simple
                  actualizada, cargas (la hipoteca pendiente se deducirá del
                  pasivo), coeficiente de participación si procede.
                </li>
                <li>
                  <strong>Cuentas y productos financieros:</strong> certificado
                  bancario de saldo a fecha de defunción. Cuenta con los bienes
                  del cónyuge si el régimen económico era de comunidad.
                </li>
                <li>
                  <strong>Empresa familiar y participaciones:</strong>{" "}
                  porcentaje y criterio de valoración justificado.
                </li>
                <li>
                  <strong>Activos digitales:</strong> criptomonedas y cuentas
                  en línea, valorados a la fecha de la defunción. Es donde más
                  inventarios cojean: o no aparecen, o aparecen con la
                  valoración del día en que alguien se acordó.
                </li>
                <li>
                  <strong>Otros bienes muebles relevantes.</strong>
                </li>
              </ul>
              <p className="mt-5">
                E igual de importante: qué <strong>no</strong> entra en la
                herencia (derechos que se extinguen con la muerte, bienes que el
                causante tenía en usufructo).
              </p>

              <h2 className="h2 mt-12 text-ink">
                Paso 2 — El caudal relicto neto
              </h2>
              <p className="mt-5">
                <strong>Caudal relicto neto = activo − pasivo deducible.</strong>
              </p>
              <p className="mt-5">
                Pasivo deducible: deudas acreditadas del causante, gastos de
                última enfermedad y de entierro o incineración. No se deduce el
                impuesto de sucesiones que se pagará después: la liquidación
                llega más tarde y sobre la base que ahora estás fijando.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Paso 3 — La legítima: una cuarta parte global, no por cabeza
              </h2>
              <p className="mt-5">
                En Cataluña, la legítima es <strong>la cuarta parte</strong> de
                una base de cálculo propia (art. 451-5 CCCat): el valor de los
                bienes a la muerte del causante, menos deudas y gastos,{" "}
                <strong>más</strong> las donaciones hechas por el causante en
                los diez años anteriores, según las reglas del mismo artículo.
              </p>
              <p className="mt-5">Dos precisiones que ahorran litigios:</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Es global.</strong> El 25% es la legítima de todos los
                  legitimarios juntos, a repartir entre ellos. Con tres hijos,
                  la legítima individual es 1/12 del caudal computable —no una
                  cuarta parte por cabeza. El error de la &ldquo;cuarta parte
                  por hijo&rdquo; infla la legítima y descuadra toda la
                  partición.
                </li>
                <li>
                  <strong>Es un derecho de crédito.</strong> El legitimario no
                  es copropietario de los bienes: tiene derecho a un valor, que
                  el heredero puede pagar en dinero o en bienes. Y si el
                  legitimario ya recibió donaciones imputables en vida (art.
                  451-8 CCCat), su crédito puede quedar total o parcialmente
                  cubierto.
                </li>
              </ul>
              <p className="mt-5">
                Recuerda también que el cónyuge viudo <strong>no es
                legitimario</strong> en derecho catalán: su institución es la{" "}
                <strong>cuarta viudal</strong> (art. 452-1 CCCat), con
                presupuestos propios. Mezclarlas es un clásico de las plantillas
                de origen estatal.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Paso 4 — Adjudicaciones coherentes con el caudal
              </h2>
              <p className="mt-5">
                Definidos el caudal y la legítima, se adjudican los bienes. Tres
                comprobaciones:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Los valores de adjudicación son los del
                  inventario</strong> (fecha de defunción), no valores
                  &ldquo;redondos&rdquo; ni antiguos. Para los inmuebles, a
                  efectos del ISD hay que tener presente el valor de referencia
                  del Catastro: si es superior al valor declarado, prevalece
                  como base imponible (Ley 11/2021 de medidas contra el fraude
                  fiscal).
                </li>
                <li className="pl-2">
                  <strong>Cada legitimario tiene su crédito cubierto</strong>,
                  en bienes o en dinero, y las compensaciones en metálico
                  quedan documentadas en el cuaderno.
                </li>
                <li className="pl-2">
                  <strong>Los legados se computan antes de repartir el
                  remanente</strong> —y si son tan grandes que dejan al heredero
                  por debajo de la cuarta parte del activo líquido, hay que
                  analizar la{" "}
                  <Link
                    href="/recursos/blog/quarta-falcidia"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    quarta falcídia
                  </Link>{" "}
                  (arts. 427-40 y siguientes CCCat) antes de pagarlos.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                Paso 5 — Validación cruzada con los modelos 660 y 650
              </h2>
              <p className="mt-5">
                El cuaderno y la liquidación fiscal deben contar la misma
                historia:
              </p>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>
                    <Link
                      href="/modelos/modelo-660"
                      className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                    >
                      Modelo 660
                    </Link>{" "}
                    (inventario):
                  </strong>{" "}
                  los bienes y valores declarados deben coincidir con el
                  inventario del cuaderno, uno por uno.
                </li>
                <li>
                  <strong>
                    <Link
                      href="/modelos/modelo-650"
                      className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                    >
                      Modelo 650
                    </Link>{" "}
                    (autoliquidación de cada heredero):
                  </strong>{" "}
                  la base imponible de cada uno debe corresponder con lo que
                  recibe según el cuaderno, y las reducciones aplicadas
                  (parentesco, vivienda habitual, empresa familiar — Llei
                  19/2010) deben tener su soporte en el mismo expediente.
                </li>
              </ul>
              <p className="mt-5">
                Una casa que vale 300.000 € en el cuaderno y 280.000 € en el 650
                es exactamente el tipo de incoherencia que provoca una
                comprobación. El plazo, además, no espera: seis meses desde la
                defunción para la presentación en periodo voluntario,
                prorrogables por seis meses más si la prórroga se solicita
                dentro de los primeros cinco meses del plazo.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Los errores que más se repiten
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Datos del expediente anterior en la
                  plantilla.</strong> El cuaderno nuevo arranca copiando el
                  viejo, y un párrafo o una cifra de la otra familia sobrevive
                  hasta la firma. Cada expediente debe empezar de cero.
                </li>
                <li className="pl-2">
                  <strong>Valoraciones incoherentes entre documentos.</strong>{" "}
                  Una cifra por bien, justificada, y la misma en todas partes:
                  cuaderno, 660 y 650.
                </li>
                <li className="pl-2">
                  <strong>Legítima mal computada.</strong> Por cabeza en lugar
                  de global, sin las donaciones de los diez años, o con el
                  cónyuge como legitimario.
                </li>
                <li className="pl-2">
                  <strong>Compensaciones en dinero no documentadas.</strong> Si
                  un heredero recibe más valor en bienes y lo compensa en
                  metálico, el cuaderno debe decirlo. Si no, los números no
                  cierran.
                </li>
                <li className="pl-2">
                  <strong>El 650 que no refleja la adjudicación real.</strong>{" "}
                  La base imponible de cada heredero es lo que recibe —bienes y
                  dinero—, no solo el bien principal.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                La comprobación final
              </h2>
              <p className="mt-5">
                Antes de cerrar: la suma de adjudicaciones debe ser igual al
                caudal partible; la suma de legítimas individuales debe ser
                exactamente la cuarta parte de la base computable; y cada cifra
                del 660 y del 650 debe trazarse hasta el inventario.
              </p>
              <p className="mt-5">
                Son comprobaciones mecánicas —y por eso son las que un motor
                determinista hace mejor que nadie. En Ulpiano, la legítima se
                calcula conforme al art. 451-5 CCCat con la norma citada en el
                resultado, las adjudicaciones se validan contra el caudal, y los
                modelos 660 y 650 se generan desde los mismos datos del
                cuaderno: una sola fuente, ningún descuadre. El criterio
                jurídico —qué se adjudica a quién, cómo se paga la legítima—
                sigue siendo tuyo.
              </p>
              <p className="mt-5">
                Como digo siempre a los colegas:{" "}
                <strong>Ulpiano no te sustituye; te quita la calculadora de
                encima.</strong>
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    El cuaderno fija la partición y alimenta la liquidación
                    fiscal: un error aquí se replica en el 660 y en el 650.
                  </li>
                  <li>
                    La legítima catalana es una cuarta parte global, no por
                    cabeza, y el cónyuge no es legitimario.
                  </li>
                  <li>
                    Los legados demasiado grandes exigen revisar la quarta
                    falcídia antes de pagarlos.
                  </li>
                  <li>
                    Una sola cifra por bien, en todas partes, valorada a fecha
                    de defunción.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Para profesionales del sucesorio</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novedades y doctrina comentadas para profesionales
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Suscríbete a la newsletter quincenal de Ulpiano y descarga el
                  checklist del expediente sucesorio, con una sección específica
                  de coherencia del cuaderno.
                </p>
                <NewsletterSignup />
                <Link
                  href="/recursos/checklist-expediente-sucesorio"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ulpiano-green underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green"
                >
                  <Download aria-hidden="true" size={18} />
                  Descargar el checklist del expediente sucesorio
                </Link>
              </aside>

              <p className="mt-8 rounded-lg border border-mist bg-surface p-6 text-[15px] leading-7 text-slate">
                Este artículo es informativo y no sustituye el análisis de un
                caso concreto. Si quieres ver cómo queda un cuaderno hecho así
                —con un caso anonimizado, sin compromiso—{" "}
                <Link
                  href="/contacto"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  escríbeme
                </Link>
                . Soy abogado en Girona, como muchos de vosotros, y prefiero
                enseñarlo que explicarlo.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
