"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
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

export default GlobalStyle;
