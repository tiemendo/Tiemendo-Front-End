import {
    USER_UNAUTHORIZED,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DELETE_START,
    DELETE_SUCCESS,
    ADD_CLIENT_START,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_FAILURE,
    EDIT_CLIENT_START,
    EDIT_CLIENT_SUCCESS,
    EDIT_CLIENT_FAILURE
  } from '../actions';
  
  const initialState = {
    addingClient: false,
    clients: [],
    loggingIn: false,
    deletingClient: false,
    editingClient: false,
    error: '',
    errorStatusCode: null,
    fetchingClients: false,
    token: localStorage.getItem('token')
  };
  
  const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case FETCH_DATA_START:
        return {
          ...state,
          fetchingClients: true
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingClients: false,
          clients: action.payload
        };
      case DELETE_START:
        return {
          ...state,
          deletingClient: true
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          deletingClient: false,
          error: '',
          errorStatusCode: null,
          clients: action.payload
        };
      case USER_UNAUTHORIZED:
        console.log(action);
        return {
          ...state,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status,
          fetchingClients: false
        };
      case ADD_CLIENT_START:
        return {
          ...state,
          addingClient: true
        };
      case ADD_CLIENT_SUCCESS:
        return {
          ...state,
          addingClient: false,
          error: '',
          errorStatusCode: null,
          clients: action.payload
        };
      // case EDIT_CLIENT_START:
      //   return {
      //     ...state,
      //     editingClient: true
      //   };
      // case EDIT_CLIENT_SUCCESS:
      //   return {
      //     ...state,
      //     editingClient: false,
      //     error: '',
      //     errorStatusCode: null,
      //     clients: action.payload
      //   };
      default:
        return state;
    }
  };
  
  export default reducer;
  