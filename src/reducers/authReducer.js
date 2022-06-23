import {
  AUTH_ERROR,
  ERRORS,
  FAILURE_REGISTER,
  SET_CURRENT_USER,
  SUCCESSFUL_REGISTER,
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: {},
  errors: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case SUCCESSFUL_REGISTER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case FAILURE_REGISTER:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case ERRORS:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
