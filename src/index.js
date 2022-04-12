
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './lib/font-awesome/css/all.min.css'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'



ReactDom.render(
    <Router>
    <App/>
    </Router>
    , document.querySelector('#root')
)