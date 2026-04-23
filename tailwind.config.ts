import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0B',
          light: '#ffffff',
          dark: '#0A0A0B',
        },
        foreground: {
          DEFAULT: '#F2F2F2',
          light: '#0a0a0a',
          dark: '#F2F2F2',
        },
        border: {
          DEFAULT: '#222225',
          light: '#e5e5e5',
          dark: '#222225',
        },
        card: {
          DEFAULT: '#111113',
          light: '#fafafa',
          dark: '#111113',
        },
        'card-hover': '#1A1A1D',
        muted: {
          DEFAULT: '#888888',
          light: '#737373',
          dark: '#888888',
        },
        accent: {
          red: '#C23B4C',
          blue: '#3B82F6',
          amber: '#F59E0B',
          green: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Switzer', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'in': 'in 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'zoom-in': 'zoom-in 0.2s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        in: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
