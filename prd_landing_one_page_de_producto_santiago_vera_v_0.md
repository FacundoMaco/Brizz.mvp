# PRD — Landing One‑Page de Producto (Briz) — v0.2

## 1) Contexto / Resumen ejecutivo

Landing one‑page para vender **Briz**, un dispositivo no electrónico diseñado para ayudar a dejar de vapear. Briz no contiene nicotina, humo ni vapor; simula la experiencia de vapeo a través de un tubo con un algodón saborizado que libera aroma y sensación oral. Se posiciona como una alternativa saludable, simple y accesible para jóvenes que buscan dejar el vape sin perder el ritual. 

Objetivo: **conversión inmediata** con CTA de pago (Yape/Plin) y confirmación por WhatsApp. Sin pasarela con fees; foco en velocidad, claridad y confianza.

- **Owner:** Facu (Mavre Works)
- **Cliente:** Santiago Vera
- **Producto:** Briz — dispositivo saborizado no electrónico
- **Precio unitario:** S/75 (con elección de sabor)
- **Slogan:** “Healthier than breathing.”
- **Modelo:** MVP en 1 día, mejoras continuas en 72h
- **KPI principal:** Tasa de conversión a pago/lead calificado

## 2) Objetivos

- **O1:** Publicar MVP en 1 día con estructura clara (hero → beneficios → prueba social → precio → CTA pago)
- **O2:** Permitir **pago inmediato** mediante **Yape/Plin (QR + link)** y/o **botón WhatsApp** con mensaje prellenado
- **O3:** Capturar datos mínimos (nombre, teléfono, sabor elegido, dirección o punto de entrega)
- **O4:** Medir rendimiento (UTM, eventos click en CTA)

## 3) Métricas de éxito

- Conversión página→intento de pago (CTR del CTA) ≥ **12%**
- Envíos por WhatsApp con intención de compra ≥ **8%** del tráfico
- Tiempo de carga **< 2.5s** en móvil (LCP)

## 4) Público objetivo (supuesto inicial)

- Jóvenes 18–35 años que buscan reemplazar o reducir vapeo.
- Pago preferido: **Yape/Plin**.
- Perfil consciente de salud, busca alternativas naturales y estéticas.

## 5) Alcance v1 (MVP)

**Secciones:**

1. **Hero** (foto del producto, título “Healthier than breathing.”, subtítulo sobre dejar el vape, precio, CTA “Ordena tu Briz”)  
2. **Beneficios clave** (sin nicotina, sin batería, experiencia real, múltiples sabores, hecho en Perú)
3. **Cómo funciona / Qué incluye** (visual del tubo, algodón saborizado, descripción del uso)
4. **Prueba social** (testimonios o conteo de ventas en Lima)
5. **Garantía / Cambios** (1 párrafo)
6. **CTA fijo** (sticky) + **QR Yape/Plin** + **Botón WhatsApp**
7. **Preguntas frecuentes** (uso, duración, seguridad, sabores)
8. **Footer** (datos mínimos del vendedor, política corta)

**Fuera de alcance v1:** blog, pasarelas con fees, múltiples productos, panel de admin.

## 6) Historias de usuario

- **Como comprador móvil**, quiero ver precio y CTA en los **primeros 2 scrolls** para decidir rápido.
- **Como ex‑vapeador**, quiero entender que Briz reemplaza el hábito sin riesgo ni humo.
- **Como comprador listo**, quiero **pagar por Yape/Plin o escribir por WhatsApp** sin fricciones.

## 7) Flujos

**Flujo A (Pago Yape/Plin):**

1. Usuario hace tap en **“Ordenar Briz”** → modal con **QR + número** y **monto prellenado (S/75)**.
2. Usuario elige sabor y envía comprobante por WhatsApp (botón “Enviar comprobante”).
3. Página muestra **mensaje de confirmación** y **siguiente paso** (coordinación de entrega).

**Flujo B (WhatsApp):**

1. Tap en WhatsApp → abre chat con mensaje prellenado **“Quiero ordenar Briz sabor [SABOR] por S/75 – mi nombre es [NOMBRE]”**.
2. Se coordina pago/entrega en chat.

## 8) Contenido y assets (placeholders)

- Producto: **Briz** (dispositivo saborizado sin nicotina)
- Precio: **S/75**
- Sabores: menta, mango, uva, frutas tropicales
- 1 foto principal (hero) + 2–3 secundarias
- Testimonios (nombre + cita breve) o **conteo de ventas en Lima**
- Garantía (cambios dentro de 7 días)
- **Número Yape/Plin**, **link WhatsApp**, **ubicación de entrega (Lima)**

## 9) Requisitos UX/UI

- Diseño **mobile-first**, limpio, con estética “wellness tech”
- **Botón CTA sticky** en móvil (“Ordenar Briz”)
- QR visible y **copiar número** en 1 tap
- Estado de feedback al copiar/abrir WhatsApp

## 10) Tech / Entrega

- Stack sugerido: **Next.js + Tailwind** (o Lovable/bolt.dev para autogenerar)
- Deploy: **Vercel**
- Analytics: **GTM** con eventos: `cta_buy_click`, `wa_click`, `qr_view`, `copy_number`
- SEO básico: meta title/description, OG tags

## 11) Legal / Trust

- Datos mínimos del vendedor (nombre comercial, WhatsApp, ciudad)
- Política corta de cambios/devoluciones
- Aviso de privacidad simple si se recolectan datos

## 12) Rendimiento y QA

- LCP < 2.5s móvil
- Imágenes optimizadas (next/image)
- Prueba en 3 tamaños (iPhone SE, 12/13, Android medio)

## 13) Timeline

- **Día 0 (hoy):** MVP con placeholders + QR funcional + WhatsApp
- **Día 1:** Reemplazo de contenido real, afinado de copy, pruebas
- **Día 3:** Iteración con métricas iniciales

## 14) Riesgos y mitigación

- **Sin pasarela**: confianza → mitigar con prueba social + garantía
- **Fraude de comprobantes**: pedir **últimos 4 dígitos** y **monto exacto**; validación manual

## 15) Criterios de aceptación v1

- CTA visible y funcional (WA y QR)
- Secciones mínimas públicas
- Eventos de tracking disparan en GA/GTM
- Contenido real cargado

---

## PROMPT MULTI‑BUILDER (Lovable / Cursor / bolt.dev / Replit)

**Instrucciones invariantes**

- Genera una **one‑page** mobile‑first para vender **el producto Briz (S/75)**.
- Estructura: Hero (foto, título, subtítulo, precio, CTA) → Beneficios → Cómo funciona/Qué incluye → Testimonios → Garantía → CTA sticky + QR Yape/Plin + botón WhatsApp → FAQ → Footer (datos mínimos).
- Agrega **QR Yape/Plin** (input: número y monto), botón **“Copiar número”**, y botón **WhatsApp** con mensaje prellenado.
- Implementa analytics con **data‑attributes** listos para GTM (`data-gtm-event`).
- Usa **Next.js + Tailwind** (si el builder lo soporta). Entregar código limpio y deploy‑ready en Vercel.
- Optimiza performance: imágenes next/image, lazy, LCP < 2.5s.

**Variables a reemplazar**

- `PRODUCTO_NOMBRE = "Briz"`
- `PRODUCTO_PRECIO = 75`
- `PRODUCTO_BENEFICIOS = ["Sin nicotina", "Sin humo", "Sensación real", "Varios sabores", "Fabricado en Perú"]`
- `WHATSAPP_NUM`, `WHATSAPP_MSG`
- `YAPE_NUM`, `PLIN_NUM`, `MONTO_DEFAULT`
- `HERO_IMG`, `GALLERY_IMGS[]`
- `TESTIMONIOS[]` (nombre, cita)
- `GARANTIA_TXT`, `POLITICA_TXT`, `CIUDAD = Lima`

**Entrega esperada**

- Componente principal `page.tsx` con secciones
- Componente `PaymentPanel` (QR + copiar número + WA)
- `utils/wa.ts` para armar `wa.me` con mensaje
- `README.md` con instrucciones de deploy

**Copy base (placeholders)**

- Título: “Healthier than breathing.”
- Subtítulo: “Siente el ritual, no el daño. Ordena Briz hoy.”
- Beneficios: “Sin nicotina”, “Sin humo”, “Sensación real”, “Varios sabores”, “Fabricado en Perú”.
- Garantía: “Cambios dentro de 7 días si presenta falla de fábrica.”

---

