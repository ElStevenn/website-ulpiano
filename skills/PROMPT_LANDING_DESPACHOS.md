# PROMPT DE DISEÑO — Landing `/pensado-para/despachos`

> **Tipo de página:** Buyer Persona Landing (Despachos de Abogados)
> **URL:** `/pensado-para/despachos`
> **Prioridad:** Tier 2 — Diferenciación
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Por qué esta página tiene estructura propia?

Las páginas de `/soluciones/` responden a "¿qué produce Ulpiano?" — orientadas a output técnico, con mockups de producto y especificaciones funcionales.

Las páginas de `/pensado-para/` responden a **"¿esto es para mí?"** — orientadas a identificación profesional. El abogado que aterriza aquí necesita verse reflejado en los primeros 5 segundos: reconocer su flujo de trabajo, su dolor operativo, y el resultado que obtiene en su lenguaje.

**Consecuencia:** comparte los tokens de diseño de Ulpiano (colores, tipografía, componentes base) pero la estructura de secciones es diferente a las páginas de soluciones.

### Diferencias clave con `/soluciones/*`

| Aspecto | Páginas de Soluciones | Esta página (Persona) |
|---|---|---|
| Pregunta que responde | "¿Qué produce esto?" | "¿Esto es para mí?" |
| Hero | Output técnico + mockup de producto | Claim directo al dolor profesional |
| Cuerpo | Outputs → Antes/Después → Métricas | Flujos de trabajo reconocibles → Beneficios profesionales |
| Prueba social | Métricas de eficiencia | Testimonios de pares (otros abogados) |
| CTA | "Solicita tu demo" | "Reserva tu Demo" / "Más Información" |
| Tono | Técnico-preciso | Consultivo-empático con el profesional |

---

## 1. ESTRUCTURA DE SECCIONES

```
/pensado-para/despachos

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO (fondo night)                       │
│ Eyebrow + H1 + Subtítulo + 2 CTAs                  │
│ Sin mockup. Fondo limpio con orb decorativo.        │
│ El copy ES el producto aquí.                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: PROPUESTA DE VALOR (fondo white)         │
│ "¿Por Qué ulpiano.es para Abogados?"               │
│ Subtítulo + 3 bloques funcionales en grid           │
│ Cada bloque = flujo de trabajo reconocible          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: BENEFICIOS CLAVE (fondo surface)         │
│ 4 beneficios orientados a resultado profesional     │
│ Grid 2x2 con iconos + texto                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: TESTIMONIOS (fondo white, opcional)      │
│ Citas breves de abogados usuarios                   │
│ Placeholders si no hay testimonios reales aún       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CTA FINAL (fondo night)                  │
│ Frase de cierre + 2 botones                         │
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
[Eyebrow]
PENSADO PARA ABOGADOS

[H1 — DM Sans Bold, 48→64px, color white, max-width: 720px, centrado]
Optimiza tus Expedientes de Herencia y Sorprende a tus Clientes con Visualizaciones Claras

[Subtítulo — Inter Regular, 17→20px, color rgba(255,255,255,0.75), max-width: 600px, centrado]
Con ulpiano.es, agiliza la elaboración y el seguimiento de expedientes sucesorios, ofreciendo al cliente diagramas y visualizaciones que facilitan la comprensión de cada proceso.

[CTAs — flex, gap 16px, centrado, margin-top: var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Más Información]  ← btn-ghost (blanco, con flecha →)
```

**Notas de diseño:**
- El hero centrado (sin mockup lateral) funciona aquí porque la página de persona no vende el producto visualmente — vende la relevancia para el profesional.
- El H1 es más largo de lo habitual en Ulpiano. Esto es deliberado: el abogado necesita leer su resultado ("expedientes de herencia" + "visualizaciones claras") sin ambigüedad.
- **Responsive:** En mobile, eyebrow + H1 + subtítulo + CTAs apilados. Padding reduce a `var(--space-12)` bottom.

---

### SECCIÓN 2: PROPUESTA DE VALOR — "¿Por Qué ulpiano.es para Abogados?"

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header de sección:**

```
[Eyebrow — color slate, uppercase]
PARA TU DESPACHO

[H2 — DM Sans Bold, 28→42px, color ink, max-width: 700px]
¿Por Qué ulpiano.es para Abogados?

[Subtítulo — Inter Regular, 17px, color slate, max-width: 600px]
Automatiza la Gestión de Herencias, Visualiza la Distribución de Bienes y Gana Eficiencia
```

**Grid de 3 bloques funcionales:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(3, 1fr)` (≥1024px)
**Gap:** `var(--space-8)`
**Cada bloque:** Componente `.card` reutilizable (border, shadow, padding var(--space-6) → var(--space-8) desktop)

---

#### Bloque 1: Gestión Digital de Expedientes y Esquemas Sucesorios

```
[Icono — círculo green-bg, 48x48, con SVG de clipboard/tree]

[H3 — Inter SemiBold, 20→24px, color ink]
Gestión Digital de Expedientes y Esquemas Sucesorios

[Subtítulo — body-sm, color slate]
El expediente sucesorio completo, digitalizado y estructurado.

[Feature 1 — con check icon verde]
✓ Paso a Paso Digital
Define parámetros legales (legítimas, régimen foral) y añade datos de herederos y bienes.

[Feature 2 — con check icon verde]
✓ Diagramas Interactivos
Muestra el árbol familiar y la estructura patrimonial, facilitando la explicación al cliente
y sorprendiendo con una experiencia clara y atractiva.
```

**Formato de cada feature dentro del bloque:**
- Check icon (16x16, stroke ulpiano-green, 2.5px)
- Título de feature en **Inter Medium** (15px, color ink)
- Descripción en Inter Regular (15px, color slate, line-height 1.7)
- Gap entre features: `var(--space-4)`

---

#### Bloque 2: Atribución de Bienes y Control Fiscal

```
[Icono — círculo green-bg, 48x48, con SVG de calculator/chart]

[H3 — Inter SemiBold, 20→24px, color ink]
Atribución de Bienes y Control Fiscal

[Subtítulo — body-sm, color slate]
Distribución patrimonial y fiscalidad sucesoria, automatizadas.

[Feature 1 — con check icon verde]
✓ Reportes de Atribución
Presenta un desglose detallado sobre la distribución de bienes y la obligación tributaria
de cada beneficiario. Muestra la estructura del patrimonio y los herederos en un esquema
claro y atractivo.

[Feature 2 — con check icon verde]
✓ Simulaciones de Impuestos
Calcula en segundos cuánto pagará cada heredero, considerando reducciones y bonificaciones
autonómicas. Ajusta distribuciones en tiempo real para mostrar posibles variaciones
en la carga fiscal.
```

---

#### Bloque 3: Creación de Documentos y Firma

```
[Icono — círculo green-bg, 48x48, con SVG de document/pen]

[H3 — Inter SemiBold, 20→24px, color ink]
Creación de Documentos y Firma

[Subtítulo — body-sm, color slate]
De datos estructurados a documentos prácticamente definitivos.

[Feature 1 — con check icon verde]
✓ Automatización de Documentos
Genera testamentos, pactos sucesorios y escrituras adaptadas a la normativa vigente,
reduciendo tareas manuales.

[Feature 2 — con check icon verde]
✓ Firma y Registro
Acelera la formalización con documentos prácticamente definitivos,
evitando correcciones de última hora.
```

---

### SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)

> **Nota:** Esta subsección reemplaza los claims originales de la home ("la legítima en tres minutos, el expediente auditado, el cuaderno generado") por los nuevos claims específicos para despachos que Miquel ha definido.

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Grid horizontal, `repeat(auto-fit, minmax(240px, 1fr))`, gap var(--space-6)
**Cada claim:** Texto centrado, Inter Medium 15px, color ink

```
Las atribuciones sucesorias en tres minutos
La herencia legal meditada
La demanda por legítima preparada
La demanda por cuarta viudal preparada
```

**Formato visual de cada claim:**
- Fondo: `var(--white)` con `border: 1px solid var(--mist)`, border-radius 8px
- Padding: `var(--space-4) var(--space-6)`
- Icono pequeño a la izquierda (check circle en green, 20x20) + texto
- O bien: sin icono, solo texto centrado con font-weight 600 y un acento de `border-left: 3px solid var(--ulpiano-green)`

**Propósito:** Estos claims actúan como "anchors de velocidad" — el abogado escanea y reconoce tareas de su día a día resueltas rápido. Son el equivalente de los "social proof numbers" pero en formato de resultado concreto.

---

### SECCIÓN 3: BENEFICIOS CLAVE

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header:**

```
[Eyebrow — color slate]
BENEFICIOS

[H2 — DM Sans Bold, 28→42px, color ink]
Lo que cambia en tu despacho con Ulpiano
```

**Grid 2x2:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (≥768px)
**Gap:** `var(--space-6)`

Cada beneficio es un `.card` con:
- Icono (48x48, circle green-bg, SVG verde)
- H3 (20px, Inter SemiBold, ink)
- P (15px, Inter Regular, slate, line-height 1.7)

---

#### Beneficio 1: Transparencia para el Cliente

```
[Icono: eye/chart]
[H3] Transparencia para el Cliente
[P] Sorprende con diagramas claros y simulaciones en tiempo real, generando confianza
y diferenciándote de la competencia.
```

#### Beneficio 2: Mayor Eficiencia Interna

```
[Icono: clock/speed]
[H3] Mayor Eficiencia Interna
[P] Automatiza procesos y libera horas de trabajo manual.
```

#### Beneficio 3: Reducción de Errores y Riesgos Legales

```
[Icono: shield/check]
[H3] Reducción de Errores y Riesgos Legales
[P] ulpiano.es garantiza la coherencia con la normativa sucesoria
y actualizaciones forales.
```

#### Beneficio 4: Servicio Integral

```
[Icono: layers/stack]
[H3] Servicio Integral
[P] Combina el asesoramiento legal con una plataforma robusta que cubre
desde la planificación patrimonial hasta la tramitación fiscal.
```

---

### SECCIÓN 4: TESTIMONIOS (Opcional / Placeholders)

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-16)` top/bottom

**Layout:** 2 testimonios lado a lado (desktop), apilados (mobile)

```
[Quote 1]
"Desde que usamos Ulpiano, la preparación de un expediente sucesorio
nos lleva la mitad de tiempo. Y el cliente entiende lo que paga."
— Marta R., Abogada | Despacho en Girona

[Quote 2]
"La visualización del árbol familiar y las simulaciones fiscales
cambiaron la forma en que presentamos las herencias a nuestros clientes."
— Jordi P., Abogado Civilista | Barcelona
```

**Notas:**
- Si no hay testimonios reales, marcar como `[Pendiente: testimonios reales]` en el código con un diseño placeholder sutil.
- Cada testimonio: border-left 3px solid ulpiano-green, padding-left var(--space-6), font-style italic, font-size 17px, color ink. Autor en fog, 14px.
- Incluir capturas de pantalla o ejemplos de diagramas sucesorios como placeholders visuales junto a los testimonios si se dispone de ellos.

---

### SECCIÓN 5: CTA FINAL

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `var(--space-24)` top/bottom
**Layout:** Centrado, una columna
**Orb decorativo:** sí, sutil, como en la home

```
[H2 — DM Sans Bold, 28→42px, color white, max-width: 640px, centrado]
Mejora la Experiencia de Tus Clientes y Digitaliza la Gestión Sucesoria

[Subtítulo — 17→18px, color rgba(255,255,255,0.7), max-width: 520px, centrado]
Descubre cómo ulpiano.es puede agilizar tus casos de herencia
y ofrecer una presentación visual del patrimonio más impactante.

[CTAs — flex, gap 16px, centrado, margin-top var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Empieza Ahora]    ← btn-ghost (blanco, con flecha →)

[Alt text — 14px, color rgba(255,255,255,0.6), margin-top var(--space-4)]
ulpiano.es – Innovación en Derecho Sucesorio
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado en 1 columna. Hero padding reducido. Cards full-width. Claims strip en 1 col. |
| Tablet (768px–1023px) | Grid de bloques funcionales en 2 columnas (bloque 3 full-width debajo). Beneficios 2x2. |
| Desktop (≥1024px) | Bloques funcionales 3 columnas. Beneficios 2x2. Testimonios lado a lado. |

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
| `FeatureBlock` | Card con icono, H3, subtítulo, y lista de features con check icons |
| `BenefitCard` | Card con icono, H3, párrafo descriptivo |
| `ClaimStrip` | Fila horizontal de claims rápidos con border-left accent |
| `TestimonialQuote` | Cita con border-left verde, texto italic, autor |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Para Despachos de Abogados | Gestión Digital de Herencias — Ulpiano",
  description:
    "Digitaliza la gestión de herencias en tu despacho. Expedientes sucesorios estructurados, diagramas interactivos, simulaciones fiscales y documentos generados automáticamente. ulpiano.es",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/despachos",
  },
};
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Ajustes recomendados al texto proporcionado

El texto proporcionado por Miquel es la base. Recomendaciones de ajuste para alinear con `product-marketing-context.md`:

1. **"Digitaliza la Gestión de Herencias"** → OK. Directo, sin superlativo.

2. **"Sorprende a tus Clientes con Visualizaciones Claras"** → Revisar. "Sorprende" roza el tono de marketing de consumo. Alternativa más Ulpiano: **"Ofrece a tus clientes la claridad que esperan"** o mantener "Sorprende" si se busca diferenciación emocional deliberada.

3. **"Gana Eficiencia"** → OK. Resultado concreto.

4. **Simulaciones de Impuestos → "Calcula en segundos"** → Precisar: "Calcula en segundos" es un claim verificable. Asegurar que el motor ISD realmente opera en ese orden de tiempo.

5. **"ulpiano.es garantiza la coherencia"** → Cuidado con "garantiza". Alternativa: **"refuerza la coherencia"** o **"mantiene la coherencia"**. "Garantiza" implica responsabilidad legal que puede ser problemática.

### Claims nuevos para la sección strip

Los claims que reemplazan a los de la home para despachos:

| Claim original (home) | Claim nuevo (despachos) |
|---|---|
| "La legítima en 3 minutos" | "Las atribuciones sucesorias en tres minutos" |
| "El expediente auditado" | "La herencia legal meditada" |
| "El cuaderno generado" | "La demanda por legítima preparada" |
| — | "La demanda por cuarta viudal preparada" |

**Nota:** Estos claims son más específicos del flujo de trabajo del abogado civilista catalán. "Cuarta viudal" y "legítima" son conceptos que el ICP reconoce inmediatamente como tareas complejas de su día a día. Buen enfoque.

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Screenshots de diagramas sucesorios | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots de reportes de atribución | PNG 2x | Pendiente (placeholder) | Alta |
| Testimonios reales de abogados | Texto | Pendiente | Media |
| Iconos SVG para bloques funcionales | SVG inline | Reutilizar del design system | Resuelta |
| Logo de despachos colaboradores | PNG/SVG | Pendiente | Baja |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero centrado sin mockup, con claim que el abogado reconoce
- [ ] 3 bloques funcionales con features específicas y check icons
- [ ] Claims strip con los 4 resultados rápidos del abogado
- [ ] 4 beneficios en grid 2x2 orientados a resultado profesional
- [ ] Testimonios (al menos placeholders con diseño final)
- [ ] CTA final con doble botón
- [ ] Responsive mobile / tablet / desktop
- [ ] Scroll reveal animations en cada sección
- [ ] Metadata SEO correcta
- [ ] Copy revisado contra `product-marketing-context.md`
- [ ] Sin lenguaje de startup, sin "garantiza", sin superlativos vacíos
- [ ] Tokens de diseño coherentes con globals.css
- [ ] Links de navegación actualizados (Header.tsx ya apunta aquí)

---

## 9. RELACIÓN CON OTRAS PÁGINAS

- **Home (ParaQuien.tsx):** El tab "Despachos" mantiene sus claims actuales. NO se modifica.
- **Header.tsx:** Ya tiene link a `/pensado-para/despachos`. No requiere cambios.
- **Footer.tsx:** Ya tiene link en sección "Para quién". No requiere cambios.
- **Cross-links:** Desde esta página, enlazar a:
  - `/soluciones/planificacion-sucesoria` (para profundizar en el módulo patrimonial)
  - `/soluciones/fiscalidad-sucesoria` (para profundizar en el motor ISD)
  - `/soluciones/documentacion-sucesoria` (para profundizar en generación documental)
  - `/demo` (CTA principal)

---

**Cuando se vaya a implementar, crear:**
1. `src/app/(marketing)/pensado-para/despachos/page.tsx` — Server component con metadata
2. `src/app/(marketing)/pensado-para/despachos/DespachosClient.tsx` — Client component con toda la UI
3. Añadir estilos específicos en `globals.css` si los componentes nuevos lo requieren (preferir reutilizar clases existentes)
