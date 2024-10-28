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
    colors: {
      black: "var(--black)",
      white: "var(--white)",
      orange: "var(--orange)",
      gray: "var(--gray)",
      blue: "var(--blue)",
    },
    container: {
      center: true,
      // padding: "5px",
    },
    extend: {
      height: {
        custom: "calc(100vh - 64px)",
      },
      maxWidth: {
        inner: "1200px",
      },
    },
  },
  plugins: [],
};
