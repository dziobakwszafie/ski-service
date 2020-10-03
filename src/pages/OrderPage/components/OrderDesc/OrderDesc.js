import React from "react";
import styled from "styled-components";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";

const DescrStyles = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescrTitleStyles = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary6};
  text-align: center;
`;

const OrderDesc = () => {
  return (
    <DescrStyles>
      <DescrTitleStyles>
        tu bedzie opis kazdej kliknietej opcji
      </DescrTitleStyles>
    </DescrStyles>
  );
};

export default OrderDesc;
