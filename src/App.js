import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <Route path="/" exact component={MainPage} />
        <Route path="/order" exact component={OrderPage} />

        <Footer />
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
