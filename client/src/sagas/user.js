import {
  call, put, fork, take
} from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import * as userConstants from '../constants/events/user';
import { fetchUserInfoSuccess, fetchUserInfoFailed } from '../actions/user';
import { getUserInfo } from '../apis/user';
import { expiredLoginToast } from '../commons/AlertHelper';

function* userGeneralInfo() {
  while (true) {
    yield put(showLoading());
    yield take(userConstants.FETCH_USER_INFO);
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const res = yield call(getUserInfo, token);
        const { data } = res;
        yield put(fetchUserInfoSuccess(data));
        yield put(hideLoading());
      } catch (error) {
        expiredLoginToast('Login session has expired', 'top-center');
        localStorage.removeItem("token");
        fetchUserInfoFailed(error);
        yield put(hideLoading());
      }
    }
  }
}

export default function* userWatcher() {
  yield fork(userGeneralInfo);
}
