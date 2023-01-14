/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'OpenSans': ["OpenSans", "Sans-serif"]
      },
      backgroundImage: {
        'sol': "url('./assets/Sol_de_Mayo-Bandera_de_Uruguay.svg')",
      },
      screens: {
        'xs': {'max': '350px'}
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
