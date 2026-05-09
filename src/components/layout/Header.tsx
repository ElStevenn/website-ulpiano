"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import {
  solucionesItems,
  pensadoProfesionales,
  pensadoCanales,
  type NavDropdownItem,
} from "./nav-config";
import {
  solucionsItemsCa,
  pensatProfessionalsCa,
  pensatCanalsCa,
} from "./nav-config-ca";
import LangSwitch from "./LangSwitch";

import Image from "next/image";

/* ─── Dropdown item ─── */

function DropdownLink({ item, onClick }: { item: NavDropdownItem; onClick: () => void }) {
  const { Icon } = item;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-white/[0.06]"
    >
      <span className="mt-0.5 flex-shrink-0 text-white/40 transition-colors duration-150 group-hover:text-[var(--ulpiano-green)]">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <span>
        <span className="block text-[14px] font-medium leading-tight text-white/90">
          {item.label}
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-white/45">
          {item.description}
        </span>
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
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`cursor-pointer group inline-flex items-center gap-1 rounded-lg px-4 py-2 text-[14px] font-medium transition-all duration-150 ${
          isOpen || isActive
            ? "text-white bg-white/[0.06]"
            : "text-white/60 hover:text-white hover:bg-white/[0.06]"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`text-white/40 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto opacity-100 translate-y-0 scale-100"
            : "pointer-events-none opacity-0 -translate-y-1 scale-[0.98]"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
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
  const isCa = pathname === "/ca" || pathname.startsWith("/ca/");
  const locale = isCa ? "ca" : "es";
  const t = labels[locale];

  const solutionsData = isCa ? solucionsItemsCa : solucionesItems;
  const professionalsData = isCa ? pensatProfessionalsCa : pensadoProfesionales;
  const channelsData = isCa ? pensatCanalsCa : pensadoCanales;

  const solutionsPrefix = isCa ? "/ca/solucions" : "/soluciones";
  const pensadoPrefix = isCa ? "/ca/pensat-per" : "/pensado-para";
  const iaHref = isCa ? "/ca/ia" : "/ia";
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
  const isPreciosActive = pathname === preciosHref;

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
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
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out px-4 md:px-6 ${
        isScrolled ? "top-3" : "top-6"
      }`}
    >
      <div className={`mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-2xl px-6 transition-all duration-500 ${
        isScrolled 
          ? "h-14 bg-night/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]" 
          : "h-16 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
      }`}>
        <div className="flex-1 flex justify-start">
          <Link href={homeHref} className="text-white font-dm-sans font-bold text-xl tracking-[0.1em] flex items-center gap-3">
            <Image src="/logo_ulpiano_landing.png" alt="Ulpiano Logo" width={28} height={28} className="opacity-95" />
            ULPIANO
          </Link>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-1" role="navigation" aria-label={t.nav}>
          <DesktopDropdown
            label={t.solutions}
            isActive={isSolucionesActive}
            isOpen={openDropdown === "soluciones"}
            onOpen={() => setOpenDropdown("soluciones")}
            onClose={() => setOpenDropdown(null)}
          >
            <div className="w-[420px] rounded-xl border border-white/[0.08] bg-night/95 backdrop-blur-2xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col">
                {solutionsData.map((item) => (
                  <DropdownLink key={item.href} item={item} onClick={closeAll} />
                ))}
              </div>
              <div className="mt-1 border-t border-white/[0.06] pt-1">
                <Link
                  href={solutionsPrefix}
                  onClick={closeAll}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-white/45 transition-colors hover:text-white/70"
                >
                  {t.verTodas}
                  <ArrowRight size={13} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
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
            <div className="w-[520px] rounded-xl border border-white/[0.08] bg-night/95 backdrop-blur-2xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-2 gap-0">
                <div>
                  <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
                    {t.profesionales}
                  </p>
                  {professionalsData.map((item) => (
                    <DropdownLink key={item.href} item={item} onClick={closeAll} />
                  ))}
                </div>
                <div>
                  <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
                    {t.canales}
                  </p>
                  {channelsData.map((item) => (
                    <DropdownLink key={item.href} item={item} onClick={closeAll} />
                  ))}
                </div>
              </div>
            </div>
          </DesktopDropdown>

          <Link
            href={iaHref}
            className={`inline-flex items-center rounded-lg px-4 py-2 text-[14px] font-medium transition-all duration-150 ${
              isIaActive
                ? "text-white bg-white/[0.06]"
                : "text-white/60 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            {t.ia}
          </Link>

          <Link
            href={preciosHref}
            className={`inline-flex items-center rounded-lg px-4 py-2 text-[14px] font-medium transition-all duration-150 ${
              isPreciosActive
                ? "text-white bg-white/[0.06]"
                : "text-white/60 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            {t.precios}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitch />
          <Link
            href={loginHref}
            className="text-[14px] font-medium text-white/60 transition-colors hover:text-white"
          >
            {t.login}
          </Link>
          <ButtonPrimary href={demoHref} size="sm" trackLocation="header">
            {t.demo}
          </ButtonPrimary>
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
        className={`absolute top-full left-0 right-0 h-[calc(100dvh-3.5rem)] bg-night/[0.98] backdrop-blur-2xl lg:hidden transition-all duration-300 ${
          isMobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-4">
          <MobileAccordion label={t.solutions}>
            {solutionsData.map((item) => (
              <MobileSubLink key={item.href} href={item.href} label={item.label} onClick={closeAll} />
            ))}
          </MobileAccordion>

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

          <Link
            href={iaHref}
            onClick={closeAll}
            className="block border-b border-white/[0.06] py-4 text-[16px] font-medium text-white"
          >
            {t.ia}
          </Link>

          <Link
            href={preciosHref}
            onClick={closeAll}
            className="block border-b border-white/[0.06] py-4 text-[16px] font-medium text-white"
          >
            {t.precios}
          </Link>

          <div className="mt-auto pt-6">
            <div className="flex justify-center mb-4">
              <LangSwitch />
            </div>
            <Link
              href={loginHref}
              onClick={closeAll}
              className="block text-center text-[15px] text-white/60 transition-colors hover:text-white py-3"
            >
              {t.login}
            </Link>
            <div className="mt-3">
              <ButtonPrimary href={demoHref} size="sm" className="w-full" trackLocation="mobile_menu">
                {t.demo}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
