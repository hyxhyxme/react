import React, { Component } from 'react'

export class Child extends Component {
    render() {
        console.log((this.props));
        
        return (
            <div>
                child
            </div>
        )
    }
}

export default Child
