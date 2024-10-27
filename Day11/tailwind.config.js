/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    fontFamily: {
      dancing: "var(--dancing)",
      lato: "var(--lato)",
      poppings: "var(--poppins)",
      inter: "var(--inter)",
    },
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      height: {
        0.75: "3px",
      },
      maxWidth: {
        inner: "1200px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
