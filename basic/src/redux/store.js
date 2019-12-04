import promiseMiddleware from 'redux-promise';
/* import saga  from  './saga' */
const { createStore, applyMiddleware } = require('redux')
/* import thunk from 'redux-thunk' */
/* const createSagaMiddleware = require('redux-saga').default
const sagaMiddleware = createSagaMiddleware() */
const reducers  = require('./reducers')
const store = createStore(reducers,applyMiddleware(promiseMiddleware))
/* sagaMiddleware.run(saga) */
//thunk测试 
/* store.dispatch((dispatch)=>{
    setTimeout(()=>{
        dispatch({
            type : 'increment'
        })
    },3000)
}) */

//saga

/* store.dispatch({
    type:'loadDada'
}) */

store.dispatch(
    new Promise((resolve)=>{
       setTimeout(()=>{
        resolve(({
                type:'increment'
            }))
       },2000)
    })
)

export default store