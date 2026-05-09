"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { esToCaMap, caToEsMap } from "./nav-config-ca";

/**
 * LangSwitch — ES | CA selector that jumps to the equivalent URL
 * in the other language. If no equivalent mapping exists, falls back
 * to the home page of the other language.
 */
export default function LangSwitch() {
  const pathname = usePathname() || "/";
  const isCa = pathname === "/ca" || pathname.startsWith("/ca/");

  // Normalize pathname (strip trailing slash except for root)
  const clean = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  // Determine the "other language" URL
  const otherHref = isCa
    ? caToEsMap[clean] || "/"
    : esToCaMap[clean] || "/ca";

  return (
    <div
      className="inline-flex items-center gap-0 rounded-md border border-white/[0.08] bg-white/[0.03] p-0.5"
      role="group"
      aria-label="Cambiar idioma"
    >
      <Link
        href={isCa ? otherHref : clean}
        aria-current={!isCa ? "true" : undefined}
        className={`px-2 py-0.5 rounded text-[12px] font-medium transition-colors ${
          !isCa
            ? "bg-white/[0.08] text-white"
            : "text-white/50 hover:text-white"
        }`}
      >
        ES
      </Link>
      <Link
        href={!isCa ? otherHref : clean}
        aria-current={isCa ? "true" : undefined}
        className={`px-2 py-0.5 rounded text-[12px] font-medium transition-colors ${
          isCa
            ? "bg-white/[0.08] text-white"
            : "text-white/50 hover:text-white"
        }`}
      >
        CA
      </Link>
    </div>
  );
}
