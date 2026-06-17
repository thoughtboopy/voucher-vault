import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',   // Alabaster / Warm White - Canvas Background
          100: '#F5F2EB',  // Soft Cream / Silk - Card Front
          200: '#EAE5DA',  // Warm Oatmeal - Card Back
          300: '#D4CFC4',  // Muted Champagne
          400: '#A39A81',  // Warm Taupe
        },
        charcoal: {
          DEFAULT: '#2C2A29',  // Espresso Charcoal - Primary Typography
          light: '#4A4745',    // Light Charcoal
          dark: '#1A1918',     // Dark Charcoal
        },
        gold: {
          DEFAULT: '#D4AF37',  // Muted Champagne Gold - Accents
          light: '#E5C760',    // Light Gold
          dark: '#B8962E',     // Dark Gold
        },
        // Earth-tone palette
        terracotta: '#C4784A',
        sage: '#A8B89C',
        warmbrown: '#8B7355',
        dustyrose: '#C9A9A6',
        forest: '#7D8471',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(44, 42, 41, 0.08)',
        'card-hover': '0 8px 30px rgba(44, 42, 41, 0.12)',
        'gold': '0 2px 10px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'flip': 'flip 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
        'visible': 'visible',
      },
    },
  },
  plugins: [],
}

export default config
