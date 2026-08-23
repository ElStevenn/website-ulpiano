import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PreusClientCa } from "./PreusClientCa";

export const metadata: Metadata = {
  title: "Preus i plans",
  description:
    "Plans Free, Esencial, Avançat i Pro. SaaS de gestió successòria amb motor de l'ISD i models AEAT. Preus públics, sense permanència.",
  alternates: {
    canonical: "https://ulpiano.es/ca/preus",
    languages: {
      es: "https://ulpiano.es/precios",
      ca: "https://ulpiano.es/ca/preus",
      "x-default": "https://ulpiano.es/precios",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Preus i plans",
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
