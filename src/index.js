import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, browserHistory} from 'react-router';
import Routes from './navigation/Routes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history={browserHistory} routes={Routes}/>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();