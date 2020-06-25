import React, { Component } from "react";
import OrderSharp from "../../components/OrderSharp/OrderSharp";

class OrderSharpCont extends Component {
  render() {
    const { infos } = this.props;
    return <OrderSharp details={infos} />;
  }
}

export default OrderSharpCont;
