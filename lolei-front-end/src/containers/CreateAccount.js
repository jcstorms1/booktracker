import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  validateFirstName,
  validateLastName,
  validatePassword
} from "../hocs/formValidation";
import { createUser } from "../actions";
import {
  setError,
  setFirstNameError,
  setLastNameError,
  setPasswordError
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

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    accountType: "Parent",
    usernameError: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formValidation = () => {
    let error = false;
    let validFirstName = validateFirstName(this.state.firstName);
    let validLastName = validateLastName(this.state.lastName);
    let validPassword = validatePassword(this.state.password);

    if (validFirstName.error) {
      error = true;
      this.props.setFirstNameError(error, validFirstName.message);
    }

    if (validLastName.error) {
      error = true;
      this.props.setLastNameError(error, validLastName.message);
    }

    if (validPassword.error) {
      error = true;
      this.props.setPasswordError(error, validPassword.message);
    }

    if (error) {
      this.props.setError(true);
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ messages: [] });
    this.formValidation();

    // if (this.state.errors === false) {
    //   this.props.createUser(this.state, this.props.history);
    // } else {
    // }
    console.log("success");
  };

  render() {
    return (
      <div className="signup-form">
        <div className="signup-logo-container">
          <Image className="form-logo" src={logo} />
        </div>
        <Grid
          id="signup"
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
              <Header id="signup-header" as="h2" textAlign="center">
                <Icon name="id card" /> Create A New Account!
              </Header>
            )}

            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user circle"
                  iconPosition="left"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.onChange}
                  value={this.state.firstName}
                  error={this.props.firstNameError}
                />

                <Form.Input
                  fluid
                  icon="user circle"
                  iconPosition="left"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.onChange}
                  value={this.state.lastName}
                  error={this.props.lastNameError}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="email"
                  name="username"
                  placeholder="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={this.props.passwordError}
                />
                <Button
                  fluid
                  color="orange"
                  onClick={this.onSubmit}
                  type="submit"
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
  firstNameError: state.validation.firstNameError,
  lastNameError: state.validation.lastNameError,
  userNameError: state.validation.userNameError,
  passwordError: state.validation.passwordError,
  messages: state.validation.messages
});

export default withRouter(
  connect(mapStateToProps, {
    createUser,
    setError,
    setFirstNameError,
    setLastNameError,
    setPasswordError
  })(Signup)
);
