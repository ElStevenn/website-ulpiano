import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { AssessoriesClientCa } from "./AssessoriesClientCa";

export const metadata: Metadata = {
  title: "Assessoria Fiscal d'Herències: Model 650 Automatitzat | Ulpiano",
  description:
    "Recàlcul automàtic de l'ISD davant canvis normatius, alertes de termini, traçabilitat auditable davant l'ATC i Model 650 autocomplet. Ulpiano per a assessors fiscals.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/assessories",
    languages: {
      es: "https://ulpiano.es/pensado-para/asesorias",
      ca: "https://ulpiano.es/ca/pensat-per/assessories",
    },
  },
};

export default function AssessoriasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Assessories", href: "/ca/pensat-per/assessories" },
        ]}
      />
      <AssessoriesClientCa />
    </>
  );
}
