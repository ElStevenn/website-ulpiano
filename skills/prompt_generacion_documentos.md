# PROMPT — Diseño de la página "Documentación Sucesoria" (ulpiano.es/soluciones/documentacion-sucesoria)

> **Versión:** v2 — Next.js multi-página
> Adaptado para funcionar dentro de la arquitectura Next.js App Router del proyecto `ulpianoweb`.
> Ruta del componente: `src/app/(marketing)/soluciones/documentacion-sucesoria/page.tsx`

## Contexto del proyecto

Estás trabajando en la web de **Ulpiano** (ulpiano.es), una plataforma SaaS B2B de planificación y gestión sucesoria integral para el mercado legal español.

Lee los archivos `product-marketing-context.md` y `contenido_generacion_documentos.md` que tienes en `skills/` antes de empezar. El primero contiene el contexto estratégico del producto; el segundo contiene el copy definitivo de cada sección.

Esta es una **página de solución** (solution page). Su objetivo es mostrar al profesional qué documentos concretos produce Ulpiano a partir del expediente y convencerle de solicitar una demo.

Lee también `MAPEO_PAGINAS_CONTENIDOS.md` para entender la arquitectura de rutas y cómo esta página se conecta con el resto del sitio.

---

## Arquitectura Next.js y componentes compartidos

Esta página vive dentro del route group `(marketing)/` y reutiliza los componentes globales del proyecto:

```tsx
// src/app/(marketing)/soluciones/documentacion-sucesoria/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentación Sucesoria | Cuaderno Particional y Modelos Fiscales — Ulpiano",
  description:
    "Genera el cuaderno particional, la escritura de partición, el inventario formal y los Modelos 650 y 660 desde los datos del expediente sucesorio. Sin copiar. Sin transcribir.",
  alternates: { canonical: "https://ulpiano.es/soluciones/documentacion-sucesoria" },
};
```

### Componentes compartidos disponibles

| Componente | Uso en esta página |
|---|---|
| `<Header />` | Nav global con links a `/soluciones`, `/pensado-para/despachos`, `/precios`, `/demo` |
| `<Footer />` | Footer global con mapa del sitio completo |
| `<Container>` | Wrapper `max-width: 1200px` centrado |
| `<Section>` | Sección con padding vertical consistente y fondo configurable |
| `<ButtonPrimary href="/demo">` | CTA principal — enlaza a `/demo` |
| `<ButtonGhost href="#como-funciona">` | CTA secundario o anchor scroll |
| `<Eyebrow>` | Label de sección (mayúsculas, tracking, slate) |
| `<ScrollReveal>` | Wrapper de animación al entrar en viewport |

### Navegación interna

Todos los enlaces internos usan `next/link`:

```tsx
import Link from "next/link";
// <Link href="/soluciones/planificacion-sucesoria">Planificador de Herencias</Link>
// <Link href="/soluciones/fiscalidad-sucesoria">Motor Fiscal ISD</Link>
// <Link href="/pensado-para/despachos">Despachos</Link>
// <Link href="/demo">Solicita tu demo</Link>
```

### Componentes interactivos

Los componentes con estado (tabs de segmentos, animación de métricas) llevan directiva `'use client'` y se importan como módulos independientes:

```tsx
// src/components/marketing/DocumentosTabs.tsx
"use client";
// ... lógica de tabs con useState
```

---

## Objetivo de esta tarea

Diseñar y maquetar la **página completa "Documentación Sucesoria"** como componente Next.js dentro de la ruta `src/app/(marketing)/soluciones/documentacion-sucesoria/page.tsx`.

**Objetivo de conversión:** Solicitar demo.
**Audiencia:** Abogado de despacho mediano, asesor fiscal con cartera ISD, notario.
**Mensaje central:** El documento se genera desde el expediente. Sin copiar datos. Sin transcribir. Sin versiones contradictorias.

---

## Filosofía de copy — OUTPUT, no proceso

**❌ Evitar:**
- "Automatiza la creación de documentos sucesorios"
- "Genera documentos con un solo clic"
- "IA que redacta por ti"
- "Sin complicaciones"

**✅ Usar:**
- "El cuaderno particional, generado. Con tus datos, tu expediente y la norma aplicada."
- "Un dato se introduce una vez. Aparece correcto en todos los documentos."
- "Tu criterio jurídico es el centro. Ulpiano se encarga de que los datos lleguen correctos al documento."

**Nota crítica:** Ulpiano NO redacta por el profesional. Genera borradores desde datos estructurados. El profesional revisa, ajusta y valida. Esta distinción es fundamental para la credibilidad del producto ante un público jurídico.

---

## Sistema de diseño

Hereda **íntegro** el sistema visual de `prompt_home_ulpiano_v2.md`:

### Paleta de colores (usar con exactitud)

| Token | Hex | Uso |
|---|---|---|
| `night` | `#0F1F3D` | Fondo header, hero, nav, banners oscuros |
| `ink` | `#1E293B` | Texto principal, titulares en fondo claro |
| `slate` | `#64748B` | Texto secundario, descripciones |
| `fog` | `#94A3B8` | Texto desactivado, metadatos |
| `mist` | `#CBD5E1` | Bordes, divisores, separadores |
| `surface` | `#F1F5F9` | Fondos de card, filas alternadas |
| `white` | `#FFFFFF` | Fondo principal |
| `ulpiano-green` | `#2D6A4F` | Botón primario, CTA principal, estados validados |
| `green-light` | `#40916C` | Hover del botón, badges activos |
| `green-bg` | `#D8F3DC` | Fondo mensajes de éxito |

### Tipografía

| Contexto | Fuente |
|---|---|
| Titulares marketing / landing | `DM Sans Bold` o `Inter Bold` |
| Cuerpo de texto web | `Inter Regular / Medium` |
| Datos numéricos, referencias legales | `JetBrains Mono` o `IBM Plex Mono` |

### Escala tipográfica (páginas internas — ligeramente más compacta que home)

| Nivel | Desktop | Tablet (≤1024px) | Mobile (≤768px) | Peso | Line-height |
|---|---|---|---|---|---|
| H1 (hero) | 56px | 42px | 32px | 700 (DM Sans Bold) | 1.15 |
| H2 (sección) | 42px | 34px | 28px | 700 (DM Sans Bold) | 1.2 |
| H3 (card/bloque) | 24px | 22px | 20px | 600 (Inter SemiBold) | 1.3 |
| Body large | 20px | 18px | 17px | 400 (Inter Regular) | 1.6 |
| Body | 16px | 16px | 15px | 400 (Inter Regular) | 1.7 |
| Caption / eyebrow | 13px | 13px | 12px | 500 (Inter Medium) | 1.4 |
| Mono (números) | 32px+ contexto | — | — | 400 (JetBrains Mono) | 1.2 |

### Espaciado, cards, botones, animaciones

Heredados íntegros de `prompt_home_ulpiano_v2.md`. Mismas reglas de:
- Sistema de espaciado (base 8px, secciones 80px desktop / 48px mobile)
- Tratamiento de cards (border-radius 12px, sombra, hover con elevación)
- Botones `.btn-primary` y `.btn-ghost`
- Scroll reveal (translateY 32px, 700ms, stagger 100ms)
- Contenedor `max-width: 1200px`
- Eyebrows (mayúsculas, `letter-spacing: 0.08em`, color `slate`)

---

## Estructura de la página — Secciones

Usa comentarios JSX claros: `{/* SECCIÓN X: NOMBRE */}`.

Alternancia de fondos:
- `<Header />` → dark (componente global)
- Hero → dark (night)
- Problema → white
- Outputs (documentos producidos) → surface
- Cómo funciona → white
- Tipos de documentos → surface
- Para quién → white (tabs con fondo night en tab activo)
- Comparativa (manual vs Ulpiano) → surface
- Métricas + Testimonio → dark (night)
- CTA final → dark (gradiente sutil)
- `<Footer />` → ink (componente global)

---

### SECCIÓN 1: HERO

**Layout:** CSS Grid — `grid-template-columns: 1fr 1fr` en desktop. Copy izquierda, mockup derecha. Mobile: stack vertical.

**Eyebrow:** "DOCUMENTACIÓN SUCESORIA" — Inter Medium 13px, `letter-spacing: 0.08em`, `rgba(255,255,255,0.5)`, mayúsculas.

**H1:** "El cuaderno particional, generado. Con tus datos, tu expediente y la norma aplicada."
- DM Sans Bold, 56px desktop / 42px tablet / 32px mobile
- Line-height: 1.15
- Color: blanco
- `text-wrap: balance`
- `max-width: 600px`

**Subtítulo:** "Ulpiano toma el inventario patrimonial, el escenario sucesorio y el cálculo fiscal del expediente y produce el borrador del cuaderno particional en Word. Con los nombres correctos, las cifras coherentes y las referencias legales citadas."
- Inter Regular 17px, line-height 1.6, `rgba(255,255,255,0.75)`
- `max-width: 520px`
- `margin-top: var(--space-6)`

**CTA primario:** "Solicita tu demo gratuita" → `.btn-primary`
**CTA secundario:** "Ver un ejemplo de documento generado →" → `.btn-ghost`

**Mockup (derecha):** Vista simulada de un cuaderno particional generado. Construido con HTML/CSS:

- Ventana con barra superior (3 dots + "Cuaderno Particional — Exp. 2024-0847")
- Fondo `white` con bordes `surface`
- Contenido simulado del documento:
  - **Header del documento:** Texto centrado "CUADERNO PARTICIONAL" en DM Sans Bold 16px, `ink`. Debajo: "Herencia de D. Joan Puig i Ferrer" en Inter Medium 14px, `slate`.
  - **Sección simulada 1:** "PRIMERO.— INVENTARIO DE BIENES" en Inter SemiBold 13px, `ink`. Debajo dos líneas simuladas de texto en `fog` (barras grises representando texto, no texto real).
  - **Tabla simulada:** 3 filas × 3 columnas con:
    - Col 1: "Inmueble Girona", "Cta. Bancària", "Fons inversió" en Inter Regular 13px, `ink`
    - Col 2: valores en JetBrains Mono 13px, `ink`, alineados derecha: "€ 425.000", "€ 87.340", "€ 156.200"
    - Col 3: badges "Adjudicat" en `green-bg` con texto `#2D6A4F`, 11px
  - **Sección simulada 2:** "SEGON.— LEGÍTIMA" con un valor destacado: "€ 167.135,00" en JetBrains Mono 16px, `ulpiano-green`
  - **Pie:** Icono Word (SVG azul, 16px) + texto "Exportar a Word" en Inter Medium 12px, `slate`

- Badge flotante sobre el mockup (posición absoluta, esquina superior derecha del contenedor):
  - Fondo `green-bg`, texto `#2D6A4F`, Inter Medium 12px
  - Texto: "✓ Generado desde expediente"
  - border-radius 6px, padding 6px 12px
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`

- Tratamiento del contenedor: `border-radius: 12px`, sombra profunda, perspectiva sutil (`transform: perspective(1200px) rotateY(-2deg) rotateX(1deg)`), overflow -40px abajo

**Fondo hero:** `night` (#0F1F3D). Orbe decorativo sutil.
**Padding:** `calc(64px + var(--space-12))` top, `var(--space-20)` bottom.

---

### SECCIÓN 2: EL PROBLEMA

**Fondo:** white

**Eyebrow:** "EL PROBLEMA"
**H2:** "Copiar datos del Excel al Word no es trabajo jurídico"

**Layout:** Texto en prosa, `max-width: 720px`, centrado horizontalmente. Sin cards, sin bullets.

**Contenido:** (ver `contenido_generacion_documentos.md` § Sección 2 — tres párrafos)

**Tratamiento tipográfico:**
- H2: DM Sans Bold 42px, `ink`
- Cuerpo: Inter Regular 17px, line-height 1.7, `slate`
- Padding: `var(--space-20) 0`

**Elemento visual opcional:** Un mini-diagrama que muestre el flujo roto:
```
[Excel] ──copiar──→ [Word] ──revisar──→ [Word v2] ──copiar──→ [Word v3]
```
Implementado como flex row con flechas punteadas en `mist`, etiquetas en Inter Regular 13px `fog`, iconos outline 20px. En mobile, vertical. Este diagrama refuerza visualmente el problema sin necesidad de leerlo.

---

### SECCIÓN 3: QUÉ PRODUCE — LOS 4 OUTPUTS

**Fondo:** `surface` (#F1F5F9)

**Eyebrow:** "RESULTADOS"
**H2:** "Los documentos que salen del expediente"
**Subtítulo:** "Cada documento se genera a partir de datos ya validados en Ulpiano. Sin copiar. Sin transcribir. Sin rehacer tablas."

**Layout:** Grid `repeat(2, 1fr)` en desktop, stack en mobile. Gap `var(--space-6)`.

**4 cards** (fondo white, border `mist`, border-radius 12px, sombra, hover):

**Card 1 — Cuaderno particional**
- Icono: documento / libro (SVG 24px en círculo 44px `green-bg`)
- Título: "El borrador del cuaderno particional, en Word"
- Descripción: (ver contenido)
- Badge: "Word editable · Datos del expediente"
- Bloque visual interno: fondo `surface`, border-radius 8px, padding 16px. Icono Word (SVG azul 20px) + texto "cuaderno_particional_exp2024-0847.docx" en JetBrains Mono 13px, `slate`.

**Card 2 — Inventario formal**
- Icono: clipboard / lista
- Título: "El inventario patrimonial como documento, no como tabla"
- Descripción: (ver contenido)
- Badge: "Formato oficial · Exportable"

**Card 3 — Escritura de partición**
- Icono: sello / firma
- Título: "La escritura, con los datos que ya tienes"
- Descripción: (ver contenido)
- Badge: "Adaptado al tipo de sucesión"

**Card 4 — Coherencia documental**
- Icono: enlace / cadena
- Título: "Un dato se introduce una vez. Aparece correcto en todos los documentos."
- Descripción: (ver contenido)
- Badge: "Dato único · Propagación automática"
- Este badge con fondo `#DBEAFE`, texto `#1E6A9E` (info color) para enfatizar como diferenciador

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 4: CÓMO FUNCIONA — 4 PASOS

**Fondo:** white

**Eyebrow:** "PROCESO"
**H2:** "Del expediente al documento, sin copiar nada"

**Layout:** Grid horizontal `repeat(4, 1fr)` desktop, stack vertical mobile. Conectores punteados.

Misma implementación visual que home y planificador:
- Número decorativo (DM Sans Bold 72px, `mist` 50%, position absolute)
- Icono circular (48px, borde `ulpiano-green`)
- Título (Inter SemiBold 18px, `ink`)
- Descripción (Inter Regular 15px, `slate`)
- Conector: `border-top: 2px dashed var(--mist)` horizontal / `border-left` vertical mobile

**Pasos:**

1. **Completa el expediente**
   - Icono: carpeta con check
   - "El inventario patrimonial, el escenario sucesorio y el cálculo fiscal ya están en Ulpiano. Los datos están listos."

2. **Selecciona el documento**
   - Icono: documento con cursor
   - "Cuaderno particional, inventario formal, escritura de partición. Cada plantilla sabe qué datos necesita del expediente."

3. **Revisa el borrador**
   - Icono: lupa sobre documento
   - "El documento se genera en Word con estructura profesional y cifras coherentes. Tú revisas y ajustas las cláusulas."

4. **Exporta y presenta**
   - Icono: descarga / compartir
   - "Descarga en Word o PDF. Listo para firma, protocolo notarial o presentación ante la administración tributaria."

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 5: CATÁLOGO DE DOCUMENTOS

**Fondo:** `surface` (#F1F5F9)

**Eyebrow:** "DOCUMENTOS"
**H2:** "Cada documento del expediente, generado desde los mismos datos"

**Layout:** Grid `repeat(3, 1fr)` desktop, `repeat(2, 1fr)` tablet, stack mobile. Gap `var(--space-6)`.

**5 bloques** — tratamiento ligero (sin sombra elevada, borde `mist`, fondo white, border-radius 8px, padding `var(--space-6)`):

Cada bloque:
- Icono: SVG outline 20px en `ulpiano-green`, sin círculo de fondo
- Título: Inter SemiBold 18px, `ink`
- Descripción: Inter Regular 14px, `slate`, line-height 1.6, 3-4 líneas máximo
- Badge inferior: tipo de documento en Inter Medium 11px, `slate`, `letter-spacing: 0.04em`

**Los 5 bloques:**

1. **Cuaderno particional**
   - "Identificación de intervinientes, inventario valorado, legítimas, formación de lotes, adjudicación y liquidación fiscal."
   - Badge: DOCUMENTO CENTRAL

2. **Inventario formal de bienes**
   - "Activos clasificados, valoraciones a fecha de devengo, pasivos deducibles, caudal relicto neto. Apto para acta notarial."
   - Badge: INVENTARIO

3. **Escritura de partición**
   - "Otorgantes, bienes adjudicados, cargas, referencias registrales. Cláusulas según tipo de sucesión."
   - Badge: ESCRITURA

4. **Modelo 660**
   - "Inventario de bienes y derechos en formato oficial. Generado desde el expediente."
   - Badge: MODELO FISCAL
   - Número "660" en JetBrains Mono 28px, `mist`, como elemento decorativo detrás del título (position absolute, top -4px, right 16px)

5. **Modelo 650**
   - "Autoliquidación individual por heredero. Base, reducciones, tarifa, bonificación, cuota a ingresar."
   - Badge: MODELO FISCAL
   - Número "650" en JetBrains Mono 28px, `mist`, mismo tratamiento decorativo

**Para los bloques de Modelo 660 y 650:** añadir un borde izquierdo de 3px en `ulpiano-green` para diferenciarlos visualmente como outputs fiscales conectados.

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 6: PARA QUIÉN

**Fondo:** white

**Eyebrow:** "SEGMENTOS"
**H2:** "Documentos profesionales para quien los necesita profesionales"

**Implementación:** Tabs horizontales (misma mecánica que home y planificador).

**3 tabs:**

**Tab 1 — Despachos de abogados**
- Claim: "El cuaderno particional que os costó tres días, listo en 20 minutos."
- ✓ El borrador se genera con los datos del expediente — tú revisas y ajustas
- ✓ Cada cifra del documento tiene trazabilidad al cálculo original
- ✓ Formato Word editable con estructura profesional estándar
- Mini-mockup: placeholder "Vista del Cuaderno Particional"

**Tab 2 — Asesorías fiscales**
- Claim: "El Modelo 650 de tu cliente, coherente con el inventario y el cálculo. Sin transcribir nada."
- ✓ Modelos 650 y 660 generados automáticamente desde el expediente
- ✓ Datos fiscales trazables: base imponible, reducciones, bonificaciones
- ✓ Actualización automática si cambia el reparto o la normativa
- Mini-mockup: placeholder "Vista del Modelo 650"

**Tab 3 — Notarías**
- Claim: "La escritura de partición con los datos ya verificados. Lista para el protocolo."
- ✓ Borrador de escritura con datos de otorgantes, bienes y referencias registrales
- ✓ Cláusulas adaptadas al tipo de sucesión y al derecho aplicable
- ✓ Integración con el inventario y el árbol familiar del expediente
- Mini-mockup: placeholder "Vista de la Escritura"

**Estilo de tabs:**
- Tab activo: fondo `night`, texto blanco, `border-radius: 8px`
- Tab inactivo: fondo transparente, texto `slate`, hover: texto `ink`
- Transición de contenido: opacity fade 250ms
- Layout de contenido: 2 columnas desktop (60% copy / 40% mockup)

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 7: COMPARATIVA — MANUAL VS ULPIANO

**Fondo:** `surface` (#F1F5F9)

**Eyebrow:** "DIFERENCIADORES"
**H2:** "Lo que cambia cuando el documento se genera desde el expediente"

**Layout:** Tabla comparativa estilizada (mismo tratamiento CSS que la comparativa del planificador):

```css
.comparison-table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--mist);
  background: var(--white);
}
.comparison-table th {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 16px 24px;
}
.comparison-table th:first-child {
  background: var(--surface);
  color: var(--slate);
}
.comparison-table th:last-child {
  background: rgba(45, 106, 79, 0.08);
  color: var(--ulpiano-green);
}
.comparison-table td {
  padding: 16px 24px;
  font-size: 15px;
  line-height: 1.6;
  border-top: 1px solid var(--mist);
}
.comparison-table td:first-child { color: var(--slate); }
.comparison-table td:last-child { color: var(--ink); font-weight: 500; }
```

**Columnas:**
- "Redacción manual" (header con fondo `surface`, texto `slate`)
- "Con Ulpiano" (header con fondo verde sutil, texto `ulpiano-green`)

**6 filas:** (ver contenido_generacion_documentos.md § Sección 7)

**Mobile:** Cada fila se transforma en una card apilada con "Hoy:" y "Con Ulpiano:" como labels.

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 8: MÉTRICAS + TESTIMONIO

**Fondo:** `night` (#0F1F3D)

**3 métricas centradas en grid `repeat(3, 1fr)`:**

- **20 min** — Tiempo medio de generación del cuaderno particional
- **0** — Errores de transcripción entre expediente y documento
- **100%** — Coherencia entre inventario, cálculo fiscal y documentación

Tratamiento:
- Número: JetBrains Mono 56px desktop / 40px mobile, color `green-light` (#40916C), line-height 1, `letter-spacing: -0.02em`
- Unidad ("min"): JetBrains Mono 32px, mismo color, inline con el número pero peso menor
- Separador: línea 40px × 2px, `rgba(255,255,255,0.15)`, centrada
- Label: Inter Regular 15px, `rgba(255,255,255,0.7)`
- Animación de conteo al entrar en viewport (IntersectionObserver, 2s, ease-out)

**Cita (debajo, con `margin-top: var(--space-16)`):**
> "Antes dedicábamos dos o tres días a redactar el cuaderno particional de un expediente complejo. Ahora el borrador sale en minutos y nuestro trabajo es el que debe ser: revisar, ajustar y validar con criterio jurídico."
> — Abogado, despacho de derecho sucesorio, Barcelona

- Inter Italic 22px desktop / 18px mobile, blanco, `max-width: 720px; margin: 0 auto`
- Borde izquierdo: 3px solid `ulpiano-green`, padding-left `var(--space-6)`
- Atribución: Inter Medium 14px, `fog`, `margin-top: var(--space-4)`

**Padding:** `var(--space-24) 0`

---

### SECCIÓN 9: CTA FINAL

**Fondo:** `night` con gradiente sutil (`linear-gradient(180deg, #0F1F3D 0%, #142647 100%)`) o separador `mist` al 15%.

**H2:** "Tu criterio jurídico es el centro. Ulpiano se encarga de que los datos lleguen correctos al documento."
- DM Sans Bold 36px desktop / 28px mobile, blanco, centrado
- `text-wrap: balance`, `max-width: 680px; margin: 0 auto`

**Subtítulo:** "Solicita una demo y comprueba cómo Ulpiano genera el cuaderno particional, los modelos fiscales y la escritura de partición a partir de los datos del expediente."
- Inter Regular 17px, `rgba(255,255,255,0.75)`, centrado
- `max-width: 560px; margin: var(--space-6) auto 0`

**CTAs centrados:**
- Primario: "Solicita tu demo gratuita" → `.btn-primary`
- Secundario: "Crea tu cuenta gratuita →" → `.btn-ghost`

**Padding:** `var(--space-20) 0`

---

## Notas generales de implementación

### SEO (metadata en el export de page.tsx)
- **Title y meta description** ya definidos en el bloque `metadata` de la sección "Arquitectura Next.js" más arriba.
- **H1:** Único por página (el del hero)
- **URL canónica:** `https://ulpiano.es/soluciones/documentacion-sucesoria`
- **Keywords objetivo:** cuaderno particional, generación documentos sucesorios, modelo 650 herencia, escritura partición herencia, documentación sucesoria

### Reglas técnicas Next.js

1. **Tailwind CSS v4** — usar `@theme` inline en `globals.css` para tokens de color y espaciado. Clases utilitarias de Tailwind, no CSS custom salvo lo estrictamente necesario.
2. **`next/link`** para toda navegación interna. Nunca `<a href>` para rutas del sitio.
3. **`next/font/google`** para cargar DM Sans, Inter y JetBrains Mono. No `<link>` ni `@import` de Google Fonts.
4. **`'use client'`** solo en componentes interactivos (tabs, animación de métricas). El `page.tsx` principal es Server Component.
5. **`lucide-react`** para iconos SVG. No SVG inline salvo mockups decorativos.
6. **Sin imágenes raster** — mockups construidos con JSX/Tailwind.
7. **IntersectionObserver** para scroll reveal y animación de métricas → encapsular en componentes `'use client'`.

### Accesibilidad
- Contraste mínimo WCAG AA en todas las combinaciones texto/fondo
- Tabs navegables con teclado (arrow keys + Tab)
- Alt text en todos los iconos SVG
- Tabla comparativa accesible con `<th scope="col">`
- Skip-to-content link

### Conexión con otras páginas (usar `next/link`)
- Hero CTA secundario → anchor `#como-funciona` o lightbox con ejemplo de documento
- Card "Inventario formal" → `<Link href="/soluciones/planificacion-sucesoria">`
- Cards de Modelo 650/660 → `<Link href="/soluciones/fiscalidad-sucesoria">`
- Tabs de "Para quién" → `<Link href="/pensado-para/despachos">`, `/pensado-para/asesorias`, `/pensado-para/notarias`
- Paso 1 "Completa el expediente" → `<Link href="/soluciones/planificacion-sucesoria">`

### Relación con el módulo Planificador
Esta página es el **paso siguiente** al Planificador de Herencias. Los datos del inventario patrimonial y el escenario sucesorio alimentan la generación documental. El copy refleja esta conexión: "Si utilizas el Planificador de Herencias y el Motor Fiscal, los datos están listos." Considerar un breadcrumb sutil o una nota de flujo que conecte ambas páginas visualmente.
