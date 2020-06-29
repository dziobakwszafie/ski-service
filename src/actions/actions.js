import {
  ADD_SERVICE,
  TOGGLE_CART,
} from "../actionTypes/actionTypes";

export const addToBasket = (service) => {
  return { type: ADD_SERVICE, payload: service };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};
