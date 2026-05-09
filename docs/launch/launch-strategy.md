# Estrategia de Lanzamiento — Ulpiano

> Documento operativo de lanzamiento. Adaptado al mercado legal catalán/español.

---

## Timeline General

| Fase | Semanas | Objetivo |
|------|---------|----------|
| 1. Pre-lanzamiento | 1–4 | Construir base: lista de leads, presencia LinkedIn, contactos |
| 2. Alpha Launch | 5–8 | 10–15 despachos probando la plataforma |
| 3. Beta Launch | 9–14 | 50–100 usuarios, primeros testimonios, webinar |
| 4. Early Access | 15–20 | Freemium abierto, precios publicados, SEO |
| 5. Full Launch | 21–24 | General Availability, cobro activo, PR |

---

## Fase 1: Pre-lanzamiento (Semanas 1–4)

### Owned Channels

**1. Squeeze page + Lead magnet (implementado)**
- URL: `/recursos/checklist-expediente-sucesorio`
- Asset: Checklist del Expediente Sucesorio en Cataluña — 47 Puntos de Control
- Formulario: nombre + email → API `/api/lead-capture`
- Secuencia post-descarga: 4 emails (ver `src/lib/email-templates/checklist-sequence.ts`)

**2. Conectar email marketing**
- Servicio recomendado: **Resend** (transaccional) + **Loops** (nurture)
- Alternativa low-cost: Mailchimp (plan gratuito hasta 500 contactos)
- Configurar dominio de envío: `mail.ulpiano.es` (SPF, DKIM, DMARC)
- Crear la secuencia de 4 emails en la plataforma elegida

**3. Blog / Contenido SEO (preparar)**
- No publicar todavía; preparar 3–4 artículos para fase 3:
  - "Cómo calcular la legítima en Cataluña (guía actualizada)"
  - "Reducciones ISD Cataluña: guía completa con ejemplos"
  - "Modelo 660: qué es, cómo rellenarlo y errores frecuentes"
  - "Activos digitales en herencias: qué dice la normativa"

### Rented Channels — LinkedIn

**Perfil de empresa optimizado:**
- Tagline: "El sistema operativo de las herencias"
- Descripción: claim oficial del hero + propuesta de valor por segmento
- Banner: visual de la plataforma con copy "De inventario a cuaderno particional"
- URL: enlace a `/demo`

**Calendario de publicación: 2–3 posts/semana durante 4 semanas**

---

### LinkedIn — Posts Semana 1

**Post 1: Dato impactante (awareness)**
```
Un dato que pocos despachos miden:

El expediente sucesorio medio en Cataluña consume entre 20 y 40 horas de trabajo técnico.

No hablo de la parte jurídica (el criterio, la estrategia, la conversación con el cliente).

Hablo de:
→ Buscar el valor de referencia catastral de cada inmueble
→ Verificar qué reducción aplica a cada heredero
→ Recalcular la legítima cada vez que cambia un dato
→ Generar el modelo 660 y un 650 por heredero
→ Coordinar por email con el asesor fiscal

¿Cuánto de ese tiempo es realmente trabajo jurídico?
¿Y cuánto es trabajo que un sistema debería hacer por ti?

Estamos construyendo Ulpiano para responder a esa pregunta.

#DerechoSucesorio #GestiónSucesoria #LegalTech #Cataluña
```

**Post 2: Recurso gratuito (lead gen)**
```
Hemos publicado un recurso gratuito para profesionales que gestionan herencias en Cataluña:

📋 Checklist del Expediente Sucesorio — 47 Puntos de Control

Cubre las 5 fases del proceso:
1. Documentación inicial (certificados, últimas voluntades, seguros)
2. Inventario patrimonial (inmuebles, financieros, activos digitales)
3. Escenario sucesorio según el CCCat (legítima, heredamientos, cuarta viudal)
4. Liquidación fiscal ISD (reducciones Llei 19/2010, bonificaciones)
5. Tramitación y cierre (modelos 660/650, presentación ATC)

Cada punto incluye referencia normativa cuando aplica.

Descárgala gratis en: ulpiano.es/recursos/checklist-expediente-sucesorio

#DerechoSucesorio #ChecklistJurídica #ISD #Cataluña #Herencias
```

**Post 3: Insight técnico (autoridad)**
```
Un error que veo con frecuencia en expedientes sucesorios en Cataluña:

Aplicar la legítima del Código Civil estatal (1/3) en vez de la legítima catalana (1/4).

En derecho catalán (Art. 451-5 CCCat), la legítima es el 25% del caudal computable — no el tercio del derecho común.

La diferencia puede ser de decenas de miles de euros en un patrimonio medio.

Y no es un caso raro. Pasa en despachos que gestionan herencias en más de una comunidad y alternan entre normativas.

El problema no es de conocimiento. Es de sistema: cuando el cálculo depende de una hoja de cálculo manual, el riesgo está en la rutina, no en la competencia.

Por eso en Ulpiano el motor normativo detecta automáticamente la ley aplicable según la vecindad civil del causante. No es un campo que rellenas tú — es una decisión que el sistema toma y te muestra con la norma citada.

#DerechoForal #CCCat #Legítima #GestiónSucesoria
```

---

### LinkedIn — Posts Semana 2

**Post 4: Activos digitales (diferenciador)**
```
¿Tu checklist de inventario patrimonial incluye criptomonedas?

En 2024, el 12% de los españoles tenía algún tipo de criptoactivo. Es un porcentaje que solo crece.

Y sin embargo, en la mayoría de expedientes sucesorios, los activos digitales aparecen como una nota al margen — si aparecen.

El problema no es solo fiscal (sí, tributan en ISD como cualquier bien).

El problema es operativo:
→ ¿Quién tiene las claves del wallet?
→ ¿Cómo se valoran a fecha de devengo?
→ ¿Qué exchange usar para certificar el saldo?
→ ¿Qué pasa con las cuentas online, las suscripciones, el legado digital?

En Ulpiano tratamos los activos digitales como una categoría fiscal de primer nivel. No como un campo de texto libre.

Ninguna otra herramienta del mercado sucesorio español lo hace así.

#ActivosDigitales #Criptomonedas #Herencias #LegalTech
```

**Post 5: Proceso vs. herramienta (posicionamiento)**
```
La gestión sucesoria no necesita más herramientas.

Necesita un sistema.

Excel sirve para calcular, pero no para estructurar un expediente.
Word sirve para documentar, pero no para garantizar coherencia.
El email sirve para coordinar, pero no para dar trazabilidad.

Un expediente sucesorio complejo tiene: inventario, escenario hereditario, legítimas, ISD, modelos fiscales, cuaderno particional, plazos, y un cliente que necesita entender qué está pasando.

Eso no se resuelve con features sueltas. Se resuelve con infraestructura.

Es la razón por la que construimos Ulpiano como una plataforma — no como una calculadora de ISD ni como un generador de documentos.

ulpiano.es

#SistemaOperativo #GestiónSucesoria #LegalTech #Infraestructura
```

---

### LinkedIn — Posts Semanas 3–4

**Post 6: Pregunta abierta (engagement)**
```
Pregunta para abogados que gestionan herencias en Cataluña:

¿Cuánto tiempo dedicáis a la parte fiscal (ISD) de un expediente sucesorio medio?

a) Menos de 2 horas
b) Entre 2 y 5 horas
c) Más de 5 horas
d) Depende, pero siempre más de lo que debería

Responde en comentarios — me interesa comparar con los datos que estamos viendo.

#EncuestaJurídica #ISD #Cataluña #DerechoSucesorio
```

**Post 7: Caso de uso (storytelling)**
```
Un despacho de 4 personas en Girona me contó esto:

"Tenemos un expediente con un heredero en Francia, un piso en la Costa Brava, participaciones en una SL familiar y un seguro de vida con beneficiario distinto al heredero testamentario."

"Cada expediente así nos lleva 3 semanas. No porque sea difícil jurídicamente — porque la coordinación entre las piezas es un caos."

Inventario en Excel. Legítima calculada a mano. ISD en el simulador de la ATC (que no guarda nada). Cuaderno particional en Word.

Y todo tiene que cuadrar.

Ese es el problema que estamos resolviendo con Ulpiano: que las piezas cuadren por diseño, no por esfuerzo.

Si esto te suena, reserva 25 minutos para ver la plataforma: ulpiano.es/demo

#GestiónSucesoria #Girona #DerechoSucesorio #CostaBrava
```

**Post 8: Teaser de producto (anticipación)**
```
Algo en lo que estamos trabajando:

Comparación de escenarios sucesorios en paralelo.

Imagina poder ver, en una sola pantalla:
→ Impacto fiscal si herencia directa
→ Impacto fiscal si donación en vida
→ Impacto fiscal si usufructo al cónyuge

Con la normativa catalana aplicada automáticamente en cada escenario.

Para que la conversación con tu cliente deje de ser "confía en mí, esta es la mejor opción" y pase a ser "mira los números — tú decides".

Pronto.

#PlanificaciónSucesoria #SimulaciónFiscal #Ulpiano #Cataluña
```

---

### Borrowed Channels — Acciones Fase 1

**Colegios de abogados (prioridad alta):**
- Il·lustre Col·legi d'Advocats de Girona (ICAG) — contactar sección derecho civil
- Col·legi d'Advocats de Barcelona (ICAB) — sección derecho de sucesiones
- Consell de Col·legis d'Advocats de Catalunya
- Propuesta: ponencia gratuita sobre "Digitalización del expediente sucesorio" o inclusión en boletín

**Asociaciones profesionales:**
- Asociación Catalana de Especialistas en Derecho de Sucesiones
- Col·legi de Notaris de Catalunya
- Asociación Española de Asesores Fiscales (AEDAF) — delegación Catalunya

**Podcasts jurídicos (identificar y contactar):**
- Iuris&Lex (La Vanguardia)
- Podcasts de colegios de abogados
- Canales YouTube de formación jurídica

**Influencers/referentes del sector:**
- Catedráticos de derecho de sucesiones en universidades catalanas
- Socios de referencia en despachos no competidores
- Bloggers jurídicos con audiencia en derecho civil catalán

**Template de contacto inicial:**
```
Asunto: Recurso gratuito para profesionales de derecho sucesorio en Cataluña

Hola [nombre],

Soy [nombre] del equipo de Ulpiano. Hemos creado un recurso gratuito para
profesionales que gestionan herencias en Cataluña: una checklist de 47 puntos
de control del expediente sucesorio, con referencias al CCCat y la Llei 19/2010.

[Enlace]

Creo que podría ser útil para [los miembros de tu colegio / tu audiencia / tus lectores].

¿Te parece interesante compartirlo o hablamos de cómo podríamos colaborar?

Un saludo,
[nombre]
```

---

## Fase 2: Alpha Launch (Semanas 5–8)

### Acciones

1. **Reclutar 10–15 despachos** en Girona para prueba gratuita
   - Criterio: 2–10 personas, mínimo 20 expedientes/año
   - Canal: contacto directo, red personal, ICAG
   - Oferta: acceso gratuito durante 3 meses + onboarding 1-a-1

2. **Onboarding personalizado** (30 min por despacho)
   - Seguir script de demo del product-marketing-context
   - Apertura: preguntar cómo gestionan actualmente
   - Demo sobre plataforma real con caso sector
   - Cierre: qué parte es más relevante para su día a día

3. **Feedback estructurado**
   - Encuesta al final de cada onboarding (5 preguntas)
   - Seguimiento semanal durante 4 semanas
   - Preguntas clave: qué funciona, qué falta, qué confunde, qué pagarían

4. **Goal:** 3–5 testimonios usables y NPS > 50

---

## Fase 3: Beta Launch (Semanas 9–14)

### Acciones

1. Abrir a 50–100 usuarios bajo etiqueta "Beta"
2. Publicar primeros casos de éxito en web y LinkedIn
3. Crear sección `/casos` con datos reales
4. Campaña de email a lista de leads de la checklist
5. Primer webinar: "La gestión sucesoria digital"

### Webinar — Plan

- **Título:** "Del expediente manual al cuaderno particional automatizado"
- **Duración:** 30–45 min + 15 min Q&A
- **Estructura:**
  1. El estado actual: cómo se gestionan herencias hoy (5 min)
  2. Los 3 problemas: ineficiencia, riesgo, opacidad (10 min)
  3. Demo en vivo de Ulpiano (15 min)
  4. Resultados: datos de los alpha users (5 min)
  5. Q&A (15 min)
- **Distribución:** email, LinkedIn, co-promoción con colegios
- **Objetivo:** 100 registrados, 50 asistentes, 10 solicitudes de demo

---

## Fase 4: Early Access (Semanas 15–20)

1. Activar freemium (1 usuario, 1 expediente/año)
2. Publicar página de `/precios` definitiva
3. Campaña de email segmentada por perfil
4. Retargeting LinkedIn a visitantes web
5. Iniciar SEO con artículos preparados en fase 1
6. Evaluar Google Ads para keywords transaccionales

---

## Fase 5: Full Launch (Semanas 21–24)

1. Anuncio GA en todos los canales
2. Activar cobro planes Básico y Esencial
3. Press release a medios jurídicos: Economist & Jurist, Confilegal, La Ley
4. Evaluar Product Hunt (backlinks, no conversión directa)
5. Publicar en directorios legales españoles

---

## Métricas por Fase

| Fase | KPI | Objetivo |
|------|-----|----------|
| Pre-lanzamiento | Leads vía checklist | 200 en 4 semanas |
| Pre-lanzamiento | Tasa apertura emails | > 40% |
| Alpha | NPS early users | > 50 |
| Alpha | Expedientes procesados | 30+ |
| Beta | Conversión lead → beta | 15–20% |
| Beta | Testimonios | 8–10 |
| Early Access | Activaciones freemium | 100+ |
| Early Access | Freemium → pago | 5–8% |
| Full Launch | MRR | Tracking activo |
| Full Launch | CAC | < 200 € |
