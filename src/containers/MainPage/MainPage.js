import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HeaderNavButtons from "../../components/HeaderNavButtons/HeaderNavButtons";
import Intro from "../../components/Intro/Intro";
import IntroNavButtons from "../../components/IntroNavButtons/IntroNavButtons";
import Order from "../Order/Order";
import SharpeningIntro from "../../components/SharpeningIntro/SharpeningIntro";
import WaxingIntro from "../../components/WaxingIntro/WaxingIntro";
import UpButton from "../../components/UpButton/UpButton";

function MainPage() {
  return (
    <Router>
      <React.Fragment>
        <HeaderNavButtons />
        <Intro />
        <IntroNavButtons />
        <Order />
        <SharpeningIntro />
        <WaxingIntro />
        {/* <UpButton /> */}
      </React.Fragment>
    </Router>
  );
}

export default MainPage;

// Login przez Googla
// sprawdzenie historii
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// przeniesienie do historii
