import type { Metadata } from "next";
import { ContactoClient } from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con el equipo de Ulpiano. Resolvemos tus dudas sobre la plataforma de gestión sucesoria integral para despachos, asesorías y notarías.",
  alternates: {
    canonical: "https://ulpiano.es/contacto",
    languages: {
      es: "https://ulpiano.es/contacto",
      ca: "https://ulpiano.es/ca/contacte",
      "x-default": "https://ulpiano.es/contacto",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/contacto",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

export default function ContactoPage() {
  return <ContactoClient />;
}
