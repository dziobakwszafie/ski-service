import React from "react";
import { connect } from "react-redux";
import OrderParams from "../OrderParams/OrderParams";

const OrderForm = (props) => {
  return (
    <>
      {props.params.map((item) => {
        return <OrderParams key={item.id} item={item} />;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { params: state.params };
};

export default connect(mapStateToProps)(OrderForm);