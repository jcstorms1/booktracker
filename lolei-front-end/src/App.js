import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import { getCurrentUser, logoutUser } from './actions';

import LoginForm from './containers/LoginForm';
import LandingPage from './components/landingPage';
import Dashboard from './containers/Dashboard';
import Signup from './containers/CreateAccount';

class App extends Component {

  onLogout = () => {
    this.props.logoutUser(this.props.history)
  }
  
  logInButton = () => {
    this.props.history.push('/login')
  }
  
  signUpButton = () => {
    this.props.history.push('/signup')
  }


  render() {
    return (
      <div>
        <div>
          <Route
            exact
            path='/'
            render={() => 
              <LandingPage 
                logInButton={this.logInButton}
                signUpButton={this.signUpButton}
              />
            }
          />
          <Route
            exact
            path='/login'
            component={LoginForm}
          />
          <Route
            exact
            path='/dashboard'
            render={() => <Dashboard onLogout={this.onLogout}/>}
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
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  ...state
})

export default withRouter(connect(mapStateToProps, { logoutUser, getCurrentUser })(App));
