import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./containers/MainPage/MainPage";
import OrderPage from "./containers/OrderPage/OrderPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>

        <Switch>
          <Route path="/main" exact component={MainPage} />
          <Route path="/order" exact component={OrderPage} />
        </Switch>

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
