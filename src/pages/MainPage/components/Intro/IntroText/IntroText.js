import React from "react";
import styled from "styled-components";
import arrow from "../../../../../assets/arrow.png";

const IntroStyles = styled.div`
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

const IntroTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 2em;
  padding-bottom: 2rem;
  color: #0b8d99;
`;

const IntroTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 1vw;
`;

const IntroArrowStyles = styled.div`
  display: flex;
  align-items: center;
`;
const IntroArrowTitleStyles = styled.h4`
  font-family: "FlyingLeatherneck";
  @media only screen and (min-width: 1921px) {
    font-size: 7vw;
  }
  @media only screen and (max-width: 1920px) {
    font-size: 7vw;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 12vw;
  }
`;
const IntroArrowImgStyles = styled.div`
  width: 60%;
  margin: 4vw;
  @media only screen and (max-width: 1024px) {
    transform: rotate(120deg);
  }
`;

const Intro = () => {
  return (
    <IntroStyles>
      <IntroTitleStyles>PO CO W OGÓLE TEN SERWIS</IntroTitleStyles>
      <IntroTextStyles>
        Bo podczas jazdy tępią się krawędzie. A ślizgi się psują i podczas jazdy
        i podczas leżenia w piwnicy.
      </IntroTextStyles>

      <IntroTextStyles>
        A tak na serio to od krawędzi zależy nie tylko to jak narta trzyma
        podczas skrętu (bo to chyba wiadomo powszechnie) ale też w jaki sposób
        będzie ona rozpoczynała skręt, wychodziła z niego oraz czy podczas jazdy
        na wprost nie będzie zbyt nerwowa.
      </IntroTextStyles>

      <IntroTextStyles>
        Slizg jest z kolei elementem o który powinniśmy dbać cały rok, ale
        bądźmy szczerzy, ja wiem że jak ktoś odda chociaż raz w roku narty do
        Decathlonu na serwis, to już jest sukces. Co się dzieje gdy narta nie
        jest nasmarowana? Slizg się utlenia, co uwidacznia się poprzez
        powstawanie szarego nalotu, zmniejsza się jego hydrofobowość i zwiększa
        szorstkość. Wpływa to nie tylko na to, że pojedziemy wolnej ale też moze
        być Ci trudniej zainicjować sam skręt albo hamowanie.
      </IntroTextStyles>

      <IntroArrowStyles>
        <IntroArrowTitleStyles>URATUJ SWOJE DECHY</IntroArrowTitleStyles>
        <IntroArrowImgStyles>
          <img src={`${arrow}`} />
        </IntroArrowImgStyles>
      </IntroArrowStyles>
    </IntroStyles>
  );
};

export default Intro;
