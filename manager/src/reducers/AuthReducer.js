import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_ALERT
} from '../actions/types';

const InitialState = {
  email: '',
  password: '',
  user: null,
  error: null
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload };
    case CLEAR_ALERT:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
