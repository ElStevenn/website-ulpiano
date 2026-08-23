import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Legítima catalana: qué es, cuánto es y el error del tercio",
  description:
    "La legítima catalana es un cuarto del caudal computable (art. 451-5 CCCat). Cálculo, legitimarios y el error de aplicar el tercio.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/la-legitima-catalana",
    languages: {
      es: "https://ulpiano.es/recursos/blog/la-legitima-catalana",
      ca: "https://ulpiano.es/ca/recursos/blog/la-legitima-catalana",
      "x-default": "https://ulpiano.es/recursos/blog/la-legitima-catalana",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Legítima catalana: qué es, cuánto es y el error del tercio",
    description:
      "Una guía práctica sobre el artículo 451-5 CCCat, el cálculo de la legítima y los errores que llegan a cuadernos firmados.",
    url: "https://ulpiano.es/recursos/blog/la-legitima-catalana",
    locale: "es_ES",
    type: "article",
  },
};

export default function CatalanForcedHeirshipArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "La legítima catalana",
            href: "/recursos/blog/la-legitima-catalana",
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
                  12 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Legítima catalana: qué es, cuánto es y por qué el error del tercio
                aparece en cuadernos firmados
              </h1>
              <p className="body-lg mt-6 text-slate">
                La legítima catalana no es un tercio. Es la cuarta parte de una base
                de cálculo propia —el caudal computable— conforme al artículo 451-5
                del Codi Civil de Catalunya. Y sin embargo, el esquema del tercio del
                Código Civil estatal sigue apareciendo en cuadernos particionales
                firmados.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                No suele ser un error de conocimiento. Cualquier civilista que ejerce
                en Cataluña sabe que el Llibre IV redujo la legítima a la cuarta parte.
                Es un error de proceso: la plantilla de Word o el Excel de cálculo
                vienen de un expediente anterior —a veces de otro territorio, a veces
                de otra década— y nadie ha integrado en el flujo una validación que
                pregunte qué norma aplica y la cite en el resultado.
              </p>
              <p className="mt-5">
                Este artículo repasa qué es la legítima catalana, cómo se calcula,
                quiénes son legitimarios, en qué se diferencia del régimen estatal y
                dónde fallan los cuadernos en la práctica.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Qué es la legítima catalana: un derecho de crédito, no una cuota de bienes
              </h2>
              <p className="mt-5">
                En el Derecho civil catalán, la legítima es el valor patrimonial mínimo
                que la ley atribuye a determinados parientes del causante, aunque el
                testamento no les deje nada. Dos rasgos la definen frente al esquema
                estatal:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Es un derecho de crédito.</strong> El legitimario no es
                  cotitular de los bienes de la herencia. Tiene derecho a exigir un
                  valor, que el heredero puede pagar en dinero o en bienes de la propia
                  herencia. Esto simplifica la partición, pero obliga a liquidar el
                  crédito con precisión en el{" "}
                  <Link
                    href="/recursos/blog/quadern-particional-cataluna"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    cuaderno particional
                  </Link>
                  .
                </li>
                <li className="pl-2">
                  <strong>Es corta.</strong> La cuarta parte de la base de cálculo,
                  frente a los dos tercios —legítima estricta más mejora— que el Código
                  Civil estatal reserva a los descendientes. El testador catalán
                  dispone libremente de las tres cuartas partes de su patrimonio.
                </li>
              </ol>
              <p className="mt-5">
                Esa combinación —crédito y cuantía reducida— responde a la libertad de
                testar como regla, con un mínimo familiar como excepción. Trasplantar
                mecánicamente el esquema estatal no produce un error menor, sino un
                cuaderno con una distribución equivocada de base.
              </p>

              <h2 className="h2 mt-12 text-ink">Quiénes son legitimarios en Cataluña</h2>
              <p className="mt-5">
                El círculo de legitimarios del CCCat es más estrecho que el estatal:
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Los hijos del causante, por partes iguales.</strong> Los
                  descendientes de un hijo premuerto, desheredado o indigno ocupan su
                  lugar por estirpes.
                </li>
                <li>
                  <strong>En defecto de descendientes, los progenitores.</strong> Solo
                  los padres: los abuelos y demás ascendientes no son legitimarios en
                  Cataluña.
                </li>
                <li>
                  <strong>El cónyuge no es legitimario.</strong> El cónyuge viudo o el
                  conviviente en pareja estable tiene, en su caso, la cuarta viudal,
                  regulada en los artículos 452-1 y siguientes del CCCat.
                </li>
              </ul>
              <p className="mt-5">
                La cuarta viudal es un derecho de crédito de hasta la cuarta parte del
                activo hereditario líquido cuando el viudo carece de recursos
                suficientes para atender sus necesidades. Es una institución distinta,
                con presupuestos y cálculo propios, y no se acumula conceptualmente a
                una legítima del cónyuge que en Derecho catalán no existe.
              </p>
              <p className="mt-5">
                La preterición de un legitimario no invalida por sí sola el testamento:
                genera, como regla, una reclamación de valor. El cuaderno debe calcular
                y satisfacer la legítima de todos los legitimarios, estén o no
                mencionados en el testamento.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Cuánto es la legítima catalana: el 25% del caudal computable
              </h2>
              <p className="mt-5">
                La cuantía la fija el artículo 451-5 CCCat: la cuarta parte de la base
                de cálculo que resulta de aplicar las reglas de ese mismo artículo.
              </p>
              <p className="mt-5">
                <strong>La cuarta parte es global.</strong> El 25% es el importe
                conjunto de la legítima, que se divide entre los legitimarios que
                computan. Con tres hijos, la legítima individual de cada uno es 1/12
                del caudal computable, no 1/4. Atribuir un cuarto a cada hijo triplica
                la legítima y, con cuatro hijos, supera el propio caudal.
              </p>
              <p className="mt-5">
                <strong>La base no es el relicto sin más.</strong> El caudal computable
                se construye así:
              </p>
              <ol className="mt-5 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li>Valor de los bienes de la herencia en el momento de la muerte del causante.</li>
                <li>Menos deudas del causante, gastos de última enfermedad y de entierro o incineración.</li>
                <li>
                  Más el valor de los bienes donados por el causante en los diez años
                  anteriores a su muerte, conforme a las reglas del artículo 451-5.
                </li>
              </ol>
              <p className="mt-5">
                Las donaciones hechas a favor de legitimarios en concepto de legítima o
                imputables a ella se computan con independencia de la fecha. Las
                donaciones recibidas por un legitimario pueden imputarse a su propia
                legítima conforme al artículo 451-8 CCCat: quien ya recibió en vida
                puede tener su crédito total o parcialmente cubierto.
              </p>

              <h2 className="h2 mt-12 text-ink">Ejemplo de cálculo</h2>
              <p className="mt-5">
                Causante con vecindad civil catalana, fallecido en Girona. Tres hijos,
                sin cónyuge supérstite.
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg border border-mist">
                <table className="min-w-full border-collapse text-left text-[15px] leading-6">
                  <caption className="sr-only">
                    Cálculo del caudal computable y de la legítima catalana
                  </caption>
                  <thead className="bg-surface text-sm text-slate">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Componente</th>
                      <th scope="col" className="px-5 py-3 text-right font-semibold">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    <tr><td className="px-5 py-3">Vivienda</td><td className="px-5 py-3 text-right">450.000 €</td></tr>
                    <tr><td className="px-5 py-3">Cuenta corriente</td><td className="px-5 py-3 text-right">50.000 €</td></tr>
                    <tr><td className="px-5 py-3">Fondos de inversión</td><td className="px-5 py-3 text-right">120.000 €</td></tr>
                    <tr><td className="px-5 py-3">Criptoactivos, valorados a fecha de defunción</td><td className="px-5 py-3 text-right">30.000 €</td></tr>
                    <tr className="font-semibold"><td className="px-5 py-3">Bienes de la herencia</td><td className="px-5 py-3 text-right">650.000 €</td></tr>
                    <tr><td className="px-5 py-3">Hipoteca pendiente</td><td className="px-5 py-3 text-right">(120.000 €)</td></tr>
                    <tr><td className="px-5 py-3">Deudas y gastos de entierro</td><td className="px-5 py-3 text-right">(8.000 €)</td></tr>
                    <tr className="font-semibold"><td className="px-5 py-3">Relicto neto</td><td className="px-5 py-3 text-right">522.000 €</td></tr>
                    <tr><td className="px-5 py-3">Donación a un hijo, hace 2 años</td><td className="px-5 py-3 text-right">+ 50.000 €</td></tr>
                    <tr className="bg-green-bg font-semibold text-ink"><td className="px-5 py-3">Caudal computable, artículo 451-5</td><td className="px-5 py-3 text-right">572.000 €</td></tr>
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li><strong>Legítima global:</strong> 572.000 € × 1/4 = 143.000 €.</li>
                <li><strong>Legítima individual, tres hijos:</strong> 143.000 € / 3 = 47.666,67 € cada uno.</li>
                <li>El hijo que recibió la donación de 50.000 €, si es imputable a su legítima, tiene el crédito cubierto; los otros dos conservan el suyo frente al heredero.</li>
                <li><strong>Libre disposición efectiva del causante:</strong> las tres cuartas partes restantes.</li>
              </ul>
              <p className="mt-5">
                Compárese con el mismo caso resuelto con una plantilla estatal: la
                distribución cambia por completo, y con ella la liquidación del
                Impuesto sobre Sucesiones y Donaciones.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Diferencias operativas con el régimen estatal que afectan al cuaderno
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2"><strong>Naturaleza.</strong> En Cataluña el legitimario es acreedor; el heredero elige, como regla, pagar en dinero o en bienes. En el esquema estatal la legítima es, con matices, cotitularidad sobre la masa.</li>
                <li className="pl-2"><strong>Círculo de legitimarios.</strong> Cónyuge no legitimario, cuarta viudal aparte, y ascendientes limitados a los progenitores, frente al esquema estatal.</li>
                <li className="pl-2"><strong>Cómputo de donaciones.</strong> El CCCat fija la regla de los diez años del artículo 451-5; olvidar el donatum en la base descuadra la legítima y, en cascada, el cuaderno y los modelos fiscales.</li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                Dónde fallan los cuadernos en la práctica: cinco errores de proceso
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2"><strong>El tercio estatal en territorio CCCat.</strong> La plantilla dice un tercio en concepto de legítima estricta y nadie lo cuestiona porque el documento siempre ha funcionado.</li>
                <li className="pl-2"><strong>La cuarta parte por cabeza.</strong> Aplicar el 25% a cada legitimario infla la legítima global y reduce indebidamente la libre disposición.</li>
                <li className="pl-2"><strong>Donaciones computables omitidas.</strong> La base se calcula sobre el relicto sin preguntar por donaciones de los últimos diez años.</li>
                <li className="pl-2"><strong>Confundir legítima y cuarta viudal.</strong> Tratar al cónyuge como legitimario del 25%, o reconocerle legítima más cuarta viudal, duplica derechos que la ley no acumula.</li>
                <li className="pl-2"><strong>Valoración a fecha equivocada e incoherencia con el 660/650.</strong> Los bienes se valoran a la muerte del causante. El Modelo 660, los Modelos 650 y el cuaderno deben contar la misma historia.</li>
              </ol>

              <h2 className="h2 mt-12 text-ink">Qué se juega el profesional</h2>
              <p className="mt-5">
                Un error de legítima no es un defecto de estilo. Puede suponer pagos
                indebidos entre coherederos, una liquidación del ISD sobre bases
                incorrectas, la impugnación del cuaderno y una reclamación de
                responsabilidad profesional.
              </p>
              <p className="mt-5">
                La pretensión del legitimario dispone de un plazo de prescripción de
                diez años desde la muerte del causante conforme al artículo 451-27
                CCCat. Salvo disposición contraria del causante, la legítima devenga el
                interés legal desde la muerte conforme al artículo 451-14 CCCat.
              </p>
              <p className="mt-5">
                El cálculo, bien planteado, es objetivo: base computable, cuarta parte,
                división entre legitimarios e imputaciones. Todo lo que necesita es que
                los datos de entrada estén completos y que la regla aplicada sea la del
                territorio correcto.
              </p>

              <h2 className="h2 mt-12 text-ink">Cómo lo trata un flujo estructurado</h2>
              <p className="mt-5">
                Un proceso que evita estos errores captura el domicilio y la vecindad
                civil del causante al abrir el expediente, pregunta expresamente por
                donaciones de los últimos diez años, calcula la legítima con una regla
                cerrada que cita el artículo en el resultado y reconcilia el cuaderno
                con los Modelos 660 y 650 antes de la firma.
              </p>
              <p className="mt-5">
                En Ulpiano, ese cálculo lo ejecuta un motor determinista —no una
                plantilla ni un modelo de lenguaje— conforme al artículo 451-5 CCCat,
                con la norma citada en el resultado y cada paso trazable. El criterio
                jurídico sigue siendo del abogado; lo que desaparece es la plantilla
                heredada como fuente de la cuantía.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>La legítima catalana es la cuarta parte del caudal computable, global y a repartir entre quienes computan.</li>
                  <li>Los legitimarios son los hijos y, en su defecto, los progenitores. El cónyuge no es legitimario.</li>
                  <li>La base incluye las donaciones de los diez años anteriores; las donaciones al propio legitimario pueden imputarse a su legítima.</li>
                  <li>Los errores que llegan a cuadernos firmados son de proceso y se corrigen con una validación normativa integrada.</li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Para profesionales del sucesorio</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novedades y doctrina comentadas para profesionales
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Suscríbete a la newsletter quincenal de Ulpiano y descarga el
                  checklist del expediente sucesorio para abrir y cerrar expedientes sin
                  huecos.
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
                Este artículo es informativo y no sustituye el análisis de un caso
                concreto. La aplicación de la legítima exige revisar la documentación,
                las fechas y las circunstancias de cada sucesión.
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/recursos/blog/gestion-herencias-despacho"
        label="Gestión de herencias en el despacho"
        description="Del inventario a un expediente que se puede firmar."
      />
    </>
  );
}
