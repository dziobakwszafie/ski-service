import { combineReducers } from "redux";
import params from "./ParamsReducer";
import order from "./OrderReducer";

export default combineReducers({
  params: params,
  order: order,
});
