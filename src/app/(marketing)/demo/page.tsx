import type { Metadata } from "next";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "Solicita tu demo de gestión sucesoria",
  description:
    "Reserva 25 minutos sobre la plataforma real: inventario, ISD con norma citada y cuaderno particional. Sin compromiso.",
  alternates: {
    canonical: "https://ulpiano.es/demo",
    languages: {
      es: "https://ulpiano.es/demo",
      ca: "https://ulpiano.es/ca/demo",
      "x-default": "https://ulpiano.es/demo",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/demo",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function DemoPage() {
  return <DemoClient />;
}
