import { put, takeLatest } from 'redux-saga/effects';
import { Settings } from '../state';

export function* updateBannerStatus(action) {
  // call api here
  console.log('action.payload', action.payload);
  yield put(Settings.saveBannerStatus(action.payload.status));
}

export function* watchBannerStatus() {
  yield takeLatest('UPDATE_BANNER_STATUS', updateBannerStatus);
}
