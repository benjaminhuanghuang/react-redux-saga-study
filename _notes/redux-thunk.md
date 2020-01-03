
## Redux and middleware
Redux的核心概念其实很简单：将需要修改的state都存入到store里，dispatch一个action用来描述发生了什么，
用reducers描述action如何改变state 。
创建store的时候需要传入reducer，真正能改变store中数据的是store.dispatch 

dispatch一个action之后，到达reducer之前，可以用middleware进行一些额外的操作。比如日志记录、创建崩溃报告、调用异步接口或者路由等等。

middleware都是对store.dispatch()的增强

- middleware 雏形
要添加日志功能，把 Action 和 State 打印出来，可以对store.dispatch进行如下改造。
```
let next = store.dispatch;    // the real dispatch function

store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  next(action);
  console.log('next state', store.getState());
}
```
上面代码中，对store.dispatch进行了重定义，在发送 Action 前后添加了打印功能。这就是中间件的雏形。

## Redux-thunk
```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

redux-thunk 的主要思想是扩展 action，使得 action 从一个对象变成一个函数。


## Boilerplate
```
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  reducers, 
  applyMiddleware(thunk， logger)
);
```
applyMiddleware是Redux的一个原生方法，将所有中间件组成一个数组，依次执行。 多个middleware可以当做参数依次传进去

## redux-thunk的缺点
Thunk仅仅做了执行这个函数，并不在乎函数主体内是什么，也就是说thunk使
得redux可以接受函数作为action，但是函数的内部可以多种多样。比如下面是一个获取商品列表的异步操作所对应的action：
```
export default ()=>(dispatch)=>{
    fetch('/api/goodList',{ //fecth返回的是一个promise
      method: 'get',
      dataType: 'json',
    }).then(function(json){
      var json=JSON.parse(json);
      if(json.msg==200){
        dispatch({type:'init',data:json.data});
      }
    },function(error){
      console.log(error);
    });
};
```




## Reference
-[聊一聊 redux 异步流之 redux-saga](https://www.jianshu.com/p/e84493c7af35)
-[Redux中间件之redux-thunk使用详解](https://juejin.im/post/5bfbaeea5188254e2a0435c9)
-[redux中间件redux-thunk简单使用图文教程](https://github.com/frontend9/fe9-library/issues/214)