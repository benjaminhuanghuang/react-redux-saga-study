import {takeLatest} from 'redux-saga/effects'

import {INCREMENT_ASYNC, INCREMENT} from '../constants/counter'

function* incrementAsync(){

}

export function* wathIncrementAsync() {
  
  yield takeLatest(INCREMENT, incrementAsync)
}