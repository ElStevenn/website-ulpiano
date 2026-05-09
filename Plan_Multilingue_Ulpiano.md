# Plan para convertir Ulpiano en un sitio multilingüe

Referencia: Next.js 16 (App Router) — `node_modules/next/dist/docs/01-app/02-guides/internationalization.md`.
Estado actual: sitio monolingüe en español bajo `https://ulpiano.es`, rutas tipo `/soluciones/...`, `/pensado-para/...`, `/modelos/...`, `/recursos/...`, `/legal/...`, `/demo`, `/contacto`, `/precios`. GTM activo, metadata centralizada en `src/app/layout.tsx`, sitemap y robots generados.

---

## 1. Estrategia y decisiones base

1. **Locales objetivo**: `es-ES` (por defecto) y `ca-ES` en la primera fase. Arquitectura preparada para `en-GB` y `gl-ES`/`eu-ES` en fases posteriores.
2. **Routing**: sub-path por locale (`/es/...`, `/ca/...`). Descartamos dominios separados (coste SEO + infraestructura) y query-param (mala indexación). El idioma por defecto se servirá también desde la raíz (`/`) con `canonical` a `/es/...` o reescritura interna, según lo que decidamos en SEO.
3. **Slugs traducidos**: sí. En catalán los slugs se traducen (mejor SEO local y UX). Se mantiene un mapa `slug-es ↔ slug-ca` en un diccionario de rutas.
4. **Contenido**: traducción humana revisada (no MT puro), especialmente en páginas legales, modelos fiscales y copy comercial.
5. **Fallback**: si falta una traducción en `ca`, se devuelve `404` antes que contenido mezclado (evita canibalización hreflang). Alternativa temporal: fallback a `es` con `noindex` hasta completar.

## 2. Arquitectura técnica (Next.js 16 App Router)

1. **Reestructurar a `src/app/[lang]/...`**
   - Mover `(marketing)`, `legal`, `login`, `not-found`, `planificador-herencias`, `page.tsx`, `layout.tsx` dentro de `src/app/[lang]/`.
   - Mantener fuera `api/`, `opengraph-image.tsx` global, `robots.ts`, `sitemap.ts`, `favicon.ico`.
   - `generateStaticParams` en el layout raíz: `[{ lang: 'es' }, { lang: 'ca' }]`.
   - `<html lang={lang}>` dinámico en el root layout.
2. **Proxy/middleware de detección**
   - Fichero `src/proxy.ts` (Next 16 renombra `middleware` → `proxy`) con `@formatjs/intl-localematcher` + `negotiator`.
   - Lógica: si la URL no empieza por `/es` ni `/ca`, detectar `Accept-Language` + cookie `NEXT_LOCALE` y redirigir.
   - Cookie `NEXT_LOCALE` persistente (1 año) escrita desde el selector de idioma.
3. **Diccionarios**
   - `src/app/[lang]/dictionaries.ts` con `import 'server-only'` y carga dinámica de `dictionaries/es.json` y `dictionaries/ca.json`.
   - Tipado `Locale` + helper `hasLocale` para 404 automático.
   - Estructura por namespaces: `common`, `nav`, `home`, `soluciones`, `pensadoPara`, `modelos`, `recursos`, `precios`, `demo`, `contacto`, `legal`, `emails`, `cookies`, `seo`.
4. **Mapa de slugs**
   - `src/lib/i18n/routes.ts` con objeto `routesByLocale` (p. ej. `soluciones↔solucions`, `precios↔preus`, `contacto↔contacte`, `modelos↔models`, `pensado-para↔pensat-per`, `recursos↔recursos`). Helper `localizedHref(locale, key)` usado por `Header`, `Footer`, `CrossLink`, sitemap y redirects.
5. **Redirects existentes**
   - Migrar el redirect de `/planificador-herencias → /soluciones/planificacion-sucesoria` dentro de `[lang]` y añadir equivalente catalán.
   - Regla: `/{ruta-legacy}` → `/es/{ruta-legacy}` con `308`.

## 3. SEO internacional

1. **hreflang**: generar `alternates.languages` en `generateMetadata` de cada página (`es-ES`, `ca-ES`, `x-default` → `es-ES`). Comprobar con Search Console.
2. **Canonical**: canonical propia de cada locale, nunca cruzada.
3. **Sitemap**: `sitemap.ts` devuelve entradas para ambos locales con `alternates` (`<xhtml:link rel="alternate" hreflang=...>`). Reestructurar el array actual para iterar por locales.
4. **robots.ts**: sin cambios estructurales; validar que no bloquea `/ca`.
5. **Structured data**: `@context`/`@type` existentes (Organization, Product, FAQPage, etc.) añadir `inLanguage` y traducir `name`/`description`.
6. **OG / Twitter**: traducir `title`, `description`, y generar `opengraph-image.tsx` por locale (o parametrizado).
7. **Redirecciones históricas**: conservar todas las URLs `es` actuales redirigidas a `/es/...` con 301 permanentes.
8. **Search Console**: añadir propiedad de prefijo `/ca/` y monitorizar indexación separada.

## 4. UX y componentes

1. **LanguageSwitcher**: componente cliente en `Header` y `Footer`. Muestra `ES | CA`, usa `usePathname` + `routesByLocale` para saltar a la URL equivalente preservando sección.
2. **Header/Footer/CookieBanner/CrossLink**: refactor para leer strings del diccionario y usar `localizedHref`.
3. **Formularios (`/contacto`, `/demo`, captura de leads)**: mensajes de validación, placeholders, consentimientos RGPD y emails auto-respuesta traducidos (`src/lib/email-templates`).
4. **Accesibilidad**: `lang` en `<html>` correcto por locale; revisar `aria-label` traducidos.

## 5. Tracking (GTM / dataLayer)

1. Añadir variable `page_language` al `dataLayer` desde `DataLayerRouteTracker` (`es` | `ca`).
2. Duplicar/segmentar triggers principales por idioma si marketing necesita KPIs separados.
3. Actualizar `tracking-plan.md` y el contenedor `gtm-container-ulpiano.json` con la nueva dimensión.

## 6. Legal

1. Revisión jurídica específica en catalán de: Aviso Legal, Privacidad, Términos, Cookies y textos de consentimiento. No traducir con MT.
2. Versiones `es` y `ca` con la misma fecha de actualización y referencias cruzadas.

## 7. Contenido y terminología

1. Glosario bilingüe sucesorio/fiscal (ISD/ISD autonómico, plusvalía municipal, cuaderno particional, cabeza de familia, legitimari, usdefruit, etc.).
2. Adaptación de modelos fiscales: `650/651/652/653/660` mantienen nombre, pero la descripción debe referenciar la Agència Tributària de Catalunya (ATC) y sus particularidades (reducciones autonómicas catalanas).
3. Revisión estilística por un lingüista nativo.

## 8. Fases y entregables

- **F1 — Infraestructura i18n (1 sem.)**: `[lang]`, proxy, diccionarios vacíos, switcher, hreflang, sitemap multi-locale. Deploy con solo `es` traducido.
- **F2 — Traducción de estructura (1 sem.)**: nav, footer, home, soluciones, pensado-para, CTAs, formularios.
- **F3 — Traducción long-form (2 sem.)**: páginas de modelos, recursos, lead magnets, legales.
- **F4 — QA + SEO (1 sem.)**: pruebas de hreflang, Lighthouse por locale, validación Search Console, smoke test de formularios y emails.
- **F5 — Lanzamiento**: despliegue, envío de sitemap a GSC, anuncio.

---

# Actuaciones para traducir la web al catalán

Lista ejecutable, por orden recomendado.

1. **Inventario de strings**
   - Recorrer `src/app` y `src/components`. Listar cada literal visible en un spreadsheet con columnas: archivo, clave propuesta, `es`, `ca`, estado. Incluir `metadata` (title, description, keywords).
2. **Crear dictionaries**
   - Generar `src/app/[lang]/dictionaries/es.json` copiando los literales actuales y `ca.json` como espejo vacío para rellenar.
3. **Refactor progresivo de componentes**
   - Reemplazar literales por `dict.<namespace>.<clave>` empezando por `Header`, `Footer`, `CookieBanner`, `CrossLink`, luego home, soluciones, pensado-para.
4. **Traducir nav y microcopy core**
   - Menú: Solucions, Pensat per, Models, Recursos, Preus, Contacte, Demo.
   - CTAs: "Sol·licitar demo", "Parlar amb l'equip", "Descarregar checklist".
5. **Traducir slugs y crear `routesByLocale`**
   - Ej.: `planificacion-sucesoria↔planificacio-successoria`, `fiscalidad-sucesoria↔fiscalitat-successoria`, `documentacion-sucesoria↔documentacio-successoria`, `procesamiento-documental↔processament-documental`, `despachos↔despatxos`, `notarias↔notaries`, `asesorias↔assessories`, `family-office↔family-office`, `funerarias↔funeraries`, `aseguradoras↔asseguradores`, `checklist-expediente-sucesorio↔checklist-expedient-successori`, `privacidad↔privacitat`, `terminos↔condicions`, `cookies↔galetes`.
6. **Traducir contenido long-form**
   - Home, soluciones (4), pensado-para (6), modelos (5 + índice), recursos, precios, demo, contacto. Un PR por sección para facilitar revisión.
7. **Traducir metadatos SEO por página**
   - `generateMetadata` que lea el diccionario `seo.<ruta>.{title,description,keywords,ogTitle,ogDescription}`. Definir `alternates.canonical` y `alternates.languages`.
8. **Traducir plantillas de email**
   - `src/lib/email-templates/*`: asunto y cuerpo en ambos idiomas. Enviar la versión según el locale de origen del lead (campo `locale` en el payload de `leads.ts`).
9. **Traducir textos legales con revisión jurídica**
   - Privacitat, Avís legal, Condicions, Galetes. Mantener misma fecha de última actualización en ambas versiones.
10. **Traducir cookie banner y preferencias**
    - Texto, botones, enlaces al detalle de galetes. Verificar integración con GTM/Consent Mode.
11. **Traducir structured data**
    - En `src/components/seo/*` añadir `inLanguage` y traducir campos textuales (FAQ, HowTo, Organization.description).
12. **Traducir imágenes con texto y OG images**
    - Revisar `public/` y `opengraph-image.tsx`. Generar variante `ca`.
13. **Language switcher**
    - Implementar, probar preservación de ruta, escribir cookie `NEXT_LOCALE`.
14. **Sitemap y hreflang**
    - Actualizar `sitemap.ts` para emitir entradas `/es/...` y `/ca/...` con alternates. Añadir `x-default`.
15. **Redirecciones**
    - 301 de URLs históricas `es` → `/es/...`. Añadir mapa legacy→`/ca/...` cuando aplique (solo para URLs públicamente indexadas).
16. **GTM / analítica**
    - `dataLayer.page_language`. Crear vista/segmento por idioma en GA4. Actualizar `tracking-plan.md` y `gtm-container-ulpiano.json`.
17. **QA funcional**
    - Checklist por cada ruta en `ca`: render, metadatos, hreflang, canonical, formularios, emails, CTAs, enlaces internos, 404, switcher, cookies.
18. **QA lingüístico**
    - Revisión por nativo: terminología sucesoria/fiscal, tono, registro formal de "vostè", consistencia de glosario.
19. **Validación SEO pre-lanzamiento**
    - Screaming Frog con modo hreflang, Rich Results Test, Lighthouse `ca`, GSC URL Inspection sobre 5-10 URLs clave.
20. **Lanzamiento y monitorización**
    - Publicar, dar de alta prefijo `/ca/` en GSC, enviar sitemap, monitorizar cobertura e impresiones catalanas durante 4-6 semanas, iterar.

---

## Riesgos y mitigaciones

- **Traducción incompleta en producción** → gate de release que falle build si faltan claves en `ca.json`.
- **Canibalización es/ca** → hreflang correcto + slugs distintos + canonical propia.
- **Pérdida de rankings en URLs legacy** → 301 en `next.config.ts` y conservar estructura `es`.
- **Textos legales desalineados** → proceso de publicación con doble firma legal.
- **Coste de mantenimiento** → diccionarios centralizados y PR template que obliga a añadir claves en los dos idiomas.
