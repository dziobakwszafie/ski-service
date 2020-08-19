import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/order" exact component={OrderPage} />
      </>
    </Router>
  );
}

export default App;
