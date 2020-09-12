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
      setAuthHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: SET_LOADING });
    });
};

export const signup = (signupData) => (dispatch) => {
  axios
    .post("/signup", signupData)

    .then((res) => {
      console.log(res.data);
      setAuthHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: SET_LOADING });
    });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

const setAuthHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
