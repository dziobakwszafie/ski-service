import React from "react";
import { connect } from "react-redux";
import OrderForms from "./components/OrderForms/OrderForms";

const OrderPage = (props) => {
  return (
    <div>
      {props.params.map(({ id, ...otherProps }) => {
        return <OrderForms key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { params: state.params };
};

export default connect(mapStateToProps)(OrderPage);
