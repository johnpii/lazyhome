/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      sm: { max: "576px" },
      // => @media (min-width: 576px) { ... }

      md: { max: "960px" },
      // => @media (min-width: 960px) { ... }

      hd: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      lg: { max: "1440px" },
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
