import React from "react";
import OrderForm from "./components/OrderForm/OrderForm";
import Summary from "./components/Summary/Summary";

const OrderPage = (props) => {
  return (
    <>
      <OrderForm />
      <Summary />
    </>
  );
};

export default OrderPage;
