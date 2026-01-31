# Deployment Guide - 2laps Landing Page

Esta guía te ayudará a desplegar la landing page de 2laps en diferentes plataformas.

## Opciones de Deployment

### 1. Vercel (Recomendado)

Vercel es la plataforma creada por el equipo de Next.js y ofrece la mejor experiencia:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

O simplemente:
1. Sube tu código a GitHub
2. Conecta tu repo en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará todo

**Variables de entorno en Vercel:**
- Ve a tu proyecto → Settings → Environment Variables
- Agrega las variables del archivo `.env.example`

### 2. Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

O usando la interfaz web:
1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`

### 3. Railway

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### 4. Docker (Self-hosted)

Crear un `Dockerfile`:

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Luego:

```bash
# Build
docker build -t 2laps-landing .

# Run
docker run -p 3000:3000 2laps-landing
```

## Configuración Post-Deployment

### 1. Dominio Custom

**En Vercel:**
- Ve a Settings → Domains
- Agrega tu dominio `2laps.ai`
- Configura los DNS records según las instrucciones

**DNS Records requeridos:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 2. Analytics

**Google Analytics:**
1. Crea una propiedad en Google Analytics
2. Copia el Measurement ID (G-XXXXXXXXXX)
3. Agrega a `.env.production`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### 3. Email Form Integration

Para conectar el formulario de Early Access, puedes usar:

**Opción 1: Formspree**
```javascript
// En EarlyAccessModal.tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, company }),
});
```

**Opción 2: EmailJS**
```javascript
import emailjs from '@emailjs/browser';

emailjs.send(
  'service_id',
  'template_id',
  { name, email, company },
  'public_key'
);
```

**Opción 3: API Route propia**
Crear `src/app/api/early-access/route.ts`:
```typescript
export async function POST(request: Request) {
  const { name, email, company } = await request.json();
  // Enviar email o guardar en DB
  return Response.json({ success: true });
}
```

### 4. Monitoreo y Performance

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

En `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// En el body
<Analytics />
```

## Checklist Pre-Launch

- [ ] Actualizar meta tags con URLs finales
- [ ] Generar favicon y apple-touch-icon
- [ ] Crear og-image.png (1200x630px)
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Conectar formulario de Early Access
- [ ] Probar en móviles (Safari, Chrome)
- [ ] Probar en desktop (Chrome, Firefox, Safari)
- [ ] Verificar lighthouse score (>90 en todas las categorías)
- [ ] Configurar dominio custom
- [ ] Habilitar SSL/HTTPS
- [ ] Probar carga de fuentes
- [ ] Verificar animaciones en diferentes dispositivos

## Performance Tips

1. **Optimizar imágenes:**
   - Usa WebP para imágenes
   - Lazy loading para imágenes below the fold
   - Next.js Image component para optimización automática

2. **Reducir bundle size:**
   - Tree-shaking automático en producción
   - Dynamic imports para componentes pesados
   - Análisis con `npm run build` para ver bundle size

3. **Caching:**
   - Vercel configura cache automáticamente
   - Para otros hosts, configura cache headers apropiados

## Troubleshooting

**Error: "Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error en build de producción:**
```bash
npm run build
# Revisar errores de TypeScript o ESLint
```

**Fuentes no se cargan:**
- Verifica que Google Fonts esté accesible
- Considera self-hosting las fuentes para mejor performance

## Soporte

- Email: r@2laps.ai / s@2laps.ai
- Vercel Docs: https://nextjs.org/docs/deployment
- Next.js Docs: https://nextjs.org/docs
