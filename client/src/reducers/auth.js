import * as authConstants from '../constants/events/auth';
import { mySwal as failedToast } from '../commons/AlertHelper';

const initialState = {
  token: '',
  userId: '',
  location: '0'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SET_AUTH: {
      const { authStatus } = action.payload;
      return {
        ...state,
        authStatus
      };
    }
    case authConstants.LOGIN_FLOW: {
      return {
        ...state,
        token: ''
      };
    }
    case authConstants.LOGIN_FLOW_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        token: data.token
      };
    }
    case authConstants.LOGIN_FLOW_FAILED: {
      failedToast('Email or password is wrong, Please try again!', 'center');
      return {
        ...state,
        token: ''
      };
    }
    case authConstants.LOGOUT: {
      return {
        ...state,
        userId: '',
        token: '',
        location: '0',
        name: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
