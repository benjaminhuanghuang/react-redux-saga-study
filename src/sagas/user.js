import axios from 'axios'

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

function* fetchUsers(){
  const users = yield call([axios, axios.get], 'http://5826ed963900d612000138bd.mockapi.io/items');
  yield put({type:'FETCH_USER_SUCCESS', payload:users.data});
}


export function* fetchUsersWatcher(){
  yield takeEvery('FETCH_USER', fetchUsers);
}


