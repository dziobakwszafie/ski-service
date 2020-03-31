import React, { Component } from "react";
import OrderWax from "../../components/OrderWax/OrderWax";

class OrderWaxCont extends Component {
  render() {
    const { data } = this.props;
    return <OrderWax details={data} />;
  }
}

export default OrderWaxCont;
