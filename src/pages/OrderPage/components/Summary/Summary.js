import React from "react";
import styled from "styled-components";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";

const SummaryStyles = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary4};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SummaryTitleStyles = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary4};
`;

const HistorySection = () => {
  return (
    <SummaryStyles>
      <SummaryTitleStyles>Podsumowanie zamówienia</SummaryTitleStyles>
      <SummaryTitleStyles>
        Tu bedzie podsumowanie ale nie ma na razie cennika
      </SummaryTitleStyles>
    </SummaryStyles>
  );
};

export default HistorySection;
