import React from 'react';
import { Modal, Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';


const AddChildModal = props => {
	return(
		<Modal show={props.modal}>
		<Modal.Header>
			<Modal.Title>Add A Child To Your Account</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={2}>First name:</Col>
					<Col sm={10}>
						<FormControl 
							type="text" 
							name="firstName"
							onChange={props.onChange}
							value={props.firstName}/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>Last name:</Col>
					<Col sm={10}>
						<FormControl 
							type="text"
							name="lastName"
							onChange={props.onChange}							
							value={props.lastName}/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>Username:</Col>
					<Col sm={10}>
						<FormControl 
							type="text"
							name="username"
							onChange={props.onChange}							
							value={props.username}/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>Password:</Col>
					<Col sm={10}>
						<FormControl 
							type="password" 
							name="password"
							onChange={props.onChange}							
							value={props.password}/>
					</Col>
				</FormGroup>
			</Form>					
			<Button onClick={props.closeModal}>Close</Button>
			<Button bsStyle="primary">Save changes</Button>
		</Modal.Body>
</Modal>
	)
}

export default AddChildModal;