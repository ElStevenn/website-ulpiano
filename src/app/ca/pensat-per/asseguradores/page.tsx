import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { AsseguradoresClientCa } from "./AsseguradoresClientCa";

export const metadata: Metadata = {
  title: "Gestió Successòria per a Asseguradores i Pòlisses de Vida | Ulpiano",
  description:
    "Complementa les teves pòlisses de vida i decessos amb la gestió successòria digital. Expedients estructurats, fiscalitat calculada, fidelització real. Ulpiano per a asseguradores.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/asseguradores",
    languages: {
      es: "https://ulpiano.es/pensado-para/aseguradoras",
      ca: "https://ulpiano.es/ca/pensat-per/asseguradores",
    },
  },
};

export default function AsseguradoresPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Asseguradores", href: "/ca/pensat-per/asseguradores" },
        ]}
      />
      <AsseguradoresClientCa />
    </>
  );
}
