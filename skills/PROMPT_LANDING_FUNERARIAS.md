# PROMPT DE DISEÑO — Landing `/pensado-para/funerarias`

> **Tipo de página:** Buyer Persona Landing (Funerarias — Canal Estratégico)
> **URL:** `/pensado-para/funerarias`
> **Prioridad:** Tier 2 — Diferenciación / Partnership
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Por qué esta página tiene estructura propia?

Las páginas de `/soluciones/` responden a "¿qué produce Ulpiano?" — orientadas a output técnico, con mockups de producto y especificaciones funcionales.

Las páginas de `/pensado-para/` responden a **"¿esto es para mí?"** — orientadas a identificación profesional. El director de funeraria que aterriza aquí necesita reconocer una oportunidad de negocio en los primeros 5 segundos: ampliar su servicio, diferenciarse de la competencia, y ofrecer algo que ninguna otra funeraria ofrece.

**Consecuencia:** comparte los tokens de diseño de Ulpiano (colores, tipografía, componentes base) pero la estructura de secciones es diferente a las páginas de soluciones.

### Diferencia clave con el resto de `/pensado-para/*`

La funeraria **no es un usuario directo del software**. Es un **canal estratégico** (partnership / revenue share). Esta landing no vende una herramienta — posiciona Ulpiano como una extensión del catálogo de servicios de la funeraria. El profesional funerario no abre expedientes sucesorios: ofrece a sus clientes acceso a un servicio sucesorio gestionado a través de Ulpiano.

### Diferencias clave con `/soluciones/*` y `/pensado-para/despachos`

| Aspecto | Páginas de Soluciones | Despachos (Persona) | Esta página (Canal) |
|---|---|---|---|
| Pregunta que responde | "¿Qué produce esto?" | "¿Esto es para mí?" | "¿Cómo amplío mi negocio?" |
| Hero | Output técnico + mockup | Claim al dolor profesional | Claim a la oportunidad de servicio |
| Cuerpo | Outputs → Antes/Después → Métricas | Flujos de trabajo reconocibles | Extensión de catálogo → Outputs para el cliente final |
| Prueba social | Métricas de eficiencia | Testimonios de abogados | Testimonios de directores de funeraria |
| CTA | "Solicita tu demo" | "Reserva tu Demo" | "Reserva tu Demo" / "Quiero Saber Más" |
| Tono | Técnico-preciso | Consultivo-profesional | Consultivo-comercial (partnership) |
| Destinatario del copy | Profesional legal | Abogado | Director / responsable de funeraria |

**REGLA FUNDAMENTAL DE TONO:** El copy habla al profesional funerario, nunca a la familia en duelo. No se apela al dolor emocional del luto. Se habla de servicio, diferenciación, y resultado profesional.

---

## 1. ESTRUCTURA DE SECCIONES

```
/pensado-para/funerarias

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO (fondo night)                       │
│ Eyebrow + H1 + Subtítulo + 2 CTAs                  │
│ Sin mockup. Fondo limpio con orb decorativo.        │
│ El copy ES el producto aquí.                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: PROPUESTA DE VALOR (fondo white)         │
│ "¿Por Qué Ulpiano para Funerarias?"                │
│ Subtítulo + 3 bloques funcionales en grid           │
│ Cada bloque = extensión de servicio reconocible     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2B: CLAIMS RÁPIDOS (fondo surface)          │
│ 4 resultados concretos en strip horizontal          │
│ El profesional los reconoce como outputs tangibles  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: BENEFICIOS CLAVE (fondo white)           │
│ 4 beneficios orientados a resultado profesional     │
│ Grid 2x2 con iconos + texto                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: TESTIMONIOS (fondo surface, opcional)    │
│ Citas breves de directores de funeraria             │
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
[Eyebrow — color rgba(255,255,255,0.6), uppercase, letter-spacing 2px, font-size 13px]
PENSADO PARA FUNERARIAS

[H1 — DM Sans Bold, 48→64px, color white, max-width: 720px, centrado]
La tramitación sucesoria que tus clientes necesitan.
Integrada en tu servicio funerario.

[Subtítulo — Inter Regular, 17→20px, color rgba(255,255,255,0.75), max-width: 600px, centrado]
Cuando la familia necesita apoyo más allá del funeral, tu funeraria ofrece
el camino completo de gestión sucesoria — estructurado, digital,
y con el rigor profesional que esperan.

[CTAs — flex, gap 16px, centrado, margin-top: var(--space-8)]
[Reserva tu Demo]   ← btn-primary (verde)
[Quiero Saber Más]  ← btn-ghost (blanco, con flecha →)
```

**Notas de diseño:**
- El hero centrado (sin mockup lateral) funciona aquí porque la página de canal no vende el producto visualmente — vende la oportunidad de ampliar el servicio.
- El H1 en dos líneas es deliberado: primera línea = output para el cliente, segunda línea = integración en el negocio existente. El director de funeraria lee ambas como una propuesta comercial directa.
- El subtítulo habla al profesional ("tu funeraria ofrece"), no a la familia.
- **Responsive:** En mobile, eyebrow + H1 + subtítulo + CTAs apilados. Padding reduce a `var(--space-12)` bottom.

---

### SECCIÓN 2: PROPUESTA DE VALOR — "¿Por Qué Ulpiano para Funerarias?"

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header de sección:**

```
[Eyebrow — color slate, uppercase, letter-spacing 2px, font-size 13px]
PARA TU FUNERARIA

[H2 — DM Sans Bold, 28→42px, color ink, max-width: 700px]
¿Por Qué Ulpiano para Funerarias?

[Subtítulo — Inter Regular, 17px, color slate, max-width: 600px]
Amplía tu catálogo de servicios con la tramitación sucesoria digital.
Tus clientes reciben un expediente estructurado; tú, un servicio diferencial.
```

**Grid de 3 bloques funcionales:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(3, 1fr)` (≥1024px)
**Gap:** `var(--space-8)`
**Cada bloque:** Componente `.card` reutilizable (border, shadow, padding var(--space-6) → var(--space-8) desktop)

---

#### Bloque 1: El Servicio Funerario, Ampliado

```
[Icono — círculo green-bg, 48x48, con SVG de handshake/extend]

[H3 — Inter SemiBold, 20→24px, color ink]
El Servicio Funerario, Ampliado

[Subtítulo — body-sm, color slate]
Del certificado de defunción al expediente sucesorio estructurado.
Tu servicio continúa donde otros terminan.

[Feature 1 — con check icon verde]
✓ Tramitación sucesoria integrada
Desde el certificado de defunción hasta el expediente de herencia estructurado —
tus clientes reciben un camino completo, no solo una derivación a terceros.

[Feature 2 — con check icon verde]
✓ Diferenciación tangible
Mientras otras funerarias terminan en el sepelio, tu servicio continúa
con la gestión sucesoria digital. Eso te posiciona como referencia.
```

**Formato de cada feature dentro del bloque:**
- Check icon (16x16, stroke ulpiano-green, 2.5px)
- Título de feature en **Inter Medium** (15px, color ink)
- Descripción en Inter Regular (15px, color slate, line-height 1.7)
- Gap entre features: `var(--space-4)`

---

#### Bloque 2: Documentación Procesada y Fiscalidad Calculada

```
[Icono — círculo green-bg, 48x48, con SVG de document/calculator]

[H3 — Inter SemiBold, 20→24px, color ink]
Documentación Procesada y Fiscalidad Calculada

[Subtítulo — body-sm, color slate]
Documentos digitalizados, impuestos estimados, expediente trazable.
Sin transcripción manual, sin errores de copia.

[Feature 1 — con check icon verde]
✓ Documentos procesados digitalmente
Certificado de defunción subido → datos extraídos → expediente sucesorio
estructurado. Sin transcripción manual ni duplicidades.

[Feature 2 — con check icon verde]
✓ ISD estimado para la familia
La carga fiscal por heredero, calculada y presentada en un informe claro —
las familias entienden lo que van a pagar antes de tomar decisiones.
```

---

#### Bloque 3: Transparencia y Seguimiento para el Cliente

```
[Icono — círculo green-bg, 48x48, con SVG de eye/progress]

[H3 — Inter SemiBold, 20→24px, color ink]
Transparencia y Seguimiento para el Cliente

[Subtítulo — body-sm, color slate]
La familia ve el estado de su expediente.
Tu funeraria transmite control y profesionalidad.

[Feature 1 — con check icon verde]
✓ Panel de estado del expediente
La familia consulta qué está hecho, qué está pendiente y qué viene después.
Sin llamadas de seguimiento, sin incertidumbre.

[Feature 2 — con check icon verde]
✓ Distribución patrimonial visualizada
Diagramas interactivos que muestran quién hereda qué — claros,
exportables, con el nivel de detalle que un profesional espera.
```

---

### SECCIÓN 2B: CLAIMS RÁPIDOS (strip horizontal)

> **Nota:** Estos claims traducen los outputs de Ulpiano al lenguaje del servicio funerario. El director de funeraria los reconoce como extensiones concretas de lo que puede ofrecer a sus clientes.

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-12)` top/bottom
**Layout:** Grid horizontal, `repeat(auto-fit, minmax(240px, 1fr))`, gap var(--space-6)
**Cada claim:** Texto centrado, Inter Medium 15px, color ink

```
El expediente sucesorio, estructurado desde el primer día
El ISD de cada heredero, estimado para la familia
La documentación del fallecido, procesada sin transcripción manual
El servicio funerario, ampliado más allá del sepelio
```

**Formato visual de cada claim:**
- Fondo: `var(--white)` con `border: 1px solid var(--mist)`, border-radius 8px
- Padding: `var(--space-4) var(--space-6)`
- Icono pequeño a la izquierda (check circle en green, 20x20) + texto
- O bien: sin icono, solo texto centrado con font-weight 600 y un acento de `border-left: 3px solid var(--ulpiano-green)`

**Propósito:** Estos claims actúan como "anchors de servicio" — el director de funeraria escanea y reconoce extensiones concretas de su catálogo que puede ofrecer a las familias. Son el equivalente de los "social proof numbers" pero en formato de resultado tangible para el cliente final.

---

### SECCIÓN 3: BENEFICIOS CLAVE

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom (desktop), `var(--space-12)` (mobile)

**Header:**

```
[Eyebrow — color slate, uppercase, letter-spacing 2px, font-size 13px]
BENEFICIOS

[H2 — DM Sans Bold, 28→42px, color ink]
Lo que cambia en tu funeraria con Ulpiano
```

**Grid 2x2:**
**Layout:** `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (≥768px)
**Gap:** `var(--space-6)`

Cada beneficio es un `.card` con:
- Icono (48x48, circle green-bg, SVG verde)
- H3 (20px, Inter SemiBold, ink)
- P (15px, Inter Regular, slate, line-height 1.7)

---

#### Beneficio 1: Servicio Completo para la Familia

```
[Icono: path/compass]
[H3] Servicio Completo para la Familia
[P] Tu funeraria acompaña desde el fallecimiento hasta la tramitación
de la herencia. Un servicio integral que ningún competidor ofrece
y que las familias recuerdan.
```

#### Beneficio 2: Diferenciación en el Mercado

```
[Icono: star/badge]
[H3] Diferenciación en el Mercado
[P] Mientras otros terminan en el sepelio, tú continúas con la gestión
sucesoria digital. Un posicionamiento que se traduce en recomendaciones
y en una reputación difícil de replicar.
```

#### Beneficio 3: Operativa Digital, Sin Errores

```
[Icono: shield/check]
[H3] Operativa Digital, Sin Errores
[P] Documentos procesados, cálculos automatizados, expedientes trazables.
Sin duplicidades, sin papeleo confuso, sin errores de transcripción
que retrasen el proceso.
```

#### Beneficio 4: Imagen Profesional y de Confianza

```
[Icono: award/trust]
[H3] Imagen Profesional y de Confianza
[P] Ofrecer soluciones completas más allá del funeral transmite compromiso
con la familia. Eso se traduce en confianza, en recomendaciones,
y en un posicionamiento que refuerza tu marca.
```

---

### SECCIÓN 4: TESTIMONIOS (Opcional / Placeholders)

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-16)` top/bottom

**Layout:** 2 testimonios lado a lado (desktop), apilados (mobile)

```
[Quote 1]
"Desde que ofrecemos la tramitación sucesoria con Ulpiano,
las familias nos lo agradecen semanas después del funeral.
Eso antes no pasaba."
— Carmen L., Directora de Funeraria | Tarragona

[Quote 2]
"Nos diferencia de cualquier competidor de la zona.
Las familias valoran que les ayudemos con la herencia
sin tener que buscar otro profesional."
— Àlex M., Responsable de Servicios | Funeraria en Barcelona
```

**Notas:**
- Si no hay testimonios reales, marcar como `[Pendiente: testimonios reales de directores de funeraria]` en el código con un diseño placeholder sutil.
- Cada testimonio: border-left 3px solid ulpiano-green, padding-left var(--space-6), font-style italic, font-size 17px, color ink. Autor en fog, 14px.
- Los testimonios hablan desde la perspectiva del profesional funerario (lo que él/ella ofrece), no desde la perspectiva emocional de la familia.

---

### SECCIÓN 5: CTA FINAL

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `var(--space-24)` top/bottom
**Layout:** Centrado, una columna
**Orb decorativo:** sí, sutil, como en la home

```
[H2 — DM Sans Bold, 28→42px, color white, max-width: 640px, centrado]
Amplía tu servicio funerario con la tramitación sucesoria
que tus clientes necesitan.

[Subtítulo — 17→18px, color rgba(255,255,255,0.7), max-width: 520px, centrado]
Descubre cómo Ulpiano puede convertir tu funeraria en el referente
de servicio integral en tu zona.

[CTAs — flex, gap 16px, centrado, margin-top var(--space-8)]
[Reserva tu Demo]   ← btn-primary (verde)
[Quiero Saber Más]  ← btn-ghost (blanco, con flecha →)

[Alt text — 14px, color rgba(255,255,255,0.6), margin-top var(--space-4)]
Ulpiano – Tramitación Sucesoria para Funerarias
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

> **Nota:** Estos componentes son idénticos a los de `/pensado-para/despachos`. Reutilizar directamente si ya están implementados.

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Para Funerarias | Servicio Sucesorio Integrado — Ulpiano",
  description:
    "Amplía tu servicio funerario con la tramitación sucesoria digital. Expedientes estructurados, documentación procesada, ISD calculado. Ulpiano para funerarias.",
  alternates: {
    canonical: "https://ulpiano.es/pensado-para/funerarias",
  },
};
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Ajustes aplicados al briefing original (funeraria.docx)

El texto proporcionado en el briefing estaba parcialmente orientado a la familia ("Acompaña a las Familias Más Allá del Funeral", "Soporte Emocional y Práctico"). Se han aplicado los siguientes ajustes:

1. **Destinatario reescrito.** Todo el copy habla al profesional funerario ("tu funeraria", "tus clientes", "tu servicio"), nunca directamente a la familia en duelo. La familia aparece como beneficiaria del servicio, no como interlocutora.

2. **"Soporte Emocional" eliminado como sección.** El briefing incluía un bloque de "Soporte Emocional y Práctico" que cruzaba la línea hacia el tono empático-familiar. Se ha redistribuido el contenido: lo práctico (ahorro de tiempo, transparencia) se ha integrado en los bloques funcionales; lo emocional se ha eliminado del copy directo.

3. **"Automatización" sustituida por outputs.** "Gestión Digital de Documentos" → "Documentos procesados digitalmente". "Cálculo de Impuestos" → "ISD estimado para la familia". El profesional lee resultados, no funcionalidades abstractas.

4. **Posicionamiento de partnership.** El briefing decía "Ofrece un Servicio Integral a las Familias". El copy reescrito dice "Amplía tu catálogo de servicios". La funeraria no "ofrece Ulpiano" — amplía su propio servicio a través de Ulpiano.

5. **"Garantiza" evitado.** Ninguna instancia de "garantiza" en el copy. Se usa "refuerza" o "mantiene" donde el briefing original implicaba garantía.

6. **"Ulpiano" como marca, nunca "ulpiano.es".** El nombre de marca aparece como "Ulpiano" en todo el copy visible. Solo la URL canónica y el email de contacto usan el dominio.

### Claims específicos para funerarias

| Concepto del briefing | Claim reescrito (output) |
|---|---|
| "Gestión Digital de Documentos" | "La documentación del fallecido, procesada sin transcripción manual" |
| "Cálculo de Impuestos" | "El ISD de cada heredero, estimado para la familia" |
| "Ampliación del Servicio" | "El servicio funerario, ampliado más allá del sepelio" |
| "Transparencia en Cada Paso" | "El expediente sucesorio, estructurado desde el primer día" |

**Nota:** Estos claims están diseñados para que el director de funeraria los lea como extensiones de su catálogo. No son features de software — son resultados que su cliente final recibe.

### Tono: reglas específicas para esta página

- **Rigor sin rigidez.** El profesional funerario opera en un contexto delicado. El copy es directo y profesional, sin frivolidad, pero sin solemnidad excesiva.
- **Comercial sin agresividad.** Esta es una página de partnership. El tono es de propuesta comercial seria, no de venta a presión.
- **Sin apelación al duelo.** Nunca: "en los momentos más difíciles", "cuando el dolor es mayor", "en su hora más oscura". Siempre: "cuando la familia necesita apoyo", "más allá del funeral", "servicio integral".
- **Sin lenguaje de startup.** Nunca: "disruptivo", "revolucionario", "game-changer", "empoderamos". Siempre: "amplía", "estructura", "procesa", "calcula".

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Screenshots del panel de estado del expediente | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots del informe ISD para familias | PNG 2x | Pendiente (placeholder) | Alta |
| Screenshots de diagramas de distribución patrimonial | PNG 2x | Pendiente (placeholder) | Alta |
| Testimonios reales de directores de funeraria | Texto | Pendiente | Media |
| Iconos SVG para bloques funcionales | SVG inline | Reutilizar del design system | Resuelta |
| Logo / marca de funerarias colaboradoras | PNG/SVG | Pendiente | Baja |
| Diagrama de flujo del servicio integrado (funeraria → Ulpiano → familia) | SVG/PNG | Pendiente | Media |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero centrado sin mockup, con claim que el director de funeraria reconoce como oportunidad
- [ ] 3 bloques funcionales con features específicas y check icons
- [ ] Claims strip con los 4 resultados tangibles del servicio ampliado
- [ ] 4 beneficios en grid 2x2 orientados a resultado profesional y diferenciación
- [ ] Testimonios (al menos placeholders con diseño final)
- [ ] CTA final con doble botón
- [ ] Responsive mobile / tablet / desktop
- [ ] Scroll reveal animations en cada sección
- [ ] Metadata SEO correcta
- [ ] Copy revisado: habla al profesional funerario, nunca a la familia en duelo
- [ ] Sin "garantiza" — solo "refuerza" o "mantiene"
- [ ] Sin lenguaje de startup, sin emojis, sin superlativos vacíos
- [ ] "Ulpiano" como marca en todo el copy visible (nunca "ulpiano.es")
- [ ] Tono: rigoroso sin rigidez, comercial sin agresividad, sin apelación al duelo
- [ ] Tokens de diseño coherentes con globals.css
- [ ] Links de navegación actualizados (Header.tsx, Footer.tsx)

---

## 9. RELACIÓN CON OTRAS PÁGINAS

- **Home (ParaQuien.tsx):** Si existe un tab "Funerarias", mantener sus claims actuales. Si no existe, considerar añadirlo.
- **Header.tsx:** Añadir link a `/pensado-para/funerarias` en el menú "Para quién" si no existe.
- **Footer.tsx:** Añadir link en sección "Para quién" si no existe.
- **Cross-links:** Desde esta página, enlazar a:
  - `/soluciones/procesamiento-documental` (para profundizar en el procesamiento de documentos sucesorios)
  - `/soluciones/fiscalidad-sucesoria` (para profundizar en el motor ISD y la estimación fiscal)
  - `/soluciones/documentacion-sucesoria` (para profundizar en la generación de documentación sucesoria)
  - `/demo` (CTA principal)
- **Relación con `/pensado-para/despachos`:** Complementaria, no competitiva. El despacho es usuario directo; la funeraria es canal. Pueden recomendarse mutuamente en contextos donde el cliente busca "a quién derivar".

---

**Cuando se vaya a implementar, crear:**
1. `src/app/(marketing)/pensado-para/funerarias/page.tsx` — Server component con metadata
2. `src/app/(marketing)/pensado-para/funerarias/FunerariasClient.tsx` — Client component con toda la UI
3. Añadir estilos específicos en `globals.css` si los componentes nuevos lo requieren (preferir reutilizar clases existentes y los componentes ya creados para `/pensado-para/despachos`)
4. Actualizar Header.tsx y Footer.tsx con el enlace a `/pensado-para/funerarias`
