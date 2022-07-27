/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B5DE5',
        secondary: {
          100: '#351E29',
          200: '#53DD6C',
          300: '#55828B'
        }
      },
    },
  },
  plugins: [],
}
