import { LOADING } from "../actionTypes/types";

export const loading = (setLoading) => (dispatch) => {
  dispatch({ type: LOADING });
};
