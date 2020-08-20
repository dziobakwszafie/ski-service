import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthRoute from "./util/AuthRoute";
import jwtDecode from "jwt-decode";

let authenticated;
const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
    console.log("Niezalogowany");
  } else {
    authenticated = true;
    console.log("Zalogowany");
  }
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <AuthRoute
          path="/login"
          exact
          component={LoginPage}
          authenticated={authenticated}
        />
        <Route path="/order" exact component={OrderPage} />
      </Switch>
    </Router>
  );
};

export default App;
