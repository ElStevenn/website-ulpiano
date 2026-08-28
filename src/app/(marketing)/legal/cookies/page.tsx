import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import IdentidadTitular from "@/components/legal/IdentidadTitular";
import LegalTable from "@/components/legal/LegalTable";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de ulpiano.es: categorías, tabla de cookies y cómo aceptar, rechazar o retirar el consentimiento.",
  alternates: {
    canonical: "https://ulpiano.es/legal/cookies",
    languages: {
      es: "https://ulpiano.es/legal/cookies",
      ca: "https://ulpiano.es/ca/legal/cookies",
      "x-default": "https://ulpiano.es/legal/cookies",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/legal/cookies",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      updatedLabel="Versión 1.0 — en vigor desde el 28 de agosto de 2026"
    >
      <p>
        Esta Política de Cookies se publica en castellano y catalán. En caso de discrepancia de
        interpretación prevalecerá la versión castellana, sin perjuicio de la aplicación de las
        normas imperativas que correspondan.
      </p>

      <h2>1. Identidad del editor</h2>
      <IdentidadTitular locale="es" />

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        Esta Política informa sobre el uso de cookies y tecnologías similares en el sitio web
        ulpiano.es (el «Sitio Web»). Es aplicable a los dispositivos desde los que se acceda al
        Sitio Web.
      </p>
      <p>
        El almacenamiento o acceso a información en el equipo terminal se rige por el artículo 22.2
        de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de
        comercio electrónico (LSSI). Cuando la información obtenida mediante cookies constituya dato
        personal, será asimismo aplicable el Reglamento (UE) 2016/679 (RGPD), en particular sus
        artículos 6.1 y 7.
      </p>

      <h2>3. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos o tecnologías similares que se descargan o a los que se
        accede desde el dispositivo del usuario al visitar un sitio web. Permiten, entre otros
        fines, recordar elecciones, facilitar funcionalidades técnicas o medir el uso del Sitio
        Web.
      </p>
      <p>
        Las cookies pueden ser <strong>propias</strong> (gestionadas desde equipos o dominios de
        Ulpiano) o <strong>de terceros</strong> (gestionadas desde equipos o dominios de otra
        entidad); y <strong>de sesión</strong> (se eliminan al cerrar el navegador) o{" "}
        <strong>persistentes</strong> (permanecen durante el plazo configurado o hasta que el
        usuario las elimine).
      </p>

      <h2>4. Categorías, base de licitud y régimen de consentimiento</h2>
      <h3>4.1. Cookies necesarias</h3>
      <p>
        Son las imprescindibles para transmitir una comunicación por una red de comunicaciones
        electrónicas o para prestar una funcionalidad del Sitio Web expresamente solicitada por el
        usuario. Están exentas del deber de obtener consentimiento conforme a la excepción del
        artículo 22.2 LSSI.
      </p>
      <p>
        La cookie propia <code>gt_consent</code> se utiliza para conservar la elección del usuario
        sobre el uso de cookies. Por su finalidad está incluida en esta categoría y no requiere
        consentimiento previo: su uso se fundamenta en la necesidad de recordar y aplicar la opción
        de privacidad expresada por el usuario.
      </p>

      <h3>4.2. Cookies analíticas</h3>
      <p>
        Permiten medir y analizar el uso del Sitio Web —por ejemplo, mediante datos sobre
        navegación, páginas visitadas o interacción con contenidos— con el fin de comprenderlo y
        mejorarlo.
      </p>
      <p>
        Su instalación o lectura requiere el consentimiento previo, libre, específico, informado e
        inequívoco del usuario, conforme al artículo 22.2 LSSI y, cuando comporten tratamiento de
        datos personales, a los artículos 6.1.a) y 7 RGPD.{" "}
        <strong>Se mantienen desactivadas hasta que el usuario las acepte expresamente.</strong>
      </p>

      <h3>4.3. Cookies de marketing</h3>
      <p>
        Se destinan a medir campañas, atribuir conversiones, crear o utilizar perfiles
        publicitarios, personalizar publicidad o compartir datos con plataformas publicitarias.
      </p>
      <p>
        Su instalación o lectura requiere el consentimiento previo, libre, específico, informado e
        inequívoco del usuario, conforme al artículo 22.2 LSSI y, cuando proceda, a los artículos
        6.1.a) y 7 RGPD.{" "}
        <strong>Se mantienen desactivadas hasta que el usuario las acepte expresamente.</strong>
      </p>
      <p>
        <strong>
          A la fecha de esta Política, el Sitio Web no instala ninguna cookie de marketing.
        </strong>{" "}
        La categoría se mantiene disponible en el panel de preferencias para que cualquier
        tecnología de marketing que se incorpore en el futuro quede bloqueada hasta la aceptación
        del usuario.
      </p>

      <h3>4.4. Configuración de consentimiento</h3>
      <p>
        Ulpiano utiliza un banner propio y un panel de preferencias con selección granular por las
        categorías necesarias, analíticas y marketing. Las categorías analíticas y de marketing
        están <strong>desactivadas por defecto</strong>: ninguna cookie o tecnología no exenta se
        activa antes de la aceptación expresa correspondiente.
      </p>
      <p>
        La herramienta de medición se configura mediante <strong>Google Consent Mode v2</strong>,
        con los parámetros <code>analytics_storage</code>, <code>ad_storage</code>,{" "}
        <code>ad_user_data</code> y <code>ad_personalization</code>. Mientras no exista
        consentimiento aplicable, dichos parámetros se mantienen en estado de denegación y las
        etiquetas operan de forma compatible con esa elección.
      </p>
      <p>
        El consentimiento no se obtiene por la mera navegación, la inacción o el cierre del banner.
      </p>

      <h2>5. Tabla de cookies y tecnologías</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Titular</th>
            <th>Tipo</th>
            <th>Finalidad</th>
            <th>Categoría</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>gt_consent</code>
            </td>
            <td>Ulpiano</td>
            <td>Propia</td>
            <td>
              Conserva la elección del usuario sobre cookies y permite aplicar sus preferencias en
              visitas posteriores.
            </td>
            <td>Necesaria</td>
            <td>
              182 días. <code>SameSite=Lax; Secure</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>_ga</code>
            </td>
            <td>Google Ireland Limited</td>
            <td>Tercero</td>
            <td>
              Distingue usuarios para generar estadísticas de uso del Sitio Web. Solo se instala
              tras aceptar la categoría analítica.
            </td>
            <td>Analítica</td>
            <td>2 años</td>
          </tr>
          <tr>
            <td>
              <code>_ga_FW9TKGSK59</code>
            </td>
            <td>Google Ireland Limited</td>
            <td>Tercero</td>
            <td>
              Conserva el estado de sesión y permite la medición de uso asociada a la propiedad de
              Google Analytics 4 <code>G-FW9TKGSK59</code>. Solo se instala tras aceptar la
              categoría analítica.
            </td>
            <td>Analítica</td>
            <td>2 años</td>
          </tr>
        </tbody>
      </LegalTable>
      <p>
        <strong>Google Tag Manager</strong> (contenedor <code>GTM-MBNWK2CW</code>) es un gestor de
        etiquetas: por sí solo no instala cookies. A la fecha de esta Política el contenedor
        publica <strong>exclusivamente</strong> la etiqueta de configuración de Google Analytics 4
        y sus etiquetas de evento, además de la etiqueta de estado por defecto de Consent Mode v2.
        No hay etiquetas publicitarias, píxeles de terceros ni etiquetas de redes sociales
        publicadas en el contenedor.
      </p>
      <p>
        <strong>Advertencia operativa.</strong> Antes de incorporar cualquier píxel, etiqueta o
        tecnología de terceros nueva —incluidos LinkedIn Ads o Google Ads— debe actualizarse
        previamente esta tabla, el panel de preferencias y la configuración de bloqueo previo. La
        tabla se revisa mediante auditoría técnica en producción, con y sin consentimiento para
        cada categoría, antes de cada cambio en las etiquetas, scripts, dominios o proveedores.
      </p>

      <h2>6. Aceptación, rechazo, modificación y revocación de preferencias</h2>
      <p>
        El usuario puede aceptar, rechazar o configurar por categorías las cookies no necesarias
        desde el banner inicial y el panel de preferencias.
      </p>
      <p>
        El usuario puede modificar o retirar su consentimiento{" "}
        <strong>
          en cualquier momento, sin coste y con una facilidad equivalente a la que tuvo para
          otorgarlo
        </strong>, mediante el enlace permanente <strong>«Ajustes de cookies»</strong> situado en el pie de
        página de todas las páginas del Sitio Web. Ese enlace abre directamente el panel de
        preferencias, sin obligar al usuario a buscar la opción dentro de esta Política ni a
        desplazarse por ella.
      </p>
      <p>
        La retirada del consentimiento impide nuevas operaciones de almacenamiento o acceso de las
        cookies afectadas y, cuando es técnicamente posible, provoca la eliminación de las cookies
        no necesarias previamente activadas. El usuario también puede eliminar o bloquear cookies
        desde la configuración de su navegador; esa configuración es complementaria y no sustituye
        al mecanismo propio de gestión de preferencias del Sitio Web.
      </p>

      <h2>7. Consecuencias de rechazar cada categoría</h2>
      <LegalTable>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Consecuencia del rechazo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Necesarias</td>
            <td>
              No pueden desactivarse desde el panel mientras sean estrictamente necesarias. Si se
              bloquean desde el navegador, ciertas funciones esenciales o la conservación de la
              elección de privacidad pueden no operar correctamente.
            </td>
          </tr>
          <tr>
            <td>Analíticas</td>
            <td>
              No se instalarán ni leerán cookies analíticas. Ulpiano no recibirá la información de
              medición asociada a esas tecnologías. El acceso al contenido y a las funcionalidades
              esenciales del Sitio Web no queda condicionado a su aceptación.
            </td>
          </tr>
          <tr>
            <td>Marketing</td>
            <td>
              No se instalarán ni leerán cookies de marketing ni se realizarán, a través de tales
              tecnologías, operaciones de personalización publicitaria, atribución de campañas o
              elaboración de perfiles publicitarios. El acceso al contenido y a las funcionalidades
              esenciales del Sitio Web no queda condicionado a su aceptación.
            </td>
          </tr>
        </tbody>
      </LegalTable>

      <h2>8. Terceros y transferencias internacionales</h2>
      <p>
        Cuando el usuario acepta las cookies analíticas, <strong>Google Ireland Limited</strong>{" "}
        (Gordon House, Barrow Street, Dublín 4, Irlanda) trata la información derivada del uso de
        Google Analytics 4 conforme a sus propias condiciones y políticas, en calidad de encargado
        del tratamiento de Ulpiano. Las cookies <code>_ga</code> y <code>_ga_FW9TKGSK59</code> se
        sirven desde el dominio <code>.ulpiano.es</code>.
      </p>
      <p>
        Dicho tratamiento puede implicar accesos desde <strong>Google LLC</strong> (Estados Unidos)
        como subencargado. Esas transferencias se amparan en las{" "}
        <strong>cláusulas contractuales tipo</strong> aprobadas por la Comisión Europea y, cuando
        resulte aplicable, en el <strong>Marco de Privacidad de Datos UE-Estados Unidos</strong>.
      </p>
      <p>
        La incorporación futura de terceros, incluidos proveedores de publicidad o píxeles de
        LinkedIn Ads o Google Ads, no podrá realizarse hasta que, con carácter previo a su
        instalación: (i) se identifique cada tecnología y tercero; (ii) se determine su categoría,
        finalidad, duración, titularidad, posible acceso a datos personales y transferencias; (iii)
        se actualicen esta Política y el panel de preferencias; y (iv) se configure el bloqueo
        previo hasta que exista consentimiento cuando sea exigible.
      </p>

      <h2>9. Simetría de las opciones del banner</h2>
      <p>
        El banner del Sitio Web cumple simultáneamente las siguientes condiciones, exigidas por el
        artículo 22.2 LSSI y la Guía sobre el uso de las cookies de la AEPD:
      </p>
      <ul>
        <li>
          La primera capa ofrece, con la misma visibilidad, tamaño y número de interacciones, las
          opciones <strong>«Rechazar»</strong>, <strong>«Ajustes»</strong> y{" "}
          <strong>«Aceptar»</strong>.
        </li>
        <li>
          El panel abierto desde «Ajustes» permite guardar una selección parcial y no contiene
          casillas premarcadas a favor de las categorías analíticas o de marketing.
        </li>
        <li>
          No se emplean diseños que induzcan a aceptar ni que dificulten materialmente el rechazo.
        </li>
        <li>
          El enlace permanente de gestión de preferencias está disponible en el pie de página
          después de cerrar el banner.
        </li>
      </ul>

      <h2>10. Actualizaciones de esta Política</h2>
      <p>
        Ulpiano podrá actualizar esta Política para reflejar cambios normativos, técnicos u
        operativos, en especial la incorporación, modificación o retirada de cookies, etiquetas,
        píxeles o terceros. Cuando un cambio afecte a las finalidades, categorías, terceros o
        condiciones sobre las que se obtuvo el consentimiento, Ulpiano actualizará la información y
        recabará de nuevo el consentimiento antes de activar el tratamiento afectado, cuando
        resulte exigible.
      </p>

      <h2>11. Información adicional</h2>
      <p>
        La información sobre el tratamiento de datos personales realizado por Ulpiano puede
        consultarse en la <Link href="/legal/privacidad">Política de Privacidad</Link>.
      </p>
    </LegalPage>
  );
}
