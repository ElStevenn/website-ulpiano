"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConsentCheckbox from "@/components/forms/ConsentCheckbox";
import { localeFromPathname } from "@/lib/legal/consent-texts";

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

/* ─── Copy ─── */

const COPY = {
  es: {
    eyebrow: "CONTACTO",
    heroTitle: "¿Tienes preguntas? Hablemos.",
    heroBody:
      "Escríbenos y te responderemos en menos de 24 horas. Si prefieres ver el producto en acción, reserva directamente una sesión.",
    sendMessage: "Enviar mensaje",
    reserveDemo: "Reserva tu Demo",
    successTitle: "Mensaje enviado",
    successBody:
      "Hemos recibido tu consulta. Te responderemos en menos de 24 horas laborables.",
    backHome: "Volver al inicio",
    formTitle: "Envíanos un mensaje",
    formIntro: "Completa el formulario y nos pondremos en contacto contigo.",
    name: "Nombre *",
    namePlaceholder: "Tu nombre",
    email: "Email *",
    company: "Empresa",
    companyPlaceholder: "Nombre del despacho",
    subject: "Asunto *",
    subjectPlaceholder: "Selecciona un tema",
    subjects: {
      "info-producto": "Información sobre el producto",
      precios: "Precios y planes",
      soporte: "Soporte técnico",
      partnership: "Colaboración / Partnership",
      otro: "Otro",
    },
    message: "Mensaje *",
    messagePlaceholder: "Cuéntanos en qué podemos ayudarte...",
    sending: "Enviando...",
    submit: "Enviar mensaje",
    formError: "Ha ocurrido un error. Inténtalo de nuevo.",
    infoEyebrow: "INFORMACIÓN DE CONTACTO",
    infoTitle: "Otras formas de contactarnos",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    hoursLabel: "Horario de soporte",
    hoursValue: "Lunes a Viernes, 9:00 – 18:00",
    demoCardTitle: "¿Prefieres verlo en acción?",
    demoCardBody:
      "Reserva una sesión de 25 minutos directamente sobre el producto con un caso real.",
    ctaTitle: "El sistema operativo de las herencias, a tu alcance",
    ctaBody:
      "Gestión sucesoria estructurada, trazable y precisa. Para profesionales que gestionan herencias con responsabilidad.",
    seePrices: "Ver precios",
    homeHref: "/",
    demoHref: "/demo",
    pricesHref: "/precios",
  },
  ca: {
    eyebrow: "CONTACTE",
    heroTitle: "Tens preguntes? Parlem-ne.",
    heroBody:
      "Escriu-nos i et respondrem en menys de 24 hores. Si prefereixes veure el producte en acció, reserva directament una sessió.",
    sendMessage: "Envia un missatge",
    reserveDemo: "Reserva la teva demo",
    successTitle: "Missatge enviat",
    successBody:
      "Hem rebut la teva consulta. Et respondrem en menys de 24 hores laborables.",
    backHome: "Torna a l'inici",
    formTitle: "Envia'ns un missatge",
    formIntro: "Omple el formulari i ens posarem en contacte amb tu.",
    name: "Nom *",
    namePlaceholder: "El teu nom",
    email: "Correu *",
    company: "Empresa",
    companyPlaceholder: "Nom del despatx",
    subject: "Assumpte *",
    subjectPlaceholder: "Tria un tema",
    subjects: {
      "info-producto": "Informació sobre el producte",
      precios: "Preus i plans",
      soporte: "Suport tècnic",
      partnership: "Col·laboració / Partnership",
      otro: "Un altre",
    },
    message: "Missatge *",
    messagePlaceholder: "Explica'ns en què et podem ajudar...",
    sending: "Enviant...",
    submit: "Envia el missatge",
    formError: "S'ha produït un error. Torna-ho a provar.",
    infoEyebrow: "INFORMACIÓ DE CONTACTE",
    infoTitle: "Altres maneres de contactar-nos",
    emailLabel: "Correu",
    phoneLabel: "Telèfon",
    locationLabel: "Ubicació",
    hoursLabel: "Horari de suport",
    hoursValue: "Dilluns a divendres, de 9:00 a 18:00",
    demoCardTitle: "Prefereixes veure-ho en acció?",
    demoCardBody:
      "Reserva una sessió de 25 minuts directament sobre el producte, amb un cas real.",
    ctaTitle: "El sistema operatiu de les herències, a l'abast",
    ctaBody:
      "Gestió successòria estructurada, traçable i precisa. Per a professionals que gestionen herències amb responsabilitat.",
    seePrices: "Veure preus",
    homeHref: "/ca",
    demoHref: "/ca/demo",
    pricesHref: "/ca/preus",
  },
} as const;

/* ─── Main ─── */

export function ContactoClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [consentProcessing, setConsentProcessing] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const formStartedRef = useRef(false);
  const locale = localeFromPathname(usePathname() ?? "");
  const t = COPY[locale];
  const contactInfo = [
    {
      icon: <MailIcon />,
      label: t.emailLabel,
      value: "soporte@ulpiano.es",
      href: "mailto:soporte@ulpiano.es",
    },
    {
      icon: <PhoneIcon />,
      label: t.phoneLabel,
      value: "+34 972 XXX XXX",
      href: "tel:+34972000000",
    },
    {
      icon: <MapPinIcon />,
      label: t.locationLabel,
      value: "Girona, Catalunya",
      href: null,
    },
    {
      icon: <ClockIcon />,
      label: t.hoursLabel,
      value: t.hoursValue,
      href: null,
    },
  ];

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
    if (!consentProcessing) {
      setConsentError(true);
      return;
    }
    setSending(true);
    setFormError("");
    setConsentError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      consentProcessing,
      consentMarketing,
      locale,
      formId: "contact" as const,
      sourceUrl: window.location.href,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(t.formError);
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
      setFormError(t.formError);
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
            {t.eyebrow}
          </p>
          <h1
            className="h1 reveal"
            style={{ color: "var(--white)", maxWidth: 680, margin: "0 auto", ...stagger(1) }}
          >
            {t.heroTitle}
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
            {t.heroBody}
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
              {t.sendMessage}
            </a>
            <Link href={t.demoHref} className="btn-ghost" style={{ color: "var(--white)" }}>
              {t.reserveDemo} <ArrowIcon />
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
                    {t.successTitle}
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
                    {t.successBody}
                  </p>
                  <Link
                    href={t.homeHref}
                    className="btn-ghost btn-ghost--dark"
                    style={{ marginTop: "var(--space-6)", display: "inline-flex" }}
                  >
                    {t.backHome} <ArrowIcon />
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
                    {t.formTitle}
                  </h2>
                  <p
                    style={{
                      color: "var(--slate)",
                      fontSize: 14,
                      marginBottom: "var(--space-6)",
                    }}
                  >
                    {t.formIntro}
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
                          {t.name}
                        </label>
                        <input
                          type="text"
                          id="c-name"
                          name="name"
                          required
                          placeholder={t.namePlaceholder}
                          onFocus={handleFormStarted}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" style={labelStyle}>
                          {t.email}
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
                          {t.company}
                        </label>
                        <input
                          type="text"
                          id="c-company"
                          name="company"
                          placeholder={t.companyPlaceholder}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-subject" style={labelStyle}>
                          {t.subject}
                        </label>
                        <select
                          id="c-subject"
                          name="subject"
                          required
                          style={inputStyle}
                        >
                          <option value="">{t.subjectPlaceholder}</option>
                          <option value="info-producto">
                            {t.subjects["info-producto"]}
                          </option>
                          <option value="precios">{t.subjects.precios}</option>
                          <option value="soporte">{t.subjects.soporte}</option>
                          <option value="partnership">
                            {t.subjects.partnership}
                          </option>
                          <option value="otro">{t.subjects.otro}</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-message" style={labelStyle}>
                        {t.message}
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        required
                        rows={5}
                        placeholder={t.messagePlaceholder}
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: 120,
                        }}
                      />
                    </div>
                    <ConsentCheckbox
                      locale={locale}
                      formId="contact"
                      consentProcessing={consentProcessing}
                      consentMarketing={consentMarketing}
                      onProcessingChange={(v) => {
                        setConsentProcessing(v);
                        if (v) setConsentError(false);
                      }}
                      onMarketingChange={setConsentMarketing}
                      processingError={consentError}
                    />
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
                      {sending ? t.sending : t.submit}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right: contact info */}
            <div>
              <div className="reveal" style={stagger(1)}>
                <p className="eyebrow" style={{ color: "var(--slate)" }}>
                  {t.infoEyebrow}
                </p>
                <h3
                  style={{
                    color: "var(--ink)",
                    marginTop: "var(--space-3)",
                    fontSize: 20,
                  }}
                >
                  {t.infoTitle}
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
                  {t.demoCardTitle}
                </h3>
                <p
                  style={{
                    color: "var(--slate)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginTop: "var(--space-2)",
                  }}
                >
                  {t.demoCardBody}
                </p>
                <Link
                  href={t.demoHref}
                  className="btn-primary"
                  style={{
                    marginTop: "var(--space-4)",
                    display: "inline-flex",
                    fontSize: 14,
                    padding: "10px 24px",
                  }}
                >
                  {t.reserveDemo}
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
            {t.ctaTitle}
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
            {t.ctaBody}
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
            <Link href={t.demoHref} className="btn-primary">
              {t.reserveDemo}
            </Link>
            <Link href={t.pricesHref} className="btn-ghost">
              {t.seePrices} <ArrowIcon />
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
