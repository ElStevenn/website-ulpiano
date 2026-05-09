# PROMPT DE DISEÑO — Landing `/pensado-para/family-office`

> **Tipo de página:** Buyer Persona Landing (Family Office)
> **URL:** `/pensado-para/family-office`
> **Prioridad:** Tier 3 — Post-MVP
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Por qué esta página tiene estructura propia?

Las páginas de `/soluciones/` responden a "¿qué produce Ulpiano?" — orientadas a output técnico, con mockups de producto y especificaciones funcionales.

Las páginas de `/pensado-para/` responden a **"¿esto es para mí?"** — orientadas a identificación profesional. El asesor de family office que aterriza aquí necesita ver Ulpiano como infraestructura de planificación proactiva, no como herramienta de gestión reactiva de expedientes.

**Esta es la página más consultiva de todo el silo `/pensado-para/`.** El family office no tramita herencias: planifica sucesiones antes de que ocurran. Modela escenarios, compara impactos fiscales, anticipa distribuciones. El tono es más estratégico, las cifras más altas, y las consecuencias de cada decisión afectan a varias generaciones.

**Consecuencia:** comparte los tokens de diseño de Ulpiano (colores, tipografía, componentes base) pero la estructura de secciones es diferente a las páginas de soluciones, y el nivel de sofisticación del copy es superior al de despachos o asesorías.

### Diferencias clave con `/soluciones/*` y otras páginas de persona

| Aspecto | Páginas de Soluciones | Despachos / Asesorías | Esta página (Family Office) |
|---|---|---|---|
| Pregunta que responde | "¿Qué produce esto?" | "¿Esto es para mí?" | "¿Puedo planificar con esto?" |
| Hero | Output técnico + mockup | Claim al dolor operativo | Claim a la planificación proactiva |
| Cuerpo | Outputs → Antes/Después → Métricas | Flujos reconocibles → Beneficios | Escenarios comparados → Patrimonio complejo → Reporting |
| Prueba social | Métricas de eficiencia | Testimonios de pares | Testimonios de advisors de patrimonio |
| CTA | "Solicita tu demo" | "Reserva tu Demo" | "Reserva tu Demo" |
| Tono | Técnico-preciso | Consultivo-empático | Consultivo-estratégico, alto patrimonio |
| Stakes | Un expediente concreto | Volumen de expedientes | Continuidad patrimonial multigeneracional |

---

## 1. ESTRUCTURA DE SECCIONES

```
/pensado-para/family-office

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO (fondo night)                       │
│ Eyebrow + H1 + Subtítulo + 2 CTAs                  │
│ Sin mockup. Fondo limpio con orb decorativo.        │
│ El copy ES el producto aquí.                        │
│ Tono: planificación proactiva, no gestión reactiva. │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: PROPUESTA DE VALOR (fondo white)         │
│ "¿Por Qué Ulpiano para Family Offices?"             │
│ Subtítulo + 3 bloques funcionales en grid           │
│ Cada bloque = capacidad de planificación que el     │
│ advisor reconoce como necesidad real                 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)       │
│ 4 resultados concretos que el advisor identifica    │
│ como outputs de su trabajo diario                   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: BENEFICIOS CLAVE (fondo white)           │
│ 4 beneficios orientados a resultado estratégico     │
│ Grid 2x2 con iconos + texto                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: TESTIMONIOS (fondo surface, opcional)    │
│ Citas breves de advisors de family office           │
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
[Eyebrow — DM Sans Medium, 13→14px, letter-spacing 2px, uppercase, color ulpiano-green]
PENSADO PARA FAMILY OFFICES

[H1 — DM Sans Bold, 48→64px, color white, max-width: 720px, centrado]
El impacto fiscal de cada escenario sucesorio, comparado. Antes de que sea urgente.

[Subtítulo — Inter Regular, 17→20px, color rgba(255,255,255,0.75), max-width: 620px, centrado]
Planificación sucesoria pre-mortem. Patrimonio complejo modelado —inmuebles, financieros, empresa familiar, activos digitales—, con el impacto fiscal de cada opción calculado antes de tomar la decisión.

[CTAs — flex, gap 16px, centrado, margin-top: var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Más Información]  ← btn-ghost (blanco, con flecha →)
```

**Notas de diseño:**
- El hero centrado (sin mockup lateral) funciona aquí porque la página de persona no vende el producto visualmente — vende la relevancia estratégica para el advisor.
- El H1 tiene dos partes deliberadas: la primera mitad es el output ("impacto fiscal comparado"), la segunda mitad es el diferenciador temporal ("antes de que sea urgente"). El family office planifica; no reacciona.
- "Pre-mortem" aparece en el subtítulo, no en el H1, porque es un concepto técnico que funciona mejor como contexto que como claim principal.
- **Responsive:** En mobile, eyebrow + H1 + subtítulo + CTAs apilados. Padding reduce a `var(--space-12)` bottom. H1 baja a 36px. Subtítulo a 16px.

---

### SECCIÓN 2: PROPUESTA DE VALOR — "¿Por Qué Ulpiano para Family Offices?"

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header de sección:**

```
[Eyebrow — DM Sans Medium, 13→14px, letter-spacing 2px, uppercase, color slate]
PARA TU FAMILY OFFICE

[H2 — DM Sans Bold, 28→42px, color ink, max-width: 700px]
¿Por Qué Ulpiano para Family Offices?

[Subtítulo — Inter Regular, 17px, color slate, max-width: 620px]
Modelado patrimonial completo, escenarios sucesorios comparados y reporting para el consejo familiar. Todo desde una plataforma diseñada para patrimonio complejo.
```

**Grid de 3 bloques funcionales:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(3, 1fr)` (≥1024px)
**Gap:** `var(--space-8)`
**Cada bloque:** Componente `.card` reutilizable (border, shadow, padding var(--space-6) → var(--space-8) desktop)

---

#### Bloque 1: Planificación Sucesoria Pre-Mortem

```
[Icono — círculo green-bg, 48x48, con SVG de timeline/calendar-forward]

[H3 — Inter SemiBold, 20→24px, color ink]
Planificación Sucesoria Pre-Mortem

[Subtítulo — body-sm, color slate]
El patrimonio completo modelado hoy para decidir mejor mañana.

[Feature 1 — con check icon verde]
✓ Modelado Patrimonial Completo
Todo el patrimonio estructurado en una vista: inmuebles con cargas y titularidades,
productos financieros, participaciones societarias, activos digitales — valorado y
con el caudal relicto neto calculado.

[Feature 2 — con check icon verde]
✓ Escenarios Comparados
Herencia directa vs. donación en vida vs. usufructo al cónyuge — el impacto fiscal
de cada opción, lado a lado, antes de tomar ninguna decisión.
```

**Formato de cada feature dentro del bloque:**
- Check icon (16x16, stroke ulpiano-green, 2.5px)
- Título de feature en **Inter Medium** (15px, color ink)
- Descripción en Inter Regular (15px, color slate, line-height 1.7)
- Gap entre features: `var(--space-4)`

---

#### Bloque 2: Empresa Familiar y Patrimonio Complejo

```
[Icono — círculo green-bg, 48x48, con SVG de building/briefcase]

[H3 — Inter SemiBold, 20→24px, color ink]
Empresa Familiar y Patrimonio Complejo

[Subtítulo — body-sm, color slate]
Participaciones societarias, activos digitales y patrimonio diversificado, tratados como categorías fiscales de primer nivel.

[Feature 1 — con check icon verde]
✓ Participaciones Societarias
Las acciones y participaciones de la empresa familiar distribuidas entre herederos,
con el impacto fiscal calculado y la reducción del 95% por empresa familiar aplicada
donde corresponda según normativa autonómica.

[Feature 2 — con check icon verde]
✓ Activos Digitales Integrados
Criptomonedas, wallets, cuentas online — valorados a fecha de devengo, clasificados
fiscalmente e integrados en el inventario patrimonial como categoría estructurada,
no como nota al margen.
```

---

#### Bloque 3: Visibilidad y Reporting

```
[Icono — círculo green-bg, 48x48, con SVG de chart-bar/dashboard]

[H3 — Inter SemiBold, 20→24px, color ink]
Visibilidad y Reporting

[Subtítulo — body-sm, color slate]
El patrimonio visible. Los escenarios documentados. El consejo familiar informado.

[Feature 1 — con check icon verde]
✓ Dashboard Patrimonial
La vista consolidada del patrimonio: qué bienes componen el caudal, qué cargas
restan, cuál es el valor neto. Actualizado con cada modificación del inventario.

[Feature 2 — con check icon verde]
✓ Informes para el Consejo Familiar
Reportes exportables con el inventario patrimonial, los escenarios sucesorios
comparados y el impacto fiscal de cada opción. Claros, estructurados, listos
para la reunión del consejo familiar.
```

---

### SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)

> **Nota:** Estos claims son específicos para el family office. Reflejan outputs de planificación proactiva, no de gestión reactiva. Cada uno es una tarea que el advisor reconoce como resultado tangible de su trabajo.

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Grid horizontal, `repeat(auto-fit, minmax(260px, 1fr))`, gap var(--space-6)
**Cada claim:** Texto centrado, Inter Medium 15px, color ink

```
Tres escenarios sucesorios comparados en una pantalla
El impacto fiscal de la donación en vida, calculado antes de decidir
La empresa familiar, distribuida con reducción del 95% aplicada
El patrimonio completo inventariado y valorado
```

**Formato visual de cada claim:**
- Fondo: `var(--white)` con `border: 1px solid var(--mist)`, border-radius 8px
- Padding: `var(--space-4) var(--space-6)`
- Icono pequeño a la izquierda (check circle en green, 20x20) + texto
- O bien: sin icono, solo texto centrado con font-weight 600 y un acento de `border-left: 3px solid var(--ulpiano-green)`

**Propósito:** Estos claims son "anchors de resultado" — el advisor escanea y reconoce outputs de planificación patrimonial que hoy resuelve con hojas de cálculo y reuniones manuales. Son más largos que los claims de despachos porque el family office trabaja con conceptos compuestos (escenario + comparación + decisión).

**Responsive:**
- Desktop (≥1024px): 4 claims en una fila
- Tablet (768px–1023px): 2x2
- Mobile (<768px): Apilados en 1 columna

---

### SECCIÓN 3: BENEFICIOS CLAVE

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header:**

```
[Eyebrow — DM Sans Medium, 13→14px, letter-spacing 2px, uppercase, color slate]
BENEFICIOS

[H2 — DM Sans Bold, 28→42px, color ink]
Lo que cambia en la gestión patrimonial con Ulpiano
```

**Grid 2x2:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (≥768px)
**Gap:** `var(--space-6)`

Cada beneficio es un `.card` con:
- Icono (48x48, circle green-bg, SVG verde)
- H3 (20px, Inter SemiBold, ink)
- P (15px, Inter Regular, slate, line-height 1.7)

---

#### Beneficio 1: Planificación Proactiva

```
[Icono: calendar-check/forward-arrow]
[H3] Planificación Proactiva
[P] No esperas al fallecimiento para estructurar la sucesión. Modelas
escenarios hoy, comparas impactos fiscales y preparas al consejo familiar
para decidir con tiempo y con datos.
```

#### Beneficio 2: Visibilidad Patrimonial Completa

```
[Icono: layers/grid-view]
[H3] Visibilidad Patrimonial Completa
[P] Inmuebles con cargas, productos financieros, participaciones de la empresa
familiar, activos digitales — todo en un inventario estructurado y valorado.
Sin dispersión entre hojas de cálculo, correos y documentos sueltos.
```

#### Beneficio 3: Decisiones Fiscales Informadas

```
[Icono: scale/balance]
[H3] Decisiones Fiscales Informadas
[P] Cada escenario sucesorio con su impacto fiscal calculado: herencia directa,
donación en vida, usufructo al cónyuge. La familia decide con cifras concretas,
no con estimaciones aproximadas.
```

#### Beneficio 4: Continuidad de la Empresa Familiar

```
[Icono: building/handshake]
[H3] Continuidad de la Empresa Familiar
[P] Cómo se distribuyen las participaciones, qué reducciones fiscales aplican,
qué impacto tiene cada opción sobre la continuidad del negocio. La empresa
familiar tratada como lo que es: el activo que estructura todo lo demás.
```

---

### SECCIÓN 4: TESTIMONIOS (Opcional / Placeholders)

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-16)` top/bottom

**Layout:** 2 testimonios lado a lado (desktop), apilados (mobile)

```
[Quote 1]
"Antes de Ulpiano, preparar un informe de escenarios sucesorios
para el consejo familiar nos llevaba dos semanas. Ahora lo tenemos
en una sesión de trabajo, con los números fiscales incluidos."
— Ana M., Directora Patrimonial | Family Office en Madrid
[Pendiente: testimonio real]

[Quote 2]
"La comparación entre donación en vida y herencia directa,
con el impacto fiscal de cada opción, cambió la forma en que
presentamos las opciones a las familias. Es otro nivel de conversación."
— Carlos V., Asesor Patrimonial | Multi-Family Office en Barcelona
[Pendiente: testimonio real]
```

**Notas:**
- Si no hay testimonios reales, marcar como `[Pendiente: testimonios reales]` en el código con un diseño placeholder sutil.
- Cada testimonio: border-left 3px solid ulpiano-green, padding-left var(--space-6), font-style italic, font-size 17px, color ink. Autor en fog, 14px.
- El tono de los placeholders es deliberadamente más elevado que los de despachos: hablan de "consejo familiar", "escenarios sucesorios", "nivel de conversación" — vocabulario que el advisor de family office reconoce como propio.

---

### SECCIÓN 5: CTA FINAL

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `var(--space-24)` top/bottom
**Layout:** Centrado, una columna
**Orb decorativo:** sí, sutil, como en la home

```
[H2 — DM Sans Bold, 28→42px, color white, max-width: 680px, centrado]
La próxima reunión del consejo familiar, con los escenarios sucesorios sobre la mesa.

[Subtítulo — Inter Regular, 17→18px, color rgba(255,255,255,0.7), max-width: 560px, centrado]
Patrimonio modelado, impacto fiscal comparado, informe listo.
Descubre cómo Ulpiano estructura la planificación sucesoria
de patrimonios complejos.

[CTAs — flex, gap 16px, centrado, margin-top var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Más Información]  ← btn-ghost (blanco, con flecha →)

[Alt text — 14px, color rgba(255,255,255,0.6), margin-top var(--space-4)]
Ulpiano — Planificación Sucesoria para Patrimonio Complejo
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado en 1 columna. Hero padding reducido. H1 48→36px. Subtítulo 20→16px. Cards full-width. Claims strip en 1 col. CTAs apilados verticalmente. |
| Tablet (768px–1023px) | Grid de bloques funcionales en 2 columnas (bloque 3 full-width debajo). Beneficios 2x2. Claims 2x2. Testimonios apilados. |
| Desktop (≥1024px) | Bloques funcionales 3 columnas. Beneficios 2x2. Claims 4 en fila. Testimonios lado a lado. |

**Notas responsive específicas de esta página:**
- Los claims del strip son más largos que los de despachos. En mobile, necesitan más espacio vertical. Asegurar line-height 1.6 y padding suficiente.
- El H1 del hero es largo (dos frases). En mobile a 36px, verificar que no supera 4 líneas visibles.

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
| `FeatureBlock` | Card con icono, H3, subtítulo, y lista de features con check icons. Reutilizable de `/pensado-para/despachos`. |
| `BenefitCard` | Card con icono, H3, párrafo descriptivo. Reutilizable de `/pensado-para/despachos`. |
| `ClaimStrip` | Fila horizontal de claims rápidos con border-left accent. Reutilizable, pero con `minmax(260px, 1fr)` en lugar de 240px (claims más largos). |
| `TestimonialQuote` | Cita con border-left verde, texto italic, autor. Reutilizable de `/pensado-para/despachos`. |

**Nota:** Todos los componentes nuevos deberían ser compartidos entre las páginas de `/pensado-para/*`. La diferencia es el contenido, no la estructura visual.

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Para Family Offices | Planificación Sucesoria Pre-Mortem — Ulpiano",
  description:
    "Planificación sucesoria pre-mortem para family offices. Escenarios fiscales comparados, patrimonio complejo inventariado, empresa familiar distribuida con impacto fiscal calculado. Ulpiano.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/family-office",
  },
};
```

**Open Graph (recomendado):**

```tsx
openGraph: {
  title: "Ulpiano para Family Offices — Planificación Sucesoria Pre-Mortem",
  description: "Patrimonio complejo modelado, escenarios sucesorios comparados, impacto fiscal calculado. Planificación antes de que sea urgente.",
  url: "https://ulpiano.es/pensado-para/family-office",
  siteName: "Ulpiano",
  locale: "es_ES",
  type: "website",
},
```

**Palabras clave objetivo (informativo, no se incluyen como meta tag):**
- planificación sucesoria family office
- planificación pre-mortem patrimonio
- escenarios sucesorios family office
- empresa familiar sucesión
- activos digitales herencia
- impacto fiscal donación vs herencia

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Principios de copy para esta página

1. **"Pre-mortem" es el concepto diferenciador.** El family office no gestiona herencias después del fallecimiento — planifica sucesiones antes. Todo el copy orbita alrededor de esta distinción temporal: "antes de que sea urgente", "hoy para decidir mañana", "antes de tomar la decisión".

2. **El patrimonio es "complejo", no "grande".** Evitar referencias a cantidades o a "alto patrimonio" — el advisor sabe que trabaja con patrimonio complejo. La sofisticación se demuestra enumerando las categorías de activos (inmuebles con cargas, participaciones societarias, activos digitales), no diciendo "grandes patrimonios".

3. **La familia es el marco, no el individuo.** A diferencia de despachos (donde el cliente es un heredero individual), aquí el marco es la familia como unidad patrimonial. "Consejo familiar", "la familia decide", "multigeneracional" — el vocabulario refleja esta diferencia.

4. **Escenarios, no expedientes.** El despacho trabaja con "expedientes sucesorios". El family office trabaja con "escenarios sucesorios". La diferencia es crítica: el expediente es reactivo (alguien ha fallecido), el escenario es proactivo (nadie ha fallecido aún, se modela qué pasaría si).

### Ajustes de tono respecto al copy proporcionado

| Aspecto | Criterio |
|---|---|
| "Antes de que sea urgente" | OK. Directo, sin superlativo. Refuerza el concepto pre-mortem sin dramatizar. |
| "Reducción del 95% aplicada" | OK. Dato normativo concreto (Art. 12 Llei 19/2010 en Catalunya). Verificar que el motor fiscal lo aplica correctamente. |
| "Patrimonio completo inventariado y valorado" | OK. Output reconocible. No es un claim de marketing, es lo que el advisor necesita producir. |
| "La familia decide con datos, no con intuición" | Revisar. "No con intuición" puede sonar condescendiente con el advisor. Alternativa: **"La familia decide con cifras concretas, no con estimaciones aproximadas."** |
| Cualquier uso de "garantiza" | Prohibido. Usar "refuerza", "mantiene" o "permite". |
| Cualquier uso de "ulpiano.es" en copy visible | Prohibido. Usar "Ulpiano". El dominio solo aparece en canonical y emails. |

### Claims del strip: justificación

| Claim | Por qué funciona |
|---|---|
| "Tres escenarios sucesorios comparados en una pantalla" | El advisor pasa horas modelando escenarios en Excel. Ver tres opciones lado a lado es un output que reconoce como valioso. |
| "El impacto fiscal de la donación en vida, calculado antes de decidir" | La donación en vida es la alternativa más consultada en planificación pre-mortem. El cálculo fiscal previo es exactamente lo que el consejo familiar pide. |
| "La empresa familiar, distribuida con reducción del 95% aplicada" | La empresa familiar es el activo más complejo y el que más preocupa. La reducción del 95% es un dato normativo concreto que el advisor maneja a diario. |
| "El patrimonio completo inventariado y valorado" | El inventario valorado es la base de todo. Sin él, no hay escenarios ni comparaciones posibles. |

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Captura del dashboard patrimonial | PNG 2x | Pendiente (placeholder) | Alta |
| Captura de comparación de escenarios sucesorios | PNG 2x | Pendiente (placeholder) | Alta |
| Captura de distribución de participaciones societarias | PNG 2x | Pendiente (placeholder) | Media |
| Captura de informe exportable para consejo familiar | PNG 2x | Pendiente (placeholder) | Media |
| Testimonios reales de advisors de family office | Texto | Pendiente | Media |
| Iconos SVG para bloques funcionales | SVG inline | Reutilizar del design system | Resuelta |
| Captura del inventario de activos digitales | PNG 2x | Pendiente (reutilizar de /soluciones/activos-digitales) | Baja |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero centrado sin mockup, con claim de planificación proactiva (no gestión reactiva)
- [ ] 3 bloques funcionales con features específicas de family office y check icons
- [ ] Claims strip con los 4 resultados de planificación patrimonial
- [ ] 4 beneficios en grid 2x2 orientados a resultado estratégico
- [ ] Testimonios (al menos placeholders con diseño final y tono de advisor)
- [ ] CTA final con doble botón y frase de cierre que menciona el consejo familiar
- [ ] Responsive mobile / tablet / desktop
- [ ] Claims strip legible en mobile (claims más largos que en despachos)
- [ ] Scroll reveal animations en cada sección
- [ ] Metadata SEO correcta (title, description, canonical, Open Graph)
- [ ] Copy revisado contra `product-marketing-context.md`
- [ ] Sin lenguaje de startup, sin emojis, sin superlativos vacíos
- [ ] Sin "garantiza" — solo "refuerza", "mantiene" o "permite"
- [ ] Sin "ulpiano.es" en copy visible — solo "Ulpiano"
- [ ] Tono consultivo-estratégico, no operativo
- [ ] Tokens de diseño coherentes con globals.css
- [ ] Concepto "pre-mortem" presente pero no forzado (subtítulo del hero, no H1)

---

## 9. RELACIÓN CON OTRAS PÁGINAS

- **Home (ParaQuien.tsx):** El tab "Family Offices" (si existe) mantiene su claim: "La planificación pre-mortem. El impacto fiscal de cada escenario, comparado." Si no existe el tab, añadirlo cuando esta página se implemente.
- **Header.tsx:** Añadir link a `/pensado-para/family-office` en el desplegable "Para quién" cuando se implemente.
- **Footer.tsx:** Añadir link en sección "Para quién" cuando se implemente.
- **Cross-links:** Desde esta página, enlazar a:
  - `/soluciones/planificacion-sucesoria` (para profundizar en inventario y árbol familiar)
  - `/soluciones/fiscalidad-sucesoria` (para profundizar en el motor ISD y comparación de escenarios)
  - `/soluciones/activos-digitales` (para profundizar en patrimonio digital — relevante para family office moderno)
  - `/demo` (CTA principal)
- **Diferencia con `/pensado-para/despachos`:** El despacho gestiona expedientes ya abiertos (alguien ha fallecido). El family office modela escenarios futuros (nadie ha fallecido aún). El cross-link entre ambas páginas no es directo — son perfiles distintos con necesidades complementarias.
- **Diferencia con `/pensado-para/asesorias`:** La asesoría se centra en el ISD y la normativa fiscal. El family office necesita todo lo de la asesoría más la visión patrimonial consolidada, la empresa familiar y la planificación multigeneracional.

---

**Cuando se vaya a implementar, crear:**
1. `src/app/(marketing)/pensado-para/family-office/page.tsx` — Server component con metadata
2. `src/app/(marketing)/pensado-para/family-office/FamilyOfficeClient.tsx` — Client component con toda la UI
3. Reutilizar componentes de `/pensado-para/despachos` (`FeatureBlock`, `BenefitCard`, `ClaimStrip`, `TestimonialQuote`) — solo cambia el contenido, no la estructura
4. Añadir estilos específicos en `globals.css` solo si los claims más largos requieren ajuste del `minmax` en el grid
