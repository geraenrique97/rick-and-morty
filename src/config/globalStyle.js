import { createGlobalStyle } from 'styled-components'
import { COLORS } from './colorsPalette';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${COLORS.neutral.fullDark};
    color: ${COLORS.neutral.light};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

export {GlobalStyle}