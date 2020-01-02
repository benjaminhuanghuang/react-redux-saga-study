import {combineReducers} from 'redux'
import helloReducer from './components/Hello/helloReducer.js'
import otherReducer from './components/other/otherReducer.js'

const rootReducer = combineReducers({
    helloReducer,
    otherReducer
})
export default rootReducer