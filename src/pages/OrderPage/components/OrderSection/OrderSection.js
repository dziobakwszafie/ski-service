import React from "react";
import styled from "styled-components";
import OrderForm from "../OrderForm/OrderForm";
import OrderPrices from "../OrderPrices/OrderPrices";
import { theme, ThemeProvider } from "@chakra-ui/core";

const OrderSectionStyles = styled.div``;

const VideoStyles = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;

  max-width: 100%;
  overflow: hidden;
`;

const OrderSection = () => {
  return (
    <OrderSectionStyles>
      <OrderPrices />
      <ThemeProvider theme={theme}>
        <OrderForm />
      </ThemeProvider>
    </OrderSectionStyles>
  );
};

export default OrderSection;
