import React from "react";
import Header from "../../components/Header";
import Prices from "./components/Prices";
import Descriptions from "./components/Descriptions";
import Footer from "../../components/Footer";
import styled from "styled-components";
import colors from "../../styles/colors";
import device from "../../styles/devices";

const PricesPageStyles = styled.div``;

const HeaderStyles = styled.div`
  height: 5vw;
  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;

const ContainerStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  background-color: ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  border-top: 0.23333vw solid ${colors.background.Primary1};
  ${device.M} {
    grid-template-rows: auto;
    grid-template-columns: auto;
  }
`;

const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: ${colors.background.Primary2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Second = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary2};
  display: flex;
  justify-content: center;
  align-items: center;
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
