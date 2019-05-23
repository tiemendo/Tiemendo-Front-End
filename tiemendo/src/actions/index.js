import axios from 'axios';
import {history} from '../helpers/history';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Register
export const register = (creds) => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios.post('https://chasegarsee-tiemendo.herokuapp.com/newuser'
  , creds)
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
  return axios
  .post('https://chasegarsee-tiemendo.herokuapp.com/login', creds)
  .then(res => {
    console.log(res.data)
    localStorage.setItem('token', res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch({type: LOGIN_FAILURE, payload: err})
  })
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
   return axios
    .get('https://chasegarsee-tiemendo.herokuapp.com/clients')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err))
    
};

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteClients = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`https://chasegarsee-tiemendo.herokuapp.com/client/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err))
};

export const ADD_CLIENT_START = 'ADD_CLIENT_START';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const ADD_CLIENT_FAILURE = 'ADD_CLIENT_FAILURE';

export const addClient = (newClient) => dispatch => {
  dispatch({ type: ADD_CLIENT_START })
  axios
    .post('https://chasegarsee-tiemendo.herokuapp.com/client', newClient)
    .then(res => {
      dispatch({ type: ADD_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err))

}