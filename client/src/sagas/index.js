import {
  fork, call, put, delay, take, takeEvery
} from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/loading";
import { getLocation, getBannerAside, getGeneralInfo } from "../apis/general";
import { searchUser, checkUser } from '../apis/auth';
import * as generalConstants from "../constants/events/general";
import * as authConstants from '../constants/events/auth';
import { STATUS_CODE } from "../constants";
import {
  fetchLocationSuccess,
  fetchLocationFailed,
  fetchBannerAsideSuccess,
  fetchBannerAsideFailed,
  fetchGeneralInfoSuccess,
  fetchGeneralInfoFailed
} from "../actions/general";
import { compareUserSuccess, checkUserSuccess, checkUserFailed } from '../actions/auth';

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

// function* compareUserAction() {
//   while (true) {
//     const action = yield take(authConstants.COMPARE_USER);
//     const { params } = action.payload;
//     const res = yield call(searchUser, params);
//     const { data } = res;
//     yield put(compareUserSuccess(data));
//   }
// }

function* checkUserSaga({ payload }) {
  try {
    const { email, password, history } = payload;
    yield put(showLoading());
    const res = yield call(checkUser, {
      email,
      password
    });
    const { data } = res;
    if (data) {
      const userInfo = yield call(searchUser, email);
      if (userInfo.data[0]) {
        const userId = userInfo.data[0].id;
        yield put(compareUserSuccess(userId));
        localStorage.setItem('userId', userId);
      }
      localStorage.setItem('token', data.access_token);
      yield put(checkUserSuccess(data));
      history.push('/');
    }
    yield delay(1000);
  } catch (error) {
    yield put(checkUserFailed(error));
  }
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchLocationAction);
  yield fork(watchFetchBannerAsideAction);
  yield fork(watchFetchGeneralInfoAction);
  yield takeEvery(authConstants.LOGIN_TO_GET_TOKEN, checkUserSaga);
}

export default rootSaga;
