/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge the unused styles in production
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

