import React from 'react';
import styled from 'styled-components';
import arrow from '../../../../../assets/arrow.png';
import bricks from '../../../../../assets/bricks.jpg';
import device, { queryForText } from '../../../../../styles/devices';
import typography, { specialStyles1 } from '../../../../../styles/typography';

import colors from '../../../../../styles/colors';

const IntroStyles = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  background-image: url('${bricks}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const IntroTitleStyles = styled.h2`
  padding-bottom: 1rem;
  border-bottom: solid 0.33333vw ${colors.text.Primary1};
  color: ${colors.text.Primary5};
  text-align: center;
  -webkit-text-stroke: 2px black !important;
  ${device.XXL} {
    ${typography.header.M}
  }
  ${device.XL} {
    ${typography.header.M}
  }
  ${device.L} {
    ${typography.header.M}
  }
  ${device.M} {
    ${typography.header.M}
  }
  ${device.S} {
    ${typography.header.XL}
  }
`;

const IntroTextStyles = styled.p`
  margin-top: 2vw;
  margin-bottom: 1vw;
  padding: 0 2vw 0 2vw;
  color: ${colors.text.Primary1};
  ${queryForText}
`;

const IntroArrowStyles = styled.div`
  display: flex;
  align-items: center;
`;
const IntroArrowTitleStyles = styled.h4`
  padding: 0 2vw 0 2vw;
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
  margin: 4vw;
  width: 100%;
  ${device.M} {
    width: 60%;
    transform: rotate(120deg);
  }
`;

const Intro = () => {
  return (
    <IntroStyles>
      <Wrapper>
        <IntroTitleStyles>PO CO W OGÓLE TEN SERWIS</IntroTitleStyles>
      </Wrapper>

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
          <img alt="strzałka_wskazująca_zamówienie" src={`${arrow}`} />
        </IntroArrowImgStyles>
      </IntroArrowStyles>
    </IntroStyles>
  );
};

export default Intro;
