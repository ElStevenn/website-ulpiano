import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import BlogIndex from "@/features/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Blog de derecho sucesorio, práctica y tecnología",
  description:
    "Artículos de Ulpiano sobre derecho sucesorio, gestión de expedientes, tecnología jurídica y práctica profesional.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/blog",
    languages: {
      es: "https://ulpiano.es/recursos/blog",
      ca: "https://ulpiano.es/ca/recursos/blog",
    },
  },
  openGraph: {
    title: "Blog | Ulpiano",
    description:
      "Ideas y criterio para gestionar herencias: derecho sucesorio, práctica profesional y tecnología.",
    url: "https://ulpiano.es/recursos/blog",
    locale: "es_ES",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/recursos/blog" },
        ]}
      />
      <BlogIndex />
    </>
  );
}
