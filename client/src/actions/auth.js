import * as authConstants from '../constants/events/auth';

export const checkUser = (email, password, history) => ({
  type: authConstants.LOGIN_FLOW,
  payload: { email, password, history }
});

export const checkUserSuccess = data => ({
  type: authConstants.LOGIN_FLOW_SUCCESS,
  payload: { data }
});

export const checkUserFailed = error => ({
  type: authConstants.LOGIN_FLOW_FAILED,
  payload: { error }
});

export const setAuth = authStatus => ({
  type: authConstants.SET_AUTH,
  payload: { authStatus }
});

export const logout = (history) => ({
  type: authConstants.LOGOUT,
  payload: { history }
});
