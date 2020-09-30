import React from "react";
import Header from "../../components/Header/Header";
import FastPrices from "./components/FastPrices/FastPrices";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";
import device from "../../styles/devices";

const FastPricesStyles = styled.div``;

const FastPricesPageStyles = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 0.2vw;
  background-color: ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  border-top: 0.23333vw solid ${colors.background.Primary1};
  min-height: 80vh;
  ${device.M} {
    grid-template-rows: auto;
    grid-template-columns: 100vw;
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
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const HeaderStyles = styled.div`
  height: 5vw;
  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;

const FastPricesPage = () => {
  return (
    <FastPricesStyles>
      <HeaderStyles>
        <Header />
      </HeaderStyles>

      <FastPricesPageStyles>
        <First>
          <FastPrices />
        </First>
      </FastPricesPageStyles>

      <Footer />
    </FastPricesStyles>
  );
};

export default FastPricesPage;
