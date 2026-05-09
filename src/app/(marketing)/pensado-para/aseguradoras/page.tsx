import type { Metadata } from "next";
import { AseguradorasClient } from "./AseguradorasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Gestión Sucesoria para Aseguradoras y Pólizas de Vida | Ulpiano",
  description:
    "Complementa tus pólizas de vida y decesos con la gestión sucesoria digital. Expedientes estructurados, fiscalidad calculada, fidelización real. Ulpiano para aseguradoras.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/aseguradoras",
    languages: {
      es: "https://ulpiano.es/pensado-para/aseguradoras",
      ca: "https://ulpiano.es/ca/pensat-per/asseguradores",
    },
  },
};

export default function AseguradorasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Aseguradoras", href: "/pensado-para/aseguradoras" },
        ]}
      />
      <AseguradorasClient />
    </>
  );
}
