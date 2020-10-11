import React from "react";
import Header from "../../components/Header";
import OrderForm from "./components/OrderForm";
import OrderDesc from "./components/OrderDesc";
import Summary from "./components/Summary";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import colors from "../../styles/colors";
import device from "../../styles/devices";

const OrderMainSection = styled.div`
  display: grid;
  grid-template-columns: 57.83333vw auto;
  grid-template-rows: auto auto;
  grid-gap: 0.2vw;
  background-color: ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  border-top: 0.23333vw solid ${colors.background.Primary1};
  ${device.M} {
    grid-template-rows: auto auto auto;
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
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
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
  justify-content: center;
  align-items: center;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
const Third = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: ${colors.background.Primary2};
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const HeaderStyles = styled.div`
  height: 5vw;
  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;

const OrderPage = () => {
  const history = useHistory();

  const authenticated = useSelector(
    (state) => state.loginReducer.authenticated
  );

  if (authenticated === false) {
    history.push("/login");
  }

  return (
    <>
      <HeaderStyles>
        <Header />
      </HeaderStyles>

      <OrderMainSection>
        <First>
          <OrderForm />
        </First>
        <Second>
          <OrderDesc />
        </Second>
        <Third>
          <Summary />
        </Third>
      </OrderMainSection>

      <Footer />
    </>
  );
};

export default OrderPage;
