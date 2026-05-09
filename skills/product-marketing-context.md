# Product Marketing Context — Ulpiano

> Este archivo es leído por todas las demás skills antes de ejecutarse.
> Define el producto, el mercado, el cliente y el posicionamiento de Ulpiano.

---

## 1. Qué es el producto

**Ulpiano** es una plataforma SaaS B2B de planificación y gestión sucesoria integral para el mercado legal español.

No es un software de testamentos. Es la infraestructura digital que rodea al testamento: modela el patrimonio del causante, construye el escenario hereditario, calcula automáticamente legítimas y cuotas hereditarias, y liquida el Impuesto sobre Sucesiones y Donaciones (ISD) según la normativa autonómica aplicable.

**Categoría mental:** Ulpiano no es "un software más del mercado legal". Es el sistema operativo de la gestión sucesoria — el lugar donde ocurre todo el proceso. Ulpiano es a las herencias lo que un ERP es a la contabilidad o lo que un CRM es a las ventas.

**Posicionamiento:** Plataforma, no herramienta. Infraestructura, no feature. Estándar emergente del sector.

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
- Base imponible → Reducciones → Base liquidable → Tarifa → Coeficiente multiplicador → Bonificació → Cuota a ingresar
- Reducciones implementadas: parentesco, discapacidad, persona mayor de 75 años, vivienda habitual (95%, máx. 500.000€), empresa familiar (95%)
- Bonificació Grupos I y II (tablas progresivas) y cónyuge/pareja (99% plano)
- Recargo por extemporaneidad según Art. 27 LGT
- **Implementación actual: normativa catalana (Llei 19/2010 i modificacions)**

### 3.4 Tramitación del Expediente
- Gestión completa: apertura → inventario → distribución → cálculo fiscal → documentación → presentación
- Generación de Modelo 660 (inventario) y Modelo 650 (autoliquidación individual por heredero)
- Alertas automáticas de plazos fiscales (vencimiento período voluntario: 6 meses desde fallecimiento)
- Control documental por expediente con acceso por rol

### 3.5 Activos Digitales
- Criptomonedas con valoración a fecha de devengo
- Identificación de wallets y exchanges
- Huella digital: redes sociales, servicios cloud, instrucciones de gestión o eliminación
- **Diferenciador único:** ninguna herramienta generalista del mercado español los trata como categoría fiscal estructurada

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

### Canal estratégico — Funerarias
- No son compradores del software, son canal de derivación
- Modelo: partnership con revenue share

### **No son buyer persona:**
- Grandes despachos con sistemas propios
- Particulares sin asesoramiento profesional

---

## 6. Propuesta de valor por segmento

| Segmento | Claim oficial (usar literalmente) |
|---|---|
| Despachos de abogados | "El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos. Con el derecho foral catalán integrado, sin excepciones." |
| Asesorías fiscales | "El ISD cambia. Tus expedientes activos, no. Ulpiano recalcula automáticamente cada expediente afectado por un cambio normativo y te avisa antes de que el problema llegue al cliente." |
| Notarías | "El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa." |

**Los 3 claims vendibles de Ulpiano:**
1. **Produce antes** — 35% de reducción en tiempo de gestión por expediente
2. **Produce mejor** — menos errores, más coherencia fiscal y civil, trazabilidad auditable
3. **Explica mejor** — el cliente entiende qué está pagando y por qué

---

## 7. Competencia

**Competidor principal real:** el proceso manual (Excel + Word + email + coordinación telefónica).

**Diferenciadores de Ulpiano:**
- Motor normativo territorial (CCCat) — única solución con derecho foral catalán integrado
- Activos digitales como categoría fiscal estructurada — sin competidor en España
- Generación de documentos públicos coherentes desde datos estructurados
- Trazabilidad y auditabilidad del razonamiento

---

## 8. Modelo de negocio

**Modelo híbrido: Suscripción base + variable por uso/expediente**

| Componente | Descripción |
|---|---|
| Freemium | 1 usuario, 1 expediente/año, funcionalidades básicas |
| Plan Básico — 99€/mes | 2 usuarios, 3 expedientes/mes, módulo legal |
| Plan Esencial — 149€/mes | 5 usuarios, 10 expedientes/mes, motor ISD, Ulpiano AI, comparación de escenarios |

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
