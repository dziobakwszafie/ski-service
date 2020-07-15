import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import OrderLink from "./components/OrderLink/OrderLink";
import IntroSharp from "./components/IntroSharp/IntroSharp";
import IntroWax from "./components/IntroWax/IntroWax";

const MainPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <OrderLink />
      <IntroSharp />
      <IntroWax />
      <Footer />
    </>
  );
};

export default MainPage;
