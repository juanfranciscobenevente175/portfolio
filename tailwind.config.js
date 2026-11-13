/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#000000',
          onyx: '#08080A',
          neonRed: '#FF1E44',
          neonRedBright: '#FF0033',
          crimson: '#D90429',
          crimsonDark: '#8B0000',
          darkCard: 'rgba(12, 10, 14, 0.75)',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-red': '0 0 25px -3px rgba(255, 30, 68, 0.55), 0 0 10px rgba(255, 30, 68, 0.35)',
        'neon-red-sm': '0 0 12px rgba(255, 30, 68, 0.45)',
        'neon-red-lg': '0 0 40px -5px rgba(255, 30, 68, 0.65)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-inner': 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.7)',
      },
      backdropBlur: {
        'glass': '16px',
        'glass-heavy': '24px',
      }
    },
  },
  plugins: [],
}
