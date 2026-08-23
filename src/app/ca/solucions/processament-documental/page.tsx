import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { ProcessamentDocumentalClientCa } from "./ProcessamentDocumentalClientCa";

export const metadata: Metadata = {
  title: "Processament documental successori",
  description:
    "OCR i IA per classificar certificats, testaments i escriptures i extreure dades a l'expedient successori, sense tornar-ho a teclejar.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/processament-documental",
    languages: {
      es: "https://ulpiano.es/soluciones/procesamiento-documental",
      ca: "https://ulpiano.es/ca/solucions/processament-documental",
      "x-default": "https://ulpiano.es/soluciones/procesamiento-documental",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/solucions/processament-documental",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
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
