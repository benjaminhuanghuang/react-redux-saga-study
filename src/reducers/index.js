import {combineReducers} from 'redux';

import users from './users'
import counter from './counter'
import people from './people'

export default combineReducers({
  users,
  counter,
  people
});