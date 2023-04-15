/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: "#ADA0A6",
        },
        timberwolf_dark: {
          DEFAULT: "#D2CBCB",
        },
        timberwolf_light: {
          DEFAULT: "#DED6D6",
        },
        lavender: {
          DEFAULT: "#F9E7E7",
        },
      },
    },
    // fontFamily: {
    //   signature: ["Caveat", "cursive"],
    // },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");
