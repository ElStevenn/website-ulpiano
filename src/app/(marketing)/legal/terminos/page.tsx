import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de la plataforma Ulpiano para la gestión sucesoria profesional.",
  alternates: {
    canonical: "https://ulpiano.es/legal/terminos",
  },
};

export default function TerminosPage() {
  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Términos y Condiciones</h1>
        <p className="text-slate">
          Última actualización: abril 2026
        </p>
        <p>
          Estos Términos y Condiciones regulan el acceso y uso de la plataforma
          Ulpiano. Al utilizar nuestros servicios, aceptas las condiciones aquí
          descritas.
        </p>
        <h2>Objeto del servicio</h2>
        <p>
          Ulpiano es una plataforma integral de gestión sucesoria destinada a
          profesionales del sector jurídico, fiscal y notarial. El servicio
          incluye herramientas de inventario patrimonial, cálculo fiscal,
          generación documental y gestión de expedientes sucesorios.
        </p>
        <h2>Condiciones de uso</h2>
        <ul>
          <li>El usuario se compromete a facilitar información veraz y actualizada.</li>
          <li>El uso de la plataforma requiere registro profesional.</li>
          <li>Queda prohibido el uso del servicio para fines distintos a la gestión sucesoria profesional.</li>
        </ul>
        <h2>Responsabilidad</h2>
        <p>
          Ulpiano facilita herramientas de apoyo al profesional. La
          responsabilidad sobre las decisiones jurídicas y fiscales corresponde
          al profesional que utiliza la plataforma.
        </p>
        <h2>Contacto</h2>
        <p>
          Para cualquier consulta relativa a estos términos, escríbenos a
          soporte@ulpiano.es.
        </p>
      </div>
    </article>
  );
}
