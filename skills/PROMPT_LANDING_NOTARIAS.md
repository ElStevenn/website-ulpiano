# PROMPT DE DISEÑO — Landing `/pensado-para/notarias`

> **Tipo de página:** Buyer Persona Landing (Notarías)
> **URL:** `/pensado-para/notarias`
> **Prioridad:** Tier 2 — Diferenciación
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Por qué esta página tiene estructura propia?

Las páginas de `/soluciones/` responden a "¿qué produce Ulpiano?" — orientadas a output técnico, con mockups de producto y especificaciones funcionales.

Las páginas de `/pensado-para/` responden a **"¿esto es para mí?"** — orientadas a identificación profesional. El notario que aterriza aquí necesita verse reflejado en los primeros 5 segundos: reconocer su flujo de trabajo, su dolor operativo, y el resultado que obtiene en su lenguaje.

**Consecuencia:** comparte los tokens de diseño de Ulpiano (colores, tipografía, componentes base) pero la estructura de secciones es diferente a las páginas de soluciones.

### Diferencias clave con `/soluciones/*`

| Aspecto | Páginas de Soluciones | Esta página (Persona) |
|---|---|---|
| Pregunta que responde | "¿Qué produce esto?" | "¿Esto es para mi notaría?" |
| Hero | Output técnico + mockup de producto | Claim directo al dolor operativo-documental |
| Cuerpo | Outputs → Antes/Después → Métricas | Flujos de trabajo reconocibles → Beneficios profesionales |
| Prueba social | Métricas de eficiencia | Testimonios de pares (otros notarios) |
| CTA | "Solicita tu demo" | "Reserva tu Demo" / "Más Información" |
| Tono | Técnico-preciso | Consultivo-operativo con el profesional |

### Diferencia clave con `/pensado-para/despachos`

La landing de Despachos se centra en **eficiencia del cálculo legal** (legítimas, cuadernos particionales, simulaciones fiscales). La landing de Notarías se centra en **continuidad de la relación con el cliente tras la firma del testamento**: seguimiento post-testamento, documentación centralizada, generación de escrituras y comunicación desde la plataforma. El enfoque es operativo-documental, no jurídico-litigioso.

**Claim oficial del producto para notarías:** "El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa."

---

## 1. ESTRUCTURA DE SECCIONES

```
/pensado-para/notarias

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO (fondo night)                       │
│ Eyebrow + H1 + Subtítulo + 2 CTAs                  │
│ Sin mockup. Fondo limpio con orb decorativo.        │
│ El copy ES el producto aquí.                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: PROPUESTA DE VALOR (fondo white)         │
│ "¿Por Qué Ulpiano para Notarías?"                  │
│ Subtítulo + 3 bloques funcionales en grid           │
│ Cada bloque = flujo de trabajo reconocible          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2B: CLAIMS RÁPIDOS (fondo surface)          │
│ 4 claims específicos para notarías                  │
│ Strip horizontal con resultados reconocibles        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: BENEFICIOS CLAVE (fondo white)           │
│ 4 beneficios orientados a resultado profesional     │
│ Grid 2x2 con iconos + texto                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: TESTIMONIOS (fondo surface, opcional)    │
│ Citas breves de notarios usuarios                   │
│ Placeholders si no hay testimonios reales aún       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CTA FINAL (fondo night)                  │
│ Frase de cierre + 2 botones                         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ CROSS-LINKS (fondo white)                           │
│ Enlaces a páginas de soluciones relacionadas         │
└─────────────────────────────────────────────────────┘
```

---

## 2. ESPECIFICACIÓN POR SECCIÓN

---

### SECCIÓN 1: HERO

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `calc(64px + var(--space-16))` top, `var(--space-24)` bottom
**Layout:** Centrado, una columna. No hay mockup a la derecha.
**Orb decorativo:** sí, sutil (como hero de la home), con `rgba(45,106,79,0.08)` difuminado.

**Contenido:**

```
[Eyebrow — color ulpiano-green, uppercase, letter-spacing 2px, font-size 13px]
PENSADO PARA NOTARÍAS

[H1 — DM Sans Bold, 48→64px, color white, max-width: 720px, centrado]
El Expediente Post-Testamento, Activo. La Documentación Centralizada.
El Seguimiento del Cliente, Desde la Plataforma.

[Subtítulo — Inter Regular, 17→20px, color rgba(255,255,255,0.75), max-width: 600px, centrado]
El testamento es el inicio de una relación de 20 años.
Ulpiano te da las herramientas para mantenerla activa:
seguimiento del expediente, documentación cifrada y comunicación
con el cliente — todo desde un único entorno.

[CTAs — flex, gap 16px, centrado, margin-top: var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Más Información]  ← btn-ghost (blanco, con flecha →)
```

**Notas de diseño:**
- El hero centrado (sin mockup lateral) funciona aquí porque la página de persona no vende el producto visualmente — vende la relevancia para el profesional.
- El H1 es largo y deliberadamente compuesto por tres frases-resultado que el notario reconoce como carencias actuales de su flujo operativo. Cada frase es un output, no una feature.
- El subtítulo incorpora el claim oficial ("El testamento es el inicio de una relación de 20 años") como ancla emocional antes de enumerar lo que la plataforma aporta.
- **Responsive:** En mobile, eyebrow + H1 + subtítulo + CTAs apilados. Padding reduce a `var(--space-12)` bottom.

---

### SECCIÓN 2: PROPUESTA DE VALOR — "¿Por Qué Ulpiano para Notarías?"

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header de sección:**

```
[Eyebrow — color slate, uppercase]
PARA TU NOTARÍA

[H2 — DM Sans Bold, 28→42px, color ink, max-width: 700px]
¿Por Qué Ulpiano para Notarías?

[Subtítulo — Inter Regular, 17px, color slate, max-width: 600px]
Seguimiento Post-Testamento, Documentación Centralizada
y Comunicación con el Cliente — Desde una Única Plataforma
```

**Grid de 3 bloques funcionales:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(3, 1fr)` (≥1024px)
**Gap:** `var(--space-8)`
**Cada bloque:** Componente `.card` reutilizable (border, shadow, padding var(--space-6) → var(--space-8) desktop)

---

#### Bloque 1: Expediente Post-Testamento Activo

```
[Icono — círculo green-bg, 48x48, con SVG de calendar-clock/timeline]

[H3 — Inter SemiBold, 20→24px, color ink]
Expediente Post-Testamento Activo

[Subtítulo — body-sm, color slate]
La relación con el cliente no termina en la firma. El expediente sigue vivo.

[Feature 1 — con check icon verde]
✓ Seguimiento Continuo del Cliente
El expediente post-testamento se mantiene activo tras la firma.
Cambios patrimoniales, nuevos herederos, modificaciones de voluntad
— todo registrado y vinculado al expediente original.

[Feature 2 — con check icon verde]
✓ Alertas y Recordatorios Automáticos
Plazos de vencimiento, eventos sucesorios próximos, revisiones
periódicas programadas. La plataforma avisa antes de que el
cliente tenga que llamar.
```

**Formato de cada feature dentro del bloque:**
- Check icon (16x16, stroke ulpiano-green, 2.5px)
- Título de feature en **Inter Medium** (15px, color ink)
- Descripción en Inter Regular (15px, color slate, line-height 1.7)
- Gap entre features: `var(--space-4)`

---

#### Bloque 2: Documentación Centralizada y Generación de Escrituras

```
[Icono — círculo green-bg, 48x48, con SVG de folder-lock/document-stack]

[H3 — Inter SemiBold, 20→24px, color ink]
Documentación Centralizada y Generación de Escrituras

[Subtítulo — body-sm, color slate]
Todo el expediente en un repositorio cifrado. Las escrituras, generadas desde los datos.

[Feature 1 — con check icon verde]
✓ Repositorio Cifrado por Expediente
Toda la documentación del expediente — testamentos, escrituras,
certificados, notas — en un único lugar. Acceso controlado por
rol: el notario titular, los oficiales, el cliente. Trazabilidad
de quién accede a qué y cuándo.

[Feature 2 — con check icon verde]
✓ Escrituras Generadas Desde Datos del Expediente
La escritura de partición, la de aceptación de herencia,
la de adjudicación — redactadas a partir de los datos estructurados
del expediente. Sin partir de un documento en blanco.
Sin copiar-pegar entre archivos.
```

---

#### Bloque 3: Comunicación y Coordinación

```
[Icono — círculo green-bg, 48x48, con SVG de message-circle/chat-platform]

[H3 — Inter SemiBold, 20→24px, color ink]
Comunicación y Coordinación

[Subtítulo — body-sm, color slate]
Un canal único por expediente. Sin hilos de email. Sin grupos de WhatsApp.

[Feature 1 — con check icon verde]
✓ Canal de Comunicación Integrado
El cliente recibe actualizaciones, solicita documentación
y consulta el estado de su expediente desde la plataforma.
Sin llamadas para preguntar "¿cómo va lo mío?".
Sin coordinación por email o WhatsApp.

[Feature 2 — con check icon verde]
✓ Panel de Estado del Expediente
El cliente ve el progreso del expediente: pasos completados,
documentación pendiente, próximas acciones. Transparencia
operativa sin esfuerzo adicional para la notaría.
```

---

### SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)

> **Nota:** Esta subsección presenta claims específicos para notarías — resultados concretos del flujo de trabajo notarial que el profesional reconoce como tareas de su operativa diaria.

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Grid horizontal, `repeat(auto-fit, minmax(240px, 1fr))`, gap var(--space-6)
**Cada claim:** Texto centrado, Inter Medium 15px, color ink

```
La escritura de partición, generada desde el expediente
El seguimiento post-testamento, desde la plataforma
La documentación del expediente, cifrada y centralizada
La comunicación con el cliente, sin salir de Ulpiano
```

**Formato visual de cada claim:**
- Fondo: `var(--white)` con `border: 1px solid var(--mist)`, border-radius 8px
- Padding: `var(--space-4) var(--space-6)`
- Icono pequeño a la izquierda (check circle en green, 20x20) + texto
- O bien: sin icono, solo texto centrado con font-weight 600 y un acento de `border-left: 3px solid var(--ulpiano-green)`

**Propósito:** Estos claims actúan como "anchors de velocidad" — el notario escanea y reconoce tareas de su día a día resueltas desde la plataforma. Son el equivalente de los "social proof numbers" pero en formato de resultado concreto, adaptados al flujo operativo-documental de una notaría.

---

### SECCIÓN 3: BENEFICIOS CLAVE

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header:**

```
[Eyebrow — color slate]
BENEFICIOS

[H2 — DM Sans Bold, 28→42px, color ink]
Lo Que Cambia en Tu Notaría con Ulpiano
```

**Grid 2x2:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (≥768px)
**Gap:** `var(--space-6)`

Cada beneficio es un `.card` con:
- Icono (48x48, circle green-bg, SVG verde)
- H3 (20px, Inter SemiBold, ink)
- P (15px, Inter Regular, slate, line-height 1.7)

---

#### Beneficio 1: Relación Continuada con el Cliente

```
[Icono: handshake/link-chain]
[H3] Relación Continuada con el Cliente
[P] El testamento es el inicio. El expediente post-testamento mantiene
la relación activa durante años: revisiones periódicas, actualizaciones
patrimoniales, eventos sucesorios — todo registrado y seguido desde
la plataforma. El cliente vuelve porque su expediente sigue vivo.
```

#### Beneficio 2: Eficiencia Documental

```
[Icono: file-text/document-speed]
[H3] Eficiencia Documental
[P] Escrituras generadas desde los datos estructurados del expediente.
Sin redactar desde cero. Sin copiar-pegar entre documentos.
La escritura de partición, la de aceptación de herencia — con los
datos del caso ya incorporados.
```

#### Beneficio 3: Seguridad y Control de Acceso

```
[Icono: shield-lock/key]
[H3] Seguridad y Control de Acceso
[P] Documentación cifrada, accesible por rol. El notario titular,
los oficiales y el cliente — cada uno con su nivel de acceso.
Trazabilidad completa de quién accede a qué documento y cuándo.
```

#### Beneficio 4: Coordinación sin Fricción

```
[Icono: message-square/workflow]
[H3] Coordinación sin Fricción
[P] Sin hilos de email perdidos. Sin grupos de WhatsApp con documentos
sensibles. Un canal único por expediente donde el cliente consulta,
la notaría responde, y todo queda registrado en el contexto del caso.
```

---

### SECCIÓN 4: TESTIMONIOS (Opcional / Placeholders)

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-16)` top/bottom

**Layout:** 2 testimonios lado a lado (desktop), apilados (mobile)

```
[Quote 1]
"Antes, tras la firma del testamento, el cliente desaparecía hasta que
surgía una urgencia. Con Ulpiano, el expediente post-testamento nos
permite mantener la relación activa y anticiparnos a los cambios."
— Elena M., Notaria | Notaría en Barcelona

[Quote 2]
"La generación de escrituras desde los datos del expediente nos ahorra
horas de redacción. Y el cliente puede consultar el estado de su caso
sin tener que llamar a la notaría."
— Carles V., Oficial de Notaría | Girona
```

**Notas:**
- Si no hay testimonios reales, marcar como `[Pendiente: testimonios reales]` en el código con un diseño placeholder sutil.
- Cada testimonio: border-left 3px solid ulpiano-green, padding-left var(--space-6), font-style italic, font-size 17px, color ink. Autor en fog, 14px.
- Los testimonios reflejan los dos ejes principales de la propuesta para notarías: (1) continuidad de la relación post-testamento y (2) eficiencia documental y transparencia operativa.

---

### SECCIÓN 5: CTA FINAL

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `var(--space-24)` top/bottom
**Layout:** Centrado, una columna
**Clase:** `.cta-final`
**Orb decorativo:** sí, sutil, como en la home

```
[H2 — DM Sans Bold, 28→42px, color white, max-width: 640px, centrado]
El Expediente Post-Testamento Que Mantiene la Relación
con Tu Cliente Activa Durante 20 Años

[Subtítulo — 17→18px, color rgba(255,255,255,0.7), max-width: 520px, centrado]
Seguimiento continuo, documentación centralizada, escrituras generadas
y comunicación con el cliente — desde una única plataforma.

[CTAs — flex, gap 16px, centrado, margin-top var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Empieza Ahora]    ← btn-ghost (blanco, con flecha →)

[Alt text — 14px, color rgba(255,255,255,0.6), margin-top var(--space-4)]
Ulpiano – Innovación en Derecho Sucesorio
```

---

### CROSS-LINKS

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Centrado, max-width 800px

**Header:**

```
[Eyebrow — color slate]
PROFUNDIZA EN CADA MÓDULO

[H3 — Inter SemiBold, 20→24px, color ink, centrado]
Explora las Soluciones de Ulpiano
```

**Links (formato card horizontal o lista con flecha):**

| Link | Destino | Descripción breve |
|---|---|---|
| Documentación Sucesoria | `/soluciones/documentacion-sucesoria` | El cuaderno particional, la escritura, el testamento — generados desde el expediente. |
| Planificación Sucesoria | `/soluciones/planificacion-sucesoria` | El patrimonio inventariado, el árbol dibujado, las legítimas calculadas. |
| Fiscalidad Sucesoria | `/soluciones/fiscalidad-sucesoria` | La cuota del ISD calculada. El Modelo 650 listo. La norma citada. |

**Formato de cada link:**
- Card horizontal con border-left 3px solid ulpiano-green
- Título en Inter Medium 16px, color ink
- Descripción en Inter Regular 14px, color slate
- Flecha (→) a la derecha, color ulpiano-green
- Hover: background `var(--surface)`, transition 200ms

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado en 1 columna. Hero padding reducido. Cards full-width. Claims strip en 1 col. CTAs apilados. |
| Tablet (768px–1023px) | Grid de bloques funcionales en 2 columnas (bloque 3 full-width debajo). Beneficios 2x2. Testimonios apilados. |
| Desktop (≥1024px) | Bloques funcionales 3 columnas. Beneficios 2x2. Testimonios lado a lado. Cross-links en fila. |

---

## 4. COMPONENTES REUTILIZABLES

La página debe componer estos componentes existentes del design system:

| Componente | Uso en esta página |
|---|---|
| `.hero` / hero styles | Sección 1 (hero centrado, sin mockup) |
| `.eyebrow` | Headers de cada sección |
| `.btn-primary` / `.btn-ghost` | CTAs del hero y CTA final |
| `.card` | Bloques funcionales y beneficios |
| `.reveal` / `.visible` | Scroll animations en cada sección |
| `.cta-final` | Sección 5 |
| `.container` | Wrapper de contenido (max-width 1200px) |

**Componentes nuevos necesarios:**

| Componente | Descripción |
|---|---|
| `FeatureBlock` | Card con icono, H3, subtítulo, y lista de features con check icons. Reutilizable con la landing de Despachos. |
| `BenefitCard` | Card con icono, H3, párrafo descriptivo. Reutilizable con la landing de Despachos. |
| `ClaimStrip` | Fila horizontal de claims rápidos con border-left accent. Reutilizable con la landing de Despachos. |
| `TestimonialQuote` | Cita con border-left verde, texto italic, autor. Reutilizable con la landing de Despachos. |
| `CrossLinkCard` | Card horizontal con título, descripción y flecha para enlazar a páginas de soluciones. Nuevo para esta página, reutilizable en todas las de `/pensado-para/`. |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Para Notarías | Gestión Digital de Herencias — Ulpiano",
  description:
    "Expediente post-testamento activo, documentación centralizada y cifrada, generación de escrituras y comunicación con el cliente desde la plataforma. Gestión sucesoria digital para notarías.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/notarias",
  },
};
```

**Open Graph (recomendado):**

```tsx
openGraph: {
  title: "Para Notarías | Gestión Digital de Herencias — Ulpiano",
  description:
    "El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa.",
  url: "https://ulpiano.es/pensado-para/notarias",
  siteName: "Ulpiano",
  type: "website",
},
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Principios de copy aplicados en esta página

1. **"El expediente post-testamento, activo"** → Output reconocible. El notario sabe que hoy el expediente muere tras la firma. Este claim invierte esa realidad.

2. **"La documentación centralizada"** → Output operativo. El notario lidia con documentos repartidos entre carpetas físicas, email y sistemas internos. "Centralizada" le habla directamente.

3. **"El seguimiento del cliente, desde la plataforma"** → Output relacional. El notario sabe que pierde el contacto con el cliente tras la firma. Este claim le ofrece continuidad sin esfuerzo.

4. **"Sin redactar desde cero"** → Anti-dolor. El notario reconoce las horas dedicadas a redactar escrituras partiendo de plantillas genéricas o documentos anteriores. "Desde los datos del expediente" es el resultado que quiere.

5. **"Sin salir de Ulpiano"** → Claim de plataforma. El notario reconoce la fragmentación: email para comunicar, carpeta compartida para documentos, teléfono para seguimiento. Un canal único resuelve esto.

### Palabras y expresiones a evitar

| Evitar | Usar en su lugar | Razón |
|---|---|---|
| "Garantiza" | "Refuerza" / "Mantiene" | Implica responsabilidad legal |
| "ulpiano.es" en copy visible | "Ulpiano" | La marca es Ulpiano, no el dominio |
| "Revoluciona" / "Transforma" | "Mejora" / "Agiliza" | Lenguaje de startup |
| "Potente" / "Robusto" | Descripción concreta del resultado | Superlativo vacío |
| "Inteligente" / "Smart" | Descripción del mecanismo | Buzzword sin contenido |
| Emojis | — | Fuera del tono de marca |
| "Fácil de usar" | "Sin pasos adicionales" / "Desde la plataforma" | Genérico, no demuestra nada |

### Claims específicos para notarías

| Claim | Por qué funciona |
|---|---|
| "La escritura de partición, generada desde el expediente" | El notario reconoce la tarea (redactar escritura) y el resultado (generada, no redactada a mano) |
| "El seguimiento post-testamento, desde la plataforma" | Nombra el momento exacto donde hoy se pierde la relación con el cliente |
| "La documentación del expediente, cifrada y centralizada" | Dos dolores operativos en una frase: dispersión y seguridad |
| "La comunicación con el cliente, sin salir de Ulpiano" | El notario reconoce la fragmentación de canales como fricción diaria |

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Screenshots de panel de seguimiento post-testamento | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots de repositorio de documentación cifrada | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots de generación de escritura desde expediente | PNG 2x | Pendiente (placeholder) | Alta |
| Testimonios reales de notarios | Texto | Pendiente | Media |
| Iconos SVG para bloques funcionales | SVG inline | Reutilizar del design system | Resuelta |
| Iconos SVG para beneficios | SVG inline | Reutilizar del design system | Resuelta |
| Logo de notarías colaboradoras | PNG/SVG | Pendiente | Baja |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero centrado sin mockup, con claim que el notario reconoce como carencia actual
- [ ] 3 bloques funcionales con features específicas y check icons
- [ ] Claims strip con los 4 resultados rápidos del notario
- [ ] 4 beneficios en grid 2x2 orientados a resultado profesional
- [ ] Testimonios (al menos placeholders con diseño final)
- [ ] CTA final con doble botón y claim de cierre output-oriented
- [ ] Cross-links a las 3 páginas de soluciones relevantes
- [ ] Responsive mobile / tablet / desktop
- [ ] Scroll reveal animations en cada sección
- [ ] Metadata SEO correcta con canonical y Open Graph
- [ ] Copy revisado contra `product-marketing-context.md`
- [ ] Sin lenguaje de startup, sin "garantiza", sin superlativos vacíos
- [ ] "Ulpiano" (no "ulpiano.es") en todo el copy visible
- [ ] Tokens de diseño coherentes con globals.css
- [ ] Links de navegación actualizados (Header.tsx apunta aquí)
- [ ] Componentes reutilizables compartidos con landing de Despachos

---

## 9. RELACIÓN CON OTRAS PÁGINAS

- **Home (ParaQuien.tsx):** El tab "Notarías" mantiene sus claims actuales. NO se modifica.
- **Header.tsx:** Verificar que tiene link a `/pensado-para/notarias`. Añadir si no existe.
- **Footer.tsx:** Verificar que tiene link en sección "Para quién". Añadir si no existe.
- **Landing Despachos (`/pensado-para/despachos`):** Comparte componentes (`FeatureBlock`, `BenefitCard`, `ClaimStrip`, `TestimonialQuote`) pero con contenido diferente. Verificar que los componentes son parametrizables.
- **Cross-links:** Desde esta página, enlazar a:
  - `/soluciones/documentacion-sucesoria` (generación de escrituras y documentos)
  - `/soluciones/planificacion-sucesoria` (inventario patrimonial y árbol sucesorio)
  - `/soluciones/fiscalidad-sucesoria` (cálculo fiscal del ISD)
  - `/demo` (CTA principal)

---

**Cuando se vaya a implementar, crear:**
1. `src/app/(marketing)/pensado-para/notarias/page.tsx` — Server component con metadata
2. `src/app/(marketing)/pensado-para/notarias/NotariasClient.tsx` — Client component con toda la UI
3. Reutilizar componentes de `/pensado-para/despachos/` (`FeatureBlock`, `BenefitCard`, `ClaimStrip`, `TestimonialQuote`). Extraer a carpeta compartida si aún no lo están.
4. Añadir `CrossLinkCard` como componente nuevo reutilizable en `src/components/` o dentro de la carpeta de marketing.
5. Añadir estilos específicos en `globals.css` si los componentes nuevos lo requieren (preferir reutilizar clases existentes).
