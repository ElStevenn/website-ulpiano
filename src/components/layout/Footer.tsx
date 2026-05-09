"use client";

import Link from "next/link";

const columns = [
  {
    header: "Producto",
    links: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Planificador", href: "/soluciones/planificacion-sucesoria" },
      { label: "Fiscalidad", href: "/soluciones/fiscalidad-sucesoria" },
      { label: "Activos digitales", href: "/soluciones/activos-digitales" },
      { label: "Precios", href: "/precios" },
    ],
  },
  {
    header: "Para quién",
    links: [
      { label: "Despachos", href: "/pensado-para/despachos" },
      { label: "Notarías", href: "/pensado-para/notarias" },
      { label: "Asesorías", href: "/pensado-para/asesorias" },
      { label: "Family Office", href: "/pensado-para/family-office" },
      { label: "Funerarias", href: "/pensado-para/funerarias" },
      { label: "Aseguradoras", href: "/pensado-para/aseguradoras" },
    ],
  },
  {
    header: "Modelos fiscales",
    links: [
      { label: "Modelo 650 — Sucesiones", href: "/modelos/modelo-650" },
      { label: "Modelo 651 — Donaciones", href: "/modelos/modelo-651" },
      { label: "Modelo 652 — Seguros", href: "/modelos/modelo-652" },
      { label: "Modelo 653 — Consolidación", href: "/modelos/modelo-653" },
      { label: "Modelo 660 — Inventario", href: "/modelos/modelo-660" },
    ],
  },
  {
    header: "Legal",
    links: [
      { label: "Privacidad", href: "/legal/privacidad" },
      { label: "Términos", href: "/legal/terminos" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
  {
    header: "Contacto",
    links: [
      { label: "Formulario de contacto", href: "/contacto" },
      { label: "soporte@ulpiano.es", href: "mailto:soporte@ulpiano.es" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-mist/10">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="font-dm-sans font-bold text-lg mb-2">ULPIANO</h3>
            <p className="text-sm text-white/60 mb-4">
              El sistema operativo de las herencias.
            </p>
            <p className="text-xs text-white/50">
              &copy; 2026 Ulpiano. Todos los derechos reservados.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.header}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {col.header}
              </h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white/90 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-mist/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            Ulpiano &copy; 2026. Plataforma Integral de Gestión Sucesoria
          </p>
          <button
            type="button"
            id="open-cookie-settings"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-cookie-settings"))
            }
            className="text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-2 cursor-pointer"
          >
            Ajustes de cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
