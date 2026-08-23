import type { Metadata } from "next";
import IaClient from "./IaClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Ulpiano IA en el expediente sucesorio",
  description:
    "Lectura, redacción asistida y consulta normativa con cita. El ISD y las legítimas se calculan con motores deterministas auditables.",
  alternates: {
    canonical: "https://ulpiano.es/ia",
    languages: {
      es: "https://ulpiano.es/ia",
      ca: "https://ulpiano.es/ca/ia",
      "x-default": "https://ulpiano.es/ia",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Ulpiano IA | Inteligencia artificial aplicada al expediente",
    description:
      "IA donde aporta valor. Motor determinista donde el error no se perdona.",
    url: "https://ulpiano.es/ia",
    siteName: "Ulpiano",
    locale: "es_ES",
    type: "website",
  },
};

export default function IaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Ulpiano IA", href: "/ia" },
        ]}
      />
      <IaClient />
    </>
  );
}
