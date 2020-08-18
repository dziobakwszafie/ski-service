import React from "react";
import styled from "styled-components";
import OrderForm from "./OrderForm/OrderForm";
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
      <ThemeProvider theme={theme}>
        <OrderForm />
      </ThemeProvider>
    </OrderSectionStyles>
  );
};

export default OrderSection;
