import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Ulpiano | Plataforma Integral de Gestió Successòria",
    template: "%s | Ulpiano",
  },
  description:
    "La plataforma que estructura, valida i documenta el procés successori complet. Per a advocats, assessors i notaries que gestionen herències.",
  alternates: {
    languages: {
      es: "https://ulpiano.es",
      ca: "https://ulpiano.es/ca",
      "x-default": "https://ulpiano.es",
    },
  },
  openGraph: {
    siteName: "Ulpiano",
    locale: "ca_ES",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function CaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
