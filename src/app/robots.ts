import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/login",
        "/api/",
        "/recursos/checklist-expediente-sucesorio/gracias",
        "/ca/recursos/checklist-expedient-successori/gracias",
      ],
    },
    sitemap: "https://ulpiano.es/sitemap.xml",
  };
}
