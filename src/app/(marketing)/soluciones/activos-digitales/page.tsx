import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activos Digitales",
  description:
    "Gestión de activos digitales en el proceso sucesorio. Inventario y tratamiento de cuentas, criptoactivos y patrimonio digital del causante.",
  robots: { index: false, follow: true },
};

export default function ActivosDigitalesPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-ink">Activos Digitales — En construcción</h1>
    </div>
  );
}
