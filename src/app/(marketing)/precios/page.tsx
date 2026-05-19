import type { Metadata } from "next";
import { PreciosClient } from "./PreciosClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Precios y planes",
  description:
    "Planes de Ulpiano: Free, Esencial, Avanzado y Pro. Suscripción SaaS con generación de modelos AEAT y motor fiscal del ISD integrado. Precios públicos, sin permanencia.",
  alternates: {
    canonical: "https://ulpiano.es/precios",
    languages: {
      es: "https://ulpiano.es/precios",
      ca: "https://ulpiano.es/ca/preus",
    },
  },
  openGraph: {
    title: "Precios y planes | Ulpiano",
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
