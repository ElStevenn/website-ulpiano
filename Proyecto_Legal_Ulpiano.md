# Proyecto Legal — Ulpiano

> Mapa maestro de contratos, documentos legales y tareas pendientes para el go-to-market de Ulpiano.
> Última actualización: 2026-04-26.
> Owner: Miquel Fàbrega.

---

## Índice

1. [Información técnica y societaria de Ulpiano (input transversal)](#1-información-técnica-y-societaria-de-ulpiano-input-transversal)
2. [Capa 1 — Cliente SaaS (bloqueantes para facturar)](#2-capa-1--cliente-saas-bloqueantes-para-facturar)
3. [Capa 2 — Legales web (LSSI + RGPD)](#3-capa-2--legales-web-lssi--rgpd)
4. [Capa 3 — Específica legal-tech](#4-capa-3--específica-legal-tech)
5. [Capa 4 — Back-Office (reventa B2B)](#5-capa-4--back-office-reventa-b2b)
6. [Capa 5 — Operativa interna y proveedores](#6-capa-5--operativa-interna-y-proveedores)
7. [Capa 6 — Compliance escalable (futuro)](#7-capa-6--compliance-escalable-futuro)
8. [Roadmap de ejecución](#8-roadmap-de-ejecución)
9. [Lista maestra de tareas pendientes](#9-lista-maestra-de-tareas-pendientes)

---

## 1. Información técnica y societaria de Ulpiano (input transversal)

> Esta sección es **input compartido** para cualquier abogado que redacte cualquiera de los contratos. Mantener actualizada y enviar como anexo informativo en todo encargo legal.

### 1.1 Sociedad firmante (Ulpiano)

- **Denominación social:** [PENDIENTE — confirmar nombre exacto y forma jurídica, presumiblemente S.L.]
- **CIF:** [PENDIENTE]
- **Domicilio social:** [PENDIENTE — Girona]
- **Datos registrales (Registro Mercantil):** [PENDIENTE]
- **Estructura de socios y % de participación:** [PENDIENTE]
- **Pacto de socios:** [PENDIENTE — confirmar si existe documento firmado]
- **Apoderado para firmar:** Miquel Fàbrega [PENDIENTE — confirmar título y alcance del poder]
- **Marca registrada "Ulpiano":** [PENDIENTE — estado del registro OEPM/EUIPO]
- **Dominio principal:** [PENDIENTE — confirmar URL definitiva]

⚠️ **Bloqueante crítico**: si la sociedad no está constituida en el momento de la primera firma, no se puede contratar como persona jurídica. Resolver antes de cerrar primer cliente.

### 1.2 Persona física relevante (Miquel Fàbrega)

- Abogado colegiado ICAGI nº 3861.
- Ejerce la abogacía a través de **Fàbrega Legal** (despacho propio), **NO** a través de Ulpiano S.L.
- La colegiación es de la persona física, no de la sociedad mercantil.
- En Ulpiano S.L. actúa como fundador, administrador y/o apoderado mercantil, no como abogado.

### 1.3 Forma jurídica habitual del cliente (despacho)

- SLP (Sociedad Limitada Profesional).
- Sociedad Civil Profesional.
- Comunidad de Bienes.
- Abogado individual (persona física).
- Notarías (sociedades profesionales notariales o notario individual).
- Asesorías fiscales/gestorías (S.L. mercantil habitual).

Los contratos deben contemplar las distintas formas y la posibilidad de firma electrónica con representante.

### 1.4 Infraestructura técnica (input para Anexos RGPD y AUP)

A completar literalmente para identificar subencargados de tratamiento bajo Art. 28 RGPD:

- **Cloud provider y región:** [PENDIENTE — p.ej. AWS Frankfurt, Azure West Europe, GCP europe-west1]
- **Proveedor de IA (extracción y comprensión documental):** [PENDIENTE — p.ej. Anthropic, OpenAI, modelo on-premise] y región de procesamiento.
- **Pasarela de pago:** [PENDIENTE — Stripe, Redsys]
- **CRM y herramientas de soporte que toquen datos del cliente final:** HubSpot [confirmar configuración EU], [otros pendientes — Intercom, etc.]
- **Email transaccional:** [PENDIENTE — SendGrid, Postmark, etc.]
- **Herramientas de monitorización y analytics:** [PENDIENTE — Datadog, Sentry, GA4, etc.]
- **Almacenamiento documental:** [PENDIENTE — S3, Drive, etc.]
- **Backups:** ubicación y retención [PENDIENTE]
- **¿Hay transferencias fuera del EEE?** [PENDIENTE]. Si sí, mecanismo de adecuación (cláusulas contractuales tipo de la Comisión, decisión de adecuación, etc.).
- **Certificaciones disponibles:** ISO 27001 / SOC 2 — [PENDIENTE — calendario de obtención]

### 1.5 Régimen fiscal de Ulpiano

- **Régimen IVA:** General (21%, B2B nacional).
- **Sin retenciones aplicables** en facturación al despacho.
- **Operativa de facturación:**
  - SaaS: Ulpiano factura al despacho directamente.
  - Back-Office: Ulpiano factura al despacho; el despacho factura al cliente final por separado y con su propia marca.
  - Add-ons (aplazamiento, pensiones): Ulpiano factura al despacho.

### 1.6 Producto y modelo de negocio (resumen)

Ulpiano es una plataforma SaaS B2B de planificación y gestión sucesoria integral. Cubre tres dimensiones hoy fragmentadas en el mercado: jurídica (cálculo automático de legítimas y cuotas hereditarias según Codi Civil de Catalunya), fiscal (motor ISD con reducciones, bonificaciones y generación de modelos AEAT 660/650/651/652/S05), y operativa (gestión documental del expediente).

**Tres líneas de negocio:**

1. **Suscripción SaaS** — flat mensual/anual por tier (Free / Esencial 199€ / Avanzado 449€ / Pro 999€ / Enterprise a medida).
2. **Plataforma transaccional** — variable post-cuota por modelo generado y bien declarado.
3. **Ulpiano Back-Office** — servicio digitalizado de tramitación outsourceado al despacho (Básico 350€ / Completo 595€ / Complejo 950€ mayorista, más comisión sobre caudal).

**Mercado primario:** Cataluña (derecho civil foral), con expansión nacional planificada. **Idiomas operativos:** catalán, español, francés, inglés.

**Tracción a la firma del primer contrato:** pre-revenue. Oferta Early Adopter en preparación: descuento –25% lifetime para los primeros 20 paying customers hasta 31 de diciembre de 2026.

### 1.7 Posición frente al RD 135/2021 (Estatuto General de la Abogacía)

> Texto de referencia común a varios contratos. Replicar/referenciar literalmente cuando aplique.

1. Ulpiano S.L. es una sociedad mercantil que presta **servicios técnicos y administrativos instrumentales** al ejercicio de la abogacía por terceros (los despachos clientes).
2. Ulpiano **no presta asesoramiento jurídico** ni al despacho ni al cliente final del despacho.
3. Ulpiano **no firma documentos sustantivos** en nombre del cliente final (cuaderno particional, escritos procesales, etc.). Esos documentos los firma siempre el abogado del despacho.
4. La presentación de modelos AEAT por parte de Ulpiano lo es como **presentador material en el sentido del Art. 92.2 LGT**, no como sustituto legal del contribuyente.
5. La colegiación personal de Miquel Fàbrega (ICAGI 3861) es de la persona física, no de la sociedad. Miquel ejerce la abogacía a través de Fàbrega Legal, no de Ulpiano S.L.
6. El despacho cliente conserva en todo momento la **dirección técnica del expediente** y la **responsabilidad civil profesional** frente al cliente final.

---

## 2. Capa 1 — Cliente SaaS (bloqueantes para facturar)

### 2.1 Términos y Condiciones / Acuerdo Marco SaaS

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Definiciones y alcance del Servicio (plataforma SaaS Ulpiano, sin Back-Office).
- Concesión de licencia: no exclusiva, no transferible, intransferible, limitada al plan contratado.
- Cuentas de usuario, roles, MFA obligatorio, responsabilidad del cliente sobre credenciales.
- Restricciones de uso (no reverse engineering, no sublicenciar, no competencia derivativa).
- Propiedad intelectual: Ulpiano conserva el software; el cliente conserva sus datos y los outputs (cuadernos, modelos, etc.).
- Datos del cliente: tratamiento por encargo, ver DPA referenciado.
- Disponibilidad y soporte: remite a SLA (anexo).
- Pricing y facturación: remite a Order Form. Renovación automática salvo denuncia con preaviso.
- Modificaciones del servicio: derecho de Ulpiano a evolucionar la plataforma; obligación de no degradación material sin alternativa.
- Limitación de responsabilidad: cap a 12 meses de fees pagados; excepciones por dolo, culpa grave, brechas RGPD imputables.
- Indemnidad: cliente indemniza por uso incorrecto / contenido infractor; Ulpiano indemniza por reclamaciones IP de terceros sobre el software.
- Plazo y terminación: igual mecánica que back-office (12 meses + prórroga + 60 días preaviso).
- Confidencialidad bilateral 5 años post-terminación.
- Cesión: cliente no cede; Ulpiano sí en M&A con notificación.
- Fuerza mayor.
- Ley española, jurisdicción Girona, idioma castellano.
- **Cláusulas embebidas obligatorias** (ver Capa 3): disclaimer "no asesoramiento jurídico", secreto profesional reforzado, titularidad de outputs, uso de IA.

**Contexto a pasar al abogado:**

- Sección 1 completa de este documento (datos societarios + producto + RD 135/2021).
- Pricing sheet y descripción funcional del SaaS (tiers, features por tier).
- Diferencias esenciales con el contrato Back-Office (este NO regula reventa ni servicio outsourceado).
- Si hay free trial / freemium: regla de conversión, datos durante trial, eliminación.

**Tareas pendientes:**

- [ ] Decidir formato: T&C click-through online vs. contrato firmado.
- [ ] Definir cap exacto de responsabilidad (recomendado: 12 meses de cuotas).
- [ ] Definir cláusula de modificación unilateral del servicio (con preaviso de qué).
- [ ] Resolver si Order Form va embebido o separado (recomendado: separado).

---

### 2.2 Order Form / Hoja de Suscripción

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Documento corto (1-2 páginas) que concrete por cliente: plan contratado, precio, plazo, fecha de inicio, descuentos aplicables (Early Adopter), método de pago, persona facturable, contacto técnico, contacto administrativo.
- Referencia expresa a los T&C SaaS aplicables (versión vigente al momento de la firma).
- Renovación automática salvo denuncia.

**Contexto a pasar al abogado:**

- Pricing sheet vigente.
- Política Early Adopter (descuento –25% lifetime, primeros 20 paying customers hasta 31-12-2026, condiciones de pérdida del descuento).
- Lista de planes disponibles y add-ons.

**Tareas pendientes:**

- [ ] Decidir si Order Form se firma o se confirma vía email/click-through.
- [ ] Plantilla maestra editable.

---

### 2.3 DPA — Acuerdo de Encargado de Tratamiento (Art. 28 RGPD)

**Estado:** [PENDIENTE]. **Prioridad máxima — bloqueante de venta.**

**Brief al abogado — qué debe cubrir:**

- Identificación de partes: cliente = responsable; Ulpiano = encargado.
- Objeto, naturaleza, duración del tratamiento.
- Categorías de datos:
  - Identificativos (causante, herederos, legatarios, terceros declarantes, profesionales del despacho).
  - Económicos y patrimoniales.
  - Familiares (parentesco, orden sucesorio, situaciones de discapacidad para bonificaciones).
  - **Categorías especiales** (Art. 9 RGPD): salud, cuando aplique para bonificaciones por discapacidad o pensiones.
  - Datos de personas fallecidas: tratamiento bajo art. 3 LOPDGDD (no aplica RGPD a fallecidos directamente, pero sí a herederos vivos y terceros relacionados).
- Categorías de interesados.
- Finalidades estrictas a la prestación del servicio.
- Subencargados autorizados (lista nominal según Sección 1.4). Notificación previa de cambios y derecho de oposición motivada.
- Medidas técnicas y organizativas (cifrado en tránsito y reposo, MFA, logs, segregación de roles, gestión de claves).
- Notificación de brechas: ≤24h desde detección.
- Derechos de los interesados: protocolo para gestionarlos (la responsabilidad es del cliente; Ulpiano da soporte).
- Devolución y supresión al término del contrato.
- Auditoría: el cliente puede auditar (con preaviso, a su coste) o aceptar la auditoría externa que Ulpiano realice (ISO 27001 / SOC 2 cuando estén disponibles).
- Transferencias internacionales: si las hay, mecanismos del Cap. V RGPD (SCCs, TIA).
- Cláusula sobre datos de salud y otros sensibles: medidas reforzadas, base de licitud responsabilidad del cliente.

**Contexto a pasar al abogado:**

- Sección 1.4 completa (infraestructura técnica).
- Lista actualizada de subencargados.
- Diagrama de flujos de datos (de dónde vienen, dónde se almacenan, cuánto tiempo, quién accede).
- Política de seguridad interna (si existe).

**Tareas pendientes:**

- [ ] Consolidar lista definitiva de subencargados.
- [ ] Cerrar ubicaciones de procesamiento (UE/EEE).
- [ ] Documentar medidas técnicas y organizativas (preparar one-pager).
- [ ] Decidir si DPA es anexo del T&C o documento autónomo (recomendado: autónomo, referenciado).
- [ ] Plantilla EU SCCs si se confirma transferencia internacional.

---

### 2.4 SLA — Acuerdo de Nivel de Servicio

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Disponibilidad mensual comprometida (recomendación inicial: 99,5%).
- Definición de "downtime" (excluye mantenimiento programado, fuerza mayor, problemas del cliente).
- Ventanas de mantenimiento programado y preaviso.
- RPO / RTO (Recovery Point Objective / Recovery Time Objective) para incidentes graves.
- Tiempos de respuesta de soporte por tier (Free / Esencial / Avanzado / Pro / Enterprise).
- Canales oficiales de soporte (email + chat in-app). WhatsApp y similares no son canal oficial.
- Créditos por incumplimiento: porcentaje de fee mensual aplicable como crédito en próxima factura.
- Causas de exclusión.

**Contexto a pasar al abogado:**

- Arquitectura técnica (sec. 1.4).
- Compromiso operativo realista (qué horario cubre soporte, ventana de mantenimiento típica).
- Capacidad actual de respuesta a incidentes (equipo, herramientas).

**Tareas pendientes:**

- [ ] Definir disponibilidad por tier (¿el mismo SLA para todos o escalado?).
- [ ] Definir cuadro de respuesta soporte por tier.
- [ ] Decidir si SLA se publica o solo se comparte bajo NDA.

---

### 2.5 AUP — Política de Uso Aceptable

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Usos prohibidos: ingeniería inversa, scraping de la plataforma, uso para fines fraudulentos, blanqueo de capitales, evasión fiscal, datos manifiestamente ilícitos.
- Prohibición de uso por terceros no autorizados (sublicenciar).
- Prohibición de incorporar contenido infractor de derechos de terceros.
- Obligación de mantener credenciales seguras.
- Consecuencias del incumplimiento: suspensión inmediata, terminación, retención de datos para preservación de evidencia.

**Contexto a pasar al abogado:**

- Vertical legal-tech: especificidades del sector.
- Datos sensibles que se procesan.
- Casos de uso esperados vs. prohibidos.

**Tareas pendientes:**

- [ ] Borrador inicial.
- [ ] Decidir si va embebida en T&C o documento separado (recomendado: separado para poder actualizarla unilateralmente con preaviso).

---

## 3. Capa 2 — Legales web (LSSI + RGPD)

### 3.1 Aviso Legal

**Estado:** [PENDIENTE]. **Obligatorio por LSSI Art. 10.**

**Brief al abogado — qué debe cubrir:**

- Identificación de Ulpiano S.L.: denominación, CIF, domicilio, datos registrales, email de contacto.
- Si aplica: nº de colegiado de Miquel + colegio profesional. **Pero precaución:** la sociedad no es despacho y Miquel no ejerce vía Ulpiano. Comunicar con el abogado para evitar que el aviso legal genere apariencia de prestación de servicios jurídicos por parte de Ulpiano.
- Términos de uso del sitio web (acceso, prohibiciones).
- Propiedad intelectual del sitio.
- Limitación de responsabilidad sobre el contenido informativo de la web.
- Enlaces a terceros.
- Ley aplicable y jurisdicción.

**Contexto a pasar al abogado:**

- Datos societarios completos (sec. 1.1).
- Posición frente a RD 135/2021 (sec. 1.7) — crítico para evitar que el aviso legal sugiera que Ulpiano presta servicios reservados a abogados.

**Tareas pendientes:**

- [ ] Completar datos societarios.
- [ ] Decidir lenguaje (catalán / castellano / ambos).

---

### 3.2 Política de Privacidad (web)

**Estado:** [PENDIENTE]. **Obligatorio por RGPD Arts. 13/14.**

**Brief al abogado — qué debe cubrir:**

- Tratamientos asociados al sitio web (formularios de contacto, registro a newsletter, demo request, acceso área cliente).
- Distinta de la privacidad del SaaS (que se rige por DPA y se trata como encargo).
- Bases de licitud (consentimiento, interés legítimo en marketing B2B, ejecución contractual).
- Derechos del interesado y cómo ejercerlos (DPO o canal de contacto).
- Plazos de conservación.
- Cesiones a terceros (HubSpot, herramientas analytics).
- Transferencias internacionales si las hay.

**Contexto a pasar al abogado:**

- Lista de formularios y datos que recoge la web.
- Herramientas que reciben datos (HubSpot, GA4, etc.).
- Si hay newsletter / contenidos cerrados.

**Tareas pendientes:**

- [ ] Inventariar formularios y herramientas que toquen datos web.
- [ ] Designar DPO o, en su defecto, contacto RGPD.

---

### 3.3 Política de Cookies

**Estado:** [PENDIENTE]. **Conforme Guía AEPD vigente.**

**Brief al abogado — qué debe cubrir:**

- Listado de cookies (técnicas, analíticas, publicitarias, de personalización).
- Bases de licitud (consentimiento explícito para no técnicas).
- Mecanismo de consentimiento granular (banner con rechazo al mismo nivel que aceptación).
- Procedimiento de revocación.

**Contexto a pasar al abogado:**

- Listado real de cookies en uso (auditar con herramienta).
- CMP elegida (cookiebot, OneTrust, propio).

**Tareas pendientes:**

- [ ] Auditar cookies actuales.
- [ ] Implementar CMP que permita rechazo simétrico.

---

### 3.4 Términos de Uso de la Web

**Estado:** [PENDIENTE — si hay registro o áreas restringidas].

**Brief al abogado — qué debe cubrir:**

- Si hay área cliente o registro público (demo, prueba): condiciones de acceso, edad mínima, veracidad de los datos, suspensión de cuentas.

**Contexto a pasar al abogado:**

- Si hay self-serve o solo demo programada.

**Tareas pendientes:**

- [ ] Decidir si hay registro público en web (vs. solo demo asistida).

---

## 4. Capa 3 — Específica legal-tech

> Estas cláusulas/documentos son distintivos del vertical y mitigan los principales riesgos del modelo: cobertura RC, deontología, IP de outputs y uso de IA. Pueden ir embebidas en el T&C SaaS, en el contrato Back-Office y/o como documentos independientes públicos.

### 4.1 Disclaimer "no asesoramiento jurídico"

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Cláusula expresa que declare:
  - Ulpiano es herramienta tecnológica, no presta asesoramiento jurídico.
  - El criterio jurídico aplicable a cada expediente es del profesional usuario.
  - Los outputs generados (cuadernos, escritos, modelos) son borradores que requieren revisión y firma del profesional.
  - Ulpiano no responde por decisiones jurídicas adoptadas por el usuario sobre la base de outputs.

**Contexto a pasar al abogado:**

- Sec. 1.7 íntegra (RD 135/2021).
- Lista de funcionalidades que generan outputs (motor legítimas, motor ISD, generador documental, IA documental).

**Tareas pendientes:**

- [ ] Decidir si va embebida en T&C, en footer de outputs, en ambos.
- [ ] Versión visible en producto (pop-up al exportar, watermark en borradores).

---

### 4.2 Cláusula de secreto profesional reforzado

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Reconocimiento expreso del **Art. 542.3 LOPJ** y del Código Deontológico de la Abogacía.
- Compromiso de Ulpiano de:
  - Mantener confidencialidad reforzada sobre contenido del expediente.
  - No usar el contenido para entrenamiento de modelos sin consentimiento expreso.
  - Restringir el acceso interno de Ulpiano al mínimo imprescindible para soporte/operación.
  - Cooperar con el despacho ante requerimientos judiciales/administrativos sobre datos del expediente.

**Contexto a pasar al abogado:**

- Sec. 1.4 (quién tiene acceso técnico y cómo está controlado).
- Política de acceso interno (si está documentada).

**Tareas pendientes:**

- [ ] Documentar política de acceso interno.
- [ ] Embeber cláusula en T&C SaaS y en contrato Back-Office.

---

### 4.3 Cláusula de titularidad del contenido

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Documentos generados por la plataforma (cuaderno particional, modelos AEAT, escritos, anexos) son **propiedad del cliente** (despacho) o del cliente final del despacho.
- Ulpiano conserva la titularidad del software, los algoritmos, las plantillas y la metodología.
- Ulpiano puede usar datos agregados y anonimizados para mejora del producto, salvo opt-out expreso del cliente.

**Contexto a pasar al abogado:**

- Lista de outputs.
- Política de datos agregados / anonimizados.

**Tareas pendientes:**

- [ ] Decidir si se ofrece opt-out de uso anonimizado.
- [ ] Embeber en T&C SaaS y en contrato Back-Office.

---

### 4.4 Cláusula de uso de IA

**Estado:** [PENDIENTE]. **Crítica si se usan modelos generativos (Anthropic, OpenAI, etc.).**

**Brief al abogado — qué debe cubrir:**

- Transparencia sobre el uso de IA (qué hace cada modelo, qué no).
- Compromiso de Ulpiano de exigir a los proveedores de IA opt-out de entrenamiento con los datos del cliente (sin "zero data retention" si así se ha negociado con el proveedor — documentarlo).
- Limitaciones declaradas: la IA puede producir errores, los outputs son borradores.
- Trazabilidad: qué prompts/inputs alimentan a la IA, conservación de logs.
- Compatibilidad con AI Act europeo (preparar para clasificación de uso, documentación técnica).

**Contexto a pasar al abogado:**

- Lista de modelos IA usados, proveedor, ubicación, propósito.
- Configuración de retention con cada proveedor.
- Si se usa IA generativa para outputs sustantivos vs. solo extracción/clasificación.

**Tareas pendientes:**

- [ ] Inventariar usos de IA en el producto.
- [ ] Confirmar contractualmente "no training" con cada proveedor.
- [ ] Preparar mapeo de cumplimiento AI Act (alto riesgo / propósito general / etc.).
- [ ] Embeber cláusula en T&C SaaS, DPA y Back-Office.

---

### 4.5 Lista pública de subencargados (Subprocessor List)

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Documento público (URL fija) actualizado con: nombre del subencargado, finalidad, ubicación, certificaciones.
- Mecanismo de notificación a clientes ante alta de nuevo subencargado (preaviso 30 días).
- Derecho de oposición motivada del cliente.

**Contexto a pasar al abogado:**

- Lista actualizada (sec. 1.4).

**Tareas pendientes:**

- [ ] Crear página pública con la lista.
- [ ] Sistema de suscripción para notificación de cambios.

---

## 5. Capa 4 — Back-Office (reventa B2B)

### 5.1 Contrato Marco Back-Office

**Estado:** Brief redactado y enviado al abogado mercantil/tech. **Pendiente borrador 1.**

> El brief íntegro entregado al abogado está reproducido a continuación.

#### Brief Legal — Ulpiano Back-Office Contrato Marco

**Para:** abogado mercantil/tech encargado de redactar el contrato marco entre Ulpiano y los despachos profesionales.
**De:** Miquel Fàbrega, fundador de Ulpiano.
**Fecha:** abril 2026.
**Objeto:** producir un contrato marco firmable que regule la prestación del servicio Ulpiano Back-Office a despachos de abogados, asesorías fiscales y notarías, en modelo de reventa B2B.
**Adjuntos:** `Ulpiano_Pricing_Packaging_v1.docx` (fuente económica completa), `Wiki Ulpinao.docx` (descripción técnica del producto).

##### 1. Resumen del producto y modelo de negocio

Ulpiano es una plataforma SaaS B2B de planificación y gestión sucesoria integral. Cubre tres dimensiones que hoy están fragmentadas en el mercado: jurídica (cálculo automático de legítimas y cuotas hereditarias según Codi Civil de Catalunya), fiscal (motor ISD con reducciones, bonificaciones y generación de modelos AEAT 660/650/651/652/S05), y operativa (gestión documental del expediente sucesorio).

El modelo de negocio combina tres líneas:

1. Suscripción SaaS — flat mensual/anual por tier (Free / Esencial 199€ / Avanzado 449€ / Pro 999€ / Enterprise a medida).
2. Plataforma transaccional — variable post-cuota por modelo generado y bien declarado.
3. Ulpiano Back-Office — servicio digitalizado de tramitación outsourceado al despacho, en tres paquetes (Básico 350€ / Completo 595€ / Complejo 950€ mayorista, con PVP sugerido al cliente final 850€ / 1.150€ / 1.750€), más comisión sobre caudal hereditario neto.

Este contrato marco regula exclusivamente la línea 3 (Ulpiano Back-Office). El SaaS se rige por contrato independiente.

Mercado primario: Cataluña (derecho civil foral), con expansión nacional planificada. Idiomas operativos: catalán, español, francés, inglés.

Tracción a la firma del primer contrato: pre-revenue (0 pagantes confirmados a fecha del brief). Hay oferta de Early Adopter en preparación: descuento –25% lifetime para los primeros 20 paying customers hasta 31 de diciembre de 2026.

##### 2. Datos societarios y técnicos

Los siguientes datos son input necesario y deben completarse antes de redactar el contrato. Marcados con [PENDIENTE] cuando el dato aún no está consolidado a fecha de este brief.

###### 2.1 Sociedad firmante (Ulpiano)

- Denominación social: [PENDIENTE — confirmar nombre exacto y forma jurídica, presumiblemente S.L.]
- CIF: [PENDIENTE]
- Domicilio social: [PENDIENTE — Girona]
- Datos registrales (Registro Mercantil): [PENDIENTE]
- Estructura de socios y % de participación: [PENDIENTE]
- Pacto de socios: [PENDIENTE — confirmar si existe documento firmado]
- Apoderado para firmar: Miquel Fàbrega [PENDIENTE — confirmar título y alcance del poder]

⚠️ Si la sociedad no está constituida a la firma del primer contrato, esto es bloqueante crítico. La parte contractual debe ser persona jurídica, no persona física.

###### 2.2 Sociedad firmante (Despacho — modelo de cliente)

Forma jurídica habitual del cliente: SLP (Sociedad Limitada Profesional), Sociedad Civil Profesional, Comunidad de Bienes, abogado individual. El contrato debe contemplar las cuatro formas. Tamaño objetivo: 2-15 abogados, volumen estimado 20-100 expedientes sucesorios anuales.

###### 2.3 Infraestructura técnica (input para Anexo RGPD)

A completar literalmente para identificar subencargados de tratamiento bajo Art. 28 RGPD:

- Cloud provider y región: [PENDIENTE — p.ej. AWS Frankfurt, Azure West Europe, GCP europe-west1]
- Proveedor de IA (extracción y comprensión documental): [PENDIENTE — p.ej. Anthropic, OpenAI, modelo en-premise] y región de procesamiento.
- Pasarela de pago: [PENDIENTE — Stripe, Redsys]
- CRM y herramientas de soporte que toquen datos del cliente final: [PENDIENTE — HubSpot, Intercom, etc.]
- Herramientas de monitorización y analytics: [PENDIENTE]
- ¿Hay transferencias fuera del EEE? [PENDIENTE — sí/no]. Si sí, mecanismo de adecuación (cláusulas contractuales tipo de la Comisión, decisión de adecuación, etc.).

###### 2.4 Régimen fiscal de Ulpiano

- Régimen IVA: General (21%, B2B nacional).
- Sin retenciones aplicables en facturación al despacho.
- Operativa: Ulpiano factura al despacho; el despacho factura al cliente final por separado y con su propia marca.

##### 3. Posición frente al RD 135/2021 (Estatuto General de la Abogacía)

Es el punto más sensible del contrato. El Real Decreto 135/2021 reserva el ejercicio de la abogacía a profesionales colegiados, lo que limita lo que una sociedad mercantil no profesional puede hacer en el entorno jurídico. La posición que debe quedar explícita y reforzada en el contrato es:

1. Ulpiano S.L. es una sociedad mercantil que presta servicios técnicos y administrativos instrumentales al ejercicio de la abogacía por terceros (los despachos clientes).
2. Ulpiano no presta asesoramiento jurídico ni al despacho ni al cliente final del despacho.
3. Ulpiano no firma documentos sustantivos en nombre del cliente final (cuaderno particional, escritos procesales, etc.). Esos documentos los firma siempre el abogado del despacho.
4. La presentación de modelos AEAT por parte de Ulpiano lo es como presentador material en el sentido del Art. 92.2 LGT, no como sustituto legal del contribuyente.
5. La colegiación personal de Miquel Fàbrega (ICAGI 3861) es de la persona física, no de la sociedad. Miquel ejerce la abogacía a través de Fàbrega Legal (su propio despacho), no a través de Ulpiano S.L.
6. El despacho cliente conserva en todo momento la dirección técnica del expediente y la responsabilidad civil profesional frente al cliente final.

Recomendación: incluir esta posición como cláusula expresa en el cuerpo del contrato (no solo en exposición de motivos), redactada con el rigor suficiente para ser oponible en una eventual inspección colegial al despacho cliente.

##### 4. Especificaciones del contrato

###### 4.1 Naturaleza

Contrato mixto B2B de (a) prestación de servicios técnicos y (b) reventa con marca propia del despacho. No es franquicia, no es agencia comercial regulada, no es asesoramiento jurídico.

###### 4.2 Partes

Ulpiano S.L. (proveedor) y Despacho (cliente y reseller). Ulpiano no mantiene relación contractual con el cliente final (heredero/contribuyente). Toda relación con el heredero es del despacho.

###### 4.3 Objeto

Sí presta Ulpiano:

- Acceso a la plataforma SaaS según contrato SaaS independiente.
- Servicios Back-Office en los tres paquetes (Básico/Completo/Complejo) conforme al Anexo I.
- Generación automatizada de borradores documentales.
- Presentación efectiva de modelos AEAT (660, 650, 651, 652, S05) en sede electrónica como presentador material.
- Tramitación de inscripción registral según paquete contratado.
- Add-ons separados: aplazamiento de deuda tributaria (Anexo III) y pensiones de viudedad/orfandad (Anexo IV).

No presta Ulpiano (cláusula expresa):

- Asesoramiento jurídico al cliente final ni al despacho.
- Defensa procesal.
- Trámites presenciales notariales (declaración de herederos y aceptación de herencia ante notario son del abogado del despacho).
- Decisión sobre criterio jurídico del expediente.
- Firma del cuaderno particional o cualquier documento sustantivo en nombre del cliente final.

###### 4.4 Estructura económica

Tarifas mayoristas Ulpiano → Despacho según Anexo I (extracto resumido más abajo, detalle completo en `Ulpiano_Pricing_Packaging_v1.docx`):

| Paquete | Mayorista (Ulpiano→Despacho) | PVP sugerido (Despacho→Cliente) |
|---|---|---|
| Básico | 350€ + IVA | 850€ |
| Completo | 595€ + IVA | 1.150€ |
| Complejo | 950€ + IVA | 1.750€ |

Comisión Ulpiano sobre caudal hereditario neto, sin caps (Anexo II):

| Paquete | Comisión Ulpiano sobre caudal |
|---|---|
| Básico | 1,75% |
| Completo | 1,225% |
| Complejo | 0,7% |

Devengo: cierre del expediente Back-Office (definido como presentación del último modelo AEAT incluido en el paquete).

**Cláusula crítica — definición del caudal computable.** Redacción literal sugerida:

> El caudal hereditario neto a efectos de comisión Ulpiano será el caudal hereditario neto declarado por el Despacho en el Modelo 660 presentado en nombre del causante. En caso de discrepancia entre la cifra registrada en plataforma al cierre del expediente y la cifra del Modelo 660 efectivamente presentado, prevalecerá la del Modelo 660. El Despacho autoriza expresamente a Ulpiano a verificar dicha cifra mediante consulta cruzada con la presentación AEAT.

Esta cláusula es la pieza central del modelo económico (Opción B). Resuelve el riesgo "el despacho infla u omite bienes para reducir comisión" sin generar trabajo adicional, porque la verdad de referencia es un documento que el despacho ya presenta a Hacienda.

Add-ons separados: Aplazamiento (120€ simple / 350€ + 1% sobre cuantía con garantía + 0,5% éxito) y Pensiones (200€ simple / 280€ compleja por pensión). Detalle Anexos III y IV.

Variable SaaS post-cuota: los modelos generados por el despacho fuera del servicio Back-Office (autoservicio en plataforma) se rigen por el contrato SaaS independiente y no devengan comisión sobre caudal. Importante separar la economía: 30€/modelo cuando lo presenta Ulpiano (Back-Office) vs. 15€/9€/5€/modelo cuando lo presenta el despacho desde plataforma (variable SaaS).

Facturación:

- Periodicidad mensual; factura emitida el día 1 del mes siguiente al cierre del expediente.
- Plazo de pago: 30 días desde fecha factura.
- Recargo por mora: el legalmente aplicable (Ley 3/2004 de morosidad, ~12,5% anual a la fecha del brief).
- Domiciliación SEPA preferente.
- IVA 21% sobre todos los conceptos (B2B nacional).

Revisión de tarifas: Ulpiano puede revisar mayoristas y comisiones anualmente con preaviso 60 días. Excepción: clientes con cláusula Early Adopter conservan lock lifetime.

###### 4.5 Operativa y SLA

Matriz de responsabilidades clara — quién hace qué en cada fase:

| Fase | Despacho | Ulpiano |
|---|---|---|
| Captación cliente final | ✓ | — |
| Contrato de honorarios cliente | ✓ | — |
| Apertura expediente en plataforma | ✓ | — |
| Carga inicial documentación | ✓ | — |
| Validación datos del causante | ✓ revisión | ✓ extracción AI |
| Inventario | ✓ revisión | ✓ generación |
| Cálculo legítimas y cuotas | ✓ revisión | ✓ motor determinista |
| Liquidación ISD | ✓ revisión | ✓ motor determinista |
| Borrador cuaderno particional | ✓ revisión y firma | ✓ borrador |
| Firma notarial (declaración herederos / aceptación) | ✓ | NO Ulpiano |
| Presentación AEAT (660/650/651/652/S05) | ✓ autoriza | ✓ presenta |
| Inscripción registral | — | ✓ tramita |
| Comunicación con cliente final | ✓ | — |
| Cobro al cliente final | ✓ | — |

SLA Ulpiano (Anexo V):

- Borradores documentales: 48h hábiles desde solicitud completa.
- Presentación de modelo AEAT: 5 días hábiles desde validación del despacho.
- Trámite inscripción registral: 10 días hábiles desde validación.
- Soporte: por canal definido (email + chat in-app), tiempo de respuesta según tier SaaS.

Penalizaciones SLA: crédito automático sobre próxima factura (5-10% del fee del expediente afectado). No cláusulas penales fuertes en v1.

Comunicación oficial: vía plataforma (audit trail) más email designado del despacho. WhatsApp y similares no son canal oficial.

###### 4.6 Responsabilidad y garantías

Garantía Ulpiano:

- Corrección formal y técnica de los modelos presentados (formato AEAT vigente).
- Trazabilidad completa del expediente (audit log).
- Disponibilidad de plataforma según SLA general SaaS (estándar 99,5% mensual).

Lo que Ulpiano NO garantiza (cláusula explícita):

- Que el criterio jurídico aplicado por el despacho sea correcto.
- Que la AEAT no inicie comprobación, requerimiento o liquidación complementaria.
- Que el cliente final no reclame al despacho.
- Que normativa autonómica posterior no modifique cuotas calculadas en su día.

Limitación de responsabilidad de Ulpiano: cap a 12 meses de mayoristas + comisiones efectivamente cobradas al despacho por el expediente afectado. Excepciones: dolo, culpa grave, brechas de seguridad RGPD imputables a Ulpiano.

Responsabilidad civil profesional: sigue siendo del despacho frente a su cliente final. Cada parte mantiene su propia póliza de RC.

Indemnidad cruzada: cada parte indemniza a la otra por reclamaciones de terceros que deriven exclusivamente de su esfera de responsabilidad.

###### 4.7 Protección de datos (RGPD)

Régimen: Ulpiano actúa como encargado de tratamiento (Art. 28 RGPD). El despacho es el responsable del tratamiento.

Anexo VI obligatorio — Acuerdo de Encargado de Tratamiento, que cubra:

- Categorías de datos (identificativos, económicos, familiares, salud cuando aplique para bonificaciones por discapacidad).
- Categorías de interesados (causante, herederos, legatarios, terceros declarantes).
- Finalidad estricta a la prestación del servicio.
- Subencargados autorizados (lista nominal según punto 2.3 de este brief). Notificación previa de cambios.
- Medidas técnicas y organizativas (cifrado en tránsito y reposo, MFA, logs de acceso, segregación de roles).
- Notificación de brechas: Ulpiano notifica al despacho en ≤24h desde detección.
- Devolución y supresión al término del contrato.
- Auditoría: el despacho puede auditar (con preaviso, a su coste) o aceptar la auditoría externa que Ulpiano realice (ISO 27001 / SOC 2 cuando estén disponibles).

Ubicación del procesamiento: dentro de UE/EEE preferente. Si hay transferencias internacionales, mecanismos del Cap. V RGPD.

Datos sensibles: algunos expedientes manejarán datos de salud (discapacidad para bonificación ISD). Consentimiento explícito gestionado por el despacho; Ulpiano los trata como categoría especial con medidas reforzadas.

Cláusula tipo RGPD para el despacho frente al cliente final: se solicita al abogado redactar también una cláusula tipo que el despacho pueda incorporar en su propio contrato de honorarios con el cliente final, autorizando expresamente la subcontratación de servicios técnicos a Ulpiano y el tratamiento de datos personales con esa finalidad. Sin esta cláusula, el despacho viola RGPD al subir datos a la plataforma de Ulpiano.

###### 4.8 Confidencialidad

NDA bilateral con duración 5 años post-terminación. Excepciones estándar (información ya pública, conocida con anterioridad, recibida lícitamente de tercero, requerida por autoridad competente).

###### 4.9 Marca y reventa

- El despacho factura al cliente final con su propia marca y bajo su propio contrato de honorarios. Ulpiano no aparece en facturación al cliente final salvo decisión expresa del despacho.
- White-label opcional disponible si el despacho contrata Pro o Enterprise SaaS (portal del cliente con marca propia y dominio propio).
- PVP sugerido: Ulpiano publica precios sugeridos como referencia comercial. El despacho fija libremente su precio final al cliente. Ulpiano no exige precios mínimos ni máximos (importante a efectos de defensa de la competencia, Art. 1 LDC).
- Uso de marca Ulpiano: el despacho puede mencionar que utiliza Ulpiano como infraestructura, pero no como producto que vende. Cualquier uso del logo Ulpiano requiere aprobación previa según manual de marca (Anexo VII).

###### 4.10 Deontología profesional

Cláusula expresa de respeto al Estatuto General de la Abogacía y al Código Deontológico de la Abogacía Catalana (CICAC):

- Ulpiano no induce ni facilita captación irregular de clientes.
- Ulpiano no fija ni recomienda al despacho honorarios mínimos al cliente final.
- El despacho mantiene independencia profesional plena en cada expediente.
- Conflicto de intereses: el despacho declara no estar en conflicto al usar Ulpiano para un expediente concreto.

###### 4.11 Plazo y terminación

Plazo inicial: 12 meses, prorrogable automáticamente por periodos anuales salvo denuncia con preaviso 60 días.

Terminación por el despacho sin causa: preaviso 60 días, sin penalización.

Terminación por incumplimiento: preaviso 30 días para subsanar; si no se subsana, terminación inmediata. Aplicable a ambas partes.

Terminación inmediata: insolvencia, concurso, brecha grave de seguridad, infracción deontológica, fraude.

Efectos de la terminación:

- Ulpiano completa expedientes Back-Office en curso al precio vigente, salvo cancelación expresa del despacho.
- Devolución y supresión de datos según anexo RGPD.
- Migración de datos: Ulpiano facilita export estructurado en formato y plazo definidos.
- Las facturas devengadas se mantienen exigibles.
- Cláusulas que sobreviven: confidencialidad (5 años), RGPD (mientras haya datos), limitación de responsabilidad, jurisdicción.

###### 4.12 Cesión y subcontratación

- El despacho NO puede ceder el contrato sin consentimiento previo escrito de Ulpiano.
- Ulpiano puede ceder en operación de M&A, fusión o cambio de control sin consentimiento, con notificación.
- Ulpiano puede subcontratar partes técnicas (infraestructura, IA) sin consentimiento; no puede subcontratar el servicio Back-Office completo a un tercero sin notificación.

###### 4.13 Jurisdicción y legislación aplicable

- Ley aplicable: española.
- Tribunales: Girona (sede natural de Ulpiano).
- Idioma del contrato: castellano. Traducción al catalán disponible bajo solicitud, sin valor legal preferente.

##### 5. Anexos a producir

- Anexo I — Paquetes Back-Office, mayoristas y extras (extracto literal del `Ulpiano_Pricing_Packaging_v1.docx`, sec. 7.2).
- Anexo II — Comisión sobre caudal: tasas, mecánica de cálculo, definición de caudal computable.
- Anexo III — Add-on Aplazamiento de deuda tributaria.
- Anexo IV — Add-on Pensiones (viudedad / orfandad).
- Anexo V — SLA detallado por tipo de servicio.
- Anexo VI — Acuerdo de Encargado de Tratamiento (RGPD Art. 28).
- Anexo VII — Manual de uso de marca Ulpiano.
- Anexo VIII — Plantilla de presupuesto cliente final personalizable (kit reventa para el despacho).

##### 6. Documentos accesorios solicitados

Adicionales al contrato marco principal, se solicita producir:

1. Cláusula tipo RGPD que el despacho pueda incorporar en su propio contrato de honorarios con el cliente final (autorización expresa de subcontratación a Ulpiano y tratamiento de datos personales).
2. Adenda Early Adopter para los primeros 20 paying customers que activen el descuento –25% lifetime hasta 31 de diciembre de 2026. La adenda debe regular el lock de tarifa frente a futuras revisiones y la condición de pérdida del descuento (ejemplo sugerido: impago no subsanado en 60 días).

##### 7. Posiciones preferidas frente a preguntas anticipadas

Anticipo aquí cuestiones que probablemente se planteen, con la posición preferida de Ulpiano. No son inamovibles: pushback razonado bienvenido.

- ¿Contrato marco Back-Office independiente del contrato SaaS o anexo único? **Posición:** independientes pero referenciados. Hay despachos que solo querrán SaaS y no Back-Office; un único contrato monolito frena la venta.
- ¿Exclusividad? **Posición:** NO exclusividad ni en favor de Ulpiano (el despacho puede usar otros proveedores) ni en favor del despacho (Ulpiano puede vender a competidores).
- ¿Garantía de volumen mínimo del despacho? **Posición:** NO. Si vendes a 10 despachos y solo 3 mandan trabajo, es señal de producto, no contractual.
- ¿Cláusula de éxito comercial ("si Ulpiano consigue clientes para el despacho, el despacho paga X")? **Posición:** NO. Ulpiano vende infraestructura, no leads.
- ¿Cláusulas de no-poaching de empleados? **Posición:** NO incluirlas. Cuestionables hoy bajo derecho de la competencia (la CNMC y la Comisión las están escrutando).
- ¿Apetito de riesgo legal — contrato firme o flexible? **Posición:** flexible en v1. Cerrar deals rápido tiene mayor valor que proteger margen al milímetro. Endurecimiento previsto a partir de los 30 paying customers.
- ¿Tratamiento del Programa Partners (funerarias, aseguradoras, banca)? **Posición:** fuera del scope de este contrato marco. Es un track separado con modelo distinto (revenue share o licencia + Back-Office paquete). Se diseñará v1 en H2 2026, tras consolidar 10-20 clientes Back-Office.
- ¿Tratamiento de notarías? **Posición:** fuera del scope de la v1 del pricing y del contrato marco. Se cubrirá en v2 cuando se cierre el plan/licencia notarial específico.

##### 8. Calendario y entregables esperados del abogado

1. Borrador 1 del contrato marco + Anexos I-VIII en formato Word editable. Plazo objetivo: [PENDIENTE — fijar con el abogado].
2. Cláusula tipo RGPD para el contrato del despacho con el cliente final.
3. Adenda Early Adopter.
4. Memo de 1 página con el análisis del régimen RD 135/2021 y los puntos de riesgo deontológico identificados.
5. Estimación de honorarios — fijos por entregable, no por hora, si es posible.

Iteraciones previstas: 2-3 vueltas sobre el borrador 1 hasta cerrar la versión firmable.

---

### 5.2 Cláusula tipo RGPD para contrato despacho ↔ cliente final

**Estado:** [PENDIENTE — solicitada al abogado dentro del encargo Back-Office].

**Brief al abogado:** ya incluido en el brief Back-Office, sec. 6.

**Tareas pendientes:**

- [ ] Recibir borrador del abogado.
- [ ] Distribuir como kit reventa a los primeros despachos (Anexo VIII).

---

### 5.3 Adenda Early Adopter

**Estado:** [PENDIENTE — solicitada al abogado dentro del encargo Back-Office].

**Brief al abogado:** ya incluido en el brief Back-Office, sec. 6.

**Tareas pendientes:**

- [ ] Recibir borrador.
- [ ] Listar y trackear los 20 cupos Early Adopter en HubSpot.

---

## 6. Capa 5 — Operativa interna y proveedores

### 6.1 NDAs internos (empleados, freelances, asesores)

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- NDA bilateral o unilateral según rol.
- Definición amplia de información confidencial (incluye datos de despachos clientes y de sus clientes finales).
- Plazo: durante la relación + 5 años post-terminación.
- Devolución/destrucción de información al término.
- Cláusula de no uso para fines distintos.
- IP de las contribuciones (cesión a Ulpiano de obras y desarrollos creados en el contexto de la relación).

**Contexto a pasar al abogado:**

- Tipo de roles esperados (devs, comercial, ops).
- Si la relación es laboral, mercantil (autónomos) o mixta.

**Tareas pendientes:**

- [ ] Definir tipos de relación (laboral / autónomo / asesor).
- [ ] Plantilla maestra adaptable.

---

### 6.2 DPAs con subencargados (firma Ulpiano con sus proveedores)

**Estado:** [PARCIAL] — algunos proveedores tienen DPA estándar; otros pendientes de revisión.

**Brief al abogado — qué debe cubrir:**

- Revisión y firma del DPA de cada subencargado (AWS/cloud, IA, email, analytics, CRM).
- Revisión de transferencias internacionales y SCCs.
- Revisión de retention de datos por proveedor.
- Confirmación de "no training" con proveedores de IA generativa.

**Contexto a pasar al abogado:**

- Lista de proveedores activos (sec. 1.4).
- DPAs estándar disponibles de cada uno.

**Tareas pendientes:**

- [ ] Inventariar todos los proveedores que tocan datos de cliente.
- [ ] Recopilar DPAs estándar de cada uno.
- [ ] Identificar gaps y negociar adendas si es necesario.
- [ ] Documentar TIA (Transfer Impact Assessment) cuando aplique.

---

### 6.3 Contratos con desarrolladores externos / agencias

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Prestación de servicios mercantil (no laboral).
- Cesión completa de derechos de IP y código a Ulpiano (work-for-hire).
- NDA reforzado.
- Datos personales: si tienen acceso, DPA por debajo (cliente respecto Ulpiano = subencargado).
- Penalizaciones por incumplimiento de plazos.
- Cláusula de no-competencia razonable y temporal (con cuidado por derecho de la competencia).

**Contexto a pasar al abogado:**

- Tipo de relación (proyecto cerrado vs. tarifas mensuales vs. retainer).
- Acceso a infraestructura.

**Tareas pendientes:**

- [ ] Plantilla maestra.

---

### 6.4 Contratos de partnership (notarías, integraciones, despachos colaboradores)

**Estado:** [PENDIENTE].

**Brief al abogado — qué debe cubrir:**

- Naturaleza específica según el partner:
  - **Notaría:** acuerdo de colaboración, no de reventa. Respeto al Reglamento Notarial.
  - **Integración técnica (API):** licencia de uso de API, no de plataforma.
  - **Despacho colaborador / referrer:** acuerdo de referidos, no agencia comercial regulada.
- Estructura económica del partnership (revenue share, fee fijo, descuentos cruzados).
- Confidencialidad y datos.
- Plazo y terminación.

**Contexto a pasar al abogado:**

- Listado de partners activos / target.
- Modelo económico de cada relación (a definir caso por caso).

**Tareas pendientes:**

- [ ] Diseñar modelos de partnership (notaría / integración / referrer) — workstream pendiente del GTM.
- [ ] Plantilla por tipo.

---

## 7. Capa 6 — Compliance escalable (futuro)

> Pendiente. Activar cuando: (a) >50 empleados, (b) due diligence de despacho grande, (c) ronda institucional, lo que llegue antes.

### 7.1 Compliance penal — Modelo de prevención de delitos (Art. 31 bis CP)

- Análisis de riesgos penales aplicables a Ulpiano (delitos económicos, contra la AAPP, RGPD, blanqueo, etc.).
- Diseño del modelo y manual de prevención.
- Designación de Compliance Officer.
- Procedimientos de control y formación.

### 7.2 Canal de denuncias (Ley 2/2023)

- Obligatorio >50 empleados; voluntario antes (señal de madurez).
- Canal interno + canal externo (Independent Authority).
- Procedimiento de gestión y protección al denunciante.

### 7.3 Plan de continuidad y respuesta a incidentes

- BCP / DRP técnico.
- Playbook de respuesta a incidentes de seguridad.
- Comunicación a clientes y autoridades.

### 7.4 ISO 27001 / SOC 2

- Calendario de obtención.
- Necesario para vender a despachos grandes / ronda institucional.

---

## 8. Roadmap de ejecución

| Sprint | Bloque | Entregables | Bloqueante de |
|---|---|---|---|
| **Sprint 1** (semana 1-2) | Constitución y base | Cierre datos Ulpiano S.L. (sec. 1.1) | Todo lo demás |
| **Sprint 2** (semana 2-4) | Trinidad cliente SaaS | T&C SaaS + Order Form + DPA | Facturar SaaS |
| **Sprint 2** (semana 2-4) | Legales web | Aviso legal + Privacidad + Cookies | Lanzar web |
| **Sprint 3** (semana 4-6) | Capa 3 legal-tech | Cláusulas embebidas: disclaimer, secreto, IP outputs, IA, lista subencargados | Reduce riesgo deontológico y RC |
| **Sprint 3-4** (semana 4-8) | Back-Office | Contrato Marco + Anexos I-VIII + Cláusula RGPD despacho-cliente + Adenda Early Adopter | Facturar Back-Office |
| **Sprint 4-5** (semana 6-10) | Operativa interna | NDAs, DPAs proveedores, contratos devs | Escalar equipo |
| **Sprint 6+** (a demanda) | Partnerships | Plantillas notaría / integración / referrer | Programa Partners |
| **H2 2026 / 2027** | Compliance escalable | Modelo prevención delitos, canal denuncias, ISO 27001 | Due diligence vendor / ronda |

---

## 9. Lista maestra de tareas pendientes

### Bloqueantes societarios
- [ ] Confirmar denominación social, CIF, datos registrales de Ulpiano S.L.
- [ ] Domicilio social (Girona).
- [ ] Estructura de socios y pacto de socios.
- [ ] Poder de representación de Miquel.
- [ ] Registro de marca "Ulpiano" (OEPM/EUIPO).
- [ ] Confirmar dominio principal.

### Inputs técnicos para abogados
- [ ] Cloud provider y región definitivos.
- [ ] Proveedor(es) de IA y configuración "no training".
- [ ] Pasarela de pago.
- [ ] Inventario completo de subencargados (CRM, email, analytics, monitorización, almacenamiento).
- [ ] Confirmar UE/EEE only o documentar transferencias.
- [ ] One-pager de medidas técnicas y organizativas.
- [ ] Política de acceso interno documentada.
- [ ] Inventario de cookies y CMP.
- [ ] Inventario de formularios web y herramientas que reciben datos.

### Decisiones de negocio pendientes
- [ ] T&C SaaS: click-through vs. firma manual.
- [ ] Order Form: separado vs. embebido en T&C.
- [ ] Modelo de free trial / freemium y reglas de conversión.
- [ ] SLA: mismo para todos los tiers o escalado.
- [ ] DPA: anexo del T&C vs. documento autónomo (recomendado: autónomo).
- [ ] Opt-out de uso anonimizado de datos para mejora del producto.
- [ ] Tipos de relación con freelances/devs (laboral / mercantil / mixto).

### Contratos a encargar
- [x] Brief Back-Office redactado y enviado.
- [ ] Encargo T&C SaaS + Order Form + SLA + AUP.
- [ ] Encargo DPA SaaS.
- [ ] Encargo legales web (aviso legal + privacidad + cookies + términos web).
- [ ] Encargo cláusulas Capa 3 (legal-tech específico).
- [ ] Encargo plantillas internas (NDA, contrato dev, partnership).

### Producto / web
- [ ] Página pública de subencargados + sistema de notificación.
- [ ] CMP de cookies con rechazo simétrico.
- [ ] Watermark / disclaimer en outputs documentales.
- [ ] Designación de DPO o canal RGPD.

### Recordatorio para ronda / due diligence futura
- [ ] Calendario para ISO 27001 / SOC 2.
- [ ] Modelo prevención delitos (Art. 31 bis CP) cuando aplique.
- [ ] Canal de denuncias (cuando >50 empleados o señal de madurez).
- [ ] BCP + DRP + playbook de incidentes.

---

> **Cómo se usa este documento.**
> Funciona como brief maestro y backlog. Cada vez que se encarga un contrato a un abogado, se extrae la sección correspondiente + la sección 1 (información transversal) y se envía como un único anexo informativo. Las tareas pendientes se trackean aquí y se cierran a medida que avanza el proyecto.
