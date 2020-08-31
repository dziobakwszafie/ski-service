import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import axios from "axios";
import { customTheme } from "./util/theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/order" exact component={OrderPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
