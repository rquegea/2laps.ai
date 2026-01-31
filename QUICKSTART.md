# Quick Start Guide - 2laps Landing Page

Esta guía te ayudará a poner en marcha el proyecto en menos de 5 minutos.

## Prerequisites

Asegúrate de tener instalado:

- **Node.js** 18.x o superior ([descargar aquí](https://nodejs.org))
- **npm** 9.x o superior (viene con Node.js)
- Un editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

## Instalación Rápida

```bash
# 1. Navega al directorio del proyecto
cd 2laps.ai

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

¡Listo! Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura Visual de la Landing

La landing page se compone de estas secciones (en orden):

```
┌─────────────────────────────────────┐
│         SCROLL PROGRESS BAR         │ ← Barra de progreso fija arriba
├─────────────────────────────────────┤
│                                     │
│          HERO SECTION               │ ← "Understand the market..."
│     (con fondo animado + grid)      │
│          [CTA Button]               │
│                                     │
├─────────────────────────────────────┤
│        SOCIAL PROOF                 │ ← Marquesina con logos
├─────────────────────────────────────┤
│                                     │
│     THE FRAMEWORK SECTION           │ ← What → So What → Now What
│                                     │
├─────────────────────────────────────┤
│                                     │
│     THE ENGINE (Bento Grid)         │ ← 3 tarjetas de features
│                                     │
├─────────────────────────────────────┤
│           FOOTER                    │ ← Contactos
└─────────────────────────────────────┘
```

## Primer Deploy (Vercel)

La forma más rápida de hacer deploy:

```bash
# 1. Instala Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Sigue las instrucciones interactivas
# - Login con GitHub/GitLab/Bitbucket
# - Confirma el proyecto
# - Acepta la configuración detectada automáticamente
```

Tu sitio estará live en ~60 segundos en una URL tipo `your-project.vercel.app`

## Personalización Rápida

### 1. Cambiar el contenido del Hero

Edita `src/app/page.tsx`:

```typescript
<h1 className="...">
  Tu nuevo headline aquí
  <br />
  <span className="text-muted-dark">subtítulo aquí</span>
</h1>
```

### 2. Modificar los logos de clientes

Edita `src/components/SocialProof.tsx`:

```typescript
const logos = [
  'Tu Cliente 1',
  'Tu Cliente 2',
  'Tu Cliente 3',
  // ... más logos
];
```

### 3. Cambiar los colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  background: {
    dark: '#0a0a0a', // Cambia este color
  },
  // ... otros colores
}
```

### 4. Actualizar información de contacto

Edita `src/components/Footer.tsx`:

```typescript
<a href="mailto:tu-email@ejemplo.com">
  <span>Tu Nombre</span>
  <span>tu-email@ejemplo.com</span>
</a>
```

## Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor en http://localhost:3000

# Build
npm run build           # Crea build de producción
npm start               # Ejecuta el build de producción

# Linting
npm run lint            # Revisa errores de código

# Type checking
npx tsc --noEmit        # Verifica errores de TypeScript
```

## Estructura de Carpetas Importantes

```
src/
├── app/
│   ├── page.tsx        ← AQUÍ está la página principal
│   └── layout.tsx      ← AQUÍ están los meta tags SEO
└── components/
    ├── Hero elements
    ├── SocialProof.tsx ← AQUÍ están los logos
    ├── BentoGrid.tsx   ← AQUÍ están las 3 features
    └── Footer.tsx      ← AQUÍ están los contactos
```

## Resolver Problemas Comunes

### Error: "Module not found"

```bash
# Limpia e reinstala
rm -rf node_modules package-lock.json
npm install
```

### El puerto 3000 está en uso

```bash
# Usa otro puerto
PORT=3001 npm run dev
```

### Cambios no se reflejan

```bash
# Ctrl+C para detener el servidor
# Luego reinicia:
npm run dev
```

### Error de TypeScript

```bash
# Revisa todos los errores
npx tsc --noEmit

# El build también mostrará errores
npm run build
```

## Siguientes Pasos

1. ✅ Personaliza el contenido (headlines, logos, features)
2. ✅ Reemplaza los colores si es necesario
3. ✅ Agrega tus logos de clientes reales
4. ✅ Crea un `og-image.png` para redes sociales (1200x630px)
5. ✅ Genera favicons ([realfavicongenerator.net](https://realfavicongenerator.net))
6. ✅ Configura el formulario de Early Access (ver DEPLOYMENT.md)
7. ✅ Agrega Google Analytics (ver CONTRIBUTING.md)
8. ✅ Haz deploy a producción

## Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guía completa de deployment
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Mejoras futuras y guía de estilo

## Soporte

¿Necesitas ayuda?

- Email: r@2laps.ai / s@2laps.ai
- Issues: Crea un issue en el repositorio
- Docs: Lee DEPLOYMENT.md y CONTRIBUTING.md

---

¡Disfruta construyendo con 2laps! 🚀
