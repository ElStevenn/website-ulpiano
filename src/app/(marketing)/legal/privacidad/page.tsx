import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Ulpiano: qué datos tratamos, con qué finalidad, plazos de conservación y cómo ejercer tus derechos ARCO+.",
  alternates: {
    canonical: "https://ulpiano.es/legal/privacidad",
    languages: {
      es: "https://ulpiano.es/legal/privacidad",
      ca: "https://ulpiano.es/ca/legal/privacitat",
      "x-default": "https://ulpiano.es/legal/privacidad",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/legal/privacidad",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function PrivacidadPage() {
  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Política de Privacidad</h1>
        <p className="text-slate">
          Última actualización: abril 2026
        </p>
        <p>
          En Ulpiano nos comprometemos a proteger la privacidad de nuestros
          usuarios. Esta política describe cómo recopilamos, usamos y protegemos
          los datos personales conforme al Reglamento General de Protección de
          Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
          Personales.
        </p>
        <h2>Responsable del tratamiento</h2>
        <p>
          Ulpiano — Plataforma Integral de Gestión Sucesoria.
          <br />
          Correo electrónico: soporte@ulpiano.es
        </p>
        <h2>Datos que recopilamos</h2>
        <ul>
          <li>Datos de contacto proporcionados en formularios (nombre, email, teléfono).</li>
          <li>Datos de uso y navegación mediante cookies analíticas.</li>
          <li>Datos profesionales necesarios para la prestación del servicio.</li>
        </ul>
        <h2>Finalidad del tratamiento</h2>
        <ul>
          <li>Gestión de solicitudes de contacto y demos.</li>
          <li>Prestación del servicio contratado.</li>
          <li>Mejora continua de la plataforma.</li>
          <li>Comunicaciones comerciales (con consentimiento previo).</li>
        </ul>
        <h2>Derechos del interesado</h2>
        <p>
          Puede ejercer sus derechos de acceso, rectificación, supresión,
          oposición, limitación y portabilidad dirigiéndose a
          soporte@ulpiano.es.
        </p>
      </div>
    </article>
  );
}
