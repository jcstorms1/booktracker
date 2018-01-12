import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

import Nav from './components/navbar';
import LoginForm from './containers/LoginForm';
import Dashboard from './containers/Dashboard';
import Signup from './containers/CreateAccount';
import { getCurrentUser, logoutUser } from './actions';

class App extends Component {

  state = {
    authenticated: false
  }

  onLogout = () => {
    this.props.logoutUser()
    this.setState({authenticated: false})
    this.props.history.push("/")   
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getCurrentUser()
      this.setState({authenticated: true})
      }
    }

  render() {
    console.log(this.state)
    return (
      <div>
        <Nav onLogout={this.onLogout}/>
        <div>
          <Route
            exact
            path='/'
            render={ () => { return (
              this.state.authenticated ?
              <Redirect to='/dashboard'/> :
              <LoginForm/>
            )}}
          />
          <Route
            exact
            path='/dashboard'
            component={Dashboard}
          />
          <Route
            exact
            path='/signup'
            component={Signup}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { logoutUser, getCurrentUser })(App));
