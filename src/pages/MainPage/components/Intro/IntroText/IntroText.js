import React from "react";
import styled from "styled-components";
import arrow from "../../../../../assets/arrow.png";
import device from "../../../../../styles/devices";
import typography from "../../../../../styles/typography";
import { queryForTitle, queryForText } from "../../../../../styles/devices";
import { specialStyles1 } from "../../../../../styles/typography";
import colors from "../../../../../styles/colors";

const IntroStyles = styled.div`
  width: 100%;
  padding: 3vw;
`;

const IntroTitleStyles = styled.h2`
  color: ${colors.text.Secondary1};
  padding-bottom: 1rem;
  text-align: center;
  ${queryForTitle}
`;

const IntroTextStyles = styled.p`
  color: ${colors.text.Primary1};
  margin-bottom: 1vw;
  ${queryForText}
`;

const IntroArrowStyles = styled.div`
  display: flex;
  align-items: center;
`;
const IntroArrowTitleStyles = styled.h4`
  ${specialStyles1}
  ${device.XXL} {
    font-size: 7vw;
  }
  ${device.XL} {
    font-size: 7vw;
  }
  ${device.M} {
    font-size: 12vw;
  }
`;
const IntroArrowImgStyles = styled.div`
  width: 100%;
  margin: 4vw;
  ${device.M} {
    width: 60%;
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
        podczas skrętu ale też w jaki sposób będzie ona rozpoczynała skręt,
        wychodziła z niego oraz czy podczas jazdy na wprost nie będzie zbyt
        nerwowa.
      </IntroTextStyles>

      <IntroTextStyles>
        Slizg jest z kolei elementem o który powinniśmy dbać cały rok, ale
        bądźmy szczerzy, ja wiem że jak ktoś odda chociaż raz w roku narty do
        Decathlonu na serwis, to już jest sukces. Co się dzieje gdy narta nie
        jest nasmarowana? Slizg się utlenia, co uwidacznia się poprzez
        powstawanie szarego nalotu. Zmniejsza się jego hydrofobowość i zwiększa
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
