import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './containers/LoginForm'
import { logoutUser } from './actions/index'

class App extends Component {
  onLogOut = () => {
    this.props.logoutUser()
  }
  
  render() {
    console.log(this.loginUser)
    return (
      <div>
        <nav className="navbar navbar-toggleable">
          <div>
          <button onClick={ this.onLogOut } className="btn btn-outline-success my-2 my-sm-0">Log Out</button>
          </div>
        </nav>
        <div>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(App);
