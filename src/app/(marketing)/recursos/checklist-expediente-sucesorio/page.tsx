import type { Metadata } from "next";
import { ChecklistSqueezeClient } from "./ChecklistSqueezeClient";

export const metadata: Metadata = {
  title: "Checklist del expediente sucesorio (47 puntos)",
  description:
    "Checklist gratuita de 47 puntos para no dejar cabos sueltos en la sucesión catalana. CCCat y Llei 19/2010 actualizados.",
  alternates: {
    canonical: "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
    languages: {
      es: "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
      ca: "https://ulpiano.es/ca/recursos/checklist-expedient-successori",
      "x-default": "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
    },
  },
  openGraph: {
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
    title: "Checklist del expediente sucesorio (47 puntos)",
    description:
      "La checklist profesional para gestionar herencias en Cataluña sin dejar cabos sueltos. Normativa actualizada.",
    url: "https://ulpiano.es/recursos/checklist-expediente-sucesorio",
  },
};

export default function ChecklistSqueezePage() {
  return <ChecklistSqueezeClient />;
}
