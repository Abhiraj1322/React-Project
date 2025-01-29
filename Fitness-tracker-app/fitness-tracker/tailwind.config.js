/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {  
        customWhite: '#121212',
        customGrey:'#E0E0E0'
      },
    },
  },
  plugins: [],
};