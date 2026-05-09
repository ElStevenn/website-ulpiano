import type { Metadata } from "next";
import { AsesoriasClient } from "./AsesoriasClient";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Asesoría Fiscal de Herencias: Modelo 650 Automatizado | Ulpiano",
  description:
    "Recálculo automático del ISD ante cambios normativos, alertas de plazo, trazabilidad auditable ante la AEAT y Modelo 650 autocompletado. Ulpiano para asesores fiscales.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/asesorias",
    languages: {
      es: "https://ulpiano.es/pensado-para/asesorias",
      ca: "https://ulpiano.es/ca/pensat-per/assessories",
    },
  },
};

export default function AsesoriasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Pensado para", href: "/" },
          { name: "Asesorías", href: "/pensado-para/asesorias" },
        ]}
      />
      <AsesoriasClient />
    </>
  );
}
