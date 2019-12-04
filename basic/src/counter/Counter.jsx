import React, { Component } from 'react'
import Counter1 from './Counter1'
import { bindActionCreators } from 'redux'
const store = require('../redux/store')
const counterActionCreatores = require('../redux/action_creators/counter')
export class Counter extends Component {
    state = {
        count : store.getState().counter.count
    }
    constructor(){
        super()
        this.bac = bindActionCreators(counterActionCreatores,store.dispatch)
    }
    render() {
        return (
            <div>
                {this.state.count}
                <Counter1 {...this.bac} value="124"></Counter1>
            </div>
        )
    }
    componentDidMount(){
       
        
    }
}

export default Counter
