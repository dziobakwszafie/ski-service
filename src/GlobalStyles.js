import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
    /* @media only screen and (max-width: 1200px) {
          font-size: 50%;
      } */
  }
  body {
    font-family: "Open Sans Condensed", sans-serif;
    /* padding: 2rem 8rem;
    @media only screen and (max-width: 1200px) {
        padding: 2rem 4rem;
    }
    @media only screen and (max-width: 800px) {
        padding: 1.5rem 2.5rem;
    }
    @media only screen and (max-width: 700px) {
        padding: 0 1rem;
    } */
  }
`;
