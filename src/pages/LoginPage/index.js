import React from 'react';
import Header from '../../components/Header';
import LoginComponent from './components/LoginComponent';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import lift from '../../assets/lift.JPG';
import signup from '../../assets/signup.png';
import whatshere from '../../assets/whatshere.png';
import exercise from '../../assets/exercise.gif';
import { useEffect } from 'react';
import colors from '../../styles/colors';
import device from '../../styles/devices';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Main = styled.div`
  display: grid;
  grid-template-columns: auto 57.83333vw;
  grid-template-rows: 28vw 34vw;
  grid-gap: 0.23333vw;
  background-color: ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  border-top: 0.23333vw solid ${colors.background.Primary1};
  ${device.M} {
    grid-template-rows: auto 65vw 45vw;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: ${colors.background.Primary2};
  display: flex;
  align-items: center;
  justify-content: center;
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
  grid-row-end: 2;
  background-color: ${colors.background.Primary2};
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
  background-image: url('${whatshere}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  :hover {
    background-image: url('${exercise}');
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
const Fourth = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary2};
  background-image: url('${lift}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

const LoginPageStyles = styled.div``;
const HeaderStyles = styled.div`
  height: 5vw;
  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;
const LinkBgStyle = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${signup}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const LoginComponentStyles = styled.div`
  width: 35vw;
  ${device.M} {
    width: 50vw;
  }
  @media only screen and (max-width: 550px) {
    width: 80vw;
  }
`;
const FooterStyles = styled.div`
  bottom: 0;
`;

const LoginPage = () => {
  return (
    <LoginPageStyles>
      <ScrollToTopOnMount />
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
