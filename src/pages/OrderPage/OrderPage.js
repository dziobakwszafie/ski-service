import React from "react";
import Header from "./components/Header/Header";
import OrderSection from "./components/OrderSection/OrderSection";
import styled from "styled-components";

const OrderPageStyles = styled.div``;

const OrderPage = () => {
  return (
    <OrderPageStyles>
      <Header />
      <OrderSection />
    </OrderPageStyles>
  );
};

export default OrderPage;
