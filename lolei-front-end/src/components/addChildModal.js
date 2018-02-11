import React from "react";
import { Modal, Header, Button, Form, Icon, Message } from "semantic-ui-react";
import "../styling/modal.css";

const AddChildModal = props => {
  return (
    <Modal size="small" open={props.modal}>
      <Header as="h2" id="modal-header" textAlign="center">
        <Icon name="child" />
        Add A Child To Your Account!
      </Header>
      <Message
        error
        header="There was some errors with your submission"
        list={[
          "You must include both a upper and lower case letters in your password.",
          "You need to select your home country."
        ]}
      />
      <Modal.Content id="modal-body">
        <Form>
          <Form.Field required>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={props.onChange}
              value={props.firstName}
            />
          </Form.Field>
          <Form.Field required>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={props.onChange}
              value={props.lastName}
            />
          </Form.Field>
          <Form.Field required>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              onChange={props.onChange}
              value={props.username}
            />
          </Form.Field>
          <Form.Field required>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={props.onChange}
              value={props.password}
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

export default AddChildModal;
