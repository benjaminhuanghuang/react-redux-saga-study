import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//
import { Provider } from 'react-redux'  //新引入
import { createStore, applyMiddleware } from 'redux' //新引入, thunk is a middleware need applyMiddleware
import thunk from 'redux-thunk'
import rootReducer from './rootReducer.js'  //新引入

// For saga
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'

//注释 const store = createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))   //引入 thunk and saga
sagaMiddleware.run(helloSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
