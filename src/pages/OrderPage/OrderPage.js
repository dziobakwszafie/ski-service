import React, { Component } from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import OrderSharpCont from "../OrderSharpCont";
import OrderWaxCont from "../OrderWaxCont";
import Summary from "./Summary/Summary";

class OrderPage extends Component {
  render() {
    return (
      <React.Fragment>
        <OrderSharpCont />
        <OrderWaxCont />
        <Summary />
      </React.Fragment>
    );
  }
}

export default OrderPage;

//Login przez Googla
//sprawdzenie historii
//wypelnienie formularza z kontaktem i czynnosciami serwisu
//przeniesienie do historii

//logowanie oauth2.0 + openidconnect
//biblioteka ktora umozliwa logowanie w reakcie react-oidc
