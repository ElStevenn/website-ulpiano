import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-ulpiano-green mb-4">
        Error 404
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
        Página no encontrada
      </h1>
      <p className="text-slate max-w-md mb-8">
        La página que buscas no existe o ha sido movida. Puedes volver al inicio
        o explorar nuestras soluciones.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-ulpiano-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-light"
        >
          Volver al inicio
        </Link>
        <Link
          href="/demo"
          className="inline-flex items-center justify-center rounded-lg border border-mist px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
        >
          Solicitar demo
        </Link>
      </div>
    </section>
  );
}
