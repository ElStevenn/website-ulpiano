import type { Metadata } from "next";
import { DocumentacionClient } from "./DocumentacionClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Documentación Sucesoria | Cuaderno Particional y Modelos Fiscales",
  description:
    "Genera el cuaderno particional, la escritura de partición, el inventario formal y los Modelos 650 y 660 desde los datos del expediente sucesorio. Sin copiar. Sin transcribir.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones/documentacion-sucesoria",
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
