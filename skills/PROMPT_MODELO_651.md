# PROMPT DE DISEÑO — Página `/modelos/modelo-651`

> **Tipo de página:** SEO informativo-transaccional (Modelo fiscal)
> **URL:** `/modelos/modelo-651`
> **Silo:** `/modelos/*` (Modelos de Impuestos)
> **Prioridad:** Media — amplía cobertura del silo a donaciones
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Qué es esta página?

Una guía sobre el Modelo 651 (Autoliquidación del Impuesto de Donaciones) orientada al profesional que gestiona transmisiones inter vivos a título gratuito. El visitante llega buscando "modelo 651 donaciones" o "impuesto donaciones Catalunya" y encuentra información fiscal rigurosa que posiciona a Ulpiano como la plataforma que permite comparar el impacto fiscal de una donación frente a una sucesión.

### Conexión con Ulpiano

El Modelo 651 es relevante porque Ulpiano ya ofrece **simulación comparativa entre herencia y donación en vida** como funcionalidad del Planificador de Herencias (ver `MAPEO_PAGINAS_CONTENIDOS.md`, sección de Fiscalidad: "Herencia directa vs. donación en vida vs. usufructo al cónyuge — impacto fiscal de cada opción en paralelo"). Esta página conecta esa funcionalidad con la duda fiscal real del profesional.

Lee `PROMPT_ARQUITECTURA_MODELOS.md` para la arquitectura del silo, `product-marketing-context.md` para el contexto de producto.

---

## 1. ESTRUCTURA DE SECCIONES

```
/modelos/modelo-651

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO INFORMATIVO (fondo night)           │
│ Breadcrumb + Model Nav + Número "651" decorativo    │
│ H1: Modelo 651 — Autoliquidación del Impuesto       │
│ de Donaciones                                       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: QUÉ ES EL MODELO 651 (fondo white)       │
│ Explicación + tabla resumen (ficha técnica)         │
│ Diferencia clave con el 650: inter vivos vs mortis  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: QUIÉN ESTÁ OBLIGADO (fondo surface)      │
│ Donatario como sujeto pasivo + tipos de donación    │
│ Plazo: 30 días hábiles                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: CONTENIDO — EL CÁLCULO (fondo white)     │
│ Embudo fiscal de donaciones + reducciones            │
│ catalanas específicas                                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: DONACIÓN VS. HERENCIA (fondo surface)    │
│ Tabla comparativa: cuándo conviene donar vs.        │
│ esperar a la sucesión — conexión directa con        │
│ la simulación comparativa de Ulpiano                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 6: CÓMO ULPIANO AYUDA (fondo white)         │
│ Simulación herencia vs. donación + mockup           │
│ CTA: "Solicita tu demo"                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 7: PREGUNTAS FRECUENTES (fondo surface)     │
│ 5 preguntas en accordion + schema FAQPage           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 8: MODELOS RELACIONADOS (fondo white)        │
│ Cards: 650 (sucesiones), 660 (inventario)           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 9: CTA FINAL (fondo night)                   │
│ H2 + subtítulo + doble CTA                          │
└─────────────────────────────────────────────────────┘
```

---

## 2. ESPECIFICACIÓN POR SECCIÓN

---

### SECCIÓN 1: HERO INFORMATIVO

**Fondo:** `var(--night)` (#0F1F3D)
**Padding:** `calc(64px + var(--space-12))` top, `var(--space-16)` bottom

**Breadcrumb:** `Inicio › Modelos › Modelo 651`
**Model Nav:** 650, **651 (activo)**, 652, 653, 660
**Número decorativo:** "651" — JetBrains Mono 120px, `rgba(255,255,255,0.06)`, position absolute

```
[Eyebrow]
MODELO FISCAL

[H1 — DM Sans Bold, 56→42→32px, white, max-width 720px]
Modelo 651: Autoliquidación del Impuesto de Donaciones

[Subtítulo — Inter Regular, 17px, rgba(255,255,255,0.75), max-width 600px]
El Modelo 651 es el formulario de autoliquidación del Impuesto sobre
Sucesiones y Donaciones (ISD) en su modalidad de donaciones y demás
transmisiones lucrativas inter vivos. Lo presenta el donatario — quien
recibe la donación — ante la administración tributaria autonómica.

[Badge — fondo rgba(45,106,79,0.15), texto green-light]
Normativa aplicable en Catalunya: Llei 19/2010, del 7 de juny (Títol II)
```

---

### SECCIÓN 2: QUÉ ES EL MODELO 651

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "DEFINICIÓN"
**H2:** "¿Qué es el Modelo 651?"

**Contenido (prosa, max-width 720px):**

El Modelo 651 es la autoliquidación del Impuesto sobre Sucesiones y Donaciones en su modalidad de transmisiones inter vivos a título gratuito (donaciones). A diferencia del Modelo 650, que grava las adquisiciones por causa de muerte, el 651 se aplica cuando una persona transmite bienes o derechos a otra en vida y sin contraprestación.

En Catalunya, las donaciones se regulan en el Títol II de la Llei 19/2010, que establece reducciones específicas distintas a las de sucesiones. El tratamiento fiscal es diferente: las donaciones tributan con escalas y reducciones propias, y el plazo de presentación es significativamente más corto.

**Tabla resumen:**

| Campo | Valor |
|---|---|
| **Denominación oficial** | Autoliquidación del ISD — Donaciones y demás transmisiones lucrativas inter vivos |
| **Base legal estatal** | Ley 29/1987 (LISD) + RD 1629/1991 (RISD) |
| **Base legal autonómica (Catalunya)** | Llei 19/2010, Títol II (Arts. 15-23) |
| **Hecho imponible** | Adquisición de bienes y derechos por donación o cualquier negocio jurídico a título gratuito inter vivos |
| **Sujeto pasivo** | El donatario (quien recibe la donación) |
| **Plazo de presentación** | 30 días hábiles desde la fecha de la donación |
| **Administración competente** | CA de residencia habitual del donatario (en Catalunya: ATC) |
| **Diferencia clave con el 650** | El 650 grava adquisiciones mortis causa; el 651 grava transmisiones inter vivos |

---

### SECCIÓN 3: QUIÉN ESTÁ OBLIGADO

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "OBLIGADOS TRIBUTARIOS"
**H2:** "¿Quién debe presentar el Modelo 651?"

**Texto introductorio:**

El sujeto pasivo del Impuesto de Donaciones es siempre el donatario: la persona que recibe la donación. En el caso de condonaciones de deuda, el sujeto pasivo es la persona favorecida por la condonación.

**Grid de 3 bloques (repeat(3, 1fr) desktop):**

**Bloque 1: Donatarios de bienes**
- Icono: home (lucide-react)
- H3: "Donatarios de bienes inmuebles y muebles"
- P: "Quien recibe un inmueble, dinero, acciones, vehículos u otros bienes muebles a título gratuito e inter vivos."

**Bloque 2: Beneficiarios de seguros inter vivos**
- Icono: heart-handshake
- H3: "Beneficiarios de seguros inter vivos"
- P: "Quien percibe cantidades de un seguro sobre la vida cuando el contratante es distinto del beneficiario y el evento asegurado no es la muerte."

**Bloque 3: Adquirentes por condonación**
- Icono: receipt
- H3: "Favorecidos por condonación de deuda"
- P: "Quien se beneficia de la renuncia de un crédito a su favor, o de la asunción liberatoria de una deuda por parte de un tercero."

**Bloque de alerta (plazo):**

```
[Icono: clock, color warning #B45309]
[Fondo: #FEF3C7, border-radius 12px]

PLAZO: 30 DÍAS HÁBILES

El Modelo 651 debe presentarse en los 30 días hábiles siguientes
a la fecha de la donación o del acto que origina la transmisión.
Este plazo es significativamente más corto que el del Modelo 650
(6 meses). La presentación extemporánea conlleva los mismos recargos
del Art. 27 LGT.
```

---

### SECCIÓN 4: CONTENIDO — EL CÁLCULO

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "CÁLCULO"
**H2:** "Cómo se calcula la cuota del Modelo 651"

**Embudo fiscal (componente FiscalFunnel):**

```
Base imponible              € 200.000,00      ← Valor real de los bienes donados
─────────────────────────────────────────────
- Reducción parentesco     -€  60.000,00      ← Art. 15 Llei 19/2010 (Grupo II, hijo)
─────────────────────────────────────────────
= Base liquidable           € 140.000,00
─────────────────────────────────────────────
× Tarifa progresiva         €  14.560,00      ← Escala donaciones Art. 17 Llei 19/2010
× Coeficiente multiplicador      × 1,0000     ← Grupo II
─────────────────────────────────────────────
= Cuota íntegra             €  14.560,00
- Bonificación              -€   8.736,00     ← Art. 18 (≈60% para donaciones hijo)
─────────────────────────────────────────────
= CUOTA A INGRESAR          €   5.824,00
```

**Tabla de reducciones en donaciones (Catalunya):**

| Concepto | Base legal | Importe / Porcentaje |
|---|---|---|
| Donación a descendientes (≥ 21 años) | Art. 15 Llei 19/2010 | 60.000€ |
| Donación a descendientes (< 21 años) | Art. 15 | 60.000€ + 12.000€/año < 21 |
| Donación de vivienda habitual a descendiente | Art. 16 | 60.000€ (acumulable) |
| Donación de empresa familiar | Art. 21 | 95% del valor neto |
| Donación de dinero para adquisición de vivienda | Art. 19 | 95%, máx. 60.000€ (120.000€ discapacidad) |
| Donación de dinero para actividad empresarial | Art. 20 | 95%, máx. 125.000€ |

**Nota debajo de la tabla:**

> Las reducciones en donaciones son más restrictivas que en sucesiones. No existe la reducción por vivienda habitual del causante (Art. 5) ni las bonificaciones amplias de Grupo I y II que se aplican en el Modelo 650. Esta diferencia es una de las razones por las que la comparación fiscal entre donar en vida y esperar a la sucesión es clave.

---

### SECCIÓN 5: DONACIÓN VS. HERENCIA — ¿CUÁNDO CONVIENE?

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "COMPARATIVA"
**H2:** "¿Donar en vida o esperar a la sucesión?"
**Subtítulo:** "La respuesta depende del caso concreto. El tipo de bien, el parentesco, el patrimonio preexistente del adquirente y la normativa autonómica determinan qué opción tiene menor coste fiscal."

**Tabla comparativa (2 columnas):**

| Aspecto | Donación (Modelo 651) | Sucesión (Modelo 650) |
|---|---|---|
| **Hecho imponible** | Transmisión inter vivos | Adquisición mortis causa |
| **Plazo** | 30 días hábiles | 6 meses |
| **Reducciones por parentesco** | Menores (60.000€ Grupo II) | Mayores (100.000€ Grupo II) |
| **Reducción vivienda habitual** | No aplica (la del causante) | 95%, máx. 500.000€ |
| **Bonificaciones en cuota** | Limitadas (≈60% para hijos) | Amplias (hasta 99% Grupos I y II) |
| **Plusvalía municipal (IIVTNU)** | Sí, a cargo del donante | Sí, a cargo del heredero (con exenciones) |
| **IRPF del donante** | Ganancia patrimonial tributable | No aplica (mortis causa exenta en IRPF) |
| **Control del timing** | Sí (el donante decide cuándo) | No (depende del fallecimiento) |

**Bloque de conexión con Ulpiano (debajo de la tabla):**

```
[Fondo: white, border: 2px solid ulpiano-green, border-radius 12px, padding var(--space-6)]

Ulpiano permite comparar el impacto fiscal de cada opción en paralelo:
herencia directa vs. donación en vida vs. usufructo al cónyuge.
El profesional ve las tres cuotas calculadas sobre los mismos datos
del expediente y presenta al cliente un escenario informado.
```

---

### SECCIÓN 6: CÓMO ULPIANO AYUDA

**Fondo:** `var(--white)` (#FFFFFF)
**Padding:** `var(--space-20)` top/bottom

**Eyebrow:** "CON ULPIANO"
**H2:** "Simula la donación y la herencia sobre los mismos datos"

**Layout:** 2 columnas desktop (55% copy, 45% mockup)

**3 puntos de valor:**

1. **Comparación fiscal en paralelo**
   "Introduce los datos del patrimonio una vez. Ulpiano calcula la cuota como donación (651) y como sucesión (650) simultáneamente. El profesional presenta al cliente ambas opciones con cifras reales."

2. **Reducciones catalanas aplicadas automáticamente**
   "Reducción por parentesco, donación de empresa familiar, dinero para vivienda — cada supuesto de la Llei 19/2010 aplicado según los datos del caso, sin revisión manual de tablas."

3. **Un expediente, todos los escenarios**
   "Si el cliente decide donar, los datos ya están en Ulpiano. Si prefiere esperar a la sucesión, el expediente se adapta sin volver a introducir información."

**CTA:**
- Primario: "Solicita tu demo" → `/demo`
- Secundario: "Ver simulación de escenarios →" → `/soluciones/planificacion-sucesoria`

**Mockup (columna derecha):**
Ventana simulada mostrando una comparativa:
- Barra: "Comparativa Fiscal — Expediente 2024-0312"
- 2 columnas dentro:
  - "Donación" con cuota `€ 5.824` en JetBrains Mono
  - "Sucesión" con cuota `€ 1.179` en JetBrains Mono
- Badge: "Diferencia: € 4.645" en fondo `#DBEAFE`

---

### SECCIÓN 7: PREGUNTAS FRECUENTES

**Fondo:** `var(--surface)` (#F1F5F9)
**Padding:** `var(--space-20)` top/bottom

**5 preguntas:**

**P1: ¿Cuál es la diferencia entre el Modelo 650 y el 651?**
R: El Modelo 650 grava las adquisiciones mortis causa (herencias y legados). El Modelo 651 grava las transmisiones inter vivos a título gratuito (donaciones). Tienen escalas, reducciones y plazos diferentes.

**P2: ¿El donante tiene que declarar la donación en IRPF?**
R: Sí. El donante puede tener una ganancia patrimonial tributable en IRPF por la diferencia entre el valor de adquisición y el valor de transmisión del bien donado. Esto es una diferencia clave respecto a la sucesión, donde la transmisión mortis causa está exenta en IRPF.

**P3: ¿Qué plazo tengo para presentar el Modelo 651?**
R: 30 días hábiles desde la fecha de la donación. No existe posibilidad de prórroga como en el Modelo 650. La extemporaneidad se penaliza con los recargos del Art. 27 LGT.

**P4: ¿Las reducciones de donaciones en Catalunya son iguales a las de sucesiones?**
R: No. Las reducciones en donaciones son más limitadas. No existe la reducción por vivienda habitual del causante ni las bonificaciones amplias de cuota de Grupos I y II que se aplican en sucesiones. Es una de las razones por las que la planificación fiscal comparativa es esencial.

**P5: ¿Puede Ulpiano calcular la cuota de una donación?**
R: Ulpiano permite simular el impacto fiscal de una donación y compararlo con la cuota que resultaría en una sucesión, sobre los mismos datos patrimoniales. El profesional evalúa ambas opciones con cifras reales y presenta al cliente un escenario informado.

---

### SECCIÓN 8: MODELOS RELACIONADOS

**Fondo:** `var(--white)` (#FFFFFF)

**3 cards:**

| Card | Número | Nombre | Relación |
|---|---|---|---|
| 1 | 650 | Sucesiones | Si la transmisión es mortis causa, el modelo aplicable es el 650 |
| 2 | 660 | Inventario | Acompaña al 650 si finalmente la transmisión es por herencia |
| 3 | 652 | Seguros de Vida | Si la donación incluye la cesión de un seguro de vida |

---

### SECCIÓN 9: CTA FINAL

**Fondo:** `var(--night)` con gradiente sutil
**Padding:** `var(--space-20)` top/bottom

```
[H2 — DM Sans Bold, 36→28px, white, centrado, max-width 640px]
¿Donación o herencia? La respuesta está en los números.

[Subtítulo — Inter Regular, 17px, rgba(255,255,255,0.75), max-width 560px]
Solicita una demo y comprueba cómo Ulpiano compara el impacto fiscal
de cada opción sobre los mismos datos del expediente.

[CTAs]
[Solicita tu demo]                    ← ButtonPrimary → /demo
[Ver planificación sucesoria →]       ← ButtonGhost → /soluciones/planificacion-sucesoria
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Todo apilado 1 col. Embudo fiscal scroll horizontal. Model nav scrollable. Tabla comparativa en cards apiladas. |
| Tablet (768px–1023px) | Grid obligados 2 col + 1. Sección 6 stack. |
| Desktop (≥1024px) | Grid obligados 3 col. Sección 6 dos columnas. Tabla comparativa completa. |

---

## 4. COMPONENTES REUTILIZABLES

Misma tabla que `PROMPT_MODELO_650.md` — todos los componentes del silo son compartidos.

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Modelo 651: Autoliquidación del Impuesto de Donaciones | Guía Completa — Ulpiano",
  description:
    "Guía del Modelo 651: qué es, quién lo presenta, plazo de 30 días, reducciones catalanas para donaciones y cómo comparar el impacto fiscal de donar vs. heredar con Ulpiano.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-651",
  },
};
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

Mismas reglas que `PROMPT_MODELO_650.md`:
- Citar siempre la base legal
- No usar "fácil", "simple", "automatiza"
- Ulpiano como nombre propio, nunca "ulpiano.es"
- Tono informativo-técnico con transición a producto

**Nota específica del 651:** Enfatizar la comparativa donación vs. herencia como la razón de ser de esta página. El profesional que busca información sobre el 651 probablemente está evaluando opciones para su cliente. Ulpiano resuelve exactamente esa necesidad.

---

## 7. ASSETS NECESARIOS

| Asset | Tipo | Estado | Prioridad |
|---|---|---|---|
| Mockup de comparativa fiscal | HTML/CSS | Construir con JSX | Alta |
| Embudo fiscal de donaciones | Componente FiscalFunnel | Reutilizar del 650, con datos distintos | Alta |
| Schema FAQPage JSON-LD | Script en head | Construir | Alta |

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero con breadcrumb, model nav, número decorativo, H1 informativo
- [ ] Ficha técnica con base legal correcta (Títol II Llei 19/2010)
- [ ] 3 bloques de obligados (donatarios, seguros inter vivos, condonación)
- [ ] Alerta de plazo (30 días hábiles, no meses)
- [ ] Embudo fiscal con números de donación (no sucesión)
- [ ] Tabla de reducciones de donaciones (Arts. 15-21 Llei 19/2010)
- [ ] Tabla comparativa donación vs. herencia
- [ ] Sección Ulpiano con mockup de comparativa y 3 puntos de valor
- [ ] 5 preguntas FAQ con accordion y schema
- [ ] 3 modelos relacionados
- [ ] CTA final con doble botón
- [ ] Responsive
- [ ] Copy revisado

---

## 9. RELACIÓN CON OTRAS PÁGINAS

| Hacia | Contexto |
|---|---|
| `/modelos/modelo-650` | "Si la transmisión es mortis causa, el modelo es el 650" |
| `/soluciones/planificacion-sucesoria` | "Simulación comparativa herencia vs. donación" |
| `/soluciones/fiscalidad-sucesoria` | "Motor fiscal completo de Ulpiano" |
| `/demo` | CTA principal |
