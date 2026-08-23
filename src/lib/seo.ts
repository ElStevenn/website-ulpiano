import type { Metadata } from "next";

export const SITE_URL = "https://ulpiano.es";
export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Ulpiano — Plataforma Integral de Gestión Sucesoria",
} as const;

type Locale = "es" | "ca";

type PageMetaInput = {
  title: string;
  description: string;
  esPath: string;
  caPath: string;
  locale?: Locale;
  ogType?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
};

function abs(path: string) {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function hreflang(esPath: string, caPath: string) {
  const es = abs(esPath);
  return {
    canonical: undefined as string | undefined,
    languages: {
      es,
      ca: abs(caPath),
      "x-default": es,
    },
  };
}

export function pageMetadata({
  title,
  description,
  esPath,
  caPath,
  locale = "es",
  ogType = "website",
  ogTitle,
  ogDescription,
}: PageMetaInput): Metadata {
  const path = locale === "ca" ? caPath : esPath;
  const canonical = abs(path);
  const es = abs(esPath);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es,
        ca: abs(caPath),
        "x-default": es,
      },
    },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: canonical,
      siteName: "Ulpiano",
      locale: locale === "ca" ? "ca_ES" : "es_ES",
      type: ogType,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [OG_IMAGE.url],
    },
  };
}
