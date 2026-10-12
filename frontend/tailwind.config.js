/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102B46',
          50: '#E8EEF4',
          100: '#D1DDE9',
          200: '#A3BBD3',
          300: '#7599BD',
          400: '#4777A7',
          500: '#102B46',
          600: '#0D2338',
          700: '#0A1B2B',
          800: '#06121D',
          900: '#030910',
        },
        emerald: {
          DEFAULT: '#087F62',
          50: '#E6F5F1',
          100: '#CDEBE3',
          200: '#9BD7C7',
          300: '#69C3AB',
          400: '#37AF8F',
          500: '#087F62',
          600: '#06664E',
          700: '#054C3B',
          800: '#033327',
          900: '#021914',
        },
        copper: {
          DEFAULT: '#B8734B',
          50: '#F8F0EB',
          100: '#F1E1D7',
          200: '#E3C3AF',
          300: '#D5A587',
          400: '#C7875F',
          500: '#B8734B',
          600: '#935C3C',
          700: '#6E452D',
          800: '#4A2E1E',
          900: '#25170F',
        },
        mist: '#F6F8F7',
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(16, 43, 70, 0.35)',
        card: '0 12px 40px -20px rgba(16, 43, 70, 0.25)',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(8,127,98,0.18), transparent), radial-gradient(ellipse 70% 50% at 85% 15%, rgba(184,115,75,0.16), transparent), radial-gradient(ellipse 60% 40% at 70% 80%, rgba(16,43,70,0.12), transparent)',
        'section-fade':
          'linear-gradient(180deg, #F6F8F7 0%, #FFFFFF 45%, #F6F8F7 100%)',
      },
    },
  },
  plugins: [],
};
