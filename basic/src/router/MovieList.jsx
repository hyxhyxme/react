import React, { Component } from 'react'

export class MovieList extends Component {
    handleClick(){
        this.props.history.push({pathname:'/tv',state:{id:3}}) 
    }
    render() {
        console.log(this.props);
        return (
            <div onClick={this.handleClick.bind(this)}>
                MovieList
            </div>
        )
    }
}

export default MovieList
