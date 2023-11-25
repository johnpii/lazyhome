/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      sm: { max: "576px" },
      // => @media (max-width: 576px) { ... }

      rd: { max: "768px" },
      // => @media (max-width: 960px) { ... }

      md: { max: "960px" },
      // => @media (max-width: 960px) { ... }

      jd: { max: "1040px" },
      // => @media (max-width: 960px) { ... }

      hd: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }
    },
  },
  plugins: [],
};
