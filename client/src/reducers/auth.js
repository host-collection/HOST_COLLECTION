import * as authConstants from '../constants/events/auth';
import { mySwal as failedToast } from '../commons/AlertHelper';
const initialState = {
  userId: '',
  token: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.COMPARE_USER: {
      return {
        ...state,
        userId: ''
      };
    }
    case authConstants.COMPARE_USER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userId: data
      };
    }
    case authConstants.COMPARE_USER_FAILED: {
      return {
        ...state,
        userId: ''
      };
    }
    case authConstants.LOGIN_TO_GET_TOKEN: {
      return {
        ...state,
        token: ''
      };
    }
    case authConstants.LOGIN_TO_GET_TOKEN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        token: data.access_token
      };
    }
    case authConstants.LOGIN_TO_GET_TOKEN_FAILED: {
      failedToast('Email or password is wrong', 'top-center');
      return {
        ...state,
        token: ''
      };
    }
    default:
      return state;
  }
};

export default reducer;
