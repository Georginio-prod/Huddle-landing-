/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bac: '#EDFBFF',
        colorH2:'#00252E',
        btn:'#FF52C1'
      },
      lineHeight: {
        '15': '60px', 
      },
    },
  },
  plugins: [],
}

