# Briz Landing Page

One-page mobile-first landing built with Next.js (App Router) and Tailwind CSS to vender el producto **Briz**.

## Requisitos

- Node.js 18.17+ o 20.x
- pnpm, npm o yarn

## Instalación

```bash
npm install
# o
pnpm install
```

## Desarrollo

```bash
npm run dev
```

La app corre en `http://localhost:3000`. Edita `app/page.tsx` para actualizar el contenido. Los valores variables (WhatsApp, Yape, Plin, imágenes) vienen con placeholders marcados en comentarios.

## Build

```bash
npm run build
npm run start
```

## Deploy a Vercel

1. Crea el proyecto en Vercel y conecta este repositorio.
2. Variables importantes a revisar antes del deploy:
   - `WHATSAPP_NUMBER` y `WHATSAPP_MESSAGE` en `app/page.tsx`.
   - `YAPE_NUMBER`, `PLIN_NUMBER`, `MONTO_DEFAULT` y `qrImageSrc` (si tienes QR oficial) en `app/page.tsx` y `components/PaymentPanel.tsx`.
   - En `next.config.js` agrega dominios de imágenes adicionales si cambias las URLs.
3. Usa los comandos predefinidos para build (`npm run build`) y start (`npm run start`). Vercel detectará el framework automáticamente.

## Notas

- El componente `PaymentPanel` se renderiza como CTA sticky con QR, botón para copiar número y WhatsApp con mensaje prellenado.
- Todos los botones y CTAs relevantes incluyen `data-gtm-event` para integrarse a Google Tag Manager.
