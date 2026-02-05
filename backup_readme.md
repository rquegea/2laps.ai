# Componentes 2DAY - Simulación de Plataforma

Esta carpeta contiene los componentes especializados para la simulación de la plataforma "2DAY" mostrada en la página principal.

## Componentes

### TickerBar.tsx
**Ticker Infinito Estilo Bloomberg**

Características:
- Desplazamiento horizontal infinito y fluido usando la animación `marquee` de Tailwind
- Se pausa automáticamente al hacer hover (`hover:[animation-play-state:paused]`)
- Muestra datos de mercado en tiempo real con cambios porcentuales coloreados
- Duplicación del contenido para crear un efecto de loop sin interrupciones

### VisibilityChart.tsx
**Gráficos de Visibilidad con Interacción**

Características:
- Grid 2x2 de gráficos de líneas SVG con áreas rellenas
- **Tooltips interactivos**: Al hacer hover sobre un gráfico, aparece un tooltip con:
  - Valor actual
  - Periodo seleccionado
  - Cambio porcentual
- **Selector de periodo**: Botones para cambiar entre 1, 3 y 7 días
- **Transiciones CSS suaves**: Los gráficos reaccionan visualmente al cambio de periodo
- Ring de resaltado al hacer hover
- Animaciones fade-in y zoom-in para los tooltips
- Fuente Switzer aplicada a todos los textos

### NewsGrid.tsx
**Grid de Noticias Secundarias**

Características:
- Grid responsivo de 3 columnas (1 en móvil)
- **Fuente Switzer obligatoria** aplicada mediante `font-['Switzer']`
- **Favicons de fuentes**: Cada tarjeta muestra el nombre de la fuente con su favicon
- Efectos hover mejorados: shadow-lg y scale
- Indicadores de sentimiento (🟢 positivo, 🔴 negativo, 🟡 neutral)
- Transiciones suaves en todas las interacciones

## Configuración de Tailwind

La animación `marquee` está configurada en `tailwind.config.ts`:

```typescript
animation: {
  'marquee': 'marquee 30s linear infinite',
  'in': 'in 0.2s ease-out',
  'fade-in': 'fade-in 0.2s ease-out',
  'zoom-in': 'zoom-in 0.2s ease-out',
},
keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' },
  },
  // ... otras animaciones
}
```

## Uso

Estos componentes son importados y utilizados en `TwoDayContent.tsx`:

```tsx
import { TickerBar } from './2day/TickerBar';
import { VisibilityChart } from './2day/VisibilityChart';
import { NewsGrid } from './2day/NewsGrid';
```

## Estilo Visual

Todos los componentes siguen el diseño minimalista y profesional de la plataforma 2laps:

- Paleta de colores neutral (grises, blancos)
- Acentos en verde (#22c55e) para positivo y rojo (#ef4444) para negativo
- Bordes sutiles y sombras ligeras
- Transiciones suaves en todas las interacciones
- Fuente Switzer para consistencia visual
