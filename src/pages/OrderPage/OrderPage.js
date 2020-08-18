import React from "react";
import Header from "./components/Header/Header";
import LoginSection from "./components/LoginSection/LoginSection";
import OrderSection from "./components/OrderSection/OrderSection";
import HistorySection from "./components/HistorySection/HistorySection";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const OrderPageStyles = styled.div``;

const LoginSectionStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const OrderSectionStyles = styled.div`
  width: 100%;
`;
const HistorySectionStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OrderPage = () => {
  return (
    <OrderPageStyles>
      <Header />
      <LoginSectionStyles>
        <LoginSection />
      </LoginSectionStyles>
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
