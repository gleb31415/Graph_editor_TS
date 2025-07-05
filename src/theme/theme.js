import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gibson Regular';
    src: url('/fonts/Gibson Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gibson Book';
    src: url('/fonts/Gibson Book.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gibson Medium';
    src: url('/fonts/Gibson Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gibson Bold';
    src: url('/fonts/Gibson Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Gibson Book', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.foreground};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Gibson Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .gibson-regular {
    font-family: 'Gibson Regular', sans-serif;
  }

  .gibson-book {
    font-family: 'Gibson Book', sans-serif;
  }

  .gibson-medium {
    font-family: 'Gibson Medium', sans-serif;
  }

  .gibson-bold {
    font-family: 'Gibson Bold', sans-serif;
  }
`;

export const lightTheme = {
  colors: {
    background: "#ffffff",
    foreground: "#171717",
    grayRgb: "0, 0, 0",
    grayAlpha200: "rgba(0, 0, 0, 0.08)",
    grayAlpha100: "rgba(0, 0, 0, 0.05)",
    buttonPrimaryHover: "#383838",
    buttonSecondaryHover: "#f2f2f2",
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
    gibson: {
      regular: "'Gibson Regular', sans-serif",
      book: "'Gibson Book', sans-serif",
      medium: "'Gibson Medium', sans-serif",
      bold: "'Gibson Bold', sans-serif",
    },
  },
  nodes: {
    section: {
      математика: "#ff0000",
      термодинамика: "#ffa500",
      механика: "#800080",
      оптика: "#ffff00",
      электромагнетизм: "#0000ff",
    },
    grade: {
      7: "50%",
      8: "60%",
      9: "70%",
      10: "80%",
      11: "90%",
      beyond: "100%",
    },
  },
};

export const darkTheme = {
  colors: {
    background: "#0a0a0a",
    foreground: "#ededed",
    grayRgb: "255, 255, 255",
    grayAlpha200: "rgba(255, 255, 255, 0.145)",
    grayAlpha100: "rgba(255, 255, 255, 0.06)",
    buttonPrimaryHover: "#ccc",
    buttonSecondaryHover: "#1a1a1a",
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
    gibson: {
      regular: "'Gibson Regular', sans-serif",
      book: "'Gibson Book', sans-serif",
      medium: "'Gibson Medium', sans-serif",
      bold: "'Gibson Bold', sans-serif",
    },
  },
  nodes: {
    section: {
      математика: "#ff0000",
      термодинамика: "#ffa500",
      механика: "#800080",
      оптика: "#ffff00",
      электромагнетизм: "#0000ff",
    },
    grade: {
      7: "50%",
      8: "60%",
      9: "70%",
      10: "80%",
      11: "90%",
      beyond: "100%",
    },
  },
};
