import type { Metadata } from "next";
import { ProcesamientoDocumentalClient } from "./ProcesamientoDocumentalClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Procesamiento Inteligente de Documentos | Digitaliza la gestión documental sucesoria",
  description:
    "Digitaliza, clasifica y extrae información clave de certificados de defunción, testamentos, escrituras y más. Tecnología OCR e IA para agilizar la tramitación de herencias.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/procesamiento-documental",
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
