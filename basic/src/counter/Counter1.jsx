import React, { Component } from 'react'
const store = require('../redux/store')
export class Counter1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            increment :this.props.increment,
            decrement : this.props.decrement
        }
    }
    render() {
        return (
            <div>
               <button onClick={this.handleIncrement.bind(this)}>+</button>
               <button onClick = {this.handleDecrement.bind(this)}>-</button>
            </div>
        )
    }
    componentDidMount(){
       
    }
    handleIncrement(){
        console.log('+');
        console.log(this.state);
        
        store.dispatch( this.state.increment())
        console.log(store.getState());
        
       
    }
    handleDecrement(){
        console.log('-');
        this.state.decrement()
    }
}

export default Counter1
