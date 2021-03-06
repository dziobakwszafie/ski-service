import React from 'react';
import styled from 'styled-components';
import { queryForTitle, queryForText } from '../../../../styles/devices';
import colors from '../../../../styles/colors';

const SummaryStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.text.Primary4};
`;

const SummaryTitleStyles = styled.h3`
  ${queryForTitle}

  align-self: center;
  color: ${colors.text.Primary4};
`;

const SummaryTextStyles = styled.div`
  ${queryForText}
`;

const OrderSummary = () => {
  return (
    <SummaryStyles>
      <SummaryTitleStyles>Podsumowanie</SummaryTitleStyles>
      <SummaryTextStyles>
        Na razie rozmyślam jak to fajnie zrobić
      </SummaryTextStyles>
      <SummaryTextStyles>Będzie jak wymyślę</SummaryTextStyles>
    </SummaryStyles>
  );
};

export default OrderSummary;
