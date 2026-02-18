/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B9080",    
        secondary: "#354F52",  
        light: "#F6F4F1",      
        accent: "#CCE3DE",     
        dark: "#2F3E46",       
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], 
        sans: ['"Inter"', 'sans-serif'],        
      }
    },
  },
  plugins: [],
}