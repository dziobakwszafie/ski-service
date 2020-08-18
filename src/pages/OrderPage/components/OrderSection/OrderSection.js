import React from "react";
import styled from "styled-components";
import OrderForm from "./OrderForm/OrderForm";
import OrderDesc from "./OrderDesc/OrderDesc";
import { theme, ThemeProvider } from "@chakra-ui/core";

const OrderSectionStyles = styled.div`
  display: flex;
`;

const OrderFormStyles = styled.div`
  width: 50%;
`;
const OrderDescStyles = styled.div`
  width: 50%;
`;

const OrderSection = () => {
  return (
    <OrderSectionStyles>
      <OrderFormStyles>
        <ThemeProvider theme={theme}>
          <OrderForm />
        </ThemeProvider>
      </OrderFormStyles>
      <OrderDescStyles>
        <OrderDesc />
      </OrderDescStyles>
    </OrderSectionStyles>
  );
};

export default OrderSection;
