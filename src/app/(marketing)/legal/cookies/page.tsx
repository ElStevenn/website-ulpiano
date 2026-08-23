import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de ulpiano.es: cookies técnicas y analíticas, cómo gestionarlas en el navegador y cómo ejercer tus derechos.",
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
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Política de Cookies</h1>
        <p className="text-slate">
          Última actualización: abril 2026
        </p>
        <p>
          Esta web utiliza cookies propias y de terceros para garantizar el
          correcto funcionamiento del sitio, analizar el tráfico y mejorar la
          experiencia del usuario.
        </p>
        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas un sitio web. Permiten recordar tus
          preferencias y analizar cómo usas el sitio.
        </p>
        <h2>Tipos de cookies que utilizamos</h2>
        <ul>
          <li>
            <strong>Cookies técnicas:</strong> necesarias para el funcionamiento
            del sitio.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> nos permiten medir y analizar
            la navegación (Google Analytics).
          </li>
        </ul>
        <h2>Gestión de cookies</h2>
        <p>
          Puedes configurar tu navegador para rechazar cookies o eliminar las
          existentes. Ten en cuenta que algunas funcionalidades del sitio pueden
          verse afectadas.
        </p>
        <h2>Contacto</h2>
        <p>
          Para más información, contacta con nosotros en soporte@ulpiano.es.
        </p>
      </div>
    </article>
  );
}
