import type { Metadata } from "next";
import { DemoClient } from "@/app/(marketing)/demo/DemoClient";

export const metadata: Metadata = {
  title: "Sol·licita la teva demo de gestió successòria",
  description:
    "Reserva 25 minuts sobre la plataforma real: inventari, ISD amb norma citada i quadern particional. Sense compromís.",
  alternates: {
    canonical: "https://ulpiano.es/ca/demo",
    languages: {
      es: "https://ulpiano.es/demo",
      ca: "https://ulpiano.es/ca/demo",
      "x-default": "https://ulpiano.es/demo",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/demo",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
