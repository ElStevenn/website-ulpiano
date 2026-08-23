import type { Metadata } from "next";
import { PlanificadorClient } from "./PlanificadorClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Planificador de herencias e inventario",
  description:
    "Inventario único del causante, legítimas según el CCCat y escenarios de distribución. La base del expediente sucesorio en Ulpiano.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/planificacion-sucesoria",
    languages: {
      es: "https://ulpiano.es/soluciones/planificacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/planificacio-successoria",
      "x-default": "https://ulpiano.es/soluciones/planificacion-sucesoria",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/soluciones/planificacion-sucesoria",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function PlanificacionSucesoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Soluciones", href: "/soluciones" },
          { name: "Planificación sucesoria", href: "/soluciones/planificacion-sucesoria" },
        ]}
      />
      <PlanificadorClient />
      <CrossLink
        href="/modelos/modelo-660"
        label="Genera el inventario de bienes con Ulpiano"
        description="El Modelo 660 es el inventario patrimonial que acompaña a cada expediente sucesorio."
      />
    </>
  );
}
