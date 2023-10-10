/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "6vw": "6vw",
        "13vw": "13vw",
        "10vw": "10vw",
      },
    },
  },
  plugins: [],
}
