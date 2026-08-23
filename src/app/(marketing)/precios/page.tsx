import type { Metadata } from "next";
import { PreciosClient } from "./PreciosClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Precios y planes",
  description:
    "Planes Free, Esencial, Avanzado y Pro. SaaS de gestión sucesoria con motor del ISD y modelos AEAT. Precios públicos, sin permanencia.",
  alternates: {
    canonical: "https://ulpiano.es/precios",
    languages: {
      es: "https://ulpiano.es/precios",
      ca: "https://ulpiano.es/ca/preus",
      "x-default": "https://ulpiano.es/precios",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Precios y planes",
    description:
      "Free, Esencial, Avanzado y Pro. La plataforma de gestión sucesoria con motor normativo integrado. Precios públicos y transparentes.",
    url: "https://ulpiano.es/precios",
    type: "website",
  },
};

export default function PreciosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Precios", href: "/precios" },
        ]}
      />
      <PreciosClient />
    </>
  );
}
