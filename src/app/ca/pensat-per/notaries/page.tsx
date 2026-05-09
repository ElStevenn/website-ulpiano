import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { NotariesClientCa } from "./NotariesClientCa";

export const metadata: Metadata = {
  title: "Gestió Digital d'Herències per a Notaries | Ulpiano",
  description:
    "L'expedient post-testament actiu, la documentació centralitzada i xifrada, la generació d'escriptures des de dades estructurades. Ulpiano per a notaries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/notaries",
    languages: {
      es: "https://ulpiano.es/pensado-para/notarias",
      ca: "https://ulpiano.es/ca/pensat-per/notaries",
    },
  },
};

export default function NotariesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Notaries", href: "/ca/pensat-per/notaries" },
        ]}
      />
      <NotariesClientCa />
    </>
  );
}
