

redux saga is a library the aim to hadle side effects (data fetching) in React redux applicaiton

generators are used to make the async code easier to read, write and test

Boilerplate
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


-[轻松学 Redux-Saga #1 课程简介与 Redux-Saga 介绍]()