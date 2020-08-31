import React from "react";
import styled from "styled-components";

const IntroStyles = styled.div`
  max-width: 100%;
  /* background-color: #f5b60a; */
  display: flex;
`;

const IntroTextContainer = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const IntroPhotoContainer = styled.div``;

const IntroTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  color: #0b8d99;
  padding-bottom: 3rem;
`;

const IntroTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 30px;
`;

const Intro = () => {
  return (
    <IntroStyles>
      <IntroTextContainer>
        <IntroTitleStyles>PO CO W OGÓLE TEN SERWIS</IntroTitleStyles>
        <IntroTextStyles>
          Bo podczas jazdy tępią się krawędzie. A ślizgi się psują i podczas
          jazdy i podczas leżenia w piwnicy.
        </IntroTextStyles>

        <IntroTextStyles>
          A tak na serio to od krawędzi zależy nie tylko to jak narta trzyma
          podczas skrętu (bo to chyba wiadomo powszechnie) ale też w jaki sposób
          będzie ona rozpoczynała skręt, wychodziła z niego oraz czy podczas
          jazdy na wprost nie będzie zbyt nerwowa.
        </IntroTextStyles>

        <IntroTextStyles>
          Slizg jest z kolei elementem o który powinniśmy dbać cały rok, ale
          bądźmy szczerzy, ja wiem że jak ktoś odda chociaż raz w roku narty do
          Decathlonu na serwis, to już jest sukces. Co się dzieje gdy narta nie
          jest nasmarowana? Slizg się utlenia, co uwidacznia się poprzez
          powstawanie szarego nalotu, zmniejsza się jego hydrofobowość i
          zwiększa szorstkość. Wpływa to nie tylko na to, że pojedziemy wolnej
          ale też moze być Ci trudniej zainicjować sam skręt albo hamowanie.
        </IntroTextStyles>
      </IntroTextContainer>
      <IntroPhotoContainer></IntroPhotoContainer>
    </IntroStyles>
  );
};

export default Intro;
