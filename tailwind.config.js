/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      darkMode: "class",
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
