import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Ulpiano | Plataforma Integral de Gestió Successòria",
    template: "%s | Ulpiano",
  },
  description:
    "La plataforma que estructura, valida i documenta el procés successori complet. Per a advocats, assessors i notaries que gestionen herències.",
  alternates: {
    canonical: "https://ulpiano.es/ca",
    languages: {
      es: "https://ulpiano.es",
      ca: "https://ulpiano.es/ca",
    },
  },
  openGraph: {
    title: "Ulpiano | Plataforma Integral de Gestió Successòria",
    description: "El sistema operatiu de les herències.",
    url: "https://ulpiano.es/ca",
    siteName: "Ulpiano",
    locale: "ca_ES",
    type: "website",
  },
};

export default function CaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
