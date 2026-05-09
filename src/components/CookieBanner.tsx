"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

/* ─── Types ─── */

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

/* ─── Constants ─── */

const COOKIE_NAME = "gt_consent";
const COOKIE_DAYS = 182;
const POLICY_URL = "/legal/cookies";

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

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

/* ─── Tab definitions ─── */

type TabId = "why" | "essential" | "analytics" | "marketing";

const TABS: { id: TabId; label: string }[] = [
  { id: "why", label: "Por qué usamos cookies" },
  { id: "essential", label: "Esenciales" },
  { id: "analytics", label: "Analíticas" },
  { id: "marketing", label: "Marketing" },
];

/* ─── Main component ─── */

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [activeTab, setActiveTab] = useState<TabId>("why");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setConsent(saved);
      pushConsent(saved);
    } else {
      setVisible(true);
    }
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

  const save = useCallback(
    (state: ConsentState) => {
      const final = { ...state, necessary: true };
      setConsent(final);
      writeConsent(final);
      pushConsent(final);
      setVisible(false);
      setShowModal(false);
    },
    [],
  );

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
      {/* ─── Bottom bar ─── */}
      {visible && !showModal && (
        <div
          className="fixed inset-x-0 bottom-0 z-[9999] border-t border-white/10 bg-night/[0.98] backdrop-blur-xl"
          role="region"
          aria-label="Banner de cookies"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-white/70">
              Usamos cookies para analizar el tráfico y mejorar tu experiencia.{" "}
              <Link
                href={POLICY_URL}
                className="underline underline-offset-2 text-white/90 hover:text-white transition-colors"
              >
                Política de cookies
              </Link>
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Ajustes
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-ulpiano-green px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-light hover:shadow-md"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Settings modal ─── */}
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
            aria-label="Ajustes de cookies"
            className="w-full max-w-lg rounded-xl border border-white/10 bg-night shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h2 className="text-lg font-semibold text-white">
                Ajustes de cookies
              </h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Cerrar"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-white/10 px-6" role="tablist">
              {TABS.map((tab) => (
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

            {/* Tab content */}
            <div className="min-h-[200px] px-6 py-5">
              {activeTab === "why" && (
                <div className="space-y-3 text-sm leading-relaxed text-white/70">
                  <p>
                    En Ulpiano utilizamos cookies para entender cómo interactúas
                    con nuestra web y mejorar el servicio. Nunca vendemos datos
                    personales a terceros.
                  </p>
                  <p>
                    Las cookies esenciales son necesarias para el funcionamiento
                    del sitio. Las analíticas nos ayudan a entender qué páginas
                    son más útiles. Las de marketing permiten mostrar contenido
                    relevante en otras plataformas.
                  </p>
                  <p>
                    Puedes cambiar tus preferencias en cualquier momento desde el
                    enlace «Ajustes de cookies» en el pie de página.
                  </p>
                </div>
              )}

              {activeTab === "essential" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      Cookies esenciales
                    </span>
                    <span className="rounded-md bg-ulpiano-green/20 px-2.5 py-1 text-xs font-medium text-ulpiano-green">
                      Siempre activas
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">
                    Necesarias para el funcionamiento básico del sitio:
                    navegación, seguridad y persistencia de tus preferencias de
                    cookies. No almacenan información personal identificable.
                  </p>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      Cookies analíticas
                    </span>
                    <Toggle
                      checked={consent.analytics}
                      onChange={(v) =>
                        setConsent((s) => ({ ...s, analytics: v }))
                      }
                      label="Cookies analíticas"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">
                    Nos permiten medir el tráfico y analizar el comportamiento
                    de los visitantes de forma agregada (Google Analytics 4).
                    Ayudan a entender qué secciones son más relevantes y dónde
                    mejorar la experiencia.
                  </p>
                </div>
              )}

              {activeTab === "marketing" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      Cookies de marketing
                    </span>
                    <Toggle
                      checked={consent.marketing}
                      onChange={(v) =>
                        setConsent((s) => ({ ...s, marketing: v }))
                      }
                      label="Cookies de marketing"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">
                    Permiten mostrar anuncios relevantes en plataformas como
                    Google Ads y LinkedIn. Se utilizan para medir la eficacia de
                    las campañas publicitarias y evitar mostrarte anuncios
                    repetitivos.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-white/10 px-6 py-4">
              <button
                type="button"
                onClick={() => save(consent)}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Guardar ajustes
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-ulpiano-green px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-light hover:shadow-md"
              >
                Aceptar todo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
