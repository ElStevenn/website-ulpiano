import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { ProcessamentDocumentalClientCa } from "./ProcessamentDocumentalClientCa";

export const metadata: Metadata = {
  title: "Processament Intel·ligent de Documents | Digitalitza la gestió documental successòria | Ulpiano",
  description:
    "Digitalitza, classifica i extreu informació clau de certificats de defunció, testaments, escriptures i més. Tecnologia OCR i IA per agilitzar la tramitació d'herències.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/processament-documental",
    languages: {
      es: "https://ulpiano.es/soluciones/procesamiento-documental",
      ca: "https://ulpiano.es/ca/solucions/processament-documental",
    },
  },
};

export default function ProcessamentDocumentalPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Processament documental", href: "/ca/solucions/processament-documental" },
        ]}
      />
      
      <ProcessamentDocumentalClientCa />

      <CrossLink
        href="/ca/solucions/documentacio-successoria"
        label="Genera documentació successòria automàticament"
        description="Un cop estructurades les dades dels documents amb OCR, Ulpiano genera tota la documentació de l'expedient."
      />
    </>
  );
}
