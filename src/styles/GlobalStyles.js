import { createGlobalStyle } from 'styled-components';
import typography from './typography';
import flyingleatherv2 from '../fonts/flyingleatherv2.ttf';
import Aeronaves from '../fonts/Aeronaves.ttf';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    ${typography.globalStyles};
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  *  ::selection {
    color: pink;
    background: transparent;
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    font-family: "Open Sans Condensed", sans-serif;
  }
  @font-face {
    font-family: "FlyingLeatherneck";
    src: local("FlyingLeatherneck"), url(${flyingleatherv2}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Aeronaves";
    src: local("Aeronaves"), url(${Aeronaves}) format("opentype");
    font-weight: 600;
    font-style: normal;
  }
`;
