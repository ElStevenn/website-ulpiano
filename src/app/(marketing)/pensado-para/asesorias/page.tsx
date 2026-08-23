import type { Metadata } from "next";
import { AsesoriasClient } from "./AsesoriasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Asesoría fiscal: modelo 650 automático",
  description:
    "ISD recalculado ante cambios normativos, alertas de plazo y Modelo 650 autocompletado. Ulpiano para asesores fiscales.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/asesorias",
    languages: {
      es: "https://ulpiano.es/pensado-para/asesorias",
      ca: "https://ulpiano.es/ca/pensat-per/assessories",
      "x-default": "https://ulpiano.es/pensado-para/asesorias",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/pensado-para/asesorias",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function AsesoriasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Asesorías", href: "/pensado-para/asesorias" },
        ]}
      />
      <AsesoriasClient />
    </>
  );
}
