import type { Metadata } from "next";
import IaClient from "./IaClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "Ulpiano IA | Agente inteligente dentro del expediente sucesorio",
  description:
    "Lectura de documentos, redacción asistida y consulta normativa con cita. Ulpiano IA se aplica donde aporta valor; el cálculo fiscal, con motores deterministas.",
  alternates: {
    canonical: "https://ulpiano.es/ia",
    languages: {
      es: "https://ulpiano.es/ia",
      ca: "https://ulpiano.es/ca/ia",
    },
  },
  openGraph: {
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
