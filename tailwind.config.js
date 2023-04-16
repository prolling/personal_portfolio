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
        light_gray: {
          DEFAULT: "#eaeaea",
        },
        light_blue: {
          DEFAULT: "#b8c9dc",
        },
        light_brown: {
          DEFAULT: "#e8dcc7",
        },
        sage_green: {
          DEFAULT: "#8FB69C",
        },
        dusty_blue: {
          DEFAULT: "#6D9DBF",
        },
        muted_mustard: {
          DEFAULT: "#D5B982",
        },
        dark_gray: {
          DEFAULT: "#4A4A4A",
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
