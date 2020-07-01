import React from "react";
import { connect } from "react-redux";
import SummaryContent from "../SummaryContent/SummaryContent";

const Summary = (props) => {
  return (
    <>
      {props.basketItems.map((order) => {
        {
          console.log(props);
        }
        return (
          <SummaryContent
            key={order.name}
            quantity={order.quantity}
            name={order.name}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { basketItems: Object.values(state.order.basketItems) };
};

export default connect(mapStateToProps)(Summary);
