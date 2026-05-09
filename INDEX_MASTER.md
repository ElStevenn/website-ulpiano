# 📋 ÍNDICE MASTER DE CONTROL — Ulpiano Legal Tech

**Última actualización:** 2026-04-11  
**Versión:** 1.0  
**Propósito:** Documento de referencia única que estructura y controla todas las tareas, módulos, y objetivos para la consecución de los propósitos de Ulpiano Legal Tech.

---

## 📍 SECCIÓN 0: CONTEXTO ESTRATÉGICO

### 0.1 Visión del Producto
**Ulpiano es el sistema operativo de las herencias.** Una plataforma SaaS B2B que estructura, valida y documenta el proceso sucesorio completo para abogados, asesores fiscales y notarías.

**Claim principal:** *"De inventario a cuaderno particional. Sin errores de cálculo. Sin revisión manual de la norma."*

**Mercado primario:** Cataluña (derecho civil foral CCCat/Llei 19/2010)  
**Expansión planificada:** Nacional (fase posterior)

### 0.2 Propuesta de Valor por Segmento
| Segmento | Claim |
|---|---|
| Despachos | "El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos." |
| Asesorías | "El ISD cambia. Tus expedientes activos, no. Ulpiano recalcula automáticamente." |
| Notarías | "El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla." |

### 0.3 Cliente Objetivo Principal (ICP)
- **Abogado-gestor** de despacho mediano (2–10 personas)
- 5–15 años de ejercicio profesional
- Gestiona 20–100 expedientes/año
- Herramienta actual: Excel, Word, o software genérico
- Ciclo de decisión: 2–4 semanas

---

## 📚 SECCIÓN 1: REFERENCIAS DOCUMENTALES CLAVE

Estos documentos definen el contexto estratégico, arquitectónico y operativo del proyecto. **Léelosantes de cualquier ejecución de tareas:**

| Documento | Ubicación | Propósito |
|---|---|---|
| **Product Marketing Context** | `/skills/product-marketing-context.md` | Define producto, mercado, cliente, posicionamiento, tono de voz, paleta visual |
| **Arquitectura Next.js Ulpiano** | `/skills/ARQUITECTURA_NEXTJS_ULPIANO.md` | Estructura de carpetas, tokens de diseño, componentes globales, convenciones |
| **Mapeo Páginas y Contenidos** | `/skills/MAPEO_PAGINAS_CONTENIDOS.md` | Estructura de rutas, contenidos por página, flujo de información |
| **Setup Inicial del Proyecto** | `/skills/PROMPT_SETUP_PROYECTO.md` | Tareas paso-a-paso para bootstrap del proyecto Next.js |
| **CLAUDE.md** | `/CLAUDE.md` | Instrucciones específicas del proyecto (referencias a AGENTS.md) |
| **AGENTS.md** | `/AGENTS.md` | Reglas y convenciones para agents (Next.js breaking changes) |

---

## 🎯 SECCIÓN 2: OBJETIVOS ESTRATÉGICOS (T1–T2 2026)

### 2.1 OBJ-001: Lanzamiento MVP Platform — Despachos
**Estado:** En desarrollo  
**Plazo:** Q2 2026  
**Resultado esperado:** Landing page + demo funcional + onboarding para 10 despachos piloto

**Tareas incluidas:**
- [ ] Setup técnico completo del proyecto Next.js (consulta SECCIÓN 3)
- [ ] Landing page + home funcional
- [ ] Demo-able dashboard con expediente de ejemplo
- [ ] Motor ISD básico (Cataluña)
- [ ] Email outbound a prospects

---

### 2.2 OBJ-002: Motor Normativo Catalán — Completitud
**Estado:** Parcialmente completado  
**Plazo:** Q2 2026  
**Resultado esperado:** Motor ISD con 100% de reducciones, bonificaciones, y coeficientes según CCCat

**Tareas incluidas:**
- [ ] Implementar reducciones: parentesco, discapacidad, >75 años, vivienda habitual, empresa familiar
- [ ] Implementar bonificaciones por grupos y cónyuge
- [ ] Validar contra casos reales de asesorías colaboradoras
- [ ] Documentar norma aplicable en cada cálculo

---

### 2.3 OBJ-003: Activos Digitales — Diferenciador Único
**Estado:** En backlog  
**Plazo:** Q3 2026  
**Resultado esperado:** Módulo funcional de gestión de criptomonedas, wallets, activos digitales

**Tareas incluidas:**
- [ ] Arquitectura de datos para activos digitales
- [ ] UI/UX de captura y valoración
- [ ] Tratamiento fiscal (normativa española actual)
- [ ] Integración con escenario sucesorio

---

### 2.4 OBJ-004: Expansión a Asesorías Fiscales
**Estado:** En backlog  
**Plazo:** Q3 2026  
**Resultado esperado:** Plan de negocio + propuesta de valor específica + versión alpha para 5 asesorías

**Tareas incluidas:**
- [ ] Análisis de necesidades (entrevistas con asesorías)
- [ ] Feature set adicional (flujo específico de ISD)
- [ ] Integración contable (API a software contable)
- [ ] Outbound a asesorías colaboradoras

---

## 🏗️ SECCIÓN 3: EJECUCIÓN TÉCNICA — FASES Y TAREAS

### FASE 1: SETUP INICIAL DEL PROYECTO
**Referencia:** `/skills/PROMPT_SETUP_PROYECTO.md`  
**Estado:** Punto de partida actual  
**Plazo estimado:** 1–2 semanas

**Tarea 1.1: Auditoría Estado Actual**
- [ ] Verificar existencia de `app/`, `tailwind.config.ts`, `layout.tsx`, `globals.css`
- [ ] Confirmar dependencias instaladas (Next.js 15, React, Tailwind, clsx, tailwind-merge)
- [ ] Reportar estado y resolver conflictos si existen

**Tarea 1.2: Configuración Tailwind con Tokens Ulpiano**
- [ ] Editar `tailwind.config.ts` con paleta de colores oficial
- [ ] Añadir tokens de tipografía (Inter, DM Sans, JetBrains Mono)
- [ ] Definir escala de espaciado, border-radius, sombras
- [ ] Validar que todos los tokens coinciden con `product-marketing-context.md`

**Tarea 1.3: Crear Layout Raíz**
- [ ] `app/layout.tsx` con imports de fuentes, variables CSS, metadata SEO
- [ ] `app/globals.css` con directivas Tailwind, keyframes de animación
- [ ] Estructura: Header + main + Footer

**Tarea 1.4: Componentes Globales Reutilizables**
- [ ] `components/layout/Header.tsx` (nav, logo, CTAs, mobile hamburger)
- [ ] `components/layout/Footer.tsx` (5 columnas, links según mapeo)
- [ ] `components/buttons/ButtonPrimary.tsx` (verde Ulpiano)
- [ ] `components/buttons/ButtonGhost.tsx` (transparente con arrow)
- [ ] `components/ui/Eyebrow.tsx` (label uppercase)
- [ ] `components/layout/Section.tsx` (wrapper con bg light/dark/neutral)
- [ ] `components/animations/ScrollReveal.tsx` (IntersectionObserver)
- [ ] `components/layout/Container.tsx` (max-width wrapper)

**Tarea 1.5: Estructura de Rutas (Placeholders)**
- [ ] `app/page.tsx` (Home)
- [ ] `app/(marketing)/soluciones/page.tsx` (Hub)
- [ ] `app/(marketing)/soluciones/[slug]/page.tsx` (Planificación, Documentación, Fiscalidad, Procesamiento, Activos)
- [ ] `app/(marketing)/pensado-para/[slug]/page.tsx` (Despachos, Notarías, Asesorías)
- [ ] `app/(marketing)/precios/page.tsx`
- [ ] `app/(marketing)/demo/page.tsx`

Cada archivo solo necesita un `<h1>` con el nombre de la página.

**Tarea 1.6: Librerías y Utilidades**
- [ ] `lib/cn.ts` (clsx + twMerge)
- [ ] `npm install lucide-react clsx tailwind-merge class-variance-authority`

**Tarea 1.7: Verificación y Build**
- [ ] `npm run build` sin errores
- [ ] `npm run dev` y visitar `http://localhost:3000`
- [ ] Validar: Header, Footer, nav links, botón verde, responsive en mobile

---

### FASE 2: LANDING PAGE & HOME
**Estado:** No iniciado  
**Plazo estimado:** 2–3 semanas

**Tarea 2.1: Home Hero Section**
- [ ] Héroe con claim: "De inventario a cuaderno particional. Sin errores. Sin revisión manual."
- [ ] CTA primario: "Reserva tu demo" (verde)
- [ ] CTA secundario: "Ver cómo funciona" (ghost)
- [ ] Imagen/visual hero (a definir con diseño)
- [ ] Responsive desktop/tablet/mobile

**Tarea 2.2: Secciones de Home**
- [ ] "Módulos" (4 cards: Patrimonial, Escenario, Motor ISD, Generación documental)
- [ ] "Para quién" (3 tabs: Despachos, Asesorías, Notarías)
- [ ] "Resultado" (antes/después o números: 35% menos tiempo)
- [ ] Social proof / testimonios (placeholder)
- [ ] FAQ o "Preguntas frecuentes"
- [ ] CTA final: "Comienza tu prueba gratuita"

**Tarea 2.3: Página Soluciones Hub**
- [ ] Grid de 5 soluciones (cards con icono, título, descripción)
- [ ] Links a páginas detalladas (en construcción)

**Tarea 2.4: Página Precios**
- [ ] 3 planes (Freemium, Básico €99, Esencial €149)
- [ ] Feature comparison table
- [ ] CTA para cada plan

---

### FASE 3: MOTOR FISCAL ISD — IMPLEMENTACIÓN CORE
**Estado:** No iniciado  
**Plazo estimado:** 4–6 semanas

**Tarea 3.1: Arquitectura de Datos ISD**
- [ ] Modelo `Beneficiary` (nombre, parentesco, grupo, base imponible, reducciones aplicadas, bonificación)
- [ ] Modelo `Reduction` (tipo, porcentaje, montante máximo, normativa aplicable)
- [ ] Modelo `ISDCalculation` (trace completo del cálculo: base → reducciones → base liquidable → tarifa → coeficiente → bonificación → cuota)
- [ ] API endpoints: `POST /api/isd/calculate`, `GET /api/isd/calculation/:id`

**Tarea 3.2: Implementar Reducciones (Cataluña)**
- [ ] Parentesco (grupo I: 99% hasta €1M, grupo II: 99% hasta €100k, grupo III: 75% hasta €100k, grupo IV: 50%)
- [ ] Discapacidad (95% si discapacidad ≥75%)
- [ ] Persona mayor de 75 años (99%)
- [ ] Vivienda habitual (95% hasta €500k)
- [ ] Empresa familiar (95%)

**Tarea 3.3: Implementar Tarifa y Coeficientes (CCCat)**
- [ ] Tabla de tarifa (progresiva por base liquidable)
- [ ] Coeficiente multiplicador (según grupo y base)
- [ ] Recargo por extemporaneidad (Art. 27 LGT)

**Tarea 3.4: Implementar Bonificaciones**
- [ ] Bonificación grupos I y II (tablas progresivas por CC.AA.)
- [ ] Bonificación cónyuge/pareja (99% plano)
- [ ] Lógica de aplicación secuencial

**Tarea 3.5: Interfaz de Cálculo ISD**
- [ ] Formulario de entrada (beneficiario, parentesco, base, reducciones)
- [ ] Visualización paso-a-paso del cálculo
- [ ] Output: cuota a ingresar + desglose de reducciones/bonificaciones
- [ ] Exportación a PDF con normativa citada

**Tarea 3.6: Testing y Validación**
- [ ] Casos de prueba reales de asesorías colaboradoras
- [ ] Validación contra calculadoras oficiales (ATC, agencias tributarias)
- [ ] Documentar divergencias y resoluciones

---

### FASE 4: GESTOR PATRIMONIAL — MVP
**Estado:** No iniciado  
**Plazo estimado:** 3–4 semanas

**Tarea 4.1: Arquitectura de Patrimonio**
- [ ] Modelo `Asset` (tipo, descripción, valor bruto, cargas deducibles, titularidad)
- [ ] Tipos soportados: Inmuebles, Cuentas bancarias, Fondos/acciones, Empresa familiar, Bienes muebles, Derechos de crédito
- [ ] Modelo `Estate` (lista de activos + pasivos = caudal relicto neto)

**Tarea 4.2: Formulario de Captura Patrimonial**
- [ ] Multi-paso o formulario dinámico por tipo de activo
- [ ] Cálculo automático de caudal relicto neto
- [ ] Visualización de resumen patrimonial

**Tarea 4.3: Generación de Modelo 660 (Inventario)**
- [ ] PDF exportable con detalle de activos
- [ ] Cumplimiento de formato de Hacienda

---

### FASE 5: ESCENARIO SUCESORIO — MVP
**Estado:** No iniciado  
**Plazo estimado:** 2–3 semanas

**Tarea 5.1: Arquitectura de Herederos**
- [ ] Modelo `Heir` (nombre, parentesco, grupo, porcentaje cuota)
- [ ] Cálculo automático de legítimas (25% del caudal computable en Cataluña)
- [ ] Gestión de prelegados

**Tarea 5.2: UI de Escenario Sucesorio**
- [ ] Formulario de designación de herederos
- [ ] Visualización de legítimas y cuotas
- [ ] Simulación comparativa (escenario alternativo)

---

### FASE 6: GENERACIÓN DOCUMENTAL
**Estado:** No iniciado  
**Plazo estimado:** 3 semanas

**Tarea 6.1: Generador de Cuaderno Particional**
- [ ] Template Word con datos estructurados del expediente
- [ ] Integración con patrimonio + herederos + cálculos ISD
- [ ] Exportación a .docx editable

**Tarea 6.2: Generador de Modelo 650 (ISD por heredero)**
- [ ] PDF con detalle de cálculo ISD individual
- [ ] Formato compatible con presentación a ATC

---

## 📊 SECCIÓN 4: CONTENIDOS & MARKETING

### 4.1 Landing Page & Web Content
**Responsable:** Marketing / Content  
**Referencia:** `/skills/product-marketing-context.md` (claims, tono de voz)

**Tarea 4.1.1: Copy de Landing Page**
- [ ] Hero statement (usar claim oficial literalmente)
- [ ] Descripción de módulos (70–100 palabras cada uno)
- [ ] Testimonios/proof (emails de prospects, KPIs)
- [ ] FAQ técnico-comercial

**Tarea 4.1.2: Página "Soluciones" Detalladas**
- [ ] Planificación sucesoria (features, beneficios, persona)
- [ ] Documentación sucesoria (features, beneficios, persona)
- [ ] Fiscalidad sucesoria (features, beneficios, persona)
- [ ] Procesamiento documental (features, beneficios, persona)
- [ ] Activos digitales (features, diferenciador, persona)

**Tarea 4.1.3: Página "Pensado Para"**
- [ ] Tab Despachos (claim, 3–5 features, CTA)
- [ ] Tab Asesorías (claim, 3–5 features, CTA)
- [ ] Tab Notarías (claim, 3–5 features, CTA)

---

### 4.2 Outbound & Sales Enablement
**Responsable:** Sales / Growth  
**Referencia:** `/skills/product-marketing-context.md` (assets de comunicación)

**Tarea 4.2.1: Email Outbound**
- [ ] Asunto probado: "El cuaderno particional que os costó 3 días, en 20 minutos"
- [ ] Body copy: 3 variantes (despacho, asesoría, notaría)
- [ ] Secuencia de follow-up (3 emails, 5–7 días entre ellos)

**Tarea 4.2.2: Script de Demo**
- [ ] Estructura: problema → solución → resultado (25–30 min)
- [ ] Demo flow: Dashboard → Motor ISD → Generación documental
- [ ] Objeciones y respuestas

**Tarea 4.2.3: Sales Enablement Deck**
- [ ] One-pager para despacho
- [ ] One-pager para asesoría
- [ ] One-pager para notaría

---

### 4.3 Blog & SEO Content
**Responsable:** Content / Marketing  
**Plazo:** Q2–Q3 2026

**Tarea 4.3.1: Artículos "Top of Funnel"**
- [ ] "Cómo gestionar herencias complejas: guía paso-a-paso" (1.500 palabras)
- [ ] "Legítima y cuota hereditaria: diferencia explicada" (1.200 palabras)
- [ ] "ISD 2026: cambios normativos y cálculo de cuota" (1.500 palabras)

**Tarea 4.3.2: Artículos "Middle of Funnel"**
- [ ] "Por qué 35% de los despachos descartan Excel para herencias" (1.000 palabras)
- [ ] "Motor ISD catalán: normativa CCCat automatizada" (1.200 palabras)

**Tarea 4.3.3: Guías Técnicas (Help Center)**
- [ ] Cómo capturar patrimonio paso-a-paso
- [ ] Cómo calcular legítimas según CCCat
- [ ] Cómo usar el generador de cuaderno particional
- [ ] Glosario: términos sucesorios clave

---

## 🎨 SECCIÓN 5: DISEÑO & UX

### 5.1 Design System
**Referencia:** `/skills/ARQUITECTURA_NEXTJS_ULPIANO.md`

**Tarea 5.1.1: Establecer Design Tokens**
- [ ] Colores (night, ink, slate, fog, mist, surface, white, ulpiano-green, green-light, green-bg, warning, error, info)
- [ ] Tipografía (Inter, DM Sans, JetBrains Mono)
- [ ] Espaciado (escala 8px base)
- [ ] Border-radius (sm 8px, md 12px, lg 16px)
- [ ] Sombras (card, card-hover, btn, btn-hover)
- [ ] Animaciones (scroll-reveal, fadeInUp, child-stagger)

**Tarea 5.1.2: Establecer Componentes Reutilizables**
- [ ] Botones (Primary, Ghost, Secondary, Disabled)
- [ ] Inputs (text, select, number, date)
- [ ] Cards (default, hover states)
- [ ] Modals / Dialogs
- [ ] Alertas (success, warning, error, info)
- [ ] Stepper / Progress indicators

**Tarea 5.1.3: Documentar en Storybook o Figma**
- [ ] Crear Figma board con componentes
- [ ] O setup de Storybook con componentes React

---

### 5.2 Wireframes & Mockups
**Plazo estimado:** 2 semanas

**Tarea 5.2.1: Wireframes de Flujos Principales**
- [ ] Dashboard (página principal del app)
- [ ] Flujo de nuevo expediente
- [ ] Formulario patrimonial
- [ ] Cálculo ISD
- [ ] Generación documental

**Tarea 5.2.2: High-Fidelity Mockups**
- [ ] Home página (hero + secciones)
- [ ] Landing páginas secundarias
- [ ] Vistas de app principal

---

## 🚀 SECCIÓN 6: OPERACIONAL & INFRAESTRUCTURA

### 6.1 Setup de Entornos
**Estado:** Pendiente

**Tarea 6.1.1: Entorno de Desarrollo**
- [ ] Node.js 18+
- [ ] npm/yarn setup
- [ ] `.env.local` con variables de ejemplo

**Tarea 6.1.2: CI/CD Pipeline**
- [ ] GitHub Actions: build en cada push a `develop`
- [ ] Automated tests (opcional en MVP)
- [ ] Deploy preview links en PRs

**Tarea 6.1.3: Hosting & Deployment**
- [ ] Configurar Vercel (recomendado para Next.js)
- [ ] Staging environment
- [ ] Production environment

---

### 6.2 Database & Backend
**Estado:** No iniciado  
**Plazo:** Q2 2026

**Tarea 6.2.1: Selección de Database**
- [ ] PostgreSQL (recomendado para datos complejos sucesorios)
- [ ] O Firebase si queremos MVP sin backend

**Tarea 6.2.2: API Endpoints (REST o GraphQL)**
- [ ] `POST /api/expedientes` — crear nuevo expediente
- [ ] `GET /api/expedientes` — listar expedientes del usuario
- [ ] `GET /api/expedientes/:id` — detalle de expediente
- [ ] `POST /api/patrimonio` — capturar activo
- [ ] `GET /api/patrimonio/:expedienteId` — listar activos
- [ ] `POST /api/isd/calculate` — calcular ISD
- [ ] `POST /api/documentos/generar-cuaderno` — generar documento

**Tarea 6.2.3: Autenticación**
- [ ] Implementar auth (OAuth2, Magic Link, o simple email/pass)
- [ ] Control de acceso por rol (Admin, Despacho, Usuario)

---

### 6.3 Analytics & Tracking
**Plazo:** Q2 2026

**Tarea 6.3.1: Google Analytics 4**
- [ ] Configurar GA4
- [ ] Eventos clave: pageview, signup, expediente creado, ISD calculado, documento generado

**Tarea 6.3.2: Product Analytics (Opcional)**
- [ ] Mixpanel o Segment para funnel analysis

---

## 🔄 SECCIÓN 7: CONTROL DE FLUJOS Y DEPENDENCIAS

### 7.1 Matriz de Dependencias (Orden de Ejecución Recomendado)

```
FASE 1: Setup Técnico
    ↓
FASE 2: Landing Page & Home (paralelo con FASE 3 si es posible)
    ↓
FASE 3: Motor ISD (core del producto)
FASE 4: Gestor Patrimonial (paralelo)
FASE 5: Escenario Sucesorio (paralelo)
    ↓
FASE 6: Generación Documental
    ↓
TESTING & VALIDACIÓN INTEGRAL
    ↓
LANZAMIENTO MVP (Q2 2026)
    ↓
FASE 7: Activos Digitales (post-MVP)
FASE 8: Expansión Asesorías (post-MVP)
```

### 7.2 Hitos Principales (Milestones)

| Hito | Plazo | Artefacto | Responsable |
|---|---|---|---|
| Setup técnico completado | 2026-04-25 | Proyecto compilando sin errores | Tech |
| Landing page live | 2026-05-09 | ulpiano.es con home + soluciones + precios | Design + Content |
| Motor ISD MVP | 2026-05-23 | API + UI con validación en casos reales | Backend + Product |
| Dashboard básico | 2026-05-30 | Lista de expedientes + detalle | Frontend + Backend |
| MVP demo-able | 2026-06-06 | Flujo completo: patrimonial → ISD → documento | Integración |
| Piloto con 10 despachos | 2026-06-20 | Onboarding, feedback, iteraciones rápidas | Sales + Product |

---

## 📋 SECCIÓN 8: CHECKLIST DE VERIFICACIÓN POR FASE

### FASE 1 Completada ✓ cuando:
- [ ] Proyecto corre en `localhost:3000`
- [ ] Header + Footer rendering correctamente
- [ ] Todos los tokens de Tailwind configurados
- [ ] Rutas placeholder respondiendo
- [ ] Responsive en mobile/tablet/desktop

### FASE 2 Completada ✓ cuando:
- [ ] Home hero con claims + CTAs funcionales
- [ ] Secciones de módulos, para quién, resultado
- [ ] Página Soluciones con 5 cards
- [ ] Página Precios con 3 planes
- [ ] Copy aprobado por product/marketing

### FASE 3 Completada ✓ cuando:
- [ ] API endpoints funcionando
- [ ] Cálculos ISD validados contra casos reales
- [ ] UI de cálculo con trace paso-a-paso
- [ ] Reducciones, bonificaciones, coeficientes implementados
- [ ] Normativa citada en resultados

### FASE 4 Completada ✓ cuando:
- [ ] Formulario patrimonial capturando activos
- [ ] Cálculo automático de caudal relicto neto
- [ ] Modelo 660 generado en PDF
- [ ] Data persistence funcionando

### FASE 5 Completada ✓ cuando:
- [ ] Formulario de herederos con cálculo de legítimas
- [ ] Simulación comparativa funcionando
- [ ] Integración con patrimonial + ISD completa

### FASE 6 Completada ✓ cuando:
- [ ] Generador de cuaderno particional en Word
- [ ] Modelo 650 generado en PDF
- [ ] Documentos integrando datos reales del expediente

---

## 📞 SECCIÓN 9: CONTACTOS Y ROLES

| Rol | Responsable | Contacto | Área |
|---|---|---|---|
| Product Manager | [TBD] | - | Estrategia, prioridades |
| Lead Backend | [TBD] | - | Motor ISD, APIs, DB |
| Lead Frontend | Clara Gironatour | - | UI, componentes, Next.js |
| Content/Marketing | [TBD] | - | Copy, landing, outbound |
| Design | [TBD] | - | Mockups, design system |
| Sales | [TBD] | - | Outreach, demos, pilotos |

---

## 🔗 SECCIÓN 10: REFERENCIAS Y LINKS RÁPIDOS

**Documentación interna:**
- `/skills/product-marketing-context.md` — Contexto de producto
- `/skills/ARQUITECTURA_NEXTJS_ULPIANO.md` — Arquitectura técnica
- `/skills/MAPEO_PAGINAS_CONTENIDOS.md` — Mapeo de rutas
- `/skills/PROMPT_SETUP_PROYECTO.md` — Setup paso-a-paso
- `/CLAUDE.md` y `/AGENTS.md` — Reglas del proyecto

**Recursos externos:**
- [Llei 19/2010 (Impuesto sobre Sucesiones, Cataluña)](https://www.gencat.cat/economia)
- [Codi Civil de Catalunya](https://www.gencat.cat/juridiques)
- [Modelo 660 (Inventario de Bienes y Derechos)](https://www.agenciatributaria.es)
- [Modelo 650 (Autoliquidación ISD)](https://www.agenciatributaria.es)

---

## 📝 NOTAS FINALES

1. **Este documento es vivo.** Actualiza secciones según cambios de estrategia, prioridades o descubrimientos.

2. **Consulta referencias antes de ejecutar.** Cada tarea refiere a documentación que proporciona contexto y definiciones exactas. No improvises basándote en training data.

3. **Valida contra normativa real.** Especialmente en motor ISD, testing con casos reales de asesorías y abogados es crítico antes de producción.

4. **Tono de voz y posicionamiento son no-negociables.** Todos los contenidos deben alinearse con `product-marketing-context.md`. No uses lenguaje de startup, no promises IA mágica, no subestimes al profesional jurídico.

5. **MVP es riguroso, no básico.** Ulpiano no es "simple" — es preciso. Mejor 3 módulos perfecctos que 5 módulos mediocres.

---

**Última revisión:** 2026-04-11  
**Próxima revisión recomendada:** 2026-04-25 (post-Phase-1)

**Preguntas frecuentes:**
- ¿Por dónde empiezo? → Sección 3, Tarea 1.1
- ¿Cuál es el claim de Ulpiano? → Sección 2.1 o `product-marketing-context.md`
- ¿Qué archivos debo leer primero? → Sección 1
- ¿Cuándo lanzamos? → Q2 2026 (6–8 semanas desde el setup)
