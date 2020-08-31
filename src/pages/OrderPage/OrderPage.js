import React from "react";
import Header from "../../components/Header/Header";
import OrderSection from "./components/OrderSection/OrderSection";
import HistorySection from "./components/HistorySection/HistorySection";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const OrderPageStyles = styled.div``;

const OrderSectionStyles = styled.div`
  width: 100%;
  margin-top: 5vw;
  margin-left: 5vw;
`;
const HistorySectionStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5vw auto;
`;

const OrderPage = () => {
  return (
    <OrderPageStyles>
      <Header />
      <OrderSectionStyles>
        <OrderSection />
      </OrderSectionStyles>
      <HistorySectionStyles>
        <HistorySection />
      </HistorySectionStyles>
      <Footer />
    </OrderPageStyles>
  );
};

export default OrderPage;
