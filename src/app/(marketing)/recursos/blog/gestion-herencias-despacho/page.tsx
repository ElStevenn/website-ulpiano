import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Download } from "lucide-react";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterSignup from "@/features/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Gestión de herencias en un despacho: del caos al proceso",
  description:
    "Un expediente sucesorio típico genera más de 40 gestiones entre herederos, documentos y administraciones. El problema no es el derecho: es la coordinación.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog/gestion-herencias-despacho",
    languages: {
      es: "https://ulpiano.es/recursos/blog/gestion-herencias-despacho",
      ca: "https://ulpiano.es/ca/recursos/blog/gestio-herencies-despatx",
    },
  },
  openGraph: {
    title: "Gestión de herencias en un despacho: del caos al proceso",
    description:
      "Por qué un expediente sucesorio disperso en Excel, Word, PDFs, email y WhatsApp cuesta tiempo, y qué debe tener un sistema de gestión para evitarlo.",
    url: "https://ulpiano.es/recursos/blog/gestion-herencias-despacho",
    locale: "es_ES",
    type: "article",
  },
};

export default function GestionHerenciasDespachoArticlePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
          {
            name: "Gestión de herencias en un despacho",
            href: "/recursos/blog/gestion-herencias-despacho",
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
                  9 min de lectura
                </span>
              </div>
              <h1 className="h1 mt-6 text-ink">
                Gestión de herencias en un despacho: del caos documental al
                proceso estructurado
              </h1>
              <p className="body-lg mt-6 text-slate">
                Un expediente sucesorio típico genera más de 40 gestiones entre
                herederos, documentos y administraciones. No es el derecho lo
                que consume tiempo. Es la coordinación.
              </p>
              <p className="mt-5 text-sm font-medium text-slate">
                Por Miquel Fàbrega · Abogado (ICAGI 3861) y fundador de Ulpiano
              </p>
            </header>

            <div className="mt-12 max-w-3xl border-t border-mist pt-10 text-[17px] leading-8 text-ink md:mt-16 md:pt-12">
              <p>
                He contado las veces que, en un expediente típico, se envía el
                mismo certificado de defunción: cuatro. Una a la notaría, otra
                al banco, otra a la administración tributaria, otra al
                Registro de la Propiedad. Y eso no es un problema del
                certificado. Es un síntoma de que el expediente no tiene
                fuente única de verdad. Vive disperso: en el Excel de cálculo,
                en el Word del cuaderno particional, en carpetas de PDFs sin
                orden, en hilos de correo, en WhatsApp del heredero. Y cuando
                algo cambia —un dato del activo, una rectificación del
                testamento, un cambio en la normativa fiscal— eso no cambia en
                un solo sitio. Cambia en tres, se olvida en uno, y alguien
                tiene que rehacer trabajo.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El diagnóstico: dónde vive hoy un expediente
              </h2>
              <p className="mt-5">
                Pregunta a tu equipo dónde reside la verdad en un expediente
                sucesorio. Probablemente responderá así:
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Excel de cálculo.</strong> Donde cuadran el caudal
                  relicto, las legítimas, las cuotas hereditarias. Columnas
                  por heredero, fórmulas que se heredan de expedientes
                  antiguos (¿con datos del cliente anterior? Nadie lo
                  recuerda). Cada cambio de norma fiscal requiere actualizar
                  todas las filas abiertas. Alguien lo hace; otros no lo ven
                  hasta que el cliente pregunta por qué le ha subido el ISD.
                </li>
                <li>
                  <strong>Word del cuaderno particional.</strong> Donde
                  cuadran números de otro Excel. Plazos del apartado de
                  partición. Firmas. Referencias cruzadas manuales. Si el
                  Excel cambió y el Word no, el cliente recibe un documento
                  inconsistente.
                </li>
                <li>
                  <strong>Carpeta de PDFs.</strong> El testamento escaneado,
                  la nota simple del inmueble, el extracto bancario.
                  Ordenados cronológicamente si tienen suerte. Sin metadatos
                  que digan cuál es la versión final, cuál era revisión.
                </li>
                <li>
                  <strong>Hilos de correo.</strong> Herederos enviando
                  documentos sin asunto consistente. Cambios de decisión que
                  llegan como &ldquo;por favor, ponlo así&rdquo;. El cliente
                  pregunta qué pasó con su demanda de declaración de
                  herederos. Navegas los últimos tres meses de bandeja para
                  encontrar dónde respondió el abogado.
                </li>
                <li>
                  <strong>WhatsApp del heredero.</strong> Un heredero que no
                  quiere esperar al email formal. &ldquo;¿Confirmamos el valor
                  de la casa o no?&rdquo;. La confirmación queda en el
                  teléfono del profesional. Si esa persona se va de la empresa
                  o pierde el móvil, la decisión desaparece.
                </li>
              </ul>
              <p className="mt-5">
                Cada uno de esos lugares es una versión potencial de la
                verdad. Cuando son cuatro o cinco expedientes abiertos,
                gestionar qué versión es la actual se convierte en trabajo de
                coordinación pura.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El coste invisible: reenvíos, versiones y huecos de error
              </h2>
              <p className="mt-5">No se factura por ello, pero consume tiempo:</p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Reenvíos de documentos.</strong> &ldquo;¿Me
                  reenviáis el certificado de defunción? No lo
                  encuentro&rdquo;. El profesional lo busca, lo localiza en la
                  carpeta del expediente de 2022 (ocho meses atrás), lo
                  reenvía. Mismo documento, cuarta vez en tres meses.
                </li>
                <li>
                  <strong>Versiones que no son versiones.</strong> El cliente
                  pregunta si está incluida la reducción de vivienda habitual
                  en la liquidación del ISD. El profesional va al Excel,
                  calcula, envía número. Al día siguiente, rectificación
                  fiscal: la vivienda no es habitual, es segunda residencia.
                  El número que se envió ayer ya no vale. Alguien tiene que
                  recalcular y avisar. Si no avisa a tiempo, el cliente
                  presenta el 650 con cifra equivocada.
                </li>
                <li>
                  <strong>Plantillas contaminadas.</strong> Usas la plantilla
                  del cuaderno particional del expediente anterior. Copias,
                  cambias datos. A los dos meses, el cliente pregunta por un
                  párrafo raro del apartado de deudas que no recuerda haber
                  autorizado. Era de la herencia de su madre, hace dos años.
                  Nadie notó que la plantilla llevaba datos del cliente
                  anterior.
                </li>
                <li>
                  <strong>Alertas que no existen.</strong> El plazo voluntario
                  de presentación de ISD son 6 meses desde el fallecimiento
                  (la Administración, por su parte, dispone de un plazo de
                  resolución de doce meses, ampliable en supuestos de especial
                  complejidad —art. 682-7 del Decret Legislatiu 1/2024, que
                  refunde la gestión tributaria catalana). Alguien lo sabe en
                  la agenda personal. Alguien lo anota en Excel. Nadie lo
                  valida para todos los expedientes abiertos contra el
                  calendario. Vences un plazo por un expediente que
                  &ldquo;llevaba tiempo abierto&rdquo; pero no estaba en la
                  lista de pendientes.
                </li>
                <li>
                  <strong>Trazabilidad de decisión cero.</strong> El cliente
                  pregunta: &ldquo;¿Por qué no incluisteis la donación
                  antenupcial en el caudal sucesorio?&rdquo;. Buscar por qué
                  se tomó esa decisión requiere navegar emails de hace cuatro
                  meses con el gestor que ya no está, o una nota en Excel con
                  la justificación que nadie escribió.
                </li>
              </ul>
              <p className="mt-5">
                Esto no es negligencia. Es arquitectura de información rota.
                Cuando los datos están dispersos, la coordinación reemplaza al
                sistema.
              </p>

              <h2 className="h2 mt-12 text-ink">
                Qué debe tener un sistema de gestión del expediente sucesorio
              </h2>
              <p className="mt-5">
                Si delegaras la gestión de herencias a una aplicación de notas
                o una carpeta en la nube, seguirías teniendo los mismos
                problemas. El software no es lo que define si el proceso
                escala. La estructura sí.
              </p>
              <p className="mt-5">
                Un sistema de gestión del expediente sucesorio debe tener:
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ulpiano-green">
                <li>
                  <strong>Fuente única de verdad.</strong> Un registro central
                  donde vive toda la información del expediente: datos del
                  causante, herederos, activos, pasivos. Cuando cambias un
                  dato allí, el cambio se refleja en todos los documentos
                  derivados. No hay varias versiones de cuál es el caudal
                  neto.
                </li>
                <li>
                  <strong>Control documental por expediente.</strong> No una
                  carpeta genérica en Dropbox. Cada documento ligado al
                  expediente, con metadata de versión, fecha de entrega, quién
                  lo cargó. El certificado de defunción se carga una sola vez.
                  Cuando se necesita en otro contexto, se referencia desde el
                  mismo lugar.
                </li>
                <li>
                  <strong>Alertas de plazos.</strong> El plazo de 6 meses para
                  ISD, la fecha de la escritura notarial, la del depósito en
                  garantía si la hay. El sistema avisa con antelación, sin que
                  alguien tenga que revisar un calendario. Para cada
                  expediente, el siguiente paso es evidente.
                </li>
                <li>
                  <strong>Trazabilidad de cálculo.</strong> No un resultado en
                  Excel sin mostrar el razonamiento. Cada cifra debe tener una
                  justificación: la norma aplicada, el dato de origen, la
                  lógica fiscal. Si un asesor fiscal audita el expediente, o
                  Hacienda lo revisa, el profesional puede mostrar el
                  razonamiento paso a paso.
                </li>
                <li>
                  <strong>Portal para que el cliente vea el estado.</strong>{" "}
                  No informes por email cada dos semanas. Un acceso donde el
                  cliente entra, ve el estado de su expediente, descarga
                  documentos, ve qué decisiones se han tomado y por qué. No es
                  un correo que se pierda. Es una fuente de verdad del
                  cliente. Eso reduce email y llamadas de seguimiento.
                </li>
              </ul>

              <h2 className="h2 mt-12 text-ink">
                Cómo se ve ese flujo en la práctica
              </h2>
              <p className="mt-5">
                Marta es abogada en un despacho de Girona. Gestiona unos 50
                expedientes de herencias al año. Hasta hace poco, esto era su
                workflow típico:
              </p>

              <h3 className="mt-8 font-dm-sans text-xl font-bold text-ink">
                Antes: el workflow disperso
              </h3>
              <p className="mt-5">
                <strong>Lunes.</strong> Entra un nuevo expediente. Cliente:
                heredero de su padre. Marta abre Excel, copia la plantilla del
                expediente anterior, cambia nombre, empieza a entrar datos:
                domicilio del fallecido, fecha de defunción, valor de los
                bienes listados en la nota simple, extracto bancario. Mientras
                tanto, abre Word, crea el cuaderno particional. Copia la
                plantilla, cambia números. Por la tarde, el cliente llama. Hay
                un bien más que no aparece en la nota simple. Marta abre
                Excel, añade la fila, vuelve a calcular. Actualiza el Word
                manualmente.
              </p>
              <p className="mt-5">
                <strong>Miércoles.</strong> El gestor le pregunta si ese
                expediente es para liquidación de ISD. Marta va al Excel, ve
                el caudal, abre otro Excel paralelo de cálculo fiscal, repasa
                la normativa catalana del impuesto (Llei 19/2010). Detecta que
                una heredera es mayor de 75 años y tiene derecho a una
                reducción adicional. Va al Word, añade una nota al pie. En el
                Excel de fiscal, los números suben. ¿Lo ha reflejado ya en el
                cuaderno? No. Va al Word, actualiza.
              </p>
              <p className="mt-5">
                <strong>Viernes.</strong> El cliente pregunta &ldquo;¿cuánto
                me va a costar esto?&rdquo;. Marta envía el cuaderno
                particional por email. Cliente pregunta por qué la cantidad
                final ha cambiado respecto a la estimación de tres días atrás.
                Marta no recuerda cuál era la estimación de hace tres días.
                Busca en el historial de Word. Encuentra una versión anterior:
                &ldquo;Cuaderno_Particional_v1.docx&rdquo;. La abre. Son
                números diferentes. Esa era antes de la reducción por edad. Le
                envía al cliente la versión nueva. Cliente: &ldquo;¿Es seguro
                este número?&rdquo;.
              </p>
              <p className="mt-5">
                Eso es los primeros cinco días de un expediente estándar,
                repetido 50 veces al año.
              </p>

              <h3 className="mt-8 font-dm-sans text-xl font-bold text-ink">
                Ahora: con un sistema de gestión del expediente
              </h3>
              <p className="mt-5">
                <strong>Lunes.</strong> Entra el expediente. Marta crea un
                nuevo expediente en plataforma. Carga el testamento (la
                plataforma lo lee automáticamente, extrae datos
                estructurados), la nota simple (extrae bienes), el
                certificado de defunción. Los datos del fallecido, herederos y
                bienes aparecen ya prefigurados. Marta valida y corrige si es
                necesario. Una sola fuente de datos. En el panel del cliente,
                aparece automáticamente que el expediente está en fase de
                inventariado, y se ve el estado del caudal.
              </p>
              <p className="mt-5">
                <strong>Miércoles.</strong> El gestor requiere datos para ISD.
                Marta abre el módulo de cálculo fiscal. La plataforma ya tiene
                todos los datos del expediente (caudal, herederos, relación de
                parentesco). El domicilio del causante está en Girona: el
                sistema aplica la normativa catalana (Llei 19/2010). Valida
                automáticamente que la heredera es mayor de 75 años (datos del
                expediente) y aplica la reducción. El cálculo se genera. Marta
                lo verifica una vez. Está ligado a los datos de origen. Si
                algo cambia, el recalcular es un botón.
              </p>
              <p className="mt-5">
                <strong>Viernes.</strong> El cliente pregunta qué le va a
                costar. Marta genera el cuaderno particional desde la
                plataforma. Todos los números vienen del mismo sitio. El
                cliente recibe el documento con el estado más reciente. Si
                había una versión anterior, la plataforma muestra el
                historial de cambios (qué datos se modificaron, cuándo, por
                quién). No hay ambigüedad sobre cuál es la versión actual.
              </p>
              <p className="mt-5">
                <strong>Fin del expediente.</strong> La plataforma calcula
                automáticamente que el plazo de presentación de ISD es 6
                meses. Marta tiene una alerta en el panel. Cuando faltan 15
                días, la plataforma le avisa. El modelo 650 se genera
                directamente desde los cálculos del expediente. Marta lo
                revisa (su criterio jurídico sigue siendo decisor), lo firma
                con los herederos, lo presenta.
              </p>
              <p className="mt-5">
                <strong>Qué no cambia:</strong> el criterio jurídico y la
                relación con el cliente siguen siendo del profesional. La
                plataforma no decide nada. Estructura, valida, coordina y
                documenta. El abogado sigue siendo el que toma las decisiones
                sobre partición, sobre si incluir o excluir un bien, sobre si
                aplicar una reducción específica. Lo que cambia es que esas
                decisiones no se pierden en tres lugares distintos.
              </p>

              <h2 className="h2 mt-12 text-ink">
                El futuro: deja de reenviar el mismo certificado
              </h2>
              <p className="mt-5">
                Cuando el proceso sucesorio tiene fuente única y control
                documental, algo evidente sucede: el trabajo administrativo
                desaparece. No desaparece el derecho, desaparece la
                coordinación rota.
              </p>
              <p className="mt-5">
                El certificado de defunción no se reenvía cuatro veces porque
                se carga una sola vez y se referencia donde se necesita. El
                cliente no pregunta diez veces cuál es el estado porque lo ve
                en un portal. La plantilla no se contamina con datos de
                expedientes anteriores porque cada expediente está
                encapsulado. El plazo no se vence porque el sistema lo
                controla. La versión final del cuaderno es evidente porque es
                derivada de datos únicos.
              </p>
              <p className="mt-5">
                Ese es el trabajo que gana un despacho que usa un sistema de
                gestión de expedientes. No trabaja más rápido. Trabaja más
                rápido porque ya no pierde tiempo en lo que el sistema puede
                hacer por él.
              </p>

              <aside className="mt-12 rounded-lg border border-mist bg-surface p-6 md:p-8">
                <p className="eyebrow text-slate">Síntesis</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-ulpiano-green">
                  <li>
                    El coste de un expediente sucesorio no está en el
                    derecho, sino en coordinar información dispersa en
                    Excel, Word, PDFs, correo y WhatsApp.
                  </li>
                  <li>
                    Sin fuente única de verdad, cada cambio se propaga a
                    mano: se olvida en algún sitio y alguien rehace trabajo.
                  </li>
                  <li>
                    Un sistema de gestión necesita fuente única de datos,
                    control documental, alertas de plazos, trazabilidad de
                    cálculo y un portal de cliente.
                  </li>
                  <li>
                    El criterio jurídico sigue siendo del profesional; la
                    plataforma estructura, valida, coordina y documenta, no
                    decide.
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
                  checklist del expediente sucesorio para abrir y cerrar
                  expedientes sin huecos.
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
                Este artículo describe un flujo de trabajo de referencia; cada
                despacho debe adaptar el proceso a su volumen de expedientes,
                a los sistemas ya implantados y a los plazos y normativa
                aplicables en cada territorio.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
