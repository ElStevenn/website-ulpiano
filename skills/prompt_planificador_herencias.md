# PROMPT — Diseño de la página "Planificador de Herencias" (ulpiano.es/soluciones/planificacion-sucesoria)

## Contexto del proyecto

Estás trabajando en la web de **Ulpiano** (ulpiano.es), una plataforma SaaS B2B de planificación y gestión sucesoria integral para el mercado legal español. El proyecto es una aplicación **Next.js multi-página** con App Router.

Lee los archivos `product-marketing-context.md` y `contenido_planificador_herencias.md` que tienes en `skills/` antes de empezar. El primero contiene el contexto estratégico del producto; el segundo contiene el copy definitivo de cada sección.

Esta es una **página de solución** (solution page), no la home. Su objetivo es profundizar en un módulo específico — el Planificador de Herencias — y convencer al profesional de que solicite una demo. Forma parte de la arquitectura de rutas definida en `MAPEO_PAGINAS_CONTENIDOS.md`.

**Ruta Next.js:** `src/app/(marketing)/soluciones/planificacion-sucesoria/page.tsx`

---

## Objetivo de esta tarea

Diseñar y maquetar la **página completa "Planificador de Herencias"** como componente Next.js (page.tsx) dentro de la arquitectura multi-página del proyecto.

**Objetivo de conversión:** Solicitar demo.
**Audiencia:** Abogado de despacho mediano, asesor fiscal con cartera ISD, notario. Todos gestionan herencias de forma recurrente.

---

## Integración en la arquitectura Next.js

### Componentes compartidos (NO reimplementar)
- **Header** (`components/layout/Header.tsx`) — Nav global con links a `/soluciones`, `/pensado-para`, `/precios`, `/demo`
- **Footer** (`components/layout/Footer.tsx`) — Footer global
- **Container** (`components/layout/Container.tsx`) — Wrapper con `max-width: 1200px`
- **Section** (`components/layout/Section.tsx`) — Sección con padding y fondo configurable
- **ButtonPrimary** (`components/buttons/ButtonPrimary.tsx`)
- **ButtonGhost** (`components/buttons/ButtonGhost.tsx`)
- **Eyebrow** (`components/ui/Eyebrow.tsx`)
- **ScrollReveal** (`components/animations/ScrollReveal.tsx`)

### Links internos
Usar `next/link` para todos los enlaces internos:
- CTA "Solicita tu demo" → `/demo`
- Cards que conectan con otros módulos → `/soluciones/fiscalidad-sucesoria`, `/soluciones/activos-digitales`
- Tabs "Para quién" → `/pensado-para/despachos`, `/pensado-para/asesorias`, `/pensado-para/notarias`
- Cross-link en Paso 4 → `/soluciones/documentacion-sucesoria`

### Metadata (Next.js)
```tsx
export const metadata = {
  title: "Planificación Sucesoria | Inventario patrimonial y escenarios sucesorios — Ulpiano",
  description: "Consolida bienes, derechos y deudas del causante en un único inventario. Calcula legítimas según el CCCat, compara escenarios de distribución y genera la documentación del expediente.",
  alternates: { canonical: "https://ulpiano.es/soluciones/planificacion-sucesoria" },
};
```

---

## Filosofía de copy — OUTPUT, no proceso

Aplica las mismas reglas que la home:

**❌ Evitar:**
- "Centraliza tu patrimonio en un solo lugar"
- "Automatiza la gestión patrimonial"
- "Herramienta integral de planificación"

**✅ Usar:**
- "Todo el patrimonio del causante. Estructurado, valorado y listo para distribuir."
- "El caudal relicto neto, calculado"
- "Tres opciones de distribución, comparadas en paralelo"

---

## Sistema de diseño

Hereda **íntegro** el sistema visual definido en `prompt_home_ulpiano_v2.md`:

### Paleta de colores

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

Heredados íntegros de `prompt_home_ulpiano_v2.md`:
- Sistema de espaciado (base 8px, secciones 80px desktop / 48px mobile)
- Tratamiento de cards (border-radius 12px, sombra, hover con elevación)
- Botones `.btn-primary` y `.btn-ghost`
- Scroll reveal (translateY 32px, 700ms, stagger 100ms)
- Contenedor `max-width: 1200px`
- Eyebrows (mayúsculas, `letter-spacing: 0.08em`, color `slate`)

**Diferencias respecto a la home:**
- El hero es más compacto (no necesita mockup de dashboard — el mockup aquí es del inventario patrimonial)
- Mayor densidad de contenido técnico (el visitante ya pasó el filtro de interés en la home)
- Se permiten términos técnicos de proceso (caudal relicto, legítimas, Art. 451-5 CCCat) porque el lector es profesional jurídico

---

## Estructura de la página — Secciones

Usa comentarios HTML claros: `{/* SECCIÓN X: NOMBRE */}`.

Alternancia de fondos:
- Nav → dark (componente global Header)
- Hero → dark (night)
- Problema → white
- Outputs → surface
- Cómo funciona → white
- Para quién → white (tabs con fondo night en tab activo)
- Comparativa (Excel vs Ulpiano) → surface
- Categorías patrimoniales → white
- Métricas + Testimonio → dark (night)
- CTA final → dark (gradiente sutil respecto a métricas)
- Footer → ink (componente global Footer)

---

### SECCIÓN 1: HERO

**Layout:** CSS Grid — `grid-template-columns: 1fr 1fr` en desktop. Copy a la izquierda, mockup a la derecha. Mobile: stack vertical.

**Eyebrow:** "PLANIFICACIÓN SUCESORIA" — Inter Medium 13px, `letter-spacing: 0.08em`, `rgba(255,255,255,0.5)`, mayúsculas.

**H1:** "Todo el patrimonio del causante. Estructurado, valorado y listo para distribuir."
- DM Sans Bold, 56px desktop / 42px tablet / 32px mobile
- Line-height: 1.15
- Color: blanco
- `text-wrap: balance`
- `max-width: 580px`

**Subtítulo:** "Ulpiano consolida bienes, derechos y deudas en un único inventario. Calcula el caudal relicto neto, construye el árbol familiar con grupos de parentesco y respeta automáticamente las legítimas del Codi Civil de Catalunya."
- Inter Regular 17px, line-height 1.6, `rgba(255,255,255,0.75)`
- `max-width: 500px`
- `margin-top: var(--space-6)`

**CTA primario:** "Solicita tu demo gratuita" → `<ButtonPrimary href="/demo">`
**CTA secundario:** "Ver cómo funciona →" → `<ButtonGhost href="#como-funciona">`

**Mockup (derecha):** UI simulada del inventario patrimonial. Construido con HTML/CSS:
- Ventana con barra superior (3 dots + "Inventario Patrimonial")
- Fondo `surface`
- Panel dividido en dos áreas:
  - **Izquierda (60%):** Lista de categorías patrimoniales como sidebar:
    - "Inmuebles" con badge `3` en `green-bg`
    - "Cuentas bancarias" con badge `2`
    - "Participaciones" con badge `1`
    - "Activos digitales" con badge `2`
    - "Pasivos" con badge `1` en fondo warning `#FEF3C7`
    - Cada ítem: Inter Regular 14px, color `ink`, padding `10px 16px`
    - Ítem activo: fondo `rgba(45,106,79,0.06)`, borde izquierdo 3px `ulpiano-green`
  - **Derecha (40%):** Resumen numérico:
    - "Activos" → `€ 1.245.800` en JetBrains Mono 20px, color `ink`
    - "Pasivos" → `− € 185.200` en JetBrains Mono 20px, color `#991B1B`
    - Línea divisoria `mist`
    - "Caudal relicto neto" → `€ 1.060.600` en JetBrains Mono 24px, color `ulpiano-green`, bold
- Tratamiento: `border-radius: 12px`, sombra, perspectiva sutil, overflow -40px abajo

**Fondo hero:** `night` (#0F1F3D). Orbe decorativo sutil en esquina superior derecha.
**Padding:** `calc(64px + var(--space-12))` top, `var(--space-20)` bottom.

---

### SECCIÓN 2: EL PROBLEMA

**Fondo:** white

**Eyebrow:** "EL PROBLEMA"
**H2:** "El inventario sucesorio no debería vivir en cinco hojas de cálculo"

**Layout:** Texto en prosa, `max-width: 720px`, centrado. Sin cards, sin bullets. Solo un bloque de texto bien escrito.

**Contenido:** (ver `contenido_planificador_herencias.md` § Sección 2)

**Tratamiento tipográfico:**
- H2: DM Sans Bold 42px, `ink`
- Cuerpo: Inter Regular 17px, line-height 1.7, `slate`, dos párrafos
- Padding: `var(--space-20) 0`

**Opcional:** Un icono decorativo sutil (SVG outline de hoja de cálculo con una X) encima del eyebrow, en color `mist`, 48px.

---

### SECCIÓN 3: QUÉ PRODUCE — LOS 4 OUTPUTS

**Fondo:** `surface` (#F1F5F9)

**Eyebrow:** "RESULTADOS"
**H2:** "Lo que obtienes con el Planificador de Herencias"
**Subtítulo:** "No funcionalidades. Resultados listos para usar en el expediente."

**Layout:** Grid `repeat(2, 1fr)` en desktop, stack en mobile. Gap `var(--space-6)`.

**4 cards** con el mismo tratamiento que las cards de la home (fondo white, border `mist`, border-radius 12px, sombra, hover con elevación):

**Card 1 — Inventario patrimonial**
- Icono: clipboard / lista (SVG 24px en círculo 44px `green-bg`)
- Título: "El caudal relicto neto, calculado"
- Descripción: (ver contenido_planificador_herencias.md)
- Badge: "Activos + Pasivos → Caudal neto"
- Bloque visual interno: fondo `surface` (#F1F5F9), border-radius 8px, padding 16px, que muestra `€ 1.060.600` en JetBrains Mono 24px color `ink` con un label "caudal relicto neto" debajo en Inter Regular 13px color `slate`.

**Card 2 — Árbol familiar**
- Icono: diagrama de nodos / árbol
- Título: "El diagrama sucesorio, construido solo"
- Descripción: (ver contenido)
- Badge: "CCCat integrado · Legítimas automáticas"

**Card 3 — Escenarios comparados**
- Icono: bifurcación / columnas
- Título: "Tres opciones de distribución, comparadas en paralelo"
- Descripción: (ver contenido)
- Badge: "Simulación pre-mortem"

**Card 4 — Activos digitales**
- Icono: moneda digital / wallet
- Título: "Criptomonedas, wallets y huella digital — inventariados como cualquier otro bien"
- Descripción: (ver contenido)
- Badge: "Categoría fiscal estructurada · Único en España"
- Este badge en color especial: fondo `#DBEAFE`, texto `#1E6A9E` (info) para diferenciar como USP
- Link: `<Link href="/soluciones/activos-digitales">Ver más →</Link>`

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 4: CÓMO FUNCIONA — 4 PASOS

**id:** `como-funciona` (anchor para CTA secundario del hero)

**Fondo:** white

**Eyebrow:** "PROCESO"
**H2:** "De documentos sueltos a inventario estructurado"

**Layout:** Grid horizontal `repeat(4, 1fr)` en desktop, stack vertical en mobile. Conectores punteados entre pasos.

Misma implementación visual que la sección "Cómo funciona" de la home:
- Número grande decorativo (DM Sans Bold 72px, `mist` al 50%, position absolute)
- Icono circular (48px, borde `ulpiano-green`)
- Título del paso (Inter SemiBold 18px, `ink`)
- Descripción (Inter Regular 15px, `slate`)
- Conector: `border-top: 2px dashed var(--mist)` horizontal desktop / `border-left` vertical mobile

**Pasos:**
1. **Registra el patrimonio** — Inmuebles, cuentas, inversiones, participaciones, deudas, activos digitales. Cada categoría con sus campos específicos.
2. **Configura el escenario** — Herederos, legatarios, figuras jurídicas. El sistema identifica automáticamente los derechos de los legitimarios.
3. **Compara escenarios** — Visualiza el impacto fiscal de cada opción de distribución antes de decidir.
4. **Genera la documentación** — El inventario alimenta directamente el cálculo fiscal y la generación documental. Sin copiar datos. (Link: `<Link href="/soluciones/documentacion-sucesoria">Ver generación documental →</Link>`)

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 5: PARA QUIÉN

**Fondo:** white

**Eyebrow:** "SEGMENTOS"
**H2:** "Diseñado para quien gestiona herencias con volumen"

**Implementación:** Tabs horizontales (misma mecánica que la home).

**3 tabs:**

**Tab 1 — Despachos de abogados**
- Claim: "El inventario patrimonial que montabas en dos días, listo en una sesión de trabajo."
- ✓ Todos los bienes del causante en un único panel con trazabilidad
- ✓ Legítimas y cuotas calculadas con el derecho foral catalán integrado
- ✓ El inventario conecta directamente con el módulo fiscal y el cuaderno particional
- Mini-mockup: placeholder "Vista del Inventario"
- Link: `<Link href="/pensado-para/despachos">Más sobre despachos →</Link>`

**Tab 2 — Asesorías fiscales**
- Claim: "La base imponible empieza aquí. Y desde aquí llega al Modelo 650 sin errores de transcripción."
- ✓ Datos del patrimonio estructurados para alimentar el motor ISD
- ✓ Valoraciones a fecha de devengo, no estimaciones manuales
- ✓ Trazabilidad auditable ante la ATC desde el primer asiento
- Mini-mockup: placeholder "Vista Fiscal"
- Link: `<Link href="/pensado-para/asesorias">Más sobre asesorías →</Link>`

**Tab 3 — Notarías**
- Claim: "El testamento define la voluntad. El Planificador organiza el patrimonio que la sustenta."
- ✓ Visión consolidada de todo lo que el testador posee y debe
- ✓ Configuración de figuras jurídicas alineada con la práctica notarial
- ✓ Documentación centralizada y cifrada para cada expediente
- Mini-mockup: placeholder "Vista Notarial"
- Link: `<Link href="/pensado-para/notarias">Más sobre notarías →</Link>`

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 6: COMPARATIVA — EXCEL VS ULPIANO

**Fondo:** `surface` (#F1F5F9)

**Eyebrow:** "DIFERENCIADORES"
**H2:** "Lo que Excel no puede hacer por ti"

**Layout:** Tabla comparativa de 2 columnas. Diseño como table HTML estilizada.

**Tratamiento visual de la tabla:**
```css
.comparison-table {
  width: 100%;
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
.comparison-table td:first-child {
  color: var(--slate);
}
.comparison-table td:last-child {
  color: var(--ink);
  font-weight: 500;
}
```

**Columnas:**
- "Lo que haces hoy" (header con fondo `surface`, texto `slate`)
- "Lo que hace Ulpiano" (header con fondo verde sutil, texto `ulpiano-green`)

**6 filas comparativas:** (ver contenido_planificador_herencias.md § Sección 6)

**Mobile:** La tabla se transforma en cards apiladas (cada fila = una card con "Antes:" y "Con Ulpiano:" como labels).

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 7: CATEGORÍAS PATRIMONIALES

**Fondo:** white

**Eyebrow:** "COBERTURA"
**H2:** "Cada tipo de bien, con sus campos específicos"

**Layout:** Grid `repeat(3, 1fr)` en desktop, `repeat(2, 1fr)` en tablet, stack en mobile. Gap `var(--space-6)`.

**6 bloques** (más ligeros que las cards de outputs — sin sombra elevada, solo borde `mist` y fondo white):

Cada bloque:
- Icono: SVG outline 20px en color `ulpiano-green`, sin círculo de fondo
- Título: Inter SemiBold 18px, `ink`
- Lista de campos: Inter Regular 14px, `slate`, separados por comas (NO bullets)
- Border: `1px solid var(--mist)`, border-radius 8px, padding `var(--space-6)`

**Los 6 bloques:**
1. **Inmuebles** — Dirección, referencia catastral, valor de referencia, cargas hipotecarias, titularidades, coeficiente de participación, uso.
2. **Productos financieros** — Cuentas bancarias, fondos de inversión, acciones cotizadas, planes de pensiones. Saldo a fecha de devengo.
3. **Empresa familiar** — Denominación social, NIF, porcentaje de participación, valor según último balance, bienes afectos. Preparado para la reducción del 95%.
4. **Derechos y muebles** — Préstamos otorgados, vehículos, joyas, obras de arte, ajuar doméstico.
5. **Activos digitales** — Criptomonedas con valoración a fecha de devengo, wallets, exchanges, huella digital, instrucciones de gestión.
6. **Pasivos deducibles** — Hipotecas, préstamos, deudas fiscales, gastos de última enfermedad, gastos de sepelio. Resta automática.

**Padding:** `var(--space-20) 0`

---

### SECCIÓN 8: MÉTRICAS + TESTIMONIO

**Fondo:** `night` (#0F1F3D)

**3 métricas centradas en grid `repeat(3, 1fr)`:**

- **100%** — Normativa catalana (CCCat + Llei 19/2010) integrada desde la base
- **35%** — Reducción media en tiempo de preparación del inventario
- **0** — Errores de transcripción entre inventario y cálculo fiscal

Tratamiento visual: igual que home (JetBrains Mono 56px `green-light`, separador sutil, label Inter Regular 15px `rgba(255,255,255,0.7)`). Animación de conteo al entrar en viewport.

**Cita (debajo de métricas):**
> "Antes de Ulpiano, el inventario patrimonial era la parte más tediosa del expediente. Ahora es la más rápida. Y los datos fluyen directamente al cálculo del ISD sin volver a tocarlos."
> — Abogada, despacho sucesorio, Girona

Tratamiento: Inter Italic 22px/18px, blanco, `max-width: 720px`, borde izquierdo 3px `ulpiano-green`.

**Padding:** `var(--space-24) 0`

---

### SECCIÓN 9: CTA FINAL

**Fondo:** `night` con gradiente sutil (transición respecto a la sección de métricas — usar `linear-gradient(180deg, #0F1F3D 0%, #142647 100%)` o separador `mist` al 15%).

**H2:** "El inventario patrimonial es donde empieza todo. Hazlo bien desde el primer dato."
- DM Sans Bold 36px desktop / 28px mobile, blanco, centrado, `text-wrap: balance`, `max-width: 640px; margin: 0 auto`

**Subtítulo:** "Solicita una demo y comprueba cómo Ulpiano estructura el patrimonio del causante, construye el escenario sucesorio y conecta cada dato con el cálculo fiscal y la documentación final."
- Inter Regular 17px, `rgba(255,255,255,0.75)`, centrado, `max-width: 560px; margin: var(--space-6) auto 0`

**CTAs centrados:**
- Primario: "Solicita tu demo gratuita" → `<ButtonPrimary href="/demo">`
- Secundario: "Crea tu cuenta gratuita →" → `<ButtonGhost href="/precios">`

**Padding:** `var(--space-20) 0`

---

## Notas generales de implementación

### SEO
- **Title y description:** definidos en `metadata` del page.tsx (ver arriba)
- **H1:** Único por página (el del hero)
- **URL canónica:** `https://ulpiano.es/soluciones/planificacion-sucesoria`

### Accesibilidad
- Contraste mínimo WCAG AA en todas las combinaciones texto/fondo
- Tabs navegables con teclado (arrow keys)
- Alt text en todos los iconos SVG
- Skip-to-content link (gestionado por el layout raíz)

### Performance
- Fuentes cargadas en el layout raíz vía `next/font/google`
- IntersectionObserver para scroll reveal y animación de métricas (lazy)
- Sin imágenes raster — todo mockup construido con HTML/CSS

### Conexión con otras páginas (cross-linking)
- Hero CTA secundario → anchor `#como-funciona` (misma página)
- Card "Activos digitales" → `/soluciones/activos-digitales`
- Paso 4 "Genera la documentación" → `/soluciones/documentacion-sucesoria`
- Card fiscal (si la hay) → `/soluciones/fiscalidad-sucesoria`
- Tabs "Para quién" → `/pensado-para/despachos`, `/pensado-para/asesorias`, `/pensado-para/notarias`
- CTA "Solicita tu demo" → `/demo`
- CTA "Crea tu cuenta" → `/precios`
