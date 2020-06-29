import React from "react";
import * as S from "./BasketIcon.styles";
import { connect } from "react-redux";
import { toggleCart } from "../../../../actions/actions";

const BasketIcon = (props) => {
  return (
    <S.BasketIcon onClick={props.toggleCart}>
      <S.BasketCart />
      <S.ItemCount>0</S.ItemCount>
    </S.BasketIcon>
  );
};

export default connect(null, { toggleCart })(BasketIcon);
