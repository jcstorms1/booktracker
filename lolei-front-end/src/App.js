import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

import LoginForm from './containers/LoginForm';
// import Dashboard from './containers/Dashboard';
import { getCurrentUser, logoutUser } from './actions';

class App extends Component {

  onLogOut = () => {
    this.props.logoutUser()
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getCurrentUser()
      }
    }


  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable">
          <div>
          <button onClick={ this.onLogOut } className="btn btn-outline-success my-2 my-sm-0">Log Out</button>
          </div>
        </nav>
        <div>
          <Route
            path='/login'
            component={LoginForm}
          />
          {/* <Route
            exact
            path='/dashboard'
            component={Dashboard}
          /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { logoutUser, getCurrentUser })(App));
