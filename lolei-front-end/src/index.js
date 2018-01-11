import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import  authReducer  from './reducers/authReducer';
import App from './App';


const rootReducer = combineReducers({ auth: authReducer })

const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(reduxThunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route path='/' component={ App }/>
        </Provider>
    </Router>,
document.getElementById('root'));
registerServiceWorker();
