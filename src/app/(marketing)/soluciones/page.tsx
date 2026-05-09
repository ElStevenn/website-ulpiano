import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones de Gestión Sucesoria | Ulpiano",
  description:
    "Todas las soluciones de Ulpiano: planificación sucesoria, fiscalidad automatizada, documentación y procesamiento documental para abogados, asesores y notarías.",
  alternates: {
    canonical: "https://ulpiano.es/soluciones",
    languages: {
      es: "https://ulpiano.es/soluciones",
      ca: "https://ulpiano.es/ca/solucions",
    },
  },
};

const soluciones = [
  {
    href: "/soluciones/planificacion-sucesoria",
    title: "Planificación Sucesoria",
    desc: "Inventario patrimonial completo, árbol familiar, cálculo de legítimas según el CCCat y escenarios de distribución comparados.",
    tag: "Inventario · Distribución",
  },
  {
    href: "/soluciones/fiscalidad-sucesoria",
    title: "Fiscalidad Sucesoria",
    desc: "Autoliquidación automatizada de los Modelos 650, 651, 652, 653 y 660 con normativa estatal y autonómica actualizada.",
    tag: "ISD · ATC · Modelos fiscales",
  },
  {
    href: "/soluciones/documentacion-sucesoria",
    title: "Documentación Sucesoria",
    desc: "Generación del cuaderno particional, escritura de partición e inventario formal desde los datos del expediente. Sin transcribir.",
    tag: "Cuaderno particional · Escrituras",
  },
  {
    href: "/soluciones/procesamiento-documental",
    title: "Procesamiento Documental",
    desc: "OCR e IA para digitalizar, clasificar y extraer datos de certificados de defunción, testamentos y escrituras.",
    tag: "OCR · IA · Digitalización",
  },
];

export default function SolucionesPage() {
  return (
    <main style={{ paddingTop: "calc(64px + var(--space-16))", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: 640, marginBottom: "var(--space-14)" }}>
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            SOLUCIONES
          </div>
          <h1 className="h1" style={{ color: "var(--ink)" }}>
            Soluciones para la gestión sucesoria profesional
          </h1>
          <p className="body-lg" style={{ color: "var(--slate)", marginTop: "var(--space-6)" }}>
            Ulpiano cubre todo el proceso sucesorio: desde el inventario patrimonial
            hasta la generación del cuaderno particional, pasando por la fiscalidad
            automatizada y el procesamiento inteligente de documentos.
          </p>
        </div>

        {/* Grid de soluciones */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "var(--space-6)",
          }}
        >
          {soluciones.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                  background: "var(--green-bg)",
                  padding: "3px 10px",
                  borderRadius: 4,
                  marginBottom: "var(--space-4)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.03em",
                }}
              >
                {s.tag}
              </span>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {s.title}
              </h2>
              <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>
                {s.desc}
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "var(--space-5)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--ulpiano-green)",
                }}
              >
                Ver solución →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "var(--space-16)",
            textAlign: "center",
            background: "var(--surface)",
            borderRadius: 16,
            padding: "var(--space-12)",
            border: "1px solid var(--mist)",
          }}
        >
          <h2
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "var(--ink)",
              marginBottom: "var(--space-4)",
            }}
          >
            ¿Quieres ver cómo encajan en tu flujo de trabajo?
          </h2>
          <p style={{ color: "var(--slate)", marginBottom: "var(--space-8)" }}>
            Reserva una demo de 25 minutos y te mostramos el proceso completo
            sobre un expediente real.
          </p>
          <Link href="/demo" className="btn-primary">
            Solicita tu demo gratuita
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .soluciones-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
