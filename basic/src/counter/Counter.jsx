import React, { Component } from 'react'
import store from '../redux/store'
export class Counter extends Component {
    state = {
        counter : 0
    }
    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        )
    }
    componentDidMount(){
        store.subscribe(()=>{
            console.log(22);
            this.setState({
                counter : store.getState().counter
            })
        })
    }
}

export default Counter
