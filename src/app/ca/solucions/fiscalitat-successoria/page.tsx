import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { FiscalitatClientCa } from "./FiscalitatClientCa";

export const metadata: Metadata = {
  title: "Fiscalitat Successòria | Autoliquidació de Models 650, 651, 660 | Ulpiano",
  description:
    "Calcula, presenta i liquida els impostos successoris dels teus clients de manera automatitzada. Models 650, 651, 652, 653 i 660 amb normativa estatal i autonòmica actualitzada.",
  alternates: {
    canonical: "https://ulpiano.es/ca/solucions/fiscalitat-successoria",
    languages: {
      es: "https://ulpiano.es/soluciones/fiscalidad-sucesoria",
      ca: "https://ulpiano.es/ca/solucions/fiscalitat-successoria",
    },
  },
};

export default function FiscalitatSuccessoriaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Solucions", href: "/ca/solucions" },
          { name: "Fiscalitat successòria", href: "/ca/solucions/fiscalitat-successoria" },
        ]}
      />
      
      <FiscalitatClientCa />

      <CrossLink
        href="/ca/models"
        label="Guia completa de models fiscals successoris"
        description="Vols entendre què és el Model 650, 651, 660 i quan es presenta cadascun?"
      />
    </>
  );
}
