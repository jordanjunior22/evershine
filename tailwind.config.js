/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#636365',
        lightTeal: '#C2D4D6',
        goldenYellow: '#FFB400',
        coralRed: '#D9534F',
        mutedGreen: '#4D9B5A',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
