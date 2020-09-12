import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AuthRoute from "./util/AuthRoute";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { customTheme } from "./util/theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

let authenticated;
const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    // window.location.href = "/ski-service/login";
    authenticated = false;
    console.log("Niezalogowany");
  } else {
    authenticated = true;
    console.log("Zalogowany");
  }
}

axios.defaults.baseURL =
  // "http://localhost:5000/ski-service-91995/europe-west3/api";
  "https://europe-west3-ski-service-91995.cloudfunctions.net/api";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <AuthRoute
            path="/login"
            exact
            component={LoginPage}
            authenticated={authenticated}
          />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/order" exact component={OrderPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
