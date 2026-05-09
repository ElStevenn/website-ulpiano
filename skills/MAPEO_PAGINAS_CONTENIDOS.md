# MAPEO DE PÁGINAS Y ESTRUCTURA DE CONTENIDOS — ULPIANO.ES

> **Principio rector de toda la web:** Ulpiano no vende funcionalidades, vende lo que el profesional obtiene. Cada página responde a la pregunta "¿qué sale de aquí?" — no "¿qué hace esto?".

---

## 1. ARQUITECTURA DE SILOS DE CONTENIDO

```
ulpiano.es/
├── / (HOME)
│   └── "De inventario a cuaderno particional."
│   └── Muestra los 4 outputs principales. Lleva a /demo.
│
├── /soluciones (SILO PRINCIPAL — "Lo que obtienes")
│   ├── Hub: grid de outputs con resultado tangible de cada uno
│   │
│   └── Páginas de output específico:
│       ├── /soluciones/planificacion-sucesoria
│       │   → "El patrimonio inventariado, el árbol dibujado, las legítimas respetadas."
│       │
│       ├── /soluciones/documentacion-sucesoria
│       │   → "El cuaderno particional, el testamento, la escritura. Generados."
│       │
│       ├── /soluciones/fiscalidad-sucesoria
│       │   → "La cuota del ISD calculada. El Modelo 650 listo. La norma citada."
│       │
│       ├── /soluciones/procesamiento-documental
│       │   → "Los datos del expediente, extraídos del PDF. Sin transcribir nada a mano."
│       │
│       └── /soluciones/activos-digitales
│           → "Criptomonedas, wallets, cuentas online: inventariados y valorados fiscalmente."
│
├── /pensado-para (SILO SECUNDARIO — "Para tu perfil")
│   └── Páginas por buyer persona, enfocadas en el resultado para ESE profesional
│       ├── /pensado-para/despachos
│       │   → "La legítima en 3 minutos. El expediente auditable. El cuaderno generado."
│       ├── /pensado-para/notarias
│       │   → "El expediente post-testamento, activo. La documentación centralizada."
│       ├── /pensado-para/asesorias
│       │   → "El ISD recalculado ante cada cambio normativo. La alerta antes del plazo."
│       └── /pensado-para/family-office
│           → "La planificación pre-mortem. El impacto fiscal de cada escenario, comparado."
│
├── /precios
│   └── "Un expediente completo por menos de lo que cuesta una hora de trabajo manual."
│
├── /recursos (POST-MVP)
│   ├── Blog / Artículos SEO
│   ├── Guías técnicas
│   └── Documentación de producto
│
└── /empresa (POST-MVP)
    ├── Acerca de
    └── Contacto
```

---

## 2. PÁGINAS POR DESARROLLAR

### **Tier 1: MVP**

| URL | Lo que comunica | Prioridad |
|-----|-----------------|-----------|
| `/` | Los 4 outputs principales + demo | 🔴 |
| `/soluciones` | Mapa visual de todo lo que sale de Ulpiano | 🔴 |
| `/soluciones/planificacion-sucesoria` | Inventario → árbol → legítimas | 🔴 |
| `/soluciones/documentacion-sucesoria` | Datos del expediente → documentos listos | 🔴 |
| `/soluciones/fiscalidad-sucesoria` | Datos → ISD calculado → modelo presentable | 🔴 |
| `/precios` | Lo que cuesta vs. lo que ahorras | 🟠 |
| `/demo` | 25 minutos sobre el producto real | 🔴 |

### **Tier 2: Diferenciación**

| URL | Lo que comunica |
|-----|-----------------|
| `/soluciones/procesamiento-documental` | PDF de entrada → datos estructurados de salida |
| `/soluciones/activos-digitales` | Criptopatrimonio inventariado y valorado (único en España) |
| `/pensado-para/despachos` | Resultado específico para abogado-gestor |
| `/pensado-para/notarias` | Resultado específico para notaría |
| `/pensado-para/asesorias` | Resultado específico para asesor fiscal |

### **Tier 3: Post-MVP**

| URL | Tipo |
|-----|------|
| `/pensado-para/family-office` | Persona Page |
| `/recursos` | Content Hub |
| `/recursos/blog` | SEO |
| `/empresa` | Corporate |
| `/politica-privacidad` | Legal |
| `/terminos` | Legal |

---

## 3. ESPECIFICACIÓN POR PÁGINA

> **Regla para todo el copy de la web:** Cada titular describe un resultado concreto que el profesional reconoce de su día a día. Nunca una funcionalidad abstracta.
>
> ❌ "Automatización y generación documental" → ✅ "El cuaderno particional, generado a partir de los datos del expediente"
>
> ❌ "Gestión fiscal y normativa" → ✅ "La cuota del ISD de cada heredero, con la norma citada"
>
> ❌ "Procesamiento inteligente de documentos" → ✅ "Los datos del certificado de defunción, extraídos sin transcribir"

---

### **HOME — `/`**

**Status:** Prompt v2 listo. Especificación visual completa en `prompt_home_ulpiano_v2.md`.

**Lo que comunica:** Ulpiano produce resultados concretos — no es una herramienta más. El profesional ve en 30 segundos qué obtiene.

**Secciones:**
1. Nav
2. Hero: "De inventario a cuaderno particional. Sin errores de cálculo. Sin revisión manual de la norma." + mockup de dashboard
3. Social Proof: logos + "35% de reducción en tiempo"
4. **Outputs** (sección central):
   - El árbol familiar dibujado solo
   - La cuota del ISD calculada
   - Tres escenarios comparados en segundos
   - El coste de llegar tarde, calculado antes de llegar tarde
5. Para Quién: 3 tabs con claim por segmento
6. Cómo Funciona: 4 pasos (inventario → cálculo → escenarios → documentación)
7. Testimonio + métricas (35%, 6 meses, 100%)
8. CTA Final: "Tu próximo expediente, ya en Ulpiano"
9. Footer

---

### **SOLUCIONES HUB — `/soluciones`**

**Lo que comunica:** "Todo lo que sale de Ulpiano, de un vistazo."

**Hero:**
- Eyebrow: "LO QUE OBTIENES"
- H1: "Cada módulo produce un resultado. Cada resultado es un entregable para tu cliente."
- Subtítulo: "Ulpiano no es una lista de funcionalidades. Es lo que aparece en tu mesa cuando terminas de trabajar."

**Sección principal — Grid de outputs (2x3 o 3x2):**

Cada card muestra:
- Un output tangible (no una funcionalidad)
- Una línea de resultado concreto
- Captura/mockup pequeño del resultado
- CTA "Ver el resultado →"

| Card | Título (output) | Línea de resultado | Link |
|------|-----------------|-------------------|------|
| 1 | El patrimonio inventariado y el árbol dibujado | "Introduces bienes y herederos. Sale el diagrama sucesorio con legítimas respetadas." | /soluciones/planificacion-sucesoria |
| 2 | Los documentos sucesorios, generados | "El cuaderno particional, el testamento, la escritura. En Word, con tus datos." | /soluciones/documentacion-sucesoria |
| 3 | La cuota del ISD, calculada | "Base imponible → reducciones → bonificaciones → cuota a ingresar. Con la Llei 19/2010 citada." | /soluciones/fiscalidad-sucesoria |
| 4 | Los datos del expediente, extraídos | "Sube el PDF. Los datos del causante, los herederos, las referencias catastrales — ya en el expediente." | /soluciones/procesamiento-documental |
| 5 | Los activos digitales, inventariados | "Criptomonedas, wallets, cuentas online: valorados a fecha de devengo y clasificados fiscalmente." | /soluciones/activos-digitales |

**Sección secundaria — "¿Para quién es cada resultado?"**
Tabla visual cruzando outputs × perfiles (despachos, asesorías, notarías) con checks.

**CTA final:** "¿Cuál de estos resultados necesitas primero?" → [Solicita tu demo]

---

### **PLANIFICACIÓN SUCESORIA — `/soluciones/planificacion-sucesoria`**

**Lo que comunica:** "Entras con una lista de bienes y herederos. Sales con el patrimonio inventariado, el árbol familiar dibujado y las legítimas calculadas."

**Hero:**
- Eyebrow: "PLANIFICACIÓN"
- H1: "El patrimonio inventariado. El árbol dibujado. Las legítimas respetadas."
- Subtítulo: "Introduces bienes, deudas y herederos. Ulpiano construye el diagrama sucesorio, asigna grupos de parentesco y calcula las legítimas según el CCCat. Sin hojas de cálculo. Sin diagramas a mano."
- CTA: [Solicita tu demo]
- Visual: captura/vídeo del árbol familiar construyéndose

**Sección 1 — "Lo que obtienes" (3 outputs concretos):**

| Output | Descripción |
|--------|-------------|
| El inventario estructurado | Inmuebles con cargas y titularidades, productos financieros, participaciones societarias, activos digitales — todo valorado y con el caudal relicto neto calculado automáticamente. |
| El árbol familiar interactivo | Diagrama visual de la sucesión: quién hereda qué, en qué proporción, con qué grupo de parentesco. Exportable. |
| Las legítimas calculadas | Art. 451-5 CCCat aplicado: 1/4 del caudal computable. Prelegados computados a cuenta. Sin revisión manual de la norma. |

**Sección 2 — "De dónde partes a dónde llegas" (antes/después):**

| Sin Ulpiano | Con Ulpiano |
|-------------|-------------|
| Excel con 15 pestañas para inventariar bienes | Panel único con caudal relicto neto calculado |
| Diagrama sucesorio dibujado a mano en papel | Árbol interactivo que se actualiza al modificar herederos |
| Revisión manual del CCCat para validar legítimas | Legítima calculada automáticamente con norma citada |
| 4-6 horas por expediente para esta fase | 30 minutos |

**Sección 3 — "¿Qué tipo de patrimonio entra?"**
Grid visual mostrando las categorías: inmuebles, financieros, empresa familiar, actividad económica, activos digitales, derechos de crédito. Cada una con icono y una línea.

**CTA Final:** "Tu próximo inventario, estructurado en 30 minutos." → [Solicita tu demo]

**Assets:** Vídeo del árbol familiar + captura del panel de inventario.

---

### **DOCUMENTACIÓN SUCESORIA — `/soluciones/documentacion-sucesoria`**

**Lo que comunica:** "Entras con los datos del expediente. Sales con el cuaderno particional, el testamento o la escritura — en Word, listo para tu revisión."

**Hero:**
- Eyebrow: "DOCUMENTACIÓN"
- H1: "El cuaderno particional, generado. La escritura, redactada. El testamento, listo para revisión."
- Subtítulo: "Ulpiano toma los datos del expediente — bienes, herederos, distribución, cálculos fiscales — y genera los documentos sucesorios con las cláusulas pertinentes. En Word. Con tus datos. Listo para tu firma."
- CTA: [Solicita tu demo]
- Visual: vídeo de generación de documento

**Sección 1 — "Lo que sale" (3 outputs):**

| Output | Qué contiene |
|--------|-------------|
| Cuaderno particional | Inventario completo, distribución de bienes, adjudicaciones por heredero, cuotas hereditarias, valoraciones — generado a partir del expediente, no redactado desde cero. |
| Borrador de testamento | Cláusulas de sustitución vulgar, mejora, desheredación, fideicomisos — seleccionadas y adaptadas a la configuración sucesoria del expediente. |
| Escritura de donación o partición | Reparto de bienes inmuebles y participaciones, con valoración y ajustes fiscales preliminares integrados. |

**Sección 2 — "Cómo llega el documento a tu mesa" (2 pasos, no proceso):**

1. **Configuras la distribución** — A partir de los datos del expediente (bienes, herederos, figuras jurídicas), seleccionas o personalizas las cláusulas.
2. **Ulpiano genera** — El documento sale en Word con los datos reales, las cláusulas pertinentes y los cálculos preliminares. Tú revisas y firmas.

**Sección 3 — "El documento es tuyo, no de Ulpiano":**
- Historial de cambios registrado y auditable
- Cada modificación trazable
- El criterio jurídico sigue siendo del profesional — Ulpiano estructura, tú decides

**CTA Final:** "El cuaderno particional que costaba 3 días, en 20 minutos." → [Solicita tu demo]

**Assets:** Vídeo del flujo de generación documental + captura del documento resultante.

---

### **FISCALIDAD SUCESORIA — `/soluciones/fiscalidad-sucesoria`**

**Lo que comunica:** "Entras con el inventario y los herederos. Sales con la cuota del ISD calculada por beneficiario, el Modelo 650 listo, y la norma autonómica citada en cada paso."

**Hero:**
- Eyebrow: "FISCALIDAD"
- H1: "La cuota del ISD de cada heredero. Calculada. Con la norma citada."
- Subtítulo: "Base imponible → reducciones autonómicas → bonificaciones → coeficiente multiplicador → cuota a ingresar. Ulpiano ejecuta el embudo completo con la Llei 19/2010 integrada. Sin hojas de cálculo. Sin revisión manual de tablas."
- CTA: [Solicita tu demo]
- Visual: captura del cálculo fiscal con números reales

**Sección 1 — "Lo que obtienes por cada heredero":**

Bloque visual que muestra el embudo fiscal como output:

```
Base imponible         → € 385.000,00
- Reducción parentesco → -  € 100.000,00
- Reducción vivienda   → -  € 95.000,00 (95%, máx 500.000€)
= Base liquidable      → € 190.000,00
× Tarifa               → € 23.580,00
× Coeficiente          → × 1,0000
- Bonificación Grupo II → -  € 22.401,00 (99%)
= Cuota a ingresar     → € 1.179,00
```

Todo en JetBrains Mono. Con la referencia normativa al lado de cada línea.

**Sección 2 — "Lo que sale listo para presentar":**

| Output | Detalle |
|--------|---------|
| Modelo 650 autocompleto | Autoliquidación individual por heredero. Los campos rellenados desde los datos del expediente. |
| Modelo 660 | Declaración de sucesiones con inventario completo. |
| Alerta de extemporaneidad | Si el período voluntario de 6 meses vence, Ulpiano calcula el recargo según Art. 27 LGT antes de que ocurra. |
| Simulación comparativa | Herencia directa vs. donación en vida vs. usufructo al cónyuge — impacto fiscal de cada opción en paralelo. |

**Sección 3 — "La norma cambia. Tus expedientes se actualizan solos."**
- Recálculo automático ante cambios normativos
- Trazabilidad auditable ante la ATC
- Expedientes activos siempre al día — sin repasarlos uno a uno

**CTA Final:** "El ISD de tu próximo expediente, calculado en minutos." → [Solicita tu demo]

**Assets:** Vídeo del flujo de cálculo + captura del embudo fiscal con números.

---

### **PROCESAMIENTO DOCUMENTAL — `/soluciones/procesamiento-documental`**

**Lo que comunica:** "Subes un PDF. Los datos del causante, los herederos, las referencias catastrales — ya están en el expediente. Sin transcribir nada."

**Hero:**
- Eyebrow: "PROCESAMIENTO"
- H1: "El certificado de defunción, leído. Los datos del causante, en el expediente. Sin transcribir nada a mano."
- Subtítulo: "Sube el PDF — certificado de defunción, testamento, escritura, DNI. Ulpiano extrae los datos, los clasifica y los vuelca en el expediente. Tú validas y continúas."
- CTA: [Solicita tu demo]
- Visual: captura de documento siendo procesado

**Sección 1 — "Lo que sale del documento que subes":**

| Documento de entrada | Datos que salen |
|---------------------|-----------------|
| Certificado de defunción | Nombre, DNI, fecha de fallecimiento, domicilio → expediente |
| Testamento | Herederos, legatarios, cláusulas → árbol familiar |
| Escritura de propiedad | Referencia catastral, titularidad, cargas → inventario |
| DNI de beneficiarios | Datos personales, grupo de parentesco → cálculo fiscal |

**Sección 2 — "De 45 minutos de transcripción a 3 minutos de validación":**
Comparativa antes/después con métricas de tiempo.

**CTA Final:** "El próximo certificado que recibas, procesado en 3 minutos." → [Solicita tu demo]

**Assets:** Captura del flujo de procesamiento (upload → datos extraídos).

---

### **ACTIVOS DIGITALES — `/soluciones/activos-digitales`**

**Lo que comunica:** "Los activos digitales del causante — criptomonedas, wallets, cuentas online — inventariados, valorados a fecha de devengo, y clasificados fiscalmente. Ninguna otra plataforma en España lo hace."

**Hero:**
- Eyebrow: "ACTIVOS DIGITALES"
- H1: "Las criptomonedas del causante, valoradas. Los wallets, identificados. La huella digital, documentada."
- Subtítulo: "Criptomonedas con valoración a fecha de devengo, exchanges identificados, cuentas online catalogadas. Todo integrado en el expediente sucesorio como categoría fiscal de primer nivel."
- CTA: [Solicita tu demo]

**Sección 1 — "Lo que obtienes que nadie más te da":**

| Output | Detalle |
|--------|---------|
| Inventario cripto valorado | Criptomonedas con cotización a fecha de devengo. Wallets y exchanges identificados y vinculados al expediente. |
| Huella digital catalogada | Redes sociales, servicios cloud, suscripciones — con instrucciones de gestión o eliminación por cuenta. |
| Integración fiscal completa | Los activos digitales entran en el caudal relicto como categoría fiscal estructurada, no como una nota al margen. |

**Sección 2 — "El problema que resuelve":**
- "El 23% de los españoles posee criptomonedas. Cuando fallecen, esos activos quedan inaccesibles si no están inventariados."
- "Ninguna plataforma de gestión sucesoria en España trata los activos digitales como categoría fiscal. Ulpiano sí."

**CTA Final:** "Los activos digitales de tu próximo expediente, inventariados desde el primer día." → [Solicita tu demo]

**Diferenciador:** Único en el mercado español. Enfatizar en toda la página.

---

### **PÁGINAS POR PERSONA — `/pensado-para/*`**

**Principio:** Cada página habla al profesional en su lenguaje y le muestra el resultado que él reconoce de su día a día.

---

#### `/pensado-para/despachos`

**H1:** "La legítima en 3 minutos. El cuaderno particional generado. El expediente auditable."

**Lo que obtiene un despacho:**
- El cálculo de la legítima según CCCat, sin revisión manual → 3 minutos vs. 2 horas
- El cuaderno particional generado a partir de los datos del expediente → en Word, listo para revisión
- Cada decisión del expediente registrada y auditable → trazabilidad completa
- Comparación de escenarios fiscales en paralelo → el cliente entiende qué decide

**Métrica:** "35% de reducción en tiempo de gestión por expediente"

---

#### `/pensado-para/notarias`

**H1:** "El expediente post-testamento, activo. La documentación centralizada. El seguimiento del cliente, desde la plataforma."

**Lo que obtiene una notaría:**
- Panel de seguimiento del expediente post-testamento → la relación con el cliente no termina en la firma
- Documentación centralizada y cifrada → todo en un lugar, accesible por rol
- Comunicación con el cliente desde la plataforma → sin coordinación por email/WhatsApp
- Generación de escrituras con datos del expediente → sin redactar desde cero

---

#### `/pensado-para/asesorias`

**H1:** "El ISD recalculado automáticamente ante cada cambio normativo. La alerta antes del plazo. La trazabilidad ante la ATC."

**Lo que obtiene una asesoría:**
- Recálculo automático del ISD cuando cambia la normativa → sin repasar expedientes uno a uno
- Alertas de plazo antes de que el problema llegue al cliente → sin contingencias
- Trazabilidad auditable ante la ATC → cada paso del cálculo documentado con norma citada
- Modelo 650 autocompleto desde los datos del expediente → sin transcribir manualmente

---

### **PRECIOS — `/precios`**

**H1:** "Un expediente completo por menos de lo que cuesta una hora de trabajo manual."

**Subtítulo:** "Elige el plan que se ajusta a tu volumen. Empieza gratis."

| Plan | Precio | Lo que obtienes |
|------|--------|-----------------|
| Gratis | €0 | 1 expediente/año. Inventario, árbol familiar, cálculo básico. Para probarlo con un caso real. |
| Básico — €99/mes | 3 exp/mes, 2 usuarios | Motor fiscal ISD completo. Generación de cuaderno particional. Alertas de plazo. |
| Esencial — €149/mes | 10 exp/mes, 5 usuarios | Todo lo anterior + comparación de escenarios + procesamiento documental + soporte prioritario. |

**Sección FAQ:** Preguntas orientadas a resultado, no a features.
- "¿Qué incluye un expediente?" → Todo el flujo: inventario → cálculo → documentación
- "¿Puedo cancelar en cualquier momento?" → Sí, sin permanencia
- "¿Qué normativa cubre?" → Actualmente derecho foral catalán (CCCat, Llei 19/2010). Nacional en fase posterior.

**CTA:** "Empieza gratis con tu primer expediente" → [Crear cuenta]

---

### **DEMO — `/demo`**

**H1:** "25 minutos de demo. Sin presentación comercial. Directamente sobre el producto con un caso del sector."

**Subtítulo:** "Verás cómo se inventaría un patrimonio, cómo se calcula el ISD con la norma citada, y cómo se genera el cuaderno particional. Con datos reales."

**Embed:** Calendly o Cal.com para booking.

**Debajo del embed:**
- "¿Prefieres probar tú primero?" → [Empieza gratis sin tarjeta]
- 3 métricas: 35% ahorro de tiempo · 100% normativa catalana · 25 min de demo

---

## 4. PATRÓN DE DISEÑO REUTILIZABLE POR PÁGINA

Todas las páginas de producto siguen esta estructura:

```
1. HERO (fondo dark)
   - Eyebrow (categoría)
   - H1 → describe el OUTPUT, no la funcionalidad
   - Subtítulo → qué entra y qué sale
   - CTA primario [Solicita tu demo]
   - CTA secundario [Ver cómo funciona] (ghost con flecha)
   - Visual: captura o vídeo del resultado (derecha)

2. OUTPUTS (fondo white)
   - "Lo que obtienes" → 3-4 bloques con resultado tangible
   - Cada bloque: título de output + descripción de qué contiene
   - Visual: captura/mockup del resultado específico

3. ANTES / DESPUÉS (fondo surface)
   - Tabla comparativa: sin Ulpiano vs. con Ulpiano
   - Métricas de tiempo y esfuerzo
   - Orientado al dolor que el profesional reconoce

4. PRUEBA SOCIAL (fondo dark, opcional)
   - Testimonio o métrica
   - Números destacados en JetBrains Mono

5. CTA FINAL (fondo dark)
   - Frase de output: "Tu próximo [X], [resultado] en [tiempo]."
   - [Solicita tu demo]
```

---

## 5. ASSETS REQUERIDOS

### Vídeos (5-8s, sin audio, loop):
| Vídeo | Para qué página | Qué muestra |
|-------|-----------------|-------------|
| Dashboard principal | Home hero | Vista general de expedientes |
| Árbol familiar | Planificación | Herederos → diagrama construyéndose |
| Generación de documento | Documentación | Click → Word generado |
| Cálculo del ISD | Fiscalidad | Datos → embudo fiscal → cuota |
| Procesamiento OCR | Procesamiento | PDF → datos extraídos |

### Capturas (2x resolución, PNG):
| Captura | Para qué página |
|---------|-----------------|
| Panel de inventario de bienes | Planificación |
| Árbol familiar completo | Planificación |
| Embudo fiscal con números | Fiscalidad |
| Modelo 650 rellenado | Fiscalidad |
| Comparación de escenarios | Fiscalidad / Home |
| Documento generado en Word | Documentación |
| Flujo de procesamiento | Procesamiento |
| Panel de activos digitales | Activos digitales |

---

## 6. NAVEGACIÓN Y CROSS-LINKING

**Home →** CTAs llevan a `/demo`. Sección outputs enlaza a `/soluciones/*`. Tabs de "Para quién" enlazan a `/pensado-para/*`.

**Soluciones Hub →** Cada card lleva a la página de output específica. Al final, link a `/pensado-para` ("¿Cuál es tu perfil?").

**Páginas de output →** CTA siempre a `/demo`. Cross-link entre páginas relacionadas ("Si necesitas X, también te interesa Y").

**Páginas de persona →** Links a las soluciones relevantes para ese perfil. CTA a `/demo`.

**Precios →** CTA a `/demo` (plan paid) y a registro free (freemium).

---

## 7. CHECKLIST

- [ ] **HOME** — Prompt v2 listo, pendiente de componentes React + assets
- [ ] **SOLUCIONES HUB** — Grid de 5 outputs con resultado tangible
- [ ] **PLANIFICACIÓN** — 3 outputs + antes/después + vídeo árbol
- [ ] **DOCUMENTACIÓN** — 3 outputs + 2 pasos + vídeo generación
- [ ] **FISCALIDAD** — Embudo fiscal visual + 4 outputs + vídeo cálculo
- [ ] **PROCESAMIENTO** — Tabla entrada/salida + comparativa tiempo
- [ ] **ACTIVOS DIGITALES** — 3 outputs + diferenciador único
- [ ] **PARA QUIÉN** (x3) — Claim + resultados específicos + métrica
- [ ] **PRECIOS** — 3 planes orientados a output + FAQ
- [ ] **DEMO** — Landing simple con booking embed

---

**Cuando abordemos cada página, crearemos un prompt específico con la especificación visual completa (como el prompt v2 de la home).**
