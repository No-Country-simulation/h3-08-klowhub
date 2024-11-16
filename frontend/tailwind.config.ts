import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          100: '#dfd1f3',
          200: '#bfa3e7',
          300: '#9f74dc',
          400: '#9f74dc',
          500: '#632daf',
          600: '#532692',
          700: '#421e75',
          800: '#321758',
          900: '#210f3a'
        },
        'primary-b': {
          100: '#e8c9f1',
          200: '#d194e2',
          300: '#b95ed4',
          400: '#9d32bc',
          500: '#632daf',
          600: '#532692',
          700: '#421e75',
          800: '#321758',
          900: '#210f3a'
        },
        secondary: {
          100: '#c0d6fb',
          200: '#a1c2fa',
          300: '#81aef8',
          400: '#6299f6',
          500: '#4285F4',
          600: '#0E61EA',
          700: '#0a49b0',
          800: '#073075',
          900: '#03183B'
        },
        'secondary-b': {
          100: '#DFD1F3',
          200: '#BFA3E7',
          300: '#9F74DC',
          400: '#9F74DC',
          500: '#632DAF',
          600: '#532692',
          700: '#421E75',
          800: '#321758',
          900: '#210F3A'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        footer: 'linear-gradient(263.17deg, #201C2D 0.4%, #201D43 50.02%, #262136 99.65%)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config
