/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#F4F6F5",
        "midnight-aw": "#121063",
        "custom-yellow": "#EBD96B",
        "custom-dark-yellow": "#E5C643",
        "custom-green": "#C1DCDC",
        "custom-blue": "#008ECC",
        "custom-blue-light": "#F3F9FB",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
