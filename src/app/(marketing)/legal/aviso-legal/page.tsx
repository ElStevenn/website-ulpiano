import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de ulpiano.es: identidad del titular, condiciones de uso y régimen de responsabilidad.",
  alternates: {
    canonical: "https://ulpiano.es/legal/aviso-legal",
    languages: {
      es: "https://ulpiano.es/legal/aviso-legal",
      ca: "https://ulpiano.es/ca/legal/avis-legal",
      "x-default": "https://ulpiano.es/legal/aviso-legal",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/legal/aviso-legal",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updatedLabel="Última actualización: 28 de agosto de 2026">
      <h2>1. Identificación del titular</h2>
      <p>
        En cumplimiento del deber de información previsto en el artículo 10 de la Ley 34/2002, de 11
        de julio, de servicios de la sociedad de la información y de comercio electrónico («LSSI»),
        se informa de que el titular del sitio web ulpiano.es (el «Sitio Web») es:
      </p>
      <IdentidadTitular locale="es" />
      <p>
        El correo electrónico <strong>hola@ulpiano.es</strong> constituye el medio de comunicación
        directa y efectiva con el titular a los efectos del artículo 10.1.a) LSSI. Las
        comunicaciones remitidas a esa dirección se atienden en horario laboral.
      </p>
      <p>
        El Sitio Web está destinado a presentar información corporativa, contenidos técnicos e
        informativos y, en su caso, recursos relativos a la plataforma tecnológica Ulpiano.
      </p>

      <h2>2. Objeto, acceso y condiciones de uso</h2>
      <p>
        Este Aviso Legal regula el acceso, la navegación y el uso del Sitio Web. El acceso al Sitio
        Web tiene carácter gratuito, sin perjuicio del coste de conexión y de los medios de
        telecomunicación contratados por cada persona usuaria.
      </p>
      <p>
        La persona que acceda, navegue o utilice el Sitio Web adquiere la condición de usuaria y
        declara aceptar este Aviso Legal desde dicho acceso. La persona usuaria se obliga a utilizar
        el Sitio Web, sus contenidos y recursos de forma diligente, lícita y conforme con este Aviso
        Legal, la buena fe, el orden público y la normativa aplicable.
      </p>
      <p>En particular, queda prohibido:</p>
      <ul>
        <li>
          utilizar los contenidos para fines ilícitos, fraudulentos o lesivos de derechos o
          intereses de terceros;
        </li>
        <li>
          introducir o difundir programas, códigos o elementos susceptibles de dañar, alterar,
          interceptar o impedir el funcionamiento del Sitio Web, sus sistemas o los sistemas de
          terceros;
        </li>
        <li>
          acceder o intentar acceder a áreas restringidas, sistemas, cuentas o datos sin
          autorización;
        </li>
        <li>
          reproducir, extraer, reutilizar, distribuir, transformar o explotar los contenidos fuera
          de los límites previstos en este Aviso Legal o permitidos por la ley; y
        </li>
        <li>
          utilizar el Sitio Web de un modo que pueda comprometer su disponibilidad, seguridad o
          integridad.
        </li>
      </ul>
      <p>
        El titular podrá modificar, suspender, retirar o actualizar el Sitio Web, sus contenidos y
        este Aviso Legal cuando resulte necesario, sin perjuicio de los derechos que correspondan a
        las personas usuarias conforme a la normativa aplicable. La versión vigente será la
        publicada en el Sitio Web en cada momento.
      </p>
      <p>
        La eventual contratación de la plataforma Ulpiano se regirá exclusivamente por las
        condiciones contractuales que se acepten expresamente para ese servicio. La mera navegación
        por el Sitio Web, el acceso a un recurso o la remisión de una consulta no constituye
        contratación de la plataforma ni genera obligación de prestación de servicios por parte del
        titular.
      </p>
      <p>
        <strong>Precios publicados.</strong> El Sitio Web publica, en la página de precios, las
        tarifas vigentes de los planes de suscripción a la plataforma. Los importes se expresan en
        euros y <strong>no incluyen el Impuesto sobre el Valor Añadido</strong>, que se repercutirá
        al tipo legalmente aplicable en el momento de la facturación. Los precios publicados tienen
        carácter informativo y orientativo: las condiciones económicas aplicables a cada cliente son
        exclusivamente las recogidas en la Hoja de Suscripción y en el Acuerdo Marco de Servicios
        que se suscriban, que prevalecen sobre cualquier importe publicado en el Sitio Web.
      </p>
      <p>
        <strong>Códigos de conducta.</strong> El titular no se encuentra adherido a ningún código de
        conducta en el sentido del artículo 10.1.g) LSSI. Si en el futuro se adhiere a alguno, se
        identificará en esta cláusula junto con el medio electrónico para consultarlo.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        La estructura, diseño, código fuente, interfaces, textos, materiales gráficos, imágenes,
        signos distintivos, bases de datos, recursos descargables, herramientas orientativas y
        demás elementos del Sitio Web están protegidos por la normativa de propiedad intelectual e
        industrial.
      </p>
      <p>
        Salvo que se indique expresamente una titularidad distinta, los derechos de explotación
        sobre dichos elementos corresponden al titular o se utilizan con la autorización o licencia
        correspondiente. El acceso al Sitio Web no implica cesión, licencia ni transmisión alguna de
        derechos de propiedad intelectual o industrial, más allá de la autorización limitada, no
        exclusiva, revocable y no transferible necesaria para la navegación y el uso privado lícito
        del Sitio Web.
      </p>
      <p>
        El blog técnico-jurídico publicado en el Sitio Web, incluidos sus artículos, selección,
        ordenación y presentación de contenidos, constituye una obra original protegida. Queda
        prohibida su reproducción, distribución, comunicación pública, transformación, extracción
        sistemática, puesta a disposición o explotación, total o parcial, sin autorización previa y
        escrita del titular, salvo en los casos legalmente permitidos.
      </p>
      <p>
        Las marcas, nombres comerciales, dominios y demás signos distintivos que aparezcan en el
        Sitio Web pertenecen a sus respectivos titulares. Su uso sin autorización está prohibido.
      </p>
      <p>
        Las solicitudes relativas a derechos de propiedad intelectual o industrial podrán dirigirse
        a <strong>hola@ulpiano.es</strong>.
      </p>

      <h2>4. Contenidos informativos, blog, guías, herramientas y recursos</h2>
      <p>
        Los artículos, guías, contenidos técnicos, contenidos jurídicos divulgativos, recursos
        descargables, materiales, simuladores, calculadoras, herramientas orientativas y cualquier
        otra información disponible en el Sitio Web tienen carácter general, meramente informativo y
        no personalizado.
      </p>
      <p>En consecuencia:</p>
      <ul>
        <li>
          no constituyen asesoramiento jurídico, fiscal, sucesorio, contable, financiero ni
          profesional de ningún tipo;
        </li>
        <li>
          no sustituyen el análisis individualizado de los hechos, la documentación aplicable, la
          normativa vigente ni la consulta a un profesional competente;
        </li>
        <li>
          no deben utilizarse como base exclusiva para adoptar decisiones, realizar actuaciones,
          presentar declaraciones, autoliquidaciones, solicitudes, recursos, documentos o trámites
          ante la administración tributaria competente, órganos judiciales, notarios, registros,
          entidades financieras o cualquier tercero; y
        </li>
        <li>
          su lectura, descarga, utilización o envío de una consulta a través del Sitio Web no crea
          una relación abogado-cliente, profesional-cliente, encargo profesional ni relación de
          asesoramiento con el titular.
        </li>
      </ul>
      <p>
        El titular no dirige técnicamente expedientes sucesorios ni asume la responsabilidad
        profesional derivada de una decisión, actuación o asesoramiento que corresponda a un
        despacho, asesoría, gestoría u otro profesional. La responsabilidad de evaluar la adecuación
        de cualquier contenido o resultado orientativo a un caso concreto corresponde
        exclusivamente a la persona usuaria y, en su caso, al profesional que le asesore.
      </p>
      <p>
        El titular procura que los contenidos sean exactos y estén actualizados, pero no garantiza
        su exhaustividad, exactitud, vigencia, disponibilidad, adecuación a un supuesto concreto ni
        ausencia de errores. Las normas, criterios administrativos, interpretaciones y
        circunstancias de cada caso pueden variar. Dentro de los límites admitidos por la normativa
        aplicable, el titular no responderá de las decisiones o actuaciones adoptadas a partir de
        los contenidos del Sitio Web ni de los daños o perjuicios que de ellas pudieran derivarse.
      </p>
      <p>
        Nada de lo previsto en esta cláusula excluye ni limita responsabilidad cuando dicha
        exclusión o limitación no sea válida conforme a una norma imperativa aplicable.
      </p>

      <h2>5. Disponibilidad, seguridad y enlaces de terceros</h2>
      <p>
        El titular no garantiza la disponibilidad, continuidad, ausencia de errores o seguridad
        ininterrumpida del Sitio Web. Sin perjuicio de las medidas razonables que pueda adoptar,
        tampoco garantiza la inexistencia de virus, códigos maliciosos u otros elementos
        perjudiciales. La persona usuaria deberá disponer de medios adecuados de protección y
        asumir las medidas razonables de seguridad durante la navegación y descarga de contenidos.
      </p>
      <p>
        El Sitio Web puede incluir enlaces, referencias o hipervínculos a sitios, recursos o
        servicios de terceros. Estos enlaces se facilitan únicamente para comodidad e información de
        la persona usuaria. El titular no controla, aprueba ni garantiza sus contenidos,
        disponibilidad, seguridad, políticas, condiciones de uso o prácticas de tratamiento de
        datos, y no responde de los daños o perjuicios derivados de su acceso o utilización.
      </p>
      <p>
        La inclusión de un enlace no implica asociación, patrocinio, aprobación, colaboración ni
        participación del titular con el tercero enlazado. La persona usuaria deberá consultar las
        condiciones y políticas propias de cada sitio o servicio de terceros.
      </p>

      <h2>6. Protección de datos y cookies</h2>
      <p>
        El tratamiento de los datos personales recogidos a través del Sitio Web se regula en la{" "}
        <Link href="/legal/privacidad">Política de Privacidad</Link>. El uso de cookies y
        tecnologías de almacenamiento y recuperación de datos en el equipo terminal de la persona
        usuaria se regula en la <Link href="/legal/cookies">Política de Cookies</Link>. El uso del
        Sitio Web y de sus recursos descargables se regula, además, en los{" "}
        <Link href="/legal/terminos">Términos de Uso del Sitio Web</Link>.
      </p>

      <h2>7. Ley aplicable y fuero</h2>
      <p>Este Aviso Legal se rige por el Derecho español.</p>
      <p>
        Cualquier controversia relacionada con el acceso, navegación o uso del Sitio Web se
        someterá a los juzgados y tribunales que resulten competentes conforme a la normativa
        procesal aplicable. Cuando las partes tengan la condición de empresarios o profesionales y
        sea válido un pacto expreso de sumisión, las partes se someten a los juzgados y tribunales
        de Girona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
      </p>
    </LegalPage>
  );
}
