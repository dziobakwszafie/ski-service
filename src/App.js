import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import Variants from "./containers/Variants";
import Edges from "./components/Edges/Edges";
import Waxing from "./components/Waxing/Waxing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Intro />

        <Route path="/variants" exact component={Variants} />

        <Edges />
        <Waxing />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;

// Login przez Googla
// sprawdzenie historii
// wypelnienie formularza z kontaktem i czynnosciami serwisu
// przeniesienie do historii
