import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "IA para abogados de sucesiones: hasta dónde llega y dónde no",
  description:
    "La IA acelera lectura y redacción; liquidar el ISD exige un motor determinista con norma citada. Dónde aporta y dónde no.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/ia-abogados-sucesiones",
    languages: {
      es: "https://ulpiano.es/recursos/blog/ia-abogados-sucesiones",
      ca: "https://ulpiano.es/ca/recursos/blog/ia-advocats-successions",
      "x-default": "https://ulpiano.es/recursos/blog/ia-abogados-sucesiones",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "IA para abogados de sucesiones: hasta dónde llega y dónde no",
    description:
      "IA donde aporta —lectura, redacción, búsqueda—. Motor determinista donde es crítico —cálculo, norma, trazabilidad—. Cómo se ve una arquitectura defendible ante Hacienda.",
    url: "https://ulpiano.es/recursos/blog/ia-abogados-sucesiones",
    locale: "es_ES",
    type: "article",
  },
};

export default function IaAbogadosSucesionesArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "IA para abogados de sucesiones",
            href: "/recursos/blog/ia-abogados-sucesiones",
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
                <span className="badge">IA</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  9 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                IA para abogados de sucesiones: la pregunta que casi todos hacen
                mal
              </h1>
              <p className="body-lg mt-6 text-slate">
                &ldquo;¿Puedo usar IA en mi despacho?&rdquo; no es la pregunta.
                La pregunta real es qué decisiones puedes delegar a un modelo
                probabilístico y cuáles debes tomar con motor determinista,
                norma citada y rastro auditable.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                Un modelo de lenguaje es extraordinario para leer documentos:
                acepta PDF caótico, extrae datos estructurados, enlaza cada dato
                a la línea del original. Es excelente para redactar borradores
                —cuadernos particionales, escritos del expediente,
                comunicaciones al cliente—. Puede buscar artículos del CCCat y
                citarlos. Detecta incoherencias entre piezas del expediente.
              </p>
              <p className="mt-5">
                Pero un modelo no debería calcular una legítima. No debería
                liquidar un ISD. No debería generar los modelos tributarios 650,
                651, 652, 653 ni 660. La diferencia no es semántica: es la
                diferencia entre &ldquo;una tarea complicada pero
                tercerizable&rdquo; y &ldquo;una responsabilidad profesional que
                no puede terciarizarse a un algoritmo probabilístico&rdquo;.
              </p>
              <p className="mt-5">
                Este artículo va sobre esa frontera. Sobre por qué un abogado
                moderno puede llevar un despacho con IA —y por qué debe hacerlo
                con cuidado—.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El volumen documental es el primer cuello de botella real
              </h2>
              <p className="mt-5">
                Una sucesión mediana implica testamento (o varios, en caso de
                revocaciones parciales), certificado de defunción, últimas
                voluntades, notas simples del Registro de la Propiedad (una por
                inmueble), certificados bancarios de todas las cuentas, extractos
                de brókers si hay cartera de valores, documentación de
                participaciones en empresas familiares, pólizas de seguros y
                posibles donaciones anteriores que afecten al cálculo de la
                legítima.
              </p>
              <p className="mt-5">
                Eso son fácilmente 20-40 documentos. Algunos en mal estado de
                escaneo. Algunos con tablas complejas. Todos con estructuras
                distintas según quién los emitió. A mano: horas de lectura pura,
                extracción y consolidación en una hoja de cálculo, con riesgo de
                error —un número omitido, una propiedad duplicada por un error de
                tipografía, un inmueble que aparece en dos documentos con códigos
                catastrales distintos—.
              </p>
              <p className="mt-5">
                Un modelo de lenguaje bien orientado con documentación sucesoria
                española lee los 40 documentos en paralelo en segundos, extrae
                cada dato (beneficiario, NIF, bien, valor, carga) con nivel de
                confianza por campo, enlaza cada dato a la línea exacta del PDF
                original, lo estructura en una tabla normalizada y te señala las
                inconsistencias (por ejemplo, una cuenta mencionada en dos
                documentos con saldos distintos).
              </p>
              <p className="mt-5">
                Eso vale horas. Y es cualitativamente distinto de Excel + ojos:
                es trazable. Si un cliente pregunta de dónde sale el saldo de la
                cuenta del Banco X, señalas la línea del PDF. Si lo pregunta un
                fiscal o un juez, tienes evidencia. La lectura documental no
                sustituye el criterio del abogado: lo amplifica. Tú sigues
                leyendo el testamento, interpretando cláusulas, validando los
                datos y decidiendo si una cláusula es válida o problemática. La
                IA simplemente no deja datos en el camino.
              </p>

              <h2 className="h2 mt-12 text-ink">
                La redacción asistida es legítima porque verificas antes de
                firmar
              </h2>
              <p className="mt-5">
                Un cuaderno particional tiene estructura: inventario de bienes,
                cálculo de legítimas, partición, liquidación del ISD,
                distribución final. Cada sección tiene lógica. Un modelo puede
                producir un borrador en minutos a partir de los datos
                estructurados del expediente y generar un documento coherente que
                un cliente puede leer.
              </p>
              <p className="mt-5">
                Pero ese borrador es exactamente eso: un borrador. Tú lo lees
                línea a línea, verificas cada cifra contra el expediente,
                corriges incoherencias, añades matices legales que no se derivan
                automáticamente de los datos y firmas el documento final. La IA
                hace lo que hace mejor —acelerar la parte mecánica—; tú haces lo
                que haces mejor —criterio jurídico, interpretación,
                responsabilidad—.
              </p>
              <p className="mt-5">
                Lo importante es ser explícito sobre dónde termina lo automático
                y empieza lo verificado. Un sistema bien diseñado te muestra el
                borrador generado (en gris, draft), tu edición aprobada (en
                verde, final) y el log de cambios entre ambos. Así un juez, un
                fiscal o un cliente pueden ver: el sistema propuso X, el abogado
                cambió a Y, por estas razones. La redacción asistida no reemplaza
                tu responsabilidad: la documenta.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Dónde la IA no debe tomar decisiones —y por qué
              </h2>
              <h3 className="mt-10 text-xl font-semibold text-ink">
                La legítima según el CCCat: artículo 451-5
              </h3>
              <p className="mt-5">
                La legítima catalana es la cuarta parte de una base de cálculo
                propia (art. 451-5 CCCat): el valor de los bienes a la muerte del
                causante, menos deudas y gastos, más determinadas donaciones. En
                Cataluña es, además, un derecho de crédito y no una cuota de
                bienes (art. 451-1 CCCat), lo que la convierte precisamente en
                una cifra calculable. Esa cuarta parte es global y se reparte
                entre los legitimarios: no es un cuarto por cabeza.
              </p>
              <p className="mt-5">Suena simple. No lo es. Incluye preguntas como:</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                <li>¿Qué deudas y gastos son deducibles para construir la base?</li>
                <li>
                  ¿Cómo se valora cada bien a fecha de defunción? (Valor de
                  mercado, tasación pericial: depende del tipo de bien.)
                </li>
                <li>
                  ¿Qué donaciones de los diez años anteriores se añaden a la
                  base y cuáles se imputan a la legítima del propio donatario?
                  (arts. 451-5 y 451-8 CCCat)
                </li>
                <li>
                  ¿Concurre la cuarta viudal del cónyuge o conviviente (art.
                  452-1 CCCat), que es una institución distinta de la legítima?
                </li>
                <li>¿Hay prelegados a cuenta de legítima que alteran el reparto?</li>
              </ul>
              <p className="mt-5">
                Cada una de esas decisiones tiene consecuencias fiscales, civiles
                y de responsabilidad profesional. Un modelo probabilístico no
                puede decidir eso. Puede leerlo de Aranzadi o de jurisprudencia,
                puede ofrecerte la redacción del artículo, pero no debe calcular
                la legítima como si fuera una caja negra que produce un número.
              </p>
              <p className="mt-5">
                ¿Por qué? Porque si ese número es incorrecto, la cadena de
                responsabilidad tiene que ser clara. Hacienda, un juez o un
                cliente no aceptarán &ldquo;lo dijo el modelo&rdquo; como
                explicación. Por eso un motor determinista es obligatorio: reglas
                explícitas (legítima global = base computable × 0,25; individual
                = global dividida entre los legitimarios que computan), norma
                citada en cada línea (art. 451-5 CCCat), trazabilidad de cada
                cálculo intermedio y reproducibilidad —mismo expediente, mismo
                resultado siempre—. Eso es lo que diferencia un sistema que
                puedas defender ante Hacienda de uno que esperas que nadie
                cuestione.
              </p>

              <h3 className="mt-10 text-xl font-semibold text-ink">
                El ISD (Llei 19/2010 del Impuesto sobre Sucesiones y Donaciones)
              </h3>
              <p className="mt-5">
                Mismo argumento, amplificado. El embudo de liquidación tiene
                capas: base imponible, reducciones (parentesco, discapacidad,
                persona mayor de 75 años, vivienda habitual, empresa familiar),
                base liquidable, tarifa progresiva por grupo de parentesco,
                coeficiente multiplicador según patrimonio previo del heredero,
                bonificación autonómica (en Cataluña, tablas progresivas para los
                grupos I y II y del 99% para cónyuge y pareja estable) y recargo
                por extemporaneidad.
              </p>
              <p className="mt-5">
                Cada parámetro tiene norma. Cada norma tiene excepciones. Cada
                excepción puede cambiar de un año a otro. Un modelo no debe hacer
                esto: un motor determinista auditable, con la Llei citada en cada
                paso, sí. Es la única forma de asegurar que, si un cliente discute
                la liquidación ante la ATC o un tribunal, puedas señalar cada
                decisión, cada norma y cada paso.
              </p>

              <h3 className="mt-10 text-xl font-semibold text-ink">
                Los modelos tributarios: 650, 651, 652, 653, 660
              </h3>
              <p className="mt-5">
                Son documentos legales que se presentan a Hacienda y son
                responsabilidad del profesional que los firma. Un generador de
                documentos no debería producirlos, no porque no sea técnicamente
                posible, sino porque un cambio normativo a mitad de ejercicio,
                una inconsistencia en el expediente o una cifra sin base trazable
                convierten &ldquo;el sistema lo generó&rdquo; en una respuesta
                insuficiente ante Hacienda. Un motor determinista dedicado a eso,
                con cada campo validado contra la norma, es el único diseño
                defensible.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Cómo se ve una arquitectura correcta: la frontera explícita
              </h2>
              <p className="mt-5">
                Imagina un despacho que usa una plataforma de sucesiones bien
                diseñada. El flujo se vería así:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>Fase 1 · Lectura (IA).</strong> Subes los documentos.
                  La IA lee todo, extrae datos y los estructura en tabla, cada
                  uno con nivel de confianza y enlace al PDF. Marca en rojo lo
                  inconsistente. Tu rol: revisar, corregir, resolver. Output:
                  tabla completa verificada por ti.
                </li>
                <li className="pl-2">
                  <strong>Fase 2 · Cálculo de legítima (motor determinista).</strong>{" "}
                  Introduces los parámetros verificados (caudal neto,
                  legitimarios, donaciones en vida). El motor calcula según el
                  art. 451-5 CCCat, con cada línea auditable y la norma citada.
                  Tu rol: validar que los parámetros son correctos.
                </li>
                <li className="pl-2">
                  <strong>Fase 3 · Liquidación ISD (motor determinista).</strong>{" "}
                  Heredero por heredero, el motor ejecuta el embudo (base
                  imponible → reducciones → base liquidable → tarifa →
                  coeficiente → bonificación → cuota) con la Llei 19/2010 citada
                  y alertas si un parámetro sale de rango. Output: liquidación por
                  beneficiario y modelos 650/651/652/653 generados con norma
                  integrada.
                </li>
                <li className="pl-2">
                  <strong>Fase 4 · Redacción del cuaderno (IA + verificación).</strong>{" "}
                  El sistema genera el borrador integrando datos y cálculos, con
                  explicación de norma. Tu rol: leer, ajustar, añadir
                  interpretaciones del caso y firmar. Output: cuaderno final con
                  trazabilidad de qué es automático y qué es decisión del
                  abogado.
                </li>
              </ol>
              <p className="mt-5">
                Línea clara: IA donde aporta (lectura, redacción, búsqueda);
                motor determinista donde es crítico (cálculo, norma,
                trazabilidad). Resultado: un sistema que puedes defender ante
                cualquier fiscal, juez o cliente.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Qué preguntarle a cualquier proveedor legal-tech antes de firmar
              </h2>
              <p className="mt-5">
                Antes de comprometer al despacho, estos son los cuatro puntos no
                negociables:
              </p>
              <ol className="mt-5 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-ulpiano-green">
                <li className="pl-2">
                  <strong>¿Qué calcula la IA y qué calcula un motor
                  determinista?</strong> Si la legítima la calcula IA, pregunta
                  cómo se valida que incluye todas las excepciones del CCCat,
                  quién audita si falla y cómo lo documentas ante Hacienda. Si la
                  calcula un motor, pide ver la lógica de reglas: debe ser
                  legible, no una caja negra. Señal roja: &ldquo;No te preocupes,
                  confía en el sistema&rdquo;.
                </li>
                <li className="pl-2">
                  <strong>¿Cita la norma literalmente?</strong> ¿Aparece
                  &ldquo;Llei 19/2010, art. XX&rdquo; para cada cifra importante
                  en el documento o en el log de auditoría? Señal roja: &ldquo;Es
                  obvio que aplicamos la ley&rdquo;. No es obvio: necesitas poder
                  demostrarlo.
                </li>
                <li className="pl-2">
                  <strong>¿Deja log auditable?</strong> Cambia un parámetro (por
                  ejemplo, la edad del heredero) y verifica si el log muestra el
                  recálculo con el resultado anterior, el nuevo y la norma. Señal
                  roja: &ldquo;No hay log&rdquo;. Entonces no es auditable.
                </li>
                <li className="pl-2">
                  <strong>¿Mismo input da mismo output?</strong> Guarda un
                  expediente, espera un mes, cárgalo de nuevo. ¿El cálculo es
                  idéntico? Señal roja: &ldquo;Depende del entrenamiento del
                  modelo&rdquo;. Entonces no es reproducible. No firmes.
                </li>
              </ol>

              <h2 className="h2 mt-12 text-ink">
                La frontera no es &ldquo;IA sí&rdquo; e &ldquo;IA no&rdquo;. Es
                &ldquo;decidible&rdquo; frente a &ldquo;auditable&rdquo;
              </h2>
              <p className="mt-5">
                Puedes usar IA en tu despacho de sucesiones, y muchos de los
                mejores despachos pronto lo harán. Pero la pregunta no es
                &ldquo;¿tengo IA?&rdquo;, sino &ldquo;¿puedo defender cada
                decisión que la IA ayudó a tomar?&rdquo;. Si un cliente pregunta
                de dónde sale un número, tienes que poder mostrar dónde se originó
                el dato (línea del PDF), qué norma se aplicó (artículo citado),
                qué cálculo se hizo (paso a paso) y cuándo y por quién se verificó
                (log). Eso es responsabilidad profesional.
              </p>
              <p className="mt-5">
                La IA que produce un número sin poder mostrar por qué, o que
                cambia el resultado si se ejecuta dos veces, o que te pide que
                confíes en ella, es la que debes evitar —no por miedo a la
                tecnología, sino por rigor profesional—.{" "}
                <strong>
                  Inteligencia artificial donde aporta. Motor determinista donde
                  es crítico.
                </strong>{" "}
                Esa frase captura todo: un despacho moderno necesita ambas.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    La IA sobresale en lectura documental, detección de
                    incoherencias y redacción de borradores: acelera y hace
                    trazable la parte mecánica.
                  </li>
                  <li>
                    El cálculo de la legítima, la liquidación del ISD y los
                    modelos 650-660 exigen un motor determinista con norma citada,
                    log auditable y reproducibilidad.
                  </li>
                  <li>
                    Una arquitectura correcta separa fases: IA en lectura y
                    redacción, motor determinista en cálculo y norma, con el
                    abogado validando en cada paso.
                  </li>
                  <li>
                    Antes de firmar con un proveedor: qué calcula cada parte, si
                    cita la norma, si deja log auditable y si el mismo input da el
                    mismo output.
                  </li>
                </ul>
              </aside>

              <aside className="mt-8 rounded-lg border border-mist border-l-4 border-l-ulpiano-green bg-white p-6 shadow-card md:p-8">
                <p className="eyebrow text-slate">Para profesionales del sucesorio</p>
                <h2 className="mt-3 font-dm-sans text-2xl font-bold leading-tight text-ink">
                  Novedades del sucesorio catalán, contadas para profesionales
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate">
                  Suscríbete a la newsletter quincenal de Ulpiano: jurisprudencia
                  comentada, cambios normativos y decisiones de diseño de la
                  plataforma. Y descarga el checklist del expediente sucesorio.
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
                Ulpiano aplica exactamente esta frontera: IA donde aporta, motor
                determinista donde es crítico. Descúbrelo en{" "}
                <Link
                  href="/ia"
                  className="font-medium text-ulpiano-green underline underline-offset-2 hover:text-green-light"
                >
                  Ulpiano IA
                </Link>{" "}
                y en{" "}
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
        href="/recursos/blog/la-legitima-catalana"
        label="La legítima catalana"
        description="El cuarto del caudal computable, no el tercio del Código Civil."
      />
    </>
  );
}
