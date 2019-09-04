import {
  call, put, delay, takeEvery
} from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import { checkUser } from "../apis/auth";
import * as authConstants from "../constants/events/auth";

import {
  checkUserSuccess,
  checkUserFailed,
  setAuth
} from "../actions/auth";


function* loginFlow({ payload }) {
  try {
    const { email, password, history } = payload;
    yield put(showLoading());
    const res = yield call(checkUser, { email, password });
    const { data } = res;
    if (data) {
      yield put(checkUserSuccess(data));
      yield put(setAuth('2'));
      localStorage.setItem("token", data.access_token);
      if (history.goBack()) {
        history.goBack();
      } else {
        history.push('/');
      }
      window.location.reload();
    }
    yield delay(1000);
  } catch (error) {
    yield put(checkUserFailed(error));
  }
  yield put(hideLoading());
}

function* logoutFlow({ payload }) {
  const { history } = payload;
  yield put(showLoading());
  yield put(setAuth('3'));
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  yield delay(1000);
  yield put(hideLoading());
  window.location.reload();
  history.push('/');
}

export default function* authWatcher() {
  yield takeEvery(authConstants.LOGIN_FLOW, loginFlow);
  yield takeEvery(authConstants.LOGOUT, logoutFlow);
}
