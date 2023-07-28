/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-15%)'
          },
        },
      },
      animation: {
        wiggle: '1s wiggle ease-in-out infinite alternate forwards'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}