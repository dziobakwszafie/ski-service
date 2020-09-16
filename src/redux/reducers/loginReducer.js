import {
  SET_LOADING,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_SUCCESS_MESSAGE,
  SET_USER,
} from "../actionTypes/types";

const initialState = {
  loadingMessage: false,
  successMessage: false,
  authenticated: false,
  credentials: {},
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loadingMessage: !state.loadingMessage,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: !state.successMessage,
      };
    case SET_USER:
      return {
        authenticated: true,
        successMessage: state.successMessage,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
}
