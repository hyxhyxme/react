const defaultState = {
    count : 0 
}

const counter = (state = defaultState, action)=>{
    switch(action.type){
        case 'increment':
            return {
                count : state.count + 1
            }
        case 'decrement':
            return {
                count : state.count - 1
            }
        case 'loadData':
            return {
                count : action.data
            } 
        default :
            return state
    }
}
module.exports = counter
