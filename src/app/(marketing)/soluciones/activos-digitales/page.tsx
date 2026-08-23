import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { CrossLink } from "@/components/CrossLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Activos digitales en herencias",
  description:
    "Inventario de criptomonedas, wallets y patrimonio digital del causante, con valoración y trazabilidad en el expediente sucesorio.",
  esPath: "/soluciones/activos-digitales",
  caPath: "/ca/solucions/actius-digitals",
  locale: "es",
});

const bloques = [
  {
    title: "Criptomonedas y wallets",
    desc: "Direcciones, custodios, exchanges y saldos se incorporan al inventario con la misma rigurosidad que un inmueble o una cuenta bancaria. Sin una línea suelta en un Excel paralelo.",
  },
  {
    title: "Cuentas y patrimonio digital",
    desc: "Correos, nubes, dominios, perfiles y activos online del causante entran en el expediente. Lo que no se inventaría no se parte ni se liquida.",
  },
  {
    title: "Valoración y caudal relicto",
    desc: "El valor de los activos digitales suma al caudal relicto neto. El motor sucesorio y el ISD trabajan sobre un inventario único, no sobre dos realidades.",
  },
  {
    title: "Trazabilidad para el profesional",
    desc: "Quién aportó cada dato, cuándo y con qué soporte. El cuaderno y los modelos fiscales heredan el mismo inventario, sin reescritura manual.",
  },
];

export default function ActivosDigitalesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Soluciones", href: "/soluciones" },
          { name: "Activos digitales", href: "/soluciones/activos-digitales" },
        ]}
      />

      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-16)",
          color: "var(--white)",
        }}
      >
        <div className="container">
          <div
            className="eyebrow"
            style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
          >
            SOLUCIONES
          </div>
          <h1 className="h1" style={{ color: "var(--white)", maxWidth: 720, marginBottom: "var(--space-6)" }}>
            Activos digitales en el expediente sucesorio
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
            Criptomonedas, wallets y cuentas online no aparecen solos en el
            certificado de últimas voluntades. Si el despacho no los inventaría,
            no existen para la partición ni para Hacienda. Ulpiano los trata
            como categoría de primer nivel.
          </p>
          <div style={{ marginTop: "var(--space-8)" }}>
            <Link href="/demo" className="btn-primary">
              Solicitar demo
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-6)" }}>
            El patrimonio digital también forma parte de la herencia
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", marginBottom: "var(--space-10)" }}>
            Un wallet sin custodio, un exchange extranjero o una cuenta de
            correo con facturas de cripto no caben en el inventario tradicional.
            El profesional acaba con un anexo informal —y un riesgo: omitir
            bienes, liquidar mal el ISD o firmar un cuaderno incompleto.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {bloques.map((b) => (
              <div key={b.title} className="card">
                <h3 className="h3" style={{ color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                  {b.title}
                </h3>
                <p style={{ color: "var(--slate)", margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "var(--space-4)" }}>
            Un inventario. También para lo digital.
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", marginBottom: "var(--space-8)" }}>
            En 25 minutos ves cómo entra un wallet en el caudal, cómo se valora
            y cómo llega al cuaderno particional y a los modelos fiscales.
          </p>
          <Link href="/demo" className="btn-primary">
            Verlo en una demo
          </Link>
        </div>
      </section>

      <CrossLink
        href="/soluciones/planificacion-sucesoria"
        label="Planificación sucesoria"
        description="Los activos digitales alimentan el mismo inventario que inmuebles, cuentas y empresa familiar."
      />
    </>
  );
}
