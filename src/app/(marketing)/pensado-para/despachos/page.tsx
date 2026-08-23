import type { Metadata } from "next";
import { DespachosClient } from "./DespachosClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Software de herencias para despachos",
  description:
    "Expedientes sucesorios estructurados, simulaciones fiscales y documentos generados. Ulpiano para despachos de abogados.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/despachos",
    languages: {
      es: "https://ulpiano.es/pensado-para/despachos",
      ca: "https://ulpiano.es/ca/pensat-per/despatxos",
      "x-default": "https://ulpiano.es/pensado-para/despachos",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/pensado-para/despachos",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
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
