"use client";

import { useEffect, useRef, useState } from "react";
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

/* ─── Icons ─── */

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

function CheckCircle() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/* ─── Contact info ─── */

const contactInfo = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "soporte@ulpiano.es",
    href: "mailto:soporte@ulpiano.es",
  },
  {
    icon: <PhoneIcon />,
    label: "Teléfono",
    value: "+34 972 XXX XXX",
    href: "tel:+34972000000",
  },
  {
    icon: <MapPinIcon />,
    label: "Ubicación",
    value: "Girona, Catalunya",
    href: null,
  },
  {
    icon: <ClockIcon />,
    label: "Horario de soporte",
    value: "Lunes a Viernes, 9:00 – 18:00",
    href: null,
  },
];

/* ─── Main ─── */

export function ContactoClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const formStartedRef = useRef(false);

  const dl = useRef(
    () => (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer,
  );

  function handleFormStarted() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    dl.current()?.push({ event: "contact_form_started" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setFormError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);

      dl.current()?.push({
        event: "contact_form_submitted",
        asunto: data.subject,
      });
      dl.current()?.push({
        event: "generate_lead",
        lead_type: "contact",
        currency: "EUR",
        value: 50,
      });
    } catch {
      setFormError("Ha ocurrido un error. Inténtalo de nuevo.");
      dl.current()?.push({
        event: "form_error",
        form_name: "contact",
        error_type: "submission",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-16))",
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
            left: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="eyebrow reveal"
            style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
          >
            CONTACTO
          </p>
          <h1
            className="h1 reveal"
            style={{ color: "var(--white)", maxWidth: 680, margin: "0 auto", ...stagger(1) }}
          >
            ¿Tienes preguntas? Hablemos.
          </h1>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "var(--space-6) auto 0",
              ...stagger(2),
            }}
          >
            Escríbenos y te responderemos en menos de 24 horas. Si prefieres
            ver el producto en acción, reserva directamente una sesión.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
              ...stagger(3),
            }}
          >
            <a href="#formulario" className="btn-primary">
              Enviar mensaje
            </a>
            <Link href="/demo" className="btn-ghost" style={{ color: "var(--white)" }}>
              Reserva tu Demo <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FORM + INFO GRID ═══ */}
      <section
        id="formulario"
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div className="contacto-grid">
            {/* Left: Form */}
            <div className="reveal" style={stagger(0)}>
              {submitted ? (
                <div
                  className="card"
                  style={{ padding: "var(--space-12)", textAlign: "center" }}
                >
                  <div style={{ margin: "0 auto var(--space-6)", width: 48 }}>
                    <CheckCircle />
                  </div>
                  <h3 style={{ color: "var(--ink)", fontSize: 22 }}>
                    Mensaje enviado
                  </h3>
                  <p
                    style={{
                      color: "var(--slate)",
                      fontSize: 15,
                      lineHeight: 1.6,
                      marginTop: "var(--space-3)",
                      maxWidth: 400,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Hemos recibido tu consulta. Te responderemos en menos de 24
                    horas laborables.
                  </p>
                  <Link
                    href="/"
                    className="btn-ghost btn-ghost--dark"
                    style={{ marginTop: "var(--space-6)", display: "inline-flex" }}
                  >
                    Volver al inicio <ArrowIcon />
                  </Link>
                </div>
              ) : (
                <div className="card" style={{ padding: "var(--space-8)" }}>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--ink)",
                      fontFamily: "var(--font-display)",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    Envíanos un mensaje
                  </h2>
                  <p
                    style={{
                      color: "var(--slate)",
                      fontSize: 14,
                      marginBottom: "var(--space-6)",
                    }}
                  >
                    Completa el formulario y nos pondremos en contacto contigo.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--space-5)",
                    }}
                  >
                    <div className="contacto-form-row">
                      <div>
                        <label htmlFor="c-name" style={labelStyle}>
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="c-name"
                          name="name"
                          required
                          placeholder="Tu nombre"
                          onFocus={handleFormStarted}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" style={labelStyle}>
                          Email *
                        </label>
                        <input
                          type="email"
                          id="c-email"
                          name="email"
                          required
                          placeholder="tu@email.com"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    <div className="contacto-form-row">
                      <div>
                        <label htmlFor="c-company" style={labelStyle}>
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="c-company"
                          name="company"
                          placeholder="Nombre del despacho"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-subject" style={labelStyle}>
                          Asunto *
                        </label>
                        <select
                          id="c-subject"
                          name="subject"
                          required
                          style={inputStyle}
                        >
                          <option value="">Selecciona un tema</option>
                          <option value="info-producto">
                            Información sobre el producto
                          </option>
                          <option value="precios">Precios y planes</option>
                          <option value="soporte">Soporte técnico</option>
                          <option value="partnership">
                            Colaboración / Partnership
                          </option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-message" style={labelStyle}>
                        Mensaje *
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: 120,
                        }}
                      />
                    </div>
                    {formError && (
                      <p style={{ fontSize: 13, color: "var(--error)", lineHeight: 1.4 }}>
                        {formError}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={sending}
                      style={{ width: "100%", marginTop: "var(--space-2)" }}
                    >
                      {sending ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right: contact info */}
            <div>
              <div className="reveal" style={stagger(1)}>
                <p className="eyebrow" style={{ color: "var(--slate)" }}>
                  INFORMACIÓN DE CONTACTO
                </p>
                <h3
                  style={{
                    color: "var(--ink)",
                    marginTop: "var(--space-3)",
                    fontSize: 20,
                  }}
                >
                  Otras formas de contactarnos
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-6)",
                  marginTop: "var(--space-8)",
                }}
              >
                {contactInfo.map((item, i) => (
                  <div
                    key={item.label}
                    className="reveal"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-4)",
                      ...stagger(i + 2),
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "var(--green-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--slate)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "var(--ink)",
                            textDecoration: "none",
                            marginTop: 2,
                            display: "block",
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "var(--ink)",
                            marginTop: 2,
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo CTA card */}
              <div
                className="card reveal"
                style={{
                  marginTop: "var(--space-10)",
                  padding: "var(--space-6)",
                  background: "var(--surface)",
                  border: "1px solid var(--mist)",
                  ...stagger(6),
                }}
              >
                <h3 style={{ color: "var(--ink)", fontSize: 18 }}>
                  ¿Prefieres verlo en acción?
                </h3>
                <p
                  style={{
                    color: "var(--slate)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginTop: "var(--space-2)",
                  }}
                >
                  Reserva una sesión de 25 minutos directamente sobre el
                  producto con un caso real.
                </p>
                <Link
                  href="/demo"
                  className="btn-primary"
                  style={{
                    marginTop: "var(--space-4)",
                    display: "inline-flex",
                    fontSize: 14,
                    padding: "10px 24px",
                  }}
                >
                  Reserva tu Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="cta-final" style={{ padding: "var(--space-24) 0" }}>
        <div className="cta-final__orb" />
        <div className="cta-final__content container">
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 600,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            El sistema operativo de las herencias, a tu alcance
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 480,
              margin: "var(--space-4) auto 0",
              textAlign: "center",
              lineHeight: 1.6,
              ...stagger(1),
            }}
          >
            Gestión sucesoria estructurada, trazable y precisa. Para
            profesionales que gestionan herencias con responsabilidad.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            <Link href="/demo" className="btn-primary">
              Reserva tu Demo
            </Link>
            <Link href="/precios" className="btn-ghost">
              Ver precios <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .contacto-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: var(--space-12);
          align-items: start;
        }
        .contacto-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-5);
        }
        @media (max-width: 899px) {
          .contacto-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }
        @media (max-width: 599px) {
          .contacto-form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared form styles ─── */

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: "var(--ink)",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  color: "var(--ink)",
  background: "var(--surface)",
  border: "1px solid var(--mist)",
  borderRadius: 8,
  outline: "none",
  transition: "border-color 200ms ease, box-shadow 200ms ease",
};
