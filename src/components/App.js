import React from "react";
import "./App.css";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Variants from "./Variants/Variants";
import Divider from "./Divider/Divider";
import Edges from "./Edges/Edges";
import Waxing from "./Waxing/Waxing";
import Footer from "./Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Variants />
      <Divider />
      <Edges />
      <Divider />
      <Waxing />
      <Footer />
    </React.Fragment>
  );
}

export default App;

// logowanie przez googla
// sprawdzenie czy juiz kiedys cos było robione, jak tak to sugerowanie wypełnienia
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// bo zrobieniu drukowanie naklejki
// przeniesienie do historii
