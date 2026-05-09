import type { Metadata } from "next";
import { DespachosClient } from "./DespachosClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Software Herencias para Despachos de Abogados | Ulpiano",
  description:
    "Digitaliza la gestión de herencias en tu despacho. Expedientes sucesorios estructurados, diagramas interactivos, simulaciones fiscales y documentos generados automáticamente.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/despachos",
    languages: {
      es: "https://ulpiano.es/pensado-para/despachos",
      ca: "https://ulpiano.es/ca/pensat-per/despatxos",
    },
  },
};

export default function DespachosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Despachos", href: "/pensado-para/despachos" },
        ]}
      />
      <DespachosClient />
      <CrossLink
        href="/recursos/checklist-expediente-sucesorio"
        label="Descarga la checklist del expediente sucesorio"
        description="47 puntos de control para no dejar cabos sueltos en ningún expediente."
      />
    </>
  );
}
