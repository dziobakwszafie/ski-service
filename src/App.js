import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import Variants from "./components/Variants/Variants";
import Edges from "./components/Edges/Edges";
import Waxing from "./components/Waxing/Waxing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Variants />
      <Edges />
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
