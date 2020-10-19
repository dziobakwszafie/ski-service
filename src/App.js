import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HistoryPage from "./pages/HistoryPage";
import PricesPage from "./pages/PricesPage";
import AuthRoute from "./util/AuthRoute";
import store from "./redux/reducers";
import { customTheme } from "./util/theme";
import { logoutUser, getUserData } from "./redux/actions/loginActions";
import { SET_AUTHENTICATED } from "./redux/actionTypes/loginTypes";

axios.defaults.baseURL =
  // "http://localhost:5000/ski-service-91995/europe-west3/api";
  "https://europe-west3-ski-service-91995.cloudfunctions.net/api";

const App = () => {
  let authenticated;

  const token = localStorage.FBIdToken;

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      window.location.href = "/login";
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common.Authorization = token;
      store.dispatch(getUserData());
    }
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <AuthRoute
            path="/login"
            exact
            component={LoginPage}
            authenticated={authenticated}
          />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/history" exact component={HistoryPage} />
          <Route path="/prices" exact component={PricesPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
