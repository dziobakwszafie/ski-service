import { combineReducers } from "redux";
import params from "./ParamsReducer";
import basket from "./ServiceReducer";

export default combineReducers({
  params: params,
  basket: basket,
});
