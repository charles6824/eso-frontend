/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primaryColor: "#ADDf88",
        textWhite: "#ffffff",
        lightgreen: {
          100: "rgba(173, 223, 136, 0.05)",
          200: "rgba(173, 223, 136, 0.02)",
          300: "rgba(173, 223, 136, 0.25)",
          400: "rgba(173, 223, 136, 0.1)",
        },
        black: "#000",
        darkolivegreen: {
          100: "#316541",
          200: "rgba(49, 101, 65, 0.25)",
        },
        gray: "#181818",
        gainsboro: "#ddd",
        "success-light": "rgba(255, 255, 255, 0.5)",
        "success-default": "#3cc13b",
        "primary-default": "#3e66fb",
      },
      fontFamily: {
        inter: "Inter",
        "caption-heavy": "'Open Sans'",
      },
    },
  },
  plugins: [],
}

