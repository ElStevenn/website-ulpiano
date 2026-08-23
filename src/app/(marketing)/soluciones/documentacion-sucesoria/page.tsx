import type { Metadata } from "next";
import { DocumentacionClient } from "./DocumentacionClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Cuaderno particional y documentación",
  description:
    "Cuaderno particional, escritura de partición e inventario formal desde los datos del expediente. Sin copiar ni transcribir.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/documentacion-sucesoria",
    languages: {
      es: "https://ulpiano.es/soluciones/documentacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/documentacio-successoria",
      "x-default": "https://ulpiano.es/soluciones/documentacion-sucesoria",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/soluciones/documentacion-sucesoria",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function DocumentacionSucesoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Soluciones", href: "/soluciones" },
          { name: "Documentación sucesoria", href: "/soluciones/documentacion-sucesoria" },
        ]}
      />
      <DocumentacionClient />
    </>
  );
}
