import React from "react";
import Header from "./components/Header/Header";
import LoginSection from "./components/LoginSection/LoginSection";
import OrderSection from "./components/OrderSection/OrderSection";
import TextSection from "./components/TextSection/TextSection";
import styled from "styled-components";

const OrderPageStyles = styled.div``;

const OrderPage = () => {
  return (
    <OrderPageStyles>
      <Header />
      <LoginSection />
      <OrderSection />
      <TextSection />
    </OrderPageStyles>
  );
};

export default OrderPage;
