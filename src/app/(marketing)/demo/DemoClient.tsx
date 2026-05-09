"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Calendar, Monitor, Clock, ShieldCheck, ChevronDown, ArrowRight, Shield } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-in-up");
        }),
      { threshold: 0.12 }
    );
    // Add opacity-0 to children initially to ensure they fade in
    node.querySelectorAll(".reveal").forEach((c) => {
      c.classList.add("opacity-0");
      observer.observe(c);
    });
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Data ─── */

const demoTopics = [
  {
    title: "Inventario patrimonial estructurado",
    desc: "Inmuebles, financieros, participaciones — en un panel con caudal relicto neto calculado automáticamente.",
  },
  {
    title: "Cálculo del ISD con norma citada",
    desc: "La cuota de cada heredero según la Llei 19/2010, con reducciones y bonificaciones aplicadas.",
  },
  {
    title: "Cuaderno particional generado",
    desc: "En Word, con los datos reales del expediente. Listo para tu revisión.",
  },
  {
    title: "Comparación de escenarios fiscales",
    desc: "Herencia directa vs. donación vs. usufructo al cónyuge — impacto fiscal en paralelo.",
  },
];

const nextSteps = [
  {
    step: 1,
    title: "Completa el formulario",
    desc: "Solo nombre, email y despacho. En menos de 30 segundos.",
  },
  {
    step: 2,
    title: "Recibes el enlace de agenda",
    desc: "En menos de 24h, con horarios disponibles que se ajusten a ti.",
  },
  {
    step: 3,
    title: "Sesión de 25 minutos",
    desc: "Directamente sobre la plataforma con un expediente real del sector.",
  },
];

const faqs = [
  {
    q: "¿Qué necesito preparar para la sesión?",
    a: "Nada. Nosotros proporcionamos un caso real del sector sucesorio catalán para que veas la plataforma en acción con datos representativos.",
  },
  {
    q: "¿Es realmente sin compromiso?",
    a: "Sí. La sesión es puramente informativa. No cerramos con precio ni pedimos datos de pago. Si quieres probar por tu cuenta después, puedes empezar gratis.",
  },
  {
    q: "¿Puedo traer a un compañero del despacho?",
    a: "Por supuesto. De hecho, lo recomendamos. Cuantos más perfiles vean la plataforma, mejor evaluación podéis hacer.",
  },
  {
    q: "¿La demo cubre la normativa de mi comunidad?",
    a: "Actualmente la plataforma cubre el derecho foral catalán (CCCat, Llei 19/2010). La demo se centra en un expediente con domicilio en Catalunya.",
  },
  {
    q: "¿Cuánto tarda la respuesta?",
    a: "Menos de 24 horas laborables. Normalmente respondemos el mismo día.",
  },
];

/* ─── FAQ Component ─── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink group-hover:text-emerald-600 transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="text-[15px] text-slate-600 leading-relaxed pb-2">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Main ─── */

export function DemoClient() {
  const revealRef = useReveal();
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
    dl.current()?.push({ event: "demo_form_started" });
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
    };

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);

      dl.current()?.push({
        event: "demo_form_submitted",
        empresa: data.company,
      });
      dl.current()?.push({
        event: "generate_lead",
        lead_type: "demo",
        currency: "EUR",
        value: 150,
      });
    } catch {
      setFormError("Ha ocurrido un error. Inténtalo de nuevo.");
      dl.current()?.push({
        event: "form_error",
        form_name: "demo",
        error_type: "submission",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div ref={revealRef} className="bg-white">
      {/* ═══ HERO — Dark & Spectacualr ═══ */}
      <section className="relative overflow-hidden bg-night px-6 pt-[calc(64px+4rem)] pb-24"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }}
      >
        {/* Background glow effects */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,var(--ulpiano-green)_0%,transparent_50%)] opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.3)_0%,transparent_60%)] opacity-30 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-emerald-500/50" />
            <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
              Descubre Ulpiano
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>

          <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white leading-tight max-w-[900px] mx-auto" style={{ animationDelay: '100ms' }}>
            El expediente que hoy te cuesta 6 horas, resuelto en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[var(--ulpiano-green)]">25 minutos</span>
          </h1>
          
          <p className="reveal text-lg text-white/60 max-w-[660px] mx-auto mt-6 leading-relaxed" style={{ animationDelay: '200ms' }}>
            Reserva una sesión personalizada. Verás la plataforma funcionando con un caso real del sector sucesorio catalán: inventario, cálculo del ISD y generación del cuaderno particional.
          </p>

          <div className="reveal flex flex-wrap gap-4 justify-center mt-10" style={{ animationDelay: '300ms' }}>
            <a href="#reservar" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
              Reservar mi sesión
            </a>
            <a href="#que-veras" className="btn-ghost group text-white/80 hover:text-white px-6">
              Ver qué incluye 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF STRIP ═══ */}
      <section className="bg-white border-b border-slate-100 py-10 relative z-20 shadow-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 reveal">
            {[
              {
                number: "25",
                unit: "min",
                label: "Sin diapositivas. Directamente sobre el producto.",
              },
              {
                number: "35%",
                unit: "",
                label: "Reducción media en tiempo de gestión por expediente.",
              },
              {
                number: "100%",
                unit: "",
                label: "Derecho foral catalán integrado (CCCat, Llei 19/2010).",
              },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-mono text-3xl font-bold text-emerald-600 leading-none flex-shrink-0 min-w-[70px]">
                  {s.number}
                  {s.unit && <span className="text-xl ml-1">{s.unit}</span>}
                </span>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM + CONTENT GRID ═══ */}
      <section id="que-veras" className="py-24 bg-slate-50/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 lg:gap-20 items-start">
            
            {/* Left: what you'll see */}
            <div className="reveal">
              <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
                Qué verás en la sesión
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-[480px]">
                Un caso real, de principio a fin
              </h2>
              <p className="text-[17px] text-slate-600 mt-4 max-w-[460px] leading-relaxed">
                Trabajamos sobre la plataforma desde el primer minuto. Sin presentaciones comerciales aburridas, sin diapositivas.
              </p>

              <div className="flex flex-col gap-6 mt-10">
                {demoTopics.map((topic, i) => (
                  <div key={i} className="reveal flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all shadow-sm hover:shadow-md" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex-shrink-0 mt-1 text-emerald-500 bg-emerald-50 p-1.5 rounded-lg">
                      <CheckCircle2 size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-ink">
                        {topic.title}
                      </p>
                      <p className="text-[15px] text-slate-600 leading-relaxed mt-1">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* How it works strip */}
              <div className="flex flex-wrap gap-6 mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                {[
                  { icon: <Calendar size={20} />, text: "Tú eliges fecha y hora" },
                  { icon: <Monitor size={20} />, text: "Por videoconferencia" },
                  { icon: <Clock size={20} />, text: "25 min, sin compromiso" },
                ].map((step, i) => (
                  <div key={i} className="reveal flex items-center gap-3" style={{ animationDelay: `${(i+3) * 100}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-[15px] font-semibold text-ink">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Glassmorphic Form Card */}
            <div id="reservar" className="reveal lg:sticky lg:top-32" style={{ animationDelay: "200ms" }}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--ulpiano-green)] to-emerald-400" />
                
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={32} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-ink mb-3">
                      Sesión solicitada
                    </h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
                      Recibirás un email en menos de 24h con los horarios disponibles para elegir el que mejor te convenga.
                    </p>
                    <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-600 border border-slate-100 text-left">
                      <strong className="text-ink block mb-1">¿Mientras tanto?</strong>
                      Explora en detalle todas las soluciones que verás durante la sesión.
                    </div>
                    <Link
                      href="/soluciones"
                      className="btn-ghost w-full justify-center mt-6 border border-slate-200 hover:bg-slate-50"
                    >
                      Ver soluciones <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-ink mb-2">
                        Reserva tu sesión
                      </h3>
                      <p className="text-[15px] text-slate-500">
                        3 campos — menos de 30 segundos.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div>
                        <label htmlFor="name" className="block text-[14px] font-semibold text-ink mb-2">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="María García López"
                          onFocus={handleFormStarted}
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[14px] font-semibold text-ink mb-2">
                          Email profesional
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="maria@despacho.com"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-[14px] font-semibold text-ink mb-2">
                          Despacho / Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          placeholder="Nombre del despacho"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                      </div>
                      
                      {formError && (
                        <p className="text-[14px] text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                          {formError}
                        </p>
                      )}
                      
                      <button
                        type="submit"
                        disabled={sending}
                        className="btn-primary w-full py-4 text-[16px] shadow-[0_8px_20px_rgba(45,106,79,0.3)] hover:shadow-[0_10px_25px_rgba(45,106,79,0.4)] hover:-translate-y-0.5 mt-2"
                      >
                        {sending ? "Procesando..." : "Ver Ulpiano en acción"} <ArrowRight size={18} className="ml-1" />
                      </button>
                      
                      <div className="flex items-center justify-center gap-2 text-[13px] text-slate-400 mt-2 font-medium">
                        <Shield size={14} className="text-emerald-500" />
                        <span>Sin compromiso · No pedimos datos de pago</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF — Testimonial ═══ */}
      <section className="bg-night py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(45,106,79,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="reveal">
              <blockquote className="border-l-4 border-emerald-500 pl-6 m-0">
                <p className="text-xl text-white leading-relaxed font-medium italic">
                  &ldquo;Desde que usamos Ulpiano, la preparación de un expediente sucesorio nos lleva la mitad de tiempo. Y el cliente entiende perfectamente lo que paga.&rdquo;
                </p>
                <footer className="text-[15px] text-white/50 mt-5 font-medium">
                  — Marta R., Abogada | Despacho en Girona
                </footer>
              </blockquote>
            </div>
            <div className="reveal" style={{ animationDelay: "150ms" }}>
              <blockquote className="border-l-4 border-emerald-500 pl-6 m-0">
                <p className="text-xl text-white leading-relaxed font-medium italic">
                  &ldquo;La visualización del árbol familiar y las simulaciones fiscales cambiaron la forma en que presentamos las herencias a nuestros clientes.&rdquo;
                </p>
                <footer className="text-[15px] text-white/50 mt-5 font-medium">
                  — Jordi P., Abogado Civilista | Barcelona
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ PASA DESPUÉS — Reduce uncertainty ═══ */}
      <section className="bg-white py-24">
        <div className="container max-w-[720px]">
          <div className="reveal text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Cómo funciona
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              De formulario a sesión en 3 pasos
            </h2>
          </div>
          
          <div className="flex flex-col gap-10">
            {nextSteps.map((s, i) => (
              <div key={s.step} className="reveal flex items-start gap-6" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 text-emerald-600 flex items-center justify-center font-mono text-xl font-bold flex-shrink-0 bg-emerald-50 shadow-sm">
                  {s.step}
                </div>
                <div className="pt-2">
                  <p className="text-xl font-bold text-ink leading-tight">
                    {s.title}
                  </p>
                  <p className="text-[16px] text-slate-600 leading-relaxed mt-2">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal text-center mt-16 pt-10 border-t border-slate-100">
            <a href="#reservar" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.3)] hover:shadow-[0_0_30px_rgba(45,106,79,0.5)]">
              Quiero reservar mi sesión
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — Objection handling ═══ */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container max-w-[760px]">
          <div className="reveal mb-12 text-center">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              Antes de reservar
            </h2>
          </div>
          <div className="reveal bg-white rounded-2xl shadow-sm border border-slate-200 px-6 sm:px-8 py-2">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALTERNATIVA ═══ */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container reveal flex items-center justify-center gap-6 flex-wrap text-center">
          <p className="text-lg font-medium text-ink">
            ¿Prefieres probar por tu cuenta primero?
          </p>
          <Link href="/precios" className="btn-ghost border border-slate-200 hover:bg-slate-50">
            Empieza gratis sin tarjeta <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
