import React from "react";
import styled from "styled-components";
import { queryForTitle, queryForText } from "../../../../../styles/devices";
import colors from "../../../../../styles/colors";

const IntroWaxStyles = styled.div`
  width: 100%;
  padding: 2vw;
`;

const IntroWaxTitleStyles = styled.h1`
  padding-bottom: 1rem;
  color: ${colors.text.Primary6};
  ${queryForTitle}
`;

const IntroWaxTextStyles = styled.p`
  line-height: 1.5em;
  margin-bottom: 2vw;
  ${queryForText}
`;

const ExtraInfo = () => {
  return (
    <IntroWaxStyles>
      <IntroWaxTitleStyles>Extra info</IntroWaxTitleStyles>
      <IntroWaxTextStyles>
        Struktura ślizgu. To ten wzorek jaki masz na ślizgu, takie małe
        kreseczki ułożone w większe kreseczki, zazwyczaj ukośne. Struktur jest
        kilka rodzajów, jak mi się kiedyś zachce to zrobie dalszą część
        poradnika o tym. Na razie starczy info, że fajnie by było zeby owa
        struktura była. Potrafi ona zmienić to jak narta ślizga się w różnych
        warunkach ale to raczej zaden amator nie ma szans odczuć. Zazwyczaj i
        tak każdy porządny serwis wam ją zrobi przy wyrównywaniu ślizgu wieć w
        sumie bez problemu. https://www.racewax.com/base-structure-theory/
      </IntroWaxTextStyles>
      <IntroWaxTextStyles>
        Ja w nartach na niedzielne jazdy mam ustawione kąty na 88/0,5 i to jest
        ok do takiego w miare snucia się po stoku. 89/0,7 będzie bardziej
        stabilne na prostych i troche gorzej trzymała w skręcie. A z kolei
        87/0,5(albo 0) to już raczej do jazdy na tyczkach.
      </IntroWaxTextStyles>
    </IntroWaxStyles>
  );
};

export default ExtraInfo;
