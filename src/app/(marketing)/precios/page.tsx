import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes y precios de Ulpiano, la plataforma integral de gestión sucesoria para despachos, asesorías y notarías.",
  robots: { index: false, follow: true },
};

export default function PreciosPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-ink">Precios — En construcción</h1>
    </div>
  );
}
