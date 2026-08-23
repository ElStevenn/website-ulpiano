import type { Metadata } from "next";
import IaClientCa from "./IaClientCa";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Ulpiano IA a l'expedient successori",
  description:
    "Lectura, redacció assistida i consulta normativa amb citació. L'ISD i les llegítimes es calculen amb motors deterministes auditables.",
  alternates: {
    canonical: "https://ulpiano.es/ca/ia",
    languages: {
      es: "https://ulpiano.es/ia",
      ca: "https://ulpiano.es/ca/ia",
      "x-default": "https://ulpiano.es/ia",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Ulpiano IA | Intel·ligència artificial aplicada a l'expedient",
    description:
      "IA on aporta valor. Motor determinista on l'error no es perdona.",
    url: "https://ulpiano.es/ca/ia",
    siteName: "Ulpiano",
    locale: "ca_ES",
    type: "website",
  },
};

export default function IaPageCa() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Ulpiano IA", href: "/ca/ia" },
        ]}
      />
      <IaClientCa />
    </>
  );
}
