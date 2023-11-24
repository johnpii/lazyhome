/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
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
