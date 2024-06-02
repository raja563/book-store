/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // it is use for darkmode 
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}