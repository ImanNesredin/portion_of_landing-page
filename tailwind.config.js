/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    screens: {
      sm: '424px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightGray: 'rgb(162, 153, 145)'
      },
      fontFamily: {
        clarkson: ['Clarkson', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

