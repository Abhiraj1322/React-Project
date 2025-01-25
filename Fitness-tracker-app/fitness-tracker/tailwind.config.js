/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','san-serif'],
          customGreen: '#28A745',
      },
    },
  },
  plugins: [],
}