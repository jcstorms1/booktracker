import logo from './logo.svg';
import './App.css';

import LoginForm from './containers/LoginForm'

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar">
          <button class="btn btn-outline-success pull-right my-2 my-sm-0">Log Out</button>
        </nav>
        <div>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
