import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../actions";
import { validateEmpty, validatePassword } from "../hocs/formValidation";
import {
  setError,
  setEmptyError,
  setPasswordError,
  clearMessages
} from "../actions/validate";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon,
  Image,
  Message
} from "semantic-ui-react";
import logo from "../../src/lolei2Medium.svg";
import "../styling/form.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formValidation = () => {
    let error = false;
    let validUsername = validateEmpty(this.state.username, "Username");
    let validPassword = validatePassword(this.state.password);
    if (validUsername.error) {
      error = true;
      this.props.setEmptyError(error, validUsername.message);
    } else {
      this.props.setEmptyError(false, null);
    }

    if (validPassword.error) {
      error = true;
      this.props.setPasswordError(error, validPassword.message);
    } else {
      this.props.setPasswordError(false, null);
    }

    if (error) {
      this.props.setError(true);
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setError(false);
    this.props.clearMessages();
    this.formValidation();
    setTimeout(this.loginUser, 1);
  };
  loginUser = () => {
    if (!this.props.error) {
      this.props.loginUser(this.state, this.props.history);
    }
  };

  //Need this if someone gets errors on sign in, hits back, and then here
  componentDidMount() {
    this.props.setError(false);
    this.props.setEmptyError(false, null);
    this.props.setPasswordError(false, null);
    this.props.clearMessages();
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-logo-container">
          <Image className="form-logo" src={logo} />
        </div>
        <Grid
          id="login"
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {this.props.error ? (
              <Message
                error
                header="Oops! There are some errors in your entries."
                list={this.props.messages}
              />
            ) : (
              <Header id="login-header" as="h2" textAlign="center">
                <Icon name="book" /> Log-in To Your Account
              </Header>
            )}
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="text"
                  name="username"
                  placeholder="Enter email or username"
                  onChange={this.onChange}
                  value={this.state.username}
                  error={this.props.emptyError}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={this.props.passwordError}
                />
                <Button
                  fluid
                  size="large"
                  color="orange"
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.validation.error,
  emptyError: state.validation.emptyError,
  passwordError: state.validation.passwordError,
  messages: state.validation.messages
});

export default withRouter(
  connect(mapStateToProps, {
    loginUser,
    setError,
    setEmptyError,
    setPasswordError,
    clearMessages
  })(LoginForm)
);
