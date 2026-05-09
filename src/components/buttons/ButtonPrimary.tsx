"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonPrimaryProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Location identifier for analytics (e.g. "hero", "cta_final", "header") */
  trackLocation?: string;
}

const sizeStyles = {
  sm: "px-6 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

function trackCta(text: string, href: string | undefined, location: string | undefined) {
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer?.push({
    event: "cta_clicked",
    button_text: text,
    cta_location: location ?? "unknown",
    destination_url: href ?? "",
  });
}

export default function ButtonPrimary({
  href,
  onClick,
  children,
  size = "md",
  className = "",
  trackLocation,
}: ButtonPrimaryProps) {
  const styles = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-250 rounded-md",
    "bg-ulpiano-green text-white hover:bg-green-light shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ulpiano-green",
    sizeStyles[size],
    className
  );

  const textContent = typeof children === "string" ? children : "";

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        onClick={() => trackCta(textContent, href, trackLocation)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        trackCta(textContent, undefined, trackLocation);
        onClick?.();
      }}
      className={styles}
    >
      {children}
    </button>
  );
}
