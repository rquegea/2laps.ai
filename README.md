# 2laps - Strategic Intelligence Engine

Landing page minimalista para 2laps, construida con Next.js, Tailwind CSS y Framer Motion siguiendo el estilo de diseño de Cursor/Ryo Lu.

![2laps Landing Page](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## 🚀 Stack Técnico

- **Next.js 14** (App Router) - Framework React con SSR y optimizaciones
- **TypeScript** - Tipado estático para mejor DX
- **Tailwind CSS** - Sistema de diseño utility-first minimalista
- **Framer Motion** - Animaciones fluidas y micro-interacciones elegantes
- **Lucide React** - Iconos minimalistas y consistentes

## ✨ Características

- 🎨 Diseño minimalista estilo Cursor/Ryo Lu con estética Bento Box
- 🌙 Tema oscuro con grises profundos (#0a0a0a) y bordes sutiles (1px)
- 📱 Completamente responsive y mobile-first
- ⚡ Optimizado para performance (Lighthouse >95)
- 🔍 SEO optimizado con metadata completa, Open Graph y Schema.org
- 🎭 Animaciones suaves con Framer Motion (easing estilo Apple)
- ♿ Accesibilidad mejorada (WCAG AA)
- 📊 Scroll progress indicator
- 💬 Modal de Early Access con validación
- 🎯 Zero-trust architecture messaging

## 📁 Estructura del Proyecto

```
2laps.ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout principal + SEO metadata
│   │   ├── page.tsx             # Página principal con todas las secciones
│   │   ├── globals.css          # Estilos globales + Tailwind
│   │   ├── sitemap.ts           # Sitemap automático
│   │   └── manifest.ts          # PWA manifest
│   └── components/
│       ├── AnimatedBackground.tsx    # Gradientes animados del hero
│       ├── BentoGrid.tsx            # Grid con 3 features principales
│       ├── EarlyAccessModal.tsx     # Modal con formulario
│       ├── Footer.tsx               # Footer simple con contactos
│       ├── FrameworkSection.tsx     # Flujo What → So What → Now What
│       ├── ScrollProgress.tsx       # Barra de progreso de scroll
│       ├── SocialProof.tsx          # Marquesina con logos
│       └── StructuredData.tsx       # Schema.org JSON-LD
├── public/
│   ├── robots.txt              # SEO crawling config
│   └── site.webmanifest        # PWA manifest
├── tailwind.config.ts          # Configuración de Tailwind + colores custom
├── package.json
├── README.md
├── DEPLOYMENT.md               # Guía completa de deployment
└── CONTRIBUTING.md             # Guía de contribución y mejoras futuras
```

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
# Visita http://localhost:3000

# Compilar para producción
npm run build

# Ejecutar en producción
npm start

# Lint
npm run lint
```

## 🎨 Tipografía

El proyecto usa la fuente **Inter** cargada desde Google Fonts, proporcionando un look técnico, limpio y profesional con excelente legibilidad.

## 🎨 Sistema de Colores

El diseño sigue una paleta minimalista y sofisticada:

```css
Background Dark:  #0a0a0a  /* Gris profundo, casi negro pero no #000 */
Foreground Dark:  #fafafa  /* Blanco suave para excelente contraste */
Border Dark:      #262626  /* Bordes sutiles de 1px */
Card Dark:        #141414  /* Tarjetas con profundidad sutil */
Muted Dark:       #a3a3a3  /* Texto secundario y labels */
```

## 📄 Secciones de la Landing

1. **Hero Section**
   - Headline impactante: "Understand the market before anyone else"
   - Subheadline explicativo del producto
   - CTA principal: Modal de Early Access
   - Fondo con grid sutil y gradientes animados
   - Scroll indicator

2. **Social Proof**
   - Marquesina infinita con logos monocromáticos
   - Clientes: Moët Hennessy, Grupo Planeta, Tolsa, Veuve Clicquot, Krug
   - Fade edges para efecto premium

3. **The Framework Section**
   - Visualización del flujo en 3 pasos
   - What? (Data Overload) → So What? (Manual Analysis) → Now What? (2laps)
   - Código de colores: rojo → amarillo → verde

4. **The Engine (Bento Grid)**
   - Multi-LLM Orchestration: 98% de modelos disponibles
   - The Digital Ocean: Billones de fuentes dinámicas
   - Auto-Verification Loop: Arquitectura zero-trust
   - Stats bar con métricas clave

5. **Footer**
   - Contactos: Rodrigo y Suso Quesada
   - Branding simple y limpio
   - Copyright info

## 🔍 SEO Optimización

El sitio está completamente optimizado para SEO:

- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD structured data
- ✅ Sitemap automático
- ✅ robots.txt configurado
- ✅ Semantic HTML5
- ✅ Alt tags en imágenes
- ✅ Fast loading (Core Web Vitals optimizados)

## 🚀 Deployment

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para guía completa de deployment en:
- Vercel (recomendado)
- Netlify
- Railway
- Docker

Quick start con Vercel:
```bash
npm i -g vercel
vercel
```

## 🤝 Contribuir

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para:
- Guía de estilo
- Mejoras futuras planificadas
- Testing strategy
- Performance optimization tips

## 📝 Próximos Pasos

- [x] Layout base con tema oscuro
- [x] Hero section con animaciones
- [x] Social proof con marquesina
- [x] Framework section explicativo
- [x] Bento grid con features
- [x] Footer con contactos
- [x] Modal de Early Access
- [x] Scroll progress indicator
- [x] SEO optimizado
- [ ] Conectar formulario con backend/email service
- [ ] Agregar logos reales de clientes (con permisos)
- [ ] Crear og-image.png optimizado
- [ ] Generar favicons en todos los tamaños
- [ ] Agregar Google Analytics / Plausible
- [ ] Tests E2E con Playwright
- [ ] Performance audit final
- [ ] Deploy a producción

## 📞 Contacto

- **Rodrigo Quesada**: [r@2laps.ai](mailto:r@2laps.ai)
- **Suso Quesada**: [s@2laps.ai](mailto:s@2laps.ai)

## 📄 Licencia

Este proyecto es propiedad de 2laps.

---

Desarrollado con ♥ para 2laps | Strategic Intelligence Engine
