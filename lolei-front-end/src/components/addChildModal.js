import React from 'react';
import { Modal, Header, Button, Form} from 'semantic-ui-react';
import '../styling/modal.css'

const AddChildModal = props => {
	return(
	<Modal size="small" open={props.modal}>
		<Header  icon="child" content="Add A Child To Your Account"/> 
		<Modal.Content>
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
		<Modal.Actions>
			<Button inverted color='red' onClick={props.closeModal}>Cancel</Button>
			<Button inverted color='green' type='submit' onClick={props.addChildSubmit}>Save changes</Button>
		</Modal.Actions>
	</Modal>
	)
}

export default AddChildModal;