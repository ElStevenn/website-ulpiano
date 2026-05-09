# ARQUITECTURA DEL SILO — `/modelos/*` (Modelos de Impuestos)

> **Tipo de documento:** Arquitectura de silo de contenido
> **Alcance:** Todas las páginas bajo `/modelos/`
> **Última actualización:** 2026-04-12

---

## 0. PROPÓSITO DEL SILO

### ¿Por qué existe `/modelos/`?

Los profesionales que gestionan herencias buscan activamente información sobre los modelos fiscales del Impuesto sobre Sucesiones y Donaciones (ISD): qué son, cuándo se presentan, cómo se rellenan, qué reducciones aplican. Esas búsquedas representan tráfico cualificado que hoy no captura Ulpiano.

El silo `/modelos/` es una **estrategia SEO de contenido informativo-transaccional**: páginas que responden a la intención de búsqueda del profesional fiscal/jurídico y posicionan a Ulpiano como la plataforma que genera estos modelos automáticamente desde el expediente sucesorio.

### Diferencia con `/soluciones/fiscalidad-sucesoria`

| Aspecto | `/soluciones/fiscalidad-sucesoria` | `/modelos/modelo-XXX` |
|---|---|---|
| Pregunta que responde | "¿Qué produce Ulpiano en materia fiscal?" | "¿Qué es el Modelo XXX y cómo se presenta?" |
| Intención del visitante | Evaluación de producto | Búsqueda informativa / resolución de duda fiscal |
| Tono | Comercial-técnico (output del producto) | Informativo-técnico (guía fiscal) con CTA al producto |
| Funnel | MOFU — comparando soluciones | TOFU/MOFU — buscando información, descubriendo Ulpiano |
| Copy | Centrado en el resultado que produce Ulpiano | Centrado en explicar el modelo fiscal + cómo Ulpiano lo simplifica |

---

## 1. ÁRBOL DE URLs

```
ulpiano.es/
└── /modelos/                          ← Hub: índice de todos los modelos fiscales
    ├── /modelos/modelo-650            ← Autoliquidación del Impuesto de Sucesiones
    ├── /modelos/modelo-651            ← Autoliquidación del Impuesto de Donaciones
    ├── /modelos/modelo-652            ← Autoliquidación de Seguros de Vida
    ├── /modelos/modelo-653            ← Consolidación de Dominio
    └── /modelos/modelo-660            ← Declaración de Sucesiones (inventario)
```

### Rutas Next.js

```
src/app/(marketing)/modelos/
├── page.tsx                           ← Hub /modelos/
├── layout.tsx                         ← Layout compartido (breadcrumbs, nav lateral opcional)
├── modelo-650/
│   └── page.tsx
├── modelo-651/
│   └── page.tsx
├── modelo-652/
│   └── page.tsx
├── modelo-653/
│   └── page.tsx
└── modelo-660/
    └── page.tsx
```

Cada `page.tsx` es Server Component con `metadata` export. Los componentes interactivos (tabs, FAQ accordion) se extraen como Client Components independientes.

---

## 2. ESTRATEGIA SEO

### Keywords objetivo por página

| Página | Keyword principal | Keywords secundarias |
|---|---|---|
| Hub `/modelos/` | modelos impuesto sucesiones | modelos fiscales herencia, formularios ISD, modelos tributarios sucesiones |
| Modelo 650 | modelo 650 herencia | autoliquidación impuesto sucesiones, modelo 650 Catalunya, rellenar modelo 650 |
| Modelo 651 | modelo 651 donaciones | impuesto donaciones Catalunya, autoliquidación donaciones, modelo 651 rellenar |
| Modelo 652 | modelo 652 seguros vida | tributación seguro vida sucesiones, modelo 652 herencia, seguro vida impuesto sucesiones |
| Modelo 653 | modelo 653 consolidación dominio | extinción usufructo herencia, consolidación dominio sucesiones, modelo 653 rellenar |
| Modelo 660 | modelo 660 herencia inventario | declaración sucesiones inventario, modelo 660 rellenar, inventario bienes herencia |

### Metadata template

Cada página sigue este patrón:

```tsx
export const metadata: Metadata = {
  title: "Modelo [NNN]: [Nombre completo] | Guía y Generación Automática — Ulpiano",
  description: "[Qué es el modelo] + [cuándo se presenta] + [cómo Ulpiano lo genera automáticamente desde el expediente]. Guía completa para profesionales.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-[nnn]",
  },
};
```

### Schema Markup

Cada página de modelo individual incluye `FAQPage` schema (JSON-LD) con las preguntas más frecuentes de la sección FAQ. El Hub incluye `CollectionPage` con enlaces a cada modelo.

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el Modelo [NNN]?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "...",
      },
    },
    // ... más preguntas
  ],
};
```

---

## 3. ESTRATEGIA CRO

### Flujo de conversión

```
Búsqueda orgánica ("modelo 650 herencia")
  → Aterriza en /modelos/modelo-650
    → Lee la guía fiscal (contenido informativo de valor)
      → Descubre sección "Cómo Ulpiano genera el Modelo 650"
        → CTA: "Solicita tu demo" → /demo
        → CTA secundario: "Ver motor fiscal" → /soluciones/fiscalidad-sucesoria
```

### Elementos de conversión por página

1. **CTA contextual tras la explicación fiscal** — No en el hero (el usuario llegó por información, no por producto). El CTA aparece después de que el contenido haya entregado valor.
2. **Sección "Cómo Ulpiano lo genera"** — Transición natural de la guía fiscal al producto. Mockup del modelo generado + 3 puntos de valor.
3. **Sidebar/banner de modelo relacionado** — Cross-link entre modelos del silo.
4. **CTA final** — Doble botón: demo + crear cuenta.

### Principio CRO del silo

> El visitante llega buscando información fiscal. Ulpiano se la da con rigor. Solo después le muestra que puede ahorrarse el trabajo manual. La venta es consecuencia de la utilidad, no la interrupción de la lectura.

---

## 4. PLANTILLA COMÚN — Estructura de secciones

Todas las páginas de modelo individual (`/modelos/modelo-XXX`) comparten esta estructura:

```
/modelos/modelo-XXX

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO INFORMATIVO (fondo night)           │
│ Número de modelo decorativo + H1 + contexto legal   │
│ Breadcrumb: Modelos > Modelo XXX                    │
│ Sin CTA agresivo. Tono guía, no venta.              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: QUÉ ES EL MODELO (fondo white)           │
│ Explicación clara del modelo, base legal, finalidad │
│ Tabla resumen: nombre, base legal, quién presenta,  │
│ plazo, administración competente                    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: QUIÉN ESTÁ OBLIGADO (fondo surface)      │
│ Sujetos pasivos, supuestos de presentación          │
│ Casos prácticos breves                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: CONTENIDO DEL MODELO (fondo white)       │
│ Desglose de apartados / casillas principales        │
│ Embudo fiscal visual (si aplica: 650, 651, 652)     │
│ Tabla de datos requeridos                           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CÓMO ULPIANO LO GENERA (fondo surface)   │
│ Transición informativo → producto                   │
│ Mockup del modelo generado + 3 puntos de valor      │
│ CTA: "Solicita tu demo"                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 6: FAQ (fondo white)                         │
│ 4-6 preguntas frecuentes con accordion              │
│ Schema FAQPage para rich snippets                   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 7: MODELOS RELACIONADOS (fondo surface)      │
│ Grid de cards con los otros modelos del silo        │
│ Navegación lateral dentro del silo                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 8: CTA FINAL (fondo night)                   │
│ H2 + subtítulo + doble CTA                          │
└─────────────────────────────────────────────────────┘
```

---

## 5. SISTEMA DE DISEÑO

### Herencia del sistema visual

El silo hereda **íntegro** el sistema visual definido en `prompt_home_ulpiano_v2.md` y documentado en `product-marketing-context.md`:

- Paleta de colores (night, ink, slate, fog, mist, surface, white, ulpiano-green, green-light, green-bg)
- Tipografía (DM Sans Bold titulares, Inter cuerpo, JetBrains Mono números)
- Escala tipográfica de páginas internas (más compacta que home)
- Espaciado (base 8px, secciones 80px desktop / 48px mobile)
- Cards, botones, scroll reveal, contenedor max-width 1200px

### Tratamiento específico del número de modelo

El número del modelo (650, 651, 652, 653, 660) recibe tratamiento decorativo especial:

```css
.model-number-decorative {
  font-family: 'JetBrains Mono', monospace;
  font-size: 120px; /* desktop */
  font-weight: 700;
  color: rgba(255, 255, 255, 0.06); /* sobre fondo night */
  position: absolute;
  top: -20px;
  right: 40px;
  line-height: 1;
  user-select: none;
  pointer-events: none;
}

/* Sobre fondo claro */
.model-number-decorative--light {
  color: rgba(30, 41, 59, 0.04); /* ink al 4% */
}
```

Este patrón ya está establecido en `prompt_generacion_documentos.md` (sección 5, Catálogo de documentos) donde los números 650 y 660 aparecen como elementos decorativos.

### Tratamiento del embudo fiscal

Para los modelos con cálculo (650, 651, 652), el embudo fiscal se muestra como bloque visual:

```
Base imponible          → € XXX.XXX,XX
- Reducción [concepto]  → - € XX.XXX,XX
= Base liquidable       → € XXX.XXX,XX
× Tarifa                → € XX.XXX,XX
× Coeficiente           → × X,XXXX
- Bonificación          → - € XX.XXX,XX
= Cuota a ingresar      → € X.XXX,XX
```

- Fuente: JetBrains Mono
- Fondo: `surface` con border-radius 12px
- Referencia normativa a la derecha de cada línea en Inter Regular 13px, color `fog`
- El mismo patrón visual que ya se usa en `/soluciones/fiscalidad-sucesoria`

### Breadcrumbs

Todas las páginas del silo incluyen breadcrumbs:

```
Inicio > Modelos > Modelo 650
```

- Posición: dentro del hero, encima del eyebrow
- Fuente: Inter Regular 13px, color `rgba(255,255,255,0.5)` (sobre night)
- Separador: `›` en `fog`
- Links con `next/link`, último elemento sin enlace (página actual)

### Navegación entre modelos

Cada página incluye una barra lateral o strip horizontal con los otros modelos:

```
[650] Sucesiones  ·  [651] Donaciones  ·  [652] Seguros  ·  [653] Consolidación  ·  [660] Inventario
```

- En desktop: horizontal bajo el breadcrumb o como sidebar fija
- En mobile: horizontal scrollable
- Modelo activo: fondo `ulpiano-green`, texto white
- Modelos inactivos: fondo transparente, texto `fog`, hover: texto white

---

## 6. COMPONENTES COMPARTIDOS

### Componentes existentes (reutilizar)

| Componente | Uso |
|---|---|
| `<Header />` | Nav global |
| `<Footer />` | Footer global |
| `<Container>` | Wrapper max-width 1200px |
| `<Section>` | Sección con padding y fondo configurable |
| `<ButtonPrimary>` | CTA principal |
| `<ButtonGhost>` | CTA secundario |
| `<Eyebrow>` | Labels de sección |
| `<ScrollReveal>` | Animación al entrar en viewport |

### Componentes nuevos del silo

| Componente | Descripción |
|---|---|
| `ModelBreadcrumb` | Breadcrumbs específicos: Inicio > Modelos > Modelo XXX |
| `ModelNav` | Navegación horizontal entre modelos del silo |
| `ModelHero` | Hero con número decorativo, eyebrow, H1, subtítulo, breadcrumb, sin mockup |
| `FiscalFunnel` | Bloque visual del embudo fiscal (reutilizable entre 650, 651, 652) |
| `ModelSummaryTable` | Tabla resumen del modelo (nombre, base legal, plazo, sujeto, administración) |
| `FaqAccordion` | Accordion para preguntas frecuentes con schema FAQPage integrado |
| `RelatedModels` | Grid de cards con los otros modelos del silo |

---

## 7. PÁGINA HUB — `/modelos/`

### Propósito

Índice de todos los modelos fiscales. El visitante que busca "modelos impuesto sucesiones" o llega desde navegación interna encuentra una visión general.

### Estructura

**Hero:**
- Eyebrow: "MODELOS FISCALES"
- H1: "Los modelos del Impuesto sobre Sucesiones y Donaciones, explicados"
- Subtítulo: "Guía de cada modelo fiscal que interviene en una herencia o donación. Qué es, cuándo se presenta, quién está obligado y cómo Ulpiano lo genera automáticamente desde el expediente."
- Fondo: `night`

**Grid de modelos (fondo white):**

5 cards, una por modelo. Layout: `repeat(3, 1fr)` desktop, `repeat(2, 1fr)` tablet, stack mobile.

Cada card:
- Número de modelo en JetBrains Mono 48px, `ulpiano-green`
- Nombre completo del modelo en Inter SemiBold 20px, `ink`
- Descripción en una línea (Inter Regular 15px, `slate`)
- CTA: "Ver guía completa →"
- Link: `<Link href="/modelos/modelo-XXX">`

| Card | Número | Nombre | Descripción |
|---|---|---|---|
| 1 | 650 | Autoliquidación del Impuesto de Sucesiones | La cuota a ingresar por cada heredero o legatario. |
| 2 | 651 | Autoliquidación del Impuesto de Donaciones | La cuota por transmisiones inter vivos a título gratuito. |
| 3 | 652 | Autoliquidación de Seguros de Vida | La tributación del capital percibido por el beneficiario del seguro. |
| 4 | 653 | Consolidación de Dominio | La cuota complementaria por extinción de usufructo. |
| 5 | 660 | Declaración de Sucesiones (inventario) | El inventario de bienes, derechos y deudas que acompaña al Modelo 650. |

**Sección "Cómo se relacionan" (fondo surface):**

Diagrama visual que muestra la relación entre modelos:

```
Fallecimiento
  ├── Modelo 660 (inventario de bienes)
  ├── Modelo 650 (autoliquidación por heredero) ←── siempre juntos
  ├── Modelo 652 (si hay seguro de vida)
  └── Modelo 653 (cuando se extinga el usufructo)

Donación en vida
  └── Modelo 651 (autoliquidación por donatario)
```

**CTA final (fondo night):**
- H2: "Cada modelo, generado desde el expediente. Sin rellenar formularios a mano."
- CTA: "Solicita tu demo" → `/demo`

### Metadata Hub

```tsx
export const metadata: Metadata = {
  title: "Modelos del Impuesto sobre Sucesiones y Donaciones | Guía Completa — Ulpiano",
  description:
    "Guía de los Modelos 650, 651, 652, 653 y 660 del Impuesto sobre Sucesiones y Donaciones. Qué son, cuándo se presentan y cómo Ulpiano los genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos",
  },
};
```

---

## 8. NAVEGACIÓN Y CROSS-LINKING

### Desde el silo `/modelos/` hacia fuera

| Desde | Hacia | Contexto del enlace |
|---|---|---|
| Cualquier modelo | `/soluciones/fiscalidad-sucesoria` | "Ver cómo funciona el motor fiscal de Ulpiano" |
| Cualquier modelo | `/demo` | CTA principal |
| Modelo 650, 660 | `/soluciones/documentacion-sucesoria` | "Ver todos los documentos que genera Ulpiano" |
| Modelo 651 | `/soluciones/planificacion-sucesoria` | Conexión con simulación herencia vs. donación |
| Modelo 652 | `/soluciones/planificacion-sucesoria` | Conexión con inventario de seguros de vida |
| Modelo 653 | `/soluciones/planificacion-sucesoria` | Conexión con escenarios de usufructo |

### Desde fuera hacia el silo `/modelos/`

| Desde | Hacia | Acción requerida |
|---|---|---|
| `/soluciones/fiscalidad-sucesoria` | `/modelos/modelo-650`, `/modelos/modelo-660` | Añadir links en sección de outputs fiscales |
| `/soluciones/documentacion-sucesoria` | `/modelos/modelo-650`, `/modelos/modelo-660` | Añadir links en catálogo de documentos |
| Header (nav) | `/modelos` | Añadir entrada en menú "Recursos" o sub-nav |
| Footer | `/modelos` | Añadir sección "Modelos Fiscales" |

### Dentro del silo

| Desde | Hacia | Relación |
|---|---|---|
| Modelo 650 | Modelo 660 | "El Modelo 660 acompaña siempre al 650" |
| Modelo 650 | Modelo 651 | "Si la transmisión es inter vivos, el modelo es el 651" |
| Modelo 650 | Modelo 652 | "Si hay seguro de vida, también se presenta el 652" |
| Modelo 650 | Modelo 653 | "Si se constituyó usufructo, la consolidación tributa con el 653" |
| Modelo 660 | Modelo 650 | "El 660 es el inventario que acompaña a la autoliquidación del 650" |
| Modelo 651 | Modelo 650 | "Si la adquisición es mortis causa, el modelo es el 650" |

---

## 9. NOTAS DE IMPLEMENTACIÓN

### Reglas técnicas Next.js

1. **Tailwind CSS v4** — tokens de color y espaciado en `@theme` dentro de `globals.css`
2. **`next/link`** para toda navegación interna
3. **`next/font/google`** para DM Sans, Inter y JetBrains Mono (cargadas en layout raíz)
4. **`'use client'`** solo en componentes interactivos (FAQ accordion, model nav con estado)
5. **`lucide-react`** para iconos SVG
6. **Sin imágenes raster** — todo construido con JSX/Tailwind

### Accesibilidad

- Contraste WCAG AA en todas las combinaciones
- FAQ accordion navegable con teclado (Enter/Space para abrir/cerrar, arrow keys)
- Breadcrumbs con `<nav aria-label="Breadcrumb">` y `<ol>`
- Números decorativos con `aria-hidden="true"`

### Performance

- Fuentes ya cargadas en layout raíz
- IntersectionObserver para scroll reveal (lazy)
- FAQ accordion con contenido inline (no lazy-loaded) para SEO
- Schema JSON-LD inyectado en `<head>` via metadata de Next.js

---

## 10. CHECKLIST GLOBAL DEL SILO

- [ ] Hub `/modelos/` con grid de 5 modelos + diagrama de relaciones
- [ ] Modelo 650 — autoliquidación sucesiones (página core)
- [ ] Modelo 651 — autoliquidación donaciones
- [ ] Modelo 652 — seguros de vida
- [ ] Modelo 653 — consolidación de dominio
- [ ] Modelo 660 — declaración/inventario
- [ ] Layout compartido con breadcrumbs y model nav
- [ ] Schema FAQPage en cada página individual
- [ ] Cross-links desde `/soluciones/fiscalidad-sucesoria` y `/soluciones/documentacion-sucesoria`
- [ ] Entrada en Header (nav) y Footer
- [ ] Responsive en los 3 breakpoints (mobile, tablet, desktop)
- [ ] Copy revisado contra `product-marketing-context.md`
- [ ] Normativa citada verificada (Llei 19/2010, LISD, LGT, RISD)
