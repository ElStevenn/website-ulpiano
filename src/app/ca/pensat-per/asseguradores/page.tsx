import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { AsseguradoresClientCa } from "./AsseguradoresClientCa";

export const metadata: Metadata = {
  title: "Gestió successòria per a asseguradores",
  description:
    "Complement a pòlisses de vida i decessos: expedient estructurat, fiscalitat calculada i seguiment del beneficiari.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/asseguradores",
    languages: {
      es: "https://ulpiano.es/pensado-para/aseguradoras",
      ca: "https://ulpiano.es/ca/pensat-per/asseguradores",
      "x-default": "https://ulpiano.es/pensado-para/aseguradoras",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/pensat-per/asseguradores",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
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
