import { combineReducers } from 'redux'
import helloReducer from './components/Hello/helloReducer.js'
import otherReducer from './components/other/otherReducer.js'
import exampleReducer from './components/example/exampleReducer.js'

const rootReducer = combineReducers({
    hello: helloReducer,
    otherReducer,
    exampleReducer
})
export default rootReducer