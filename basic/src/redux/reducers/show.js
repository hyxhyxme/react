const defaultState = {
    message : '' 
}

const reducers = (state = defaultState, action)=>{
    switch(action.type){
        case 'show':
            return {
                message : action.data
            }
        default :
            return state
    }
}

module.exports = reducers

