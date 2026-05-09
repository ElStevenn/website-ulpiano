# PROMPT DE DISEÑO — Página `/modelos/modelo-653`

> **Tipo de página:** SEO informativo-transaccional (Modelo fiscal)
> **URL:** `/modelos/modelo-653`
> **Silo:** `/modelos/*` (Modelos de Impuestos)
> **Prioridad:** Media — relevante en sucesiones con usufructo
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Qué es esta página?

Una guía sobre el Modelo 653 (Consolidación de Dominio). El visitante busca "modelo 653 consolidación dominio" o "extinción usufructo herencia" y necesita entender cuándo, cómo y por qué se presenta este modelo fiscal específico.

### ¿Por qué es relevante para Ulpiano?

La consolidación de dominio se produce cuando se extingue un usufructo previamente constituido en una sucesión (caso muy frecuente: usufructo universal al cónyuge viudo que se extingue a su fallecimiento). Ulpiano permite modelar escenarios de usufructo en el Planificador de Herencias y calcular el impacto fiscal futuro de la consolidación antes de que ocurra. Esta es una funcionalidad de planificación pre-mortem que conecta directamente con la simulación de escenarios.

Lee `PROMPT_ARQUITECTURA_MODELOS.md` para la arquitectura del silo, `product-marketing-context.md` para el contexto de producto.

---

## 1. ESTRUCTURA DE SECCIONES

```
/modelos/modelo-653

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO INFORMATIVO (fondo night)           │
│ Breadcrumb + Model Nav + Número "653" decorativo    │
│ H1: Modelo 653 — Consolidación de Dominio           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: QUÉ ES EL MODELO 653 (fondo white)       │
│ Explicación del concepto de consolidación +          │
│ tabla resumen                                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: CUÁNDO SE PRODUCE (fondo surface)         │
│ Supuestos de extinción del usufructo                │
│ Diagrama temporal: sucesión → usufructo →            │
│ consolidación                                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: CONTENIDO — EL CÁLCULO (fondo white)     │
│ Cuota complementaria por consolidación              │
│ Normas de valoración del usufructo                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CÓMO ULPIANO LO MODELA (fondo surface)   │
│ Escenarios de usufructo + previsión de              │
│ consolidación futura                                │
│ CTA: "Solicita tu demo"                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 6: PREGUNTAS FRECUENTES (fondo white)       │
│ 5 preguntas en accordion + schema FAQPage           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 7: MODELOS RELACIONADOS (fondo surface)      │
│ Cards: 650 (sucesión original), 660 (inventario)    │
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

**Breadcrumb:** `Inicio › Modelos › Modelo 653`
**Model Nav:** 650, 651, 652, **653 (activo)**, 660
**Número decorativo:** "653" — JetBrains Mono 120px, `rgba(255,255,255,0.06)`

```
[Eyebrow] MODELO FISCAL

[H1 — DM Sans Bold, 56→42→32px, white, max-width 720px]
Modelo 653: Consolidación de Dominio

[Subtítulo — Inter Regular, 17px, rgba(255,255,255,0.75), max-width 600px]
El Modelo 653 es el formulario que liquida la cuota complementaria
del ISD cuando se extingue un usufructo previamente constituido
en una sucesión. El nudo propietario consolida el pleno dominio
y debe tributar por la diferencia.

[Badge]
Relevante en sucesiones con usufructo al cónyuge viudo
```

---

### SECCIÓN 2: QUÉ ES EL MODELO 653

**Fondo:** `var(--white)` (#FFFFFF)

**Eyebrow:** "DEFINICIÓN"
**H2:** "¿Qué es la consolidación de dominio?"

**Contenido (prosa, max-width 720px):**

Cuando una persona fallece y deja parte de sus bienes en usufructo (típicamente al cónyuge viudo) y la nuda propiedad a los herederos, se produce un desmembramiento del dominio. El heredero recibe la nuda propiedad y tributa por ella en el Modelo 650, mientras el usufructuario disfruta del bien sin pagar ISD (porque el usufructo se computa como parte del caudal del causante, no como adquisición separada del usufructuario cónyuge).

Cuando el usufructo se extingue — habitualmente por fallecimiento del usufructuario — el nudo propietario consolida el pleno dominio. En ese momento debe presentar el Modelo 653 para liquidar la cuota complementaria: la diferencia entre lo que tributó por la nuda propiedad y lo que correspondería tributar por el pleno dominio.

**Tabla resumen:**

| Campo | Valor |
|---|---|
| **Denominación oficial** | Consolidación de dominio por extinción de usufructo |
| **Base legal estatal** | Art. 26.c) LISD + Art. 51.2 RISD |
| **Base legal autonómica (Catalunya)** | Llei 19/2010 (aplicable la normativa vigente en el momento de la consolidación) |
| **Hecho imponible** | Extinción del usufructo y consolidación del pleno dominio en el nudo propietario |
| **Sujeto pasivo** | El nudo propietario que consolida el dominio |
| **Plazo de presentación** | 6 meses desde la extinción del usufructo (habitualmente, fallecimiento del usufructuario) |
| **Administración competente** | ATC en Catalunya |
| **Vinculado a** | Modelo 650 original (liquidación de la nuda propiedad en la sucesión) |

---

### SECCIÓN 3: CUÁNDO SE PRODUCE LA CONSOLIDACIÓN

**Fondo:** `var(--surface)` (#F1F5F9)

**Eyebrow:** "SUPUESTOS"
**H2:** "¿Cuándo se extingue el usufructo y se presenta el Modelo 653?"

**Diagrama temporal (componente visual):**

```
────────────────────────────────────────────────────────────────
│ AÑO 0                    │ AÑO X                            │
│ Fallecimiento causante    │ Fallecimiento usufructuario      │
│                           │                                   │
│ ┌─ Modelo 650 ──────────┐│ ┌─ Modelo 653 ──────────────────┐│
│ │ Heredero tributa por   ││ │ Heredero tributa la cuota     ││
│ │ nuda propiedad         ││ │ complementaria por el pleno   ││
│ │ (valor × % edad)       ││ │ dominio                       ││
│ └────────────────────────┘│ └────────────────────────────────┘│
│                           │                                   │
│ ┌─ Usufructo ───────────────────────────────┐                │
│ │ Cónyuge viudo disfruta el bien            │                │
│ └───────────────────────────────────────────┘                │
────────────────────────────────────────────────────────────────
```

- Implementar como flex row con bloques de color y flechas
- Fondo white para los bloques, border `mist`, border-radius 8px
- Línea del usufructo: border-bottom 3px dashed `ulpiano-green`
- Mobile: stack vertical con indicación temporal

**Causas de extinción del usufructo:**

Grid 2x2 (desktop), stack (mobile). Cada bloque: card ligera (borde mist, padding var(--space-4)).

1. **Fallecimiento del usufructuario** — Causa más frecuente. El nudo propietario consolida el pleno dominio y presenta el 653.

2. **Renuncia del usufructuario** — El usufructuario renuncia voluntariamente a su derecho. La consolidación se produce inmediatamente.

3. **Cumplimiento del plazo** — Si el usufructo era temporal (constituido por un número determinado de años), se extingue al vencimiento.

4. **Reunión de usufructo y nuda propiedad** — Si el nudo propietario adquiere el usufructo por otro título (donación, compraventa), se consolida el dominio.

---

### SECCIÓN 4: CONTENIDO — EL CÁLCULO

**Fondo:** `var(--white)` (#FFFFFF)

**Eyebrow:** "CÁLCULO"
**H2:** "Cómo se calcula la cuota complementaria del Modelo 653"
**Subtítulo:** "La cuota del 653 es la diferencia entre lo que se habría tributado por el pleno dominio y lo que ya se tributó por la nuda propiedad en el Modelo 650 original."

**Explicación del cálculo:**

El Art. 51.2 del RISD establece las reglas de liquidación de la consolidación:

1. Se toma el **valor del bien en el momento de la desmembración** (fecha de fallecimiento del primer causante)
2. Se aplica la **normativa vigente en el momento de la consolidación** (no la del primer fallecimiento)
3. Se calcula la **cuota que correspondería al pleno dominio**
4. Se **resta la cuota ya pagada** por la nuda propiedad en el Modelo 650

**Bloque de cálculo:**

```
Valor del bien (fecha desmembración)             € 425.000,00
─────────────────────────────────────────────────────────────
Cuota como pleno dominio (normativa actual)       €  12.400,00
- Cuota ya pagada por nuda propiedad (M650)      -€   4.960,00
─────────────────────────────────────────────────────────────
= CUOTA COMPLEMENTARIA (M653)                     €   7.440,00
```

**Nota sobre la valoración del usufructo:**

> El valor del usufructo vitalicio se calcula según el Art. 26 LISD: el 70% del valor total del bien menos un 1% por cada año que exceda de 19 el usufructuario. El valor de la nuda propiedad es la diferencia: 100% - % usufructo.
>
> Ejemplo: usufructuario de 70 años → % usufructo = 70 - (70-19) = 19% → nuda propiedad = 81%.
>
> A efectos del Modelo 653, la cuota complementaria se calcula sobre la diferencia entre el pleno dominio (100%) y lo ya tributado por la nuda propiedad.

Fondo `surface`, border-radius 12px, padding var(--space-6). Inter Regular 15px.

---

### SECCIÓN 5: CÓMO ULPIANO LO MODELA

**Fondo:** `var(--surface)` (#F1F5F9)

**Eyebrow:** "CON ULPIANO"
**H2:** "El impacto fiscal de la consolidación, calculado antes de que ocurra"

**Layout:** 2 columnas desktop (55% copy, 45% mockup)

**3 puntos de valor:**

1. **Simulación de escenarios con usufructo**
   "Al configurar el escenario sucesorio en Ulpiano, el profesional puede asignar usufructo al cónyuge y ver cómo tributa la nuda propiedad (650) y cuánto tributará la consolidación futura (653). Todo sobre los mismos datos del expediente."

2. **Comparación: usufructo vs. pleno dominio directo**
   "¿Conviene dejar el usufructo al cónyuge o adjudicar el pleno dominio directamente a los hijos? Ulpiano calcula ambas opciones en paralelo para que el cliente decida con números reales."

3. **Trazabilidad entre la sucesión original y la consolidación**
   "Cuando se produzca la consolidación, los datos del expediente original están en Ulpiano: el valor de desmembración, la cuota pagada por la nuda propiedad, las reducciones aplicadas. El cálculo del 653 parte de datos ya verificados."

**CTA:**
- Primario: "Solicita tu demo" → `/demo`
- Secundario: "Ver simulación de escenarios →" → `/soluciones/planificacion-sucesoria`

**Mockup (columna derecha):**
Ventana simulada: "Comparativa de escenarios — Expediente 2024-0156"
- Escenario A: "Usufructo cónyuge" → Cuota 650: `€ 4.960` + Cuota 653 futura: `€ 7.440`
- Escenario B: "Pleno dominio a hijos" → Cuota 650: `€ 12.400`
- Badge: "Coste fiscal total Esc. A: € 12.400 | Esc. B: € 12.400"

---

### SECCIÓN 6: PREGUNTAS FRECUENTES

**5 preguntas:**

**P1: ¿Qué normativa se aplica al Modelo 653: la del primer fallecimiento o la de la consolidación?**
R: La normativa vigente en el momento de la consolidación (extinción del usufructo). Sin embargo, el valor de los bienes que se toma como referencia es el de la fecha de la desmembración (primer fallecimiento). Esta combinación — valor antiguo, normativa actual — es lo que define el cálculo del 653 (Art. 51.2 RISD).

**P2: ¿Hay que presentar un nuevo Modelo 660 junto al 653?**
R: No. El Modelo 653 es una liquidación complementaria que se refiere a bienes ya inventariados en el Modelo 660 original. No se presenta un nuevo inventario.

**P3: ¿Se pueden aplicar las reducciones catalanas al Modelo 653?**
R: Se aplican las reducciones y bonificaciones vigentes en el momento de la consolidación. Si la normativa catalana ha cambiado entre el primer fallecimiento y la extinción del usufructo, se aplica la nueva normativa.

**P4: ¿Cuánto tiempo puede pasar entre el Modelo 650 y el 653?**
R: No hay límite. Si el usufructuario es el cónyuge viudo de 60 años, la consolidación puede tardar 20 o 30 años en producirse. Durante todo ese tiempo, el nudo propietario tiene la obligación latente de presentar el 653 cuando el usufructo se extinga.

**P5: ¿Ulpiano puede calcular la cuota del 653 antes de que se produzca la consolidación?**
R: Sí. En la fase de planificación sucesoria, Ulpiano simula el impacto fiscal de constituir usufructo y estima la cuota complementaria del 653 según la normativa actual. Esto permite al profesional presentar al cliente el coste fiscal total del escenario con usufructo frente a otras alternativas.

---

### SECCIÓN 7: MODELOS RELACIONADOS

**3 cards:**

| Card | Número | Nombre | Relación |
|---|---|---|---|
| 1 | 650 | Sucesiones | La liquidación original por la nuda propiedad |
| 2 | 660 | Inventario | El inventario de la sucesión original |
| 3 | 652 | Seguros de Vida | Si el usufructo recae sobre capital de un seguro |

---

### SECCIÓN 8: CTA FINAL

```
[H2] El coste fiscal del usufructo, calculado antes de constituirlo.

[Subtítulo] Solicita una demo y comprueba cómo Ulpiano simula escenarios
de usufructo y calcula la cuota complementaria de consolidación.

[CTAs]
[Solicita tu demo]                     ← ButtonPrimary → /demo
[Ver planificación sucesoria →]        ← ButtonGhost → /soluciones/planificacion-sucesoria
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Diagrama temporal stack vertical. Grid causas 1 col. Embudo scroll horizontal. |
| Tablet (768px–1023px) | Diagrama temporal compacto. Causas 2x2. Sección 5 stack. |
| Desktop (≥1024px) | Layout completo. Diagrama temporal horizontal. Sección 5 dos columnas. |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Modelo 653: Consolidación de Dominio por Extinción de Usufructo | Guía Completa — Ulpiano",
  description:
    "Guía del Modelo 653: qué es la consolidación de dominio, cuándo se extingue el usufructo, cómo se calcula la cuota complementaria y cómo Ulpiano simula el impacto fiscal antes de que ocurra.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-653",
  },
};
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

Mismas reglas que el resto del silo (ver `PROMPT_MODELO_650.md`).

**Nota específica del 653:** Este es el modelo más técnico del silo. El concepto de consolidación de dominio no es intuitivo para todos los profesionales. La explicación debe ser especialmente clara: usar el diagrama temporal como ancla visual y el ejemplo numérico como referencia. El diferenciador de Ulpiano aquí es la simulación prospectiva: calcular hoy lo que tributará mañana.

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero con breadcrumb, model nav, número decorativo
- [ ] Ficha técnica con Art. 26.c) LISD y Art. 51.2 RISD
- [ ] Diagrama temporal sucesión → usufructo → consolidación
- [ ] 4 causas de extinción del usufructo
- [ ] Cálculo con cuota complementaria (pleno dominio - nuda propiedad)
- [ ] Nota de valoración del usufructo (Art. 26 LISD)
- [ ] 3 puntos de valor de Ulpiano (simulación prospectiva)
- [ ] Mockup de comparativa usufructo vs. pleno dominio
- [ ] 5 preguntas FAQ con schema
- [ ] 3 modelos relacionados
- [ ] CTA final
- [ ] Responsive
- [ ] Copy revisado

---

## 9. RELACIÓN CON OTRAS PÁGINAS

| Hacia | Contexto |
|---|---|
| `/modelos/modelo-650` | "Liquidación original de la nuda propiedad" |
| `/modelos/modelo-660` | "Inventario de la sucesión original" |
| `/soluciones/planificacion-sucesoria` | "Simulación de escenarios de usufructo" |
| `/soluciones/fiscalidad-sucesoria` | "Motor fiscal completo" |
| `/demo` | CTA principal |
