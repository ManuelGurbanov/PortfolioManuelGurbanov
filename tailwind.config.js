/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '70vw',
      },
      colors: {
        'mycolors': {
          'bg': '#0F172A',
          'sutilbg': '#0F1742',
          1: '#0A3A40',
          2: '#0ea5e9',
          'ring' : '#0F2F49',
        },
      }
    },
  },

  plugins: [],
}

