import React from "react";
import Header from "../../components/Header/Header";
import SignupComponent from "./components/SignupComponent/SignupComponent";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import lift from "../../assets/lift.JPG";
import signup from "../../assets/signup.png";
import whatshere from "../../assets/whatshere.png";
import exercise from "../../assets/exercise.gif";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import colors from "../../styles/colors";
import device from "../../styles/devices";
import { specialStyles1 } from "../../styles/typography";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Main = styled.div`
  display: grid;
  grid-template-columns: auto 57.83333vw;
  grid-template-rows: 26vw 34vw;
  grid-gap: 0.23333vw;
  background-color: ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  border-top: 0.23333vw solid ${colors.background.Primary1};
  ${device.M} {
    grid-template-rows: 45vw auto;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: ${colors.background.Primary2};
  background-image: url("${lift}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.M} {
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
  grid-row-end: 3;
  background-color: ${colors.background.Primary2};
  display: flex;
  align-items: center;
  justify-content: center;
  ${device.M} {
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
  background-color: ${colors.background.Primary2};
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
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const SignupPageStyles = styled.div``;
const HeaderStyles = styled.div`
  height: 5vw;
  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;
const BackToLoginStyles = styled.div`
  width: 50%;
  height: 50%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  font-size: 3vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  :hover {
    background: black;
  }
  ${device.M} {
    font-size: 3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const LinkStyles = styled.div`
  ${specialStyles1}
  color: ${colors.text.Primary2};
`;

const SignupComponentStyles = styled.div`
  width: 35vw;
  ${device.M} {
    width: 50vw;
  }
`;

const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterStyles = styled.div`
  bottom: 0;
`;

const LoginPage = () => {
  return (
    <SignupPageStyles>
      <ScrollToTopOnMount />
      <HeaderStyles>
        <Header />
      </HeaderStyles>

      <Main>
        <First>
          <BackToLoginStyles>
            <NavLink to={`/login`}>
              <LinkStyles>POWROT DO LOGOWANIA</LinkStyles>
            </NavLink>
          </BackToLoginStyles>
        </First>
        <Second>
          <SignupComponentStyles>
            <SignupComponent />
          </SignupComponentStyles>
        </Second>
        <Third></Third>
      </Main>

      <FooterStyles>
        <Footer />
      </FooterStyles>
    </SignupPageStyles>
  );
};

export default LoginPage;
