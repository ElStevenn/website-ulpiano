import type { Metadata } from "next";
import { ChecklistSqueezeClient } from "./ChecklistSqueezeClient";

export const metadata: Metadata = {
  title: "Checklist del Expediente Sucesorio en Cataluña — 47 Puntos de Control",
  description:
    "Descarga gratis la checklist que usan los despachos para no dejar cabos sueltos en la gestión sucesoria. 47 puntos de control con normativa catalana actualizada (CCCat · Llei 19/2010).",
  alternates: {
    canonical: "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
  },
  openGraph: {
    title: "Checklist del Expediente Sucesorio en Cataluña — 47 Puntos de Control",
    description:
      "La checklist profesional para gestionar herencias en Cataluña sin dejar cabos sueltos. Normativa actualizada.",
    url: "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
  },
};

export default function ChecklistSqueezePage() {
  return <ChecklistSqueezeClient />;
}
