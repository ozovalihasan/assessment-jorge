/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'custom': ['Nunito Sans', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}