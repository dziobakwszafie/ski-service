import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import LoginComponent from './components/LoginComponent';
import Footer from '../../components/Footer';
import lift from '../../assets/lift.JPG';
import signup from '../../assets/signup.png';
import whatshere from '../../assets/whatshere.png';
import exercise from '../../assets/exercise.gif';

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
  border-top: 0.23333vw solid ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  background-color: ${colors.background.Primary1};
  grid-template-columns: auto 57.83333vw;
  grid-template-rows: 28vw 34vw;
  grid-gap: 0.23333vw;
  ${device.M} {
    grid-template-rows: auto 65vw 45vw;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background.Primary2};
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
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
  background-color: ${colors.background.Primary2};
  background-image: url('${whatshere}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

  :hover {
    background-image: url('${exercise}');
    background-repeat: no-repeat;
    background-position: center;
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
  background-color: ${colors.background.Primary2};
  background-image: url('${lift}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
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
  background-repeat: no-repeat;
  background-position: center;
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
          <Link to="/signup">
            <LinkBgStyle />
          </Link>
        </Second>
        <Third />
        <Fourth />
      </Main>

      <FooterStyles>
        <Footer />
      </FooterStyles>
    </LoginPageStyles>
  );
};

export default LoginPage;
