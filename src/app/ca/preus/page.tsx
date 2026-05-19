import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PreusClientCa } from "./PreusClientCa";

export const metadata: Metadata = {
  title: "Preus i plans",
  description:
    "Plans d'Ulpiano: Free, Esencial, Avançat i Pro. Subscripció SaaS amb generació de models AEAT i motor fiscal de l'ISD integrat. Preus públics, sense permanència.",
  alternates: {
    canonical: "https://ulpiano.es/ca/preus",
    languages: {
      es: "https://ulpiano.es/precios",
      ca: "https://ulpiano.es/ca/preus",
    },
  },
  openGraph: {
    title: "Preus i plans | Ulpiano",
    description:
      "Free, Esencial, Avançat i Pro. La plataforma de gestió successòria amb motor normatiu integrat. Preus públics i transparents.",
    url: "https://ulpiano.es/ca/preus",
    locale: "ca_ES",
    type: "website",
  },
};

export default function PreusPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Preus", href: "/ca/preus" },
        ]}
      />
      <PreusClientCa />
    </>
  );
}
