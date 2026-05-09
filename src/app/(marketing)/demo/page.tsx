import type { Metadata } from "next";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "Solicita tu Demo | Ulpiano — Gestión Sucesoria",
  description:
    "Reserva una sesión de 25 minutos sobre la plataforma real. Verás cómo se inventaría un patrimonio, se calcula el ISD con la norma citada y se genera el cuaderno particional. Sin compromiso.",
  alternates: {
    canonical: "https://ulpiano.es/demo",
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
