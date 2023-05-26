/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{js,ts,jsx,tsx,php}",
  ],
  theme: {
    extend: {
      colors: {
        'background':'#1C1B1F',
        'on-background': '#E6E1E5',
        'primary':'#D0BCFF',
        'on-primary':'#381E72',
        'prim-container':'#4F378B',
        'on-prim-container':'#EADDFF',
        'secondary': '#CCC2DC',
        'on-secondary': '#332D41',
        'secondary-container': '#4A4458',
        'on-secondary-container': '#E8DEF8',,
        'sec-container':'#4A4458'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}