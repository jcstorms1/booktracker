import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import { getCurrentUser, logoutUser } from "./actions";
import { onChildClick } from "./actions/onChange";
import { setError, clearMessages } from "./actions/validate";

import LoginForm from "./containers/LoginForm";
import LandingPage from "./components/landingPage";
import Dashboard from "./containers/Dashboard";
import Signup from "./containers/CreateAccount";

class App extends Component {
  onLogout = () => {
    this.props.setError(false);
    this.props.clearMessages();
    this.props.logoutUser(this.props.history);
    this.props.onChildClick("home");
  };

  logInButton = () => {
    this.props.history.push("/login");
  };

  signUpButton = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
                logInButton={this.logInButton}
                signUpButton={this.signUpButton}
              />
            )}
          />
          <Route exact path="/login" component={LoginForm} />
          <Route
            exact
            path="/dashboard"
            render={() => <Dashboard onLogout={this.onLogout} />}
          />
          <Route exact path="/signup" component={Signup} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  selectedChild: state.change.selectedChild,
  ...state
});

export default withRouter(
  connect(mapStateToProps, {
    logoutUser,
    getCurrentUser,
    onChildClick,
    setError,
    clearMessages
  })(App)
);
