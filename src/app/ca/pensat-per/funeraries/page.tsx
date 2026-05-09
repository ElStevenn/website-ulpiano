import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { FunerariesClientCa } from "./FunerariesClientCa";

export const metadata: Metadata = {
  title: "Tramitació d'Herències per a Funeràries | Ulpiano",
  description:
    "Amplia el teu servei funerari amb la tramitació successòria digital. Expedients estructurats, documentació processada, ISD calculat. Ulpiano per a funeràries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/funeraries",
    languages: {
      es: "https://ulpiano.es/pensado-para/funerarias",
      ca: "https://ulpiano.es/ca/pensat-per/funeraries",
    },
  },
};

export default function FunerariesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Funeràries", href: "/ca/pensat-per/funeraries" },
        ]}
      />
      <FunerariesClientCa />
    </>
  );
}
