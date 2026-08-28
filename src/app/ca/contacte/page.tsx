import type { Metadata } from "next";
import { ContactoClient } from "@/app/(marketing)/contacto/ContactoClient";

export const metadata: Metadata = {
  title: "Contacte",
  description:
    "Contacta amb l'equip d'Ulpiano. Resolem els teus dubtes sobre la plataforma de gestió successòria integral per a despatxos, assessories i notaries.",
  alternates: {
    canonical: "https://ulpiano.es/ca/contacte",
    languages: {
      es: "https://ulpiano.es/contacto",
      ca: "https://ulpiano.es/ca/contacte",
      "x-default": "https://ulpiano.es/contacto",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca/contacte",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },
};

export default function ContactePage() {
  return <ContactoClient />;
}
