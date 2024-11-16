/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monteserrat: ['Montserrat', 'sans-serif'],
        abel: ['Abel', 'sans-serif']
      },
      colors: {
        limeGreen : '#93B535'
      }
    },
  },
  plugins: [],
}