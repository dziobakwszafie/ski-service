import React from "react";
import styled from "styled-components";
import whatsappIcon from "./whatsapp.png";
import phoneIcon from "./phone.png";

const FooterStyles = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
`;

const FooterContactStyles = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: black solid 0.2vw;
  margin: 20px auto;
`;

const FooterContactMailStyles = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: black solid 0.2vw;
`;

const FooterContactIconsStyles = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgStyles = styled.div`
  #whatsappIcon {
    height: 50px;
    width: auto;
  }
  #phoneIcon {
    height: 50px;
    width: auto;
  }
`;

const FooterOtherStyles = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLocalizationStyles = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: black solid 0.2vw;
`;

const FooterAuthorStyles = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContactStyles>
        <FooterContactMailStyles>
          <b>nieudomowiony.sledz@gmail.com</b>
          <b>***-***-***</b>
        </FooterContactMailStyles>
        <FooterContactIconsStyles>
          <ImgStyles>
            <a href="https://wa.me/123456789">
              <img src={whatsappIcon} id="whatsappIcon" alt="whatsapp icon" />
            </a>
          </ImgStyles>
          <ImgStyles>
            <a href="tel:123456789">
              <img src={phoneIcon} id="phoneIcon" alt="Make a call icon" />
            </a>
          </ImgStyles>
        </FooterContactIconsStyles>
      </FooterContactStyles>
      <FooterOtherStyles>
        <FooterLocalizationStyles>
          <p>gdzie nas znajdziesz: Zabrze</p>
        </FooterLocalizationStyles>
        <FooterAuthorStyles>
          <b>dziobakwszafie 2019</b>
        </FooterAuthorStyles>
      </FooterOtherStyles>
    </FooterStyles>
  );
};

export default Footer;
