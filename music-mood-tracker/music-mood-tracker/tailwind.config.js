/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:"#FFFAEC",
        nowplaying:"F5ECD5"
      }
    },
  },
  plugins: [],
}