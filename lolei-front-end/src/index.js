import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'redux'
ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
