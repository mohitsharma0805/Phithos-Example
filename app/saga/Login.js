import { put, takeLatest } from 'redux-saga/effects';
import { User } from '../state';

export function* login(action) {
  // call api here
  yield put(User.saveUser(action.payload));
}

export function* watchLogin() {
  yield takeLatest('LOGIN', login);
}
