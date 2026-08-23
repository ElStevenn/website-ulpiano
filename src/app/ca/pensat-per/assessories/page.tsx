import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { AssessoriesClientCa } from "./AssessoriesClientCa";

export const metadata: Metadata = {
  title: "Assessoria fiscal: model 650 automàtic",
  description:
    "ISD recalculat davant canvis normatius, alertes de termini i Model 650 autocomplet. Ulpiano per a assessors fiscals.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/assessories",
    languages: {
      es: "https://ulpiano.es/pensado-para/asesorias",
      ca: "https://ulpiano.es/ca/pensat-per/assessories",
      "x-default": "https://ulpiano.es/pensado-para/asesorias",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/pensat-per/assessories",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
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
