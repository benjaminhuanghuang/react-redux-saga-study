
import { all } from 'redux-saga/effects'
//
import { fetchUsersWatcher } from './user'
import { wathIncrementAsync } from './counter'


export function* rootSaga() {
  yield all([
    fetchUsersWatcher(),
    wathIncrementAsync()
  ])
}