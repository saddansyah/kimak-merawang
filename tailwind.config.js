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
        popup: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        }
      },
      animation: {
        wiggle: '1s wiggle ease-in-out infinite alternate forwards',
        popup: '0.6s popup ease-out'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}