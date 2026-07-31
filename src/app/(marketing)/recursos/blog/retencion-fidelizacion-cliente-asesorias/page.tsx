import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Retener al heredero: la métrica que tu asesoría no mira",
  description:
    "Por qué las asesorías pierden a las familias después del fallecimiento del cliente titular, y cómo retener a los herederos en el momento crítico.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/retencion-fidelizacion-cliente-asesorias",
    languages: {
      es: "https://ulpiano.es/recursos/blog/retencion-fidelizacion-cliente-asesorias",
    },
  },
  openGraph: {
    title: "Retener al heredero: la métrica que tu asesoría no mira",
    description:
      "El 61% de los herederos confía en su abogado y el 49% en su contable para lo sucesorio. Aun así, la mayoría de las asesorías pierden a la familia entera cuando muere el cliente histórico.",
    url: "https://ulpiano.es/recursos/blog/retencion-fidelizacion-cliente-asesorias",
    locale: "es_ES",
    type: "article",
  },
};

export default function RetencionClientesAsesoriasArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "Retener al heredero",
            href: "/recursos/blog/retencion-fidelizacion-cliente-asesorias",
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
                <span className="badge">Despachos</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  6 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Cuando muere el cliente histórico: la métrica de retención que
                tu asesoría no mira
              </h1>
              <p className="body-lg mt-6 text-slate">
                Lleva treinta años con la asesoría. Cuando muere, la familia
                debería quedarse con vosotros. Los datos dicen que quiere
                quedarse. La mayoría de las asesorías, aun así, la pierden.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Lleva treinta años con la asesoría. Ha visto crecer los
                impuestos, cambiar cuatro gobiernos, y a dos generaciones de
                asesores. Cuando muere, la familia debería quedarse con
                vosotros. Los datos dicen que quiere quedarse: el 61% de los
                herederos confía en su abogado para lo sucesorio y el 49% en
                su contable, frente a solo el 20% que confía en su asesor
                financiero o su banco (Funds Society).
              </p>
              <p className="mt-5">Pero no se queda.</p>
              <p className="mt-5">
                La realidad es más brutal: una vez el cliente histórico
                desaparece, la mayoría de las asesorías pierden la relación
                familiar entera. Y esa pérdida nunca aparece en vuestro
                dashboard de cartera. No la veis hasta que es demasiado tarde.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El problema no es la confianza. Es el servicio invisible.
              </h2>
              <p className="mt-5">
                Imaginemos dos asesorías del mismo perfil, en la misma ciudad,
                ante la misma situación: fallece un cliente titular de una
                cartera importante. En ambas comienza el proceso sucesorio. Es
                un escenario hipotético, pero cualquiera que lleve una cartera
                familiar reconocerá las dos mitades.
              </p>
              <p className="mt-5">
                <strong>En la primera asesoría,</strong> la comunicación fue
                correcta. &ldquo;Sentido pésame. Necesitamos documentos. Os
                enviamos un listado por email. Vais firmando y os vamos
                pidiendo lo que falta.&rdquo; El heredero, que vivía en otra
                ciudad, no entendía qué estaba pasando con la herencia, ni
                cuándo se resolvería, ni por qué la gestión se alargaba.
                Después de dos meses viendo papeles sin coherencia, decidió
                llevárselo todo a un despacho grande de Barcelona. Con la
                herencia se fue también la cartera de la familia.
              </p>
              <p className="mt-5">
                <strong>En la segunda asesoría,</strong> la aproximación fue
                distinta. Cuando falleció el cliente, abrieron un expediente
                dentro del mismo sistema de gestión que el heredero ya
                conocía. Le mandaron un acceso: &ldquo;Aquí ves todos los
                documentos, el estado de cada paso, cuándo necesitamos tu
                intervención y cuándo no.&rdquo; El heredero podía ver, en
                cualquier momento, dónde estaba el proceso. No era una caja
                negra. Seis meses después, cuando liquidaban el{" "}
                <Link
                  href="/modelos/modelo-660"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Modelo 660
                </Link>{" "}
                y el 650, la familia ya se sentía dentro de la operación.
                Mantuvieron al heredero como cliente. Ahora gestiona el
                patrimonio del causante y sigue con ellos.
              </p>
              <p className="mt-5">
                La diferencia no era el criterio técnico. Ambas asesorías
                sabían calcular la cuota de ISD y preparar la liquidación
                fiscal. La diferencia era <strong>la infraestructura de
                visibilidad</strong>. Una mostraba; la otra, no.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El dato que suena bien pero ocurre poco
              </h2>
              <p className="mt-5">
                Los datos de Funds Society dicen que el 61% de los herederos
                confía en su abogado y el 49% en su contable para lo
                sucesorio. Es un dato esperanzador. Pero mide la confianza{" "}
                <em>en la persona</em>, no la retención <em>del cliente</em>.
                Cuando el momento crítico llega —cuando tienes que liquidar
                200.000€ de patrimonio y no entiendes qué está pasando—, la
                confianza en la persona se evapora si la experiencia es
                opaca.
              </p>
              <p className="mt-5">
                El mismo estudio, citando datos de Accenture, recoge que
                aproximadamente 9 de cada 10 herederos no mantienen al asesor
                financiero del causante. No es un fenómeno específico de la
                sucesión. Es una tendencia del relevo generacional en
                asesoramiento: los herederos quieren empezar de cero. Pero en
                el caso de la asesoría fiscal y la gestoría, el patrón es
                distinto. El heredero sí quiere quedarse. Lo que no quiere es
                quedarse con incertidumbre.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Retención como métrica de cartera
              </h2>
              <p className="mt-5">
                Cuando hacéis la revisión anual de clientes, contabilizáis
                cartera, cuotas recurrentes, volumen de expedientes.
                Raramente incluís <strong>retención del heredero del cliente
                titular</strong> como métrica propia.
              </p>
              <p className="mt-5">Ese es el agujero.</p>
              <p className="mt-5">
                Un cliente de treinta años genera un lifetime value
                concentrado. Pero su verdadero valor no sale cuando el cliente
                está vivo. Sale cuando la familia decide si se queda o se va.
                Si pierde al heredero en el momento de la sucesión, no solo
                pierde a ese cliente. Pierde una cartera de tres décadas y la
                oportunidad de tener a la siguiente generación por otros
                treinta años.
              </p>
              <p className="mt-5">
                Haced el cálculo con vuestra propia cartera: contad cuántos
                titulares tienen más de setenta años, multiplicad por lo que
                factura cada familia al año en cuotas recurrentes —IRPF,
                sociedades, patrimonio, nóminas—, y preguntaos qué parte de
                esa facturación sobrevivirá al relevo generacional si los
                hijos no os conocen de nada el día que toca tramitar la
                herencia. Esa cifra no aparece en ningún informe anual. Y es,
                probablemente, el mayor riesgo silencioso de la firma.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La infraestructura de la retención
              </h2>
              <p className="mt-5">
                Retener al heredero no requiere más talento técnico. Requiere
                que en el momento crítico —cuando el cliente acaba de
                fallecer, cuando la familia tiene dudas, cuando la complejidad
                del expediente es máxima—, el heredero vea:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Un expediente con identidad clara.</strong> No es un
                  email suelto. Es un expediente abierto dentro de vuestro
                  sistema, con nombre del fallecido, fecha, estado.
                </li>
                <li className="pl-2">
                  <strong>Acceso visible a la documentación.</strong> El
                  heredero sabe qué papeles habéis recopilado, cuáles faltan,
                  y por qué. No es &ldquo;os falta el testamento&rdquo;; es
                  &ldquo;necesitamos el testamento para confirmar quiénes sois
                  herederos y calcular la cuota&rdquo; + fecha de la próxima
                  llamada.
                </li>
                <li className="pl-2">
                  <strong>Coordinación clara del proceso fiscal.</strong> El
                  heredero ve que estáis preparando el Modelo 660
                  (inventario), que necesitáis confirmación de valores, que
                  después viene el 650 (liquidación individual), y que todo
                  tiene plazo.
                </li>
                <li className="pl-2">
                  <strong>Liquidación trazable.</strong> Cuando llega el
                  momento de liquidar, el heredero no ve solo &ldquo;ISD:
                  4.500€&rdquo;. Ve el embudo completo: caudal relicto neto →
                  base imponible → reducciones aplicables → tarifa →
                  coeficiente multiplicador → bonificación (Llei 19/2010, con
                  las reducciones introducidas por la Llei 5/2020 para los
                  grupos I y II) → cuota a ingresar.
                </li>
              </ol>
              <p className="mt-5">
                Eso es lo que diferencia &ldquo;la asesoría que gestionó mi
                herencia&rdquo; de &ldquo;la asesoría que me metió un email
                con números sin explicación.&rdquo;
              </p>

              <h2 className="h2 mt-12 text-ink">
                El checklist que te pone en posición
              </h2>
              <p className="mt-5">
                Si habéis perdido familias tras una sucesión, podéis empezar
                hoy: creando un expediente sucesorio con estructura de
                proceso, dando acceso al heredero a un portal donde vea
                documentación y estado, y coordinando cada paso fiscal con
                claridad.
              </p>
              <p className="mt-5">
                El software no es lo primero. Lo primero es la decisión: que
                el heredero sea cliente de la asesoría, no un trámite de paso.
              </p>
              <p className="mt-5">
                Ulpiano es la plataforma que pone la infraestructura detrás de
                esa decisión. No es un complemento. Es el sistema donde ocurre
                el expediente completo: desde el inventario patrimonial
                automatizado, pasando por el cálculo de legítimas según el
                Codi Civil de Catalunya, hasta la liquidación del Modelo 660 y
                el 650 con coordinación documental visible. El heredero tiene
                un portal claro de acceso. La asesoría tiene trazabilidad
                completa de cada decisión.
              </p>
              <p className="mt-5">
                El tiempo de preparación de un expediente complejo baja
                significativamente. Pero lo más importante: el heredero
                entiende qué está pasando.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La confianza en el profesional no garantiza la retención:
                    hasta 9 de cada 10 herederos abandonan al asesor
                    financiero del causante, pero en la asesoría fiscal el
                    heredero sí quiere quedarse si la experiencia es visible.
                  </li>
                  <li>
                    La pérdida de la familia tras una sucesión nunca aparece
                    en el dashboard de cartera; hay que medir la retención del
                    heredero como métrica propia.
                  </li>
                  <li>
                    El verdadero lifetime value de un cliente longevo se
                    decide en el momento de la sucesión, no antes.
                  </li>
                  <li>
                    Retener al heredero exige un expediente con identidad
                    clara, documentación visible, coordinación fiscal
                    explicada y una liquidación trazable paso a paso.
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
                  checklist del expediente sucesorio para identificar en qué
                  momento de la sucesión estáis perdiendo a los herederos.
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
                Este artículo describe un escenario de referencia para
                ilustrar un patrón habitual en asesorías y despachos; cada
                firma debe valorar su propia cartera y adaptar el proceso a
                su volumen de expedientes y a los sistemas ya implantados.
                Descubre cómo Ulpiano acompaña a{" "}
                <Link
                  href="/pensado-para/asesorias"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  asesorías
                </Link>{" "}
                en cada expediente sucesorio en{" "}
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
    </>
  );
}
