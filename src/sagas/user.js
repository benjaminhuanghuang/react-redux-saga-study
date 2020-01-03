import axios from 'axios'

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

function* fetchUsers(){
  const users = yield call([axios, axios.get], 'url');
  yield put({type:'FETCH_USER_SUCCESS', payload:users.data});
}


export function* fetchUsersWatcher(){
  yield takeEvery('FETCH_USER', fetchUsers);
}


