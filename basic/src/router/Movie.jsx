import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import MovieList from './MovieList'
export class Movie extends Component {
    render() {
        let { match } = this.props
        return (
            <div>
                movie
                <NavLink to={{
                    pathname: match.url + '/list',
                    state:{id:2}
                    }}>list</NavLink>
                <Switch>
                    <Route 
                        path={ match.url + '/list'}
                        component={MovieList}>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Movie
