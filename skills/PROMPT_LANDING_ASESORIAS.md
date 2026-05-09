# PROMPT DE DISEÑO — Landing `/pensado-para/asesorias`

> **Tipo de página:** Buyer Persona Landing (Asesorías Fiscales)
> **URL:** `/pensado-para/asesorias`
> **Prioridad:** Tier 2 — Diferenciación
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Por qué esta página tiene estructura propia?

Las páginas de `/soluciones/` responden a "¿qué produce Ulpiano?" — orientadas a output técnico, con mockups de producto y especificaciones funcionales.

Las páginas de `/pensado-para/` responden a **"¿esto es para mí?"** — orientadas a identificación profesional. El asesor fiscal que aterriza aquí necesita verse reflejado en los primeros 5 segundos: reconocer su flujo de trabajo fiscal, su exposición ante la ATC, y el resultado que obtiene en su lenguaje.

**Consecuencia:** comparte los tokens de diseño de Ulpiano (colores, tipografía, componentes base) pero la estructura de secciones es diferente a las páginas de soluciones.

### Diferencias clave con `/soluciones/*`

| Aspecto | Páginas de Soluciones | Esta página (Persona) |
|---|---|---|
| Pregunta que responde | "¿Qué produce esto?" | "¿Esto es para mí?" |
| Hero | Output técnico + mockup de producto | Claim directo al dolor fiscal del asesor |
| Cuerpo | Outputs → Antes/Después → Métricas | Flujos fiscales reconocibles → Beneficios profesionales |
| Prueba social | Métricas de eficiencia | Testimonios de pares (otros asesores fiscales) |
| CTA | "Solicita tu demo" | "Reserva tu Demo" / "Más Información" |
| Tono | Técnico-preciso | Consultivo-empático con el profesional fiscal |

### Diferencias clave con `/pensado-para/despachos`

| Aspecto | Despachos (abogados) | Esta página (asesores fiscales) |
|---|---|---|
| Dolor principal | Tiempo de gestión del expediente sucesorio | Riesgo normativo + plazos + auditabilidad ante ATC |
| Output estrella | Cuaderno particional generado | ISD recalculado automáticamente ante cambio normativo |
| Sensibilidad del ICP | Eficiencia + presentación visual al cliente | ROI por expediente + cero contingencias fiscales |
| Normativa referenciada | CCCat (legítimas, cuarta viudal) | Llei 19/2010, Art. 27 LGT, normativa ISD autonómica |
| Métrica de valor | Tiempo ahorrado por expediente | Horas de cálculo eliminadas + contingencias evitadas |

---

## 1. ESTRUCTURA DE SECCIONES

```
/pensado-para/asesorias

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO (fondo night)                       │
│ Eyebrow + H1 + Subtítulo + 2 CTAs                  │
│ Sin mockup. Fondo limpio con orb decorativo.        │
│ El copy ES el producto aquí.                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: PROPUESTA DE VALOR (fondo white)         │
│ "¿Por Qué Ulpiano para Asesores Fiscales?"         │
│ Subtítulo + 3 bloques funcionales en grid           │
│ Cada bloque = flujo fiscal reconocible              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2B: CLAIMS RÁPIDOS (fondo surface)          │
│ 4 claims específicos para asesores fiscales         │
│ Strip horizontal con resultados concretos           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: BENEFICIOS CLAVE (fondo white)           │
│ 4 beneficios orientados a resultado profesional     │
│ Grid 2x2 con iconos + texto                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: TESTIMONIOS (fondo surface, opcional)    │
│ Citas breves de asesores fiscales usuarios          │
│ Placeholders si no hay testimonios reales aún       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CTA FINAL (fondo night)                  │
│ Frase de cierre + 2 botones                         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ CROSS-LINKS (fondo white)                           │
│ Links a soluciones relacionadas                     │
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
[Eyebrow — DM Sans Medium, 13px, letter-spacing 2px, uppercase, color ulpiano-green]
PENSADO PARA ASESORES FISCALES

[H1 — DM Sans Bold, 48→64px, color white, max-width: 720px, centrado]
El ISD Recalculado Automáticamente ante Cada Cambio Normativo.
La Alerta antes del Plazo. La Trazabilidad ante la ATC.

[Subtítulo — Inter Regular, 17→20px, color rgba(255,255,255,0.75), max-width: 600px, centrado]
El ISD cambia. Tus expedientes activos, no. Ulpiano recalcula automáticamente
cada expediente afectado por un cambio normativo y te avisa antes de que
el problema llegue al cliente.

[CTAs — flex, gap 16px, centrado, margin-top: var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Más Información]  ← btn-ghost (blanco, con flecha →)
```

**Notas de diseño:**
- El hero centrado (sin mockup lateral) funciona aquí porque la página de persona no vende el producto visualmente — vende la relevancia para el profesional fiscal.
- El H1 es largo y tripartito. Esto es deliberado: el asesor fiscal necesita leer tres resultados que reconoce inmediatamente de su práctica diaria (recálculo ISD + alertas de plazo + trazabilidad ATC) sin ambigüedad.
- El subtítulo reproduce el claim oficial de `product-marketing-context.md`, reforzando la consistencia de marca.
- **Responsive:** En mobile, eyebrow + H1 + subtítulo + CTAs apilados. Padding reduce a `var(--space-12)` bottom.

---

### SECCIÓN 2: PROPUESTA DE VALOR — "¿Por Qué Ulpiano para Asesores Fiscales?"

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header de sección:**

```
[Eyebrow — DM Sans Medium, 13px, letter-spacing 2px, uppercase, color slate]
PARA TU ASESORÍA

[H2 — DM Sans Bold, 28→42px, color ink, max-width: 700px]
¿Por Qué Ulpiano para Asesores Fiscales?

[Subtítulo — Inter Regular, 17px, color slate, max-width: 600px]
Motor fiscal ISD automatizado, alertas de plazo y trazabilidad auditable ante la ATC.
Sin cálculos manuales. Sin contingencias evitables.
```

**Grid de 3 bloques funcionales:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(3, 1fr)` (≥1024px)
**Gap:** `var(--space-8)`
**Cada bloque:** Componente `.card` reutilizable (border, shadow, padding var(--space-6) → var(--space-8) desktop)

---

#### Bloque 1: Motor Fiscal ISD Automatizado

```
[Icono — círculo green-bg, 48x48, con SVG de calculator/refresh]

[H3 — Inter SemiBold, 20→24px, color ink]
Motor Fiscal ISD Automatizado

[Subtítulo — body-sm, color slate]
El embudo fiscal completo por heredero, ejecutado con la normativa vigente.

[Feature 1 — con check icon verde]
✓ Cálculo Completo por Heredero
Base imponible → reducciones autonómicas → bonificaciones → coeficiente
multiplicador → cuota a ingresar. Llei 19/2010 integrada. Cada paso
referenciado con la norma aplicable.

[Feature 2 — con check icon verde]
✓ Recálculo ante Cambios Normativos
Cuando la ley cambia, los expedientes activos se recalculan automáticamente.
Sin repasar caso por caso. Sin riesgo de presentar con normativa desfasada.
```

**Formato de cada feature dentro del bloque:**
- Check icon (16x16, stroke ulpiano-green, 2.5px)
- Título de feature en **Inter Medium** (15px, color ink)
- Descripción en Inter Regular (15px, color slate, line-height 1.7)
- Gap entre features: `var(--space-4)`

---

#### Bloque 2: Alertas y Control de Plazos

```
[Icono — círculo green-bg, 48x48, con SVG de bell/calendar]

[H3 — Inter SemiBold, 20→24px, color ink]
Alertas y Control de Plazos

[Subtítulo — body-sm, color slate]
El plazo controlado antes de que genere contingencia.

[Feature 1 — con check icon verde]
✓ Alertas de Vencimiento
Período voluntario de 6 meses monitorizado. Recargo según Art. 27 LGT
calculado antes de que sea efectivo. La alerta llega al asesor, no al cliente.

[Feature 2 — con check icon verde]
✓ Modelo 650 Autocompleto
Autoliquidación individual por heredero. Los campos se rellenan desde
los datos del expediente — sin transcripción manual, sin errores de volcado.
```

---

#### Bloque 3: Trazabilidad y Auditoría

```
[Icono — círculo green-bg, 48x48, con SVG de shield/document]

[H3 — Inter SemiBold, 20→24px, color ink]
Trazabilidad y Auditoría

[Subtítulo — body-sm, color slate]
Cada paso del cálculo fiscal, documentado y auditable.

[Feature 1 — con check icon verde]
✓ Cada Paso Documentado
Cada línea del cálculo fiscal lleva la referencia normativa citada.
Ante un requerimiento de la ATC, el expediente se defiende solo.
Audit-ready desde el primer día.

[Feature 2 — con check icon verde]
✓ Modelo 660 Estructurado
Declaración de sucesiones con inventario completo, generada desde los datos
estructurados del expediente. Sin redactar desde cero. Sin inconsistencias
entre el inventario y la declaración.
```

---

### SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)

> **Nota:** Esta subsección presenta claims específicos para asesores fiscales. Cada claim describe un resultado que el asesor reconoce como tarea compleja de su día a día, resuelta de forma directa.

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Grid horizontal, `repeat(auto-fit, minmax(240px, 1fr))`, gap var(--space-6)
**Cada claim:** Texto centrado, Inter Medium 15px, color ink

```
El ISD de cada heredero, calculado con la norma citada
El Modelo 650, autocompleto desde el expediente
La alerta de extemporaneidad, antes de que ocurra
El recálculo normativo, automático en expedientes activos
```

**Formato visual de cada claim:**
- Fondo: `var(--white)` con `border: 1px solid var(--mist)`, border-radius 8px
- Padding: `var(--space-4) var(--space-6)`
- Icono pequeño a la izquierda (check circle en green, 20x20) + texto
- O bien: sin icono, solo texto centrado con font-weight 600 y un acento de `border-left: 3px solid var(--ulpiano-green)`

**Propósito:** Estos claims actúan como "anchors de velocidad" — el asesor fiscal escanea y reconoce tareas de su día a día resueltas rápido. Son el equivalente de los "social proof numbers" pero en formato de resultado concreto. El asesor que ve "la alerta de extemporaneidad, antes de que ocurra" reconoce inmediatamente el dolor del Art. 27 LGT.

---

### SECCIÓN 3: BENEFICIOS CLAVE

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header:**

```
[Eyebrow — DM Sans Medium, 13px, letter-spacing 2px, uppercase, color slate]
BENEFICIOS

[H2 — DM Sans Bold, 28→42px, color ink]
Lo que cambia en tu asesoría con Ulpiano
```

**Grid 2x2:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (≥768px)
**Gap:** `var(--space-6)`

Cada beneficio es un `.card` con:
- Icono (48x48, circle green-bg, SVG verde)
- H3 (20px, Inter SemiBold, ink)
- P (15px, Inter Regular, slate, line-height 1.7)

---

#### Beneficio 1: Cero Contingencias por Plazo

```
[Icono: clock/shield]
[H3] Cero Contingencias por Plazo
[P] La alerta llega antes que el vencimiento. El recargo según Art. 27 LGT,
calculado antes de que sea real. El asesor actúa; el cliente ni se entera.
```

#### Beneficio 2: Trazabilidad ante la ATC

```
[Icono: document/check]
[H3] Trazabilidad ante la ATC
[P] Cada paso del cálculo fiscal documentado con referencia normativa.
Ante un requerimiento, el expediente responde con la norma citada
en cada línea. Auditable desde el primer día.
```

#### Beneficio 3: Recálculo Normativo Automático

```
[Icono: refresh/law]
[H3] Recálculo Normativo Automático
[P] Cuando la Llei 19/2010 se modifica, los expedientes activos
se actualizan solos. Sin repasarlos uno a uno. Sin presentar
con normativa desfasada.
```

#### Beneficio 4: ROI Medible por Expediente

```
[Icono: chart/euro]
[H3] ROI Medible por Expediente
[P] Menos horas de cálculo manual, menos riesgo de error, menos
contingencias fiscales. El ahorro de tiempo es cuantificable
expediente a expediente.
```

---

### SECCIÓN 4: TESTIMONIOS (Opcional / Placeholders)

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-16)` top/bottom

**Layout:** 2 testimonios lado a lado (desktop), apilados (mobile)

```
[Quote 1]
"Desde que Ulpiano recalcula automáticamente ante cambios normativos,
hemos eliminado el repaso manual de expedientes. El tiempo que ahorramos
por caso es medible."
— Laura S., Asesora Fiscal | Asesoría en Sabadell

[Quote 2]
"La trazabilidad del cálculo nos salvó en un requerimiento de la ATC.
Cada línea con la norma citada. No tuvimos que reconstruir nada."
— Pere M., Asesor Fiscal | Barcelona
```

**Notas:**
- Si no hay testimonios reales, marcar como `[Pendiente: testimonios reales]` en el código con un diseño placeholder sutil.
- Cada testimonio: border-left 3px solid ulpiano-green, padding-left var(--space-6), font-style italic, font-size 17px, color ink. Autor en fog, 14px.
- Los testimonios deben reflejar los dos dolores principales del asesor fiscal: (1) tiempo de cálculo / recálculo normativo y (2) auditabilidad ante la ATC.

---

### SECCIÓN 5: CTA FINAL

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `var(--space-24)` top/bottom
**Layout:** Centrado, una columna
**Orb decorativo:** sí, sutil, como en la home

```
[H2 — DM Sans Bold, 28→42px, color white, max-width: 640px, centrado]
El ISD de Tu Próximo Expediente, Calculado en Minutos.
Con la Norma Citada.

[Subtítulo — Inter Regular, 17→18px, color rgba(255,255,255,0.7), max-width: 520px, centrado]
Recálculo automático ante cambios normativos, alertas antes del vencimiento,
trazabilidad auditable. Descubre cómo Ulpiano trabaja para tu asesoría.

[CTAs — flex, gap 16px, centrado, margin-top var(--space-8)]
[Reserva tu Demo]  ← btn-primary (verde)
[Empieza Ahora]    ← btn-ghost (blanco, con flecha →)

[Alt text — 14px, color rgba(255,255,255,0.6), margin-top var(--space-4)]
Ulpiano — Motor Fiscal ISD para Asesores
```

---

### CROSS-LINKS

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-12)` top/bottom

**Layout:** Grid horizontal, `repeat(auto-fit, minmax(280px, 1fr))`, gap var(--space-6)

```
[Link 1]
Fiscalidad Sucesoria →
La cuota del ISD calculada. El Modelo 650 listo. La norma citada.
/soluciones/fiscalidad-sucesoria

[Link 2]
Planificación Sucesoria →
El patrimonio inventariado, el árbol dibujado, las legítimas respetadas.
/soluciones/planificacion-sucesoria

[Link 3]
Documentación Sucesoria →
El cuaderno particional, el testamento, la escritura. Generados.
/soluciones/documentacion-sucesoria
```

Cada card: `.card` con H3 (link title, Inter SemiBold, 18px, ink) + P (descripción, 15px, slate) + flecha → (ulpiano-green). Hover: shadow lift + border-color ulpiano-green.

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado en 1 columna. Hero padding reducido. Cards full-width. Claims strip en 1 col. CTAs apilados verticalmente. |
| Tablet (768px–1023px) | Grid de bloques funcionales en 2 columnas (bloque 3 full-width debajo). Beneficios 2x2. Claims strip en 2 col. |
| Desktop (≥1024px) | Bloques funcionales 3 columnas. Beneficios 2x2. Testimonios lado a lado. Claims strip en 4 col. |

---

## 4. COMPONENTES REUTILIZABLES

La página debe componer estos componentes existentes del design system:

| Componente | Uso en esta página |
|---|---|
| `.hero` / hero styles | Sección 1 (hero centrado, sin mockup) |
| `.eyebrow` | Headers de cada sección |
| `.btn-primary` / `.btn-ghost` | CTAs del hero y CTA final |
| `.card` | Bloques funcionales, beneficios y cross-links |
| `.reveal` / `.visible` | Scroll animations en cada sección |
| `.cta-final` | Sección 5 |
| `.container` | Wrapper de contenido (max-width 1200px) |

**Componentes nuevos necesarios:**

| Componente | Descripción |
|---|---|
| `FeatureBlock` | Card con icono, H3, subtítulo, y lista de features con check icons. Reutilizable con `/pensado-para/despachos`. |
| `BenefitCard` | Card con icono, H3, párrafo descriptivo. Mismo componente que despachos, diferente contenido. |
| `ClaimStrip` | Fila horizontal de claims rápidos con border-left accent. Acepta array de strings como prop. |
| `TestimonialQuote` | Cita con border-left verde, texto italic, autor. Reutilizable entre páginas de persona. |
| `CrossLinkCard` | Card con título-link, descripción y flecha. Para la sección de cross-links entre soluciones. |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Para Asesorías Fiscales | Gestión Digital de Herencias — Ulpiano",
  description:
    "Recálculo automático del ISD ante cambios normativos, alertas de plazo, trazabilidad auditable ante la ATC y Modelo 650 autocompleto. Ulpiano para asesores fiscales.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/asesorias",
  },
};
```

**Open Graph (recomendado):**

```tsx
openGraph: {
  title: "Ulpiano para Asesorías Fiscales — ISD Automatizado, Alertas y Trazabilidad ATC",
  description: "El ISD recalculado ante cada cambio normativo. La alerta antes del plazo. La trazabilidad ante la ATC. Ulpiano para asesores fiscales.",
  url: "https://ulpiano.es/pensado-para/asesorias",
  type: "website",
},
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Principios de copy para esta página

1. **Outputs, no features.** Cada titular describe un resultado concreto: "El ISD recalculado", no "Motor de recálculo automático". El asesor fiscal reconoce el resultado, no la arquitectura.

2. **"Ulpiano", nunca "ulpiano.es".** En todo el copy visible, la marca se escribe "Ulpiano". Solo la URL canónica y los emails mantienen el dominio.

3. **Sin "garantiza".** "Garantiza" implica responsabilidad legal. Usar "refuerza", "mantiene" o reformular con resultado directo ("cada paso documentado" en vez de "garantizamos trazabilidad").

4. **Sin lenguaje de startup.** Nada de "revolucionamos", "disruptivo", "la magia de la IA". El tono es: riguroso sin ser rígido, experto sin ser condescendiente, directo sin ser brusco.

5. **Sin superlativos vacíos.** Nada de "el mejor motor fiscal", "la solución más completa". Si el resultado es potente, se describe; no se adjetiva.

6. **Normativa concreta.** Llei 19/2010, Art. 27 LGT, Art. 451-5 CCCat. El asesor fiscal reconoce las referencias; el genérico le genera desconfianza.

### Ajustes recomendados al texto

1. **H1 tripartito** — "El ISD recalculado... La alerta... La trazabilidad..." → OK. Tres resultados que el asesor identifica de su práctica diaria. Mantener.

2. **"Recálculo automático"** → Verificar que el motor efectivamente recalcula ante cada cambio normativo sin intervención manual. Es un claim verificable.

3. **"Antes de que el problema llegue al cliente"** → Buen framing. El asesor fiscal es intermediario; su dolor es que el problema le llega ya materializado. Mantener.

4. **"Audit-ready"** → Aceptable en contexto técnico fiscal. El asesor fiscal entiende el anglicismo en contexto de auditoría. No abusar.

5. **"ATC" (Agencia Tributaria de Cataluña)** → Correcto para el ICP actual (derecho foral catalán). Si se expande a nivel nacional, sustituir por "la administración tributaria competente".

### Claims de la sección strip

| Claim | Por qué funciona |
|---|---|
| "El ISD de cada heredero, calculado con la norma citada" | El asesor reconoce el dolor de citar norma en cada cálculo manual |
| "El Modelo 650, autocompleto desde el expediente" | Evoca las horas de transcripción de datos al formulario |
| "La alerta de extemporaneidad, antes de que ocurra" | El Art. 27 LGT es la pesadilla del asesor fiscal con cartera de herencias |
| "El recálculo normativo, automático en expedientes activos" | El cambio de ley con 30 expedientes abiertos es el escenario más temido |

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Screenshots del cálculo ISD con embudo fiscal | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots del Modelo 650 autocompleto | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots de alertas de plazo / vencimiento | PNG 2x | Pendiente (placeholder) | Media |
| Testimonios reales de asesores fiscales | Texto | Pendiente | Media |
| Iconos SVG para bloques funcionales | SVG inline | Reutilizar del design system | Resuelta |
| Logo de asesorías colaboradoras | PNG/SVG | Pendiente | Baja |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero centrado sin mockup, con claim que el asesor fiscal reconoce
- [ ] H1 tripartito: recálculo ISD + alerta de plazo + trazabilidad ATC
- [ ] 3 bloques funcionales con features específicas y check icons
- [ ] Claims strip con los 4 resultados rápidos del asesor fiscal
- [ ] 4 beneficios en grid 2x2 orientados a resultado profesional
- [ ] Testimonios (al menos placeholders con diseño final)
- [ ] CTA final con doble botón y frase output-oriented
- [ ] Cross-links a soluciones relacionadas (fiscalidad, planificación, documentación)
- [ ] Responsive mobile / tablet / desktop
- [ ] Scroll reveal animations en cada sección
- [ ] Metadata SEO correcta (title, description, canonical, Open Graph)
- [ ] Copy revisado contra `product-marketing-context.md`
- [ ] Sin lenguaje de startup, sin "garantiza", sin superlativos vacíos
- [ ] "Ulpiano" (marca) en todo el copy visible; nunca "ulpiano.es"
- [ ] Normativa citada correctamente: Llei 19/2010, Art. 27 LGT
- [ ] Tokens de diseño coherentes con globals.css
- [ ] Links de navegación actualizados (Header.tsx ya apunta aquí)
- [ ] Componentes reutilizables compartidos con `/pensado-para/despachos`

---

## 9. RELACIÓN CON OTRAS PÁGINAS

- **Home (ParaQuien.tsx):** El tab "Asesorías" mantiene sus claims actuales ("El ISD recalculado ante cada cambio normativo. La alerta antes del plazo."). NO se modifica.
- **Header.tsx:** Ya tiene link a `/pensado-para/asesorias`. No requiere cambios.
- **Footer.tsx:** Ya tiene link en sección "Para quién". No requiere cambios.
- **`/pensado-para/despachos`:** Comparte componentes (FeatureBlock, BenefitCard, ClaimStrip, TestimonialQuote). Diferente contenido, misma estructura visual. Reutilizar.
- **Cross-links:** Desde esta página, enlazar a:
  - `/soluciones/fiscalidad-sucesoria` (para profundizar en el motor ISD — cross-link prioritario para este ICP)
  - `/soluciones/planificacion-sucesoria` (para profundizar en el módulo patrimonial)
  - `/soluciones/documentacion-sucesoria` (para profundizar en generación documental)
  - `/demo` (CTA principal)

---

**Cuando se vaya a implementar, crear:**
1. `src/app/(marketing)/pensado-para/asesorias/page.tsx` — Server component con metadata
2. `src/app/(marketing)/pensado-para/asesorias/AsesoriasClient.tsx` — Client component con toda la UI
3. Reutilizar componentes de `/pensado-para/despachos` (FeatureBlock, BenefitCard, ClaimStrip, TestimonialQuote)
4. Añadir estilos específicos en `globals.css` solo si los componentes nuevos lo requieren (preferir reutilizar clases existentes)
