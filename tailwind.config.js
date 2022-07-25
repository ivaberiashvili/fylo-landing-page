/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        raleway : ['Raleway'],
        opensans: ['Open Sans', 'sans-serif']
      },
      colors: {
        dark: 'rgba(7, 4, 59, 1)',
        light:'rgba(87, 89, 136, 1)',
        hover:'rgba(108, 155, 255, 1)',
        cobalt: 'rgba(47, 101, 248, 1)',
        cobalthover:'rgba(108, 155, 255, 1)',
        lime:'rgba(61, 160, 143, 1)',
        limehover:'rgba(113, 223, 204, 1)',
        rose: 'rgba(239, 72, 119, 1)',
      },
      boxShadow: {
        buttonShadow: '2px 3px 6px rgba(0, 0, 0, 0.15925)',
        cardShadow: '0px 0px 10px 5px rgba(56, 56, 56, 0.0458843)'
      },
    },
  },
  plugins: [],
}
