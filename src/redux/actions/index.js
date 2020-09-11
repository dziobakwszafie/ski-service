import {
  SET_LOADING,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "../actionTypes/types";
import axios from "axios";

export const login = (loginData) => (dispatch) => {
  axios
    .post("/login", loginData)

    .then((res) => {
      console.log(res.data);
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      dispatch({ type: SET_LOADING });
    });
};
