import React from "react";
import styled from "styled-components";

const IntroSharpStyles = styled.div`
  width: 100%;
  padding: 3vw;
  @media only screen and (min-width: 1921px) {
    font-size: 1.2vw;
  }
  @media only screen and (max-width: 1920px) {
    font-size: 1.2vw;
  }
  @media only screen and (max-width: 1500px) {
    font-size: 1.3vw;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 2.2vw;
  }
`;

const IntroSharpTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 2em;
  padding-bottom: 2rem;
  color: #f5b60a;
`;

const IntroSharpTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 1vw;
  ul {
    padding: 10px;
  }
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
          <li>od spodu (podniesienie) - 0,5 lub 0,7 stopnia</li>
          <li>
            można też oczywiśćie ostrzyć 86 i 87 z boku i na 0 od dołu ale to
            raczej dla zawodników
          </li>
        </ul>
      </IntroSharpTextStyles>
    </IntroSharpStyles>
  );
};

export default IntroSharp;
