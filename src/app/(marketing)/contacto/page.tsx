import type { Metadata } from "next";
import { ContactoClient } from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con el equipo de Ulpiano. Resolvemos tus dudas sobre la plataforma de gestión sucesoria integral para despachos, asesorías y notarías.",
  alternates: {
    canonical: "https://ulpiano.es/contacto",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
