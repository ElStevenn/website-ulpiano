import type { Metadata } from "next";
import { PlanificadorClientCa } from "./PlanificadorClientCa";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title: "Planificació successòria i inventari",
  description:
    "Inventari únic del causant, llegítimes segons el CCCat i escenaris de distribució. La base de l'expedient successori a Ulpiano.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/planificacio-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/planificacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/planificacio-successoria",
      "x-default": "https://ulpiano.es/soluciones/planificacion-sucesoria",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/solucions/planificacio-successoria",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function PlanificacioSuccessoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Planificació successòria", href: "/ca/solucions/planificacio-successoria" },
        ]}
      />
      
      <PlanificadorClientCa />

      {/* CROSSLINK */}
      <CrossLink
        href="/ca/models/model-660"
        label="Genera l'inventari de béns amb Ulpiano"
        description="El Model 660 és l'inventari patrimonial que acompanya cada expedient successori."
      />
    </>
  );
}
