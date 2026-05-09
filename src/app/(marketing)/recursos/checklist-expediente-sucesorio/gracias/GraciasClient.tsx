"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    node.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function DownloadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function GraciasClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-20))",
          paddingBottom: "var(--space-20)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div
            className="reveal"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "var(--green-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto var(--space-6)",
            }}
          >
            <DownloadIcon />
          </div>
          <h1
            className="h1 reveal"
            style={{ color: "var(--white)", ...stagger(1) }}
          >
            Tu checklist está lista
          </h1>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 520,
              margin: "var(--space-6) auto 0",
              ...stagger(2),
            }}
          >
            Descarga el PDF directamente o revisa tu correo donde encontrarás una copia
            junto con contenido exclusivo sobre gestión sucesoria en Cataluña.
          </p>
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-8)",
              ...stagger(3),
            }}
          >
            <a
              href="/recursos/checklist-sucesorio-cataluna.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary--large"
            >
              Descargar checklist (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ PASA AHORA ═══ */}
      <section style={{ background: "var(--white)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              QUÉ PASA AHORA
            </p>
            <h2 className="h2" style={{ color: "var(--ink)", marginTop: "var(--space-3)" }}>
              En los próximos días recibirás
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {[
              {
                icon: <MailIcon />,
                title: "Email de confirmación con la checklist",
                desc: "Una copia del PDF directamente en tu bandeja de entrada.",
              },
              {
                icon: <CheckIcon />,
                title: "Contenido exclusivo sobre gestión sucesoria",
                desc: "Casos de uso, errores frecuentes en ISD catalán y cómo evitarlos.",
              },
              {
                icon: <CalendarIcon />,
                title: "Invitación a una sesión personalizada",
                desc: "25 minutos para ver cómo Ulpiano resuelve los 47 puntos de la checklist dentro de la plataforma.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-5)",
                  ...stagger(i),
                }}
              >
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
                  {step.icon}
                </div>
                <div>
                  <p style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.6, marginTop: 4 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SIGUIENTE PASO ═══ */}
      <section style={{ background: "var(--surface)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div
            className="card reveal"
            style={{
              textAlign: "center",
              padding: "var(--space-10)",
              borderTop: "3px solid var(--ulpiano-green)",
            }}
          >
            <h3 style={{ color: "var(--ink)", fontSize: 22 }}>
              ¿Quieres ver los 47 puntos resueltos dentro de la plataforma?
            </h3>
            <p
              style={{
                color: "var(--slate)",
                fontSize: 15,
                lineHeight: 1.6,
                marginTop: "var(--space-3)",
                maxWidth: 460,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Reserva una sesión de 25 minutos. Sin presentación comercial. Directamente sobre
              Ulpiano con un caso real del sector sucesorio catalán.
            </p>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Link href="/demo" className="btn-primary btn-primary--large">
                Reservar mi sesión gratuita
              </Link>
            </div>
            <div style={{ marginTop: "var(--space-4)" }}>
              <Link href="/soluciones" className="btn-ghost btn-ghost--dark">
                Explorar las soluciones <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
