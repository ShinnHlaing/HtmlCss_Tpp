/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      Poppins: "var(--heading-font)",
      roboto: "var(--default-font)",
      raleway: "var(--nav-font)",
      font_awesome: "var(--fa-font-solid)",
    },
    colors: {
      bgColor: "var( --background-color)",
      bgTrans: "var(--background-trans)",
      titleBorder: "var(--title-border)",
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
        custom: "calc(100vh - 114px)",
      },
      maxWidth: {
        inner: "1200px",
      },
      backgroundImage: {
        heroBg: "url('../img/hero-bg.jpg')",
        aboutImg: "url('./img/about.jpg')",
      },
    },
  },
  plugins: [],
};
