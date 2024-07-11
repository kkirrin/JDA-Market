/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#FFFFFF',
      'green': '#247500',
      'dark-green': '#0D2B00',
      'gray': '#DDDDDD',

    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'fontNokia': ['NokiaKokia', 'regular'],
      }
    }
  },
  plugins: [],
}

