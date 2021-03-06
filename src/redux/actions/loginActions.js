import axios from 'axios';
import {
  SET_LOADING,
  SET_AUTHENTICATED,
  SET_SUCCESS_MESSAGE,
  SET_UNAUTHENTICATED,
  SET_USER,
} from '../actionTypes/loginTypes';

const setAuthHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common.Authorization = FBIdToken;
};

export const getUserData = () => (dispatch) => {
  axios.get('/user').then((res) => {
    dispatch({
      type: SET_USER,
      payload: res.data,
    });
  });
  // .catch((err) => console.log(err));
};

export const login = (loginData) => (dispatch) => {
  axios
    .post('/login', loginData)

    .then((res) => {
      setAuthHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: SET_LOADING });
      dispatch({ type: SET_AUTHENTICATED });
    });
};

export const signup = (signupData) => (dispatch) => {
  axios
    .post('/signup', signupData)

    .then((res) => {
      setAuthHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: SET_LOADING });
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: SET_SUCCESS_MESSAGE });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common.Authorization;
  dispatch({ type: SET_UNAUTHENTICATED });
};
