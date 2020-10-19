import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Prices from './components/Prices';
import Descriptions from './components/Descriptions';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';

const PricesPageStyles = styled.div``;

const HeaderStyles = styled.div`
  height: 5vw;

  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.23333vw solid ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
`;

const Second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
`;

const FastPricesPage = () => {
  return (
    <PricesPageStyles>
      <HeaderStyles>
        <Header />
      </HeaderStyles>

      <ContainerStyles>
        <First>
          <Prices />
        </First>
        <Second>
          <Descriptions />
        </Second>
      </ContainerStyles>

      <Footer />
    </PricesPageStyles>
  );
};

export default FastPricesPage;
