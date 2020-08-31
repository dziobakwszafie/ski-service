import { LOADING } from "../actionTypes/types";

const initialState = { loadingMessage: false };

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loadingMessage: !state.loadingMessage,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default loadingReducer;

//https://codesandbox.io/s/react-redux-hook-by-indrek-lasn-forked-ehm0d?file=/package.json
//https://medium.com/better-programming/how-to-use-redux-with-react-hooks-5422a7ceae6e
