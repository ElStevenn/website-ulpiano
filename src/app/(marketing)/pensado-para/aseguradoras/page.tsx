import type { Metadata } from "next";
import { AseguradorasClient } from "./AseguradorasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Gestión sucesoria para aseguradoras",
  description:
    "Complemento a pólizas de vida y decesos: expediente estructurado, fiscalidad calculada y seguimiento del beneficiario.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/aseguradoras",
    languages: {
      es: "https://ulpiano.es/pensado-para/aseguradoras",
      ca: "https://ulpiano.es/ca/pensat-per/asseguradores",
      "x-default": "https://ulpiano.es/pensado-para/aseguradoras",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/pensado-para/aseguradoras",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
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
