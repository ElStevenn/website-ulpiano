# Ulpiano — Marketing Tracking Plan

**Versión:** 1.1.0
**Fecha:** 12 de abril de 2026
**Herramientas:** GA4 (G-FW9TKGSK59) + Google Tag Manager (GTM-MBNWK2CW)
**Compliance:** RGPD / Consent Mode v2
**GA4 Measurement ID:** `G-FW9TKGSK59`

---

## 1. Arquitectura de medición

```
┌─────────────────────────────────────────────────────────┐
│                    CAPA DE DATOS                         │
│  dataLayer.push() desde Next.js → GTM → GA4 + Pixels    │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┼─────────────────────┐
    │             │                     │
    ▼             ▼                     ▼
┌────────┐  ┌──────────┐  ┌─────────────────────┐
│  GA4   │  │ Google   │  │  LinkedIn Insight    │
│        │  │ Ads      │  │  (futuro)            │
└────────┘  └──────────┘  └─────────────────────┘
```

**Principio rector:** dataLayer-first. Toda la información de negocio se inyecta en el dataLayer antes de que GTM la procese. Ningún tag lee directamente del DOM — todo pasa por variables estructuradas.

---

## 2. Consent Mode v2 (RGPD)

### Estado de implementación: ✅ COMPLETADO

**Componentes desplegados:**

| Pieza | Archivo | Estado |
|-------|---------|--------|
| Script Consent Mode default | `src/app/layout.tsx` (`<head>`) | ✅ En producción |
| Restauración desde cookie `gt_consent` | `src/app/layout.tsx` (`<head>`) | ✅ En producción |
| Cookie Banner (barra + modal) | `src/components/CookieBanner.tsx` | ✅ En producción |
| Enlace "Ajustes de cookies" en footer | `src/components/layout/Footer.tsx` | ✅ En producción |
| `pushConsent()` bridge a GTM | `src/components/CookieBanner.tsx` | ✅ En producción |

**Contrato técnico de la cookie:**

| Atributo | Valor |
|----------|-------|
| Nombre | `gt_consent` |
| Formato | JSON: `{ necessary, analytics, marketing }` |
| Caducidad | 182 días |
| Path | `/` |
| SameSite | `Lax` |
| Secure | `true` |

**Estado por defecto (antes del consentimiento):**

| Señal | Estado por defecto | Tras consentimiento |
|-------|-------------------|---------------------|
| `analytics_storage` | `denied` | `granted` |
| `ad_storage` | `denied` | `granted` |
| `ad_user_data` | `denied` | `granted` |
| `ad_personalization` | `denied` | `granted` |
| `functionality_storage` | `granted` | `granted` |
| `security_storage` | `granted` | `granted` |

**Configuración adicional:**
- `ads_data_redaction: true` — redacta datos de ads cuando consent está denegado
- `url_passthrough: true` — preserva parámetros de campaña entre páginas sin cookies
- `wait_for_update: 500` — espera 500ms a que el CMP actualice antes de procesar

> GTM envía pings sin cookies cuando el consentimiento está denegado (modelado de conversiones), cumpliendo con la DMA y el RGPD.

---

## 3. Dimensiones personalizadas

### Content Group (ámbito: evento)

Clasificación automática por URL — implementada en `CJS - Content Group` (variable GTM) y en `DataLayerRouteTracker.tsx`:

| URL Pattern | Content Group | Propósito |
|-------------|--------------|-----------|
| `/` | `home` | Rendimiento homepage |
| `/soluciones/*` | `soluciones` | Interés por producto |
| `/pensado-para/*` | `segmentos` | Identificación de ICP |
| `/modelos/*` | `modelos` | Contenido educativo/SEO |
| `/demo` | `conversion` | Intención alta |
| `/contacto` | `conversion` | Intención alta |
| `/precios` | `conversion` | Intención alta |
| `/login` | `acceso` | Usuarios existentes |
| `/recursos/*` | `lead_magnets` | Captura de leads |
| `/legal/*` | `legal` | Compliance |

### Page Type (ámbito: evento)

| URL Pattern | Page Type |
|-------------|-----------|
| `/` | `homepage` |
| `/soluciones/*` | `feature_page` |
| `/pensado-para/*` | `segment_page` |
| `/modelos/*` | `resource_page` |
| `/demo` | `lead_capture` |
| `/contacto` | `lead_capture` |
| `/precios` | `pricing` |
| `/login` | `login` |
| `/recursos/*` | `lead_capture` |
| `/legal/*` | `legal` |

---

## 4. Taxonomía de eventos

### 4.1 Eventos del marketing site

| Evento | Descripción | Propiedades | Trigger | Estado |
|--------|-------------|-------------|---------|--------|
| `page_view` | Página cargada (enhanced) | `page_title`, `page_path`, `content_group`, `page_type` | Todas las páginas | ✅ GTM auto |
| `scroll_depth` | Scroll a umbral | `percent_scrolled`, `page_path`, `content_group` | 25%, 50%, 75%, 100% | ✅ GTM auto |
| `cta_clicked` | Click en CTA | `button_text`, `cta_location`, `destination_url`, `page_path` | dataLayer push | ✅ ButtonPrimary.tsx |
| `navigation_clicked` | Click en navegación | `menu_item`, `menu_section` | dataLayer push | ⏳ Pendiente |
| `outbound_link_clicked` | Click a sitio externo | `link_url`, `link_text`, `page_path` | Links salientes | ✅ GTM auto |

### 4.2 Eventos de formularios

| Evento | Descripción | Propiedades | Trigger | Estado |
|--------|-------------|-------------|---------|--------|
| `demo_form_started` | Primer campo del formulario de demo | `page_path` | onFocus primer campo | ✅ DemoClient.tsx |
| `demo_form_submitted` | Demo solicitada con éxito | `empresa` | dataLayer push (submit) | ✅ DemoClient.tsx |
| `contact_form_started` | Primer campo del formulario de contacto | `page_path` | onFocus primer campo | ✅ ContactoClient.tsx |
| `contact_form_submitted` | Contacto enviado con éxito | `asunto` | dataLayer push (submit) | ✅ ContactoClient.tsx |
| `form_error` | Error de envío | `form_name`, `error_type` | catch del submit | ✅ Ambos formularios |

### 4.3 Eventos de conversión (Key Events en GA4)

| Evento | Descripción | Propiedades | Valor | Estado |
|--------|-------------|-------------|-------|--------|
| `generate_lead` | Conversión principal | `lead_type` (demo/contact), `currency`, `value` | 150€ (demo) / 50€ (contact) | ✅ dataLayer — ⏳ Marcar Key Event en GA4 |
| `pricing_page_viewed` | Interés en precios | `source`, `referrer` | — | ✅ GTM trigger PV /precios |

### 4.4 Eventos de engagement

| Evento | Descripción | Propiedades | Trigger | Estado |
|--------|-------------|-------------|---------|--------|
| `engaged_session_30s` | Sesión cualificada (30s+) | `page_path`, `content_group` | Timer 30s | ✅ GTM auto |
| `solution_explored` | Visita a página de solución | `solution_name` | dataLayer push (auto) | ✅ DataLayerRouteTracker.tsx |
| `segment_explored` | Visita a página de segmento | `segment_name` | dataLayer push (auto) | ✅ DataLayerRouteTracker.tsx |
| `modelo_explored` | Visita a página de modelo | `modelo_type` | dataLayer push (auto) | ✅ DataLayerRouteTracker.tsx |
| `login_portal_clicked` | Click en acceso al portal | `portal_type` | dataLayer push | ⏳ Pendiente |

---

## 5. Funnels de conversión

### Funnel 1: Solicitud de Demo (primario)

```
page_view (cualquiera)
    │
    ▼
cta_clicked (destino: /demo)        ← ButtonPrimary con trackLocation
    │
    ▼
page_view (/demo)
    │
    ▼
demo_form_started                    ← onFocus primer campo
    │
    ▼
demo_form_submitted                  ← submit exitoso
    │
    ▼
generate_lead (lead_type: demo, value: 150)
```

### Funnel 2: Formulario de Contacto (secundario)

```
page_view (cualquiera)
    │
    ▼
cta_clicked (destino: /contacto)     ← ButtonPrimary con trackLocation
    │
    ▼
page_view (/contacto)
    │
    ▼
contact_form_started                 ← onFocus primer campo
    │
    ▼
contact_form_submitted               ← submit exitoso
    │
    ▼
generate_lead (lead_type: contact, value: 50)
```

### Funnel 3: Content Engagement → Conversión

```
page_view (solución / segmento / modelo)
    │
    ▼
solution_explored / segment_explored / modelo_explored  ← DataLayerRouteTracker
    │
    ▼
scroll_depth (50%+)                  ← GTM automático
    │
    ▼
cta_clicked                          ← ButtonPrimary
    │
    ▼
page_view (/demo o /contacto)
```

---

## 6. Estrategia de UTMs

### Convención de nomenclatura

Formato: **minúsculas, guiones bajos, sin espacios, sin caracteres especiales.**

### Mapeo por canal

| Canal | `utm_source` | `utm_medium` | `utm_campaign` | `utm_content` |
|-------|-------------|-------------|----------------|---------------|
| Google Ads (Search) | `google` | `cpc` | `{tipo}_{tema}` | `{grupo_anuncios}` |
| Google Ads (Display) | `google` | `display` | `{campaña}` | `{creatividad}` |
| LinkedIn Ads | `linkedin` | `cpc` | `{campaña}_{segmento}` | `{creatividad}` |
| Newsletter | `newsletter` | `email` | `{aaaa_mm_dd}_{tema}` | `{seccion}` |
| Outbound sales | `outbound` | `email` | `{secuencia}_{paso}` | `{variante}` |
| LinkedIn orgánico | `linkedin` | `social` | `{tipo_contenido}` | `{post_id}` |
| Twitter/X orgánico | `twitter` | `social` | `{tipo_contenido}` | `{post_id}` |
| Partnerships | `{nombre_partner}` | `referral` | `{programa}` | — |
| Directorios legales | `{nombre_directorio}` | `listing` | `{categoria}` | — |
| Firma de email | `firma_email` | `email` | `equipo_{departamento}` | — |
| QR físico (eventos) | `evento_{nombre}` | `qr` | `{fecha}` | `{ubicacion}` |

### Ejemplos concretos

```
https://ulpiano.es/demo?utm_source=linkedin&utm_medium=cpc&utm_campaign=despachos_girona&utm_content=caso_uso_isd

https://ulpiano.es/soluciones/fiscalidad-sucesoria?utm_source=newsletter&utm_medium=email&utm_campaign=2026_04_12_novedades_isd&utm_content=cta_hero

https://ulpiano.es/?utm_source=colegio_abogados_girona&utm_medium=referral&utm_campaign=partnership_q2_2026
```

---

## 7. Key Events (Conversiones en GA4)

### ⏳ PENDIENTE — Marcar en GA4 Admin

**Ruta:** GA4 → Admin → Events → toggle "Mark as key event"

Los eventos llegarán a GA4 automáticamente una vez publiques el contenedor GTM. Para marcarlos como Key Events:

**Paso 1:** Ve a [analytics.google.com](https://analytics.google.com) → selecciona la propiedad de Ulpiano

**Paso 2:** Admin (engranaje) → en la columna "Property", haz clic en **Events**

**Paso 3:** Espera a que aparezcan los eventos (pueden tardar hasta 24-48h desde la primera vez que disparan). Busca estos 4:

| Key Event | Evento a buscar | Toggle | Valor recomendado |
|-----------|----------------|--------|-------------------|
| Solicitud de demo | `generate_lead` | ✅ Activar | 150€ |
| Vista de precios | `pricing_page_viewed` | ✅ Activar | — |
| Sesión cualificada | `engaged_session_30s` | ✅ Activar | — |

> **Nota sobre `generate_lead`:** Este evento cubre tanto demos como contactos, diferenciados por el parámetro `lead_type`. El valor (150€ o 50€) ya se envía desde el dataLayer, así que GA4 lo registra automáticamente por evento.

**Paso 4:** Para asignar valor monetario a `generate_lead`:
1. En Admin → Events → haz clic en `generate_lead`
2. Activa "Use event-level currency and value" (si está disponible)
3. O bien: deja que el valor venga del dataLayer (ya configurado con `currency: EUR` y `value: 150/50`)

**Paso 5:** Si vas a usar Google Ads, vincula GA4 con Google Ads:
1. Admin → Product links → Google Ads
2. Enlaza la cuenta
3. Los Key Events aparecerán automáticamente como conversiones importables en Google Ads

### Valores de conversión

Los valores asignados permiten optimización de pujas en Google Ads por ROAS, basados en:
- **Demo → cliente**: ratio estimado 15%, LTV medio 1.788€/año → valor demo ≈ 150€ (ajustar con datos reales)
- **Contacto → demo**: ratio estimado 30% → valor contacto ≈ 50€

---

## 8. Audiences (Públicos en GA4)

| Audiencia | Condición | Uso |
|-----------|-----------|-----|
| Demo Requesters | `generate_lead` con `lead_type=demo` | Exclusión en ads, nurture |
| High-Intent Visitors | Visitaron `/precios` O `/demo` sin convertir | Retargeting prioritario |
| Solution Explorers | ≥2 páginas de `/soluciones/*` en una sesión | Retargeting de producto |
| Segment Match: Despachos | Visitaron `/pensado-para/despachos` | Personalización de ads |
| Segment Match: Asesorías | Visitaron `/pensado-para/asesorias` | Personalización de ads |
| Segment Match: Notarías | Visitaron `/pensado-para/notarias` | Personalización de ads |
| Content Engaged | `scroll_depth` ≥75% en cualquier página | Lookalike audiences |
| Returning Non-Converters | ≥3 sesiones, sin `generate_lead` | Retargeting agresivo |

---

## 9. Implementación — Estado actual del código

### Mapa de archivos modificados

| Archivo | Eventos implementados | Método |
|---------|----------------------|--------|
| `src/app/layout.tsx` | Consent Mode v2 default + restauración cookie | Script inline en `<head>` |
| `src/components/CookieBanner.tsx` | `consent_update` | `pushConsent()` → `gtag('consent', 'update')` |
| `src/components/layout/Footer.tsx` | Apertura modal cookies | `CustomEvent('open-cookie-settings')` |
| `src/components/buttons/ButtonPrimary.tsx` | `cta_clicked` | `trackCta()` en onClick, prop `trackLocation` |
| `src/components/layout/Header.tsx` | `cta_clicked` via ButtonPrimary | `trackLocation="header"` / `"mobile_menu"` |
| `src/components/DataLayerRouteTracker.tsx` | `solution_explored`, `segment_explored`, `modelo_explored` | Auto-detección por pathname en useEffect |
| `src/app/(marketing)/demo/DemoClient.tsx` | `demo_form_started`, `demo_form_submitted`, `generate_lead`, `form_error` | onFocus, onSubmit, catch |
| `src/app/(marketing)/contacto/ContactoClient.tsx` | `contact_form_started`, `contact_form_submitted`, `generate_lead`, `form_error` | onFocus, onSubmit, catch |

### Patrón para futuros formularios

Cualquier formulario nuevo debe replicar este patrón:

```javascript
const formStartedRef = useRef(false);
const dl = useRef(
  () => (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer,
);

function handleFormStarted() {
  if (formStartedRef.current) return;
  formStartedRef.current = true;
  dl.current()?.push({ event: '{nombre}_form_started' });
}

// En el submit exitoso:
dl.current()?.push({ event: '{nombre}_form_submitted', ...propiedades });
dl.current()?.push({ event: 'generate_lead', lead_type: '{tipo}', currency: 'EUR', value: {X} });

// En el catch de error:
dl.current()?.push({ event: 'form_error', form_name: '{nombre}', error_type: 'submission' });

// En el primer campo del formulario:
<input onFocus={handleFormStarted} ... />
```

### Patrón para nuevos CTAs (ButtonPrimary)

```jsx
<ButtonPrimary href="/demo" trackLocation="hero">
  Reserva tu Demo
</ButtonPrimary>
```

Si `trackLocation` no se pasa, el evento se dispara igual pero con `cta_location: "unknown"`.

---

## 10. Estructura del contenedor GTM

### Archivo: `gtm-container-ulpiano.json`

**GA4 Measurement ID:** `G-FW9TKGSK59`

### Tags (18)

| # | Nombre | Tipo | Trigger | Notas |
|---|--------|------|---------|-------|
| 1 | HTML - Consent Mode v2 Default | Custom HTML | DOM Ready (prioridad 999) | Ya redundante con script en `<head>`, se puede eliminar |
| 2 | GA4 - Config - Base | GA4 Config | All Pages | Measurement ID, send_page_view, content_group, page_type |
| 3 | GA4 - Event - CTA Clicked | GA4 Event | CE: cta_clicked | button_text, cta_location, destination_url |
| 4 | GA4 - Event - Demo Requested | GA4 Event | CE: demo_form_submitted | empresa |
| 5 | GA4 - Event - Contact Submitted | GA4 Event | CE: contact_form_submitted | asunto |
| 6 | GA4 - Event - Demo Form Started | GA4 Event | CE: demo_form_started | — |
| 7 | GA4 - Event - Contact Form Started | GA4 Event | CE: contact_form_started | — |
| 8 | GA4 - Event - Scroll Depth | GA4 Event | Scroll Depth 25/50/75/100 | percent_scrolled, content_group |
| 9 | GA4 - Event - Outbound Link | GA4 Event | Click: Outbound Links | link_url, link_text |
| 10 | GA4 - Event - Pricing Viewed | GA4 Event | PV: /precios | — |
| 11 | GA4 - Event - Login Portal | GA4 Event | CE: login_portal_clicked | portal_type |
| 12 | GA4 - Event - Engaged 30s | GA4 Event | Timer: 30s | content_group |
| 13 | GA4 - Event - Navigation Clicked | GA4 Event | CE: navigation_clicked | menu_item, menu_section |
| 14 | GA4 - Event - Form Error | GA4 Event | CE: form_error | form_name, error_type, field_name |
| 15 | GA4 - Event - Generate Lead | GA4 Event | CE: generate_lead | lead_type, value, currency |
| 16 | GA4 - Event - Solution Explored | GA4 Event | CE: solution_explored | solution_name |
| 17 | GA4 - Event - Segment Explored | GA4 Event | CE: segment_explored | segment_name |
| 18 | GA4 - Event - Modelo Explored | GA4 Event | CE: modelo_explored | modelo_type |

### Triggers (22)

| # | Nombre | Tipo | Condición |
|---|--------|------|-----------|
| 1 | All Pages | Page View | — |
| 2 | DOM Ready - All Pages | DOM Ready | — |
| 3 | Window Loaded - All Pages | Window Loaded | — |
| 4 | CE - demo_form_submitted | Custom Event | event = demo_form_submitted |
| 5 | CE - contact_form_submitted | Custom Event | event = contact_form_submitted |
| 6 | CE - demo_form_started | Custom Event | event = demo_form_started |
| 7 | CE - contact_form_started | Custom Event | event = contact_form_started |
| 8 | CE - cta_clicked | Custom Event | event = cta_clicked |
| 9 | Scroll Depth - Vertical | Scroll Depth | 25%, 50%, 75%, 100% |
| 10 | Click - Outbound Links | Link Click | Click URL no contiene ulpiano.es |
| 11 | PV - Demo Page | Page View | Page Path = /demo |
| 12 | PV - Contacto Page | Page View | Page Path = /contacto |
| 13 | PV - Precios Page | Page View | Page Path = /precios |
| 14 | PV - Login Page | Page View | Page Path = /login |
| 15 | Timer - 30s Engagement | Timer | Intervalo: 30000ms, Límite: 1 |
| 16 | CE - navigation_clicked | Custom Event | event = navigation_clicked |
| 17 | CE - login_portal_clicked | Custom Event | event = login_portal_clicked |
| 18 | CE - form_error | Custom Event | event = form_error |
| 19 | CE - generate_lead | Custom Event | event = generate_lead |
| 20 | CE - solution_explored | Custom Event | event = solution_explored |
| 21 | CE - segment_explored | Custom Event | event = segment_explored |
| 22 | CE - modelo_explored | Custom Event | event = modelo_explored |

### Variables (25)

| # | Nombre | Tipo | Data Layer Key / Lógica |
|---|--------|------|------------------------|
| 1 | DLV - form_name | Data Layer | `form_name` |
| 2 | DLV - form_location | Data Layer | `form_location` |
| 3 | DLV - button_text | Data Layer | `button_text` |
| 4 | DLV - cta_location | Data Layer | `cta_location` |
| 5 | DLV - destination_url | Data Layer | `destination_url` |
| 6 | DLV - asunto | Data Layer | `asunto` |
| 7 | DLV - expedientes_ano | Data Layer | `expedientes_ano` |
| 8 | DLV - portal_type | Data Layer | `portal_type` |
| 9 | DLV - link_url | Data Layer | `link_url` |
| 10 | DLV - link_text | Data Layer | `link_text` |
| 11 | DLV - solution_name | Data Layer | `solution_name` |
| 12 | DLV - segment_name | Data Layer | `segment_name` |
| 13 | DLV - modelo_type | Data Layer | `modelo_type` |
| 14 | DLV - lead_type | Data Layer | `lead_type` |
| 15 | DLV - error_type | Data Layer | `error_type` |
| 16 | DLV - field_name | Data Layer | `field_name` |
| 17 | DLV - empresa | Data Layer | `empresa` |
| 18 | DLV - cargo | Data Layer | `cargo` |
| 19 | DLV - currency | Data Layer | `currency` |
| 20 | DLV - value | Data Layer | `value` |
| 21 | DLV - menu_item | Data Layer | `menu_item` |
| 22 | DLV - menu_section | Data Layer | `menu_section` |
| 100 | CJS - Content Group | Custom JS | Clasifica por pathname |
| 101 | CJS - Page Type | Custom JS | Clasifica por pathname |
| 102 | Const - GA4 Measurement ID | Constante | `G-FW9TKGSK59` |

---

## 11. Validación pre-lanzamiento

### Checklist

- [x] GTM instalado (GTM-MBNWK2CW)
- [x] Consent Mode v2 default en `<head>` antes de GTM
- [x] Cookie Banner con modal de ajustes, toggles analytics/marketing
- [x] Restauración de cookie `gt_consent` en `<head>` al cargar
- [x] Enlace "Ajustes de cookies" en footer con `CustomEvent`
- [x] GA4 Config tag en contenedor GTM con content_group y page_type
- [x] dataLayer pushes en formularios (demo + contacto)
- [x] `demo_form_started` / `contact_form_started` (onFocus)
- [x] `form_error` en catch de ambos formularios
- [x] `cta_clicked` en ButtonPrimary con trackLocation
- [x] `solution_explored` / `segment_explored` / `modelo_explored` auto (DataLayerRouteTracker)
- [x] `generate_lead` dispara una vez por submit exitoso con valor en EUR
- [x] Scroll depth configurado en GTM (25/50/75/100%)
- [x] Timer 30s para engaged session en GTM
- [x] Outbound links excluyen ulpiano.es en GTM
- [x] Contenedor GTM JSON generado con Measurement ID `G-FW9TKGSK59`
- [x] Build de Next.js compila sin errores
- [ ] **PENDIENTE:** Importar `gtm-container-ulpiano.json` en GTM
- [ ] **PENDIENTE:** Marcar Key Events en GA4 Admin (ver sección 7)
- [ ] **PENDIENTE:** Verificar con GTM Preview Mode + GA4 DebugView
- [ ] No hay PII en ningún evento (sin email, nombre, teléfono)
- [ ] UTMs se preservan correctamente en navegación interna
- [ ] Cross-domain tracking configurado si app.ulpiano.es existe

### Testing por navegador (tras publicar GTM)

- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

---

## 12. Reporting — Dashboards recomendados

### Dashboard 1: Acquisition Overview

- Sesiones por source/medium
- Tasa de conversión por canal (generate_lead / sessions)
- Coste por lead (si Google Ads conectado)
- Nuevos vs. recurrentes

### Dashboard 2: Content Performance

- Páginas más vistas por content_group
- Scroll depth medio por página
- Engaged sessions (30s+) por content_group
- Path de navegación más común antes de conversión

### Dashboard 3: Conversion Funnel

- Funnel: page_view → cta_clicked → form_started → form_submitted → generate_lead
- Drop-off rate por paso
- Tiempo medio de conversión
- Form error rate por campo

### Dashboard 4: ICP Identification

- Visitas a páginas de segmento (/pensado-para/*)
- Conversiones por segmento de ICP
- Soluciones más exploradas antes de conversión
- Modelos más consultados por segmento

---

## 13. Roadmap de medición

### Fase 1 — Fundación ← ESTAMOS AQUÍ

- [x] GTM instalado
- [x] Consent Mode v2 + Cookie Banner
- [x] GA4 Configuration + eventos base en contenedor GTM
- [x] dataLayer pushes en formularios, CTAs, contenido
- [ ] Importar contenedor GTM y publicar
- [ ] Marcar Key Events en GA4 Admin
- [ ] Verificar con Preview Mode + DebugView
- [ ] Deploy a producción

### Fase 2 — Optimización (mes 2-3)

- [ ] Google Ads conversion tracking
- [ ] Enhanced Conversions (first-party data)
- [ ] LinkedIn Insight Tag
- [ ] Audiences para retargeting
- [ ] A/B testing framework

### Fase 3 — Escala (mes 4-6)

- [ ] Server-side GTM (reducir latencia, mejorar data quality)
- [ ] CRM integration (lead scoring desde analytics)
- [ ] Offline conversion import (demo → cliente)
- [ ] Attribution modeling avanzado
- [ ] Predictive audiences en GA4

---

## Apéndice: Eventos pendientes de implementar (baja prioridad)

| Evento | Archivo afectado | Complejidad | Prioridad |
|--------|-----------------|-------------|-----------|
| `navigation_clicked` | `Header.tsx` | Baja | Baja — bajo valor analítico |
| `login_portal_clicked` | `src/app/login/page.tsx` | Baja | Media — cuando el portal esté activo |
