import * as authConstants from '../constants/events/auth';


export const compareUser = params => ({
  type: authConstants.COMPARE_USER,
  payload: { params }
});

export const compareUserSuccess = data => ({
  type: authConstants.COMPARE_USER_SUCCESS,
  payload: { data }
});

export const compareUserFailed = error => ({
  type: authConstants.COMPARE_USER_FAILED,
  payload: { error }
});

export const checkUser = (email, password, history) => ({
  type: authConstants.LOGIN_TO_GET_TOKEN,
  payload: { email, password, history }
});

export const checkUserSuccess = data => ({
  type: authConstants.LOGIN_TO_GET_TOKEN_SUCCESS,
  payload: { data }
});

export const checkUserFailed = error => ({
  type: authConstants.LOGIN_TO_GET_TOKEN_FAILED,
  payload: { error }
});
