# Notes d'execució del Pla A — Per al Pla B (traducció al català)

> Generat automàticament el 15 d'abril 2026 durant l'execució del Pla A SEO.
> Aquests canvis han de reflectir-se a la versió catalana `/ca/*`.

---

## A.1 — Migració a SSR de /modelos/*

### Patró aplicat a les 5 pàgines de models

Cada pàgina de model ha estat refactoritzada seguint el patró:
- **`page.tsx`** → Server Component pur. Conté TOT el contingut textual (h1, h2, p, taules, seccions de valor). El schema FAQPage JSON-LD s'ha mogut aquí (era al Client Component, Google no el veia).
- **`*Client.tsx`** → Només conté el component `FaqItem` (useState) i l'export `Modelo*InteractiveShells({ faqs })`.

### Nou component compartit
- **`/src/components/modelos/ModelNav.tsx`** → `"use client"` (necessita `active` prop). Conté els 5 links de navegació entre models. Cal crear l'equivalent català: `/src/components/modelos/ModelNavCa.tsx` amb els hrefs `/ca/models/model-*`.

### Fitxers modificats (espanyol)

| Fitxer | Canvi |
|--------|-------|
| `modelos/modelo-650/page.tsx` | Refactoritzat a SSR complet |
| `modelos/modelo-650/Modelo650Client.tsx` | Reduït a FaqItem + InteractiveShells |
| `modelos/modelo-651/page.tsx` | Nou SSR (creat des de zero) |
| `modelos/modelo-651/Modelo651Client.tsx` | Nou client mínim |
| `modelos/modelo-652/page.tsx` | Nou SSR |
| `modelos/modelo-652/Modelo652Client.tsx` | Nou client mínim |
| `modelos/modelo-653/page.tsx` | Nou SSR |
| `modelos/modelo-653/Modelo653Client.tsx` | Nou client mínim |
| `modelos/modelo-660/page.tsx` | Nou SSR |
| `modelos/modelo-660/Modelo660Client.tsx` | Nou client mínim |

### hreflang afegits a tots els models

Cada `page.tsx` de model ara inclou:
```ts
alternates: {
  canonical: "https://ulpiano.es/modelos/modelo-XXX",
  languages: {
    es: "https://ulpiano.es/modelos/modelo-XXX",
    ca: "https://ulpiano.es/ca/models/model-XXX",
  },
},
```

### URLs catalanes dels models (slugs en català)

| URL espanyola | URL catalana | Títol català |
|---------------|--------------|--------------|
| `/modelos/modelo-650` | `/ca/models/model-650` | Model 650: Guia Completa |
| `/modelos/modelo-651` | `/ca/models/model-651` | Model 651: Impost de Donacions |
| `/modelos/modelo-652` | `/ca/models/model-652` | Model 652: Assegurances de Vida |
| `/modelos/modelo-653` | `/ca/models/model-653` | Model 653: Consolidació de Domini |
| `/modelos/modelo-660` | `/ca/models/model-660` | Model 660: Declaració de Successions |

### Dades per a la traducció al català

Les dades de cada model (faqs, summaryTable, reductions, funnelRows) estan definides com a `const` dins de cada `page.tsx` espanyol. Per a la versió catalana, cal:
1. Copiar el `page.tsx` espanyol a `src/app/ca/(marketing)/models/model-XXX/page.tsx`
2. Traduir tots els strings de text (contingut, metadata, breadcrumbs)
3. Canviar `<ModelNav active="XXX" />` per `<ModelNavCa active="XXX" />`
4. Canviar els href dels CTAs: `/demo` → `/ca/demo`, `/soluciones/fiscalidad-sucesoria` → `/ca/solucions/fiscalitat-successoria`
5. Canviar els hreflang (es ↔ ca)

---

## A.2 — Hub /soluciones indexat

**Fitxer:** `src/app/(marketing)/soluciones/page.tsx`

**Canvis:**
- Eliminat `robots: { index: false }`
- Afegit title: `"Soluciones de Gestión Sucesoria | Ulpiano"`
- Afegit contingut real: h1, p introductori, grid de 4 cards amb links a les solucions, CTA
- Afegit hreflang ca: `https://ulpiano.es/ca/solucions`

**Equivalent català a crear:** `/ca/solucions/page.tsx`
- URL: `https://ulpiano.es/ca/solucions`
- Títol: `"Solucions de Gestió Successòria | Ulpiano"`

---

## A.3 — Title tags /pensado-para/* reescrits

Tots els 6 fitxers ara tenen title tags amb keyword primària i hreflang català.

| Pàgina | Nou title | hreflang ca |
|--------|-----------|-------------|
| `/pensado-para/despachos` | Software Herencias para Despachos de Abogados \| Ulpiano | `/ca/pensat-per/despatxos` |
| `/pensado-para/notarias` | Gestión Digital de Herencias para Notarías \| Ulpiano | `/ca/pensat-per/notaries` |
| `/pensado-para/asesorias` | Asesoría Fiscal de Herencias: Modelo 650 Automatizado \| Ulpiano | `/ca/pensat-per/assessories` |
| `/pensado-para/family-office` | Planificación Sucesoria para Family Office \| Ulpiano | `/ca/pensat-per/family-office` |
| `/pensado-para/funerarias` | Tramitación de Herencias para Funerarias \| Ulpiano | `/ca/pensat-per/funeraries` |
| `/pensado-para/aseguradoras` | Gestión Sucesoria para Aseguradoras y Pólizas de Vida \| Ulpiano | `/ca/pensat-per/asseguradores` |

**Mapa complet URLs catalanes /pensat-per/:**

| URL espanyola | URL catalana | Títol català recomanat |
|---------------|--------------|------------------------|
| `/pensado-para/despachos` | `/ca/pensat-per/despatxos` | Programari Herències per a Despatxos d'Advocats \| Ulpiano |
| `/pensado-para/notarias` | `/ca/pensat-per/notaries` | Gestió Digital d'Herències per a Notaries \| Ulpiano |
| `/pensado-para/asesorias` | `/ca/pensat-per/assessories` | Assessoria Fiscal d'Herències: Model 650 Automatitzat \| Ulpiano |
| `/pensado-para/family-office` | `/ca/pensat-per/family-office` | Planificació Successòria per a Family Office \| Ulpiano |
| `/pensado-para/funerarias` | `/ca/pensat-per/funeraries` | Tramitació d'Herències per a Funeràries \| Ulpiano |
| `/pensado-para/aseguradoras` | `/ca/pensat-per/asseguradores` | Gestió Successòria per a Asseguradores \| Ulpiano |

---

## A.4 — FAQPage schema (ja estava als Client files, ara és SSR)

El schema `FAQPage` JSON-LD ha estat mogut dels `*Client.tsx` (on Google no el podia indexar) als `page.tsx` Server Components. Ara es renderitza en el HTML estàtic.

**Per al català:** Afegir el mateix schema a cada `page.tsx` català, amb els textos de les preguntes i respostes traduïts al català.

---

## A.5 — Cross-links entre silos

### Component creat
**`/src/components/CrossLink.tsx`** → Component SSR. Renderitza una franja de link juice al final de cada pàgina. Props: `href`, `label`, `description`.

```tsx
import { CrossLink } from "@/components/CrossLink";
<CrossLink href="/modelos" label="Guía completa de modelos fiscales sucesorios" description="..." />
```

### Cross-links implementats

| Pàgina | Destí | Anchor text |
|--------|-------|-------------|
| `/soluciones/fiscalidad-sucesoria` | `/modelos` | "Guía completa de modelos fiscales sucesorios" |
| `/soluciones/planificacion-sucesoria` | `/modelos/modelo-660` | "Genera el inventario de bienes con Ulpiano" |
| `/pensado-para/despachos` | `/recursos/checklist-expediente-sucesorio` | "Descarga la checklist del expediente sucesorio" |
| `/pensado-para/asesorias` | `/modelos/modelo-650` | "Qué es el Modelo 650 y cómo se calcula" |

### Cross-links pendents (no implementats en Pla A)
- `/modelos/modelo-650` → `/soluciones/fiscalidad-sucesoria` (ja hi és dins del JSX del page.tsx)
- `/modelos/modelo-660` → `/soluciones/planificacion-sucesoria` (ja hi és dins del JSX)
- `/pensado-para/family-office` → `/recursos/checklist-expediente-sucesorio`

### Per al català
El component CrossLink s'ha d'importar igualment a cada pàgina catalana. Canviar els `href` als equivalents `/ca/*` i traduir `label` i `description`.

---

## A.6 — Font display:swap

**Fitxer:** `src/app/layout.tsx`

Afegit `display: "swap"` als 3 loaders de font:
- `Inter` (corporativa)
- `DM_Sans` (body)
- `JetBrains_Mono` (monospace / codi)

**Impacte:** Redueix el Flash Of Invisible Text (FOIT) i millora el LCP de Google.

**Per al català:** Si el Pla B usa el `layout.tsx` arrel (recomanat), aquest canvi ja aplica a les pàgines catalanes automàticament.

---

## Estructura de fitxers recomanada per al Pla B

```
src/app/
├── layout.tsx                          ← layout arrel (ja té display:swap)
├── (marketing)/                        ← rutas espanyoles (sense canvis)
│   ├── modelos/
│   │   ├── modelo-650/page.tsx         ← SSR ✓ | hreflang ca ✓
│   │   └── ...
│   ├── pensado-para/
│   │   ├── despachos/page.tsx          ← title ✓ | hreflang ca ✓
│   │   └── ...
│   └── soluciones/
│       ├── page.tsx                    ← indexat ✓ | hreflang ca ✓
│       └── ...
│
└── ca/                                 ← NOU: rutas catalanes
    └── (marketing)/
        ├── models/
        │   ├── model-650/
        │   │   ├── page.tsx            ← copiar de /modelos/modelo-650/page.tsx + traduir
        │   │   └── Model650Client.tsx  ← copiar de Modelo650Client.tsx + traduir FAQs
        │   └── ...
        ├── pensat-per/
        │   ├── despatxos/page.tsx
        │   └── ...
        └── solucions/
            └── page.tsx
```

---

## Resum de tots els fitxers tocats al Pla A

```
NOUS:
  src/components/modelos/ModelNav.tsx
  src/components/CrossLink.tsx
  src/app/(marketing)/modelos/modelo-651/page.tsx
  src/app/(marketing)/modelos/modelo-651/Modelo651Client.tsx
  src/app/(marketing)/modelos/modelo-652/page.tsx
  src/app/(marketing)/modelos/modelo-652/Modelo652Client.tsx
  src/app/(marketing)/modelos/modelo-653/page.tsx
  src/app/(marketing)/modelos/modelo-653/Modelo653Client.tsx
  src/app/(marketing)/modelos/modelo-660/page.tsx
  src/app/(marketing)/modelos/modelo-660/Modelo660Client.tsx

MODIFICATS:
  src/app/layout.tsx                                          (display:swap)
  src/app/(marketing)/modelos/modelo-650/page.tsx            (SSR + hreflang)
  src/app/(marketing)/modelos/modelo-650/Modelo650Client.tsx (reduït a FAQ island)
  src/app/(marketing)/soluciones/page.tsx                    (indexat + contingut)
  src/app/(marketing)/soluciones/fiscalidad-sucesoria/page.tsx (cross-link + hreflang pendent)
  src/app/(marketing)/soluciones/planificacion-sucesoria/page.tsx (cross-link)
  src/app/(marketing)/pensado-para/despachos/page.tsx        (title + hreflang + cross-link)
  src/app/(marketing)/pensado-para/notarias/page.tsx         (title + hreflang)
  src/app/(marketing)/pensado-para/asesorias/page.tsx        (title + hreflang + cross-link)
  src/app/(marketing)/pensado-para/family-office/page.tsx    (title + hreflang)
  src/app/(marketing)/pensado-para/funerarias/page.tsx       (title + hreflang)
  src/app/(marketing)/pensado-para/aseguradoras/page.tsx     (title + hreflang)
```
