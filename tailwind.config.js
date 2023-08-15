/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true, //Container Ortala
    },
    extend: {
      fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
        popins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto','sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: "class",
}
