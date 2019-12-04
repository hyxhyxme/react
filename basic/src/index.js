import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Index from './router/index'

ReactDOM.render(
    <Router>
         <Index></Index>
    </Router>,
    document.getElementById('root')
);

