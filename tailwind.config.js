/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#4E6772',
        'redish':'#F07070',
        'gas':'#1B1957'
      }
    }
  },
  plugins: []
}