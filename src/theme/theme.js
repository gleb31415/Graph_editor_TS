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
    50: "#fff1f2",
    100: "#ffe0e1",
    200: "#ffc7ca",
    300: "#ffa0a4",
    400: "#ff6970",
    500: "#f93a43",
    600: "#e8262f",
    700: "#c2131b",
    800: "#a1131a",
    900: "#85171c",
    950: "#490609",
  },
  yellow: {
    50: "#ffffea",
    100: "#fffcc5",
    200: "#fffa85",
    300: "#fff146",
    400: "#ffe31b",
    500: "#ffc505",
    600: "#e29800",
    700: "#bb6c02",
    800: "#985308",
    900: "#7c440b",
    950: "#482300",
  },
  green: {
    50: "#eefff6",
    100: "#d7ffec",
    200: "#b2ffdb",
    300: "#76ffc1",
    400: "#33f59e",
    500: "#09de7f",
    600: "#00c86f",
    700: "#049153",
    800: "#0a7144",
    900: "#0a5d3a",
    950: "#00341f",
  },
  "light-blue": {
    50: "#effcfc",
    100: "#d5f4f8",
    200: "#b0e9f1",
    300: "#81d9e7",
    400: "#3dbcd3",
    500: "#21a0b9",
    600: "#1e809c",
    700: "#1f687f",
    800: "#225668",
    900: "#204859",
    950: "#102f3c",
  },
  purple: {
    50: "#ecefff",
    100: "#dde2ff",
    200: "#c2c9ff",
    300: "#9ca5ff",
    400: "#7575ff",
    500: "#5d50ff",
    600: "#5336f5",
    700: "#482ad8",
    800: "#3a25ae",
    900: "#322689",
    950: "#201650",
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
      математика: colors.red["200"],
      термодинамика: colors.yellow["200"],
      механика: colors.green["200"],
      оптика: colors["light-blue"]["200"],
      электромагнетизм: colors.purple["200"],
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
    helvetica: {
      regular: "'Helvetica', Arial, sans-serif",
      roman: "'Helvetica', Arial, sans-serif",
      medium: "'Helvetica Medium', Arial, sans-serif",
      bold: "'Helvetica Bold', Arial, sans-serif",
    },
  },
  nodes: {
    section: {
      математика: colors.red["200"],
      термодинамика: colors.yellow["200"],
      механика: colors.green["200"],
      оптика: colors["light-blue"]["200"],
      электромагнетизм: colors.purple["200"],
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

  .helvetica-regular {
    font-family: 'Helvetica', Arial, sans-serif;
  }

  .helvetica-roman {
    font-family: 'Helvetica', Arial, sans-serif;
  }

  .helvetica-medium {
    font-family: 'Helvetica Medium', Arial, sans-serif;
  }

  .helvetica-bold {
    font-family: 'Helvetica Bold', Arial, sans-serif;
  }
`;
