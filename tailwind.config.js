/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fels Wertburg AI brand palette
        primary: {
          DEFAULT: '#123B5D',
          deep: '#0B2C47',
        },
        secondary: {
          DEFAULT: '#1E6F8C',
          dark: '#14556E',
        },
        accent: {
          DEFAULT: '#29B6A8',
          dark: '#15877D',
        },
        canvas: '#F5F8FA',
        ink: '#102A43',
        steel: '#486581',
        muted: '#627D98',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Manrope',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 10px 30px -18px rgba(18, 59, 93, 0.25)',
        soft: '0 28px 70px -40px rgba(18, 59, 93, 0.35)',
        lift: '0 18px 40px -22px rgba(18, 59, 93, 0.35)',
        glow: '0 12px 36px -14px rgba(41, 182, 168, 0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
