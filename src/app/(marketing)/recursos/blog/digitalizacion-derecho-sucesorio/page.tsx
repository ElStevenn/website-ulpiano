import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "La digitalización del derecho sucesorio: la ola que viene",
  description:
    "Por qué la gestión sucesoria en España sigue siendo manual y qué cambia cuando el expediente vive sobre el CCCat integrado.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/digitalizacion-derecho-sucesorio",
    languages: {
      es: "https://ulpiano.es/recursos/blog/digitalizacion-derecho-sucesorio",
      ca: "https://ulpiano.es/ca/recursos/blog/digitalitzacio-dret-successori",
      "x-default": "https://ulpiano.es/recursos/blog/digitalizacion-derecho-sucesorio",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "La digitalización del derecho sucesorio: la ola que viene",
    description:
      "3 billones de euros se transferirán en España en tres décadas. La infraestructura para gestionarlos tiene que construirse aquí, sobre el derecho civil catalán.",
    url: "https://ulpiano.es/recursos/blog/digitalizacion-derecho-sucesorio",
    locale: "es_ES",
    type: "article",
  },
};

export default function DigitalizacionDerechoSucesorioArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "La digitalización del derecho sucesorio",
            href: "/recursos/blog/digitalizacion-derecho-sucesorio",
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
                <span className="badge">Tecnología</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  7 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                La digitalización del derecho sucesorio: la ola que viene
              </h1>
              <p className="body-lg mt-6 text-slate">
                En Estados Unidos, la gestión de herencias ocurre dentro de
                plataformas especializadas. En España, ocurre en Excel, Word y
                correo. La diferencia no es la tecnología: es que la ley no es
                la misma.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <h2 className="h2 mt-0 text-ink">
                Por qué en España la gestión sucesoria sigue siendo manual
              </h2>
              <p className="mt-5">
                En Estados Unidos, desde hace años los despachos de abogados,
                las firmas de gestión patrimonial y las aseguradoras operan con
                plataformas especializadas en planificación y tramitación de
                herencias. La categoría existe, se llama{" "}
                <em>estate-tech</em>, tiene inversión de capital de riesgo
                detrás y crece cada año. El profesional lleva el expediente
                dentro de un sistema. El cliente ve un portal. Los documentos se
                generan automáticamente. La liquidación fiscal es trazable.
              </p>
              <p className="mt-5">
                En España, ese mismo proceso ocurre en Excel, Word y correo.
              </p>
              <p className="mt-5">
                No es porque los abogados españoles sean menos competentes. No
                es porque la tecnología sea diferente. Es porque aquello que
                funciona en Nueva York no funciona en Barcelona si la ley no es
                la misma.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El muro: derecho civil local vs. infraestructura importada
              </h2>
              <p className="mt-5">
                La razón profunda de esa brecha es clara: el derecho sucesorio
                depende de la ley civil de cada territorio. En EEUU, un software
                &ldquo;nacional&rdquo; aplica el derecho de Nueva York o el de
                California dentro de un marco común que lo hace escalable. En
                España conviven el Código Civil estatal y los derechos civiles
                propios. Y el Codi Civil de Catalunya no es una variante del
                estatal: legítima reducida a la{" "}
                <Link
                  href="/recursos/blog/la-legitima-catalana"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  cuarta parte
                </Link>
                , pactos sucesorios (heredamientos), figuras como la cuarta
                viudal y la{" "}
                <Link
                  href="/recursos/blog/quarta-falcidia"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  quarta falcídia
                </Link>
                , institución de heredero obligatoria (con la salvedad histórica
                del derecho de Tortosa, art. 423-1 CCCat).
              </p>
              <p className="mt-5">
                Eso significa que una herramienta genérica construida en Nueva
                York, o en Silicon Valley, o en Londres, no puede funcionar aquí
                sin una reescritura completa del motor normativo.
              </p>
              <p className="mt-5">
                La ironía: precisamente porque el derecho foral catalán existe,
                el problema es más acuciante. No pueden copiar la solución de
                EEUU. Tienen que construirla. Y nadie lo estaba haciendo.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La ola que viene: 3 billones de euros en 30 años
              </h2>
              <p className="mt-5">Los números del mercado son rotundos:</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                <li>
                  <strong>~3 billones de euros</strong> se transferirán en
                  España en las próximas tres décadas. Es patrimonio heredado,
                  no comprado: la ola de transferencia generacional más grande
                  que hemos visto.
                </li>
                <li>
                  <strong>~433.000 defunciones al año</strong> en España según
                  el INE (2024). Cada defunción genera, potencialmente, un
                  expediente sucesorio.
                </li>
                <li>
                  <strong>403.854 viviendas heredadas</strong> en 2024, según el
                  Consejo General del Notariado. Las adjudicaciones de herencia
                  representan el 19,4% de los actos notariales totales.
                </li>
                <li>
                  <strong>~15% de renuncias</strong> a herencias. De esos
                  403.000 actos, el 15% sale del sistema porque alguien dice que
                  no: coordinación fallida, complejidad, fricción.
                </li>
              </ul>
              <p className="mt-5">
                Eso es volumen. Eso es oportunidad de infraestructura.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El contraste visible: 3 días vs. 20 minutos
              </h2>
              <p className="mt-5">
                En un despacho tradicional, preparar un{" "}
                <Link
                  href="/recursos/blog/quadern-particional-cataluna"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  cuaderno particional
                </Link>{" "}
                —el documento central que distribuye la herencia entre los
                herederos y sirve de base para la liquidación fiscal— puede
                consumir días de trabajo técnico repartidos entre lectura de
                documentos, cálculo de cuotas, aplicación de reducciones,
                comparación de escenarios y redacción. Trabajo correcto, pero en
                buena parte mecánico.
              </p>
              <p className="mt-5">
                Con infraestructura: si el patrimonio está inventariado, los
                herederos clasificados y el motor normativo carga el CCCat, el
                borrador del cuaderno que costaba tres días sale en veinte
                minutos. No porque sea menos riguroso —es exactamente igual de
                riguroso—, sino porque lo que era cálculo manual ahora es
                cálculo automático. Esas horas de trabajo técnico no facturable
                vuelven al despacho: capacidad para más expedientes sin más
                gente, o para más criterio en los expedientes que ya tienes.
              </p>
              <p className="mt-5">
                Pero hay algo más valioso que el tiempo: la precisión.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La precisión como diferenciador
              </h2>
              <p className="mt-5">
                Cuando calculas la legítima, o aplicas la bonificación por
                empresa familiar al{" "}
                <Link
                  href="/modelos/modelo-650"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Modelo 650
                </Link>
                , o confirmas que una reducción es aplicable, cada uno de esos
                pasos tiene un marco normativo muy específico. Un error no solo
                cuesta tiempo al profesional que tiene que revisar. Cuesta al
                cliente que puede recibir un aviso de Hacienda meses después del
                cierre del expediente. Cuesta al despacho que tiene que explicar
                por qué el cálculo fue incorrecto.
              </p>
              <p className="mt-5">
                Un sistema donde cada decisión se toma dentro de un marco
                normativo verificable —donde la norma es visible, donde cada
                cálculo es auditable, donde Hacienda puede entender exactamente
                por qué se calculó de esa forma— es un sistema que reduce
                riesgo. Y ese riesgo reducido es dinero.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Por qué la infraestructura no va a venir de fuera
              </h2>
              <p className="mt-5">
                Un proveedor anglosajón no puede prestar servicio aquí sin
                construir la pieza foral desde cero: la norma no es una capa de
                interfaz que se traduce, es el fundamento del sistema. El motor
                que calcula una legítima catalana o liquida la Llei 19/2010 no
                se adapta desde un producto pensado para Delaware; se construye
                desde el articulado.
              </p>
              <p className="mt-5">
                Por eso la infraestructura tiene que ser construida aquí. No
                porque sea complicado, sino porque es territorial y específica.
                Eso suena como una barrera. Lo es. Pero también es una
                oportunidad de mercado para quien la construya primero.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Qué cambia cuando trabajas sobre infraestructura
              </h2>
              <p className="mt-5">
                El profesional que trabaja sobre un sistema de gestión sucesoria
                estructurado —en lugar de sobre Excel + Word + email— gana
                cuatro cosas:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Trazabilidad.</strong> Cada paso del expediente queda
                  registrado: de dónde viene cada dato, qué norma se aplicó,
                  cuándo se tomó cada decisión. Es útil para revisiones de
                  calidad, pero sobre todo cuando la Administración pregunta por
                  qué se calculó algo de esa forma: en pantalla se ve la norma,
                  la base y el cálculo.
                </li>
                <li className="pl-2">
                  <strong>Estandarización.</strong> En lugar de que cada
                  expediente sea un caso único con su propia estructura de
                  carpetas y su propio flujo, todos siguen el mismo. Eso no lo
                  hace monótono: lo hace comparable. Si de media pasan 20 días en
                  un expediente simple y uno tarda 50, ves dónde hay fricción.
                </li>
                <li className="pl-2">
                  <strong>Datos por expediente.</strong> En lugar de horas
                  dispersas en registros sin relación con expedientes, tienes
                  visibilidad de tiempo de preparación, número de escenarios,
                  documentos por bien y cambios normativos aplicados. Eso
                  alimenta métricas de operación.
                </li>
                <li className="pl-2">
                  <strong>Servicio visible para el cliente.</strong> El heredero
                  entiende qué está pasando. No porque la complejidad
                  desaparezca —las herencias siempre son complejas—, sino porque
                  está estructurada. La caja negra se convierte en un panel.
                </li>
              </ol>
              <p className="mt-5">
                Lo que <strong>no</strong> cambia: tu criterio jurídico. La
                capacidad de interpretar el derecho foral. La responsabilidad
                frente al cliente. Eso sigue siendo tuyo.
              </p>

              <h2 className="h2 mt-12 text-ink">Dónde empieza: Cataluña</h2>
              <p className="mt-5">
                El derecho sucesorio se digitaliza por geografía, no por saltos,
                porque cada geografía tiene su código. Por eso la
                infraestructura comienza en Cataluña: es donde el derecho civil
                es más diferenciado, donde la complejidad normativa —legítima
                reducida, pactos sucesorios, cuarta viudal— es máxima, y donde el
                diferencial entre hacer un cálculo manual y uno automático es más
                visible.
              </p>
              <p className="mt-5">
                Cuando tienes un motor que sabe CCCat, que implementa la Llei
                19/2010 sin excepciones y que genera el{" "}
                <Link
                  href="/modelos/modelo-660"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Modelo 660
                </Link>{" "}
                y el 650 desde datos estructurados, ese motor no se replica en
                una semana. Pero una vez existe, es la pieza central de todo lo
                que viene después.
              </p>

              <h2 className="h2 mt-12 text-ink">El rol de la plataforma</h2>
              <p className="mt-5">
                Ulpiano es exactamente eso: la infraestructura de digitalización
                del derecho sucesorio para el mercado catalán primero. Motor
                normativo que sabe CCCat. Estructura de expediente que acompaña
                al profesional paso a paso. Portal cliente que da visibilidad.
                Integración de datos de patrimonio, herederos, obligaciones
                tributarias y documentación notarial.
              </p>
              <p className="mt-5">
                No reemplaza al abogado. Lo mueve del territorio de recopilar
                papeles y calcular al territorio de interpretar derecho y
                asesorar. Eso es lo que debería estar haciendo.
              </p>
              <p className="mt-5">
                La ola de 3 billones de euros no necesita más abogados. Necesita
                abogados más rápidos, más precisos, menos ocupados en admin y más
                ocupados en criterio. Eso es lo que la infraestructura digital
                permite.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La gestión sucesoria sigue siendo manual en España no por
                    falta de tecnología, sino porque el derecho civil es
                    territorial y la infraestructura importada no lo contempla.
                  </li>
                  <li>
                    ~3 billones de euros se transferirán por herencia en tres
                    décadas: es un problema de infraestructura, no de talento.
                  </li>
                  <li>
                    Sobre un sistema con el CCCat integrado, el borrador del
                    cuaderno particional pasa de días a minutos, con la misma
                    rigurosidad y menos riesgo.
                  </li>
                  <li>
                    La infraestructura tiene que construirse aquí y empieza por
                    Cataluña, donde la complejidad normativa es máxima.
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
                  checklist del expediente sucesorio para estructurar tus
                  expedientes desde el primer día.
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
                Descubre cómo Ulpiano digitaliza el expediente sucesorio catalán
                de principio a fin en{" "}
                <Link
                  href="/soluciones"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  nuestras soluciones
                </Link>
                , o mira cómo encaja en el trabajo de los{" "}
                <Link
                  href="/pensado-para/despachos"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  despachos
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/soluciones/documentacion-sucesoria"
        label="Cuaderno particional y documentación"
        description="De los datos del expediente al documento que se firma."
      />
    </>
  );
}
