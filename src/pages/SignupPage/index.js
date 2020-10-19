import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SignupComponent from './components/SignupComponent';
import Footer from '../../components/Footer';
import lift from '../../assets/lift.JPG';
import whatshere from '../../assets/whatshere.png';
import exercise from '../../assets/exercise.gif';

import colors from '../../styles/colors';
import device from '../../styles/devices';
import { specialStyles1 } from '../../styles/typography';

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
  grid-template-rows: 26vw 34vw;
  grid-gap: 0.23333vw;
  ${device.M} {
    grid-template-rows: 45vw auto;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background.Primary2};
  background-image: url('${lift}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background.Primary2};
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
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

const SignupPageStyles = styled.div``;
const HeaderStyles = styled.div`
  height: 5vw;

  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;
const BackToLoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 3vw;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
            <NavLink to="/login">
              <LinkStyles>POWROT DO LOGOWANIA</LinkStyles>
            </NavLink>
          </BackToLoginStyles>
        </First>
        <Second>
          <SignupComponentStyles>
            <SignupComponent />
          </SignupComponentStyles>
        </Second>
        <Third />
      </Main>

      <FooterStyles>
        <Footer />
      </FooterStyles>
    </SignupPageStyles>
  );
};

export default LoginPage;
