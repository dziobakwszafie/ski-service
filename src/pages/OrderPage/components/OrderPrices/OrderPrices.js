import React from "react";
import styled from "styled-components";

const OrderSectionStyles = styled.div`
  display: grid;
  place-items: center;
`;

const OrderSection = () => {
  return (
    <OrderSectionStyles>
      <h2>Cennik</h2>
    </OrderSectionStyles>
  );
};

export default OrderSection;
