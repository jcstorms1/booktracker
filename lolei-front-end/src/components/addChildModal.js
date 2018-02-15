import React from "react";
import { connect } from "react-redux";
import { Modal, Header, Button, Form, Icon, Message } from "semantic-ui-react";
import "../styling/modal.css";

const AddChildModal = props => {
  return (
    <Modal size="tiny" open={props.modal}>
      {props.error ? (
        <Message
          error
          header="Oops! There are some errors in your entries."
          list={props.messages}
        />
      ) : (
        <Header as="h2" id="modal-header" textAlign="center">
          <Icon name="child" />
          Add A Child To Your Account!
        </Header>
      )}
      <Modal.Content id="modal-body">
        <Form>
          <Form.Field>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={props.onChange}
              value={props.firstName}
              // error={props.firstNameError}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={props.onChange}
              value={props.lastName}
              // error={props.lastNameError}
            />
          </Form.Field>
          <Form.Field>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              onChange={props.onChange}
              value={props.username}
              // error={props.usernameError}
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={props.onChange}
              value={props.password}
              // error={props.passwordError}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions id="modal-footer">
        <Button id="modal-cancel" onClick={props.closeModal}>
          Cancel
        </Button>
        <Button id="modal-submit" onClick={props.addChildSubmit}>
          Save changes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = state => ({
  error: state.validation.error,
  firstNameError: state.validation.firstNameError,
  lastNameError: state.validation.lastNameError,
  usernameError: state.validation.usernameError,
  passwordError: state.validation.passwordError,
  messages: state.validation.messages
});

export default connect(mapStateToProps, null)(AddChildModal);
