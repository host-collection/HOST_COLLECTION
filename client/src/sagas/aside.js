import {
  fork, call, put, delay, take
} from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import { getLocation, getBannerAside, getGeneralInfo } from "../apis/general";
import * as generalConstants from "../constants/events/general";
import { STATUS_CODE } from "../constants";
import {
  fetchLocationSuccess,
  fetchLocationFailed,
  fetchBannerAsideSuccess,
  fetchBannerAsideFailed,
  fetchGeneralInfoSuccess,
  fetchGeneralInfoFailed
} from "../actions/general";


function* watchFetchLocationAction() {
  while (true) {
    yield take(generalConstants.FETCH_LOCATION);
    yield put(showLoading());
    const res = yield call(getLocation);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchLocationSuccess(data));
      yield put(hideLoading());
    } else {
      yield put(fetchLocationFailed(data));
    }
    yield put(hideLoading());
  }
}

function* watchFetchBannerAsideAction() {
  while (true) {
    yield take(generalConstants.FETCH_BANNER_ASIDE);
    yield put(showLoading());
    const res = yield call(getBannerAside);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield delay(500);
      yield put(fetchBannerAsideSuccess(data));
      yield put(hideLoading());
    } else {
      yield put(hideLoading());
      yield put(fetchBannerAsideFailed(data));
    }
  }
}

function* watchFetchGeneralInfoAction() {
  while (true) {
    yield take(generalConstants.FETCH_GENERAL_INFORMATION);
    const res = yield call(getGeneralInfo);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchGeneralInfoSuccess(data));
    } else {
      yield put(fetchGeneralInfoFailed(data));
    }
  }
}

export default function* asideWatcher() {
  yield fork(watchFetchLocationAction);
  yield fork(watchFetchBannerAsideAction);
  yield fork(watchFetchGeneralInfoAction);
}
