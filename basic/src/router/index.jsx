import React, { Component } from 'react'
import Movie from './Movie'
import Tv from './Tv'
import Page404 from './Page404'
import Child from './Child'
import { Route, Switch, Redirect, Link, NavLink } from 'react-router-dom'
import './reset.css'

export class index extends Component {
    render() {
        return (
           <div>
               <ul>
                    <li><NavLink  to="/tv">电视</NavLink></li>
                    <li><NavLink  to="/movie">电影</NavLink></li>
               </ul>
               <Switch>
                    <Route 
                        path="/tv"
                        render={
                            (props)=>{
                                return (
                                    <Tv {...props} />
                                )
                            }
                        }>
                    </Route>
                    <Route
                        path="/movie"
                        component={Movie}>
                    </Route>
                    <Redirect
                        exact
                        from="/"
                        to="/movie">
                    </Redirect>
                    <Route
                        path="*"
                        component={Page404}>
                    </Route>
               </Switch>
               {/* 无论是否匹配都会渲染 */}
              <Route 
                path="/child"
                children={
                    (props)=>{
                        return (<Child {...props}></Child>)
                    }
                }>

              </Route>
           </div>
        )
    }
}

export default index
