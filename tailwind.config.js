/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.jsx", "./src/main.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'Space-Grotesk': ['Space-Grotesk'],
      },
      colors: {
        'gebum-violet': '#9756C4',
        'gebum-gold': '#E8D57B',
        'gebum-white': '#E3E3E1',
        'gebum-skyblue': '#85F9FB',
        'gebum-gray': '#CBCCC9'
      }
    },
  },

  plugins: [],
}

