import {
  TOGGLE_CART,
  ADD_SERVICE,
} from "../actionTypes/actionTypes";
import _ from "lodash";

const INITIAL_STATE = {
  hidden: false,
  basketItems: [],
};

export const addItemToBasket = (
  basketItems,
  basketItemToAdd
) => {
  const existingCartItem = basketItems.find(
    (basketItem) => basketItem.id === basketItemToAdd.id
  );

  if (existingCartItem) {
    return basketItems.map((basketItem) =>
      basketItem.id === basketItemToAdd.id
        ? {
            ...basketItem,
            quantity: basketItem.quantity + 1,
          }
        : basketItem
    );
  }

  return [
    ...basketItems,
    { ...basketItemToAdd, quantity: 1 },
  ];
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case ADD_SERVICE:
      return {
        ...state,
        basketItems: addItemToBasket(
          state.basketItems,
          action.payload
        ),
      };

    default:
      return state;
  }
};
