import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 
import rootReducer from './reducers'
// Saga
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'

const saga = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))
saga.run(rootSaga)   // Start saga

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')); 