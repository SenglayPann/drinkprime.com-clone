/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{html,js}", "./component/**/*.js"],
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
        't-tab' : '1400px',
        'ttab' : '1448px',
        'des': '1400px',
      },
      textStroke: {
        0.2: '0.2px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        'none': '0px',
        'sm': '.3px',
        'md': '.5px',
        'lg': '.8px',
        'semibold' : '1.2px'

      },
      textStrokeColor: {
        'pure-white': '#fff',
        'pure-black': '#000',
        'soft-gray1': '#1C1B1B',
        'soft-gray2': '#828282',
        'soft-red': '#d24545',
      },
    },
  },
  variants: {
    textStroke: ['responsive', 'hover', 'focus'],
    textStrokeColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const textStrokeWidth = theme('textStroke');
      const textStrokeColor = theme('textStrokeColor');

      const textStrokeUtilities = Object.entries(textStrokeWidth).map(([key, value]) => {
        return {
          [`.${e(`text-stroke-${key}`)}`]: {
            '-webkit-text-stroke-width': value,
          },
        };
      });

      const textStrokeColorUtilities = Object.entries(textStrokeColor).map(([key, value]) => {
        return {
          [`.${e(`text-stroke-color-${key}`)}`]: {
            '-webkit-text-stroke-color': value,
          },
        };
      });

      addUtilities(textStrokeUtilities, ['responsive', 'hover']);
      addUtilities(textStrokeColorUtilities, ['responsive', 'hover']);
    },
  ],
}