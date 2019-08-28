import {
  fork,
  call,
  put,
  delay,
} from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import { getLocation } from '../apis/general';
import { STATUS_CODE } from "../constants";
import { fetchLocationSuccess, fetchLocationFailed } from '../actions/general';

function* watchFetchLocationAction() {
  yield put(showLoading());
  const res = yield call(getLocation);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchLocationSuccess(data));
    yield put(hideLoading());
  } else {
    yield put(fetchLocationFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchLocationAction);
}

export default rootSaga;
