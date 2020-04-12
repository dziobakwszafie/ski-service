import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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

        <Route path="/ski-service/" component={MainPage} />
        <Route path="/ski-service/order" exact component={OrderPage} />

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
