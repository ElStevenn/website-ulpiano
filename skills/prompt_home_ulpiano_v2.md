# PROMPT — Diseño de la Home de ulpiano.es (v3 — Next.js multi-página)

## Contexto del proyecto

Estás trabajando en la web de **Ulpiano** (ulpiano.es), una plataforma SaaS B2B de planificación y gestión sucesoria integral para el mercado legal español. El cliente objetivo es el **jurista y profesional legal** que gestiona herencias de forma recurrente: abogados de despacho mediano, asesores fiscales con cartera de ISD, y notarías.

El proyecto es una **aplicación Next.js multi-página** con App Router. La home forma parte de una arquitectura de rutas definida en `MAPEO_PAGINAS_CONTENIDOS.md` que incluye: `/soluciones/*` (5 páginas de output), `/pensado-para/*` (3 personas), `/precios`, `/demo`, y más.

Lee los archivos `product-marketing-context.md` y `MAPEO_PAGINAS_CONTENIDOS.md` que tienes en `skills/` antes de empezar. El primero contiene el contexto estratégico del producto; el segundo la arquitectura completa de páginas y contenidos.

---

## Objetivo de esta tarea

Diseñar y maquetar la **home completa de ulpiano.es** como componente Next.js (`src/app/page.tsx`) dentro de la arquitectura multi-página del proyecto.

**Ruta Next.js:** `src/app/page.tsx`

El objetivo de la home es uno solo: **conseguir que el profesional solicite una demo**. Todo el diseño y el copy debe estar orientado a ese CTA. La home es la puerta de entrada — muestra los outputs principales y lleva al profesional a la demo o a profundizar en las páginas de solución.

---

## Filosofía de copy — OUTPUT, no proceso

La home **no vende proceso**. Vende el resultado que el profesional obtiene.

**❌ Evitar:**
- "Automatiza la tramitación de herencias"
- "Centraliza tus documentos"
- "Gestiona expedientes digitalmente"

**✅ Usar:**
- "El Modelo 650 de tu cliente, listo en minutos"
- "Las legítimas calculadas. La norma aplicada. El borrador generado."
- "De inventario a cuaderno particional sin recalcular nada a mano"

Los términos técnicos de proceso (tramitación, autoliquidación, modelo 650) tienen su lugar en páginas de soluciones y blog SEO — no en la home.

---

## Sistema de diseño — Brand Guide Ulpiano

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

**Colores funcionales (SOLO para estados del sistema, nunca decorativos):**
- Warning: `#B45309` / Warning bg: `#FEF3C7`
- Error: `#991B1B` / Error bg: `#FEE2E2`
- Info: `#1E6A9E` / Info bg: `#DBEAFE`

**El gradiente morado→rosa del logo:** aparece SOLO en el símbolo del logo. No se usa como color de botón, fondo de sección ni CTA. Puede aparecer como elemento decorativo de fondo en el hero con opacidad muy reducida.

### Tipografía

| Contexto | Fuente |
|---|---|
| Titulares marketing / landing | `DM Sans Bold` o `Inter Bold` |
| Cuerpo de texto web | `Inter Regular / Medium` |
| Datos numéricos, referencias legales | `JetBrains Mono` o `IBM Plex Mono` |

Cargar desde Google Fonts: `Inter` (300, 400, 500, 600, 700) + `DM Sans` (600, 700) + `JetBrains Mono` (400).

### Principios gráficos
- **La estructura es la decoración.** Sin ilustraciones de personajes, sin fondos texturizados decorativos, sin elementos que compitan con el contenido.
- **Máximo 3 niveles de jerarquía visual por sección.**
- **Los números merecen tratamiento tipográfico específico:** monoespaciada, tamaño mayor al texto de contexto, color de alto contraste.
- **Densidad organizada:** el profesional jurídico quiere ver información densa bien jerarquizada, no pantallas vacías con 4 palabras.
- **Verde = validado, correcto, completado.** Nunca usar como decoración.

---

## Decisiones de diseño visual — Derivadas de referencias (Harvey, Ironclad, Fides, Crosby)

> Las siguientes decisiones se aplican a toda la home. Son instrucciones concretas de CSS, layout y tratamiento visual que complementan el Brand Guide.

### Escala tipográfica y ritmo vertical

Usar una escala tipográfica con ratio consistente. Los tamaños concretos:

| Nivel | Desktop | Tablet (≤1024px) | Mobile (≤768px) | Peso | Line-height |
|---|---|---|---|---|---|
| H1 (hero) | 64px | 48px | 36px | 700 (DM Sans Bold) | 1.1 |
| H2 (sección) | 42px | 34px | 28px | 700 (DM Sans Bold) | 1.2 |
| H3 (card/bloque) | 24px | 22px | 20px | 600 (Inter SemiBold) | 1.3 |
| Body large | 20px | 18px | 17px | 400 (Inter Regular) | 1.6 |
| Body | 16px | 16px | 15px | 400 (Inter Regular) | 1.7 |
| Caption / eyebrow | 13px | 13px | 12px | 500 (Inter Medium) | 1.4 |
| Mono (números) | 32px+ contexto | — | — | 400 (JetBrains Mono) | 1.2 |

**Eyebrows:** texto en mayúsculas, `letter-spacing: 0.08em`, color `slate` (#64748B), fuente Inter Medium 13px. Aparecen encima de cada H2 de sección como etiqueta de contexto (referencia: Ironclad usa "Moderat Mono" en verde como eyebrow; Crosby usa `type-eyebrow-1`).

**Titulares con text-wrap: balance** para evitar viudas y líneas huérfanas (referencia: Harvey y Crosby aplican balance a headlines).

### Sistema de espaciado

Usar una escala de 8px como unidad base. Definir custom properties:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

**Padding vertical de secciones:** `--space-20` (80px) en desktop, `--space-12` (48px) en mobile. Es el ritmo que usan Harvey (pt-xl pb-xl ≈ 80px), Ironclad (e-pt-80 e-pb-80) y Fides (56px sections). Ir a 80px da más aire profesional.

**Gap entre elementos dentro de sección:** `--space-6` a `--space-8` (24-32px) como gap principal de grids y stacks.

**Contenedor principal:** `max-width: 1200px; margin: 0 auto; padding: 0 var(--space-6);` En pantallas >1440px, subir a `max-width: 1280px`. Referencia: Harvey usa 1440px, Ironclad contenedores Bootstrap estándar ~1140px, Fides 1500px. Para Ulpiano, 1200px es el equilibrio entre densidad informativa y legibilidad.

### Estructura de secciones y alternancia de fondo

Las secciones alternan entre tres tratamientos de fondo, siguiendo el patrón de Harvey/Ironclad/Crosby:

| Tratamiento | Fondo | Texto | Uso |
|---|---|---|---|
| **Dark** | `night` (#0F1F3D) | blanco | Hero, testimonio/metrics, CTA final |
| **Light** | `white` (#FFFFFF) | `ink` (#1E293B) | Outputs, Para quién |
| **Neutral** | `surface` (#F1F5F9) | `ink` (#1E293B) | Social proof, Cómo funciona |

Nunca dos secciones seguidas con el mismo fondo. El patrón de la home será:
- Nav → dark
- Hero → dark
- Social proof → neutral (surface)
- Outputs → white
- Para quién → white con fondo de tab activo en night
- Cómo funciona → neutral (surface)
- Testimonio → dark
- CTA final → dark (separado del testimonio por un cambio sutil: el testimonio usa night puro, el CTA puede usar un gradiente muy sutil de night a un tono ligeramente más claro, o una línea divisoria en `mist` al 15% de opacidad)
- Footer → ink (#1E293B)

### Tratamiento de cards y bloques

**Border-radius:** `12px` en cards principales, `8px` en elementos internos (badges, inputs). Referencia: Ironclad usa 20px (demasiado blando para legal), Fides 10px. 12px es el equilibrio para Ulpiano: profesional sin parecer infantil.

**Sombra de cards:**
```css
.card {
  background: var(--white);
  border: 1px solid var(--mist);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(15, 31, 61, 0.04), 0 4px 12px rgba(15, 31, 61, 0.06);
  transition: box-shadow 300ms ease, transform 300ms ease;
}
.card:hover {
  box-shadow: 0 4px 8px rgba(15, 31, 61, 0.06), 0 12px 28px rgba(15, 31, 61, 0.10);
  transform: translateY(-2px);
}
```
Referencia: Fides usa Material elevation (0px 0px 58px spread), Harvey es más plano. Ulpiano necesita sombras sutiles que transmitan solidez sin efecto "flotante" exagerado.

**Padding interno de cards:** `--space-8` (32px) en desktop, `--space-6` (24px) en mobile.

**Grid de cards (sección Outputs):** 2 columnas en desktop (`grid-template-columns: repeat(2, 1fr); gap: var(--space-6)`), stack vertical en mobile. Referencia: Ironclad usa col-lg-4 (3 cols), Fides usa 3 cols. Para 4 outputs, 2x2 funciona mejor que 4 en línea — da más espacio al copy técnico que Ulpiano necesita.

### Botones y CTAs

**Botón primario (CTA principal):**
```css
.btn-primary {
  background: var(--ulpiano-green);
  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 250ms ease, box-shadow 250ms ease, transform 150ms ease;
}
.btn-primary:hover {
  background: var(--green-light);
  box-shadow: 0 4px 12px rgba(45, 106, 79, 0.25);
  transform: translateY(-1px);
}
```
Referencia: Ironclad usa botones con flecha SVG inline (`.e-btn--green-fill-arrow`), Harvey usa botones pill con ancho generoso. Para Ulpiano: **padding generoso (14px 32px)**, sin pill shape (el border-radius 8px es más serio que 9999px), con hover que sube ligeramente. El verde del botón es el único verde decorativo permitido.

**Botón ghost / secundario:**
```css
.btn-ghost {
  background: transparent;
  color: var(--white); /* o var(--ink) en fondos claros */
  font-weight: 500;
  font-size: 15px;
  padding: 0;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: opacity 200ms ease;
}
.btn-ghost:hover { opacity: 0.7; }
.btn-ghost svg { transition: transform 200ms ease; }
.btn-ghost:hover svg { transform: translateX(4px); }
```
Con icono de flecha (→) animada al hover. Referencia: Crosby y Harvey usan CTAs secundarios como texto + flecha sin borde.

**Un solo CTA por sección** (excepto hero que tiene primario + secundario). La flecha del CTA secundario usa un SVG inline de 16×16px con `stroke-width: 2` y `stroke-linecap: round`.

### Mockup de UI del hero

El mockup de producto en el hero es el elemento visual más importante. Tratamiento inspirado en las referencias:

**Estructura:** Un contenedor con aspecto de ventana de aplicación, fondo `surface` (#F1F5F9), con una barra superior que simula la chrome de una app (3 dots + título del módulo).

**Contenido del mockup:** Una tabla de expedientes sucesorios con:
- Header de tabla: fondo `surface`, texto `slate`, font Inter Medium 13px
- 4-5 filas de datos con: nombre del causante (Inter Medium, `ink`), estado (badge verde "Liquidado" o ámbar "Pendiente ISD"), próximo plazo (JetBrains Mono, `slate`), acción pendiente (texto `slate`)
- Una fila seleccionada/activa con fondo `green-bg` al 40% de opacidad y borde izquierdo en `ulpiano-green`
- Valores numéricos (importes) en JetBrains Mono, alineados a la derecha
- Badges de estado: padding `4px 10px`, border-radius `6px`, font-size `12px`, font-weight 500

**Tratamiento del contenedor:**
```css
.hero-mockup {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transform: perspective(1200px) rotateY(-2deg) rotateX(1deg);
  transition: transform 600ms ease;
}
```
Referencia: Harvey presenta product mockups en aspect-ratio 16:9 con bordes redondeados y sombra profunda sobre fondo oscuro. Ironclad usa imágenes full-width con 20px de radius. Crosby usa video con `mix-blend-mode: multiply`. Para Ulpiano: **perspectiva sutil (no exagerada)** que dé profundidad al mockup sin parecer un anuncio de Apple. La rotación es apenas perceptible (-2deg Y, 1deg X).

**Posición en el hero:** El mockup se recorta parcialmente por el borde inferior de la sección hero, creando un efecto de "asomar" hacia la siguiente sección (`margin-bottom: -60px` con `position: relative; z-index: 2`). Referencia: Crosby usa margin negativo (-22vw) para overlap entre hero y siguiente sección.

### Logos de social proof

**Tratamiento visual:** Todos los logos en escala de grises con opacidad reducida:
```css
.logo-proof {
  filter: grayscale(1) opacity(0.4);
  max-height: 32px;
  object-fit: contain;
  transition: filter 300ms ease;
}
.logo-proof:hover {
  filter: grayscale(0) opacity(1);
}
```
Referencia directa de Crosby: `filter: grayscale(1) sepia(0.6) opacity(0.4)` por defecto, full color on hover. Para Ulpiano simplificamos sin sepia (no encaja con la paleta fría).

**Layout:** Grid responsive — `repeat(5, 1fr)` en desktop, `repeat(3, 1fr)` en tablet, `repeat(2, 1fr)` en mobile. Gap escalado: `--space-10` desktop, `--space-8` tablet, `--space-6` mobile (patrón Crosby).

### Sección de métricas / stats

Los números grandes son un patrón universal en las 4 referencias:

**Número destacado:**
```css
.stat-number {
  font-family: 'JetBrains Mono', monospace;
  font-size: 56px; /* desktop */
  font-weight: 400;
  color: var(--green-light); /* #40916C sobre fondo dark */
  line-height: 1;
  letter-spacing: -0.02em;
}
```
En mobile: 40px. Referencia: Ironclad usa contadores animados de 2s de duración. Harvey usa números grandes con label debajo. Fides usa 68px para H1 stats.

**Label debajo del número:** Inter Regular 15px, color blanco al 70% de opacidad sobre fondo dark. `margin-top: var(--space-2)`.

**Animación de conteo (opcional):** Los números se animan desde 0 hasta su valor final al entrar en viewport, duración 2s con easing `ease-out`. Implementar con IntersectionObserver + requestAnimationFrame. Referencia: Ironclad implementa `data-options` con `disableCounting: false` y duración de 2000ms.

### Scroll reveal animations

Implementar animación de entrada para cada sección al hacer scroll, inspirado en Fides y Crosby:

```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 700ms ease, transform 700ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Activar con IntersectionObserver (`threshold: 0.15`). Cada hijo dentro de una sección se anima con un **stagger de 100ms** (Fides usa 400ms entre elementos, demasiado lento — 100ms es más elegante). Solo aplicar a elementos principales (títulos, cards, mockups), no a cada párrafo.

Referencia: Crosby envuelve secciones en `<fk-scroll-reveal data-reveal-children="">` para stagger automático. Harvey usa `transition-all duration-500` con opacidad y escala.

### Tabs de "Para quién"

Implementar como tabs horizontales (no acordeón). Referencia: Ironclad usa `.e-tbs` con Swiper; Crosby usa cards seleccionables.

```
[Tab Despachos] [Tab Asesorías] [Tab Notarías]
─────────────────────────────────────────────────
| Contenido del tab activo                       |
```

**Tab activo:** fondo `night`, texto blanco, `border-radius: 8px 8px 0 0` (o 8px completo si los tabs flotan).
**Tab inactivo:** fondo transparente, texto `slate`, hover: texto `ink`.
**Transición de contenido:** opacidad fade de 250ms. Sin slide lateral — el contenido simplemente aparece.
**Contenido del tab:** layout de dos columnas en desktop — izquierda el claim + bullets, derecha un mini-mockup placeholder de la funcionalidad relevante.

### Flujo "Cómo funciona" (4 pasos)

Layout horizontal con conector entre pasos. Referencia: Fides usa grids de 3-4 columnas con numeración grande.

**Numeración:** `DM Sans Bold`, font-size 72px en desktop (48px mobile), color `mist` (#CBD5E1) — actúa como decoración de fondo detrás del contenido del paso. `position: absolute; top: -10px; left: 0; z-index: 0; opacity: 0.5`.

**Conector entre pasos:** línea punteada horizontal en `mist`, `border-top: 2px dashed var(--mist)`, posicionada a mitad de altura del icono del paso. En mobile: línea vertical a la izquierda (`border-left`).

**Icono de paso:** Círculo de 48px con borde `ulpiano-green` (2px solid), icono SVG outline de 24px dentro en `ulpiano-green`. Fondo blanco.

### Sección testimonio / cita

**Layout de la cita:** Texto centrado, con borde lateral izquierdo de 3px en `ulpiano-green`, padding-left `--space-6`. Referencia: Crosby usa `border-block: 1px solid var(--color-brown)` en testimonios.

**Tipografía de la cita:** Inter Regular Italic (o DM Sans si la itálica de Inter no está bien definida), 22px desktop / 18px mobile, color blanco, `max-width: 720px; margin: 0 auto`.

**Atribución:** Inter Medium 14px, color `fog` (#94A3B8), debajo de la cita con `margin-top: var(--space-4)`.

### Navegación fija

**Comportamiento:** Fixed top, fondo `night`, con transición de sombra al hacer scroll:
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--night);
  padding: 0 var(--space-6);
  height: 64px;
  display: flex;
  align-items: center;
  transition: box-shadow 300ms ease;
}
.nav.scrolled {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
```
Referencia: Harvey usa `fixed left-0 top-0 z-30` con 136px de altura (demasiado para Ulpiano — 64px es más limpio para una landing). Fides usa sticky con transición de background 600ms.

**Links de nav:** Inter Medium 14px, color `rgba(255,255,255,0.7)`, hover: `rgba(255,255,255,1)`, transición 200ms. Referencia: Harvey usa `text-header-subtext` con `text-header-subtext-hover`.

**Mobile hamburger:** A partir de ≤768px, colapsar nav en menú hamburger. Icono de 3 líneas (SVG), panel que se despliega desde arriba con fondo `night` y links apilados verticalmente, padding `--space-4` por item.

### Footer

**Layout:** 4-5 columnas en grid responsive. Referencia: Ironclad usa 4 columnas con `<h6>` como headers; Crosby usa `.footer-nav__column` con stacks.

```
[Logo + tagline] [Producto] [Para quién] [Legal] [Contacto]
```

**Fondo:** `ink` (#1E293B) — un tono más claro que `night` para crear separación visual con la sección CTA que está justo arriba. Referencia: Harvey diferencia footer y body con grises distintos.

**Separador superior:** `border-top: 1px solid rgba(203, 213, 225, 0.12)` (mist al 12% de opacidad).

**Links del footer:** Inter Regular 14px, color `rgba(255,255,255,0.6)`, hover: `rgba(255,255,255,0.9)`, transición 200ms.

**Columna del logo:** El logo arriba, debajo el tagline "El sistema operativo de las herencias." en Inter Regular 14px color `fog`, y al fondo el copyright en 13px color `fog`.

---

## Estructura de la home — Secciones

Divide la home en las siguientes secciones. **Cada sección es independiente y puede ser atacada por un diseñador diferente.** Usa comentarios JSX claros para delimitar cada sección: `{/* SECCIÓN X: NOMBRE */}`.

### Componentes compartidos (NO reimplementar en la home)
- **Header** (`components/layout/Header.tsx`) — Nav global con links reales a `/soluciones`, `/pensado-para`, `/precios`, `/demo`
- **Footer** (`components/layout/Footer.tsx`) — Footer global con links a todas las rutas del MAPEO
- **Container** (`components/layout/Container.tsx`) — Wrapper con `max-width: 1200px`
- **Section** (`components/layout/Section.tsx`) — Sección con padding y fondo configurable
- **ButtonPrimary** / **ButtonGhost** (`components/buttons/`)
- **Eyebrow** (`components/ui/Eyebrow.tsx`)
- **ScrollReveal** (`components/animations/ScrollReveal.tsx`)

Todos los links internos deben usar `next/link` (importar `Link` de `next/link`).

### Metadata (Next.js)
```tsx
export const metadata = {
  title: "Ulpiano — El sistema operativo de las herencias",
  description: "De inventario a cuaderno particional. Sin errores de cálculo. Sin revisión manual de la norma. Para abogados, asesores y notarías que gestionan herencias con volumen.",
  alternates: { canonical: "https://ulpiano.es" },
};
```

---

### SECCIÓN 1: NAV (componente compartido — NO implementar aquí)

Usa el componente `<Header />` del layout raíz (`src/app/layout.tsx`). No se reimplementa en la home.

**Referencia de diseño del Header** (implementado en `components/layout/Header.tsx`):
- Barra de navegación fija (fixed), fondo `night` (#0F1F3D), altura 64px
- Logo Ulpiano (izquierda) — placeholder SVG o texto "ULPIANO" en DM Sans Bold, 18px, blanco
- Links de navegación (centro) con `next/link`:
  - `<Link href="/soluciones">Soluciones</Link>`
  - `<Link href="/pensado-para/despachos">Pensado para</Link>`
  - `<Link href="/precios">Precios</Link>`
  - `<Link href="/recursos">Recursos</Link>`
- CTAs (derecha): "Iniciar sesión" (ghost) + `<Link href="/demo">Reserva tu demo</Link>` (botón verde)
- Texto nav: `rgba(255,255,255,0.7)`, Inter Medium 14px, hover blanco 100%
- En scroll: `box-shadow: 0 2px 12px rgba(0,0,0,0.15)`
- Mobile (≤768px): hamburger menu

---

### SECCIÓN 2: HERO

La sección más importante. Determina si el profesional sigue leyendo.

**Eyebrow (encima del H1):** "PLATAFORMA DE GESTIÓN SUCESORIA" — Inter Medium 13px, `letter-spacing: 0.08em`, color `rgba(255,255,255,0.5)`, mayúsculas.

**Copy:**
- **H1:** "De inventario a cuaderno particional. Sin errores de cálculo. Sin revisión manual de la norma."
  - DM Sans Bold, 64px desktop / 48px tablet / 36px mobile
  - Line-height: 1.1
  - Color: blanco
  - `text-wrap: balance`
  - `max-width: 640px`
- **Subtítulo:** "Ulpiano es la plataforma que estructura, valida y documenta el proceso sucesorio completo. Para abogados, asesores y notarías que gestionan herencias con volumen, complejidad y responsabilidad profesional."
  - Inter Regular, 18px desktop / 17px mobile
  - Line-height: 1.6
  - Color: `rgba(255,255,255,0.75)`
  - `max-width: 520px`
  - `margin-top: var(--space-6)` (24px)
- **CTA primario:** "Solicita tu demo gratuita" → `<ButtonPrimary href="/demo">` (padding 14px 32px, font-size 16px)
  - `margin-top: var(--space-8)` (32px)
- **CTA secundario:** "Ver cómo funciona el motor normativo" → `<ButtonGhost href="#como-funciona">` con flecha →, color blanco
  - `margin-top: var(--space-4)` (16px)

**Elemento visual (derecha del hero):**
Mockup de UI de Ulpiano mostrando un dashboard de expediente sucesorio. Construido con HTML/CSS puro (no imagen):
- Ventana con barra superior (3 dots de 8px + texto "Panel de Expedientes" en Inter Medium 13px, color `fog`)
- Fondo del mockup: `surface` (#F1F5F9)
- Tabla con 4-5 filas de datos:
  - Columnas: Causante / Estado (badge) / Próximo plazo / Cuota ISD
  - Causante: Inter Medium 14px, color `ink`
  - Estado: badges — "Liquidado" (fondo `green-bg`, texto `#2D6A4F`), "Pendiente ISD" (fondo `#FEF3C7`, texto `#B45309`), "En cálculo" (fondo `#DBEAFE`, texto `#1E6A9E`)
  - Plazo: JetBrains Mono 13px, color `slate`
  - Cuota: JetBrains Mono 14px, color `ink`, alineado derecha (ej: "€ 12.430,00")
- Una fila con fondo `rgba(45,106,79,0.06)` y borde izquierdo 3px `ulpiano-green` (fila activa)
- Tratamiento del contenedor: `border-radius: 12px`, sombra profunda sobre fondo oscuro, leve perspectiva 3D (`transform: perspective(1200px) rotateY(-2deg) rotateX(1deg)`)
- Borde exterior: `1px solid rgba(255,255,255,0.08)`
- El mockup sobresale 60px por debajo del hero (`margin-bottom: -60px; position: relative; z-index: 2`)

**Estilo del hero:**
- Fondo: `night` (#0F1F3D), full-width
- Texto: blanco
- El gradiente del logo puede aparecer como elemento decorativo: un orbe difuso de color `rgba(180, 100, 220, 0.04)` posicionado en la esquina superior derecha, 600px de diámetro, con `filter: blur(120px)`. Apenas perceptible.
- Padding-top: `calc(64px + var(--space-16))` (nav height + 64px de aire)
- Padding-bottom: `var(--space-24)` (96px) para dar espacio al mockup que sobresale
- Layout: CSS Grid — `grid-template-columns: 1fr 1fr` en desktop (50/50 en vez de 55/45 para dar más espacio al mockup). Gap: `var(--space-10)` (40px).
- Mobile (≤768px): stack vertical, copy arriba, mockup abajo (ancho 100%, sin perspectiva 3D, sin overflow negativo)

---

### SECCIÓN 3: SOCIAL PROOF / CONFIANZA

Franja estrecha entre el hero y las funcionalidades. Ancla la credibilidad.

**Contenido:**
- Eyebrow: "PROFESIONALES QUE CONFÍAN EN ULPIANO" — Inter Medium 12px, `letter-spacing: 0.1em`, color `slate`, mayúsculas, centrado
- 4-5 logos placeholder (rectángulos con texto en Inter Medium 14px, color `slate`): "Despacho García & Asociados", "Notaría Puig", "Asesoría Roca", "Bufete Casals", "Gestoria Pla"
- Debajo de los logos, una métrica destacada centrada: número "35%" en JetBrains Mono 32px, color `ink` + label "de reducción en tiempo de gestión por expediente" en Inter Regular 15px, color `slate`

**Estilo:**
- Fondo: `surface` (#F1F5F9)
- Padding: `var(--space-12) 0` (48px vertical) — sección delgada
- Logos en grayscale + opacity 0.4, hover: full color + opacity 1 (transición 300ms)
- Grid de logos: `repeat(5, 1fr)` desktop, `repeat(3, 1fr)` tablet, `repeat(2, 1fr)` mobile
- Separador superior implícito por el overlap del mockup del hero

---

### SECCIÓN 4: OUTPUTS — LO QUE OBTIENES

Sección central de la home. Muestra los 4 outputs concretos que Ulpiano entrega.

**Eyebrow:** "RESULTADOS" — Inter Medium 13px, `letter-spacing: 0.08em`, color `slate`, mayúsculas
**Título de sección:** "Lo que sale de Ulpiano" — H2, DM Sans Bold 42px, color `ink`
**Subtítulo:** "No herramientas. Resultados." — Inter Regular 18px, color `slate`, `margin-top: var(--space-3)`

**Los 4 outputs (cards):**

Cada card tiene:
- Icono: SVG outline de 24px en un círculo de 44px con fondo `green-bg` (#D8F3DC), icono color `#2D6A4F`
- Título: H3, Inter SemiBold 22px, color `ink`, `margin-top: var(--space-4)`
- Descripción: Inter Regular 15px, color `slate`, line-height 1.7, `margin-top: var(--space-3)`
- Badge: `display: inline-flex`, padding `4px 12px`, border-radius `6px`, fondo `green-bg`, texto `#2D6A4F`, Inter Medium 12px, `margin-top: var(--space-4)`
- Los números de ejemplo dentro del texto en `JetBrains Mono` con color `ink` (ej: "€ 12.430 cuota a ingresar")

**Output 1 — Árbol familiar interactivo**
- Icono: árbol / diagrama de nodos
- Título: "El árbol familiar de la herencia, dibujado solo"
- Descripción: "Introduce los herederos y beneficiarios. Ulpiano construye el diagrama sucesorio, asigna grupos de parentesco y respeta automáticamente las legítimas del CCCat."
- Badge: "Visual · Exportable"
- Link: `<Link href="/soluciones/planificacion-sucesoria">Ver planificación →</Link>`

**Output 2 — Cálculo fiscal**
- Icono: calculadora / escudo
- Título: "La cuota del ISD de cada heredero, calculada"
- Descripción: "Base imponible, reducciones autonómicas, bonificaciones, coeficiente multiplicador. El resultado final con la norma citada. Para Cataluña, con la Llei 19/2010 integrada desde la base."
- Badge: "Modelo 650 incluido"
- Destacar: dentro de la card, un bloque visual con fondo `surface` (#F1F5F9), border-radius 8px, padding 16px, que muestra `€ 12.430,00` en JetBrains Mono 24px color `ink` con un label "cuota a ingresar" debajo en Inter Regular 13px color `slate`.
- Link: `<Link href="/soluciones/fiscalidad-sucesoria">Ver fiscalidad →</Link>`

**Output 3 — Simulación comparativa de escenarios**
- Icono: comparación / bifurcación
- Título: "Tres escenarios, comparados en segundos"
- Descripción: "Herencia directa vs. donación en vida vs. usufructo al cónyuge. Ulpiano calcula el impacto fiscal de cada opción y lo muestra en paralelo. Tu cliente entiende lo que está decidiendo."
- Badge: "Planificación pre-mortem"

**Output 4 — Alerta de intereses de demora**
- Icono: reloj / alerta
- Título: "El coste de llegar tarde, calculado antes de llegar tarde"
- Descripción: "Si el período voluntario de 6 meses vence, Ulpiano calcula automáticamente el recargo por extemporaneidad según el Art. 27 LGT. Sin sorpresas para el cliente. Sin contingencias para el despacho."
- Badge: "Alertas automáticas"

**Estilo:**
- Fondo de sección: blanco
- Layout: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6)` en desktop
- Mobile: stack vertical, 1 columna
- Cards con sombra y hover según las reglas de "Tratamiento de cards"
- Padding interno de cards: `var(--space-8)` (32px)
- Padding de sección: `var(--space-20) 0` (80px vertical)

---

### SECCIÓN 5: PARA QUIÉN

Muestra que Ulpiano entiende al profesional que le habla.

**Eyebrow:** "SEGMENTOS" — mismas reglas de eyebrow
**Título:** "Hecho para quien gestiona herencias en serio" — H2

**3 perfiles como tabs horizontales:**

**Tab bar:**
- `display: flex; gap: var(--space-2)` en desktop
- Cada tab: padding `12px 24px`, Inter Medium 15px, border-radius 8px
- Tab activo: fondo `night`, texto blanco
- Tab inactivo: fondo transparente, texto `slate`, hover: texto `ink`, hover fondo: `surface`
- Transición: 200ms ease

**Contenido de cada tab (layout de 2 columnas en desktop):**

- **Columna izquierda (60%):**
  - Claim: Inter SemiBold 20px, color `ink`, `margin-bottom: var(--space-4)`
  - Bullets (máx. 3): cada bullet con un check SVG de 16px en `ulpiano-green` a la izquierda, texto Inter Regular 15px color `slate`. Gap entre bullets: `var(--space-3)`
  
- **Columna derecha (40%):**
  - Placeholder de mini-mockup relevante (rectángulo con border-radius 12px, fondo `surface`, borde `mist`, aspecto 4:3, con texto placeholder "Vista de [módulo]" centrado)

**Despachos de abogados**
- Claim: "El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos."
- Bullets:
  - Derecho foral catalán integrado desde la base, sin excepciones
  - Borrador del cuaderno particional generado a partir del expediente
  - Cada decisión del expediente queda registrada y es auditable
- Link: `<Link href="/pensado-para/despachos">Más sobre despachos →</Link>`

**Asesorías fiscales**
- Claim: "El ISD cambia. Tus expedientes activos, no."
- Bullets:
  - Recálculo automático ante cambios normativos
  - Trazabilidad auditable ante la ATC
  - Alertas de plazo antes de que el problema llegue al cliente
- Link: `<Link href="/pensado-para/asesorias">Más sobre asesorías →</Link>`

**Notarías**
- Claim: "El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa."
- Bullets:
  - Panel de seguimiento del expediente post-testamento
  - Comunicación con el cliente desde la plataforma
  - Documentación centralizada y cifrada
- Link: `<Link href="/pensado-para/notarias">Más sobre notarías →</Link>`

**Estilo:**
- Fondo de sección: blanco
- Padding: `var(--space-20) 0`
- Transición de contenido de tab: `opacity` fade 250ms
- Sin fondo coloreado de sección — la diferenciación viene de los tabs

---

### SECCIÓN 6: CÓMO FUNCIONA

Flujo visual del proceso. 4 pasos lineales con iconos y conectores.

**Eyebrow:** "PROCESO"
**Título:** "De cero a expediente cerrado" — H2

**Los 4 pasos en grid horizontal (desktop) o stack vertical (mobile):**

`display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6);`

Cada paso:
1. Número grande decorativo: DM Sans Bold 72px (desktop) / 48px (mobile), color `mist` al 50% de opacidad, posición absoluta detrás del contenido
2. Icono circular: 48px diámetro, borde 2px `ulpiano-green`, fondo blanco, icono SVG outline 24px en `ulpiano-green`
3. Título del paso: Inter SemiBold 18px, color `ink`, `margin-top: var(--space-4)`
4. Descripción: Inter Regular 15px, color `slate`, line-height 1.7, `margin-top: var(--space-2)`

**Conector entre pasos (desktop):** línea punteada horizontal, `border-top: 2px dashed var(--mist)`, posicionada a la altura del centro del icono circular (24px desde el top del icono). Se extiende desde el borde derecho del icono hasta el borde izquierdo del siguiente. En mobile: línea vertical `border-left: 2px dashed var(--mist)` a la izquierda del contenido.

**Pasos:**
1. **Introduces el inventario** — Bienes, deudas, herederos y sus relaciones. El sistema lo estructura.
2. **Ulpiano calcula** — Legítimas, cuotas, base del ISD, reducciones y bonificaciones autonómicas. Con la norma citada.
3. **Comparas escenarios** — Ves el impacto fiscal de cada opción de distribución antes de decidir.
4. **Generas la documentación** — Borrador del cuaderno particional listo para tu revisión. En Word, con tus datos.

**Estilo:**
- Fondo: `surface` (#F1F5F9)
- Padding: `var(--space-20) 0`

---

### SECCIÓN 7: TESTIMONIO / SOCIAL PROOF AMPLIADO

Una cita destacada y métricas clave. Fondo oscuro para contraste.

**Cita:**
> "La automatización de los cálculos del ISD y el árbol familiar interactivo nos han ahorrado horas de trabajo por expediente. El motor normativo catalán es lo que nos convenció."
> — *Abogada, Despacho Sucesorio, Barcelona*

- Tipografía: Inter Italic 22px desktop / 18px mobile, color blanco, `max-width: 720px; margin: 0 auto`
- Borde izquierdo: `3px solid var(--ulpiano-green)`, padding-left `var(--space-6)`
- Atribución: Inter Medium 14px, color `fog`, `margin-top: var(--space-4)`

**3 métricas (debajo de la cita, en grid de 3 columnas):**

`display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-8); margin-top: var(--space-16); text-align: center;`

- **35%** — Reducción media en tiempo de gestión por expediente
- **6 meses** — Plazo legal controlado automáticamente
- **100%** — Normativa catalana integrada, sin adaptaciones manuales

Cada métrica:
- Número: JetBrains Mono 56px desktop / 40px mobile, color `green-light` (#40916C), line-height 1, `letter-spacing: -0.02em`
- Separador: línea de 40px de ancho, 2px de alto, color `rgba(255,255,255,0.15)`, centrada, `margin: var(--space-3) auto`
- Label: Inter Regular 15px, color `rgba(255,255,255,0.7)`

**Animación de conteo:** Los números se animan desde 0 al entrar en viewport. Duración 2s, easing `ease-out`. Implementar con IntersectionObserver.

**Estilo:**
- Fondo: `night` (#0F1F3D)
- Padding: `var(--space-24) 0` (96px — dar espacio generoso a esta sección)

---

### SECCIÓN 8: CTA FINAL

Cierre de la home. Una llamada a la acción limpia y sin ruido.

**Contenido centrado:**
- **H2:** "Tu próximo expediente, ya en Ulpiano" — DM Sans Bold 42px desktop / 28px mobile, color blanco, `text-wrap: balance`
- **Subtítulo:** "25 minutos de demo. Sin presentación comercial. Directamente sobre el producto con un caso del sector." — Inter Regular 18px, color `rgba(255,255,255,0.7)`, `max-width: 520px; margin: var(--space-4) auto 0`
- **CTA primario:** "Solicita tu demo gratuita" → `<ButtonPrimary href="/demo">` grande (padding 16px 40px, font-size 17px), `margin-top: var(--space-8)`
- **CTA secundario:** "O empieza gratis sin tarjeta" → `<Link href="/precios">`, texto blanco al 60%, Inter Regular 14px, `margin-top: var(--space-4)`

**Separación visual del testimonio (sección anterior, también dark):** Insertar una línea divisoria: `border-top: 1px solid rgba(203, 213, 225, 0.1)` al inicio de esta sección. Alternativamente, añadir un orbe decorativo difuso similar al del hero, posicionado detrás del CTA.

**Estilo:**
- Fondo: `night` (#0F1F3D)
- Padding: `var(--space-24) 0` (96px)
- `text-align: center`
- El botón verde debe ser el elemento más prominente — considerar hacerlo más grande que en el resto de secciones (+2px padding, +1px font-size)

---

### SECCIÓN 9: FOOTER (componente compartido — NO implementar aquí)

Usa el componente `<Footer />` del layout raíz (`src/app/layout.tsx`). No se reimplementa en la home.

**Referencia de diseño del Footer** (implementado en `components/layout/Footer.tsx`):

**Columnas con links internos via `next/link`:**
1. **Ulpiano** — Logo + tagline: *"El sistema operativo de las herencias."* + copyright
2. **Producto** — `<Link href="/soluciones">Soluciones</Link>` · `<Link href="/soluciones/planificacion-sucesoria">Planificador</Link>` · `<Link href="/soluciones/fiscalidad-sucesoria">Fiscalidad</Link>` · `<Link href="/soluciones/activos-digitales">Activos digitales</Link>` · `<Link href="/precios">Precios</Link>`
3. **Para quién** — `<Link href="/pensado-para/despachos">Despachos</Link>` · `<Link href="/pensado-para/notarias">Notarías</Link>` · `<Link href="/pensado-para/asesorias">Asesorías</Link>`
4. **Legal** — Política de privacidad · Términos y condiciones · Cookies
5. **Contacto** — soporte@ulpiano.es · +34 XXX XXX XXX

**Estilo:**
- Fondo: `ink` (#1E293B) — diferente de `night` para crear separación
- Layout: `display: grid; grid-template-columns: 1.5fr repeat(4, 1fr); gap: var(--space-8);` en desktop
- Mobile: 2 columnas, luego stack
- Separador superior: `border-top: 1px solid rgba(203, 213, 225, 0.12)`
- Texto: `rgba(255,255,255,0.6)`, Inter Regular 14px
- Headers de columna: Inter SemiBold 13px, `rgba(255,255,255,0.4)`, mayúsculas, `letter-spacing: 0.06em`
- Links hover: `rgba(255,255,255,0.9)`, transición 200ms
- Padding: `var(--space-16) 0 var(--space-10) 0`

---

## Reglas técnicas

- **Componente Next.js** (`src/app/page.tsx`) dentro del App Router. No es un archivo HTML standalone.
- **Reutilizar componentes compartidos:** Header, Footer, Container, Section, ButtonPrimary, ButtonGhost, Eyebrow, ScrollReveal. No reimplementar.
- **Links internos:** Siempre `next/link` (`import Link from 'next/link'`). Nunca `<a href>` para rutas internas.
- **Tailwind CSS v4** para estilos, con los design tokens definidos en `globals.css` como `@theme`. Los tokens de color y espaciado del Brand Guide están configurados en el tema.
- **Responsive:** mobile-first, breakpoints en 768px (`md:`) y 1024px (`lg:`), opcionalmente 1280px (`xl:`)
- **Fuentes:** Cargadas en el layout raíz vía `next/font/google` (Inter, DM Sans, JetBrains Mono). No importar de nuevo.
- **Interactividad client-side:** Los componentes que necesitan JS (tabs, scroll reveal, counter animation) deben marcarse con `'use client'` o usar componentes client existentes.
- **Performance:** sin imágenes raster pesadas; usar SVG para iconos (Lucide React: `import { Icon } from 'lucide-react'`) y HTML/CSS puro para mockups de UI
- **Accesibilidad:** `alt` en imágenes, contraste WCAG AA, focus visible en interactivos, `aria-selected` en tabs, `role="tablist"` / `role="tab"` / `role="tabpanel"`
- **Scroll suave:** `html { scroll-behavior: smooth; }` en globals.css + `scroll-padding-top: 80px` para compensar la nav fija

---

## Lo que NO hacer

- ❌ No usar el gradiente morado-rosa como color de sección, botón o fondo protagonista
- ❌ No usar lenguaje de startup de consumo ("revoluciona", "sin complicaciones", "fácil de usar")
- ❌ No poner más de un CTA por sección (excepto el hero que tiene primario + secundario)
- ❌ No mencionar "IA" de forma genérica — si aparece, especificar qué hace exactamente
- ❌ No usar animaciones complejas, carruseles automáticos o parallax
- ❌ No diseñar para el familiar en duelo — Ulpiano habla al profesional, no al cliente final
- ❌ No usar los colores funcionales (verde, ámbar, rojo) como decoración (solo en badges de estado del mockup)
- ❌ No usar border-radius superior a 12px en cards (no pill-shaped cards)
- ❌ No usar sombras de tipo glow o neon — las sombras son neutras/oscuras, nunca coloreadas (excepto el hover del botón verde)
- ❌ No poner fondos blancos consecutivos sin separación visual — respetar la alternancia dark/light/neutral

---

## Entregable

Un archivo `home.html` con:
- Las 9 secciones implementadas y delimitadas con comentarios `<!-- SECCIÓN X: NOMBRE -->`
- CSS custom properties con TODOS los tokens de color, tipografía y espaciado definidos en `:root` (siguiendo la escala documentada)
- Responsive completo (mobile-first, probado visualmente en 375px, 768px, 1024px y 1280px)
- Mockup de UI del hero construido en HTML/CSS puro con datos placeholder realistas
- Scroll reveal animations activadas por IntersectionObserver
- Counter animation para las métricas de la sección 7
- Tabs funcionales en "Para quién" con transición de opacidad
- Nav con sombra al scroll y hamburger en mobile
- Scroll suave entre secciones
- Eyebrows en cada sección
- Iconos SVG inline (outline, 24px, stroke-width 2) o cargados desde Lucide/Heroicons CDN
