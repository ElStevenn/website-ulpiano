import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { FamilyOfficeClientCa } from "./FamilyOfficeClientCa";

export const metadata: Metadata = {
  title: "Planificació Successòria per a Family Office | Ulpiano",
  description:
    "Planificació successòria pre-mortem per a family offices. Escenaris fiscals comparats, patrimoni complex inventariat, empresa familiar distribuïda amb impacte fiscal calculat.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/family-office",
    languages: {
      es: "https://ulpiano.es/pensado-para/family-office",
      ca: "https://ulpiano.es/ca/pensat-per/family-office",
    },
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
