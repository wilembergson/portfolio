/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'principal': ['Poiret One', 'sans-serif']
    },
    extend: {
      height: {
        '100': '100vh'
      },
      colors: {
        'footer':'#1B0A2A'
      }
    },
  },
  plugins: [],
}
