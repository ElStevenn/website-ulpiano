import type { Metadata } from "next";
import { PlanificadorClientCa } from "./PlanificadorClientCa";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";

export const metadata: Metadata = {
  title:
    "Planificació Successòria | Consolidació patrimonial i escenaris successoris | Ulpiano",
  description:
    "Consolida béns, drets i deutes del causant en un únic lloc. Calcula llegítimes segons el CCCat, compara escenaris de distribució i genera la documentació de l'expedient.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/planificacio-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/planificacion-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/planificacio-successoria",
    },
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
