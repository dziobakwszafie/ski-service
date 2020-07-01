import React from "react";
import * as S from "./SummaryContent.styles";

const Summary = (props) => {
  return (
    <S.SummaryContent>
      <h2>Podsumowanie</h2>
      <p>{props.quantity}</p>
      <p>{props.name}</p>
    </S.SummaryContent>
  );
};

export default Summary;
