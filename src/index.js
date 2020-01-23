import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./reducers/reducer";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
