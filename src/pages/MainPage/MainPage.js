import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import OrderLink from "./components/OrderLink/OrderLink";
import IntroSharp from "./components/IntroSharp/IntroSharp";
import IntroWax from "./components/IntroWax/IntroWax";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <Intro />
      <OrderLink />
      <IntroSharp />
      <IntroWax />
      <Footer />
    </>
  );
};

export default MainPage;
