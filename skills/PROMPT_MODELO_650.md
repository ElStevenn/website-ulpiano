# PROMPT DE DISEÑO — Página `/modelos/modelo-650`

> **Tipo de página:** SEO informativo-transaccional (Modelo fiscal)
> **URL:** `/modelos/modelo-650`
> **Silo:** `/modelos/*` (Modelos de Impuestos)
> **Prioridad:** Alta — modelo core del producto
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Qué es esta página?

Una guía completa sobre el Modelo 650 (Autoliquidación del Impuesto sobre Sucesiones) orientada al profesional jurídico-fiscal. El visitante llega desde búsqueda orgánica ("modelo 650 herencia", "rellenar modelo 650 Catalunya") y encuentra contenido de valor que responde a su duda. En la segunda mitad de la página, descubre que Ulpiano genera este modelo automáticamente desde el expediente.

### ¿Por qué no es una página de producto?

El Modelo 650 ya aparece como output en `/soluciones/fiscalidad-sucesoria` y en el catálogo de documentos de `/soluciones/documentacion-sucesoria`. Esta página no compite con ellas: complementa. Aquí el contenido fiscal es el protagonista; Ulpiano es la solución natural al final de la lectura.

Lee `PROMPT_ARQUITECTURA_MODELOS.md` para la arquitectura completa del silo, `product-marketing-context.md` para el contexto de producto y `MAPEO_PAGINAS_CONTENIDOS.md` para la estructura global del sitio.

---

## 1. ESTRUCTURA DE SECCIONES

```
/modelos/modelo-650

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO INFORMATIVO (fondo night)           │
│ Breadcrumb + Model Nav + Número "650" decorativo    │
│ H1: Modelo 650 — Autoliquidación del Impuesto       │
│ sobre Sucesiones                                    │
│ Subtítulo informativo. Sin CTA agresivo.            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: QUÉ ES EL MODELO 650 (fondo white)       │
│ Explicación clara + tabla resumen (ficha técnica)   │
│ Base legal, finalidad, administración competente    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: QUIÉN ESTÁ OBLIGADO (fondo surface)      │
│ Sujetos pasivos + supuestos + plazos               │
│ Alerta de extemporaneidad (Art. 27 LGT)            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: CONTENIDO — EL EMBUDO FISCAL (fondo wht) │
│ Desglose completo del cálculo: base imponible →     │
│ reducciones → base liquidable → tarifa →            │
│ coeficiente → bonificación → cuota                  │
│ Bloque visual del embudo en JetBrains Mono          │
│ Tabla de reducciones catalanas                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CÓMO ULPIANO LO GENERA (fondo surface)   │
│ Transición de guía fiscal a producto                │
│ Mockup del 650 generado + 3 puntos de valor         │
│ CTA: "Solicita tu demo"                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 6: PREGUNTAS FRECUENTES (fondo white)       │
│ 6 preguntas en accordion + schema FAQPage           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 7: MODELOS RELACIONADOS (fondo surface)      │
│ Cards: 660 (siempre juntos), 652 (seguros),         │
│ 653 (consolidación), 651 (alternativa donación)     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 8: CTA FINAL (fondo night)                   │
│ H2 + subtítulo + doble CTA                          │
└─────────────────────────────────────────────────────┘
```

---

## 2. ESPECIFICACIÓN POR SECCIÓN

---

### SECCIÓN 1: HERO INFORMATIVO

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `calc(64px + var(--space-12))` top, `var(--space-16)` bottom

**Breadcrumb (encima de todo):**
```
Inicio › Modelos › Modelo 650
```
- `<nav aria-label="Breadcrumb">`, Inter Regular 13px, `rgba(255,255,255,0.5)`
- Links con `next/link`. Último elemento sin enlace.

**Model Nav (debajo del breadcrumb):**
```
[650] Sucesiones  ·  [651] Donaciones  ·  [652] Seguros  ·  [653] Consolidación  ·  [660] Inventario
```
- Modelo 650 activo: fondo `ulpiano-green`, texto white, border-radius 6px
- Resto: texto `rgba(255,255,255,0.5)`, hover: texto white
- Inter Medium 13px, flex row, gap 8px
- Mobile: horizontal scrollable con `overflow-x: auto`

**Número decorativo:**
- "650" en JetBrains Mono 120px, `rgba(255,255,255,0.06)`, position absolute, top -20px, right 40px
- `aria-hidden="true"`, `user-select: none`

**Contenido:**

```
[Eyebrow]
MODELO FISCAL

[H1 — DM Sans Bold, 56→42→32px, color white, max-width: 720px]
Modelo 650: Autoliquidación del Impuesto sobre Sucesiones

[Subtítulo — Inter Regular, 17→17→15px, rgba(255,255,255,0.75), max-width: 600px]
El Modelo 650 es el formulario de autoliquidación que cada heredero
o legatario debe presentar ante la administración tributaria autonómica
para liquidar el Impuesto sobre Sucesiones y Donaciones (ISD) en su
modalidad de sucesiones mortis causa.

[Badge informativo — fondo rgba(45,106,79,0.15), texto green-light, Inter Medium 13px]
Normativa aplicable en Catalunya: Llei 19/2010, del 7 de juny
```

**Notas de diseño:**
- Hero centrado, una columna. Sin mockup. El contenido informativo es el protagonista.
- El badge normativo refuerza que el contenido es específico de Catalunya (diferenciador de Ulpiano).

---

### SECCIÓN 2: QUÉ ES EL MODELO 650

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "DEFINICIÓN"
**H2:** "¿Qué es el Modelo 650?"

**Contenido (prosa, max-width 720px, centrado):**

El Modelo 650 es el documento de autoliquidación del Impuesto sobre Sucesiones y Donaciones (ISD) en su modalidad de adquisiciones mortis causa. Cada heredero, legatario o beneficiario de un seguro de vida vinculado a una sucesión debe presentar su propio Modelo 650 ante la administración tributaria de la comunidad autónoma donde el causante tenía su residencia habitual.

En Catalunya, la gestión del impuesto corresponde a la Agència Tributària de Catalunya (ATC) y se rige por la Llei 19/2010, del 7 de juny, de regulació de l'impost sobre successions i donacions, que establece reducciones y bonificaciones propias diferenciadas de la normativa estatal.

El Modelo 650 recoge el cálculo completo de la cuota tributaria: desde la base imponible (valor de los bienes adquiridos) hasta la cuota a ingresar, pasando por reducciones, tarifa progresiva, coeficiente multiplicador y bonificaciones autonómicas.

**Tabla resumen (ficha técnica):**

Componente `.ModelSummaryTable`. Fondo `surface`, border-radius 12px, padding var(--space-6).

| Campo | Valor |
|---|---|
| **Denominación oficial** | Autoliquidación del Impuesto sobre Sucesiones y Donaciones — Sucesiones |
| **Base legal estatal** | Ley 29/1987, de 18 de diciembre (LISD) + RD 1629/1991 (RISD) |
| **Base legal autonómica (Catalunya)** | Llei 19/2010, del 7 de juny |
| **Hecho imponible** | Adquisición de bienes y derechos por herencia, legado o cualquier otro título sucesorio |
| **Sujeto pasivo** | Cada heredero, legatario o beneficiario individualmente |
| **Plazo de presentación** | 6 meses desde el fallecimiento del causante (prorrogable 6 meses más si se solicita en los primeros 5) |
| **Administración competente** | Comunidad autónoma de residencia habitual del causante (en Catalunya: ATC) |
| **Acompaña a** | Modelo 660 (Declaración / Inventario de bienes) |

Formato de la tabla:
- Header izquierdo: Inter SemiBold 14px, `ink`, background `surface`, width 35%
- Valor derecho: Inter Regular 15px, `ink`, line-height 1.6
- Bordes: `1px solid var(--mist)`
- Border-radius: 12px en contenedor externo
- Referencias legales en `JetBrains Mono` 13px, color `slate`

---

### SECCIÓN 3: QUIÉN ESTÁ OBLIGADO A PRESENTARLO

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "OBLIGADOS TRIBUTARIOS"
**H2:** "¿Quién debe presentar el Modelo 650?"

**Layout:** Texto + grid de 3 bloques

**Texto introductorio (max-width 720px):**

Está obligado a presentar el Modelo 650 toda persona física que adquiera bienes o derechos por causa de muerte. La obligación es individual: cada heredero o legatario presenta su propio modelo con su propia liquidación.

**Grid de 3 bloques (repeat(3, 1fr) desktop, stack mobile):**

Cada bloque: card con fondo white, border mist, border-radius 12px, padding var(--space-6).

**Bloque 1: Herederos**
- Icono: users (lucide-react), 24px en círculo 44px `green-bg`
- H3: "Herederos universales o en cuota"
- P: "Quienes suceden al causante en la totalidad o una parte alícuota de sus bienes y derechos. Incluye herederos testamentarios e intestados."

**Bloque 2: Legatarios**
- Icono: gift, 24px en círculo 44px `green-bg`
- H3: "Legatarios"
- P: "Quienes reciben bienes concretos por disposición testamentaria del causante: un inmueble específico, una cantidad de dinero, una joya."

**Bloque 3: Beneficiarios de seguros**
- Icono: shield, 24px en círculo 44px `green-bg`
- H3: "Beneficiarios de seguros de vida"
- P: "Quienes perciben el capital de un seguro de vida por causa de fallecimiento del asegurado, cuando el beneficiario no es el tomador. En este caso, puede requerirse también el Modelo 652."

**Bloque de alerta (debajo del grid):**

```
[Icono: alert-triangle, color warning #B45309]
[Fondo: #FEF3C7, border-radius 12px, padding var(--space-6)]

PLAZO Y EXTEMPORANEIDAD

El plazo de presentación es de 6 meses desde la fecha de fallecimiento.
Si el Modelo 650 se presenta fuera de plazo, se aplican los recargos
del Art. 27 de la Ley General Tributaria (LGT):

· Hasta 3 meses de retraso: 5% de recargo (sin intereses ni sanción)
· De 3 a 6 meses: 10%
· De 6 a 12 meses: 15%
· Más de 12 meses: 20% + intereses de demora

Ulpiano calcula automáticamente el recargo por extemporaneidad
y alerta antes de que el plazo venza.
```

---

### SECCIÓN 4: CONTENIDO DEL MODELO — EL EMBUDO FISCAL

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "CÁLCULO"
**H2:** "Cómo se calcula la cuota del Modelo 650"
**Subtítulo:** "El Modelo 650 recoge un embudo de liquidación completo. Cada paso reduce o incrementa la cuota según la normativa aplicable."

**Layout:** Texto explicativo + bloque visual del embudo + tabla de reducciones

**Bloque visual del embudo fiscal:**

Componente `<FiscalFunnel>`. Fondo `surface`, border-radius 12px, padding var(--space-8), max-width 700px, centrado.

```
Base imponible              € 385.000,00      ← Valor bienes adquiridos
─────────────────────────────────────────────
- Reducción parentesco     -€ 100.000,00      ← Art. 2 Llei 19/2010 (Grupo II)
- Reducción vivienda       -€  95.000,00      ← Art. 5 (95%, máx. 500.000€)
─────────────────────────────────────────────
= Base liquidable           € 190.000,00
─────────────────────────────────────────────
× Tarifa progresiva         €  23.580,00      ← Art. 57 LISD / Escala autonómica
× Coeficiente multiplicador      × 1,0000     ← Grupo II, patrimonio < 500.000€
─────────────────────────────────────────────
= Cuota íntegra             €  23.580,00
- Bonificación Grupo II    -€  22.401,00      ← Art. 12 Llei 19/2010 (≈99%)
─────────────────────────────────────────────
= CUOTA A INGRESAR          €   1.179,00
```

- Números: JetBrains Mono 16px, `ink`, alineados a la derecha
- Referencias normativas: Inter Regular 13px, `fog`, a la derecha del número
- Líneas divisorias: `border-top: 1px dashed var(--mist)`
- "CUOTA A INGRESAR": JetBrains Mono 18px bold, `ulpiano-green`
- El embudo se renderiza como tabla/grid HTML, no como bloque `<pre>`

**Texto explicativo del embudo (debajo):**

Cada paso se explica en un párrafo breve (Inter Regular 16px, `slate`, max-width 720px):

1. **Base imponible** — Valor real de los bienes y derechos adquiridos por el heredero, minorado por cargas y deudas deducibles. Se corresponde con la porción hereditaria individual, no con el caudal relicto total.

2. **Reducciones** — Catalunya aplica reducciones propias reguladas en la Llei 19/2010:
   - Reducción por parentesco (Art. 2): escalonada por grupos (I a IV)
   - Reducción por vivienda habitual (Art. 5): 95% del valor, máximo 500.000€
   - Reducción por empresa familiar (Art. 7): 95% del valor
   - Reducción por discapacidad (Art. 3): 275.000€ o 650.000€ según grado
   - Reducción por persona mayor de 75 años (Art. 4): 275.000€

3. **Tarifa y coeficiente** — La base liquidable se somete a una escala progresiva. El coeficiente multiplicador depende del grupo de parentesco y del patrimonio preexistente del heredero.

4. **Bonificación** — Catalunya aplica bonificaciones significativas para Grupos I y II: del 99% para adquisiciones de hasta 100.000€ de base imponible, con reducción progresiva a medida que aumenta. El cónyuge o pareja estable goza de bonificación del 99% sin límite.

**Tabla de reducciones catalanas:**

| Concepto | Base legal | Importe / Porcentaje |
|---|---|---|
| Grupo I (descendientes < 21 años) | Art. 2.1 Llei 19/2010 | 100.000€ + 12.000€/año < 21, máx. 196.000€ |
| Grupo II (descendientes ≥ 21, cónyuge, ascendientes) | Art. 2.2 | 100.000€ (descendientes/ascendientes), 100.000€ (cónyuge) |
| Grupo III (colaterales 2.º y 3.er grado, ascend. afines) | Art. 2.3 | 50.000€ |
| Grupo IV (colaterales 4.º grado y extraños) | Art. 2.4 | Sin reducción por parentesco |
| Vivienda habitual del causante | Art. 5 | 95%, máx. 500.000€ por sujeto pasivo |
| Empresa familiar / participaciones | Art. 7 | 95% del valor |
| Bienes del patrimonio cultural | Art. 6 | 95% del valor |
| Discapacidad ≥ 33% | Art. 3 | 275.000€ |
| Discapacidad ≥ 65% | Art. 3 | 650.000€ |
| Persona mayor de 75 años | Art. 4 | 275.000€ |

Formato: misma estilización que la tabla resumen de la sección 2.

---

### SECCIÓN 5: CÓMO ULPIANO GENERA EL MODELO 650

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "CON ULPIANO"
**H2:** "El Modelo 650, generado desde el expediente"
**Subtítulo:** "Introduces los datos del expediente una vez. Ulpiano calcula la cuota de cada heredero y genera el Modelo 650 con todos los campos completados."

**Layout:** 2 columnas desktop (55% copy, 45% mockup). Stack en mobile.

**Columna izquierda — 3 puntos de valor:**

Cada punto: icono check-circle en `ulpiano-green` (20px) + texto.

1. **Un 650 por heredero, coherente con el inventario**
   "El motor fiscal toma los datos del inventario patrimonial (Modelo 660) y calcula la cuota individual de cada heredero aplicando la normativa catalana vigente."

2. **Reducciones y bonificaciones aplicadas automáticamente**
   "Parentesco, vivienda habitual, empresa familiar, discapacidad — cada reducción se aplica según la Llei 19/2010 sin revisión manual de tablas."

3. **Alerta de extemporaneidad antes de que el plazo venza**
   "Ulpiano monitoriza la fecha de fallecimiento del causante y calcula el recargo por extemporaneidad del Art. 27 LGT si el expediente se acerca al vencimiento del período voluntario."

**CTA (debajo de los 3 puntos):**
- Primario: "Solicita tu demo" → `<ButtonPrimary href="/demo">`
- Secundario: "Ver el motor fiscal completo →" → `<ButtonGhost href="/soluciones/fiscalidad-sucesoria">`

**Columna derecha — Mockup del Modelo 650 generado:**

Ventana simulada (HTML/CSS, no imagen):
- Barra superior: 3 dots + "Modelo 650 — Heredero 1/3"
- Fondo `white`
- Contenido:
  - Header: "MODELO 650 — AUTOLIQUIDACIÓN" en DM Sans Bold 14px, `ink`
  - Datos del causante: "D. Joan Puig i Ferrer · NIF: 40.XXX.XXX-Y" en Inter Regular 13px, `slate`
  - Datos del heredero: "D.ª Maria Puig i Costa · Grupo II · Hija" en Inter Regular 13px, `ink`
  - Mini embudo fiscal resumido:
    ```
    Base imponible      € 385.000,00
    Reducciones        -€ 195.000,00
    Base liquidable     € 190.000,00
    Cuota íntegra       €  23.580,00
    Bonificación       -€  22.401,00
    ─────────────────────────────────
    CUOTA              €   1.179,00
    ```
  - Badge: "✓ Generado desde expediente" en `green-bg`, Inter Medium 12px
- Tratamiento: border-radius 12px, sombra, perspectiva sutil

---

### SECCIÓN 6: PREGUNTAS FRECUENTES

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "FAQ"
**H2:** "Preguntas frecuentes sobre el Modelo 650"

**Implementación:** Componente `<FaqAccordion>` ('use client'). Cada pregunta se expande/colapsa con transición de altura. Schema FAQPage inyectado en `<head>`.

**6 preguntas:**

**P1: ¿Cuál es la diferencia entre el Modelo 650 y el Modelo 660?**
R: El Modelo 650 es la autoliquidación individual — contiene el cálculo de la cuota tributaria de cada heredero. El Modelo 660 es la declaración del inventario de bienes, derechos y deudas del causante. Ambos se presentan conjuntamente: el 660 como soporte documental del caudal relicto y el 650 como liquidación por beneficiario.

**P2: ¿Se presenta un Modelo 650 por cada heredero?**
R: Sí. Cada heredero, legatario o beneficiario de seguro de vida presenta su propio Modelo 650 con su liquidación individual. Si hay 3 herederos, se presentan 3 Modelos 650 (y un único Modelo 660).

**P3: ¿Qué plazo hay para presentar el Modelo 650?**
R: 6 meses desde la fecha de fallecimiento del causante. Existe la posibilidad de solicitar una prórroga de 6 meses adicionales, siempre que se pida dentro de los primeros 5 meses desde el fallecimiento (Art. 68 RISD). La prórroga conlleva intereses de demora.

**P4: ¿Qué ocurre si presento el Modelo 650 fuera de plazo?**
R: Se aplican los recargos del Art. 27 de la Ley General Tributaria: 5% (hasta 3 meses de retraso), 10% (3-6 meses), 15% (6-12 meses), 20% (más de 12 meses) con intereses de demora a partir de los 12 meses.

**P5: ¿Qué reducciones se aplican en Catalunya?**
R: La Llei 19/2010 establece reducciones por parentesco (hasta 196.000€ para menores de 21 años, 100.000€ para Grupo II), vivienda habitual (95%, máx. 500.000€), empresa familiar (95%), discapacidad (275.000€ o 650.000€), y persona mayor de 75 años (275.000€). Además, existen bonificaciones en cuota que pueden alcanzar el 99% para Grupos I y II.

**P6: ¿Puede Ulpiano generar el Modelo 650 automáticamente?**
R: Sí. Ulpiano toma los datos del expediente sucesorio — inventario patrimonial, escenario hereditario y configuración fiscal — y genera el Modelo 650 de cada heredero con la cuota calculada, las reducciones aplicadas y la normativa citada. El profesional revisa y valida antes de presentar.

---

### SECCIÓN 7: MODELOS RELACIONADOS

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "MODELOS RELACIONADOS"
**H2:** "Otros modelos del Impuesto sobre Sucesiones y Donaciones"

**Layout:** Grid `repeat(4, 1fr)` desktop, `repeat(2, 1fr)` tablet, stack mobile. Gap var(--space-6).

**4 cards** (fondo white, border mist, border-radius 12px, padding var(--space-6)):

Cada card:
- Número: JetBrains Mono 36px, `ulpiano-green`
- Nombre: Inter SemiBold 18px, `ink`
- Relación con el 650: Inter Regular 14px, `slate`, 1 línea
- Link: "Ver guía →" en Inter Medium 14px, `ulpiano-green`

| Card | Número | Nombre | Relación |
|---|---|---|---|
| 1 | 660 | Declaración / Inventario | Acompaña siempre al Modelo 650 |
| 2 | 651 | Donaciones | Si la transmisión es inter vivos, no mortis causa |
| 3 | 652 | Seguros de Vida | Si el beneficiario del seguro tributa aparte |
| 4 | 653 | Consolidación de Dominio | Cuando se extingue el usufructo constituido en la sucesión |

---

### SECCIÓN 8: CTA FINAL

**Fondo:** `var(--night)` con gradiente sutil (`linear-gradient(180deg, #0F1F3D 0%, #142647 100%)`)
**Padding:** `var(--space-20)` top/bottom

```
[H2 — DM Sans Bold, 36→28px, white, centrado, max-width 640px]
El Modelo 650 de cada heredero. Calculado, generado y listo para presentar.

[Subtítulo — Inter Regular, 17px, rgba(255,255,255,0.75), centrado, max-width 560px]
Solicita una demo y comprueba cómo Ulpiano genera la autoliquidación
de cada beneficiario desde los datos del expediente sucesorio.

[CTAs — flex, gap 16px, centrado]
[Solicita tu demo]     ← ButtonPrimary → /demo
[Ver motor fiscal →]   ← ButtonGhost → /soluciones/fiscalidad-sucesoria
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado 1 col. Hero padding reducido. Embudo fiscal scroll horizontal. Model nav horizontal scrollable. Cards full-width. |
| Tablet (768px–1023px) | Grid obligados 2 col + 1. Sección 5 stack. Modelos relacionados 2x2. |
| Desktop (≥1024px) | Grid obligados 3 col. Sección 5 dos columnas. Modelos relacionados 4 col. |

---

## 4. COMPONENTES REUTILIZABLES

| Componente | Uso en esta página |
|---|---|
| `<Header />` | Nav global |
| `<Footer />` | Footer global |
| `<Container>` | Wrapper max-width 1200px |
| `<Section>` | Padding y fondo por sección |
| `<ButtonPrimary>` | CTAs a /demo |
| `<ButtonGhost>` | CTAs secundarios |
| `<Eyebrow>` | Labels de sección |
| `<ScrollReveal>` | Animación por sección |
| `ModelBreadcrumb` | Breadcrumbs del silo |
| `ModelNav` | Navegación entre modelos |
| `ModelHero` | Hero con número decorativo |
| `FiscalFunnel` | Embudo fiscal visual |
| `ModelSummaryTable` | Ficha técnica del modelo |
| `FaqAccordion` | Preguntas frecuentes con schema |
| `RelatedModels` | Grid de modelos relacionados |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Modelo 650: Autoliquidación del Impuesto sobre Sucesiones | Guía Completa — Ulpiano",
  description:
    "Guía completa del Modelo 650: qué es, quién lo presenta, plazo de 6 meses, reducciones catalanas (Llei 19/2010), cálculo de la cuota y cómo Ulpiano lo genera automáticamente desde el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-650",
  },
};
```

**Schema FAQPage:** Inyectar JSON-LD con las 6 preguntas de la sección FAQ.

**Keywords objetivo:**
- Principal: "modelo 650 herencia"
- Secundarias: "autoliquidación impuesto sucesiones", "modelo 650 Catalunya", "rellenar modelo 650", "plazo modelo 650", "reducciones sucesiones Catalunya"

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

### Tono

Esta página es **informativo-técnica con transición a producto**. La primera mitad (secciones 1-4) tiene tono de guía fiscal rigurosa: cita normativa, usa terminología precisa, no vende. La segunda mitad (secciones 5-8) introduce Ulpiano como la solución natural, manteniendo el mismo rigor.

### Reglas específicas

- **Citar siempre la base legal**: no decir "se aplican reducciones"; decir "se aplican las reducciones del Art. 2 de la Llei 19/2010"
- **Cifras reales del ejemplo**: usar el caso de €385.000 de base imponible (consistente con el ejemplo que ya aparece en `/soluciones/fiscalidad-sucesoria`)
- **No usar "fácil", "simple" ni "en un clic"**: el profesional fiscal sabe que el ISD no es simple. Ulpiano lo estructura, no lo simplifica
- **"Genera" y "calcula", no "automatiza"**: la palabra "automatiza" es demasiado genérica para el contexto fiscal
- **Ulpiano como nombre propio**: siempre "Ulpiano", nunca "ulpiano.es" ni "la herramienta"

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Mockup del Modelo 650 generado | HTML/CSS (no imagen) | Construir con JSX | Alta |
| Embudo fiscal visual | Componente `FiscalFunnel` | Construir con JSX | Alta |
| Iconos para bloques de obligados | lucide-react (users, gift, shield) | Disponibles | Resuelta |
| Schema FAQPage JSON-LD | Script en `<head>` | Construir | Alta |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero con breadcrumb, model nav, número decorativo, H1 informativo
- [ ] Tabla resumen (ficha técnica) con base legal correcta
- [ ] 3 bloques de obligados tributarios con card treatment
- [ ] Alerta de extemporaneidad con recargos Art. 27 LGT
- [ ] Embudo fiscal visual con números coherentes y normativa citada
- [ ] Tabla de reducciones catalanas completa (Llei 19/2010)
- [ ] Sección "Cómo Ulpiano lo genera" con mockup y 3 puntos de valor
- [ ] 6 preguntas FAQ con accordion y schema FAQPage
- [ ] 4 modelos relacionados con relación contextual
- [ ] CTA final con doble botón
- [ ] Responsive mobile / tablet / desktop
- [ ] Scroll reveal en cada sección
- [ ] Copy sin "fácil", "simple", "automatiza", "ulpiano.es"
- [ ] Normativa citada verificada
- [ ] Metadata SEO + canonical correctos

---

## 9. RELACIÓN CON OTRAS PÁGINAS

### Desde esta página

| Hacia | Contexto |
|---|---|
| `/modelos/modelo-660` | "El Modelo 660 acompaña siempre al 650" — link en sección 2 y modelos relacionados |
| `/modelos/modelo-651` | "Si la transmisión es inter vivos" — modelos relacionados |
| `/modelos/modelo-652` | "Si hay seguro de vida" — sección 3 (obligados) y modelos relacionados |
| `/modelos/modelo-653` | "Cuando se extingue el usufructo" — modelos relacionados |
| `/soluciones/fiscalidad-sucesoria` | "Ver motor fiscal completo" — CTA secundario |
| `/soluciones/documentacion-sucesoria` | "Ver todos los documentos que genera Ulpiano" — link contextual |
| `/demo` | CTA principal |

### Hacia esta página

| Desde | Acción |
|---|---|
| `/soluciones/fiscalidad-sucesoria` | Añadir link en output "Modelo 650 autocompleto" |
| `/soluciones/documentacion-sucesoria` | Añadir link en bloque Modelo 650 del catálogo |
| `/modelos/` (hub) | Card del Modelo 650 |
| `/modelos/modelo-660` | Cross-link "acompaña al 650" |
