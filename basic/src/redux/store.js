/* import promiseMiddleware from 'redux-promise'; */
/* import saga  from  './saga' */
const { createStore, bindActionCreators } = require('redux')
/* import thunk from 'redux-thunk' */
/* const createSagaMiddleware = require('redux-saga').default
const sagaMiddleware = createSagaMiddleware() */
const reducers  = require('./reducers')
const store = createStore(reducers)
/* store.subscribe(()=>{
    console.log(store.getState());
    
}) */
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

/* store.dispatch(
    new Promise((resolve)=>{
       setTimeout(()=>{
        resolve(({
                type:'increment'
            }))
       },2000)
    })
)
 */

 const { show } = require('./action_creators/show')
 const counterCreators = require('./action_creators/counter')
/* store.dispatch(show({
    type : 'show',
    data : 'hello rsr'
}))
store.dispatch(increment()) */
/* export default store */

/* const bac = bindActionCreators(counterCreators,dispatch) */

module.exports = store