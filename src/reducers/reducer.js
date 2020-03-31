import data from "../all-data.json";
import { APPLY_SHARP } from "../actionTypes/actionTypes";

const rootReducer = (state = data) => {
  switch (action.type) {
    case APPLY_SHARP:
      return orderSharpParam(state);

    default:
      return state;
  }
};

const orderSharpParam = state => {
  return state;
};

export default rootReducer;

//do przeczytania https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference?fbclid=IwAR3NL93Yxa9L8i7RvjxGLn6qFPV9udiRK0COD3O73NKwn3wsCE3qSd9cV6w
//https://devhints.io/es6
