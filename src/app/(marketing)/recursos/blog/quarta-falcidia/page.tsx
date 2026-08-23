import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Quarta falcídia: la trampa más cara del testamento",
  description:
    "Qué es la quarta falcídia (arts. 427-40 y ss. CCCat): cuándo salta, cómo se calcula y el checklist para detectarla antes de aceptar el encargo.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/quarta-falcidia",
    languages: {
      es: "https://ulpiano.es/recursos/blog/quarta-falcidia",
      ca: "https://ulpiano.es/ca/recursos/blog/quarta-falcidia",
      "x-default": "https://ulpiano.es/recursos/blog/quarta-falcidia",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Quarta falcídia: la trampa más cara del testamento",
    description:
      "Cuándo salta, cómo se calcula y qué debe revisar el profesional antes de pagar legados en una sucesión catalana.",
    url: "https://ulpiano.es/recursos/blog/quarta-falcidia",
    locale: "es_ES",
    type: "article",
  },
};

export default function QuartaFalcidiaArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "Quarta falcídia",
            href: "/recursos/blog/quarta-falcidia",
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
                <span className="badge">Derecho Civil</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  8 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Quarta falcídia: la trampa más cara del testamento
              </h1>
              <p className="body-lg mt-6 text-slate">
                Un expediente sucesorio puede parecer recto —testamento válido,
                heredero identificado, bienes catalogados— y, aun así, dejar al
                heredero por debajo de la cuarta parte del caudal líquido. Lo
                que nadie ha revisado es la quarta falcídia.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Muchos expedientes avanzan sin que el profesional la haya
                siquiera verificado. Cuando llega el cálculo final, la
                responsabilidad es del asesor. Esta figura —artículos 427-40 a
                427-45 del Codi Civil de Catalunya— es una de las más caras que
                puede saltar en un testamento catalán, y también una de las más
                fáciles de detectar si se mira a tiempo.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Qué es la quarta falcídia según el CCCat
              </h2>
              <p className="mt-5">
                La quarta falcídia es el derecho del heredero a retener como
                mínimo la cuarta parte del caudal hereditario líquido cuando el
                testador ha distribuido la herencia de forma que los{" "}
                <strong>legados</strong> específicos exceden las tres cuartas
                partes de ese mismo caudal.
              </p>
              <p className="mt-5">
                El derecho sucesorio catalán garantiza que todo heredero
                conserve una porción mínima del patrimonio hereditario frente a
                disposiciones testamentarias excesivas en legados. No es
                flexibilidad: es una garantía legal con nombre de norma.
              </p>
              <p className="mt-5">
                El testador puede distribuir libremente su patrimonio mediante
                legados. Esa libertad tiene un límite. Si el valor total de los
                legados supera el 75% del caudal hereditario neto, el heredero
                entraría en territorio de pérdida. La ley le da una salida:
                puede retener el 25% del activo hereditario líquido, reduciendo
                los legados en lo necesario.
              </p>
              <p className="mt-5">
                Dicho de otro modo: <strong>antes de pagar legados, el
                heredero puede asegurar su cuarta parte</strong>. Solo lo que
                queda por encima se distribuye en forma de legados.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Cuándo salta: tres condiciones simultáneas
              </h2>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Debe existir heredero.</strong> No hay quarta falcídia
                  sin heredero instituido o universal. Si el testamento solo
                  crea legatarios, la norma no entra en juego.
                </li>
                <li className="pl-2">
                  <strong>Los legados deben exceder las tres cuartas partes
                  del caudal hereditario líquido.</strong> Ese caudal es el
                  activo del causante menos los pasivos deducibles (deudas,
                  gastos funerarios, gastos de la última enfermedad) y menos el
                  importe de las{" "}
                  <Link
                    href="/recursos/blog/la-legitima-catalana"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    legítimas
                  </Link>
                  —incluida la del propio heredero cuando sea legitimario—
                  (art. 427-41 CCCat). Omitir la deducción de las legítimas
                  infla el caudal y hace retener al heredero más de lo que le
                  corresponde.
                </li>
                <li className="pl-2">
                  <strong>El testador no debe haberla excluido
                  expresamente.</strong> El CCCat permite derogar la quarta
                  falcídia. Si el testamento lo dice de forma explícita, la
                  norma no opera. Es raro, pero ocurre, y hay que verificarlo
                  en la lectura inicial.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                Cómo opera: reducción proporcional de los legados
              </h2>
              <p className="mt-5">
                Cuando las tres condiciones concurren, no hay negociación. El
                mecanismo es determinista:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  Identificar el caudal hereditario líquido: activos − pasivos
                  deducibles − legítimas.
                </li>
                <li className="pl-2">
                  Calcular la cuarta parte protegida: el 25% de ese caudal.
                </li>
                <li className="pl-2">
                  Verificar si los legados superan el 75%.
                </li>
                <li className="pl-2">
                  Si es así, reducir los legados proporcionalmente. No se
                  reducen los imputables a la legítima ni los que el testador
                  haya declarado preferentes, que solo ceden cuando ya se han
                  agotado los demás (art. 427-42 CCCat).
                </li>
              </ol>

              <h3 className="mt-10 text-xl font-semibold text-ink">
                Un ejemplo numérico
              </h3>
              <p className="mt-5">
                Causante con heredero único. Patrimonio y legados:
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg border border-mist">
                <table className="min-w-full border-collapse text-left text-[15px] leading-6">
                  <caption className="sr-only">
                    Cálculo de la quarta falcídia sobre un caudal de 175.000 euros
                  </caption>
                  <thead className="bg-surface text-sm text-slate">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">
                        Componente
                      </th>
                      <th scope="col" className="px-5 py-3 text-right font-semibold">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    <tr>
                      <td className="px-5 py-3">Casa en Barcelona</td>
                      <td className="px-5 py-3 text-right">250.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Cuenta bancaria</td>
                      <td className="px-5 py-3 text-right">80.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Deudas hipotecarias</td>
                      <td className="px-5 py-3 text-right">(150.000 €)</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Otros pasivos (funerales, gastos)</td>
                      <td className="px-5 py-3 text-right">(5.000 €)</td>
                    </tr>
                    <tr className="bg-green-bg font-semibold text-ink">
                      <td className="px-5 py-3">Caudal hereditario líquido</td>
                      <td className="px-5 py-3 text-right">175.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Legado al hermano</td>
                      <td className="px-5 py-3 text-right">80.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Legado a la amiga</td>
                      <td className="px-5 py-3 text-right">45.000 €</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Legado al sobrino</td>
                      <td className="px-5 py-3 text-right">25.000 €</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="px-5 py-3">Total legados</td>
                      <td className="px-5 py-3 text-right">150.000 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-ulpiano-green">
                <li>El 75% del caudal es 131.250 €. Los legados (150.000 €) lo superan en 18.750 €.</li>
                <li>Si el heredero hace valer la quarta falcídia, retiene 43.750 € (el 25% de 175.000 €).</li>
                <li>Los legados se reducen al 87,5% de cada uno: 70.000 €, 39.375 € y 21.875 €.</li>
                <li>Resultado: el heredero recibe 43.750 € y los legados suman 131.250 €. Total: 175.000 €.</li>
              </ul>

              <h2 className="h2 mt-12 text-ink">
                El inventario es condición para conservar el derecho
              </h2>
              <p className="mt-5">
                No basta que la norma sea aplicable. El heredero que desee
                beneficiarse de la quarta falcídia debe practicar inventario
                del caudal hereditario en tiempo y forma. Sin inventario, pierde
                el derecho: es el único mecanismo que prueba el caudal líquido
                de forma irrefutable ante terceros.
              </p>
              <p className="mt-5">
                El plazo es de seis meses desde que el heredero conoce o puede
                razonablemente conocer la delación (art. 426-20 CCCat, por
                remisión del art. 427-40), ante notario o por vía judicial. Un
                heredero que omita el inventario y pague legados sin verificar
                la quarta falcídia no podrá recuperar después lo entregado de
                más.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Checklist al abrir el expediente
              </h2>
              <p className="mt-5">
                La quarta falcídia no es una sorpresa si se verifica desde el
                primer día:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Lectura del testamento.</strong> ¿Hay heredero
                  instituido, no solo legatarios? ¿Hay legados específicos
                  significativos? ¿Existe cláusula de exclusión?
                </li>
                <li className="pl-2">
                  <strong>Inventario.</strong> Activos valorados a mercado,
                  pasivos identificados, caudal líquido = activos − pasivos
                  deducibles − legítimas.
                </li>
                <li className="pl-2">
                  <strong>Umbral.</strong> Comparar la suma de los legados con
                  el 75% del caudal. Si lo superan, calcular la reducción
                  proporcional.
                </li>
                <li className="pl-2">
                  <strong>Si aplica.</strong> Inventario formal, informar al
                  heredero de su derecho de retención y comunicar a los
                  legatarios las cantidades definitivas.
                </li>
                <li className="pl-2">
                  <strong>Documentación.</strong> Inventario en el expediente,
                  cálculo paso a paso con norma citada, y{" "}
                  <Link
                    href="/recursos/blog/quadern-particional-cataluna"
                    className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                  >
                    cuaderno particional
                  </Link>{" "}
                  que refleje la reducción.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                El riesgo de no verla venir
              </h2>
              <p className="mt-5">
                Un heredero que acepta la herencia y paga legados sin este
                cálculo puede acabar reclamando el exceso a los legatarios:
                litigio, fricción y reputación dañada. El coste de recuperar lo
                indebidamente entregado supera con creces el de una revisión
                disciplinada al abrir el expediente.
              </p>
              <p className="mt-5">
                En Cataluña esta norma no es oscura. Es articulado del CCCat.
                Conocerla es obligatorio. Ignorarla corre el riesgo de
                considerarse negligencia.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Dónde un motor determinista evita el error
              </h2>
              <p className="mt-5">
                El cálculo manual es propenso a fallos cuando se llevan varios
                expedientes a la vez: se olvida la proporción de legados o se
                comete un error aritmético en la reducción. Un sistema que
                codifica los artículos 427-40 a 427-45 y los aplica al cargar
                activos, pasivos y legados convierte ese riesgo en un cálculo
                trazable. La máquina verifica. El abogado revisa y decide.
              </p>
              <p className="mt-5">
                En Ulpiano, la quarta falcídia forma parte del motor normativo
                catalán. Cuando el expediente tiene heredero, legados y caudal,
                el sistema calcula si se alcanza el umbral, aplica la reducción
                si procede y genera el cuaderno ya rectificado. El profesional
                puede verificar el razonamiento paso a paso.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La quarta falcídia garantiza al heredero el 25% del caudal
                    hereditario líquido cuando los legados superan el 75%.
                  </li>
                  <li>
                    El caudal se calcula restando pasivos y legítimas. Omitir
                    las legítimas es el error más peligroso.
                  </li>
                  <li>
                    Sin inventario en tiempo y forma, el heredero pierde el
                    derecho.
                  </li>
                  <li>
                    Detectarla el primer día es un checklist; detectarla tarde
                    es un litigio.
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
                  para cláusulas críticas como la quarta falcídia.
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
                caso concreto. La quarta falcídia exige revisar el testamento,
                el inventario y las circunstancias de cada sucesión. Para
                situarla en el expediente, ver también la{" "}
                <Link
                  href="/recursos/blog/la-legitima-catalana"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  legítima catalana
                </Link>{" "}
                y cómo redactar el{" "}
                <Link
                  href="/recursos/blog/quadern-particional-cataluna"
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
    </>
  );
}
