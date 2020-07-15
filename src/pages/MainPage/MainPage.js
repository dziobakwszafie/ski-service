import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Order from "./components/Order/Order";
import IntroSharp from "./components/IntroSharp/IntroSharp";
import IntroWax from "./components/IntroWax/IntroWax";

const MainPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Order />
      <IntroSharp />
      <IntroWax />
      <Footer />
    </>
  );
};

export default MainPage;
