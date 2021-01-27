/* eslint-disable no-undef */
import {
  LOG_OUT,
  SET_AUTH_TOKEN,
  SET_IS_ADMIN,
} from '../actions/types.actions';

const defaultState = {
  authToken: localStorage.getItem('AUTH_TOKEN') || '',
  isAdmin: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case LOG_OUT:
      return {
        authToken: '',
        isAdmin: false,
      };
    case SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};
