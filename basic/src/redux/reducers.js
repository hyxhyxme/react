const defaultState = {
    counter : 0 
}

module.exports = (state = defaultState, action)=>{
    switch(action.type){
        case 'increment':
            console.log('increment');
            
            return {
                counter : state.counter + 1
            }
        default :
            console.log('default');
            
            return state
    }
}

