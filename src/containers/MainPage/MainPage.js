import React from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import HeaderNavButtons from "../../components/HeaderNavButtons/HeaderNavButtons";
import Intro from "../../components/Intro/Intro";
import IntroNavButtons from "../../components/IntroNavButtons/IntroNavButtons";
import Order from "../Order/Order";
import IntroSharp from "../../components/IntroSharp/IntroSharp";
import IntroWax from "../../components/IntroWax/IntroWax";
// import UpButton from "../../components/UpButton/UpButton";

function MainPage() {
  return (
    <React.Fragment>
      <HeaderNavButtons />
      <Intro />
      <IntroNavButtons />
      <Order />
      <IntroSharp />
      <IntroWax />
      {/* <UpButton /> */}
    </React.Fragment>
  );
}

export default MainPage;

// Login przez Googla
// sprawdzenie historii
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// przeniesienie do historii
