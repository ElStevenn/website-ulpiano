# PROMPT DE DISEÑO — Página `/modelos/modelo-660`

> **Tipo de página:** SEO informativo-transaccional (Modelo fiscal)
> **URL:** `/modelos/modelo-660`
> **Silo:** `/modelos/*` (Modelos de Impuestos)
> **Prioridad:** Alta — complemento obligatorio del 650
> **Última actualización:** 2026-04-12

---

## 0. CONTEXTO Y DECISIÓN DE DISEÑO

### ¿Qué es esta página?

Una guía sobre el Modelo 660 (Declaración de Sucesiones / Inventario de bienes). El visitante busca "modelo 660 herencia inventario" o "declaración sucesiones inventario" y necesita entender qué información contiene este modelo, cómo se relaciona con el 650 y qué datos debe recopilar.

### Conexión con Ulpiano

El Modelo 660 es el inventario de bienes, derechos y deudas del causante — exactamente lo que el módulo de Gestor Patrimonial de Ulpiano estructura desde el primer momento del expediente. La generación del 660 desde Ulpiano es natural: los datos ya están inventariados, valorados y clasificados. No hay transcripción, solo exportación.

Lee `PROMPT_ARQUITECTURA_MODELOS.md` para la arquitectura del silo, `product-marketing-context.md` para el contexto de producto.

---

## 1. ESTRUCTURA DE SECCIONES

```
/modelos/modelo-660

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 1: HERO INFORMATIVO (fondo night)           │
│ Breadcrumb + Model Nav + Número "660" decorativo    │
│ H1: Modelo 660 — Declaración de Sucesiones          │
│ (inventario de bienes)                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 2: QUÉ ES EL MODELO 660 (fondo white)       │
│ Explicación + tabla resumen + relación con el 650   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 3: QUÉ CONTIENE (fondo surface)              │
│ Desglose de apartados: bienes inmuebles, cuentas,   │
│ seguros, ajuar, deudas deducibles, gastos           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 4: DATOS NECESARIOS (fondo white)            │
│ Tabla de documentación a recopilar por categoría    │
│ de bien                                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 5: CÓMO ULPIANO LO GENERA (fondo surface)   │
│ Del inventario patrimonial al Modelo 660 exportado  │
│ CTA: "Solicita tu demo"                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 6: PREGUNTAS FRECUENTES (fondo white)       │
│ 6 preguntas en accordion + schema FAQPage           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SECCIÓN 7: MODELOS RELACIONADOS (fondo surface)      │
│ Cards: 650 (siempre juntos), 652, 653               │
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

**Breadcrumb:** `Inicio › Modelos › Modelo 660`
**Model Nav:** 650, 651, 652, 653, **660 (activo)**
**Número decorativo:** "660" — JetBrains Mono 120px, `rgba(255,255,255,0.06)`

```
[Eyebrow] MODELO FISCAL

[H1 — DM Sans Bold, 56→42→32px, white, max-width 720px]
Modelo 660: Declaración de Sucesiones (Inventario de Bienes)

[Subtítulo — Inter Regular, 17px, rgba(255,255,255,0.75), max-width 600px]
El Modelo 660 es la declaración que acompaña al Modelo 650 y recoge
el inventario completo del caudal relicto del causante: bienes inmuebles,
cuentas bancarias, valores, seguros, ajuar doméstico, deudas deducibles
y gastos de última enfermedad y sepelio.

[Badge]
Se presenta siempre junto al Modelo 650
```

---

### SECCIÓN 2: QUÉ ES EL MODELO 660

**Fondo:** `var(--white)` (#FFFFFF)

**Eyebrow:** "DEFINICIÓN"
**H2:** "¿Qué es el Modelo 660?"

**Contenido (prosa, max-width 720px):**

El Modelo 660 es el formulario de declaración del Impuesto sobre Sucesiones y Donaciones que recoge el inventario completo de bienes, derechos y deudas del causante. No es una autoliquidación (no calcula cuota): es el documento soporte que detalla qué bienes componen el caudal relicto y que sirve como base para las autoliquidaciones individuales de cada heredero (Modelo 650).

A diferencia del Modelo 650, que se presenta uno por cada heredero, el Modelo 660 es único por sucesión: un solo inventario para todos los beneficiarios. Recopila toda la información patrimonial del causante a fecha de fallecimiento: bienes inmuebles con referencia catastral, saldos bancarios, valores mobiliarios, seguros de vida, ajuar doméstico, deudas deducibles y gastos.

**Tabla resumen:**

| Campo | Valor |
|---|---|
| **Denominación oficial** | Declaración del Impuesto sobre Sucesiones — Inventario de bienes |
| **Base legal estatal** | Art. 31 LISD + Arts. 37-38 RISD |
| **Naturaleza** | Declaración informativa (no autoliquidación — no calcula cuota) |
| **Contenido** | Inventario de bienes, derechos, deudas deducibles y gastos del causante |
| **Presenta** | Un único Modelo 660 por sucesión (no uno por heredero) |
| **Plazo** | Mismo que el Modelo 650: 6 meses desde el fallecimiento |
| **Administración competente** | ATC en Catalunya |
| **Acompaña a** | Modelo 650 (un 650 por cada heredero, todos referidos al mismo 660) |

---

### SECCIÓN 3: QUÉ CONTIENE EL MODELO 660

**Fondo:** `var(--surface)` (#F1F5F9)

**Eyebrow:** "CONTENIDO"
**H2:** "Apartados del inventario de bienes"

**Layout:** Grid `repeat(3, 1fr)` desktop, `repeat(2, 1fr)` tablet, stack mobile. Gap var(--space-6).

**6 bloques** (fondo white, border mist, border-radius 12px, padding var(--space-6)):

Cada bloque:
- Icono: SVG outline 20px, `ulpiano-green`, sin círculo de fondo
- H3: Inter SemiBold 18px, `ink`
- Lista de datos requeridos: Inter Regular 14px, `slate`, separados por salto de línea
- Indicador visual del peso del apartado (badge)

**Bloque 1: Bienes inmuebles**
- Icono: home
- H3: "Bienes inmuebles urbanos y rústicos"
- Datos: Dirección completa, referencia catastral, valor catastral y valor de referencia, porcentaje de titularidad del causante, cargas hipotecarias, uso (habitual, arrendado, vacante)
- Badge: "Apartado principal"

**Bloque 2: Cuentas y depósitos bancarios**
- Icono: landmark (bank)
- H3: "Cuentas bancarias y depósitos"
- Datos: Entidad, número de cuenta (IBAN), saldo a fecha de fallecimiento, titularidad (individual, conjunta), porcentaje atribuible al causante
- Badge: "Saldo a fecha de devengo"

**Bloque 3: Valores mobiliarios y participaciones**
- Icono: trending-up
- H3: "Valores, fondos y participaciones societarias"
- Datos: Acciones cotizadas (media último trimestre), fondos de inversión (valor liquidativo a fecha de fallecimiento), participaciones en sociedades no cotizadas (valor según último balance), planes de pensiones
- Badge: "Valoración según tipo de activo"

**Bloque 4: Seguros de vida**
- Icono: shield
- H3: "Seguros de vida"
- Datos: Compañía aseguradora, número de póliza, capital asegurado, beneficiario designado, fecha de contratación
- Badge: "Tributan aparte (M652)"

**Bloque 5: Ajuar doméstico y otros bienes**
- Icono: package
- H3: "Ajuar doméstico, vehículos y otros muebles"
- Datos: Ajuar doméstico (valoración por el 3% del caudal relicto según Art. 15 LISD, salvo prueba en contrario), vehículos (marca, modelo, valoración), joyas, obras de arte, otros bienes muebles
- Badge: "3% presunción legal"

**Bloque 6: Deudas y gastos deducibles**
- Icono: minus-circle
- H3: "Pasivos deducibles"
- Datos: Deudas del causante (hipotecas, préstamos, deudas fiscales), gastos de última enfermedad, gastos de entierro y funeral. Resta del caudal relicto bruto para obtener el caudal relicto neto.
- Badge: fondo `#FEF3C7`, texto `#B45309` — "Restan del caudal"

---

### SECCIÓN 4: DATOS NECESARIOS — DOCUMENTACIÓN A RECOPILAR

**Fondo:** `var(--white)` (#FFFFFF)

**Eyebrow:** "DOCUMENTACIÓN"
**H2:** "Qué documentos necesitas para completar el Modelo 660"

**Tabla de documentación:**

| Categoría de bien | Documentos a recopilar |
|---|---|
| **Inmuebles** | Escritura de propiedad, nota simple del Registro, certificado catastral, recibo IBI, certificado de cargas |
| **Cuentas bancarias** | Certificado de saldo a fecha de fallecimiento emitido por la entidad |
| **Valores y fondos** | Certificado de posiciones a fecha de fallecimiento (broker, gestora, entidad depositaria) |
| **Participaciones societarias** | Balance de la sociedad, escritura de constitución, certificado de participaciones |
| **Seguros de vida** | Póliza del seguro, certificado del capital asegurado, designación de beneficiarios |
| **Vehículos** | Permiso de circulación, informe de la DGT, valoración (tablas Hacienda) |
| **Deudas** | Certificados de deuda pendiente (hipotecas, préstamos), facturas de última enfermedad, factura de sepelio |
| **Identificación** | Certificado de defunción, certificado de últimas voluntades, DNI del causante y de los herederos, libro de familia o certificados de nacimiento |

**Nota debajo de la tabla:**

> El Modelo 660 requiere que los valores reflejen la situación patrimonial a fecha de fallecimiento del causante (fecha de devengo del impuesto). Los certificados bancarios, de valores y de posiciones deben estar referidos a esa fecha específica.

---

### SECCIÓN 5: CÓMO ULPIANO GENERA EL MODELO 660

**Fondo:** `var(--surface)` (#F1F5F9)

**Eyebrow:** "CON ULPIANO"
**H2:** "Del inventario patrimonial al Modelo 660, sin transcribir"

**Layout:** 2 columnas desktop (55% copy, 45% mockup)

**3 puntos de valor:**

1. **El inventario ya está en Ulpiano**
   "Al registrar el patrimonio del causante en el Gestor Patrimonial, cada bien queda clasificado, valorado y vinculado al expediente. El Modelo 660 se genera como una exportación del inventario, no como un formulario que rellenar desde cero."

2. **Cada categoría con sus campos específicos**
   "Inmuebles con referencia catastral y cargas, cuentas con saldo a fecha de devengo, participaciones con porcentaje y valor según balance. Los campos del 660 se completan automáticamente desde los datos estructurados del expediente."

3. **Un inventario, todos los modelos**
   "El mismo inventario alimenta el Modelo 660 (declaración), los Modelos 650 de cada heredero (autoliquidación) y cualquier documento sucesorio que se genere. Un dato se introduce una vez. Aparece correcto en todos los documentos."

**CTA:**
- Primario: "Solicita tu demo" → `/demo`
- Secundario: "Ver gestor patrimonial →" → `/soluciones/planificacion-sucesoria`

**Mockup (columna derecha):**

Ventana simulada: "Modelo 660 — Expediente 2024-0847"
- Fondo white
- Contenido:
  - Header: "MODELO 660 — DECLARACIÓN DE SUCESIONES" en DM Sans Bold 14px
  - "Causante: D. Joan Puig i Ferrer" en Inter Regular 13px, `slate`
  - Mini-tabla de inventario:
    ```
    BIENES INMUEBLES
    Piso C/ Major 12, Girona    Ref. Cat. 4521003    € 425.000
    Local C/ Nou 3, Girona      Ref. Cat. 4521045    €  85.000

    CUENTAS BANCARIAS
    CaixaBank ES12 0000 ...     Saldo               €  87.340
    Sabadell ES34 0000 ...      Saldo               €  42.100

    TOTAL ACTIVOS                                    € 639.440
    TOTAL PASIVOS                                   -€  85.200
    ────────────────────────────────────────────────
    CAUDAL RELICTO NETO                              € 554.240
    ```
  - Badge: "✓ Generado desde inventario patrimonial"
- Tratamiento: border-radius 12px, sombra, perspectiva sutil

---

### SECCIÓN 6: PREGUNTAS FRECUENTES

**6 preguntas:**

**P1: ¿El Modelo 660 es obligatorio?**
R: Sí. El Modelo 660 acompaña obligatoriamente al Modelo 650 como documento soporte del inventario de bienes del causante. Sin el 660, la administración tributaria no dispone de la información patrimonial necesaria para verificar las autoliquidaciones individuales.

**P2: ¿Se presenta un Modelo 660 por cada heredero?**
R: No. Se presenta un único Modelo 660 por sucesión, que recoge el inventario completo del caudal relicto del causante. Cada heredero presenta después su propio Modelo 650 (autoliquidación individual) referido al mismo 660.

**P3: ¿Los valores de los bienes deben ser a fecha de fallecimiento?**
R: Sí. La fecha de devengo del Impuesto sobre Sucesiones es la fecha de fallecimiento del causante. Todos los valores del inventario (saldos bancarios, cotizaciones, valores de referencia de inmuebles) deben reflejar la situación patrimonial en esa fecha.

**P4: ¿El ajuar doméstico se incluye en el Modelo 660?**
R: Sí. El Art. 15 de la LISD establece una presunción legal del 3% del caudal relicto como valor del ajuar doméstico, salvo que el contribuyente pruebe un valor inferior. Este importe se incluye en el inventario y forma parte de la base imponible de cada heredero.

**P5: ¿Qué deudas son deducibles en el Modelo 660?**
R: Son deducibles las deudas del causante que estén debidamente acreditadas: hipotecas, préstamos, deudas con la Hacienda Pública o la Seguridad Social, deudas derivadas de obligaciones tributarias pendientes. También son deducibles los gastos de última enfermedad, entierro y funeral.

**P6: ¿Ulpiano genera el Modelo 660 automáticamente?**
R: Sí. El Gestor Patrimonial de Ulpiano estructura el inventario de bienes del causante con todos los campos que requiere el Modelo 660. Al generar la documentación del expediente, el 660 se exporta con los datos ya clasificados, valorados y referenciados. Sin transcripción manual.

---

### SECCIÓN 7: MODELOS RELACIONADOS

**3 cards:**

| Card | Número | Nombre | Relación |
|---|---|---|---|
| 1 | 650 | Sucesiones | El 660 es el inventario que acompaña a cada 650 |
| 2 | 652 | Seguros de Vida | Los seguros se declaran en el 660 y tributan con el 652 |
| 3 | 653 | Consolidación de Dominio | Si hay usufructo, el 660 original se referencia en el 653 futuro |

---

### SECCIÓN 8: CTA FINAL

```
[H2] El inventario del expediente, convertido en Modelo 660. Sin rellenar formularios.

[Subtítulo] Solicita una demo y comprueba cómo el Gestor Patrimonial de Ulpiano
genera el inventario del Modelo 660 desde los datos del expediente sucesorio.

[CTAs]
[Solicita tu demo]                ← ButtonPrimary → /demo
[Ver gestor patrimonial →]        ← ButtonGhost → /soluciones/planificacion-sucesoria
```

---

## 3. RESPONSIVE BREAKPOINTS

| Breakpoint | Cambios |
|---|---|
| Mobile (<768px) | Grid de apartados 1 col. Tabla de documentación en cards apiladas. Mockup del 660 debajo del copy. |
| Tablet (768px–1023px) | Apartados 2x3. Tabla completa. Sección 5 stack. |
| Desktop (≥1024px) | Apartados 3x2. Layout completo. Sección 5 dos columnas. |

---

## 5. METADATA Y SEO

```tsx
export const metadata: Metadata = {
  title: "Modelo 660: Declaración de Sucesiones e Inventario de Bienes | Guía Completa — Ulpiano",
  description:
    "Guía del Modelo 660: qué es, qué apartados contiene (inmuebles, cuentas, valores, seguros, deudas), qué documentación necesitas y cómo Ulpiano lo genera automáticamente desde el inventario patrimonial.",
  alternates: {
    canonical: "https://ulpiano.es/modelos/modelo-660",
  },
};
```

---

## 6. NOTAS DE COPY Y VOZ DE MARCA

Mismas reglas que el resto del silo (ver `PROMPT_MODELO_650.md`).

**Nota específica del 660:** Esta página tiene un enfoque práctico más fuerte que las otras. El profesional que busca información sobre el 660 probablemente necesita saber qué documentos recopilar y qué datos incluir en cada apartado. La tabla de documentación (sección 4) es el contenido de mayor valor práctico de la página. El diferenciador de Ulpiano aquí es directo: si el inventario ya está en la plataforma, el 660 se genera solo.

---

## 8. CHECKLIST DE VALIDACIÓN

- [ ] Hero con breadcrumb, model nav, número decorativo
- [ ] Ficha técnica con Art. 31 LISD y Arts. 37-38 RISD
- [ ] Aclaración: 1 único 660 por sucesión, no uno por heredero
- [ ] 6 bloques de apartados del inventario con datos requeridos
- [ ] Tabla de documentación a recopilar (8 categorías)
- [ ] Nota sobre fecha de devengo para valoraciones
- [ ] 3 puntos de valor de Ulpiano + mockup del 660 generado
- [ ] 6 preguntas FAQ con schema FAQPage
- [ ] 3 modelos relacionados
- [ ] CTA final
- [ ] Responsive
- [ ] Copy revisado

---

## 9. RELACIÓN CON OTRAS PÁGINAS

| Hacia | Contexto |
|---|---|
| `/modelos/modelo-650` | "El 660 acompaña siempre al 650" |
| `/modelos/modelo-652` | "Los seguros se declaran en el 660 y tributan con el 652" |
| `/modelos/modelo-653` | "El 660 original se referencia en la consolidación futura" |
| `/soluciones/planificacion-sucesoria` | "Gestor patrimonial de Ulpiano" |
| `/soluciones/documentacion-sucesoria` | "Todos los documentos que genera Ulpiano" |
| `/demo` | CTA principal |
