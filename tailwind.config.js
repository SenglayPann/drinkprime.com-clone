/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pure-white': '#fff',
        'pure-black': '#000',
        'soft-gray1': '#1C1B1B',
        'soft-gray2': '#828282',
        'soft-red': '#d24545',
      },
      backgroundColor: {
        'pure-white': '#fff',
        'pure-black': '#000',
        'soft-gray1': '#1C1B1B',
        'soft-gray2': '#828282',
        'soft-red': '#d24545',
      },
      borderColor: {
        'pure-white': '#fff',
        'pure-black': '#000',
        'soft-gray1': '#1C1B1B',
        'soft-gray2': '#828282',
        'soft-red': '#d24545',
      },
      textColor: {
        'pure-white': '#fff',
        'pure-black': '#000',
        'soft-gray1': '#1C1B1B',
        'soft-gray2': '#828282',
        'soft-red': '#d24545',
      },
      fontFamily: {
        'normalidad' : ['Normalidad', 'Roboto', 'sans-serif'],
        'normalidadWide' : ['NormalidadWide', 'Roboto', 'sans-serif'],
        'normalidadExteded' : ['NormalidadExtended', 'Roboto', 'sans-serif'],
        'normalidadCompact' : ['NormalidadCompact', 'Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      },
      screens: {
        'tab': '798px',
        'des': '1400px',
      },
    },
  },
  plugins: [],
}