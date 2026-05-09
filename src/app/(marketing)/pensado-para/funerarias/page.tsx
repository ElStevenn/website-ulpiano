import type { Metadata } from "next";
import { FunerariasClient } from "./FunerariasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Tramitación de Herencias para Funerarias | Ulpiano",
  description:
    "Amplía tu servicio funerario con la tramitación sucesoria digital. Expedientes estructurados, documentación procesada, ISD calculado. Ulpiano para funerarias.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/funerarias",
    languages: {
      es: "https://ulpiano.es/pensado-para/funerarias",
      ca: "https://ulpiano.es/ca/pensat-per/funeraries",
    },
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
