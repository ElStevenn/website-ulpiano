# PROMPT DE DISEÑO — Página `/modelos/modelo-652`

> **Tipo de página:** SEO informativo-transaccional (Modelo fiscal)
> **URL:** `/modelos/modelo-652`
> **Silo:** `/modelos/*` (Modelos de Impuestos)
> **Prioridad:** Media — complementa al 650 en sucesiones con seguros
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Qué es esta página?

Una guía sobre el Modelo 652 (Autoliquidación de Seguros de Vida vinculados a sucesiones). El visitante llega buscando "modelo 652 seguros vida herencia" o "tributación seguro vida sucesiones" y encuentra información fiscal que explica cuándo y por qué se presenta un formulario separado del 650 para los seguros de vida.

### ¿Por qué un modelo separado para seguros de vida?

En una sucesión, el capital percibido por el beneficiario de un seguro de vida no forma parte del caudal hereditario: es una percepción directa del contrato de seguro. Cuando el beneficiario no coincide con el tomador del seguro (caso habitual: el causante contrata el seguro y designa al cónyuge como beneficiario), la percepción tributa por ISD pero con una liquidación separada que se formaliza en el Modelo 652.

Lee `PROMPT_ARQUITECTURA_MODELOS.md` para la arquitectura del silo, `product-marketing-context.md` para el contexto de producto.

---

## 1. ESTRUCTURA DE SECCIONES

```
/modelos/modelo-652

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO INFORMATIVO (fondo night)           │
│ Breadcrumb + Model Nav + Número "652" decorativo    │
│ H1: Modelo 652 — Autoliquidación de Seguros de Vida │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: QUÉ ES EL MODELO 652 (fondo white)       │
│ Explicación + tabla resumen + diferencia con el 650 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: CUÁNDO SE PRESENTA (fondo surface)        │
│ Supuestos de presentación + casuística              │
│ Cuándo SÍ y cuándo NO se presenta el 652            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: CONTENIDO — BASE IMPONIBLE (fondo white)  │
│ Cálculo específico del seguro de vida               │
│ Reducciones aplicables                               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CÓMO ULPIANO LO INTEGRA (fondo surface)  │
│ Seguro de vida dentro del expediente sucesorio      │
│ CTA: "Solicita tu demo"                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 6: PREGUNTAS FRECUENTES (fondo white)       │
│ 5 preguntas en accordion + schema FAQPage           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 7: MODELOS RELACIONADOS (fondo surface)      │
│ Cards: 650 (sucesiones), 660 (inventario)           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 8: CTA FINAL (fondo night)                   │
└─────────────────────────────────────────────────────┘
```

---

## 2. ESPECIFICACIÓN POR SECCIÓN

---

### SECCIÓN 1: HERO INFORMATIVO

**Fondo:** `var(--night)` (#0F1F3D)

**Breadcrumb:** `Inicio › Modelos › Modelo 652`
**Model Nav:** 650, 651, **652 (activo)**, 653, 660
**Número decorativo:** "652" — JetBrains Mono 120px, `rgba(255,255,255,0.06)`

```
[Eyebrow] MODELO FISCAL

[H1 — DM Sans Bold, 56→42→32px, white, max-width 720px]
Modelo 652: Autoliquidación de Seguros de Vida

[Subtítulo — Inter Regular, 17px, rgba(255,255,255,0.75), max-width 600px]
El Modelo 652 es el formulario de autoliquidación del ISD que debe
presentar el beneficiario de un seguro de vida cuando percibe el capital
por causa de fallecimiento del asegurado y el contratante es persona
distinta del beneficiario.

[Badge]
Tributación separada del caudal hereditario
```

---

### SECCIÓN 2: QUÉ ES EL MODELO 652

**Fondo:** `var(--white)` (#FFFFFF)

**Eyebrow:** "DEFINICIÓN"
**H2:** "¿Qué es el Modelo 652?"

**Contenido (prosa, max-width 720px):**

El Modelo 652 recoge la autoliquidación del Impuesto sobre Sucesiones y Donaciones correspondiente a las cantidades percibidas por el beneficiario de un contrato de seguro de vida cuando se produce el fallecimiento del asegurado.

La particularidad del seguro de vida en el contexto sucesorio es que el capital percibido por el beneficiario no forma parte de la masa hereditaria. No es un bien del causante que se transmite a los herederos: es una prestación que nace directamente del contrato de seguro. Por eso tributa de forma separada y tiene su propio modelo de autoliquidación.

En la práctica, el Modelo 652 se presenta junto con el Modelo 650 (autoliquidación de la herencia) y el Modelo 660 (inventario), pero su cálculo es independiente. El beneficiario del seguro puede ser heredero a la vez — en ese caso presentará tanto el 650 (por su porción hereditaria) como el 652 (por el capital del seguro).

**Tabla resumen:**

| Campo | Valor |
|---|---|
| **Denominación oficial** | Autoliquidación del ISD — Seguros de vida |
| **Base legal estatal** | Art. 9.c) LISD + Art. 39 RISD |
| **Base legal autonómica (Catalunya)** | Llei 19/2010 (reducciones y bonificaciones autonómicas aplicables) |
| **Hecho imponible** | Percepción de cantidades por el beneficiario de un seguro de vida por causa de muerte del asegurado, cuando el contratante es distinto del beneficiario |
| **Sujeto pasivo** | El beneficiario del seguro |
| **Plazo de presentación** | 6 meses desde el fallecimiento del asegurado |
| **Administración competente** | CA de residencia habitual del causante/asegurado (ATC en Catalunya) |
| **Presenta junto a** | Modelo 650 y Modelo 660 (si el beneficiario es también heredero) |

---

### SECCIÓN 3: CUÁNDO SE PRESENTA EL 652

**Fondo:** `var(--surface)` (#F1F5F9)

**Eyebrow:** "SUPUESTOS"
**H2:** "¿Cuándo se presenta el Modelo 652 y cuándo no?"

**Layout:** 2 bloques lado a lado (desktop), stack (mobile)

**Bloque izquierdo — "Se presenta el 652 cuando..."**
Fondo white, borde izquierdo 3px `ulpiano-green`, padding var(--space-6)

- El asegurado fallece y el beneficiario designado es una persona distinta del contratante del seguro
- El cónyuge es beneficiario del seguro de vida del causante
- Un hijo es beneficiario de un seguro contratado por el padre fallecido
- Hay varios beneficiarios designados para un mismo seguro (cada uno presenta su propio 652)

**Bloque derecho — "NO se presenta el 652 cuando..."**
Fondo white, borde izquierdo 3px `#991B1B` (error), padding var(--space-6)

- El contratante del seguro y el beneficiario son la misma persona (tributa por IRPF, no por ISD)
- El seguro se percibe por causa distinta del fallecimiento (vencimiento, rescate) — tributa por IRPF
- El beneficiario renuncia al capital del seguro

**Nota aclaratoria (debajo):**

> Cuando el beneficiario del seguro es también heredero, la percepción del seguro NO se suma a su porción hereditaria. Tributa por separado: el 650 liquida la herencia y el 652 liquida el seguro. Sin embargo, las reducciones por parentesco se aplican en ambos.

---

### SECCIÓN 4: CONTENIDO — BASE IMPONIBLE Y CÁLCULO

**Fondo:** `var(--white)` (#FFFFFF)

**Eyebrow:** "CÁLCULO"
**H2:** "Cómo se calcula la cuota del Modelo 652"

**Embudo fiscal:**

```
Capital percibido del seguro   € 150.000,00   ← Importe total de la prestación
─────────────────────────────────────────────
- Reducción parentesco        -€ 100.000,00   ← Art. 2 Llei 19/2010 (Grupo II, cónyuge)
- Reducción seguros de vida   -€   9.195,49   ← Art. 10 Llei 19/2010 (100%, máx. 9.195,49€)
─────────────────────────────────────────────
= Base liquidable              €  40.804,51
─────────────────────────────────────────────
× Tarifa progresiva            €   3.264,45   ← Escala Art. 57 LISD
× Coeficiente multiplicador         × 1,0000  ← Grupo II, patrimonio < 500.000€
─────────────────────────────────────────────
= Cuota íntegra                €   3.264,45
- Bonificación cónyuge        -€   3.231,81   ← Art. 12 Llei 19/2010 (99%)
─────────────────────────────────────────────
= CUOTA A INGRESAR             €      32,65
```

**Texto explicativo:**

**Base imponible del seguro** — La base imponible del Modelo 652 es el capital total percibido por el beneficiario. No se deduce la parte de prima pagada por el contratante (a diferencia de IRPF).

**Reducción específica de seguros** — La Llei 19/2010 (Art. 10) establece una reducción del 100% del capital percibido con un límite de 9.195,49€. Esta reducción es adicional a la reducción por parentesco.

**Bonificación** — Se aplican las mismas bonificaciones en cuota que para sucesiones. El cónyuge o pareja estable goza del 99% de bonificación, lo que reduce significativamente la cuota.

---

### SECCIÓN 5: CÓMO ULPIANO LO INTEGRA

**Fondo:** `var(--surface)` (#F1F5F9)

**Eyebrow:** "CON ULPIANO"
**H2:** "El seguro de vida, integrado en el expediente sucesorio"

**Layout:** 2 columnas desktop (55% copy, 45% mockup)

**3 puntos de valor:**

1. **El seguro de vida como categoría del inventario**
   "Al registrar el patrimonio del causante en Ulpiano, los seguros de vida se incluyen como una categoría propia. El sistema identifica automáticamente qué beneficiarios necesitan presentar un Modelo 652 además de su 650."

2. **Cálculo separado, datos conectados**
   "La reducción por parentesco del beneficiario se aplica tanto al 650 (herencia) como al 652 (seguro). Ulpiano mantiene la coherencia entre ambas liquidaciones sin duplicar datos."

3. **Un expediente, todos los modelos**
   "Si hay 3 herederos y uno de ellos es además beneficiario del seguro, Ulpiano genera 3 Modelos 650, 1 Modelo 660 y 1 Modelo 652. Cada uno con sus datos específicos."

**CTA:**
- Primario: "Solicita tu demo" → `/demo`
- Secundario: "Ver motor fiscal completo →" → `/soluciones/fiscalidad-sucesoria`

---

### SECCIÓN 6: PREGUNTAS FRECUENTES

**5 preguntas:**

**P1: ¿El seguro de vida forma parte de la herencia?**
R: No en sentido estricto. El capital del seguro de vida no forma parte de la masa hereditaria: es una prestación que nace del contrato de seguro a favor del beneficiario designado. Sin embargo, tributa por el Impuesto sobre Sucesiones (no por IRPF) y se liquida con el Modelo 652.

**P2: ¿El beneficiario del seguro puede ser también heredero?**
R: Sí. En ese caso presenta dos autoliquidaciones: el Modelo 650 por su porción hereditaria y el Modelo 652 por el capital del seguro. Cada liquidación tiene su propia base imponible y su propio cálculo.

**P3: ¿Se aplican las mismas reducciones que en el Modelo 650?**
R: Se aplican las reducciones por parentesco (Art. 2 Llei 19/2010) y existe una reducción específica para seguros de vida (Art. 10: 100%, máx. 9.195,49€). También se aplican las bonificaciones en cuota (Art. 12).

**P4: ¿Qué pasa si hay varios beneficiarios del mismo seguro?**
R: Cada beneficiario presenta su propio Modelo 652 por la parte del capital que le corresponde según la designación del contrato de seguro.

**P5: ¿El seguro de vida tributa siempre por ISD?**
R: Solo cuando el fallecimiento del asegurado es el evento que desencadena la percepción y el contratante es distinto del beneficiario. Si el contratante y el beneficiario son la misma persona, la prestación tributa por IRPF (rendimientos del capital mobiliario o ganancia patrimonial).

---

### SECCIÓN 7: MODELOS RELACIONADOS

**3 cards:**

| Card | Número | Nombre | Relación |
|---|---|---|---|
| 1 | 650 | Sucesiones | Liquidación principal de la herencia — se presenta junto al 652 |
| 2 | 660 | Inventario | El inventario de bienes que acompaña al 650 y contextualiza al 652 |
| 3 | 653 | Consolidación de Dominio | Si el usufructo del cónyuge recae también sobre el capital del seguro |

---

### SECCIÓN 8: CTA FINAL

```
[H2] Cada modelo del expediente, generado desde los mismos datos.

[Subtítulo] Solicita una demo y comprueba cómo Ulpiano genera los Modelos 650,
652 y 660 de cada beneficiario desde un único expediente sucesorio.

[CTAs]
[Solicita tu demo]           ← ButtonPrimary → /demo
[Ver motor fiscal →]         ← ButtonGhost → /soluciones/fiscalidad-sucesoria
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado 1 col. Bloques "se presenta / no se presenta" apilados. Embudo fiscal scroll horizontal. |
| Tablet (768px–1023px) | Bloques lado a lado. Sección 5 stack. |
| Desktop (≥1024px) | Layout completo. Sección 5 dos columnas. |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Modelo 652: Autoliquidación de Seguros de Vida | Guía Completa — Ulpiano",
  description:
    "Guía del Modelo 652: cuándo se presenta, quién es el sujeto pasivo, cálculo de la cuota del seguro de vida en sucesiones y cómo Ulpiano lo integra en el expediente sucesorio.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-652",
  },
};
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

Mismas reglas que el resto del silo (ver `PROMPT_MODELO_650.md`).

**Nota específica del 652:** La casuística del seguro de vida es compleja y genera muchas dudas al profesional (¿forma parte de la herencia? ¿tributa por IRPF o ISD? ¿se acumula a la porción hereditaria?). El tono de esta página debe ser especialmente claro y didáctico, sin perder rigor. Los bloques "se presenta / no se presenta" son clave para resolver la duda rápidamente.

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero con breadcrumb, model nav, número decorativo
- [ ] Ficha técnica con Art. 9.c) LISD y Art. 39 RISD
- [ ] Bloques de casuística (cuándo sí / cuándo no)
- [ ] Embudo fiscal con ejemplo de seguro de vida (€150.000)
- [ ] Reducción específica de seguros (Art. 10 Llei 19/2010, máx. 9.195,49€)
- [ ] 3 puntos de valor de Ulpiano + mockup
- [ ] 5 preguntas FAQ con schema FAQPage
- [ ] 3 modelos relacionados
- [ ] CTA final
- [ ] Responsive
- [ ] Copy revisado

---

## 9. RELACIÓN CON OTRAS PÁGINAS

| Hacia | Contexto |
|---|---|
| `/modelos/modelo-650` | "Liquidación principal de la herencia" |
| `/modelos/modelo-660` | "Inventario que contextualiza al 652" |
| `/soluciones/fiscalidad-sucesoria` | "Motor fiscal completo" |
| `/soluciones/planificacion-sucesoria` | "Inventario de seguros de vida" |
| `/demo` | CTA principal |
