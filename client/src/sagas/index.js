import { all } from "redux-saga/effects";
import asideWatcher from './aside';
import authWatcher from './auth';
import userWatcher from './user';

function* rootSaga() {
  yield all([
    asideWatcher(),
    authWatcher(),
    userWatcher()
  ]);
}

export default rootSaga;
