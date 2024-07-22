/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bac: '#EDFBFF',
        colorH2:'#00252E',
        btn:'#FF52C1',
        des:'#808E9A',
        
      },
      lineHeight: {
        '15': '60px', 
      },
      maxWidth: {
        maxWidth: '1232px'
      },
      boxShadow: {
        custom_inner: 'inset 0 0 4px 2px rgb(0 0 0 / 0.05)', // Ombrage égal tout autour
      }
    },
  },
  plugins: [],
}

