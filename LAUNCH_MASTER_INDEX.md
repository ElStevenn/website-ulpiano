# 🚀 MASTER INDEX — Lanzamiento Web Ulpiano Legal Tech

**Fecha de creación:** 2026-04-11  
**Propósito:** Documento único de control y referencia para el lanzamiento completo de ulpiano.es  
**Plazo objetivo:** Q2 2026 (6–8 semanas)

---

## 📍 SECCIÓN 0: VISIÓN DE LANZAMIENTO

### 0.1 ¿Qué es el Lanzamiento de Ulpiano?

El lanzamiento es la presentación pública de **ulpiano.es** como plataforma SaaS completa y funcional para gestión sucesoria en Cataluña. No es un MVP oculto. Es un producto listo para producción con:

- **Web pública** funcional (landing, soluciones, precios, contact, recursos)
- **App de demostración** que permite a clientes experimentar flujos reales
- **Onboarding guiado** para los primeros 10 despachos piloto
- **Soporte y documentación** listos para usuarios reales
- **Estrategia de go-to-market** con outreach, demos, partnership con funerarias

### 0.2 Objetivos del Lanzamiento

| Objetivo | Métrica de éxito | Plazo |
|---|---|---|
| **Presencia web profesional** | ulpiano.es disponible 24/7, SEO indexado, carga <2s | 2026-05-30 |
| **Demo-ability** | Abogados pueden crear expediente de prueba en 10 min | 2026-06-06 |
| **Pilot customers** | 10 despachos en onboarding activo | 2026-06-20 |
| **Brand awareness en Cataluña** | 50 despachos contactados, 5+ solicitudes de demo | 2026-07-11 |
| **Validación de producto** | Feedback de pilotos, roadmap Q3 definido | 2026-07-31 |

### 0.3 Alcance del Lanzamiento

**Incluye:**
- ✅ Sitio web público completo (homepage, soluciones, precios, blog, contacto)
- ✅ App con módulos: Patrimonial, Escenario, Motor ISD, Generación documental
- ✅ Autenticación y gestión de usuarios
- ✅ Base de datos con persistencia
- ✅ Email notifications y alerts
- ✅ Documentation & help center
- ✅ Outreach e inbound marketing
- ✅ Partnerships (funerarias, asesorías)

**NO incluye (post-lanzamiento):**
- ❌ Activos digitales (módulo específico)
- ❌ Integración contable
- ❌ Multi-idioma (español + inglés)
- ❌ Expansión a otros CCAAa

---

## 🗂️ SECCIÓN 1: ARQUITECTURA DE CONTENIDOS (Sitio Web)

### 1.1 Mapa de Páginas — Tier 1 (Principales)

```
ulpiano.es/
├── / (Home — Hero + módulos + segmentos + CTA)
├── /soluciones (Hub — 5 soluciones principales)
├── /pensado-para (Segmentación — Despachos, Asesorías, Notarías)
├── /precios (Planes + FAQ)
├── /recursos (Blog, guías, glosario)
├── /demo (Solicitar demo / acceder a app)
├── /contacto (Formulario contacto)
└── /política-privacidad, /términos-servicio (Legal)
```

### 1.2 Mapa de Páginas — Tier 2 (Detalle)

```
/soluciones/
├── planificacion-sucesoria
├── documentacion-sucesoria
├── fiscalidad-sucesoria (ISD)
├── procesamiento-documental
└── activos-digitales

/pensado-para/
├── despachos
├── asesorias
└── notarias

/recursos/
├── blog (listar artículos)
├── blog/[slug] (artículo individual)
├── guias (listar guías descargables)
├── guias/[slug] (guía individual)
├── glosario (términos sucesorios)
└── preguntas-frecuentes
```

### 1.3 Contenido por Página

#### **HOME** (`/`)
**Estructura:**
1. **Hero Section** (60–80px viewport height)
   - Claim principal: *"De inventario a cuaderno particional. Sin errores. Sin revisión manual."*
   - Subtitle: Describe brevemente a quién va dirigido
   - CTA principal: "Reserva tu demo" (botón verde)
   - CTA secundaria: "Ver cómo funciona" (ghost button)
   - Visual: Imagen hero (mockup app, gráfica, o ilustración abstracta)

2. **Módulos Section** (4 cards)
   - Gestor Patrimonial → Inventario estructurado
   - Escenario Sucesorio → Cálculo de legítimas
   - Motor ISD → Liquidación fiscal automática
   - Generación Documental → Word + PDF
   - Card specs: Icono + título + descripción 40 palabras + link "Saber más"

3. **Para Quién** (3 tabs)
   - Tab 1 — Despachos: "El cálculo no debería tardar 2 horas. Tarda 3 minutos."
   - Tab 2 — Asesorías: "El ISD cambia. Tus expedientes, no."
   - Tab 3 — Notarías: "El testamento es el inicio. Ulpiano te mantiene activo."
   - Cada tab: Beneficios (3–4 bullets) + CTA

4. **Resultado** (Social proof / números)
   - "35% menos tiempo de gestión"
   - "0 errores de cálculo normativo"
   - "100% trazabilidad auditoria"
   - Opcional: "X despachos ya usan Ulpiano" (si hay pilots)

5. **Testimonios** (placeholder / real)
   - Cards con quote + autor + rol
   - Mínimo 2, máximo 4

6. **FAQ** (expandible accordion)
   - 5–8 preguntas técnicas + comerciales
   - ¿Qué soporta Ulpiano? → Derecho catalán
   - ¿Cuánto tiempo lleva aprender? → 2–3 horas
   - ¿Cómo se protegen mis datos? → Compliance info

7. **CTA Final**
   - "Comienza tu prueba gratuita" (botón grande, verde)
   - Subtext: "Sin tarjeta de crédito. 30 días."

**Copy tone:** Directo, preciso, sin hype. Habla de resultados concretos, no de "revolución".

---

#### **SOLUCIONES HUB** (`/soluciones`)
**Estructura:**
1. Hero: "Las 5 herramientas que estructuran la herencia"
2. Grid 5 columns (o 2 en mobile):
   - Planificación Sucesoria
   - Documentación Sucesoria
   - Fiscalidad Sucesoria
   - Procesamiento Documental
   - Activos Digitales
3. Cada card:
   - Icono
   - Título
   - Descripción 50 palabras
   - Link: "Ver detalles" → página individual
4. Bottom CTA: "¿No sabes cuál necesitas?" + link a /demo

---

#### **SOLUCIÓN DETALLADA** (ej: `/soluciones/fiscalidad-sucesoria`)
**Estructura:**
1. Hero pequeño: Título + descripción
2. Problema: "¿Cómo se calcula el ISD en Cataluña?" (explicación 100 palabras)
3. Solución: "Ulpiano automatiza..." (descripción de features)
4. Features detalladas (3–5):
   - Icono + título + descripción
5. Flujo visual: Step 1 → Step 2 → Step 3 (cómo funciona)
6. Caso de uso: "Ejemplo: Herencia de 500k€ en Girona"
   - Antes: X horas, Y errores potenciales
   - Con Ulpiano: Z minutos, 0 errores
7. Bottom CTA: "Prueba ahora" o "Solicita demo"

---

#### **PENSADO PARA — DESPACHOS** (`/pensado-para/despachos`)
**Estructura:**
1. Hero: "Diseñado para abogados como tú"
2. Claim: *"El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos."*
3. Beneficios principales (4–5):
   - 35% reducción en tiempo
   - 0 errores de normativa
   - Documentos coherentes
   - Auditoría de decisiones
   - Mejor experiencia cliente
4. Módulos específicos para despachos:
   - Cuadro comparativo: Antes (Excel) vs Ulpiano (App)
5. Testimonios de despachos (si disponible)
6. Precios despachos (plan Esencial recomendado)
7. CTA: "Reserva tu demo personalizada"

---

#### **PRECIOS** (`/precios`)
**Estructura:**
1. Intro: "Transparencia en precios. Sin sorpresas."
2. Tabla de 3 planes:
   - **Freemium** — Gratis | 1 usuario | 1 expediente/año | Funciones básicas
   - **Básico** — €99/mes | 2 usuarios | 3 expedientes/mes | Módulo legal
   - **Esencial** — €149/mes | 5 usuarios | 10 expedientes/mes | ISD + AI + Escenarios
3. Feature comparison table (8–10 features)
4. FAQ:
   - ¿Hay contrato mínimo? → No, cancel en cualquier momento
   - ¿Qué pasa si excedo expedientes? → Auto-upgrade
   - ¿Cuál elegir? → Quiz o recomendación
5. CTA por plan: "Empezar" o "Contactar ventas"

---

#### **RECURSOS** (`/recursos`)
**Blog:**
1. Listado de 5–8 artículos iniciales:
   - "Guía: cómo gestionar herencias complejas" (1500 palabras)
   - "Legítima vs cuota: diferencia explicada" (1200 palabras)
   - "ISD 2026: cambios normativos" (1500 palabras)
   - "Por qué 35% de despachos abandonan Excel" (1000 palabras)
   - "Motor ISD catalán: normativa automatizada" (1200 palabras)

2. Filtros: por categoría (Legal, Fiscal, Operativo, Producto)
3. Search functionality
4. Sidebar: artículos relacionados, newsletter signup

**Guías Descargables:**
- "Checklist: 20 pasos para gestionar una herencia"
- "Template: Hoja de cálculo patrimonial"
- "Referencia rápida: Normativa ISD Cataluña"

**Glosario:**
- 30–40 términos sucesorios clave
- Definiciones 50–100 palabras
- Links internos a artículos relacionados

---

#### **DEMO** (`/demo`)
**Estructura:**
1. Opciones:
   - Option A: "Solicitar demo en vivo" (formulario)
   - Option B: "Acceder a demo gratis" (autologin a sandbox)
2. Si solicita demo:
   - Formulario: nombre, email, despacho, teléfono, preferencia horario
   - Autorespuesta: "Te contactaremos en 24h"
   - Sales recibirá ticket
3. Si accede a demo:
   - Autologin a cuenta sandbox
   - Pre-populated con caso de ejemplo
   - Límite: 30 días or 3 usos

---

#### **CONTACTO** (`/contacto`)
**Estructura:**
1. Formulario simple:
   - Nombre, Email, Teléfono, Mensaje
   - Dropdown: "¿Eres?" (Abogado, Asesor, Notario, Otro)
2. Info de contacto:
   - Email: info@ulpiano.es
   - Teléfono: [TBD]
   - Dirección: [Girona, Cataluña]
3. Mapa integrado (Google Maps)
4. Social links (LinkedIn, Twitter — si está activo)

---

### 1.4 Estrategia de SEO & Keywords Prioritarios

**Tier 1 (High intent, medium volume):**
- "software gestión herencias cataluña"
- "cálculo ISD herencia"
- "planificación sucesoria abogados"
- "software despachos abogados"

**Tier 2 (Educational, high volume):**
- "cómo se calcula la herencia"
- "legítima herencia qué es"
- "ISD herencia 2026"
- "gestionar herencia sin abogado"

**Estrategia:**
- Pillar page: `/recursos` (blog + guías + glosario)
- Cluster pages: Artículos de blog optimizados por keyword
- Schema markup: LocalBusiness, Product, Article
- Internal linking: Blog → soluciones → CTA

---

## 🎨 SECCIÓN 2: DISEÑO & BRANDING

### 2.1 Design System (Specs)

**Colores (definidos en `product-marketing-context.md`):**
- Primary: ulpiano-green (#2D6A4F) — botones, CTAs, estados validados
- Secondary: night (#0F1F3D) — fondos oscuros, nav, footer
- Accent: green-light (#40916C) — hover states
- Neutral: ink, slate, fog, mist, surface, white (ver contexto)
- Functional: warning (#B45309), error (#991B1B), info (#1E6A9E)

**Tipografía:**
- Headlines: DM Sans Bold
- Body: Inter Regular/Medium
- Monospace: JetBrains Mono (datos numéricos, referencias legales)

**Componentes:**
- ButtonPrimary: green bg, white text, hover shadow
- ButtonGhost: transparent, white text, arrow on hover
- Card: surface bg, border mist, shadow subtle
- Alert: color funcional (success/warning/error)
- Input: white bg, border mist, focus outline green

**Spacing:**
- Base unit: 8px
- Padding sections: 20–80px (responsive)
- Gap entre cards: 16–24px

**Breakpoints:**
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px+

---

### 2.2 Assets Visuales (TODO)

**Elementos a crear:**
- [ ] Logo Ulpiano (si no existe)
- [ ] Favicon
- [ ] Hero image / illustration
- [ ] 5 iconos módulos
- [ ] Icons para beneficios/features
- [ ] Screenshots o mockups de la app
- [ ] Social media graphics (16:9, 1:1)
- [ ] Email templates

---

### 2.3 Guía de Voz (Writing Style)

**Tono:** Riguroso, directo, experto, profesional

**DO:**
- ✅ "Reduce el tiempo de gestión hasta 35%"
- ✅ "Motor normativo calcula automáticamente legítimas según CCCat"
- ✅ "Cada decisión es auditable"
- ✅ Usar números concretos
- ✅ Hablar al profesional, no al cliente final

**DON'T:**
- ❌ "Revoluciona tu despacho"
- ❌ "IA que hace tu trabajo"
- ❌ "La herramienta más completa"
- ❌ "Fácil de usar"
- ❌ Emojis, hype, lenguaje startup
- ❌ Prometer sustitución del abogado

---

## 📝 SECCIÓN 3: CONTENIDOS & COPY

### 3.1 Copy Sheets por Página

**HOME — Hero**
```
Headline: "De inventario a cuaderno particional. Sin errores. Sin revisión manual."

Subheadline: "Ulpiano es la plataforma que estructura, valida y documenta 
el proceso sucesorio completo. Para abogados, asesores y notarías 
que gestionan herencias con volumen, complejidad y responsabilidad profesional."

CTA Primary: "Reserva tu demo"
CTA Secondary: "Ver cómo funciona"
```

**HOME — Módulos**
```
Section title: "Todo lo que necesitas en un lugar"

Módulo 1 — Gestor Patrimonial:
Headline: "Inventario estructurado y valorado"
Copy: "Captura inmuebles, cuentas, fondos, participaciones y activos digitales. 
Cálculo automático del caudal relicto neto."

Módulo 2 — Escenario Sucesorio:
Headline: "Legítimas y cuotas sin cálculo manual"
Copy: "Designa herederos, Ulpiano calcula automáticamente legítimas según CCCat. 
Simula alternativas en segundos."

Módulo 3 — Motor ISD:
Headline: "Liquidación fiscal completa por beneficiario"
Copy: "Base imponible → Reducciones → Tarifa → Coeficiente → Bonificación → Cuota. 
Todo según normativa Cataluña, sin excepciones."

Módulo 4 — Generación Documental:
Headline: "Word, PDF y formularios fiscales listos"
Copy: "Cuaderno particional, Modelo 660, Modelo 650. 
Desde datos estructurados, sin revisión manual."
```

**SOLUCIONES — Fiscalidad Sucesoria**
```
Hero:
Headline: "Fiscalidad sucesoria sin complicaciones"
Subheadline: "El cálculo del ISD es obligatorio. El error es evitable."

Problem section:
"El Impuesto sobre Sucesiones y Donaciones (ISD) es complejo:
- Normativa diferente por Comunidad Autónoma
- Reducciones múltiples y condicionales
- Bonificaciones variables según grupo de parentesco
- Recargos por extemporaneidad
- Manejo manual = errores potenciales + auditoría de cliente"

Solution:
"Ulpiano automatiza el flujo completo:
1. Base imponible: activos − pasivos deducibles
2. Reducciones: parentesco, discapacidad, vivienda, empresa familiar
3. Base liquidable: aplicar reducciones según norma
4. Tarifa: tabla progresiva CCCat
5. Coeficiente multiplicador: según grupo y base
6. Bonificación: automática por grupo o cónyuge
7. Cuota a ingresar: resultado final auditeable"

Features:
✓ Catálogo completo de reducciones y bonificaciones
✓ Normativa integrada — cada cálculo cita la ley
✓ Recalculación automática si cambia normativa
✓ Auditoría paso-a-paso
✓ Exportación a Modelo 650 (ATC)
```

**PENSADO PARA — Despachos**
```
Hero:
Headline: "Diseñado para abogados como tú"
Subheadline: "El cálculo de la legítima no debería tardar dos horas. 
En Ulpiano tarda tres minutos. Con el derecho foral catalán integrado, sin excepciones."

Benefits (4):
1. "35% menos tiempo por expediente"
   Menos cálculo manual = más clientes, más ingresos

2. "0 errores de normativa catalán"
   Motor ISD integrado. Reducciones, bonificaciones, coeficientes — todos automatizados

3. "Documentos coherentes desde datos"
   Cuaderno particional + formularios fiscales generados automáticamente

4. "Auditoría de cada decisión"
   Cliente ve exactamente cómo se llegó a cada número. Confianza + menos objeciones

Comparison Table: Excel vs Ulpiano
[Details in table format]
```

**PRECIOS**
```
Intro:
"Transparencia en precios. Paga solo por lo que usas. Cancel cuando quieras."

Plan 1 — Freemium
Price: Gratis
Users: 1
Files/month: 1 por año
Features: • Patrimonial básico • Escenario simple • No ISD • No documentación
CTA: "Empezar gratis"

Plan 2 — Básico
Price: €99/mes
Users: 2
Files/month: 3
Features: • Patrimonial avanzado • Escenario con legítimas • ISD catalán • Documentación
CTA: "Elegir plan"

Plan 3 — Esencial (Recomendado para despachos)
Price: €149/mes
Users: 5
Files/month: 10
Features: [todo lo anterior] • Ulpiano AI (sugerencias) • Escenarios comparativos • Integración con contable
CTA: "Elegir plan"

FAQ:
¿Hay contrato mínimo?
No. Acceso mensual, cancel en cualquier momento sin penalización.

¿Qué pasa si supero el límite de expedientes?
Tu plan se actualiza automáticamente al mes siguiente. Te lo avisamos antes.

¿Cuál es el mejor plan para un despacho mediano?
Esencial. Soporta hasta 10 expedientes complejos/mes, lo que cubre 2–3 usuarios.

¿Hay descuento por volumen?
Sí. Contacta sales@ulpiano.es para presupuesto personalizado.

¿Incluye soporte?
Sí, email + chat. Soporte prioritario en plan Esencial.
```

---

### 3.2 Blog Content Calendar (Primeras 8 semanas)

| Semana | Artículo | Keywords | Tipo |
|---|---|---|---|
| Semana 1 (pre-launch) | "Guía: Gestionar herencias complejas paso-a-paso" | herencia, gestión, guía | Pillar |
| Semana 1 | "Legítima y cuota hereditaria: diferencia explicada" | legítima, cuota, derecho catalán | Educational |
| Semana 2 | "ISD 2026: cambios normativos y cálculo" | ISD, impuesto sucesiones, cataluña | News |
| Semana 2 | "Por qué 35% de despachos abandonan Excel" | excel, despacho, gestión | Competitive |
| Semana 3 | "Motor ISD catalán: normativa automatizada" | ISD, cataluña, automatización | Product |
| Semana 3 | "Activos digitales en herencias: criptos, wallets, cloud" | activos digitales, crypto, herencia | Trend |
| Semana 4 | "Cuaderno particional: qué es y cómo se genera" | cuaderno particional, documento | How-to |
| Semana 4 | "5 errores comunes en cálculo de ISD y cómo evitarlos" | ISD, errores, abogado | Advice |

**Cadencia:** 2 artículos/semana primeras 4 semanas, luego 1 artículo/semana

---

## 🛠️ SECCIÓN 4: CONSTRUCCIÓN TÉCNICA

### 4.1 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 + React 19 + TypeScript |
| Styling | Tailwind CSS + shadcn/ui (opcional) |
| Hosting | Vercel |
| Backend | Next.js API Routes (o externa) |
| Database | PostgreSQL (recomendado) o Firebase |
| Auth | NextAuth.js o similar |
| File generation | docx, pdfkit, o similar |
| Email | SendGrid / Resend |
| Analytics | Google Analytics 4 + Mixpanel |
| Form handling | React Hook Form + Zod validation |

---

### 4.2 Checklist Técnico Pre-Launch

**Frontend:**
- [ ] Home page responsive (mobile, tablet, desktop)
- [ ] Todas las páginas Tier 1 creadas y funcionales
- [ ] Navigation (header, footer, breadcrumbs)
- [ ] SEO: meta tags, Open Graph, structured data
- [ ] Forms: contacto, solicitud de demo
- [ ] Performance: Lighthouse score >90
- [ ] Accesibilidad: WCAG 2.1 AA level
- [ ] Analytics tracking configurado
- [ ] 404 page
- [ ] Sitemap.xml y robots.txt

**Backend:**
- [ ] API endpoints documentados (Swagger o similar)
- [ ] Auth funcional (signup, login, logout)
- [ ] Database migrations
- [ ] Modelo Expediente con relaciones
- [ ] Modelo Usuario con roles
- [ ] Email notifications (bienvenida, reset password, alerts)
- [ ] Error handling y logging
- [ ] Rate limiting
- [ ] CORS configurado

**App (Demo):**
- [ ] Dashboard básico (lista de expedientes)
- [ ] Crear expediente
- [ ] Formulario patrimonial (captura activos)
- [ ] Cálculo ISD (con UI paso-a-paso)
- [ ] Generación de documento Word
- [ ] Export PDF
- [ ] Persistencia de datos

**Infrastructure:**
- [ ] Domain ulpiano.es apuntando a Vercel
- [ ] SSL/HTTPS activo
- [ ] CDN configurado
- [ ] Backups automáticos de BD
- [ ] Staging environment separado
- [ ] Monitoreo de uptime
- [ ] Error tracking (Sentry o similar)

**Compliance & Legal:**
- [ ] Política de privacidad publicada
- [ ] Términos de servicio publicados
- [ ] GDPR compliance (data processing agreement, consent)
- [ ] Cookies consent banner
- [ ] Privacy Shield / SCCs si transferencia datos UE

---

### 4.3 Cronograma Técnico (8 semanas)

```
Semana 1-2: Setup inicial + componentes globales
├── Tailwind config con tokens Ulpiano
├── Header, Footer, componentes reutilizables
├── Estructura de rutas
└── Autenticación básica

Semana 2-3: Landing pages tier 1
├── Home completa (hero, módulos, CTA)
├── Soluciones hub
├── Precios
├── Contacto
└── Footer con links

Semana 3-4: App MVP
├── Dashboard
├── Crear expediente
├── Capturar patrimonio
└── Persistencia a BD

Semana 4-5: Motor ISD integrado
├── API cálculo ISD
├── UI de cálculo paso-a-paso
├── Validación contra casos reales
└── Documentación generada

Semana 5-6: Pulida & testing
├── QA en todos los flujos
├── Performance optimization
├── SEO fine-tuning
├── Accesibilidad audit
└── Copy review

Semana 6-7: Preparación lanzamiento
├── Monitoring setup
├── Email campaigns
├── Press outreach
├── Contacto con primeros 20 despachos
└── Training de demo

Semana 7-8: Lanzamiento
├── Go live
├── Monitoreo 24/7 primeras 48h
├── Soporte a primeros usuarios
└── Inicio onboarding pilots
```

---

## 📢 SECCIÓN 5: MARKETING & GO-TO-MARKET

### 5.1 Pre-Launch Activities (2 semanas antes)

**Email outreach:**
- [ ] Lista de 50–100 despachos en Cataluña (LinkedIn, directorios profesionales)
- [ ] Email 1: "Lanzamos Ulpiano — sistema operativo de herencias" (subject: "El cuaderno particional que os costó 3 días, en 20 minutos")
- [ ] Email 2: "Solicita tu demo privada" (5 días después)
- [ ] Email 3: "Últimos slots para acceso exclusivo pre-launch" (2 días antes)

**LinkedIn:**
- [ ] Post anunciando lanzamiento
- [ ] Artículo sobre problema que Ulpiano resuelve
- [ ] Poll: "¿Cómo gestionas herencias actualmente?" (engagement)

**Partnerships:**
- [ ] Contactar funerarias grandes en Girona/Barcelona
- [ ] Proposal: "Ulpiano para tus clientes en duelo" (commission/revenue share)

**Press:**
- [ ] Press release: "Ulpiano lanza plataforma SaaS para gestión sucesoria" 
- [ ] Pitch a medios legal-tech y negocios
- [ ] Contactar bloguers de derecho/startup

---

### 5.2 Launch Day

**Morning of launch:**
- [ ] Verificar todo está live (ulpiano.es, app, emails)
- [ ] Send launch email a toda lista
- [ ] Post en LinkedIn (CEO + empresa)
- [ ] Post en Twitter/X
- [ ] Activar Google Ads (keywords "software herencias", etc.)
- [ ] Notify primeros 20 prospects por teléfono (si is relationship)

**First week:**
- [ ] Monitoreo 24/7 de errores
- [ ] Demo calls con prospects que solicitan
- [ ] Collect feedback de early users
- [ ] Daily standup de issues críticos

---

### 5.3 Post-Launch Marketing (Semanas 2–8)

**Content (Weekly):**
- [ ] 2 blog articles/week (ver calendar en SECCIÓN 3.2)
- [ ] Email newsletter (1x/week) — tips sucesorios + Ulpiano use cases

**Outreach (Continuous):**
- [ ] 10 calls/week a prospects (sales)
- [ ] 5 demos/week (product)
- [ ] Collect case studies de primeros pilotos

**Paid (Optional):**
- [ ] Google Ads: keywords alto intent (budget: €500–1000/mes)
- [ ] LinkedIn ads: targeting despachos en Cataluña (budget: €300/mes)

**Partnerships:**
- [ ] Cerrar acuerdos con 3–5 funerarias
- [ ] Acuerdos de revenue share o affiliate

---

## ✅ SECCIÓN 6: PRE-LAUNCH CHECKLIST

**2 Semanas antes:**
- [ ] Diseño final aprobado
- [ ] Copy final aprobado
- [ ] Domain registro y SSL
- [ ] Email marketing campaign lista
- [ ] Press list compilada
- [ ] Primeros 20 prospects identificados y listos

**1 Semana antes:**
- [ ] QA testing de todo el sitio
- [ ] Performance testing (Lighthouse, WebPageTest)
- [ ] Seguridad: scan de vulnerabilidades
- [ ] Backup de BD configurado
- [ ] Monitoreo de uptime (StatusPage) configurado
- [ ] Support email (support@ulpiano.es) operativo
- [ ] Documentación de producto lista
- [ ] Video demo grabado (1–2 minutos)

**2 Días antes:**
- [ ] Staging deployment final
- [ ] Full regression testing
- [ ] Email sequences queued (ready to send)
- [ ] Social media posts scheduled

**1 Día antes:**
- [ ] Final review de landing page
- [ ] DNS verification
- [ ] Google Search Console setup
- [ ] Google Analytics firing correctly
- [ ] Sentry/error tracking configured
- [ ] Email list ready to send

**Launch Day:**
- [ ] Go live at [TBD] time (suggest: 10am CET)
- [ ] Send launch email
- [ ] Monitor errors in real-time
- [ ] CEO/team available for any critical issues

---

## 📊 SECCIÓN 7: SUCCESS METRICS & KPIs

### 7.1 Launch Week

| Métrica | Target | How to measure |
|---|---|---|
| Website uptime | >99.9% | Uptime robot / StatusPage |
| Avg load time | <2s | Lighthouse / WebPageTest |
| First 10 signups | ≥5 | Analytics / Database |
| Demo requests | ≥10 | Form submissions |
| Blog views | ≥200 | Google Analytics |
| Email open rate | ≥25% | SendGrid / Resend |

### 7.2 First Month

| Métrica | Target | Owner |
|---|---|---|
| Unique website visitors | ≥1,000 | Marketing |
| Signups | ≥20 | Product |
| Freemium conversions | ≥2 (to paid trial) | Sales |
| Demo customers onboarded | ≥5 | Success |
| Blog articles published | ≥6 | Content |
| Social followers | ≥200 (LinkedIn) | Marketing |
| Press mentions | ≥2 | PR |

### 7.3 First Quarter (Q2)

| Métrica | Target |
|---|---|
| Pilot despachos activos | 10 |
| Paid plans activos | 5 |
| Revenue | €500–1,000 (MRR) |
| NPS score (from pilots) | ≥50 |
| Customer support tickets | <20 (no critical) |
| Data security incidents | 0 |

---

## 📋 SECCIÓN 8: EQUIPO & RESPONSABILIDADES

| Rol | Responsable | Tasks |
|---|---|---|
| **Product Manager** | [TBD] | Strategy, prioritization, roadmap |
| **Lead Frontend** | Clara Gironatour | Landing page, UI, components |
| **Lead Backend** | [TBD] | APIs, auth, database, ISD motor |
| **Content/Marketing** | [TBD] | Copy, blog, email, outreach |
| **Design** | [TBD] | Visual assets, mockups, UI kit |
| **Sales** | [TBD] | Outreach, demos, pilot onboarding |
| **Customer Success** | [TBD] | Support, onboarding, retention |
| **Legal/Compliance** | [TBD] | Privacy policy, T&C, GDPR |

---

## 🔗 SECCIÓN 9: DOCUMENTOS DE REFERENCIA

**Estratégico:**
- `product-marketing-context.md` — Contexto de producto, claims, tone
- `ARQUITECTURA_NEXTJS_ULPIANO.md` — Tokens, componentes, estructura
- `MAPEO_PAGINAS_CONTENIDOS.md` — Sitemap detallado

**Operativo:**
- Este documento: `LAUNCH_MASTER_INDEX.md`
- `PROMPT_SETUP_PROYECTO.md` — Setup paso-a-paso
- `AGENTS.md` / `CLAUDE.md` — Reglas del proyecto

**Externo:**
- [CCCat - Codi Civil de Catalunya](https://www.gencat.cat)
- [Llei 19/2010 - ISD Cataluña](https://www.gencat.cat/economia)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)

---

## 🎯 QUICK START: Próximos 5 Días

1. **HOY (Día 1):** Aprobación de este documento + asignación de roles
2. **Día 2–3:** Setup técnico del proyecto (FASE 1 según SECCIÓN 4.3)
3. **Día 3–4:** Diseño final aprobado + copy aprobado
4. **Día 4–5:** Iniciación de desarrollo de landing page

**Objetivo de la semana:** Proyecto compilando, primera ronda de landing page en desarrollo

---

## 📝 NOTAS FINALES

1. **Este es tu roadmap completo.** Cada sección refiere a tareas específicas, métricas, y deliverables.

2. **Mantén alineación en tono.** Todos los textos deben sonar como "Ulpiano" — riguroso, preciso, directo. Consulta `product-marketing-context.md` para dudas.

3. **Prueba con pilotos reales.** Antes de lanzar públicamente, prueba con 2–3 despachos conocidos para validar flujos y error handling.

4. **La velocidad es importante.** Q2 2026 es el plazo. Prioriza landing page + demo + email outreach. El blog puede venir después.

5. **Feedback loop continuo.** Cada semana, reúnete con el equipo para revisar métricas, bloqueadores, y ajustes necesarios.

---

**Versión:** 1.0  
**Última actualización:** 2026-04-11  
**Próxima revisión:** Semana 1 post-lanzamiento (feedback)

---

**¿Listo para lanzar Ulpiano?** 🚀
