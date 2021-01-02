const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    container: {
      center: true
    },
    fontSize:{
      "4xl": "3.40rem",
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}
