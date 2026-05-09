import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Ulpiano. Información sobre el tratamiento de datos personales conforme al RGPD.",
  alternates: {
    canonical: "https://ulpiano.es/legal/privacidad",
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
