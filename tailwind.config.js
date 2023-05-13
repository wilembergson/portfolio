/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'cover': ['Poiret One', 'sans-serif']
    },
    extend: {
      height: {
        '100': '100vh'
      }
    },
  },
  plugins: [],
}
