import type { Metadata } from "next";
import { ModelosHubClient } from "./ModelosHubClient";

export const metadata: Metadata = {
  title:
    "Modelos del Impuesto sobre Sucesiones y Donaciones | Guía Completa",
  description:
    "Guía de los Modelos 650, 651, 652, 653 y 660 del Impuesto sobre Sucesiones y Donaciones. Qué son, cuándo se presentan y cómo Ulpiano los genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos",
  },
};

export default function ModelosPage() {
  return <ModelosHubClient />;
}
