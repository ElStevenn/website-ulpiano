"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  FileText,
  Gift,
  Shield,
  Layers,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    node.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const modelos = [
  {
    number: "650",
    name: "Autoliquidación del Impuesto de Sucesiones",
    desc: "La cuota a ingresar por cada heredero o legatario.",
    href: "/modelos/modelo-650",
    icon: FileText,
  },
  {
    number: "660",
    name: "Declaración de Sucesiones (Inventario)",
    desc: "El inventario de bienes, derechos y deudas que acompaña al Modelo 650.",
    href: "/modelos/modelo-660",
    icon: ClipboardList,
  },
  {
    number: "651",
    name: "Autoliquidación del Impuesto de Donaciones",
    desc: "La cuota por transmisiones inter vivos a título gratuito.",
    href: "/modelos/modelo-651",
    icon: Gift,
  },
  {
    number: "652",
    name: "Autoliquidación de Seguros de Vida",
    desc: "La tributación del capital percibido por el beneficiario del seguro.",
    href: "/modelos/modelo-652",
    icon: Shield,
  },
  {
    number: "653",
    name: "Consolidación de Dominio",
    desc: "La cuota complementaria por extinción de usufructo.",
    href: "/modelos/modelo-653",
    icon: Layers,
  },
];

export function ModelosHubClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* HERO */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-20)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="eyebrow reveal"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            MODELOS FISCALES
          </div>
          <h1
            className="h1 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 780,
              margin: "var(--space-4) auto 0",
              ...stagger(1),
            }}
          >
            Los modelos del Impuesto sobre Sucesiones y Donaciones, explicados
          </h1>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 660,
              margin: "var(--space-6) auto 0",
              ...stagger(2),
            }}
          >
            Guía de cada modelo fiscal que interviene en una herencia o
            donación. Qué es, cuándo se presenta, quién está obligado y cómo
            Ulpiano lo genera automáticamente desde el expediente.
          </p>
        </div>
      </section>

      {/* GRID DE MODELOS */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="modhub-grid">
            {modelos.map((m, i) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.number}
                  href={m.href}
                  className="card reveal modhub-card"
                  style={{ textDecoration: "none", display: "block", ...stagger(i) }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "var(--green-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="var(--ulpiano-green)" />
                    </div>
                    <span
                      className="mono"
                      style={{
                        fontSize: 48,
                        fontWeight: 700,
                        color: "var(--ulpiano-green)",
                        lineHeight: 1,
                      }}
                    >
                      {m.number}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 20,
                      color: "var(--ink)",
                      lineHeight: 1.3,
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {m.name}
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--slate)",
                      lineHeight: 1.6,
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {m.desc}
                  </p>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--ulpiano-green)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Ver guía completa <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELACIÓN ENTRE MODELOS */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            RELACIÓN ENTRE MODELOS
          </div>
          <h2 className="h2 reveal" style={{ color: "var(--ink)", maxWidth: 600 }}>
            Cómo se conectan en un expediente sucesorio
          </h2>

          <div className="reveal" style={{ marginTop: "var(--space-10)", ...stagger(1) }}>
            {/* Sucesiones flow */}
            <div className="card" style={{ marginBottom: "var(--space-6)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ulpiano-green)" }} />
                <span style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>
                  Fallecimiento del causante
                </span>
              </div>
              <div className="modhub-flow-grid">
                {[
                  { n: "660", label: "Inventario de bienes", note: "Siempre" },
                  { n: "650", label: "Autoliquidación por heredero", note: "Siempre" },
                  { n: "652", label: "Seguros de vida", note: "Si hay seguro" },
                  { n: "653", label: "Consolidación", note: "Cuando se extinga el usufructo" },
                ].map((item) => (
                  <div
                    key={item.n}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--mist)",
                      borderRadius: 8,
                      padding: "var(--space-4)",
                    }}
                  >
                    <span className="mono" style={{ fontSize: 24, fontWeight: 700, color: "var(--ulpiano-green)" }}>
                      {item.n}
                    </span>
                    <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500, marginTop: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--fog)", marginTop: 2 }}>
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donaciones flow */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green-light)" }} />
                <span style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>
                  Donación en vida
                </span>
              </div>
              <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--mist)",
                    borderRadius: 8,
                    padding: "var(--space-4)",
                    flex: "1 1 200px",
                  }}
                >
                  <span className="mono" style={{ fontSize: 24, fontWeight: 700, color: "var(--ulpiano-green)" }}>
                    651
                  </span>
                  <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500, marginTop: 4 }}>
                    Autoliquidación por donatario
                  </div>
                  <div style={{ fontSize: 12, color: "var(--fog)", marginTop: 2 }}>
                    30 días hábiles desde la donación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Cada modelo, generado desde el expediente. Sin rellenar formularios a mano.
          </h2>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "var(--space-6) auto 0",
              ...stagger(1),
            }}
          >
            Solicita una demo y comprueba cómo Ulpiano genera los Modelos 650,
            651, 652, 653 y 660 desde un único expediente sucesorio.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-10)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            <Link href="/demo" className="btn-primary">
              Solicita tu demo
            </Link>
            <Link href="/soluciones/fiscalidad-sucesoria" className="btn-ghost">
              Ver motor fiscal →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .modhub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .modhub-card {
          transition: box-shadow 300ms ease, transform 300ms ease;
        }
        .modhub-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
        }
        @media (max-width: 1024px) {
          .modhub-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .modhub-flow-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .modhub-grid {
            grid-template-columns: 1fr;
          }
          .modhub-flow-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
