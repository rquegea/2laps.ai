import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          light: '#ffffff',
          dark: '#fafafa',
        },
        foreground: {
          DEFAULT: '#0a0a0a',
          light: '#0a0a0a',
          dark: '#171717',
        },
        border: {
          DEFAULT: '#e5e5e5',
          light: '#e5e5e5',
          dark: '#d4d4d4',
        },
        card: {
          DEFAULT: '#fafafa',
          light: '#fafafa',
          dark: '#f5f5f5',
        },
        muted: {
          DEFAULT: '#737373',
          light: '#737373',
          dark: '#525252',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
