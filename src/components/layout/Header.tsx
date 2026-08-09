"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import { solucionesItems, pensadoProfesionales, pensadoCanales, type NavDropdownItem } from "./nav-config";
import { solucionsItemsCa, pensatProfessionalsCa, pensatCanalsCa } from "./nav-config-ca";
import LangSwitch from "./LangSwitch";

/* ─── Dropdown item ─── */

function DropdownLink({ item, onClick }: { item: NavDropdownItem; onClick: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group block rounded-[6px] px-[12px] py-[10px] transition-colors hover:bg-[rgba(255,255,255,0.06)]"
    >
      <span className="block text-[14px] font-medium text-white transition-colors">
        {item.label}
      </span>
      <span className="block text-[12px] text-[rgba(255,255,255,0.45)] leading-tight">
        {item.description}
      </span>
    </Link>
  );
}

/* ─── Desktop dropdown wrapper ─── */

function DesktopDropdown({
  label,
  isActive,
  isOpen,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
}) {
  const openTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    openTimeout.current = setTimeout(onOpen, 150);
  };
  const handleMouseLeave = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    closeTimeout.current = setTimeout(onClose, 300);
  };

  useEffect(() => {
    return () => {
      if (openTimeout.current) clearTimeout(openTimeout.current);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`cursor-pointer inline-flex items-center gap-1 text-[14px] transition-colors ${
          isOpen || isActive ? "text-white" : "text-white/85 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`opacity-50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full pt-[24px] transition-all duration-150 ease-out ${
          isOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── Mobile accordion ─── */

function MobileAccordion({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
  onLinkClick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-[16px] font-medium text-white"
      >
        {label}
        <ChevronDown
          size={16}
          strokeWidth={2}
          className={`text-white/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] pb-2" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function MobileSubLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 pl-4 text-[15px] text-white/60 transition-colors hover:text-white"
    >
      {label}
    </Link>
  );
}

/* ─── Labels per idioma ─── */

const labels = {
  es: {
    solutions: "Soluciones",
    pensado: "Pensado para",
    ia: "IA",
    blog: "Blog",
    precios: "Precios",
    login: "Iniciar sesión",
    demo: "Reserva tu Demo",
    verTodas: "Ver todas las soluciones",
    profesionales: "Profesionales",
    canales: "Canales",
    nav: "Navegación principal",
    menu: "Abrir menú de navegación",
  },
  ca: {
    solutions: "Solucions",
    pensado: "Pensat per",
    ia: "IA",
    blog: "Blog",
    precios: "Preus",
    login: "Inicia sessió",
    demo: "Reserva la teva Demo",
    verTodas: "Totes les solucions",
    profesionales: "Professionals",
    canales: "Canals",
    nav: "Navegació principal",
    menu: "Obrir menú de navegació",
  },
};

/* ─── Main Header ─── */

export default function Header() {
  const pathname = usePathname();
  
  if (pathname === "/login") return null;

  const isCa = pathname === "/ca" || pathname.startsWith("/ca/");
  const locale = isCa ? "ca" : "es";
  const t = labels[locale];

  const solutionsData = isCa ? solucionsItemsCa : solucionesItems;
  const professionalsData = isCa ? pensatProfessionalsCa : pensadoProfesionales;
  const channelsData = isCa ? pensatCanalsCa : pensadoCanales;

  const solutionsPrefix = isCa ? "/ca/solucions" : "/soluciones";
  const pensadoPrefix = isCa ? "/ca/pensat-per" : "/pensado-para";
  const iaHref = isCa ? "/ca/ia" : "/ia";
  const blogHref = isCa ? "/ca/recursos/blog" : "/recursos/blog";
  const preciosHref = isCa ? "/ca/preus" : "/precios";
  const loginHref = "/login";
  const demoHref = isCa ? "/ca/demo" : "/demo";
  const homeHref = isCa ? "/ca" : "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isSolucionesActive = pathname.startsWith(solutionsPrefix);
  const isPensadoActive = pathname.startsWith(pensadoPrefix);
  const isIaActive = pathname === iaHref;
  const isBlogActive = pathname.startsWith(blogHref);
  const isPreciosActive = pathname === preciosHref;

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [closeAll]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [closeAll]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[rgba(8,12,30,0.85)] backdrop-blur-[12px] border-b border-white/[0.08]"
          : "bg-transparent border-transparent"
      } ${
        isMobileOpen
          ? "max-lg:bg-[#050505]/98 max-lg:backdrop-blur-2xl max-lg:border-transparent"
          : ""
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "h-16" : "h-24"
        }`}
      >
        <div className="flex-1 flex justify-start">
          <Link
            href={homeHref}
            className="text-white font-sans font-medium text-[20px] tracking-[0.1em] flex items-center"
          >
            ULPIANO
          </Link>
        </div>

        <nav className="hidden lg:flex flex-none items-center justify-center gap-6 whitespace-nowrap xl:gap-8 h-full" role="navigation" aria-label={t.nav}>
          <DesktopDropdown
            label={t.solutions}
            isActive={isSolucionesActive}
            isOpen={openDropdown === "soluciones"}
            onOpen={() => setOpenDropdown("soluciones")}
            onClose={() => setOpenDropdown(null)}
          >
            <div className="min-w-[480px] rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#0d1117] p-[16px] shadow-2xl">
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                {solutionsData.map((item) => (
                  <DropdownLink key={item.href} item={item} onClick={closeAll} />
                ))}
              </div>
            </div>
          </DesktopDropdown>

          <DesktopDropdown
            label={t.pensado}
            isActive={isPensadoActive}
            isOpen={openDropdown === "pensado"}
            onOpen={() => setOpenDropdown("pensado")}
            onClose={() => setOpenDropdown(null)}
          >
            <div className="min-w-[480px] rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#0d1117] p-[16px] shadow-2xl">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="flex flex-col gap-0.5">
                  <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
                    {t.profesionales}
                  </p>
                  {professionalsData.map((item) => (
                    <DropdownLink key={item.href} item={item} onClick={closeAll} />
                  ))}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
                    {t.canales}
                  </p>
                  {channelsData.map((item) => (
                    <DropdownLink key={item.href} item={item} onClick={closeAll} />
                  ))}
                </div>
              </div>
            </div>
          </DesktopDropdown>

          <Link href={iaHref} className="text-white/85 text-[14px] hover:text-white transition-colors">
            {t.ia}
          </Link>
          {!isCa && (
            <Link
              href={blogHref}
              aria-current={isBlogActive ? "page" : undefined}
              className={`text-[14px] transition-colors ${
                isBlogActive ? "font-medium text-white" : "text-white/85 hover:text-white"
              }`}
            >
              {t.blog}
            </Link>
          )}
          <Link href={preciosHref} className="text-white/85 text-[14px] hover:text-white transition-colors">
            {t.precios}
          </Link>
        </nav>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          <Link href={loginHref} className="text-white/85 text-[14px] hover:text-white transition-colors">
            {t.login}
          </Link>
          <Link
            href={demoHref}
            className="bg-white text-[#0a0a0a] text-[14px] font-medium px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
          >
            {t.demo}
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 text-white"
          aria-label={t.menu}
          aria-expanded={isMobileOpen}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${isMobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-[#050505]/98 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-out ${
          isScrolled ? "h-[calc(100dvh-4rem)]" : "h-[calc(100dvh-6rem)]"
        } ${
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-4">
          <div className={`transition-all duration-500 ease-out ${isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: isMobileOpen ? '100ms' : '0ms' }}>
            <MobileAccordion label={t.solutions}>
              {solutionsData.map((item) => (
                <MobileSubLink key={item.href} href={item.href} label={item.label} onClick={closeAll} />
              ))}
            </MobileAccordion>
          </div>

          <div className={`transition-all duration-500 ease-out ${isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: isMobileOpen ? '150ms' : '0ms' }}>
            <MobileAccordion label={t.pensado}>
              <p className="pl-4 pt-1 pb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
                {t.profesionales}
              </p>
              {professionalsData.map((item) => (
                <MobileSubLink key={item.href} href={item.href} label={item.label} onClick={closeAll} />
              ))}
              <p className="pl-4 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
                {t.canales}
              </p>
              {channelsData.map((item) => (
                <MobileSubLink key={item.href} href={item.href} label={item.label} onClick={closeAll} />
              ))}
            </MobileAccordion>
          </div>

          <div className={`transition-all duration-500 ease-out ${isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: isMobileOpen ? '200ms' : '0ms' }}>
            <Link
              href={iaHref}
              onClick={closeAll}
              className="block border-b border-white/[0.06] py-4 text-[16px] font-medium text-white"
            >
              {t.ia}
            </Link>
          </div>

          <div className={`transition-all duration-500 ease-out ${isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: isMobileOpen ? '250ms' : '0ms' }}>
            <Link
              href={preciosHref}
              onClick={closeAll}
              className="block border-b border-white/[0.06] py-4 text-[16px] font-medium text-white"
            >
              {t.precios}
            </Link>
          </div>

          {!isCa && (
            <div className={`transition-all duration-500 ease-out ${isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: isMobileOpen ? "275ms" : "0ms" }}>
              <Link
                href={blogHref}
                onClick={closeAll}
                aria-current={isBlogActive ? "page" : undefined}
                className={`block border-b border-white/[0.06] py-4 text-[16px] font-medium transition-colors ${
                  isBlogActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {t.blog}
              </Link>
            </div>
          )}

          <div className={`mt-auto pt-6 transition-all duration-500 ease-out ${isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: isMobileOpen ? '300ms' : '0ms' }}>
            <Link
              href={loginHref}
              onClick={closeAll}
              className="block text-center text-[15px] text-white/60 transition-colors hover:text-white py-3"
            >
              {t.login}
            </Link>
            <div className="mt-3">
              <Link href={demoHref} className="btn-primary w-full text-center" onClick={closeAll}>
                {t.demo}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
