import {put} from 'redux-saga/effects';

export function* fetchUser() {
  try {
    const user: any = '';
    yield put({type: 'USER_FETCH_SUCCEEDED', user: user});
  } catch (e: any) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}
