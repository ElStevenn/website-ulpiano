import type { Metadata } from "next";
import { FunerariasClient } from "./FunerariasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Tramitación de herencias para funerarias",
  description:
    "Amplía tu servicio funerario con la tramitación sucesoria digital. Expedientes estructurados, documentación procesada, ISD calculado. Ulpiano para funerarias.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/funerarias",
    languages: {
      es: "https://ulpiano.es/pensado-para/funerarias",
      ca: "https://ulpiano.es/ca/pensat-per/funeraries",
      "x-default": "https://ulpiano.es/pensado-para/funerarias",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/pensado-para/funerarias",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function FunerariasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Funerarias", href: "/pensado-para/funerarias" },
        ]}
      />
      <FunerariasClient />
    </>
  );
}
