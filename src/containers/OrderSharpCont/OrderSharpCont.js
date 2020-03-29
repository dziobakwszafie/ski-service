import React, { Component } from "react";
import OrderSharp from "../../components/OrderSharp/OrderSharp";

class OrderSharpCont extends Component {
  render() {
    const { data } = this.props;
    return <OrderSharp detailsSharp={data} />;
  }
}

export default OrderSharpCont;
