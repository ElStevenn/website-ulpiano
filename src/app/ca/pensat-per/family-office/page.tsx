import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { FamilyOfficeClientCa } from "./FamilyOfficeClientCa";

export const metadata: Metadata = {
  title: "Planificació successòria per a family office",
  description:
    "Escenaris fiscals comparats, patrimoni complex i empresa familiar amb impacte de l'ISD calculat. Ulpiano per a family office.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/family-office",
    languages: {
      es: "https://ulpiano.es/pensado-para/family-office",
      ca: "https://ulpiano.es/ca/pensat-per/family-office",
      "x-default": "https://ulpiano.es/pensado-para/family-office",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/pensat-per/family-office",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function FamilyOfficePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Family Office", href: "/ca/pensat-per/family-office" },
        ]}
      />
      <FamilyOfficeClientCa />
    </>
  );
}
