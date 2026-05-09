import type { Metadata } from "next";
import IaClientCa from "./IaClientCa";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Ulpiano IA | Agent intel·ligent dins de l'expedient successori",
  description:
    "Lectura de documents, redacció assistida, consulta normativa amb citació i validació de coherència. Ulpiano IA s'aplica on la intel·ligència artificial aporta valor. El càlcul fiscal i les legítimes es resolen amb motors deterministes auditables.",
  alternates: {
    canonical: "https://ulpiano.es/ca/ia",
    languages: {
      es: "https://ulpiano.es/ia",
      ca: "https://ulpiano.es/ca/ia",
    },
  },
  openGraph: {
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
