"use client";

import Link from "next/link";
import { Briefcase, User, ArrowRight, ChevronLeft, Lock } from "lucide-react";

const portals = [
  {
    href: "https://backoffice.ulpiano.es/",
    Icon: Briefcase,
    title: "Acceso al Backoffice",
    description: "Abogados, notarías y asesorías fiscales",
  },
  {
    href: "https://app.ulpiano.es/",
    Icon: User,
    title: "Portal Cliente",
    description: "Consulta el estado de tu expediente",
  },
];

export default function LoginSelector() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 bg-[#050505]">
      {/* Content */}
      <div className="relative z-10 w-full max-w-[480px] animate-fade-in-up flex flex-col items-center">
        {/* Label */}
        <div className="flex items-center gap-1.5 mb-6 text-white/60 uppercase tracking-widest text-[11px] font-semibold">
          <Lock size={12} strokeWidth={2.5} />
          <span>Acceso Seguro</span>
        </div>

        {/* Headline */}
        <h1 className="font-dm-sans text-[32px] sm:text-[36px] font-bold tracking-tight text-white mb-2 text-center whitespace-nowrap">
          Accede a tu cuenta
        </h1>
        
        {/* Subtext */}
        <p className="text-[14px] text-white/60 mb-10 text-center">
          Selecciona tu portal para continuar
        </p>

        {/* Portal cards */}
        <div className="flex flex-col gap-4 w-full">
          {portals.map((portal) => {
            const { Icon } = portal;
            return (
              <a
                key={portal.title}
                href={portal.href}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[14px] border border-white/10 bg-white p-[20px] transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#050505] transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-200">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-[16px] font-[600] text-[#050505] transition-colors group-hover:text-[var(--ulpiano-green)]">
                    {portal.title}
                  </div>
                  <div className="mt-1 text-[13px] text-gray-500">
                    {portal.description}
                  </div>
                </div>
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-all duration-300 group-hover:bg-gray-200 group-hover:text-[#050505] group-hover:translate-x-1">
                  <ArrowRight size={16} strokeWidth={2} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom text line */}
        <div className="mt-8 text-[12px] text-white/40 text-center">
          Conexión cifrada de extremo a extremo &middot; Acceso seguro 24/7
        </div>

        {/* Divider + back */}
        <div className="mt-8 w-full border-t border-white/10 pt-6 text-center">
          <p className="mb-4 text-[13px] text-white/40">
            ¿Aún no tienes cuenta?{" "}
            <Link href="/demo" className="text-[var(--ulpiano-green)] hover:text-[var(--green-light)] transition-colors font-medium">
              Solicita tu demo
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[13px] text-white/50 transition-colors hover:text-white"
          >
            <ChevronLeft size={14} strokeWidth={2} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
