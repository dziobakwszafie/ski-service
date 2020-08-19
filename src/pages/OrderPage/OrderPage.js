import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginSection from "./components/LoginSection/LoginSection";
import OrderSection from "./components/OrderSection/OrderSection";
import HistorySection from "./components/HistorySection/HistorySection";
import Footer from "./components/Footer/Footer";
// import AuthRoute from "../../util/AuthRoute";
import styled from "styled-components";
import jwtDecode from "jwt-decode";

const OrderPageStyles = styled.div``;

const OrderSectionStyles = styled.div`
  width: 100%;
`;
const HistorySectionStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

let authenticated;
const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    authenticated = false;
    console.log("Niezalogowany");
  } else {
    authenticated = true;
    console.log("Zalogowany");
  }
}

const OrderPage = () => {
  // let [OrderForm, showOrderForm] = useState();

  // showOrderForm(
  //   (OrderForm = authenticated === true ? <OrderSection /> : <LoginSection />)
  // );

  return (
    <OrderPageStyles>
      <Header />
      <OrderSectionStyles>
        <Switch>
          <Route
            exact
            path="/order/login"
            component={LoginSection}
            authenticated={authenticated}
          />
          {/* <AuthRoute
            exact
            path="/"
            component={LoginSection}
            authenticated={authenticated}
          />
          <AuthRoute
            exact
            path="/"
            component={OrderSection}
            authenticated={authenticated}
          /> */}
        </Switch>
      </OrderSectionStyles>
      <HistorySectionStyles>
        <HistorySection />
      </HistorySectionStyles>
      <Footer />
    </OrderPageStyles>
  );
};

export default OrderPage;
