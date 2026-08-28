"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Types ─── */

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

type TabId = "why" | "essential" | "analytics" | "marketing";
type BannerLocale = "es" | "ca";

/* ─── Constants ─── */

const COOKIE_NAME = "gt_consent";
const COOKIE_DAYS = 182;
const GA_COOKIES = ["_ga", "_ga_FW9TKGSK59"] as const;
const MARKETING_COOKIES = ["_gcl_au", "hubspotutk"] as const;

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const COPY = {
  es: {
    bannerAria: "Banner de cookies",
    bannerTitle: "Usamos cookies",
    bannerBody: "Usamos cookies para analizar el tráfico y mejorar tu experiencia.",
    policy: "Política de cookies",
    policyHref: "/legal/cookies",
    reject: "Rechazar",
    settings: "Ajustes",
    accept: "Aceptar",
    modalAria: "Ajustes de cookies",
    modalTitle: "Ajustes de cookies",
    close: "Cerrar",
    save: "Guardar ajustes",
    acceptAll: "Aceptar todo",
    rejectAll: "Rechazar todo",
    tabs: [
      { id: "why" as const, label: "Por qué usamos cookies" },
      { id: "essential" as const, label: "Esenciales" },
      { id: "analytics" as const, label: "Analíticas" },
      { id: "marketing" as const, label: "Marketing" },
    ],
    why: [
      "En Ulpiano utilizamos cookies para entender cómo interactúas con nuestra web y mejorar el servicio. Nunca vendemos datos personales a terceros.",
      "Las cookies esenciales son necesarias para el funcionamiento del sitio. Las analíticas nos ayudan a entender qué páginas son más útiles. Las de marketing permiten mostrar contenido relevante en otras plataformas.",
      "Puedes cambiar tus preferencias en cualquier momento desde el enlace «Ajustes de cookies» en el pie de página.",
    ],
    essentialTitle: "Cookies esenciales",
    essentialBadge: "Siempre activas",
    essentialBody:
      "Necesarias para el funcionamiento básico del sitio: navegación, seguridad y persistencia de tus preferencias de cookies. No almacenan información personal identificable.",
    analyticsTitle: "Cookies analíticas",
    analyticsToggle: "Cookies analíticas",
    analyticsBody:
      "Nos permiten medir el tráfico y analizar el comportamiento de los visitantes de forma agregada (Google Analytics 4). Ayudan a entender qué secciones son más relevantes y dónde mejorar la experiencia.",
    marketingTitle: "Cookies de marketing",
    marketingToggle: "Cookies de marketing",
    marketingBody:
      "Permiten mostrar anuncios relevantes en plataformas como Google Ads y LinkedIn. Se utilizan para medir la eficacia de las campañas publicitarias y evitar mostrarte anuncios repetitivos.",
  },
  ca: {
    bannerAria: "Bàner de cookies",
    bannerTitle: "Fem servir cookies",
    bannerBody: "Fem servir cookies per analitzar el trànsit i millorar la teva experiència.",
    policy: "Política de cookies",
    policyHref: "/ca/legal/cookies",
    reject: "Rebutjar",
    settings: "Ajustos",
    accept: "Acceptar",
    modalAria: "Ajustos de cookies",
    modalTitle: "Ajustos de cookies",
    close: "Tancar",
    save: "Desar ajustos",
    acceptAll: "Acceptar-ho tot",
    rejectAll: "Rebutjar-ho tot",
    tabs: [
      { id: "why" as const, label: "Per què fem servir cookies" },
      { id: "essential" as const, label: "Essencials" },
      { id: "analytics" as const, label: "Analítiques" },
      { id: "marketing" as const, label: "Màrqueting" },
    ],
    why: [
      "A Ulpiano fem servir cookies per entendre com interactues amb la nostra web i millorar el servei. Mai no venem dades personals a tercers.",
      "Les cookies essencials són necessàries per al funcionament del lloc. Les analítiques ens ajuden a entendre quines pàgines són més útils. Les de màrqueting permeten mostrar contingut rellevant en altres plataformes.",
      "Pots canviar les teves preferències en qualsevol moment des de l'enllaç «Ajustos de cookies» al peu de pàgina.",
    ],
    essentialTitle: "Cookies essencials",
    essentialBadge: "Sempre actives",
    essentialBody:
      "Necessàries per al funcionament bàsic del lloc: navegació, seguretat i persistència de les teves preferències de cookies. No emmagatzemen informació personal identificable.",
    analyticsTitle: "Cookies analítiques",
    analyticsToggle: "Cookies analítiques",
    analyticsBody:
      "Ens permeten mesurar el trànsit i analitzar el comportament dels visitants de forma agregada (Google Analytics 4). Ajuden a entendre quines seccions són més rellevants i on millorar l'experiència.",
    marketingTitle: "Cookies de màrqueting",
    marketingToggle: "Cookies de màrqueting",
    marketingBody:
      "Permeten mostrar anuncis rellevants en plataformes com Google Ads i LinkedIn. S'utilitzen per mesurar l'eficàcia de les campanyes publicitàries i evitar mostrar-te anuncis repetitius.",
  },
} as const;

/* ─── Cookie helpers ─── */

function readConsent(): ConsentState | null {
  try {
    const raw = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_NAME}=`));
    if (!raw) return null;
    const parsed = JSON.parse(decodeURIComponent(raw.split("=")[1]));
    if (typeof parsed.analytics !== "boolean") return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  const expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
  const value = encodeURIComponent(JSON.stringify(state));
  document.cookie = `${COOKIE_NAME}=${value}; expires=${expires}; path=/; SameSite=Lax; Secure`;
}

function deleteCookie(name: string, domain?: string) {
  const domainPart = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}; SameSite=Lax; Secure`;
}

function deleteCookiesByName(names: readonly string[]) {
  const host = window.location.hostname;
  const domains = [undefined, host, `.${host}`, ".ulpiano.es"];
  for (const name of names) {
    for (const domain of domains) {
      deleteCookie(name, domain);
    }
  }
}

function deleteAnalyticsCookies() {
  deleteCookiesByName(GA_COOKIES);
}

function deleteMarketingCookies() {
  deleteCookiesByName(MARKETING_COOKIES);
}

/* ─── Consent Mode bridge ─── */

function pushConsent(state: ConsentState) {
  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };

  const params: Record<string, string> = {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: state.marketing ? "granted" : "denied",
    ad_user_data: state.marketing ? "granted" : "denied",
    ad_personalization: state.marketing ? "granted" : "denied",
  };

  w.gtag?.("consent", "update", params);
  w.dataLayer?.push(["consent", "update", params]);
  w.dataLayer?.push({ event: "consent_update" });
}

/* ─── Toggle component ─── */

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ulpiano-green ${
        disabled
          ? "cursor-not-allowed bg-ulpiano-green/60"
          : checked
            ? "cursor-pointer bg-ulpiano-green"
            : "cursor-pointer bg-white/20"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0.5"
        } mt-0.5`}
      />
    </button>
  );
}

/* ─── Main component ─── */

export default function CookieBanner() {
  const pathname = usePathname() ?? "";
  const locale: BannerLocale = pathname === "/ca" || pathname.startsWith("/ca/") ? "ca" : "es";
  const t = COPY[locale];

  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [activeTab, setActiveTab] = useState<TabId>("why");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = readConsent();
    queueMicrotask(() => {
      if (saved) {
        setConsent(saved);
        pushConsent(saved);
      } else {
        setVisible(true);
      }
    });
  }, []);

  useEffect(() => {
    const handler = () => setShowModal(true);
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [showModal]);

  const save = useCallback((state: ConsentState) => {
    const previous = readConsent();
    const final = { ...state, necessary: true };
    setConsent(final);
    writeConsent(final);
    pushConsent(final);
    if (previous?.analytics && !final.analytics) {
      deleteAnalyticsCookies();
    }
    if (previous?.marketing && !final.marketing) {
      deleteMarketingCookies();
    }
    setVisible(false);
    setShowModal(false);
  }, []);

  const acceptAll = useCallback(
    () => save({ necessary: true, analytics: true, marketing: true }),
    [save],
  );

  const rejectAll = useCallback(
    () => save({ necessary: true, analytics: false, marketing: false }),
    [save],
  );

  if (!visible && !showModal) return null;

  return (
    <>
      {visible && !showModal && (
        <div
          className="fixed z-[9999] w-[calc(100%-48px)] max-w-[560px] left-1/2 bottom-6 -translate-x-1/2 rounded-[12px] bg-[#0d1117] border border-[rgba(255,255,255,0.10)] px-[24px] py-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          role="region"
          aria-label={t.bannerAria}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[15px] font-semibold text-white m-0">{t.bannerTitle}</p>
              <p className="text-[13px] text-[rgba(255,255,255,0.5)] m-0 leading-relaxed">
                {t.bannerBody}{" "}
                <Link
                  href={t.policyHref}
                  className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
                >
                  {t.policy}
                </Link>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-[6px] border border-[rgba(255,255,255,0.2)] bg-transparent px-[16px] py-[8px] text-[13px] text-white transition-colors hover:bg-white/5"
              >
                {t.reject}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="rounded-[6px] border border-[rgba(255,255,255,0.2)] bg-transparent px-[16px] py-[8px] text-[13px] text-white transition-colors hover:bg-white/5"
              >
                {t.settings}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="col-span-2 w-full rounded-[6px] bg-white px-[16px] py-[8px] text-[13px] font-semibold text-[#0a0a0a] transition-all hover:bg-white/90 sm:ml-auto sm:w-auto"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node))
              setShowModal(false);
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.modalAria}
            className="w-full max-w-lg rounded-xl border border-white/10 bg-night shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h2 className="text-lg font-semibold text-white">{t.modalTitle}</h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label={t.close}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b border-white/10 px-6" role="tablist">
              {t.tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 border-b-2 px-3 py-3 text-[13px] font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-ulpiano-green text-white"
                      : "border-transparent text-white/50 hover:text-white/70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[200px] px-6 py-5">
              {activeTab === "why" && (
                <div className="space-y-3 text-sm leading-relaxed text-white/70">
                  {t.why.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}

              {activeTab === "essential" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{t.essentialTitle}</span>
                    <span className="rounded-md bg-ulpiano-green/20 px-2.5 py-1 text-xs font-medium text-ulpiano-green">
                      {t.essentialBadge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{t.essentialBody}</p>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{t.analyticsTitle}</span>
                    <Toggle
                      checked={consent.analytics}
                      onChange={(v) => setConsent((s) => ({ ...s, analytics: v }))}
                      label={t.analyticsToggle}
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{t.analyticsBody}</p>
                </div>
              )}

              {activeTab === "marketing" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{t.marketingTitle}</span>
                    <Toggle
                      checked={consent.marketing}
                      onChange={(v) => setConsent((s) => ({ ...s, marketing: v }))}
                      label={t.marketingToggle}
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{t.marketingBody}</p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 px-6 py-4">
              <button
                type="button"
                onClick={() => save(consent)}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                {t.save}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg bg-ulpiano-green px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-light hover:shadow-md"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-ulpiano-green px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-light hover:shadow-md"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
