/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      primary: "#DA00FF",
      "font-primary": "#111111",
      "font-secondary": "#767676",
      active: "#20C6A8",
      inactive: "#F39200",
      "background-primary": "#F2F2F2",
      "background-secondary": "F7F7F7",
      "secondary-gray": "#D8D8D8",
    },
    
    screens: {
      xs: "320px",
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
