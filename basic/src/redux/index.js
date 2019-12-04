const { createStore } = require('redux')

const defaultState = {
    counter : 0
}

const reducers = (state=defaultState, action) =>{
    switch( action.type ){
        case 'increment':
            console.log(state.counter);
            return {
                counter : state.counter + 1
            }
            default : 
                console.log(state.counter);
                return state
    }
}

const store = createStore(reducers)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({
    type : 'increment'
})
store.dispatch({
    type : 'increment'
})
store.dispatch({
    type : 'increment'
})