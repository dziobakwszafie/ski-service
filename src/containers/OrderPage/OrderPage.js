import React from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import OrderSharpening from "../../components/OrderSharpening/OrderSharpening";
import OrderWaxing from "../../components/OrderWaxing/OrderWaxing";
import Summary from "../../components/Summary/Summary";

function OrderPage() {
  return (
    <React.Fragment>
      <OrderSharpening />
      <OrderWaxing />
      <Summary />
    </React.Fragment>
  );
}

export default OrderPage;

// Login przez Googla
// sprawdzenie historii
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// przeniesienie do historii
