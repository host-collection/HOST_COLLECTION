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
