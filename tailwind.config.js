module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '1/3': '33.33%',
      '1/4': '25%',
      '1/5': '20%',
      '3/4': '75%',
      'full': '100%'
    }
  },
  variants: {
    extend: {
      transform: ['hover', 'focus']
    },
  },
  plugins: [],
}
