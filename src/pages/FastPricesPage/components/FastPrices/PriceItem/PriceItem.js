import React from "react";
import styled from "styled-components";
import { queryForTitle, queryForText } from "../../../../../styles/devices";
import colors from "../../../../../styles/colors";
import device from "../../../../../styles/devices";

const PriceItemStyle = styled.div`
  width: 20vw;
  height: 30vw;
  background-color: ${colors.background.Primary3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PriceItemTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary6};
  text-align: center;
  margin-bottom: 5vw;
`;

const SingleItem = styled.div`
  ${queryForTitle}
`;

const PriceItem = (id, title, options, prices) => {
  return (
    <PriceItemStyle options={options}>
      <p>{title}</p>
      {options.map((option) => {
        <p key={id}>{option}</p>;
      })}
    </PriceItemStyle>
  );
};

export default PriceItem;
