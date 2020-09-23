import React from "react";
import styled from "styled-components";
import { queryForTitle, queryForText } from "../../../../../styles/devices";
import colors from "../../../../../styles/colors";

const IntroSharpStyles = styled.div`
  width: 100%;
  padding: 2vw;
`;

const IntroSharpTitleStyles = styled.h3`
  padding-bottom: 1rem;
  color: ${colors.text.Primary4};
  ${queryForTitle}
`;

const IntroSharpTextStyles = styled.p`
  line-height: 1.5em;
  margin-bottom: 2vw;
  ul {
    padding: 2vw;
    padding-left: 4vw;
  }
  ${queryForText}
`;

const IntroSharp = () => {
  return (
    <IntroSharpStyles>
      <IntroSharpTitleStyles>OSTRZONKO BEJBEEE</IntroSharpTitleStyles>
      <IntroSharpTextStyles>
        Bo podczas jazdy tępią się krawędzie. A ślizgi się psują i podczas jazdy
        i podczas leżenia w piwnicy.
      </IntroSharpTextStyles>

      <IntroSharpTextStyles>
        Krawędzie ostrzone są zarówno od spodu jak i z boku. Trzeba jednak
        wspomnieć, że to nie nóż w kuchni, który ostrzymy na oko, więc jak ktoś
        chce zrobić od ręki pilnikiem warsztatowym to nie polecam.
      </IntroSharpTextStyles>

      <IntroSharpTextStyles>
        Dla amatora polecanymi kątami to:
        <ul>
          <li> z boku - 88 lub 89 stopni </li>
          <li>
            można tez zaostrzyc na 86 lub 87 ale wtedy trzeba się mocno pochylać
            w skręcie żeby narta trzymała
          </li>
          <li>od spodu (podniesienie) - 0,5 lub 0,7 stopnia</li>
          <li>
            przy podniesieniu 0,5 narta będzie nardziej nerwowa, można tez
            zrobić 0 - wtedy skręca super ale nie jedzie prosto, opcja raczej
            tylko na tyczki
          </li>
        </ul>
      </IntroSharpTextStyles>
    </IntroSharpStyles>
  );
};

export default IntroSharp;
