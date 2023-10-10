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
      colors: {
        gold: "#D2A637",
        grey: "#eaeaea",
      },
      screens: {
        break: { max: "900px" },
        min: "900px",
      },
      gridTemplateRows: {
        // Simple 8 row grid

        // Complex site-specific row configuration
        layout: "repeat(3, 300px)",
      },
    },
  },
  plugins: [],
}
