import axios from 'axios';
import {history} from '../helpers/history';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Register
export const register = (creds) => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios.post(`${URL}/api/auth/register`, creds)
  .then((res) => {
    console.log(res);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('id', res.data.id);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.token, id: res.data.id });
  })
  .catch((err) => {
    console.log(err);
    dispatch({ type: REGISTER_FAIL, payload: err});
  })
}

// Login
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('http://localhost:5000/api/login', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteClients = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};

export const ADD_CLIENT_START = 'ADD_CLIENT_START';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const ADD_CLIENT_FAILURE = 'ADD_CLIENT_FAILURE';

export const addClient = client => dispatch => {
  dispatch({ type: ADD_CLIENT_START });
  return axios
    .post('http://localhost:5000/api/friends', client, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: ADD_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: ADD_CLIENT_FAILURE, payload: err.response });
      }
    });
};

export const EDIT_CLIENT_START = 'EDIT_CLIENT_START';
export const EDIT_CLIENT_SUCCESS = 'EDIT_CLIENT_SUCCESS';
export const EDIT_CLIENT_FAILURE = 'EDIT_CLIENT_FAILURE';

export const editClient = client => dispatch => {
  dispatch({ type: EDIT_CLIENT_START });
  return axios
    .put(`http://localhost:5000/api/friends/${client.id}`, client, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: EDIT_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_CLIENT_FAILURE, payload: err.response });
      }
    });
};