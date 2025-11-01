/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Tajawal', 'Cairo', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4ead1',
          300: '#eeddb5',
          400: '#e2c47d',
          500: '#d4a745',
          600: '#c89a3e',
          700: '#a68034',
          800: '#84662a',
          900: '#6c5322',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e6e1d7',
          300: '#d7cfbf',
          400: '#b9ab8f',
          500: '#9b875f',
          600: '#8c7a56',
          700: '#756548',
          800: '#5e513a',
          900: '#4d422f',
        },
        luxury: {
          black: '#0a0a0a',
          gold: '#d4a745',
          beige: '#f5f3ef',
          darkGold: '#a68034',
        }
      },
    },
  },
  plugins: [],
}