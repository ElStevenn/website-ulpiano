import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import BlogIndexCa from "@/features/blog/BlogIndexCa";

export const metadata: Metadata = {
  title: "Blog de dret successori, pràctica i tecnologia",
  description:
    "Articles d'Ulpiano sobre dret successori, gestió d'expedients, tecnologia jurídica i pràctica professional.",
  alternates: {
    canonical: "https://ulpiano.es/ca/recursos/blog",
    languages: {
      es: "https://ulpiano.es/recursos/blog",
      ca: "https://ulpiano.es/ca/recursos/blog",
      "x-default": "https://ulpiano.es/recursos/blog",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Blog",
    description:
      "Idees i criteri per gestionar herències: dret successori, pràctica professional i tecnologia.",
    url: "https://ulpiano.es/ca/recursos/blog",
    locale: "ca_ES",
    type: "website",
  },
};

export default function BlogIndexCaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Blog", href: "/ca/recursos/blog" },
        ]}
      />
      <BlogIndexCa />
    </>
  );
}
