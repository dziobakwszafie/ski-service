import React from "react";
import styled from "styled-components";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";

const DescrTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary6}
`;

const OrderDesc = () => {
  return <DescrTitleStyle>co do czego uzywam</DescrTitleStyle>;
};

export default OrderDesc;
