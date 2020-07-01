import { ADD_ORDER, TOGGLE_CART } from "../actionTypes/actionTypes";

export const addToBasket = (order) => {
  return { type: ADD_ORDER, payload: order };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};
