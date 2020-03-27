import React from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import HeaderNavButtons from "../../components/HeaderNavButtons/HeaderNavButtons";
import Intro from "../../components/Intro/Intro";
import IntroNavButtons from "../../components/IntroNavButtons/IntroNavButtons";
import Order from "../Order/Order";
import SharpeningIntro from "../../components/SharpeningIntro/SharpeningIntro";
import WaxingIntro from "../../components/WaxingIntro/WaxingIntro";
// import UpButton from "../../components/UpButton/UpButton";

function MainPage() {
  return (
    <React.Fragment>
      <HeaderNavButtons />
      <Intro />
      <IntroNavButtons />
      <Order />
      <SharpeningIntro />
      <WaxingIntro />
      {/* <UpButton /> */}
    </React.Fragment>
  );
}

export default MainPage;

// Login przez Googla
// sprawdzenie historii
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// przeniesienie do historii
