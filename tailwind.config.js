const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          "Roboto": ["Roboto", ...defaultTheme.fontFamily.sans],
          "Barlow Condensed": ["Barlow Condensed", ...defaultTheme.fontFamily.sans]
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
