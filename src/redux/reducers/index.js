import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import loadingReducer from "./loadingReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({ loadingReducer });

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
