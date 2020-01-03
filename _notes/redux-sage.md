

redux saga is a library the aim to hadle side effects (data fetching) in React redux applicaiton

generators are used to make the async code easier to read, write and test

## Install
```
  npm i redux-saga
```

## Boilerplate
```
import {creatStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'resux-saga'

import reducer from './reducers'
import rootSaga from './sagas'


const sageMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(createSagaMiddleware))

sagaMiddlewaer.run(rootSaga)
```

## Watchers and Workers
watcher see every action that is dispatched to redux store
If it matches the action they are told to handle, the assign ti to worker




## Testing

## Reference
-[聊一聊 redux 异步流之 redux-saga](https://www.jianshu.com/p/e84493c7af35)
-[轻松学 Redux-Saga #1 课程简介与 Redux-Saga 介绍](https://www.youtube.com/watch?v=JuX9aJhvO_s&t=26s)
-[从redux-thunk到redux-saga实践] (https://github.com/Pines-Cheng/blog/issues/9)
-[彻彻底底教会你使用Redux-saga(包含样例代码)](https://segmentfault.com/a/1190000015583055)