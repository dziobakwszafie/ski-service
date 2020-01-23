import React from "react";
import "./App.css";
import Intro from "./Intro/Intro";
import Header from "./Header/Header";
import Variants from "./Variants/Variants";
// import Edges from "./Edges/Edges";
// import Waxing from "./Waxing/Waxing";
// import Base from "./Base/Base";
// import Footer from "./Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Variants />
      {/* <Edges />
      <Waxing />
      <Base />
      <Footer /> */}
    </React.Fragment>
  );
}

export default App;

// logowanie przez googla
// sprawdzenie czy juiz kiedys cos było robione, jak tak to sugerowanie wypełnienia
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// bo zrobieniu drukowanie naklejki
// przeniesienie do historii
