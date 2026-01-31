# Contributing & Future Enhancements

## Arquitectura del Proyecto

```
2laps.ai/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Layout principal + SEO
│   │   ├── page.tsx             # Página principal
│   │   ├── globals.css          # Estilos globales
│   │   └── sitemap.ts           # Sitemap automático
│   ├── components/              # Componentes React
│   │   ├── AnimatedBackground.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── EarlyAccessModal.tsx
│   │   ├── Footer.tsx
│   │   ├── FrameworkSection.tsx
│   │   ├── SocialProof.tsx
│   │   └── StructuredData.tsx
│   └── lib/                     # Utilidades (futuro)
├── public/                      # Assets estáticos
└── tailwind.config.ts          # Configuración de Tailwind
```

## Guía de Estilo

### Componentes

- Usar `'use client'` solo cuando sea necesario (interactividad)
- Preferir Server Components cuando sea posible
- Componentes pequeños y enfocados (single responsibility)
- TypeScript estricto

### Animaciones

- Usar Framer Motion para todas las animaciones
- Easing preferido: `[0.16, 1, 0.3, 1]` (Apple-style)
- Duración típica: 0.6s - 0.8s
- Evitar animaciones en mobile si afectan performance

### Colores

```typescript
// Usar las clases de Tailwind definidas
bg-background-dark    // #0a0a0a
text-foreground-dark  // #fafafa
border-border-dark    // #262626
bg-card-dark          // #141414
text-muted-dark       // #a3a3a3
```

### Espaciado

```typescript
// Escala consistente
gap-6   // 1.5rem
gap-8   // 2rem
py-16   // 4rem
py-24   // 6rem
py-32   // 8rem
```

## Mejoras Futuras

### Corto Plazo (1-2 semanas)

- [ ] **Blog/Resources Section**
  - Crear `/blog` con artículos sobre Strategic Intelligence
  - Usar MDX para contenido
  - Sistema de tags y categorías

- [ ] **Case Studies**
  - Página dedicada a casos de éxito
  - Animaciones de scroll más elaboradas
  - Testimonios de clientes

- [ ] **Integración Email Marketing**
  - Conectar con Mailchimp/ConvertKit
  - Segmentación de audiencia
  - Automated welcome sequence

- [ ] **Analytics Dashboard**
  - Integrar Plausible o Fathom (privacy-friendly)
  - Custom events tracking
  - Conversion funnel tracking

### Medio Plazo (1-2 meses)

- [ ] **Interactive Demo**
  - Demo interactivo del producto
  - Ejemplos reales de análisis
  - Sandbox environment

- [ ] **Pricing Page**
  - Diferentes tiers
  - Calculadora de ROI
  - Comparación de planes

- [ ] **Documentation Hub**
  - Guías de uso
  - API documentation
  - Video tutorials

- [ ] **Multi-idioma (i18n)**
  - Español
  - Francés (Moët Hennessy, Veuve Clicquot)
  - next-intl integration

### Largo Plazo (3+ meses)

- [ ] **Customer Portal**
  - Dashboard de clientes
  - Real-time intelligence feeds
  - Custom reports generation

- [ ] **API Playground**
  - Probar la API en vivo
  - Code snippets en múltiples lenguajes
  - Postman collection

- [ ] **Community Forum**
  - Discord integration
  - Q&A section
  - User-generated content

- [ ] **Webinar Platform**
  - Live demos
  - Q&A sessions
  - Recording library

## Performance Optimization

### Current Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimizaciones Pendientes

1. **Image Optimization**
   ```typescript
   // Usar Next.js Image component
   import Image from 'next/image';
   
   <Image
     src="/logo.png"
     alt="Client Logo"
     width={200}
     height={100}
     loading="lazy"
   />
   ```

2. **Font Optimization**
   ```typescript
   // Considerar self-hosting fonts
   // Usar font-display: swap
   // Preload critical fonts
   ```

3. **Code Splitting**
   ```typescript
   // Dynamic imports para componentes pesados
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <Skeleton />,
     ssr: false,
   });
   ```

4. **Bundle Analysis**
   ```bash
   # Instalar
   npm install @next/bundle-analyzer
   
   # Analizar
   ANALYZE=true npm run build
   ```

## Testing Strategy

### Unit Tests (Jest + Testing Library)

```typescript
// components/__tests__/EarlyAccessModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { EarlyAccessModal } from '../EarlyAccessModal';

test('opens modal on button click', () => {
  render(<EarlyAccessModal />);
  const button = screen.getByText('Request Early Access');
  fireEvent.click(button);
  expect(screen.getByText('Join the waitlist')).toBeInTheDocument();
});
```

### E2E Tests (Playwright)

```typescript
// tests/e2e/landing.spec.ts
import { test, expect } from '@playwright/test';

test('hero CTA opens modal', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Request Early Access');
  await expect(page.locator('text=Join the waitlist')).toBeVisible();
});
```

### Visual Regression (Chromatic)

```bash
# Setup
npm install --save-dev chromatic

# Run
npx chromatic --project-token=YOUR_TOKEN
```

## A/B Testing

### Variant Testing Areas

1. **Hero Headlines**
   - Current: "Understand the market before anyone else"
   - Variant A: "Strategic Intelligence on Autopilot"
   - Variant B: "From Data Chaos to Strategic Clarity"

2. **CTA Copy**
   - Current: "Request Early Access"
   - Variant A: "Get Early Access"
   - Variant B: "Join the Waitlist"

3. **Color Schemes**
   - Test different accent colors
   - Purple vs Blue vs Green gradients

### Implementation

```typescript
// Usar Vercel Edge Config + Middleware
import { get } from '@vercel/edge-config';

export async function middleware(request: NextRequest) {
  const variant = await get('hero_variant') || 'control';
  // Render different variant
}
```

## Accessibility

### Checklist

- [x] Semantic HTML
- [x] ARIA labels donde necesario
- [x] Keyboard navigation
- [x] Focus indicators
- [ ] Screen reader testing
- [ ] Color contrast checks (WCAG AA)
- [ ] Reduced motion support

### Reduced Motion

```typescript
// Respetar preferencias del usuario
const shouldReduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div
  animate={shouldReduceMotion ? {} : { y: 20 }}
/>
```

## Monitoring & Observability

### Error Tracking (Sentry)

```typescript
// sentry.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### Real User Monitoring

- Vercel Analytics
- Google Core Web Vitals
- Custom performance marks

```typescript
performance.mark('hero-loaded');
performance.measure('hero-load-time', 'navigationStart', 'hero-loaded');
```

## Security

### Best Practices

- [x] HTTPS only
- [x] CSP headers
- [x] No sensitive data in client
- [ ] Rate limiting on forms
- [ ] CAPTCHA on signup (if needed)

### Rate Limiting

```typescript
// app/api/early-access/route.ts
import { Ratelimit } from '@upstash/ratelimit';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 h'),
});
```

## Contributing

1. Fork el repo
2. Crea una branch (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la branch (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### PR Guidelines

- Descripción clara del cambio
- Screenshots para cambios visuales
- Tests actualizados
- Lighthouse score mantenido
- No breaking changes sin discusión previa

---

Para dudas o sugerencias: r@2laps.ai / s@2laps.ai
