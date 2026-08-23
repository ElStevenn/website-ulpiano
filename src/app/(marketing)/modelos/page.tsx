import type { Metadata } from "next";
import { ModelosHubClient } from "./ModelosHubClient";

export const metadata: Metadata = {
  title: "Modelos 650, 651, 652, 653 y 660",
  description:
    "Guía de los modelos del ISD: 650, 651, 652, 653 y 660. Cuándo se presentan y cómo Ulpiano los genera desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos",
    languages: {
      es: "https://ulpiano.es/modelos",
      ca: "https://ulpiano.es/ca/models",
      "x-default": "https://ulpiano.es/modelos",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/modelos",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function ModelosPage() {
  return <ModelosHubClient />;
}
