"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const columnsEs = [
  {
    header: "Producto",
    links: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Planificador", href: "/soluciones/planificacion-sucesoria" },
      { label: "Fiscalidad", href: "/soluciones/fiscalidad-sucesoria" },
      { label: "Activos digitales", href: "/soluciones/activos-digitales" },
      { label: "Precios", href: "/precios" },
      { label: "Ulpiano IA", href: "/ia" },
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
    header: "Recursos",
    links: [
      { label: "Blog", href: "/recursos/blog" },
      { label: "Checklist del expediente", href: "/recursos/checklist-expediente-sucesorio" },
      { label: "La legítima catalana", href: "/recursos/blog/la-legitima-catalana" },
      { label: "Gestión de herencias", href: "/recursos/blog/gestion-herencias-despacho" },
      { label: "Retener al heredero", href: "/recursos/blog/retencion-fidelizacion-cliente-asesorias" },
      { label: "Digitalización sucesoria", href: "/recursos/blog/digitalizacion-derecho-sucesorio" },
      { label: "IA para abogados", href: "/recursos/blog/ia-abogados-sucesiones" },
      { label: "Quarta falcídia", href: "/recursos/blog/quarta-falcidia" },
      { label: "Quadern particional", href: "/recursos/blog/quadern-particional-cataluna" },
    ],
  },
  {
    header: "Legal",
    links: [
      { label: "Aviso legal", href: "/legal/aviso-legal" },
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

const columnsCa = [
  {
    header: "Producte",
    links: [
      { label: "Solucions", href: "/ca/solucions" },
      { label: "Planificador", href: "/ca/solucions/planificacio-successoria" },
      { label: "Fiscalitat", href: "/ca/solucions/fiscalitat-successoria" },
      { label: "Actius digitals", href: "/ca/solucions/actius-digitals" },
      { label: "Preus", href: "/ca/preus" },
      { label: "Ulpiano IA", href: "/ca/ia" },
    ],
  },
  {
    header: "Per a qui",
    links: [
      { label: "Despatxos", href: "/ca/pensat-per/despatxos" },
      { label: "Notaries", href: "/ca/pensat-per/notaries" },
      { label: "Assessories", href: "/ca/pensat-per/assessories" },
      { label: "Family Office", href: "/ca/pensat-per/family-office" },
      { label: "Funeràries", href: "/ca/pensat-per/funeraries" },
      { label: "Asseguradores", href: "/ca/pensat-per/asseguradores" },
    ],
  },
  {
    header: "Models fiscals",
    links: [
      { label: "Model 650 — Successions", href: "/ca/models/model-650" },
      { label: "Model 651 — Donacions", href: "/ca/models/model-651" },
      { label: "Model 652 — Assegurances", href: "/ca/models/model-652" },
      { label: "Model 653 — Consolidació", href: "/ca/models/model-653" },
      { label: "Model 660 — Inventari", href: "/ca/models/model-660" },
    ],
  },
  {
    header: "Recursos",
    links: [
      { label: "Blog", href: "/ca/recursos/blog" },
      { label: "Checklist de l'expedient", href: "/ca/recursos/checklist-expedient-successori" },
      { label: "La llegítima catalana", href: "/ca/recursos/blog/la-legitima-catalana" },
      { label: "Gestió d'herències", href: "/ca/recursos/blog/gestio-herencies-despatx" },
      { label: "Retenir l'hereu", href: "/ca/recursos/blog/retencio-fidelitzacio-client-assessories" },
      { label: "Digitalització successòria", href: "/ca/recursos/blog/digitalitzacio-dret-successori" },
      { label: "IA per a advocats", href: "/ca/recursos/blog/ia-advocats-successions" },
      { label: "Quarta falcídia", href: "/ca/recursos/blog/quarta-falcidia" },
      { label: "Quadern particional", href: "/ca/recursos/blog/quadern-particional-catalunya" },
    ],
  },
  {
    header: "Legal",
    links: [
      { label: "Avís legal", href: "/ca/legal/avis-legal" },
      { label: "Privacitat", href: "/ca/legal/privacitat" },
      { label: "Termes", href: "/ca/legal/termes" },
      { label: "Cookies", href: "/ca/legal/cookies" },
    ],
  },
  {
    header: "Contacte",
    links: [
      { label: "Formulari de contacte", href: "/ca/contacte" },
      { label: "soporte@ulpiano.es", href: "mailto:soporte@ulpiano.es" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isCa = pathname === "/ca" || pathname.startsWith("/ca/");
  const cookieLabel = isCa ? "Ajustos de cookies" : "Ajustes de cookies";
  const cookieButton = (
    <button
      type="button"
      id="open-cookie-settings"
      onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
      className="text-xs text-white/50 hover:text-white/70 transition-colors underline underline-offset-2 cursor-pointer"
    >
      {cookieLabel}
    </button>
  );

  if (pathname === "/login") {
    return (
      <footer className="bg-ink text-white border-t border-mist/10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-center">{cookieButton}</div>
      </footer>
    );
  }

  const columns = isCa ? columnsCa : columnsEs;

  return (
    <footer className="bg-ink text-white border-t border-mist/10">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 mb-12">
          <div>
            <h3 className="font-dm-sans font-bold text-lg mb-2">ULPIANO</h3>
            <p className="text-sm text-white/60 mb-4">
              {isCa
                ? "El sistema operatiu de les herències."
                : "El sistema operativo de las herencias."}
            </p>
            <p className="text-xs text-white/50">
              {isCa
                ? "© 2026 Ulpiano. Tots els drets reservats."
                : "© 2026 Ulpiano. Todos los derechos reservados."}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.header}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
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
            {isCa
              ? "Ulpiano © 2026. Plataforma Integral de Gestió Successòria"
              : "Ulpiano © 2026. Plataforma Integral de Gestión Sucesoria"}
          </p>
          {cookieButton}
        </div>
      </div>
    </footer>
  );
}
