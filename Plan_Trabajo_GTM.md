# Plan de Trabajo GTM — Ulpiano

> **Versión 1.0 · 2026-04-25**
> Documento operativo del go-to-market de Ulpiano.
> Complementario a `ulpianoweb/INDEX_MASTER.md` (producto + setup técnico) y a `ulpianoweb/LAUNCH_MASTER_INDEX.md` (lanzamiento web). Aquí solo GTM.

---

## 0. Contexto y reglas del documento

**Qué es este plan:** la hoja de ruta del go-to-market — qué demanda generamos, cómo la convertimos, con qué activos y con qué métricas. No es un plan de producto ni de ingeniería web.

**Cómo se usa:**
- Cada fase tiene **entregables concretos** con criterio de hecho. Sin entregable verificable, la tarea no está cerrada.
- Las tareas marcadas `[BLOQUEADO]` no se ejecutan hasta resolver su pre-requisito. No se hacen entregables públicos sobre supuestos sin confirmar.
- Documento vivo: cada cierre de fase actualiza este archivo y la sección de "Pendientes" del PMC.
- Fuente canónica de producto y voz: `/.agents/product-marketing-context.md`. Fuente canónica de buyer persona: `Ulpiano_Buyer_Personas_Estrategico.docx`. Fuente canónica de plan de producto/web: `ulpianoweb/INDEX_MASTER.md`.

**Relación con la web:**
- La web `ulpiano.es` está en producción (Next.js 16, multilingüe ES/CA en marcha).
- Cualquier cambio derivado de este plan que toque la web se ejecuta en `~/Desktop/ulpianoweb/`. Cambios que toquen estrategia/copy se reflejan primero en este plan o en el PMC y luego se llevan al código.

---

## 1. Estado actual (qué se da por hecho)

### 1.1 Web y SEO técnico
- Producción `ulpiano.es` con estructura completa: Home, 5 soluciones (`/soluciones/*`), 6 segmentos (`/pensado-para/*`), 5 modelos fiscales (`/modelos/*`), recursos con primer lead magnet (`/recursos/checklist-expediente-sucesorio`), precios, demo, contacto, legal.
- Plan A SEO ejecutado el 15 abril: SSR de modelos, hub `/soluciones` indexado, hreflang, FAQPage schema, cross-links entre silos, font display:swap.
- Plan B (catalán) en marcha: estructura `/ca/` parcial. **Auditoría SEO de abril detectó 12 URLs `/ca/*` declaradas pero inexistentes** — bloquea hreflang y debe resolverse antes de empujar tráfico orgánico catalán.
- GTM container desplegado, tracking-plan documentado.

### 1.2 Posicionamiento y mensajes (PMC)
- Categoría definida: "el sistema operativo de las herencias".
- Frontera IA-vs-determinista oficial: *"Inteligencia artificial donde aporta. Motor determinista donde es crítico."*
- Tono y voz, paleta visual y anti-claims documentados.
- Buyer persona detallado (6 segmentos × 2-3 personas) en `Ulpiano_Buyer_Personas_Estrategico.docx`.

### 1.3 Stack de herramientas conectadas
HubSpot (CRM), Ahrefs (SEO), Google Drive, Gmail, Calendar.

---

## 2. Bloqueos estratégicos (Fase 1)

Antes de generar contenido, campañas o materiales comerciales hay cuatro bloques que tienen que cerrarse. Sin estos, todo lo demás genera output genérico o contradice la web.

| # | Bloque | Estado | Bloquea |
|---|---|---|---|
| 1.1 | Acceso a la web local (symlink ya hecho) | ✅ Cerrado | — |
| 1.2 | **Análisis competitivo real** | 🔴 Abierto | Battlecards, páginas Ulpiano-vs-X, claim notarías, posicionamiento detallado |
| 1.3 | **Replanteo de pricing y packaging** | 🔴 Abierto | Landing `/precios`, propuestas, ad copy, calculadoras ROI, secuencias de email |
| 1.4 | Métrica defendible de reducción de horas | 🔴 Abierto | Uso público de la cifra "35%". Hasta resolver: usar contraste cualitativo "3 días → 20 minutos" |
| 1.5 | Buying triggers por persona | 🟡 Parcial | Cold-email efectivo, secuencias de outreach personalizadas |
| 1.6 | Autoridad técnica del fundador | 🟡 Parcial | About, byline blog, slide credibilidad deck, cierre cold email |
| 1.7 | Claim para notarías (depende 1.2 y 1.6) | 🔴 Abierto | Página `/pensado-para/notarias`, outreach a notarías |

### Tarea 1.2 — Análisis competitivo *(siguiente paso)*

**Objetivo:** mapear el ecosistema real de software adyacente a Ulpiano en España con nombres, claims, pricing visible, presencia digital y amenaza relativa.

**Listado inicial de competidores a investigar** (no exhaustivo — completar en sesión):
- *Software de gestión de despachos*: Lemontech, Sudespacho, aDriver, Aranzadi/lefebvre Cloud, Tirant Despacho, ProDespacho.
- *Software notarial*: SIGNO (Consejo General del Notariado), Mibac, eSCRITURA.
- *Motores fiscales / ISD*: Tirant Online (tributación), Aranzadi Fiscal, SuperContable.
- *Legal-tech sucesoria pura* (si existe en España): hueco a verificar — esta es la hipótesis Ulpiano.
- *Servicios funerarios con módulo herencia*: Mémora, Áltima, Funespaña, mediadores como FunerariaDigital.
- *Plataformas de planificación patrimonial / family office*: Addepar, Altoo, Ortec Finance (alto patrimonio).
- *Servicios "low-cost" para particulares*: HeritageOS, Testamenta, OkHeredero (verificar) — competidor por consumer pero referencia en SEO.

**Ejes de análisis por competidor:**
1. Categoría declarada y claim principal
2. Segmento(s) target
3. Modelo de pricing visible (¿hay o pricing oculto?)
4. Página comparativa propia ("vs X") — ¿la tienen?
5. Tracción visible (testimoniales, logos, presencia en eventos colegiales, Ahrefs domain authority)
6. Diferencial declarado vs Ulpiano: ¿en qué eje compiten? (precio / scope / vertical / servicio)
7. Presencia en catalán

**Output esperado:** documento `Analisis_Competitivo_v1.md` en raíz de Ulpiano GTM con tabla por competidor + síntesis de huecos de posicionamiento + recomendación de battlecards prioritarios.

**Cómo lo trabajamos:** sesión de 60-90 min. Yo abro Ahrefs vía MCP y la web de cada competidor, tú aportas conocimiento de mercado (a quién has visto en colegios, qué te citan los abogados). Iteración sobre tabla en directo.

### Tarea 1.3 — Replanteo de pricing y packaging *(en paralelo con 1.2)*

**Inconsistencias conocidas a resolver:**
1. ICP principal (abogado-gestor) tiene su dolor en cálculos ISD. Plan Básico actual (99€) **no incluye** motor ISD — está reservado al Esencial (149€). Falla diagnóstica.
2. ICP terciario (notarías) habla de "licencia por volumen" pero no hay tier visible.
3. Funerarias y aseguradoras son partnership, no SaaS. Falta modelo formal (revenue share / fee fijo / white-label).
4. No hay política anual vs mensual ni descuentos por compromiso.
5. "Ulpiano IA" aparece como feature de un tier sin definir si es addon o incluido — la web lo presenta como capa transversal.

**Decisiones que necesitamos tomar:**
- **Tier de entrada para abogados** — ¿Freemium funcional o demo guiada? El freemium "1 expediente/año" no es retentivo: o se prueba un expediente real o se da por cerrado.
- **Pricing principal** — ¿por usuario, por expediente, híbrido? Recomendación a debatir: base por usuario (cubrir capacidad del despacho) + variable por expediente cerrado (cubrir uso real). Alinea incentivos: el despacho que crece paga más.
- **Tier notarías** — ¿precio plano por notaría con N expedientes incluidos? ¿Modelo separado de marca ("Ulpiano para notarías")?
- **Partnership funerarias** — revenue share por familia derivada que se convierte en cliente Ulpiano. % a fijar.
- **Partnership aseguradoras** — modelo white-label con acuerdo marco. Precio enterprise.
- **Modelo Ulpiano IA** — incluido en todos los planes con límites por uso, o tier premium. Recomendación: incluido en todos pero con cuota mensual, fricción si superas.
- **Anual vs mensual** — descuento estándar 15-20% anual. Compromiso 12 meses.

**Output esperado:** `Pricing_v2.md` con nueva tabla, racional, FAQ interna y derivadas (qué páginas web hay que actualizar, qué emails hay que rehacer).

**Cómo lo trabajamos:** sesión conjunta de 2 horas. Después de 1.2 (competencia) porque el pricing necesita saber dónde nos sitúan los demás.

---

## 3. Demanda inbound — SEO + contenidos (Fase 2)

Pre-requisito: Fase 1 cerrada (al menos 1.2 y 1.3).

### 3.1 Cierre del SEO técnico pendiente

Heredado de la auditoría SEO de abril:
- Resolver las 12 URLs `/ca/*` huérfanas — o creando las páginas o ajustando los hreflang.
- Corregir `canonical` directo en modelo 652 y 653 → `alternates.canonical`.
- Resto de pendientes técnicos del Pla B catalán.

**Owner:** equipo web (Clara Gironatour según INDEX_MASTER). GTM hace seguimiento, no ejecución.

### 3.2 Topical authority — clusters y arquitectura

Tres clusters principales propuestos:
1. **Sucesiones en Catalunya (CCCat)** — pillar: "Guía completa de la sucesión en Cataluña". Subtemas: legítima en CCCat (Art. 451-5), pactos sucesorios (heredamientos), cuarta viudal, institución de heredero obligatoria, herencia transfronteriza CCCat + Reglamento 650/2012.
2. **ISD y modelos fiscales sucesorios** — pillar: hub `/modelos` (ya existe). Subtemas: cómo calcular el ISD paso a paso, reducciones autonómicas comparadas, plazos y recargos, modelos 650/651/652/653/660 (ya existen como páginas — añadir long-form alrededor).
3. **Cuaderno particional y documentación** — pillar: "Cómo redactar un cuaderno particional sin errores". Subtemas: inventario de bienes, valoración, prelegados, conflictos entre coherederos, generación documental.

**Output esperado para esta fase:**
- `SEO_Strategy_v1.md` con keyword research (Ahrefs MCP) por cluster, intent map, prioridad por dificultad/volumen, calendario de 12 artículos en 3 meses.
- Decisión sobre si abrir un cluster específico catalán (la auditoría SEO confirma volumen y competencia mínima) o publicar todos los artículos bilingües.

### 3.3 Contenidos blog — primeros 12 artículos

Mix recomendado: 50% TOFU (autoridad), 30% MOFU (intent comercial), 20% BOFU (decisión).

**TOFU (educativo, autoridad):**
- "Legítima catalana vs legítima del Código Civil estatal: 7 diferencias críticas"
- "Pactos sucesorios en Cataluña: qué son y cuándo conviene un heredamiento"
- "Cuarta viudal: cómo se calcula y cuándo se aplica"
- "Activos digitales en una herencia: criptomonedas, wallets y huella digital"
- "Reglamento UE 650/2012: cómo afecta a las herencias transfronterizas en la Costa Brava"
- "Calendario fiscal del expediente sucesorio en Cataluña"

**MOFU (problema → solución):**
- "Cómo evitar el error más caro al calcular la legítima catalana"
- "El cuaderno particional: 5 errores típicos que se detectan en notaría"
- "Por qué el Excel ha dejado de servir para gestionar herencias en un despacho"
- "Software de gestión de herencias: qué debe tener una buena herramienta en 2026"

**BOFU (comparativa, decisión):**
- "Ulpiano vs proceso manual: qué cambia en un despacho que gestiona 50 expedientes/año"
- "Ulpiano vs [competidor X]" *(BLOQUEADO por 1.2 — generar tras análisis competitivo)*

**Owner del copy:** sesiones conjuntas. Cada artículo 1.500-2.500 palabras, con citación de articulado CCCat / TSJ Cat / DOGC cuando aplique. Los firma Miquel (autoridad técnica del fundador, sec. 11.bis del PMC).

### 3.4 Lead magnets

Estado actual: existe `/recursos/checklist-expediente-sucesorio`.

**Pipeline propuesto** (1 nuevo lead magnet al mes en H2 2026):
1. *Calculadora ISD Cataluña* — herramienta interactiva web (free-tool-strategy). Doble función: SEO y captura.
2. *Plantilla de cuaderno particional CCCat* — descargable .docx con campos y notas explicativas.
3. *Guía: 7 reducciones del ISD catalán y cuándo aplicarlas* — PDF.
4. *Comparador ISD por CC.AA.* — herramienta web (despues de Cataluña, anticipa expansión).

### 3.5 Newsletter

Lanzar tras 4 artículos publicados. Frecuencia: quincenal. Formato: 1 artículo + 1 cita jurisprudencial comentada + 1 micro-actualización normativa. Audiencia objetivo: abogados, notarios, asesores.

---

## 4. Demanda outbound — comercial (Fase 3)

Pre-requisito: PMC sin pendientes críticos + análisis competitivo cerrado.

### 4.1 Cold email

- Reescritura de las 6 secuencias por persona (D1, D2, D3, A1, A2, A3, N1, N2, N3, FO1, FO2, F1, F2, AS1, AS2 — priorizar D1 + A1 + N1 que son las core).
- Asunto base ya validado: *"El cuaderno particional que os costó 3 días, en 20 minutos"* (PMC sec. 11). Generar 3-5 variantes A/B por persona.
- Secuencia: 1 email inicial + 3 follow-ups (días 3, 7, 14) + 1 break-up (día 21).
- Personalización por trigger: cambio normativo reciente, contingencia ATC del despacho, contratación reciente, presencia en evento colegial.

**Output:** `Email_Sequences_v1.md` con copy completo + criterios de segmentación + automatizaciones HubSpot.

### 4.2 LinkedIn

Dos canales separados:
1. **Perfil personal de Miquel** — 2-3 posts/semana. Contenido: micro-jurídico (CCCat aplicado, errores que ve en expedientes), opinión sobre actualidad legal-tech, behind-the-scenes de construir Ulpiano. Tono: abogado en ejercicio que construye un producto, no fundador startup.
2. **Página de empresa Ulpiano** — 1-2 posts/semana. Contenido: producto (capturas, mejoras), casos de uso, citas de jurisprudencia comentada, hitos.

**Estrategia de comentarios:** lista de 30 perfiles del ecosistema legal-tech español + 50 perfiles de abogados sucesoriales / notarios / asesores fiscales en Catalunya. Comentario sustantivo en sus posts 3 veces/semana — no autopromoción, sí presencia.

### 4.3 Sales enablement

- One-pagers por persona (D1, A1, N1, FO1, F1) con el claim oficial de cada segmento del PMC y el pricing definitivo (post 1.3).
- Deck comercial 8-10 slides reutilizable: problema → categoría → producto → frontera IA-vs-determinista → demo → pricing → siguiente paso.
- Script de demo 25-30 min ya en PMC sec. 11 — formalizar como playbook con anti-objection guide.

**Owner:** sesión de copy conjunta tras pricing v2 cerrado.

---

## 5. Partnerships y comunidad (Fase 4)

Empieza en paralelo con Fase 3 — los ciclos son largos y no esperan.

### 5.1 Colegios profesionales

Acciones inmediatas tras MVP demo-able:
- **ICAGI** — Miquel ya colegiado. Proponer ponencia "Sucesiones digitales: el expediente del 2026". Output: 1 webinar trimestral.
- **ICAB y resto de colegios catalanes (ICAM, ICATER, ICAVOR)** — same play, identificar comisión de civil/sucesiones, ofrecer ponencia + descuento para colegiados.
- **Colegio Notarial de Cataluña** — más sensible (regulatorio): ofrecer demo 1-a-1 a notarías referentes antes que webinar masivo.

### 5.2 Asociaciones

- **AEAFA** (Asociación Española de Abogados de Familia) — tienen práctica sucesoria activa.
- **AEDAF** (asesores fiscales) — núcleo del ICP A1.
- **Colegio de Gestores Administrativos de Catalunya (COGAC)** — ICP A2.

### 5.3 Eventos

- *EsLegalTech*, *Legal Innovation Summit*, *Forum Mundial AbogacíaTech* — calendario 2026 a confirmar. Presencia mínima: asistencia + networking; presencia óptima: speaking slot.

### 5.4 Integraciones técnicas

Identificación + outreach a software de despachos / notarías / asesorías para integraciones:
- ADRIVER, Lemontech, Sudespacho (despachos)
- A3, Sage, Wolters Kluwer (asesorías fiscales)
- SIGNO (notarías — más complejo, vía Consejo General del Notariado)

### 5.5 Funerarias y aseguradoras

Modelo de partnership formalizado en 1.3 (pricing). Outreach específico:
- Funerarias independientes Catalunya: 50 cuentas piloto en Girona/Barcelona.
- Grandes grupos (Mémora, Áltima): ciclo largo, requiere RFP/propuesta marco.
- Aseguradoras: Ocaso, Santa Lucía, Mapfre — propuesta white-label, 2027.

---

## 6. Lifecycle, CRM y medición (Fase 5)

### 6.1 HubSpot — pipeline

- Pipeline GTM: Discovery → Demo agendada → Demo realizada → Trial activado → Propuesta enviada → Cliente / Perdido.
- Properties personalizadas: persona-fit (D1/A1/N1/...), ARR estimado, fuente atribuída, expedientes/año declarados, normativa aplicable principal, piloto o full deal.
- Lead scoring híbrido: fit (segmento + tamaño) + intent (visitas, demo, descarga lead magnet, comentarios LinkedIn).

### 6.2 Lifecycle automatizado

- **Welcome series** post-signup (3 emails en 7 días): qué es Ulpiano, frontera IA-vs-determinista, primer caso de uso accionable.
- **Activation series** post-trial: día 1 (primer expediente cargado), día 3 (motor ISD usado), día 7 (cuaderno particional generado), día 14 (decisión de upgrade).
- **Win-back** para no-conversiones: 30 / 60 / 90 días.

### 6.3 Dashboard GTM

Métricas norte (semanal):
- Tráfico orgánico (sesiones + por cluster)
- MQLs (descargas + demos solicitadas)
- SQLs (demos realizadas)
- Demos → cliente (conversión)
- ARR nuevo
- Coste por canal (CAC blended y por canal)
- Payback period

Métricas secundarias: ranking por keyword de cada cluster, share of voice en Ahrefs, engagement LinkedIn (comments + DMs), respuesta a cold email por persona.

**Stack propuesto:** GA4 + HubSpot + Ahrefs + dashboard semanal en Looker o Notion. Alineado al `tracking-plan.md` ya existente.

---

## 7. Paid acquisition (Fase 6 — solo cuando proceda)

No abrir hasta que orgánico + outbound generen pipeline reproducible (objetivo: 20+ MQLs/mes orgánico antes de invertir en paid).

Cuando proceda:
- **Google Ads search** — keywords de alta intención: "software gestión herencias", "calculadora ISD Cataluña", "modelo 650 generador", "alternativa a [competidor]".
- **LinkedIn Ads** — segmentación por job title (abogado sucesorial, notario titular, asesor fiscal) + by company size (1-10 empleados). Bid solo en demos / lead magnet, no awareness.
- **Retargeting** — visitantes de `/precios` y `/demo` que no convirtieron.

Budget inicial conservador: 2.000€/mes split 60/40 Google/LinkedIn durante 3 meses para calibrar CPA, luego escalar.

---

## 8. Sistema operativo del proyecto

### 8.1 Cadencia
- **Sesión semanal de 60-90 min** (Miquel + asistente) — revisión de la fase activa, decisiones, próximos entregables.
- **Sprint mensual** — cierre de fase o sub-fase, retro corta, plan del mes siguiente.
- **Revisión trimestral del plan** — recortar, añadir, repriorizar según datos reales.

### 8.2 Documentos vivos
- `Plan_Trabajo_GTM.md` (este archivo) — actualizar tras cada cierre de fase.
- `.agents/product-marketing-context.md` — actualizar cuando se cierre un `[PENDIENTE]` o cambie el posicionamiento.
- `Analisis_Competitivo_v{n}.md`, `Pricing_v{n}.md`, `SEO_Strategy_v{n}.md`, `Email_Sequences_v{n}.md` — documentos derivados de cada fase, versionados.

### 8.3 Reglas de generación de contenido
1. Toda skill de marketing lee `.agents/product-marketing-context.md` antes de generar.
2. Las skills que dependan de un bloque `[PENDIENTE]` no se ejecutan o emiten output con disclaimer explícito.
3. Cualquier cifra (35%, "3 días → 20 minutos", reducciones %) tiene que tener fuente en el PMC o en un documento derivado. Sin fuente, no se publica.
4. Tono y voz: jurídico de precisión + comercial directo + consultivo, según contexto. Nunca lenguaje startup-bro ni superlativos.

### 8.4 Definición de hecho
Una tarea está "hecha" cuando:
- Hay entregable archivado en la carpeta del proyecto (.md, .docx, .pdf, página web, secuencia HubSpot).
- El entregable ha sido revisado y aprobado por Miquel (no solo generado).
- Se ha actualizado este plan o el PMC si la tarea cambia algo estratégico.

---

## 9. Próximos hitos

| Fecha | Hito | Entregable | Estado |
|---|---|---|---|
| 2026-04-25 | Plan de trabajo GTM v1 | `Plan_Trabajo_GTM.md` | ✅ Hoy |
| 2026-05-02 | Análisis competitivo v1 | `Analisis_Competitivo_v1.md` | 🔴 Siguiente |
| 2026-05-09 | Pricing v2 | `Pricing_v2.md` | 🔴 Después de competencia |
| 2026-05-16 | Buying triggers + autoridad fundador | Update PMC sec. 11.bis y sec. 5 | 🟡 |
| 2026-05-30 | SEO strategy + 3 primeros artículos | `SEO_Strategy_v1.md` + 3 posts publicados | ⚪ |
| 2026-06-13 | Email sequences v1 (D1, A1, N1) | `Email_Sequences_v1.md` + montaje HubSpot | ⚪ |
| 2026-06-30 | Sales enablement v1 | One-pagers + deck + playbook demo | ⚪ |
| 2026-Q3 | Pilotaje partnerships funerarias Girona | 5 funerarias firmadas | ⚪ |
| 2026-Q3 | Lifecycle automatizado completo | Welcome + activation + win-back en HubSpot | ⚪ |

---

## 10. Pendientes registrados (espejo del PMC)

- 1.2 Análisis competitivo real
- 1.3 Replanteo de pricing y packaging
- 1.4 Métrica defendible de reducción de horas
- 1.5 Buying triggers por persona
- 1.6 Autoridad técnica del fundador
- 1.7 Claim para notarías
- 3.1 Cierre SEO técnico pendiente (Plan B catalán)
- Buyer persona granular del ICP principal (20-50 vs 50-100 expedientes/año)
- Assets de comunicación adicionales (PMC sec. 11)

Cada pendiente se cierra con un entregable concreto y se borra de esta lista.

---

*Documento generado el 2026-04-25. Responsable: Miquel Fàbrega. Próxima revisión: tras cierre de Fase 1 (objetivo 2026-05-09).*
