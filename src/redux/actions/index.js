import { LOADING } from "../actionTypes/types";

export const loginUser = (setLoading) => (dispatch) => {
  dispatch(setLoading(false));
};
