import React, { Component } from 'react'

export class Tv extends Component {
    render() {
        console.log(this.props.location.state);
        return (
            <div>
                tv
            </div>
        )
    }
}

export default Tv
