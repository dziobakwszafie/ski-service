import React from "react";
import Header from "../../components/Header/Header";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import skilift from "../../assets/lift.JPG";
import signup from "../../assets/signup.png";
import whatshere from "../../assets/whatshere.png";
import exercise from "../../assets/exercise.gif";

const Main = styled.div`
  display: grid;
  grid-template-columns: auto 57.83333vw;
  grid-template-rows: 26vw 34vw;
  grid-gap: 0.23333vw;
  background-color: #000;
  border-bottom: 0.23333vw solid #000;
  border-top: 0.23333vw solid #000;
  @media only screen and (max-width: 1024px) {
    grid-template-rows: 45vw 65vw 45vw;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
const Second = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Third = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #fff;
  background-image: url("${whatshere}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  :hover {
    background-image: url("${exercise}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Fourth = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #fff;
  background-image: url("${skilift}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

const LoginPageStyles = styled.div``;
const HeaderStyles = styled.div`
  height: 10vw;
  @media only screen and (max-width: 1024px) {
    height: 200px;
  }
`;
const LinkBgStyle = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${signup}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const LoginComponentStyles = styled.div`
  width: 60%;
`;
const FooterStyles = styled.div`
  bottom: 0;
`;

const LoginPage = () => {
  return (
    <LoginPageStyles>
      <HeaderStyles>
        <Header />
      </HeaderStyles>

      <Main>
        <First>
          <LoginComponentStyles>
            <LoginComponent />
          </LoginComponentStyles>
        </First>
        <Second>
          <Link to={`/signup`}>
            <LinkBgStyle></LinkBgStyle>
          </Link>
        </Second>
        <Third></Third>
        <Fourth></Fourth>
      </Main>

      <FooterStyles>
        <Footer />
      </FooterStyles>
    </LoginPageStyles>
  );
};

export default LoginPage;
