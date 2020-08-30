import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import OrderLink from "./components/OrderLink/OrderLink";
import IntroSharp from "./components/IntroSharp/IntroSharp";
import IntroWax from "./components/IntroWax/IntroWax";
import Try from "./try";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <Intro />
      <OrderLink />
      <IntroSharp />
      <IntroWax />
      <Try />
      <Footer />
    </>
  );
};

export default MainPage;
