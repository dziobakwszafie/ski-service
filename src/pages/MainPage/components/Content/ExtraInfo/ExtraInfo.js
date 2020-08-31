import React from "react";
import styled from "styled-components";

const IntroWaxStyles = styled.div`
  max-width: 100%;
  display: flex;
`;

const IntroWaxTextContainer = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const IntroWaxTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  color: #f37736;
  padding-bottom: 3rem;
`;

const IntroWaxTextStyles = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 30px;
`;

const ExtraInfo = () => {
  return (
    <IntroWaxStyles>
      <IntroWaxTextContainer>
        <IntroWaxTitleStyles>Extra info</IntroWaxTitleStyles>
        <IntroWaxTextStyles>
          https://www.racewax.com/base-structure-theory/ Struktura ślizgu. To
          ten wzorek jaki masz na ślizgu, takie małe kreseczki ułożone w większe
          kreseczki, zazwyczaj ukośne. Struktur jest kilka rodzajów, jak mi się
          kiedyś zachce to zrobie dalszą część poradnika o tym. Na razie starczy
          info, że fajnie by było zeby owa struktura była. Potrafi ona zmienić
          to jak narta ślizga się w różnych warunkach ale to raczej zaden amator
          nie ma szans odczuć. Zazwyczaj i tak każdy porządny serwis wam ją
          zrobi przy wyrównywaniu ślizgu wieć w sumie bez problemu.
        </IntroWaxTextStyles>
      </IntroWaxTextContainer>
    </IntroWaxStyles>
  );
};

export default ExtraInfo;
