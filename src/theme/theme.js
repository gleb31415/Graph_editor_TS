import { createGlobalStyle } from "styled-components";

// Design system color primitives
export const colors = {
  abbey: {
    50: "#f5f6f6",
    100: "#e5e7e8",
    200: "#ced1d3",
    300: "#acb0b4",
    400: "#82878e",
    500: "#676c73",
    600: "#585c62",
    700: "#4e5156",
    800: "#424448",
    900: "#3a3c3f",
    950: "#242528",
  },
  red: {
    50: "#fef3f2",
    100: "#fce9e7",
    200: "#f9d2d2",
    300: "#f4adad",
    400: "#ec8081",
    500: "#e15258",
    600: "#d24652",
    700: "#ac2433",
    800: "#902131",
    900: "#7c1f30",
    950: "#450c14",
  },
  yellow: {
    50: "#fefce8",
    100: "#fef8c3",
    200: "#fdee8b",
    300: "#fcdd48",
    400: "#f9c816",
    500: "#e9af09",
    600: "#c98705",
    700: "#a06008",
    800: "#844b0f",
    900: "#713e12",
    950: "#421f06",
  },
  green: {
    50: "#f1f8f4",
    100: "#dcefe3",
    200: "#bcdeca",
    300: "#90c5aa",
    400: "#60a785",
    500: "#3f8a69",
    600: "#2d6d52",
    700: "#245843",
    800: "#1f4637",
    900: "#1a3a2e",
    950: "#0e201a",
  },
  orange: {
    50: "#fdf4ef",
    100: "#fbe5d9",
    200: "#f7c7b1",
    300: "#f1a280",
    400: "#e9673e",
    500: "#e64f29",
    600: "#d7371f",
    700: "#b2281c",
    800: "#8e221e",
    900: "#731e1b",
    950: "#3e0c0c",
  },
  blue: {
    50: "#f3f6fc",
    100: "#e5edf9",
    200: "#c6daf1",
    300: "#93bce6",
    400: "#5a9ad6",
    500: "#347ec3",
    600: "#2462a5",
    700: "#1f4f85",
    800: "#1d446f",
    900: "#1d3a5d",
    950: "#13253e",
  },
};

export const lightTheme = {
  colors: {
    background: "#ffffff",
    foreground: "#171717",
    grayRgb: "0, 0, 0",
    grayAlpha200: "rgba(0, 0, 0, 0.08)",
    grayAlpha100: "rgba(0, 0, 0, 0.05)",
    buttonPrimaryHover: "#383838",
    buttonSecondaryHover: "#f2f2f2",
    ...colors,
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
    helvetica: {
      regular: "'Helvetica', Arial, sans-serif",
      roman: "'Helvetica', Arial, sans-serif",
      medium: "'Helvetica Medium', Arial, sans-serif",
      bold: "'Helvetica Bold', Arial, sans-serif",
    },
  },
  nodes: {
    section: {
      математика: colors.red[200],
      термодинамика: colors.orange[200],
      механика: colors.green[200],
      оптика: colors.yellow[200],
      электромагнетизм: colors.blue[200],
    },
    border: {
      математика: colors.red[300],
      термодинамика: colors.orange[300],
      механика: colors.green[300],
      оптика: colors.yellow[300],
      электромагнетизм: colors.blue[300],
    },
    edge: {
      математика: colors.red[400],
      термодинамика: colors.orange[500],
      механика: colors.green[400],
      оптика: colors.yellow[500],
      электромагнетизм: colors.blue[400],
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
    ...colors,
  },
  fonts: lightTheme.fonts,
  nodes: lightTheme.nodes,
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Helvetica', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica Medium', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .helvetica-regular { font-family: 'Helvetica', Arial, sans-serif; }
  .helvetica-roman   { font-family: 'Helvetica', Arial, sans-serif; }
  .helvetica-medium  { font-family: 'Helvetica Medium', Arial, sans-serif; }
  .helvetica-bold    { font-family: 'Helvetica Bold', Arial, sans-serif; }

  .shiny-text {
    color: #b5b5b5a4;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 60%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline-block;
    animation: shine 5s linear infinite;
  }

  @keyframes shine {
    0% { background-position: 100%; }
    100% { background-position: -100%; }
  }

  .shiny-text.disabled { animation: none; }
`;
