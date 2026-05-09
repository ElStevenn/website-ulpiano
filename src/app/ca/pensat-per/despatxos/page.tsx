import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { DespatxosClientCa } from "./DespatxosClientCa";

export const metadata: Metadata = {
  title: "Programari d'Herències per a Despatxos d'Advocats | Ulpiano",
  description:
    "Digitalitza la gestió d'herències al teu despatx. Expedients successoris estructurats, diagrames interactius, simulacions fiscals i documents generats automàticament.",
  alternates: {
    canonical: "https://ulpiano.es/ca/pensat-per/despatxos",
    languages: {
      es: "https://ulpiano.es/pensado-para/despachos",
      ca: "https://ulpiano.es/ca/pensat-per/despatxos",
    },
  },
};

export default function DespatxosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inici", href: "/ca" },
          { name: "Pensat per", href: "/ca/pensat-per" },
          { name: "Despatxos d'Advocats", href: "/ca/pensat-per/despatxos" },
        ]}
      />
      <DespatxosClientCa />
      
      <CrossLink
        href="/ca/recursos/checklist-expedient-successori"
        label="Descarrega la checklist de l'expedient successori"
        description="47 punts de control per no deixar caps per lligar en cap expedient."
      />
    </>
  );
}
