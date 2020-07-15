import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" exact component={MainPage} />
        <Route path="/order" exact component={OrderPage} />
      </React.Fragment>
    </Router>
  );
}

export default App;

//todo
//dodanie parametrów z zamówienia do Store'a
//wyświetlenie na stronie
//przesłanie ich do bazy danych
//wyświetlenie poprzednich zamówień na stronie
