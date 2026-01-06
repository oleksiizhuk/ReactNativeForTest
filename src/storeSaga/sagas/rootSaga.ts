import { takeEvery } from 'redux-saga/effects'
import { StoreSagas } from './type'
import { firstAction } from '../actions/app'

export function rootSaga(sagas: StoreSagas, _extaRootSaga?: () => any) {
  const { fetchUser } = sagas

  return function* testSaga() {
    yield takeEvery(firstAction.type, fetchUser)
  }
}
