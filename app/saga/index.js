import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './Login';
import { watchBannerStatus } from './Settings';

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchBannerStatus)]);
}
