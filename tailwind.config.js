module.exports = {
  mode: "jit",
  purge: [
    '*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      "rob": ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
