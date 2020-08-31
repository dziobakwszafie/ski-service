import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Content from "./components/Content/Content";
import Intro from "./components/Intro/Intro";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <Intro />
      <Content />
      <Footer />
    </>
  );
};

export default MainPage;
