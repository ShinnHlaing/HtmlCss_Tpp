/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      Poppins: "var(--heading-font)",
      roboto: "var(--default-font)",
      raleway: "var(--nav-font)",
    },
    colors: {
      bgColor: "var( --background-color)",
      defaultColor: "var(--default-color)",
      headingColor: "var(--heading-color)",
      accentColor: "var(--accent-color)",
      surfaceColor: "var(--surface-color)",
      contrastColor: "var(--contrast-color)",
      navColor: "var(--nav-color)",
      navHoverColor: "var(--nav-hover-color)",
      navMobileBgColor: "var(--nav-mobile-background-color)",
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
      backgroundImage: {
        heroBg: "url('./public/assets/img/hero-bg.jpg')",
        aboutImg: "url('./public/assets/img/about.jpg')",
      },
    },
  },
  plugins: [],
};
