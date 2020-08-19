import React from "react";
import Header from "../../components/Header/Header";
import OrderSection from "./components/OrderSection/OrderSection";
import HistorySection from "./components/HistorySection/HistorySection";
import Footer from "../../components/Footer/Footer";
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
  return (
    <OrderPageStyles>
      <Header />
      <OrderSectionStyles>
        <OrderSection />
      </OrderSectionStyles>
      <HistorySectionStyles>
        <HistorySection />
      </HistorySectionStyles>
      <Footer />
    </OrderPageStyles>
  );
};

export default OrderPage;
