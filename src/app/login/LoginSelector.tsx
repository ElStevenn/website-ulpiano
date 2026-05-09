"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, User, ArrowRight, ChevronLeft, Shield, Clock } from "lucide-react";

const portals = [
  {
    href: "https://backoffice.ulpiano.es/",
    Icon: Briefcase,
    iconBg: "linear-gradient(135deg, #2D6A4F, #40916C)",
    title: "Portal Profesional",
    subtitle: "Abogados, notarías y asesorías fiscales",
    hint: "Gestión de expedientes, motor fiscal ISD, generación documental",
  },
  {
    href: "https://app.ulpiano.es/",
    Icon: User,
    iconBg: "linear-gradient(135deg, #40916C, #52B788)",
    title: "Portal Cliente",
    subtitle: "Consulta el estado de tu expediente",
    hint: "Seguimiento, documentación y distribución patrimonial",
  },
];

export default function LoginSelector() {
  return (
    <section 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night px-6 py-12"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,var(--ulpiano-green)_0%,transparent_50%)] opacity-20 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ulpiano-green)] to-emerald-400/20 blur-[120px] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[440px] animate-fade-in-up">
        {/* Text */}
        <div className="mb-10 text-center pt-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 text-white font-dm-sans font-bold text-3xl tracking-[0.2em] transition-colors hover:text-emerald-400">
            <Image src="/logo_ulpiano_landing.png" alt="Ulpiano Logo" width={34} height={34} className="opacity-95" />
            ULPIANO
          </Link>
          <h1 className="font-dm-sans text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Accede a tu cuenta
          </h1>
          <p className="mx-auto max-w-[320px] text-base text-white/60">
            Selecciona el portal correspondiente a tu perfil para continuar
          </p>
        </div>

        {/* Portal cards */}
        <div className="flex flex-col gap-4 relative z-20">
          {portals.map((portal) => {
            const { Icon } = portal;
            return (
              <a
                key={portal.title}
                href={portal.href}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-5 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ulpiano-green)]"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-inner"
                  style={{ background: portal.iconBg }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[16px] font-semibold leading-tight text-white group-hover:text-emerald-400 transition-colors">
                    {portal.title}
                  </div>
                  <div className="mt-1 text-[14px] leading-snug text-white/70">
                    {portal.subtitle}
                  </div>
                  <div className="mt-1.5 text-[12px] leading-snug text-white/40 font-medium">
                    {portal.hint}
                  </div>
                </div>
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="text-white/40 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[12px] font-medium text-white/50">
            <Shield size={14} strokeWidth={2} className="text-emerald-500" />
            <span>Conexión cifrada de extremo a extremo</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[12px] font-medium text-white/50">
            <Clock size={14} strokeWidth={2} className="text-blue-400" />
            <span>Acceso seguro 24/7</span>
          </div>
        </div>

        {/* Divider + back */}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
          <p className="mb-4 text-[13px] text-white/30">
            ¿Aún no tienes cuenta?{" "}
            <Link href="/demo" className="text-[var(--ulpiano-green)] hover:text-[var(--green-light)] transition-colors">
              Solicita tu demo
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[13px] text-fog transition-colors hover:text-white"
          >
            <ChevronLeft size={14} strokeWidth={2} />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Gradient bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]"
        style={{ background: "linear-gradient(to top, rgba(15,31,61,1) 0%, transparent 100%)" }}
      />
    </section>
  );
}
