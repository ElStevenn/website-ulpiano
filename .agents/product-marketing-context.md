# Product Marketing Context — Ulpiano

> Este archivo es leído por todas las demás skills antes de ejecutarse.
> Define el producto, el mercado, el cliente y el posicionamiento de Ulpiano.

---

## 1. Qué es el producto

**Ulpiano** es una plataforma SaaS B2B de planificación y gestión sucesoria integral para el mercado legal español.

No es un software de testamentos. Es la infraestructura digital que rodea al testamento: modela el patrimonio del causante, construye el escenario hereditario, calcula automáticamente legítimas y cuotas hereditarias, y liquida el Impuesto sobre Sucesiones y Donaciones (ISD) según la normativa autonómica aplicable.

**Categoría mental:** Ulpiano no es "un software más del mercado legal". Es el sistema operativo de la gestión sucesoria — el lugar donde ocurre todo el proceso. Ulpiano es a las herencias lo que un ERP es a la contabilidad o lo que un CRM es a las ventas.

**Posicionamiento:** Plataforma, no herramienta. Infraestructura, no feature. Estándar emergente del sector.

**Modelo de negocio:** SaaS B2B + plataforma transaccional (variable por modelo y bien generado) + servicio digitalizado (Ulpiano Back-Office). Modelo análogo a Finch Legal aplicado a sucesiones en España. La combinación de las tres líneas convierte la valoración SaaS-pura (~5-7× ARR) en valoración SaaS+transaction blend (~8-12× ARR).

**Claim principal (tagline):** *"El sistema operativo de las herencias."*

**Variantes del claim:**
- Corta: *"Herencias sin caos."*
- Posicionamiento: *"Precisión sucesoria, a escala."*
- Orientada al profesional: *"Tu despacho. Su proceso. Nuestro sistema."*

**Hero de web (texto oficial — usar literalmente):**
> "De inventario a cuaderno particional. Sin errores de cálculo. Sin revisión manual de la norma."
> Ulpiano es la plataforma que estructura, valida y documenta el proceso sucesorio completo. Para abogados, asesores y notarías que gestionan herencias con volumen, complejidad y responsabilidad profesional.

**URL:** ulpiano.es

**Nombre:** Evoca a Domicio Ulpiano, jurista del Derecho romano clásico. Transmite autoridad jurídica, rigor y permanencia.

---

## 2. Problema que resuelve

El proceso sucesorio tradicional está roto en tres niveles:

**Ineficiencia operativa:** los cálculos se hacen en Excel, la documentación se coordina por email y WhatsApp, los plazos fiscales se siguen manualmente. Un expediente complejo consume 20–40 horas de trabajo técnico.

**Riesgo legal y fiscal:** aplicar una normativa autonómica incorrecta, no aplicar una reducción en plazo, o generar una incoherencia entre el documento notarial y la liquidación fiscal puede derivar en contingencias para el profesional y el cliente.

**Falta de transparencia:** el cliente vive la herencia como una caja negra. No entiende por qué paga lo que paga ni qué decisiones se están tomando en su nombre.

Ulpiano resuelve los tres con: flujos guiados, motor normativo automatizado, y panel de cliente comprensible.

---

## 3. Solución — Módulos funcionales

### 3.1 Gestor Patrimonial
Inventario completo y valorado del patrimonio del causante:
- Inmuebles (con cargas, titularidades, coeficientes de participación)
- Productos financieros (cuentas, fondos, acciones)
- Empresa familiar y participaciones societarias
- Bienes afectos a actividad económica
- **Activos digitales: criptomonedas, wallets, cuentas online** (categoría de primer nivel, sin competidor directo en el mercado español)
- Derechos de crédito y otros bienes muebles

El sistema calcula automáticamente el **caudal relicto neto** = activos − pasivos deducibles.

### 3.2 Escenario Sucesorio
- Designación de herederos y legatarios con grupos de parentesco
- Cálculo automático de legítimas (Art. 451-5 CCCat: 1/4 del caudal computable)
- Gestión de prelegados con regla de cómputo a cuenta de legítima
- Simulación comparativa entre escenarios alternativos (ej. herencia directa vs. donación en vida vs. usufructo al cónyuge)

### 3.3 Motor Fiscal ISD
Embudo de liquidación completo por beneficiario:
- Base imponible → Reducciones → Base liquidable → Tarifa → Coeficiente multiplicador → Bonificación → Cuota a ingresar
- Reducciones implementadas: parentesco, discapacidad, persona mayor de 75 años, vivienda habitual (95%, máx. 500.000€), empresa familiar (95%)
- Bonificación Grupos I y II (tablas progresivas) y cónyuge/pareja (99% plano)
- Recargo por extemporaneidad según Art. 27 LGT
- **Implementación actual: normativa catalana (Llei 19/2010 y modificaciones posteriores)**

### 3.4 Tramitación del Expediente
- Gestión completa: apertura → inventario → distribución → cálculo fiscal → documentación → presentación
- Generación de modelos tributarios:
  - **Modelo 660** — inventario
  - **Modelo 650** — autoliquidación individual por heredero (Sucesiones)
  - **Modelo 651** — Donaciones
  - **Modelo 652** — Seguros
  - **Modelo 653** — Consolidación
- Alertas automáticas de plazos fiscales (vencimiento período voluntario: 6 meses desde fallecimiento)
- Control documental por expediente con acceso por rol

### 3.5 Activos Digitales
- Criptomonedas con valoración a fecha de devengo
- Identificación de wallets y exchanges
- Huella digital: redes sociales, servicios cloud, instrucciones de gestión o eliminación
- **Diferenciador único:** ninguna herramienta generalista del mercado español los trata como categoría fiscal estructurada

### 3.6 Ulpiano IA — la frontera entre IA y motor determinista

**Posicionamiento oficial (literal — usar tal cual en comunicación):**
> *"Inteligencia artificial donde aporta. Motor determinista donde es crítico."*

Ulpiano IA aplica IA sólo a lo que la IA hace bien y se aparta de cualquier cálculo que pueda acabar ante Hacienda, un juez o un cliente. Esos cálculos los resuelve un motor determinista auditable, con la norma citada y cada paso trazable.

**Lo que SÍ hace Ulpiano IA:**
- **Lectura de documentos** — extrae datos estructurados de testamentos, certificados de defunción, últimas voluntades, escrituras, notas simples y extractos bancarios. OCR + NLP entrenado con documentación sucesoria española. Confianza por campo y enlace a la línea del PDF original.
- **Redacción asistida** — borradores del cuaderno particional y otros escritos del expediente.
- **Consulta normativa** — respuestas con cita literal del articulado.
- **Validación de coherencia** — detecta incoherencias entre piezas del expediente.

**Lo que NO hace Ulpiano IA (motor determinista, nunca IA):**
- Cálculo de legítimas según el CCCat
- Motor fiscal ISD (base, reducciones, bonificaciones)
- Generación de modelos tributarios (650, 651, 652, 653, 660)
- Escenarios sucesorios y simulaciones

**Principio rector:** *"Ulpiano IA acompaña; no decide lo que no debe decidir. Tú verificas, Ulpiano no inventa."*

---

## 4. Mercado y foco geográfico

**Mercado primario:** Cataluña (derecho civil foral — Codi Civil de Catalunya / Llei 19/2010)

**Razón del foco catalán:**
- Sistema jurídico diferenciado con legítima reducida al 25%, pactos sucesorios (heredamientos), cuarta viudal y obligatoriedad de institución de heredero
- Girona: menor densidad competitiva de las cuatro provincias catalanas
- Costa Brava: 21,6% de población extranjera → nicho de herencias transfronterizas bajo Reglamento UE 650/2012

**Expansión planificada:** Nacional en fase posterior, una vez estabilizado el motor normativo catalán.

---

## 5. Clientes objetivo (ICP)

### ICP Principal — Abogado-gestor de despacho mediano
- 5–15 años de ejercicio profesional
- Gestiona herencias de forma recurrente — entre 20 y 100 expedientes/año
- Despacho de 2–10 personas
- Herramienta actual: Excel, Word, o software genérico
- Principal dolor: cálculos ISD manuales y coordinación fragmentada con asesor fiscal
- **No es early adopter** — necesita ver que funciona antes de comprarlo
- Decide la compra él mismo, ciclo 2–4 semanas

### ICP Secundario — Asesor fiscal con cartera hereditaria
- Necesita calcular ISD rápido y con trazabilidad auditable ante la ATC
- Muy orientado a ROI concreto: cuánto tiempo ahorra por expediente

### ICP Terciario — Notaría
- Enfoque operativo-documental
- Modelo de licencia por volumen de expedientes
- **Nota pricing v1:** la grid de tiers SaaS actual (sec. 8) NO está optimizada para notarías — claim, plan/licencia y volumen son específicos. Pendiente diseñar v2 cuando se cierre el claim notarial (cf. sec. 6 y workstream pendiente sobre notarías).

### ICP Back-Office (servicio outsourcing operativo)
- Cualquier despacho con ≥10 expedientes/año que quiera externalizar el papeleo tramitable
- Track distinto del SaaS: se vende como add-on transversal disponible para cualquier plan SaaS (incluido Free)
- Comprador: el mismo abogado-gestor del ICP principal, pero con un trigger distinto — "no quiero gestionar más papeleo, quiero captar más clientes"
- Pricing y mecánica completos en sec. 8.bis y en el doc maestro `Ulpiano_Pricing_Packaging_v1.docx`

### Programa Partners — Funerarias, Aseguradoras y Banca privada (track separado)

Funerarias y aseguradoras/banca privada se agrupan bajo un **Programa Partners** que va por carril separado de los tiers SaaS. No son compradores SaaS estándar; el modelo es revenue share o licencia plataforma + paquete Ulpiano Back-Office adaptado.

- **Funerarias:** canal de derivación, no comprador del software. Modelo: partnership con revenue share.
- **Aseguradoras y banca privada (hipótesis white-label):** **el canal con mayor leverage potencial** según benchmark de Snug (US): la institución ofrece "plan sucesorio [marca]" white-label a sus clientes con revenue sharing.
  - Targets prioritarios España: Catalana Occidente, Mapfre, Mutua, Generali, CaixaBank Banca Privada, Sabadell Patrimonio.
  - Barrera de entrada que protege a Ulpiano: motor normativo CCCat — ningún proveedor anglosajón (Snug incluido) puede prestar servicio aquí sin construir la pieza foral.
- **Cuándo abrirlo:** tras 10-20 clientes B2B SaaS pagantes. Antes no. Piloto con aseguradora catalana mediana, no top-tier.
- **Detalle del modelo y benchmarks:** ver `Ulpiano_Benchmarks_Internacionales.md` §4 (raíz workspace).
- **Pricing v1 NO cubre Partners.** Diseño v1 del programa pendiente (workstream abierto).

### **No son buyer persona:**
- Grandes despachos con sistemas propios
- Particulares sin asesoramiento profesional

> **Fuente canónica del buyer persona:** este resumen es una versión simplificada. El documento de referencia es **`Ulpiano_Buyer_Personas_Estrategico.docx`** (raíz del proyecto), que incluye 6 segmentos × 2-3 personas con perfil, objetivos, pain points, motivaciones, objeciones, nivel de digitalización y proceso de decisión. Las skills que profundicen en un segmento concreto (cold-email, sales-enablement, copywriting por persona) **deben leer ese .docx, no esta sección**.

> **[PENDIENTE]** Trabajos en marcha sobre buyer persona:
> - Definir buying triggers concretos por persona (¿qué pasa el lunes para que decida probar Ulpiano?)
> - Granular el ICP principal por volumen (20–50 expedientes/año vs. 50–100/año compran muy distinto)
> - Validar el orden de prioridad GTM con datos reales conforme entren los primeros pilotos

---

## 6. Propuesta de valor por segmento

| Segmento | Claim oficial (usar literalmente) |
|---|---|
| Despachos de abogados | "El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos. Con el derecho foral catalán integrado, sin excepciones." |
| Asesorías fiscales | "El ISD cambia. Tus expedientes activos, no. Ulpiano recalcula automáticamente cada expediente afectado por un cambio normativo y te avisa antes de que el problema llegue al cliente." |
| Notarías | "El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa." |

> **[PENDIENTE]** El claim de notarías es menos específico que los otros dos. Pendiente de afinar en sesión conjunta una vez definida la propuesta concreta para el segmento (cf. buyer persona N1/N2/N3).

**Los 3 claims vendibles de Ulpiano:**
1. **Produce antes** — reducción significativa en tiempo de gestión por expediente *(cifra exacta pendiente — ver nota abajo)*
2. **Produce mejor** — menos errores, más coherencia fiscal y civil, trazabilidad auditable
3. **Explica mejor** — el cliente entiende qué está pagando y por qué

> **[PENDIENTE]** La métrica "35%" usada hasta ahora es estimativa interna sin benchmark. No usar en comunicación pública hasta que se defina y documente una métrica defendible (piloto, simulación interna, estudio de caso). Hasta entonces, hablar de "reducción significativa" o usar el contraste cualitativo "3 días → 20 minutos" del email outbound, que sí es defendible en demo.

---

## 7. Competencia

**Competidor principal real:** el proceso manual (Excel + Word + Aranzadi Memento + email + coordinación telefónica). Confirmado por análisis competitivo v1 (abril 2026) sobre 14 dominios del ecosistema español + datos Ahrefs ES.

**Tres claims de cierre del análisis:**
1. El competidor real hoy es el proceso manual (Excel + Word + Memento).
2. No existe competidor directo en workflow integrado sucesorio CCCat (civil + fiscal + documental).
3. Lefebvre-Sarrut, Wolters Kluwer, Tirant y vLex son riesgo de extensión a 18-36 meses; vigilar pero no comunicar contra ellos.

**Diferenciadores de Ulpiano:**
- Motor normativo territorial (CCCat) — única solución con derecho foral catalán integrado
- Activos digitales como categoría fiscal estructurada — sin competidor en España
- Generación de documentos públicos coherentes desde datos estructurados
- Trazabilidad y auditabilidad del razonamiento
- Frontera explícita "IA donde aporta, motor determinista donde es crítico" — único mensaje articulado en legal-tech ES

**Categorías de competidores (resumen — ver doc canónico para detalle):**
- A. Incumbentes fiscal/legal (Wolters Kluwer, Aranzadi, A3, Tirant) — adyacentes, no especializados
- B. Software fiscal con módulo ISD (Esofitec, Iuristax, a3ASESOR) — más cercanos al motor, sin workflow civil ni cuaderno particional
- C. Gestión de despachos (Sudespacho, Lemontech, Iberley) — adyacentes, pueden coexistir e integrarse
- D. Workflow testamentaría enterprise (Isyc Legatus) — nicho banca privada, no compite por canal
- E. Despachos-agencia con tech propia (Herenciasonline, Tramitamiherencia) — threat condicional medio si productizan stack a B2B SaaS
- F. Consumer-tech D2C (milegadodigital, Testamenta, tellmebye, leggado) — mercado distinto, no compite hoy
- G. Software notarial (SIGNO) — no compite, integración futura a estudiar en fase 2

**Threat alto (movimiento esperado 12-24 meses):** Lefebvre-Sarrut, Wolters Kluwer.
**Threat medio (vigilancia trimestral):** despachos-tech (cat. E), vLex/Tirant IA, aseguradoras y bancos con tramitación, funerarias verticalizando.
**Threat bajo:** el resto.

**Posicionamiento contra competencia:**
- **Enemigo narrativo público:** Excel + Word + Memento como villano operativo (única narrativa pública).
- **Silencio público sobre Lefebvre/WK/Tirant/vLex** hasta que la battlecard interna esté lista. No regalar atención al incumbent.
- **Tres battlecards core** (ver doc canónico §7): vs WK/A3/Aranzadi, vs Sudespacho/Lemontech, vs proceso manual (default, ~90% de los casos).

**Doc canónico:** `Ulpiano_Analisis_Competitivo.md` (raíz del workspace) — consolida análisis SEO Ahrefs sobre 14 dominios + capa estratégica (mapa, moats, threat assessment) + 3 battlecards listos. Reemplaza al `Analisis_Competitivo_v0.md`. Próxima revisión v2 al cerrar pricing privado de competidores y datos de deals (input de pilotos).

**Doc complementario (no competencia, sí brújula):** `Ulpiano_Benchmarks_Internacionales.md` — análisis de 4 players estate-tech US (Vanilla, Wealth.com, Luminary, Snug) que validan futuro de la categoría. Lecciones aplicables: efecto visual (Ulpiano ya tiene family tree y balance sheet — falta capa visual presentable), pricing seat-based annual sin caps, sticky loop = review anual, y la apuesta white-label de Snug como modelo para el canal aseguradoras/banca (PMC §5).

**Skills downstream desbloqueadas:** `competitor-alternatives`, `competitive-brief`, battlecards, páginas "Ulpiano vs X" pueden generarse a partir de esta sección + el doc canónico. Cualquier skill que use pricing de competidores debe marcar el dato como "estimado de mercado" hasta que se cierre v2.

---

## 8. Modelo de negocio

> **Estado:** ✅ Cerrado para v1 (abril 2026). Doc maestro canónico: **`Ulpiano_Pricing_Packaging_v1.docx`** (raíz del workspace). Esta sección es el resumen ejecutivo; cualquier comunicación de pricing (landing, propuestas, ad copy, calculadoras de ROI) debe usar el doc maestro como fuente de verdad.

Modelo híbrido en tres líneas combinables:

1. **Suscripción SaaS** — flat mensual/anual por tier.
2. **Plataforma transaccional** — variable post-cuota por modelo generado y bien declarado.
3. **Ulpiano Back-Office** — servicio digitalizado de tramitación outsourceado (sec. 8.bis).

### 8.1 Tiering SaaS

| | Free | Esencial | Avanzado ⭐ | Pro | Enterprise |
|---|---|---|---|---|---|
| Mensual | 0€ | 199€ | 449€ | 999€ | A medida |
| Anual (–15%) | 0€ | 169€/mes | 382€/mes | 849€/mes | A medida |
| Usuarios incluidos | 1 | 2 | 5 | 10 | A medida |
| Usuario extra/mes | — | 15€ | 15€ | 15€ | A medida |
| Expedientes activos | 1 | 5 | 15 | 50 | A medida |
| Nuevos clientes/mes | — | 3 | 9 | 18 | A medida |
| Modelos generados/mes incluidos | 0 | 0 | 20 | 50 | A medida |
| Bienes incluidos por modelo | 5 | 5 | 10 | 20 | A medida |
| Escenarios planificación/expediente | 1 | 3 | 6 | 12 | A medida |
| Almacenamiento | 5 GB | 50 GB | 250 GB | 500 GB | A medida |

**Free** y **Esencial 199€** comparten el modelo de modelos AEAT **pago por uso**: 0 modelos incluidos, 15€/modelo + 2€/bien extra a partir del 5º bien incluido en cada modelo. Esencial añade cálculos fiscales (valor mínimo, reducciones, bonificaciones), digitalización con extracción AI, branding del portal, soporte 48-72h y usuarios extras a 15€/mes.

**Avanzado 449€** es el tier diseñado para el ICP principal (despacho boutique, 20-100 expedientes/año). Es el "Más popular" en grid pública. Añade 20 modelos/mes incluidos, comprensión documental AI, branding white-label, escenarios 1-click y API básica (esta última *próximamente*).

**Pro 999€** para asesorías fiscales de mayor volumen y despachos consolidados; añade 50 modelos/mes incluidos, almacenamiento ampliado, white-label con dominio propio, soporte dedicado y API completa con SSO/SCIM (*próximamente*).

**Notas sobre features "Próximamente" a la fecha del PMC:** Asistente conversacional Ulpiano AI (lanza sept. 2026, disponible en Avanzado+), Generación de documentos sucesorios (disponible en Esencial+ cuando lance), Crear escenarios en 1 click (Avanzado+), Cálculo de plusvalía municipal (Avanzado+), API endpoints (Avanzado básica / Pro completa). Estas features están **incluidas sin coste adicional** en los tiers correspondientes cuando se publiquen.

### 8.2 Variable post-cuota (modelos + bienes)

| Tier | Modelos incluidos/mes | Modelo extra | Bienes incluidos/modelo | Bien extra |
|---|---|---|---|---|
| Free | 0 | 15€ | 5 | 2€ |
| Esencial | 0 | 15€ | 5 | 2€ |
| Avanzado ⭐ | 20 | 9€ | 10 | 1€ |
| Pro | 50 | 5€ | 20 | 0,50€ |
| Enterprise | Negociado | Negociado | Negociado | Negociado |

Free y Esencial comparten el mismo pricing variable de modelos y bienes: no hay diferencia en pago-por-uso entre ambos tiers. La diferencia entre Free y Esencial está en capacidad (usuarios, expedientes, almacenamiento) y features (cálculos fiscales, digitalización AI, branding, soporte).

Estructura "Incluye + extra" estilo Twilio/AWS. Predictible para uso normal; variable solo cuando el cliente captura valor adicional. Descalado descendente (15→9→5 / 2→1→0,50) premia consolidación y crea palanca natural de upgrade. La dimensión "bien declarado" funciona análoga al modelo de gestoría que cobra 0,50€/concepto contabilizado.

Facturación: variable se acumula intra-mes y se carga al cierre, separado del flat. Soft cap a 200% de incluidos con aviso in-app de upgrade. Hard cap configurable opt-in.

### 8.3 Estrategia de descuentos

| Tipo | Descuento | A quién | Cuándo |
|---|---|---|---|
| Anual | –15% | Todos los tiers de pago | Default checkout |
| Compromiso 2 años | –25% sobre anual | Pro y Enterprise | Negociado |
| Early Adopter | –25% lifetime, lock | Primeros 20 paying customers | Hasta 31 dic 2026 |
| Colegio profesional | –15% | ICAB, ICAGI, ICAM, Notariat Català | Acuerdo institucional |
| Multi-licencia | Negociado | >15 usuarios | Vía Enterprise |
| Cupones públicos / BF | PROHIBIDO | — | Mata posicionamiento |

Aprobación: hasta –15% lo aplica fundador; >15% requiere conversación con socio, documentado en HubSpot.

### 8.4 Visibilidad de precios

Precios públicos en web para Free + Esencial + Avanzado + Pro. Enterprise = "Contactar". Ulpiano Back-Office en página separada. Programa Partners en página separada. Descuentos institucionales y Early Adopter no se publican.

Razón: pre-revenue + sin equipo comercial + Wealth/Vanilla acaban de moverse a transparencia. Ocultar precios reduciría conversión web 30-60% (benchmarks Price Intelligently).

### 8.5 Métrica norte

**ARPU expandido** = suscripción + variable + add-ons + comisión Back-Office.

Es la métrica de salud económica del cliente y la que refleja el valor real capturado. Se compone de las cuatro fuentes monetizables; cualquier panel de management debe descomponerla por componente para detectar concentración o churn de uno solo.

Break-even fundadores (carga total empresa 16.500€/mes): ~40 clientes equivalentes Avanzado.

---

## 8.bis Ulpiano Back-Office

**Posicionamiento:** servicio de outsourcing operativo de tramitación sucesoria. El despacho mantiene la relación con el cliente y los honorarios principales; Ulpiano ejecuta toda la documentación tramitable (digitalizada de extremo a extremo). Modelo Finch Legal aplicado a sucesiones en España.

**Pitch al despacho:** *"Tu back-office digitalizado de herencias. Tú captas y firmas; nosotros tramitamos."*

**Naming oficial:** Ulpiano Back-Office (no "Soporte Despachos"; este último era nomenclatura interna previa).

### 8.bis.1 Pricing two-tier

El despacho compra el paquete a Ulpiano a precio mayorista y lo revende al cliente final con un PVP sugerido. Ulpiano publica el PVP recomendado para que el despacho tenga un kit de ventas listo (presupuesto, ficha cliente, contrato cliente).

| | Básico | Completo | Complejo |
|---|---|---|---|
| PVP sugerido Despacho → Cliente | 850€ | 1.150€ | 1.750€ |
| Mayorista Ulpiano → Despacho | 350€ | 595€ | 950€ |
| Margen del despacho | 59% | 48% | 46% |
| Comisión Ulpiano sobre caudal hereditario | 1,75% | 1,225% | 0,7% |
| Comisión sugerida Despacho → Cliente | 5% | 3,5% | 2% |
| Margen despacho sobre comisión | 65% | 65% | 65% |

### 8.bis.2 Comisión sobre caudal — Opción B (cerrada)

Ulpiano factura al despacho un porcentaje fijo sobre caudal hereditario neto **registrado en plataforma**. Sin caps. El despacho decide libremente qué cobrar al cliente final (PVP sugerido 5/3,5/2%).

**Por qué Opción B y no revenue share puro:** el revenue share del 35% sobre lo que cobra el despacho dependía del reporting honesto del despacho — sin equipo de auditoría ni datos integrados, no es enforce-able. La comisión fija sobre caudal en plataforma es matemáticamente equivalente al "35% de la comisión sugerida" pero sin depender de declaraciones.

**Mecánica:** caudal hereditario neto = caudal en plataforma = caudal declarado a Hacienda en Modelo 660 (cláusula contractual). Al cierre del expediente Back-Office, Ulpiano calcula automáticamente y añade a factura mensual del despacho.

### 8.bis.3 Add-ons separados

- **Aplazamiento de deuda tributaria.** Sacado del paquete porque los aplazamientos > 50.000€ requieren garantía y procedimiento largo. Add-on con tarifa propia (cf. doc maestro §7.4).
- **Pensiones (viudedad / orfandad).** Add-on a precio fijo por pensión tramitada (200€ simple / 280€ compleja mayorista). Servicio orientado a gestorías y abogados-gestores con derecho de pensión asociado a la herencia.

### 8.bis.4 Trámites NO Ulpiano

Trámites presenciales notariales (declaración de herederos, aceptación de herencia) NO los hace Ulpiano — son del abogado del despacho. Quedan explícitamente fuera del scope para evitar confusión con el cliente final.

### 8.bis.5 Productización para el despacho

Lo que diferencia este servicio de un simple back-office es que está productizado para reventa. Los assets que entrega Ulpiano al despacho que contrata Back-Office:

- PVP sugerido transparente con justificación
- Plantilla de presupuesto coherente, personalizable con logo y firma del despacho
- Material de venta para el cliente final (hoja explicativa del paquete)
- Calculadora de honorarios: input expediente → output presupuesto recomendado
- Contrato marco Ulpiano-Despacho (cláusula caudal, mayorista, comisión, SLA, confidencialidad)

---

## 9. Tono y voz de marca

### Personalidad
- **Riguroso sin ser rígido** — precisión técnica sin academicismo
- **Experto sin ser condescendiente** — tono de igual a igual entre profesionales
- **Directo sin ser brusco** — cada frase tiene un propósito
- **Seguro sin ser arrogante** — la confianza se transmite por precisión, no por superlativos
- **Moderno sin ser frívolo** — sin jerga startup, sin emojis, sin tratar a abogados como usuarios de una app de lifestyle

### Lo que SÍ dice Ulpiano
- "Reduce el tiempo de preparación del expediente hasta un 35%"
- "El motor normativo calcula automáticamente las legítimas según el Codi Civil de Catalunya"
- "Cada decisión del expediente queda registrada y es auditable"
- "Genera el borrador del cuaderno particional a partir de los datos del expediente"
- "Tu criterio jurídico sigue siendo el centro. Ulpiano estructura y valida, tú decides."

### Lo que NO dice Ulpiano
- "Revoluciona tu despacho" — cliché vacío
- "Inteligencia artificial que hace tu trabajo" — genera desconfianza
- "La herramienta más completa del mercado" — superlativo sin sustento
- "Fácil de usar" — subestima al profesional jurídico
- "Sin complicaciones" — las herencias siempre son complejas
- "Tu nuevo asistente digital" — Ulpiano no es un asistente, es una infraestructura

### Capas de lenguaje por contexto
- **Jurídico de precisión:** documentación de producto, help center, emails técnicos
- **Comercial directo:** landing pages, outbound, demos — resultados concretos, sin rodeos
- **Consultivo:** propuestas, reuniones — lenguaje del interlocutor, no lenguaje de producto

---

## 10. Sistema visual de marca

### Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `night` | `#0F1F3D` | Fondos oscuros: nav, hero, banners, CTA final |
| `ink` | `#1E293B` | Texto principal, titulares en fondo claro, footer |
| `slate` | `#64748B` | Texto secundario, descripciones |
| `fog` | `#94A3B8` | Texto desactivado, metadatos, timestamps |
| `mist` | `#CBD5E1` | Bordes, divisores, separadores |
| `surface` | `#F1F5F9` | Fondos de card, secciones alternas |
| `white` | `#FFFFFF` | Fondo principal del producto |
| `ulpiano-green` | `#2D6A4F` | Botón primario, CTA, estados validados |
| `green-light` | `#40916C` | Hover del botón, badges activos |
| `green-bg` | `#D8F3DC` | Fondo mensajes de éxito y validación |

**Colores funcionales (SOLO para estados del sistema, nunca decorativos):**
- Warning: `#B45309` / bg `#FEF3C7`
- Error: `#991B1B` / bg `#FEE2E2`
- Info: `#1E6A9E` / bg `#DBEAFE`

**El gradiente morado→rosa del logo:** SOLO en el símbolo del logo. Nunca como color de botón, fondo de sección, CTA o texto. Puede aparecer como elemento decorativo de fondo en el hero con opacidad 5–8%.

### Tipografía

| Contexto | Fuente |
|---|---|
| Titulares marketing / landing | DM Sans Bold / Inter Bold |
| Cuerpo de texto web y app | Inter Regular / Medium |
| Datos numéricos, referencias legales en UI | JetBrains Mono / IBM Plex Mono |

### Principios gráficos
1. **La estructura es la decoración** — sin ilustraciones de personajes, sin texturas decorativas
2. **La densidad se jerarquiza, no se esconde** — el profesional quiere ver información organizada, no pantallas vacías
3. **Los números merecen tipografía específica** — monoespaciada, tamaño mayor, alto contraste
4. **El color funcional es información, no estética** — verde = validado, ámbar = atención, rojo = error. Invariable en todo el sistema
5. **Máximo 3 niveles de jerarquía visual por pantalla**

---

## 11. Assets de comunicación — Uso directo

### Email outbound (asunto probado)
**Asunto:** "El cuaderno particional que os costó 3 días, en 20 minutos"

### Script de demo (25-30 min)
Estructura: problema → producto → resultado → siguiente paso. Sin diapositivas. Directamente sobre la plataforma desde el primer minuto.
- **Apertura (2 min):** preguntar cómo gestionan actualmente un expediente, dónde hay más fricción
- **Módulo 1 — Dashboard (5 min):** panel de expedientes, estados por color, siguiente acción calculada
- **Módulo 2 — Motor normativo (10 min):** expediente real con domicilio en Girona, CCCat automático, legítima calculada con norma citada
- **Módulo 3 — Generación documental (5 min):** borrador del cuaderno particional en Word con datos reales
- **Cierre (5 min):** preguntar qué parte es más relevante para su día a día — nunca cerrar con precio

### Statement de marca (para presentaciones y pitch)
*"Ulpiano convierte el proceso sucesorio — el más complejo, fragmentado y emocionalmente cargado del derecho civil — en un sistema estructurado, trazable y preciso. El profesional no trabaja más rápido porque trabaja más. Trabaja más rápido porque ya no pierde tiempo en lo que el sistema puede hacer por él."*

> **[PENDIENTE]** Esta sección crecerá con: anti-objection talking points por persona, mensajes por etapa de embudo (TOFU/MOFU/BOFU), 3-5 case studies/quotes (placeholder hasta tener pilotos cerrados), y assets de partnership con funerarias/aseguradoras.

### Assets pendientes derivados del cierre de pricing v1

Bloques de comunicación que ya pueden producirse (porque pricing está cerrado) y quedan listados como tareas a entregar:

- Página pública "Pricing" con grid Free + 3 tiers + Enterprise contactar, comparador full-feature y FAQ.
- Página separada "Ulpiano Back-Office" con paquetes, servicios, kit de venta y CTA "contactar".
- Borrador del **contrato marco Despacho-Ulpiano** (cláusula caudal, mayorista, comisión Opción B, SLA, confidencialidad). Bloqueante para vender Back-Office.
- Plantilla de presupuesto cliente personalizable por el despacho (logo + firma + PVP sugerido).
- Calculadora de honorarios sucesorios (input expediente → output PVP recomendado por paquete Back-Office).
- Email Early Adopter con oferta –25% lifetime para los primeros 20 paying customers.
- Hoja explicativa del paquete Back-Office para el cliente final (la usa el despacho como anexo a su presupuesto).
- Excel Soporte Despachos normalizado (versión limpia con doble columna mayorista/PVP — el actual tiene filas mal etiquetadas y comisiones inconsistentes).

---

## 11.bis Autoridad técnica y procedencia del producto

> **[PENDIENTE — bloque a desarrollar]**
> Activo de credibilidad infrautilizado: Ulpiano está fundado y dirigido por **Miquel Fàbrega**, abogado en ejercicio (ICAGI 3861, Fàbrega Legal — Girona) con conocimiento directo del CCCat y del workflow real de un expediente sucesorio. En un mercado donde los compradores son abogados/notarios/asesores, esta procedencia es diferenciadora frente a legal-tech construido por equipos no-jurídicos. Pendiente decidir cómo y dónde incorporarlo: bio en about, byline en blog, slide de credibilidad en deck, mención en cold email, citación en hero. Trabajar en sesión conjunta.

---

## 12. Lo que NO hacer en ningún asset de comunicación

- No comparar con Notion, Airtable u otras herramientas genéricas
- No hablar de "automatización" de forma genérica — siempre especificar qué se automatiza
- No prometer sustitución del abogado — Ulpiano amplifica al profesional, no lo reemplaza
- No usar lenguaje de startup de consumo (growth hacking, viral loops, disruptivo, etc.)
- No mencionar "IA" sin especificar qué hace exactamente
- No apelar a las emociones del familiar en duelo — Ulpiano habla al profesional, no al cliente final
- No usar los colores funcionales como decoración
- No usar el gradiente del logo fuera del símbolo del logo
- No describir Ulpiano como "una herramienta" — es una plataforma / infraestructura / sistema
