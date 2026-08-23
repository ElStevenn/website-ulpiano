import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { DocumentacionClientCa } from "./DocumentacionClientCa";

export const metadata: Metadata = {
  title: "Quadern particional i documentació",
  description:
    "Quadern particional, escriptura de partició i inventari formal des de les dades de l'expedient. Sense copiar ni transcriure.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/documentacio-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/documentacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/documentacio-successoria",
      "x-default": "https://ulpiano.es/soluciones/documentacion-sucesoria",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/solucions/documentacio-successoria",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function DocumentacioSuccessoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Documentació successòria", href: "/ca/solucions/documentacio-successoria" },
        ]}
      />
      <DocumentacionClientCa />
      
      <CrossLink
        href="/ca/models/model-660"
        label="Veure integració amb Model 660"
        description="Els mateixos béns del quadern s'integren en l'autoliquidació fiscal oficial."
      />
    </>
  );
}
