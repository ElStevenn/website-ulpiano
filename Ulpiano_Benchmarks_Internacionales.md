# Ulpiano — Benchmarks internacionales (estate-tech US)

**v1 · 25 de abril de 2026** — brújula de la categoría desde el otro lado del charco.

| | |
|---|---|
| **Preparado para** | Miquel Fàbrega — fundador, Ulpiano (ICAGI 3861) |
| **Fuente principal** | `Estate_Tech_Competitive_Analysis_US_Vanilla_Wealth_Luminary.pdf` (uploaded 2026-04-25) |
| **Fuente complementaria** | getsnug.com (web fetch 2026-04-25) |
| **Alcance** | 4 players estate-tech US: Vanilla, Wealth.com, Luminary, Snug |
| **Qué NO es** | Competitive analysis. Estos players no compiten con Ulpiano en España (sistemas legales distintos: common law US vs CCCat). |
| **Qué SÍ es** | Espejo del futuro de la categoría — patrones de producto, pricing, GTM y monetización validados con 2 años de ventaja y millones invertidos. |
| **Doc relacionado** | `Ulpiano_Analisis_Competitivo.md` — análisis competitivo España (canónico). |

---

## 0. Por qué este doc existe

Estados Unidos lleva 2 años y rondas serie por delante en estate-tech. Aunque los players no compiten con Ulpiano por sistemas legales distintos, **lo que ya está validado allí informa qué construir, cómo cobrarlo y cómo distribuirlo aquí**. Ignorarlo sería ceguera estratégica. Mezclarlo con la competencia española sería ruido.

Por eso este doc vive aparte:

- El competitive analysis ES sigue diciendo claramente: "no hay competidor directo en España, el villano es Excel + Word + Memento."
- Este benchmark dice: "así se va a parecer la categoría dentro de 2-3 años. Aprende ahora."

---

## 1. Los 4 players — ficha resumen

### 1.1 Vanilla (justvanilla.com)
*Advisor-led estate planning platform que convierte documentos legales complejos en planes visuales accionables.*

| | |
|---|---|
| **Core** | End-to-end workflow + attorney-backed document generation + client-ready visuals |
| **ICP** | RIAs y wealth management firms; mass affluent → HNW → UHNW; ahora también solo/small via Starter |
| **Pricing** | SaaS anual per-advisor (Advanced/Expert/Enterprise) + Starter público mensual + add-ons (abstraction, expert review) |
| **Sticky features** | AI document abstraction ("copilot"), family trees + waterfalls + balance sheets + estate snapshot one-pager, on-demand doc generation 50 states, client portal + vault, integraciones con planning/CRM |
| **GTM** | Mid-market + enterprise sales, partnerships con instituciones financieras, content/academy/playbooks, land-and-expand, integration-led selling |
| **Señales recientes** | Inversión estratégica de instituciones financieras grandes; lanzamiento de Starter para captar firmas pequeñas; foco en ser "estate planning system of record" |

### 1.2 Wealth.com
*Enterprise-grade digital estate planning OS — documentos, AI, vaulting y scenarios en una sola plataforma.*

| | |
|---|---|
| **Core** | Plataforma operativa completa para advisory firms e instituciones — escala a miles de advisors con compliance guardrails y seguridad institucional |
| **ICP** | Advisors independientes y RIAs, **+ instituciones grandes (wirehouses, broker-dealers, private banks) desplegando en toda su red** |
| **Pricing** | Seat-based annual, "few thousand USD per advisor per year" reportado, **unlimited clients per seat** (sin per-client/per-doc fees) |
| **Sticky features** | AI assistant para document reading, scenario builder con tax + distribution modeling, secure vault + collaboration con attorneys/CPAs, onboarding playbooks, integraciones CRM/planning |
| **GTM** | Distribución enterprise vía broker-dealer y plataforma approvals, **B2B2C** vía advisor, thought leadership + conferences, partner-led deployment con home office |
| **Señales recientes** | Approvals de instituciones grandes reportados; high-profile venture backing; cadence de features AI + workflow enterprise |

### 1.3 Luminary (withluminary.com)
*AI-powered trust & estate data platform optimizada para casos complejos.*

| | |
|---|---|
| **Core** | Digitalización + visualización + colaboración para estates con multi-entity, multi-trust y provisiones bespoke |
| **ICP** | **Family offices** y UHNW RIAs, advanced planning groups, estate attorneys + tax professionals; ampliación vía Go tier |
| **Pricing** | Tiered (Go / Pro / Enterprise) generalmente by quote; upsell de modeling avanzado + integraciones |
| **Sticky features** | Bulk AI document ingestion (procesa muchos docs a la vez), editable diagrams (entity relationships + waterfalls) con one-click presentation export, hypothetical modeling avanzado, team collab con permisos legal/tax/advisory |
| **GTM** | High-touch sales a advanced planning leaders + family office ecosystems, demos flagship, niche awards + peer references, integration-led visibility en stacks de family office |
| **Señales recientes** | Series funding con strategic participation del wealth ecosystem; lanzamiento de Go (pivot de purely niche a broader advisor adoption); innovation-led moat en complex case handling |

### 1.4 Snug (getsnug.com) — *añadido por Miquel*
*White-label estate planning para servicios financieros — la institución vende con su marca, Snug está debajo.*

| | |
|---|---|
| **Core** | "Launch white-label estate planning in under a week" — la marca del cliente B2B se queda en el front, Snug invisible en el back |
| **ICP** | **Cuatro verticales**: Insurance (IMOs, FMOs, BGAs, MGAs, agencies, enterprise) · Wealth Management (RIAs, broker-dealers, financial planners) · Tax & Accounting (CPA firms, tax preparers, accounting firms) · Attorneys (estate planning, elder law, family law) |
| **Pricing** | White-label licencing + **revenue sharing** con cada plan vendido. Pricing público en /pricing (sin abrir aquí). Modelo: la institución compra licencia + cada agente que cierra plan se lleva % |
| **Sticky features** | White-label total (logo + dominio del cliente B2B), agent portal con onboarding 1.5h, revenue sharing automático con splits transparentes, attorney-approved language compliant en 50 estados, client dashboard, enterprise reporting con métricas por agente |
| **GTM** | **B2B2B2C** puro — vende a la institución profesional, ésta lo despliega a sus agentes, los agentes cierran al cliente final con la marca de la institución. "Schedule demo" como CTA único, sin self-serve |
| **Señales públicas** | 18.000+ businesses onboarded, top agente facturando $48k/año en planes vendidos, ejemplo de cuenta con $157k revenue + 38 agentes activos. La empresa publica `/llms.txt` y `/llms-full.txt` (señal de madurez técnica reciente) |

---

## 2. Patrones comunes — qué dice la categoría

Mirar a los 4 juntos revela cinco patrones que **se repiten sin excepción**. Cada uno es una pista para Ulpiano.

### 2.1 El sticky stack común
Los 4 tienen **el mismo loop de retención**:

1. **AI document ingestion** — lectura de documentos existentes (testamentos, escrituras, certificados) y conversión a datos estructurados.
2. **Visualizaciones explicables** — family tree, waterfall, balance sheet, estate snapshot one-pager. Esto es **el deliverable que el profesional entrega al cliente**, y el cliente lo PIDE cada año.
3. **Scenario modeling** — what-if planning con simulación fiscal y de distribución.
4. **Secure vault con triggers de revisión anual** — almacena, alerta de cambios, fuerza la conversación recurrente.
5. **Integraciones con el workflow del profesional** — CRM, planning tools, portfolio platforms. Sin esto, el producto se queda en silo y muere.

> **Regla de la categoría:** los 4 elementos juntos son lo que crea sticky. Cualquiera de ellos por separado es feature, no plataforma.

### 2.2 GTM dominante — advisor-led, no DTC
**Ninguno** de los 4 vende directo al consumidor. Todos pasan por el profesional intermedio (advisor, attorney, CPA, agente de seguros). Razón: confianza, compliance, y base instalada del profesional. **Esto valida tu apuesta B2B en España.** No hace falta pivotar a B2C.

### 2.3 Pricing dominante — seat-based annual, unlimited clients
**Per-advisor/year, sin caps por cliente o documento.** Anual sobre mensual. Excepción: Vanilla Starter público mensual como funnel de entrada. Wealth.com lo articula explícitamente: "no per-client or per-document fees in core; unlimited clients per seat simplifies forecasting."

### 2.4 Distribución crítica via partnerships institucionales
Los 4 priorizan **partnerships con bancos, broker-dealers, wirehouses, IMOs/FMOs**. Es el accelerant principal. SEO es lever secundario.

### 2.5 Categoría validada por capital
Vanilla y Wealth.com con backing institucional grande. Luminary serie + strategic participation. Snug con 18.000+ businesses onboarded. **La categoría "estate-tech for advisors" está financiada y consolidándose en US.** Lo que se construye allí informa lo que se construirá aquí en 24-36 meses.

---

## 3. Cinco lecciones aplicables a Ulpiano

### Lección 1 — Te falta el **efecto visual**, no el dato

**Ulpiano ya tiene** family tree y balance sheet de impuestos. Lo que **falta es la capa visual presentable** — el cómo se entrega al cliente final como deliverable producido por el abogado.

Vanilla y Luminary venden literalmente "client-ready visuals + one-click presentation outputs" como producto core. Es lo que hace que el cliente pida el plan visualizado en cada review anual. Es lo que el abogado puede mostrar con orgullo en una reunión de despacho. Es lo que diferencia "tener los datos" de "tener un deliverable".

> **Acción:** en el roadmap post-MVP, separar conceptualmente "tener el dato" (✅ ya hecho) de "convertirlo en un deliverable visual presentable" (⚠️ pendiente). Es trabajo de UX/design del output, no de motor jurídico. **Es una de las inversiones de producto con más leverage en sticky.**

### Lección 2 — Pricing seat-based annual, no caps por expediente

Tu pricing actual (99-149€/mes con caps por expedientes/mes) **va contra la corriente de la categoría madura**. La categoría está en seat-based annual, unlimited clients per seat. Razón: el comprador profesional necesita **predecir el coste**, y un cap por expediente penaliza precisamente cuando empieza a usar más el producto (señal de éxito que castigas).

> **Acción:** cuando se aborde el rediseño de pricing (workstream pendiente del PMC §8), considerar como modelo principal **seat-based annual con unlimited expedientes per seat**, con tier Starter mensual público de entrada (à la Vanilla). El modelo actual es heredado del SaaS B2C, no del B2B vertical.

### Lección 3 — Partnership-led, no SEO-led

Los 4 ganaron escala vía partnerships institucionales, no vía SEO. SEO es deferred lever. **La distribución crítica es B2B2C** vía la institución que ya tiene la relación con el cliente final.

> **Acción:** refuerza la apuesta de partnerships con Colegios + aseguradoras + banca como **canal núcleo, no auxiliar**. Esto valida la decisión ya tomada en el competitive ES (§8.2): presencia colegial bajo Fàbrega Legal ya empezando, partnerships transaccionales tras 10-20 clientes.

### Lección 4 — La sticky es el **review anual**, no la venta inicial

El loop de retención no es "te vendí una vez". Es "vuelves cada año a actualizar tu plan porque tu plataforma me alerta de un cambio y mi advisor tiene una excusa para conversar contigo". Visual del delta año-a-año. Reminders por cambio normativo. Triggers por hito vital.

> **Acción:** en el roadmap post-MVP, priorizar features que **generen recurrencia anual**: alerts por cambio normativo CCCat, reminders de revisión por cambio familiar (matrimonio, nacimiento, fallecimiento), delta visual entre planes, evento "review anual" como rutina del despacho con el cliente.

### Lección 5 — Down-market tier para funnel, pero después

Vanilla lanzó Starter; Luminary lanzó Go. **Patrón claro:** producto enterprise primero, luego abren tier accesible público para captar early adopters y subirlos. **Nunca al revés.**

> **Acción:** cuando Ulpiano esté maduro con 50+ clientes pagantes, considerar plan público Starter para abogados solos / despachos micro como entrada al funnel. **No ahora.** Producto al 70% + 0 clientes ≠ momento de Starter público.

---

## 4. Apuesta Snug — modelo white-label aplicado a España

Snug es **el más translatable** de los cuatro a tu contexto. Es la mejor pista concreta para el canal aseguradoras/banca/funerarias que ya está en el PMC §5 pero sin modelo de monetización claro.

### 4.1 Lo que hace Snug, en una frase
La aseguradora (o banco, o asesoría) ofrece estate planning como producto **con su marca**, en su dominio, con sus colores. Snug está debajo, invisible. Cada agente de la institución que cierra un plan se lleva un %. La institución se lleva otro %. Snug se lleva su licencia + share.

Resultado público: **18.000+ businesses onboarded, top agentes facturando $48k/año en planes vendidos**.

### 4.2 Cómo se traduce a España
La oportunidad equivalente: **Catalana Occidente, Mapfre, Mutua, Generali, CaixaBank Banca Privada, Sabadell Patrimonio** ofreciendo *"Plan sucesorio [Marca]"* white-label powered by Ulpiano.

Por qué tiene sentido específicamente aquí:

- **El plan sucesorio es producto financiero adyacente al seguro de vida** — las aseguradoras ya lo tratan como cross-sell natural.
- **La banca privada catalana** tiene clientes con patrimonio + necesidad de plan sucesorio + cero infraestructura interna para producirlo. Hoy lo derivan a despachos boutique. White-label internalizaría esa derivación.
- **Las aseguradoras tienen la relación con el familiar en el momento del fallecimiento** (gestión del seguro de vida). Ofrecer el plan ya hecho con su marca cierra el círculo emocional + comercial.
- **Las funerarias ya están en el PMC como canal** (sec. 5). El modelo white-label es perfectamente compatible.
- **Modelo de derecho civil propio (CCCat)** crea una barrera de entrada que ninguna plataforma anglosajona puede salvar — Ulpiano sería **el único proveedor white-label posible** porque el motor normativo CCCat no existe fuera.

### 4.3 Riesgo a vigilar
Si Snug abre operaciones EMEA / Spain, tendrías un competidor con producto maduro + modelo de distribución validado. Hoy está bloqueado por idioma jurídico US (50 estados, common law, attorney-approved language). **No es escenario imposible a 24-36 meses si una aseguradora europea grande hace adquisición / partnership.** Vigilar trimestralmente noticias de expansión EMEA.

### 4.4 Acción concreta para Ulpiano
- **Hoy:** dejar la hipótesis registrada en el roadmap GTM de aseguradoras/banca del PMC §5. No construir nada todavía.
- **Tras 10-20 clientes B2B SaaS pagantes:** evaluar piloto de modelo white-label como segunda línea de monetización con 1 partner ancla (preferentemente aseguradora catalana mediana, no top-tier — menos riesgo, más velocidad).
- **No abrir conversación con bancos privada hasta tener un caso piloto con aseguradora cerrado.** Los bancos privada son comprador conservador y necesitan referencia activa para creer.

---

## 5. KPIs benchmark del estate-tech US

Útiles cuando midas tu propio funnel post-launch. Del apéndice del PDF + Snug:

| KPI | Definición | Benchmark observado |
|---|---|---|
| Time-to-first-plan | De intake a deliverable draft | Snug: <5 días para el negocio entero, 1.5h onboarding agente |
| Document ingestion accuracy | % campos auto-extraídos vs manual | No publicado — pedirá research dedicado |
| Client completion rate | % clientes que completan intake + sign docs | No publicado |
| Annual review triggers | % households con review recurrente anual | No publicado — proxy: % retención anual a 24 meses |
| Advisor activation | Households onboarded per advisor per month | Snug: agente top performer cierra ~24 plans/año |
| Attach rate premium modules | % deals que adoptan scenario, tax, attorney review | No publicado |
| Top performer revenue | Revenue/año de un agente top vendiendo planes | Snug: $48.000/año |

> **Uso:** cuando empieces a medir tu propio funnel con los primeros pilotos, esta tabla te da dónde caer (target) y dónde estás vs. el estándar de la categoría.

---

## 6. Lo que este doc NO hace

- **No actualiza el competitive analysis España** (`Ulpiano_Analisis_Competitivo.md`). Estos players no compiten con Ulpiano hoy.
- **No prescribe un pivot.** Ulpiano sigue siendo SaaS B2B vertical sucesorio CCCat. La hipótesis Snug white-label es **segunda línea de monetización**, no sustituto del modelo core.
- **No es plan de producto.** Es brújula. El roadmap concreto se construye en otro doc cuando llegue su turno.
- **No incluye análisis financiero detallado** de los 4 players (rondas, valuation, unit economics). Si llega a ser relevante para una conversación con inversores, se hace research dedicado.

---

## 7. Próxima revisión

Triggers para versionar a v2:

- Snug o competidor anglosajón anuncia operaciones EMEA / Spain.
- Vanilla o Wealth.com lanzan partnership con aseguradora europea grande.
- Algún player publica unit economics o pricing concreto que invalide los supuestos de §3.
- Cuando Ulpiano alcance 10-20 clientes pagantes y se evalúe seriamente abrir el piloto white-label de §4.4.

---

*Documento de benchmark — no es competitive analysis. Vive en paralelo a `Ulpiano_Analisis_Competitivo.md`. Ambos referenciados desde el PMC.*
