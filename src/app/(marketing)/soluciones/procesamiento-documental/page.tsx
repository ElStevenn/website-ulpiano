import type { Metadata } from "next";
import { ProcesamientoDocumentalClient } from "./ProcesamientoDocumentalClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Procesamiento documental sucesorio",
  description:
    "OCR e IA para clasificar certificados, testamentos y escrituras y extraer datos al expediente sucesorio, sin teclear de nuevo.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/procesamiento-documental",
    languages: {
      es: "https://ulpiano.es/soluciones/procesamiento-documental",
      ca: "https://ulpiano.es/ca/solucions/processament-documental",
      "x-default": "https://ulpiano.es/soluciones/procesamiento-documental",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/soluciones/procesamiento-documental",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function ProcesamientoDocumentalPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Soluciones", href: "/soluciones" },
          { name: "Procesamiento documental", href: "/soluciones/procesamiento-documental" },
        ]}
      />
      <ProcesamientoDocumentalClient />
    </>
  );
}
