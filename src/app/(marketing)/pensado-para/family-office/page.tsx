import type { Metadata } from "next";
import { FamilyOfficeClient } from "./FamilyOfficeClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Planificación sucesoria para family office",
  description:
    "Escenarios fiscales comparados, patrimonio complejo e empresa familiar con impacto del ISD calculado. Ulpiano para family office.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/family-office",
    languages: {
      es: "https://ulpiano.es/pensado-para/family-office",
      ca: "https://ulpiano.es/ca/pensat-per/family-office",
      "x-default": "https://ulpiano.es/pensado-para/family-office",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/pensado-para/family-office",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function FamilyOfficePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Family Office", href: "/pensado-para/family-office" },
        ]}
      />
      <FamilyOfficeClient />
    </>
  );
}
