import React from "react";
import Header from "../../components/Header/Header";
import OrderForm from "./components/OrderForm/OrderForm";
import OrderDesc from "./components/OrderDesc/OrderDesc";
import HistorySection from "./components/HistorySection/HistorySection";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderMainSection = styled.div`
  display: grid;
  grid-template-columns: 57.83333vw auto;
  grid-template-rows: auto auto;
  grid-gap: 0.2vw;
  background-color: #000;
  border-bottom: 0.2vw solid #000;
  border-top: 0.2vw solid #000;
  @media only screen and (max-width: 1024px) {
    grid-template-rows: auto 45vw 45vw;
    grid-template-columns: 90vw;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Third = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
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
          <HistorySection />
        </Third>
      </OrderMainSection>

      <Footer />
    </>
  );
};

export default OrderPage;
