import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { DocumentacionClientCa } from "./DocumentacionClientCa";

export const metadata: Metadata = {
  title: "Documentació Successòria | Quadern Particional i Models Fiscals | Ulpiano",
  description:
    "Genera el quadern particional, l'escriptura de partició, l'inventari formal i els Models 650 i 660 des de les dades de l'expedient successori. Sense copiar. Sense transcriure.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/documentacio-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/documentacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/documentacio-successoria",
    },
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
