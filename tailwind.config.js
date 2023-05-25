/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{js,ts,jsx,tsx,php}",
  ],
  theme: {
    extend: {
      colors: {
        'background':'#1C1B1F',
        'primary':'#D0BCFF',
        'on-primary':'#381E72',
        'prim-container':'#4F378B',
        'on-prim-container':'#EADDFF',
      }
    },
  },
  plugins: [],
}