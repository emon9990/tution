/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily:{
         bn:['Noto Sans Bengali', 'sans-serif'],
         lg:['Lexend', 'sans-serif'],
         ru:['Rubik', 'sans-serif'],
         rb:['Roboto', 'sans-serif'],
         in:['Inter', 'sans-serif'],
      },

      maxWidth:{
        container: "1200px"
      },
    },
  },
  plugins: [],
}
