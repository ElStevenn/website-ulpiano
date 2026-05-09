# PROMPT DE DISEÑO — Landing `/pensado-para/aseguradoras`

> **Tipo de página:** Buyer Persona Landing (Aseguradoras — Canal Estratégico)
> **URL:** `/pensado-para/aseguradoras`
> **Prioridad:** Tier 2 — Diferenciación / Partnership
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Por qué esta página tiene estructura propia?

Las páginas de `/soluciones/` responden a "¿qué produce Ulpiano?" — orientadas a output técnico, con mockups de producto y especificaciones funcionales.

Las páginas de `/pensado-para/` responden a **"¿esto es para mí?"** — orientadas a identificación profesional. El responsable de producto o de canal de una aseguradora que aterriza aquí necesita ver en los primeros 5 segundos cómo Ulpiano complementa su catálogo de pólizas de vida y decesos, no cómo funciona la plataforma por dentro.

**Matiz crítico — Aseguradoras como canal:** A diferencia de `/pensado-para/despachos` (donde el abogado es usuario directo), aquí la aseguradora es un **socio de distribución**. No compra licencias de software: integra el servicio sucesorio como complemento a sus pólizas. La página posiciona a Ulpiano como el componente post-fallecimiento que convierte una póliza de vida en una solución integral.

**Consecuencia:** Comparte los tokens de diseño de Ulpiano (colores, tipografía, componentes base) pero la estructura de secciones es diferente a las páginas de soluciones. El tono es más consultivo-estratégico que técnico-operativo.

### Diferencias clave con `/soluciones/*` y con `/pensado-para/despachos`

| Aspecto | Páginas de Soluciones | Despachos (Persona) | **Esta página (Aseguradoras)** |
|---|---|---|---|
| Pregunta que responde | "¿Qué produce esto?" | "¿Esto es para mí?" | **"¿Cómo complementa mis pólizas?"** |
| Hero | Output técnico + mockup | Claim al dolor profesional | **Claim al valor añadido para el asegurado** |
| Cuerpo | Outputs → Antes/Después → Métricas | Flujos de trabajo → Beneficios | **Complemento a pólizas → Diferenciación → Fidelización** |
| Prueba social | Métricas de eficiencia | Testimonios de abogados | **Testimonios de responsables de producto/canal** |
| CTA | "Solicita tu demo" | "Reserva tu Demo" | **"Reserva tu Demo" / "Quiero Más Información"** |
| Tono | Técnico-preciso | Consultivo-empático | **Estratégico-partnership, orientado a diferenciación** |
| Relación con Ulpiano | Usuario directo | Usuario directo | **Canal / Socio estratégico** |

---

## 1. ESTRUCTURA DE SECCIONES

```
/pensado-para/aseguradoras

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO (fondo night)                       │
│ Eyebrow + H1 + Subtítulo + 2 CTAs                  │
│ Sin mockup. Fondo limpio con orb decorativo.        │
│ El copy ES el producto aquí.                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: PROPUESTA DE VALOR (fondo white)         │
│ "¿Por Qué Ulpiano para Aseguradoras?"              │
│ Subtítulo + 3 bloques funcionales en grid           │
│ Cada bloque = resultado para la aseguradora         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2B: CLAIMS RÁPIDOS (fondo surface)          │
│ 4 claims de resultado concreto en strip horizontal  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: BENEFICIOS CLAVE (fondo white)           │
│ 4 beneficios orientados a resultado de negocio      │
│ Grid 2x2 con iconos + texto                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: TESTIMONIOS (fondo surface, opcional)    │
│ Citas de responsables de producto/canal             │
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
[Eyebrow — color rgba(255,255,255,0.6), uppercase, Inter Medium 13px, letter-spacing 2px]
PENSADO PARA ASEGURADORAS

[H1 — DM Sans Bold, 48→64px, color white, max-width: 740px, centrado]
La Tramitación Sucesoria que Complementa tus Pólizas de Vida.
El Servicio Post-Fallecimiento que Fideliza.

[Subtítulo — Inter Regular, 17→20px, color rgba(255,255,255,0.75), max-width: 620px, centrado]
Cuando tu asegurado fallece, la familia recibe más que una indemnización:
recibe el camino sucesorio completo, estructurado y gestionado.
Tu póliza pasa de cubrir el momento a resolver lo que viene después.

[CTAs — flex, gap 16px, centrado, margin-top: var(--space-8)]
[Reserva tu Demo]       ← btn-primary (verde)
[Quiero Más Información] ← btn-ghost (blanco, con flecha →)
```

**Notas de diseño:**
- El hero centrado (sin mockup lateral) funciona aquí porque la página de persona no vende el producto visualmente — vende la relevancia estratégica para la aseguradora.
- El H1 se divide en dos frases. La primera establece el QUÉ ("tramitación sucesoria que complementa"). La segunda establece el POR QUÉ ("fideliza"). Ambas son resultados, no descripciones funcionales.
- El subtítulo refuerza el modelo de partnership: "tu asegurado", "tu póliza" — Ulpiano trabaja dentro de la propuesta de la aseguradora, no como producto separado.
- **Responsive:** En mobile, eyebrow + H1 + subtítulo + CTAs apilados. Padding reduce a `var(--space-12)` bottom. H1 en 36→42px para caber en pantalla sin truncar.

---

### SECCIÓN 2: PROPUESTA DE VALOR — "¿Por Qué Ulpiano para Aseguradoras?"

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header de sección:**

```
[Eyebrow — color slate, uppercase, Inter Medium 13px, letter-spacing 2px]
PARA TU ASEGURADORA

[H2 — DM Sans Bold, 28→42px, color ink, max-width: 700px]
¿Por Qué Ulpiano para Aseguradoras?

[Subtítulo — Inter Regular, 17px, color slate, max-width: 620px]
Complementa tus pólizas de vida y decesos con un servicio sucesorio
estructurado, fiscalidad calculada y una experiencia que diferencia.
```

**Grid de 3 bloques funcionales:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(3, 1fr)` (≥1024px)
**Gap:** `var(--space-8)`
**Cada bloque:** Componente `.card` reutilizable (border, shadow, padding var(--space-6) → var(--space-8) desktop)

---

#### Bloque 1: Complemento a Pólizas de Vida y Decesos

```
[Icono — círculo green-bg, 48x48, con SVG de shield-plus/handshake]

[H3 — Inter SemiBold, 20→24px, color ink]
Complemento a Pólizas de Vida y Decesos

[Subtítulo — body-sm, color slate]
El servicio post-fallecimiento que convierte tu póliza en una solución integral.

[Feature 1 — con check icon verde]
✓ Servicio Post-Fallecimiento Estructurado
Del fallecimiento a la distribución de la herencia: la familia de tu asegurado
recibe un camino gestionado, no solo una indemnización. Cada paso documentado
y cada plazo controlado.

[Feature 2 — con check icon verde]
✓ Propuesta de Valor Diferenciada
Póliza más gestión sucesoria. Un paquete integral que ningún competidor ofrece.
La aseguradora que resuelve el momento difícil Y lo que viene después.
```

**Formato de cada feature dentro del bloque:**
- Check icon (16x16, stroke ulpiano-green, 2.5px)
- Título de feature en **Inter Medium** (15px, color ink)
- Descripción en Inter Regular (15px, color slate, line-height 1.7)
- Gap entre features: `var(--space-4)`

---

#### Bloque 2: Expediente Sucesorio y Fiscalidad

```
[Icono — círculo green-bg, 48x48, con SVG de file-text/calculator]

[H3 — Inter SemiBold, 20→24px, color ink]
Expediente Sucesorio y Fiscalidad

[Subtítulo — body-sm, color slate]
Los datos del asegurado fluyen al expediente. La fiscalidad, calculada.

[Feature 1 — con check icon verde]
✓ Datos del Asegurado Vinculados al Expediente
La información del titular y los beneficiarios de la póliza alimenta directamente
el expediente sucesorio. Sin reintroducir datos, sin formularios duplicados.
La aseguradora aporta la base; Ulpiano construye el caso.

[Feature 2 — con check icon verde]
✓ Impacto Fiscal del Cobro de la Póliza
La familia recibe la estimación de la carga tributaria derivada del cobro
de la póliza: ISD estatal, bonificaciones autonómicas, reducciones aplicables.
Un dato que agradecen y que posiciona a tu aseguradora como referente.
```

---

#### Bloque 3: Fidelización y Seguridad

```
[Icono — círculo green-bg, 48x48, con SVG de users-heart/lock]

[H3 — Inter SemiBold, 20→24px, color ink]
Fidelización y Seguridad

[Subtítulo — body-sm, color slate]
Visibilidad completa para el asegurado. Cumplimiento normativo para la aseguradora.

[Feature 1 — con check icon verde]
✓ Visibilidad Completa para el Asegurado
Pasos de la tramitación sucesoria, estado de la póliza, acciones pendientes:
todo transparente para la familia. Menos llamadas al servicio de atención,
más confianza en el proceso. Menos estrés en el momento más difícil.

[Feature 2 — con check icon verde]
✓ Cumplimiento Normativo Actualizado
La plataforma se mantiene al día con la legislación sucesoria estatal
y autonómica. Cifrado avanzado, expedientes trazables, documentación protegida.
El riesgo regulatorio, gestionado.
```

---

### SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)

> **Nota:** Esta subsección presenta los claims específicos para aseguradoras — resultados concretos que el responsable de producto reconoce como diferenciadores de catálogo. No son claims genéricos: son outputs que la aseguradora puede comunicar a sus asegurados.

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Grid horizontal, `repeat(auto-fit, minmax(240px, 1fr))`, gap var(--space-6)
**Cada claim:** Texto centrado, Inter Medium 15px, color ink

```
El servicio sucesorio, integrado en tu póliza de vida
El impacto fiscal del cobro, calculado para la familia
El expediente del asegurado, estructurado desde el primer día
La fidelización que va más allá de la indemnización
```

**Formato visual de cada claim:**
- Fondo: `var(--white)` con `border: 1px solid var(--mist)`, border-radius 8px
- Padding: `var(--space-4) var(--space-6)`
- Icono pequeño a la izquierda (check circle en green, 20x20) + texto
- O bien: sin icono, solo texto centrado con font-weight 600 y un acento de `border-left: 3px solid var(--ulpiano-green)`

**Propósito:** Estos claims actúan como "anchors de diferenciación de catálogo" — el responsable de producto escanea y reconoce elementos que ninguna aseguradora competidora ofrece hoy. Son el equivalente de los "social proof numbers" pero en formato de output concreto orientado a partnership.

---

### SECCIÓN 3: BENEFICIOS CLAVE

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header:**

```
[Eyebrow — color slate, uppercase, Inter Medium 13px, letter-spacing 2px]
BENEFICIOS

[H2 — DM Sans Bold, 28→42px, color ink]
Lo Que Cambia en tu Aseguradora con Ulpiano
```

**Grid 2x2:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (≥768px)
**Gap:** `var(--space-6)`

Cada beneficio es un `.card` con:
- Icono (48x48, circle green-bg, SVG verde)
- H3 (20px, Inter SemiBold, ink)
- P (15px, Inter Regular, slate, line-height 1.7)

---

#### Beneficio 1: Catálogo de Productos Ampliado

```
[Icono: layers/expand]
[H3] Catálogo de Productos Ampliado
[P] Tu póliza de vida no termina en la indemnización. Incluye la gestión sucesoria
completa: del fallecimiento a la distribución de la herencia. Eso es diferenciación
real frente a competidores que solo cubren el momento.
```

#### Beneficio 2: Experiencia del Asegurado Mejorada

```
[Icono: heart-handshake/users]
[H3] Experiencia del Asegurado Mejorada
[P] En el momento más difícil, tu aseguradora ofrece más que dinero: ofrece un camino
estructurado para gestionar la herencia. La familia percibe acompañamiento, no trámites.
Eso se traduce en fidelización y en recomendación.
```

#### Beneficio 3: Menor Riesgo Operativo

```
[Icono: shield-check/alert-circle]
[H3] Menor Riesgo Operativo
[P] Cumplimiento normativo actualizado, documentación cifrada, expedientes trazables.
Menos incidencias, menos reclamaciones. El riesgo regulatorio deja de ser
una preocupación interna para convertirse en un proceso gestionado.
```

#### Beneficio 4: Imagen de Innovación

```
[Icono: sparkles/lightbulb]
[H3] Imagen de Innovación
[P] Servicios digitales que añaden transparencia y practicidad a tus pólizas.
Una aseguradora que ofrece planificación sucesoria digital se percibe diferente.
Eso se recuerda cuando llega la renovación.
```

---

### SECCIÓN 4: TESTIMONIOS (Opcional / Placeholders)

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-16)` top/bottom

**Layout:** 2 testimonios lado a lado (desktop), apilados (mobile)

```
[Quote 1]
"Integrar el servicio sucesorio en nuestra póliza de decesos ha reducido
las reclamaciones post-siniestro. La familia del asegurado tiene un camino
claro, y nosotros dejamos de improvisar respuestas."
— Elena V., Responsable de Producto Vida | Aseguradora Nacional

[Quote 2]
"Nuestros agentes ahora pueden ofrecer algo tangible más allá de la indemnización.
El cálculo fiscal del cobro de la póliza es lo que más valoran las familias.
Eso nos diferencia en la renovación."
— Carlos M., Director de Canal | Aseguradora Regional
```

**Notas:**
- Si no hay testimonios reales, marcar como `[Pendiente: testimonios reales]` en el código con un diseño placeholder sutil.
- Cada testimonio: border-left 3px solid ulpiano-green, padding-left var(--space-6), font-style italic, font-size 17px, color ink. Autor en fog, 14px.
- Perfil típico del testimoniante: responsable de producto vida/decesos, director de canal, director de innovación de aseguradora. NO agentes comerciales individuales.

---

### SECCIÓN 5: CTA FINAL

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `var(--space-24)` top/bottom
**Layout:** Centrado, una columna
**Orb decorativo:** sí, sutil, como en la home

```
[H2 — DM Sans Bold, 28→42px, color white, max-width: 660px, centrado]
Diferénciate con el Servicio Sucesorio que Complementa tus Pólizas de Vida

[Subtítulo — 17→18px, color rgba(255,255,255,0.7), max-width: 540px, centrado]
Descubre cómo Ulpiano puede convertir tu póliza de vida
en una solución integral que fideliza y diferencia.

[CTAs — flex, gap 16px, centrado, margin-top var(--space-8)]
[Reserva tu Demo]        ← btn-primary (verde)
[Quiero Más Información] ← btn-ghost (blanco, con flecha →)

[Alt text — 14px, color rgba(255,255,255,0.6), margin-top var(--space-4)]
Ulpiano – Servicio Sucesorio para Aseguradoras
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado en 1 columna. Hero padding reducido. Cards full-width. Claims strip en 1 col. H1 en 36→42px. |
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

**Componentes nuevos necesarios (compartidos con Despachos si ya existen):**

| Componente | Descripción |
|---|---|
| `FeatureBlock` | Card con icono, H3, subtítulo, y lista de features con check icons |
| `BenefitCard` | Card con icono, H3, párrafo descriptivo |
| `ClaimStrip` | Fila horizontal de claims rápidos con border-left accent |
| `TestimonialQuote` | Cita con border-left verde, texto italic, autor |

**Nota:** Estos componentes son idénticos a los de `/pensado-para/despachos`. Si ya están implementados, reutilizarlos directamente. Solo cambia el contenido, no la estructura.

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Para Aseguradoras | Servicio Sucesorio Complementario — Ulpiano",
  description:
    "Complementa tus pólizas de vida y decesos con la gestión sucesoria digital. Expedientes estructurados, fiscalidad calculada, fidelización real. Ulpiano para aseguradoras.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/aseguradoras",
  },
};
```

**Notas SEO adicionales:**
- Keyword principal: "servicio sucesorio para aseguradoras"
- Keywords secundarias: "complemento póliza de vida", "gestión herencia aseguradora", "servicio post-fallecimiento"
- La canonical apunta a `/pensado-para/aseguradoras`, no a `/para/aseguradoras` ni variantes.
- Open Graph: reutilizar imagen genérica de Ulpiano o crear versión específica para aseguradoras si se dispone de assets.

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Principio rector: Ulpiano vende OUTPUTS, no features

Cada frase de esta página describe un resultado tangible que el responsable de producto de la aseguradora reconoce como diferenciador de catálogo. No se describe funcionalidad abstracta.

| ❌ Funcionalidad abstracta | ✅ Output concreto |
|---|---|
| "Automatización de expedientes" | "El expediente del asegurado, estructurado desde el primer día" |
| "Integración de datos" | "Los datos del titular fluyen al caso sucesorio sin reintroducción" |
| "Motor fiscal" | "El impacto fiscal del cobro de la póliza, calculado para la familia" |
| "Plataforma segura" | "Documentación cifrada, expedientes trazables, cumplimiento actualizado" |

### Tono específico para aseguradoras

- **Estratégico, no técnico.** El interlocutor es un responsable de producto o de canal, no un técnico de sistemas. Hablar de diferenciación, fidelización, catálogo — no de APIs o integraciones.
- **Partnership, no venta de licencia.** Ulpiano se posiciona como componente complementario, no como software que la aseguradora compra. Frases como "complementa tus pólizas", "tus asegurados reciben", "tu catálogo incluye".
- **Sin startup language.** No "disruptivo", no "revolucionario", no "game-changer". La aseguradora habla en términos de producto, riesgo, catálogo y fidelización.
- **Sin "garantiza".** Sustituir por "refuerza" o "mantiene". "Garantiza" implica responsabilidad legal — problemático para una plataforma SaaS.

### Ajustes aplicados al briefing original

1. **"Pensado para Aseguradoras"** → OK como eyebrow. Directo, sin superlativo.

2. **"Ofrece un Servicio Integral que Complemente tus Pólizas"** → Reescrito como H1 de dos frases orientado a output: la tramitación sucesoria + la fidelización.

3. **4 bloques del briefing → consolidados en 3 bloques** para consistencia con el grid de 3 columnas del design system. "Automatización y Eficiencia" se fusiona con "Complemento a Pólizas" (el expediente y la fiscalidad son el complemento concreto, no una categoría aparte).

4. **"Automatización"** → Reemplazado por outputs específicos: "datos vinculados al expediente", "impacto fiscal calculado", "expediente estructurado". La palabra "automatización" no aparece como titular — el profesional de seguros reconoce resultados, no procesos técnicos.

5. **"Seguridad y Cumplimiento Legal"** → Integrado en el bloque de Fidelización. La seguridad es un habilitador, no un bloque independiente para este perfil. El responsable de producto quiere saber que el riesgo está cubierto, no los detalles de cifrado.

### Claims específicos para aseguradoras

| Propósito | Claim |
|---|---|
| Integración en catálogo | "El servicio sucesorio, integrado en tu póliza de vida" |
| Fiscalidad concreta | "El impacto fiscal del cobro, calculado para la familia" |
| Operativa desde el día 1 | "El expediente del asegurado, estructurado desde el primer día" |
| Fidelización diferencial | "La fidelización que va más allá de la indemnización" |

**Nota:** Estos claims están diseñados para que el responsable de producto pueda tomarlos casi literalmente como argumentario de venta interna (al comité de producto, al equipo comercial). Son frases que funcionan tanto en la landing como en un deck de partnership.

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Diagrama conceptual: póliza → fallecimiento → servicio sucesorio | SVG / PNG 2x | Pendiente (placeholder) | Alta |
| Screenshot de expediente con datos de póliza vinculados | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshot de simulación fiscal con cobro de póliza | PNG 2x | Pendiente (placeholder) | Alta |
| Testimonios reales de responsables de producto | Texto | Pendiente | Media |
| Iconos SVG para bloques funcionales | SVG inline | Reutilizar del design system | Resuelta |
| Logo de aseguradoras colaboradoras | PNG/SVG | Pendiente | Baja |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero centrado sin mockup, con claim que el responsable de producto reconoce
- [ ] 3 bloques funcionales con features específicas y check icons
- [ ] Claims strip con los 4 resultados orientados a catálogo de producto
- [ ] 4 beneficios en grid 2x2 orientados a resultado de negocio
- [ ] Testimonios (al menos placeholders con diseño final)
- [ ] CTA final con doble botón
- [ ] Responsive mobile / tablet / desktop
- [ ] Scroll reveal animations en cada sección
- [ ] Metadata SEO correcta
- [ ] Copy revisado contra `product-marketing-context.md`
- [ ] Sin lenguaje de startup, sin "garantiza", sin superlativos vacíos
- [ ] Tono de partnership (no de venta de licencia)
- [ ] Toda referencia a la marca escrita como "Ulpiano" (no "ulpiano.es") en copy visible
- [ ] Solo URLs canónicas y direcciones de email mantienen el dominio "ulpiano.es"
- [ ] Tokens de diseño coherentes con globals.css
- [ ] Links de navegación actualizados (Header.tsx apunta aquí)
- [ ] Cross-links a páginas de soluciones incluidos

---

## 9. RELACIÓN CON OTRAS PÁGINAS

- **Home (ParaQuien.tsx):** El tab "Aseguradoras" mantiene sus claims actuales. NO se modifica desde esta especificación.
- **Header.tsx:** Verificar que existe link a `/pensado-para/aseguradoras`. Añadir si no existe.
- **Footer.tsx:** Verificar que existe link en sección "Para quién". Añadir si no existe.
- **Cross-links:** Desde esta página, enlazar a:
  - `/soluciones/fiscalidad-sucesoria` (para profundizar en el motor ISD y la fiscalidad del cobro)
  - `/soluciones/procesamiento-documental` (para profundizar en la gestión documental del expediente)
  - `/soluciones/planificacion-sucesoria` (para profundizar en la planificación patrimonial)
  - `/demo` (CTA principal)
- **Relación con `/pensado-para/despachos`:** Ambas comparten componentes (`FeatureBlock`, `BenefitCard`, `ClaimStrip`, `TestimonialQuote`) pero con contenido completamente distinto. El tono de Despachos es consultivo-empático (abogado operativo); el de Aseguradoras es estratégico-partnership (responsable de producto).

---

**Cuando se vaya a implementar, crear:**
1. `src/app/(marketing)/pensado-para/aseguradoras/page.tsx` — Server component con metadata
2. `src/app/(marketing)/pensado-para/aseguradoras/AseguradorasClient.tsx` — Client component con toda la UI
3. Reutilizar componentes de `/pensado-para/despachos/` (`FeatureBlock`, `BenefitCard`, `ClaimStrip`, `TestimonialQuote`) — solo cambia el contenido
4. Añadir estilos específicos en `globals.css` solo si los componentes nuevos lo requieren (preferir reutilizar clases existentes)
