"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

const ROUTE_EVENTS: { pattern: RegExp; event: string; propKey: string }[] = [
  {
    pattern: /^\/soluciones\/(.+)$/,
    event: "solution_explored",
    propKey: "solution_name",
  },
  {
    pattern: /^\/pensado-para\/(.+)$/,
    event: "segment_explored",
    propKey: "segment_name",
  },
  {
    pattern: /^\/modelos\/(.+)$/,
    event: "modelo_explored",
    propKey: "modelo_type",
  },
];

export default function DataLayerRouteTracker() {
  const pathname = usePathname();
  const lastTracked = useRef("");

  useEffect(() => {
    if (pathname === lastTracked.current) return;
    lastTracked.current = pathname;

    for (const { pattern, event, propKey } of ROUTE_EVENTS) {
      const match = pathname.match(pattern);
      if (match?.[1]) {
        const w = window as DataLayerWindow;
        w.dataLayer?.push({ event, [propKey]: match[1] });
        return;
      }
    }
  }, [pathname]);

  return null;
}
