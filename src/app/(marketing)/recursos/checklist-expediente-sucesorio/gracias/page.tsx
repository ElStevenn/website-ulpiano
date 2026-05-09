import type { Metadata } from "next";
import { GraciasClient } from "./GraciasClient";

export const metadata: Metadata = {
  title: "Checklist descargada — Gracias",
  description:
    "Tu checklist del expediente sucesorio está lista para descargar. Revisa también tu correo.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return <GraciasClient />;
}
