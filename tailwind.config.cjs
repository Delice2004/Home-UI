/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A57E8',
        info: '#08B1BA',
        pagebg: '#F5F6FA'
      },
      borderRadius: {
        card: '10px'
      }
    }
  },
  plugins: []
}
