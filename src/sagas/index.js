
import { all } from 'redux-saga/effects'
//
import { fetchUsersWatcher } from './user'
import { wathIncrementAsync } from './counter'
import { watchAgeUp} from './people'


export function* rootSaga() {
  yield all([
    fetchUsersWatcher(),
    wathIncrementAsync(),
    watchAgeUp()
  ])
}