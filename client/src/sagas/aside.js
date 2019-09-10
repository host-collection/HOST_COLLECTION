import {
  fork, call, put, delay, take
} from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import { getLocation, getBannerAside, getGeneralInfo } from "../apis/general";
import * as generalConstants from "../constants/events/general";
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
    try {
      yield take(generalConstants.FETCH_LOCATION);
      yield put(showLoading());
      const res = yield call(getLocation);
      yield delay(500);
      yield put(fetchLocationSuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchLocationFailed(error));
    }
  }
}

function* watchFetchBannerAsideAction() {
  while (true) {
    try {
      yield take(generalConstants.FETCH_BANNER_ASIDE);
      yield put(showLoading());
      const res = yield call(getBannerAside);
      yield delay(500);
      yield put(fetchBannerAsideSuccess(res.data));
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchBannerAsideFailed(error));
    }
  }
}

function* watchFetchGeneralInfoAction() {
  while (true) {
    try {
      yield take(generalConstants.FETCH_GENERAL_INFORMATION);
      yield put(showLoading());
      const res = yield call(getGeneralInfo);
      yield put(fetchGeneralInfoSuccess(res.data));
      yield delay(500);
      yield put(hideLoading());
    } catch (error) {
      yield put(hideLoading());
      yield put(fetchGeneralInfoFailed(error));
    }
  }
}

export default function* asideWatcher() {
  yield fork(watchFetchLocationAction);
  yield fork(watchFetchBannerAsideAction);
  yield fork(watchFetchGeneralInfoAction);
}
