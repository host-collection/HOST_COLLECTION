import * as userConstants from '../constants/events/user';

export const fetchUserInfo = (token) => ({
  type: userConstants.FETCH_USER_INFO,
  payload: { token }
});

export const fetchUserInfoSuccess = data => ({
  type: userConstants.FETCH_USER_INFO_SUCCESS,
  payload: { data }
});

export const fetchUserInfoFailed = error => ({
  type: userConstants.FETCH_USER_INFO_FAILED,
  payload: { error }
});
