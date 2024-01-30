/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black" : "#1E2832",
        "primary" : "#1e28320d"
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
        
        },  
    },
  },
  plugins: [],
} 