import React from 'react';
import { Modal, Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import '../styling/modal.css'

const AddChildModal = props => {
	return(
		<Modal show={props.modal}>
		<Modal.Header>
			<Modal.Title>Add A Child To Your Account</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form horizontal>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>First name:</Col>
					<Col sm={8}>
						<FormControl 
							type="text" 
							name="firstName"
							onChange={props.onChange}
							value={props.firstName}/>
					</Col>
				</FormGroup>
				<FormGroup >
					<Col componentClass={ControlLabel} sm={3}>Last name:</Col>
					<Col sm={8}>
						<FormControl 
							type="text"
							name="lastName"
							onChange={props.onChange}							
							value={props.lastName}/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>Username:</Col>
					<Col sm={8}>
						<FormControl 
							type="text"
							name="username"
							onChange={props.onChange}							
							value={props.username}/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>Password:</Col>
					<Col sm={8}>
						<FormControl 
							type="password" 
							name="password"
							onChange={props.onChange}							
							value={props.password}/>
					</Col>
				</FormGroup>
			</Form>					
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.closeModal}>Close</Button>
			<Button onClick={props.addChildSubmit} bsStyle="primary">Save changes</Button>
		</Modal.Footer>
</Modal>
	)
}

export default AddChildModal;