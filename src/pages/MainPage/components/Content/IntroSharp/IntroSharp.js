import React from "react";
import styled from "styled-components";

const IntroSharpStyles = styled.div`
  max-width: 100%;

  display: flex;
`;

const IntroSharpTextContainer = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const IntroSharpTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  color: #f5b60a;
  padding-bottom: 3rem;
`;

const IntroSharpTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 30px;
`;

const IntroSharp = () => {
  return (
    <IntroSharpStyles>
      <IntroSharpTextContainer>
        <IntroSharpTitleStyles>OSTRZONKO BEJBEEE</IntroSharpTitleStyles>
        <IntroSharpTextStyles>
          Bo podczas jazdy tępią się krawędzie. A ślizgi się psują i podczas
          jazdy i podczas leżenia w piwnicy.
        </IntroSharpTextStyles>

        <IntroSharpTextStyles>
          Krawędzie ostrzone są zarówno od spodu jak i z boku. Trzeba jednak
          wspomnieć, że to nie nóż w kuchni, który ostrzymy na oko, więc jak
          ktoś chce zrobić od ręki pilnikiem warsztatowym to nie polecam.
        </IntroSharpTextStyles>

        <IntroSharpTextStyles>
          Dla amatora polecanymi kątami to: - z boku - 88 lub 89 stopni - od
          spodu (podniesienie) - 0,5 lub 0,7 stopnia Ja w nartach na niedzielne
          jazdy mam 88/0,5 i to jest ok do takiego w miare snucia się po stoku.
          89/0,7 będzie bardziej stabilne na prostych i troche gorzej trzymała w
          skręcie. A z kolei 87/0,5 to już raczej do jazdy na tyczkach.
        </IntroSharpTextStyles>
      </IntroSharpTextContainer>
    </IntroSharpStyles>
  );
};

export default IntroSharp;
