
import {takeEvery,put, delay} from 'redux-saga/effects'

import {INCREMENT_ASYNC, INCREMENT} from '../constants/counter'


// do async operation like api calling
function* incrementAsync(){
  yield delay(3000)
  yield put({type: INCREMENT})
}

export function* wathIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

