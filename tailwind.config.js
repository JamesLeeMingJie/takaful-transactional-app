const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html", "./js/**/*.js"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      primary: "#DA00FF",
      "font-primary": "#111111",
      "font-secondary": "#767676",
      active: "#20C6A8",
      inactive: "#F39200",
      "background-primary": "#F2F2F2",
      "background-secondary": "F7F7F7",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
