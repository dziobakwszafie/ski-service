import React, { Component } from "react";
import OrderWax from "../../components/OrderWax/OrderWax";

class OrderWaxCont extends Component {
  render() {
    const { data } = this.props;
    return <OrderWax detailsWax={data} />;
  }
}

export default OrderWaxCont;
