import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Por qué existe Ulpiano: la historia detrás de la plataforma",
  description:
    "Miquel Fàbrega explica por qué nació Ulpiano: convertir el expediente sucesorio en algo visible, trazable y preciso, con IA donde aporta y motor determinista donde es crítico.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/por-que-existe-ulpiano",
    languages: {
      es: "https://ulpiano.es/recursos/blog/por-que-existe-ulpiano",
      ca: "https://ulpiano.es/ca/recursos/blog/per-que-existeix-ulpiano",
      "x-default": "https://ulpiano.es/recursos/blog/por-que-existe-ulpiano",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Por qué existe Ulpiano: la historia detrás de la plataforma",
    description:
      "Una cliente preguntó qué estaba pagando exactamente. Esa pregunta, y la decisión de no delegar cálculos críticos a una caja negra, es por qué existe Ulpiano.",
    url: "https://ulpiano.es/recursos/blog/por-que-existe-ulpiano",
    locale: "es_ES",
    type: "article",
  },
};

export default function PorQueExisteUlpianoArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "Por qué existe Ulpiano",
            href: "/recursos/blog/por-que-existe-ulpiano",
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
                <span className="badge">Visión</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  5 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">Por qué existe Ulpiano</h1>
              <p className="body-lg mt-6 text-slate">
                Hace tres años, una cliente me hizo una pregunta que cambió
                todo. Su herencia estaba al día en mis sistemas. En pantalla,
                veía caos.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Su madre acababa de fallecer. La herencia era mediana: un piso
                en Girona, una cuenta corriente, algo de mobiliario. Nada
                excepcional. Nos encargó que gestionáramos la sucesión. Yo
                estaba en mi despacho de Girona, llevando varios{" "}
                <Link
                  href="/recursos/blog/gestion-herencias-despacho"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  expedientes sucesorios
                </Link>{" "}
                en paralelo como se llevan: Excel para los cálculos, Word para
                el cuaderno particional, una carpeta compartida, el correo, y
                algunas notas sobre lo que el cliente había dicho por teléfono.
              </p>
              <p className="mt-5">
                Expediente correcto. Cálculos al día. Documentación completa.
                Plazos cumplidos.
              </p>
              <p className="mt-5">
                Un viernes, nos llamó. Pregunta directa: &ldquo;¿Y yo qué estoy
                pagando exactamente? ¿Dónde veo lo que estáis haciendo?&rdquo;
              </p>
              <p className="mt-5">
                Era una pregunta justa. Y no sabía responderla sin tener que
                montar todo el expediente en mi pantalla con Excel abierto, Word
                en otra ventana, buscando en el email qué decisión se había
                tomado sobre qué bien. El expediente estaba perfectamente al
                día en mis sistemas. Pero en pantalla, el cliente veía caos:
                versiones de documentos, números que cambiaban de un email a
                otro, la sensación de que su herencia vivía en una caja negra.
              </p>
              <p className="mt-5">
                Aquello me incomodó. La confianza en el despacho no se sustenta
                solo en resultados. Se sustenta en que el cliente entienda qué
                estás haciendo, por qué, y que lo vea. No es transparencia fría.
                Es que el profesional sea capaz de mostrar en una pantalla
                coherente dónde está el expediente, qué decisiones se han
                tomado, cuál es el paso siguiente. Y que eso sea verdad.
              </p>
              <p className="mt-5">
                Pasé las siguientes semanas reorganizando nuestro flujo. Consolidé
                todos los datos en una sola fuente de verdad. La cliente, cuando
                preguntó de nuevo, pudo ver en una pantalla el estado completo
                de su herencia. Vio cuándo se cargaba cada documento, qué datos
                estaban verificados, cuál era su cuota, por qué. El nivel de
                confianza cambió visiblemente. Pero fue trabajo manual. Sistema
                detrás, no había.
              </p>
              <p className="mt-5">
                Esa es la razón por la que existe Ulpiano.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Confianza mediante visibilidad
              </h2>
              <p className="mt-5">
                En el derecho —particularmente en herencias— existe una
                asimetría. El profesional conoce el laberinto: cómo se calcula
                la{" "}
                <Link
                  href="/recursos/blog/la-legitima-catalana"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  legítima según el Codi Civil de Catalunya
                </Link>
                , qué reducciones y bonificaciones del ISD corresponden a cada
                heredero, en qué orden se actúa notarialmente. El cliente no. Su
                madre acaba de morir. Su mundo administrativo se ha fragmentado
                en notarías, bancos, administración tributaria, registros. El
                único que debería tener visibilidad completa es el abogado o el
                asesor que contrata.
              </p>
              <p className="mt-5">
                Pero ese profesional, en la práctica, tiene la herencia en un
                Excel, un Word, un email, un WhatsApp. Si no conoce la
                estructura del expediente, ni siquiera él tiene visibilidad
                completa. Y si no la tiene, tampoco puede transmitirla.
              </p>
              <p className="mt-5">
                La confianza no es un regalo emocional. Surge cuando el cliente
                puede verificar que confía en la persona correcta, que sabe qué
                hace, y que está haciendo lo que dice que hace.
              </p>
              <p className="mt-5">
                Ulpiano nació para esto: para convertir el expediente sucesorio
                —el proceso más fragmentado, emocionalmente cargado y
                jurídicamente complejo del derecho civil— en algo estructurado,
                visible y preciso. Primero dentro del despacho. Luego para el
                cliente.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Dónde aporta la inteligencia artificial, y dónde no
              </h2>
              <p className="mt-5">
                Cuando empecé a estructurar Ulpiano, tuve que resolver una
                tensión que nadie explica bien en legal-tech.
              </p>
              <p className="mt-5">
                La inteligencia artificial es extraordinaria leyendo documentos.
                Puede extraer de un testamento escaneado los datos clave del
                heredero, los bienes, las condiciones. Es rápida y reduce
                errores de digitación. Pero la IA no es buena cuando tiene que
                producir un número que presentarás ante Hacienda, o ante un
                juez, o ante el cliente. Eso necesita una cadena de
                razonamiento que puedas auditar, que pueda citar la norma, que
                sea matemáticamente trazable. En derecho, &ldquo;casi
                correcto&rdquo; es incorrecto.
              </p>
              <p className="mt-5">
                Así que Ulpiano tiene una frontera explícita:{" "}
                <strong>
                  inteligencia artificial donde aporta, motor determinista donde
                  es crítico
                </strong>
                .
              </p>
              <p className="mt-5">
                La IA lee documentos, extrae datos, genera borradores. El motor
                determinista calcula legítimas según el Codi Civil de Catalunya,
                liquida el ISD con cada bonificación explícitamente citada,
                genera los modelos tributarios (660, 650, 651, 652, 653) con
                trazabilidad auditada. Cuando tú verificas, verificas contra
                norma y datos, no contra lo que una red neuronal creyó que
                significaba un párrafo del testamento.
              </p>
              <p className="mt-5">
                Esa frontera no es tecnológica. Es una decisión ética. Como
                abogado, sé que un error en un cálculo de legítima o en la
                aplicación de una reducción fiscal puede terminar en un
                litigio, en una multa de Hacienda, o en la desconfianza de un
                cliente. No puedo pedirle a un cliente que se fíe de una caja
                negra de aprendizaje automático. Puedo pedirle que confíe en un
                motor determinista que cita la norma en cada paso.
              </p>
              <p className="mt-5">
                Ese principio forma parte del ADN de Ulpiano. No es un
                posicionamiento de marketing. Es una decisión que viene de saber
                qué significa ser abogado. Lo desarrollamos con más detalle en{" "}
                <Link
                  href="/recursos/blog/ia-abogados-sucesiones"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  IA para abogados de sucesiones
                </Link>
                .
              </p>

              <h2 className="h2 mt-12 text-ink">De despacho a plataforma</h2>
              <p className="mt-5">
                Los primeros meses, Ulpiano fue solo nuestro. Un sistema interno
                del despacho Fàbrega Legal para gestionar nuestros expedientes.
                Funciona. Genera documentación coherente. El cliente entiende
                qué ve.
              </p>
              <p className="mt-5">
                Pero pasó algo que no anticipé: colegas de otros despachos
                empezaron a preguntar cómo gestionábamos los expedientes. No
                querían comprar el software; querían copiar el proceso. Era
                señal de que no era un problema nuestro: era un problema de la
                profesión.
              </p>
              <p className="mt-5">
                Girona es una ciudad de despachos boutique. Muchos abogados
                gestionan herencias como una parte importante de su cartera,
                pero sin especialización fiscal integrada, sin coordinación
                documental, sin alertas de plazos. Tienen lo mismo que yo
                tenía: una estructura rota.
              </p>
              <p className="mt-5">
                Decidí convertir Ulpiano en producto. No como un software para
                nosotros. Como una plataforma que otros{" "}
                <Link
                  href="/pensado-para/despachos"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  despachos
                </Link>
                , asesores y notarías pudieran usar para gestionar sus propios
                expedientes bajo su criterio profesional.
              </p>
              <p className="mt-5">
                El cambio conceptual fue importante. Ulpiano no es un software
                que toma decisiones. Ulpiano es la infraestructura donde ocurren
                las decisiones. Tú decides si incluir una donación antenupcial
                en el caudal sucesorio. Ulpiano te asegura que esa decisión
                queda registrada, trazable, que se refleja en todos los cálculos
                derivados, que la puedes mostrar al cliente. Es el sistema
                operativo del proceso. No es el proceso.
              </p>
              <p className="mt-5">
                Por eso el claim es lo que es:{" "}
                <strong>&ldquo;El sistema operativo de las
                herencias.&rdquo;</strong>{" "}
                No &ldquo;el software que gestiona herencias&rdquo;. Un sistema
                operativo es donde ocurren todas las operaciones, donde cada
                decisión se registra, donde la información es consistente. Es
                infraestructura.
              </p>

              <h2 className="h2 mt-12 text-ink">Lo que sigue</h2>
              <p className="mt-5">
                Hoy Ulpiano cubre Cataluña —derecho foral, norma autonómica
                fiscal, escenarios que solo aplican en el Codi Civil de
                Catalunya—. Es deliberado. Antes de ir a nivel nacional,
                prefiero construir bien una pieza foral que medio nacional.
              </p>
              <p className="mt-5">
                Cuando un cliente de un despacho de Málaga o de Madrid pueda usar
                Ulpiano con la norma de su comunidad autónoma, será porque
                habremos resuelto correctamente la norma de Cataluña. La
                precedencia es: rigor local antes de escala nacional.
              </p>
              <p className="mt-5">
                Eso significa que Ulpiano crecerá lentamente. Pero crecerá desde
                una base de precisión, no de marketing. El profesional jurídico
                no compra según el discurso. Compra según lo que funciona cuando
                lo prueba, lo que reduce su fricción real, y lo que puede
                mostrar a su cliente con confianza.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    Ulpiano nace de una pregunta de cliente: qué estoy pagando
                    y dónde lo veo.
                  </li>
                  <li>
                    La confianza en un expediente sucesorio se construye con
                    visibilidad, no solo con el resultado.
                  </li>
                  <li>
                    IA donde aporta —lectura, extracción, borradores—. Motor
                    determinista donde el número tiene que defenderse ante
                    Hacienda.
                  </li>
                  <li>
                    Cataluña primero: rigor local antes de escala nacional.
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
                  checklist del expediente sucesorio.
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
                Tienes aquí la historia. Si quieres ver cómo funciona en la
                práctica, o cómo Ulpiano se adapta a tu despacho, conoce más en{" "}
                <Link
                  href="/soluciones"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  nuestras soluciones
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <CrossLink
        href="/recursos/blog/gestion-herencias-despacho"
        label="Gestión de herencias en un despacho"
        description="Del Excel, el Word y el WhatsApp a un expediente con una sola fuente de verdad."
      />
    </>
  );
}
