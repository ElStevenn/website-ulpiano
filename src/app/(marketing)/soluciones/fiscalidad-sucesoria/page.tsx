import type { Metadata } from "next";
import { FiscalidadClient } from "./FiscalidadClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Fiscalidad sucesoria y modelos ISD",
  description:
    "Autoliquidación de los modelos 650, 651, 652, 653 y 660 con normativa estatal y autonómica. ISD calculado dentro del expediente.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
    languages: {
      es: "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/fiscalitat-successoria",
      "x-default": "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function FiscalidadSucesoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Soluciones", href: "/soluciones" },
          { name: "Fiscalidad sucesoria", href: "/soluciones/fiscalidad-sucesoria" },
        ]}
      />
      <FiscalidadClient />
      <CrossLink
        href="/modelos"
        label="Guía completa de modelos fiscales sucesorios"
        description="¿Quieres entender qué es el Modelo 650, 651, 660 y cuándo se presenta cada uno?"
      />
    </>
  );
}
