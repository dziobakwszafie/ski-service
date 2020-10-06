import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const FooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding-top: 3vw;
  background-color: ${colors.background.Primary3};
`;

const FirstRow = styled.div`
  display: flex;
  align-items: baseline;
`;
const SecondRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const ThirdRow = styled.div`
  display: flex;
  align-items: baseline;
  div {
    margin-left: 20px;
    display: flex;
    align-items: baseline;
  }
  @media only screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

const BigText = styled.h4`
  margin-bottom: 1em;
  font-size: 1.3em;
  margin-left: 10px;
  @media only screen and (max-width: 1024px) {
    font-size: 1em;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;
const SmallText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1em;
  @media only screen and (max-width: 1024px) {
    font-size: 0.6em;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.4em;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <FirstRow>
        <SmallText>email</SmallText>
        <BigText>dziobakwszafie@gmail.com</BigText>
      </FirstRow>

      <SecondRow>
        <SmallText> numer kontaktowy</SmallText>
        <BigText>***-***-***</BigText>
      </SecondRow>

      <ThirdRow>
        <div>
          <SmallText>gdzie nas znajdziesz</SmallText>
          <BigText>Zabrze</BigText>
        </div>
        <div>
          <SmallText>all rights reserved</SmallText>
          <BigText>2020 dziobakwszafie</BigText>
        </div>
      </ThirdRow>
    </FooterStyles>
  );
};

export default Footer;
