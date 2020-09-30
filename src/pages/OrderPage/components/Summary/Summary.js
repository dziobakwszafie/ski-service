import React from "react";
import styled from "styled-components";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";

const SummaryTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary4};
`;

const HistorySection = () => {
  return <SummaryTitleStyle>Podsumowanie zamówienia</SummaryTitleStyle>;
};

export default HistorySection;
