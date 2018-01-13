import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class Signup extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		accountType: 'Parent'
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = e => {
		e.preventDefault()
	}

	render() {
		return (
			<div className="center-div">
				<form onSubmit={this.onSubmit}>
					<FormGroup controlId="formBasicText">
						<ControlLabel>First Name:</ControlLabel>
						<FormControl
							type="text"
							name="firstName"
							onChange={this.onChange}
						  value={this.state.firstName}                    
							placeholder="First Name"
						/><br/>
						<ControlLabel>Last Name:</ControlLabel>
						<FormControl
							type="text"
							name="lastName"
							onChange={this.onChange}
							value={this.state.lastName}                    
							placeholder="Last Name"
						/><br/>
						<ControlLabel>Email:</ControlLabel>
						<FormControl
							type="email"
							name="email"
							onChange={this.onChange}
							value={this.state.email}                    
							placeholder="email@address.com"
						/><br/>
						<ControlLabel>Password:</ControlLabel>
						<FormControl
							type="password"
							name="password"
							onChange={this.onChange}
							value={this.state.password}                                      
							placeholder="password"
						/><br/>
						<ControlLabel>Select Account Type:</ControlLabel>
						<FormControl value={this.state.accountType} onChange={this.onChange} name="accountType" componentClass="select" placeholder="select">
							<option>Parent</option>
							<option>Child</option>
						</FormControl>
						<p>Parent accounts have admin privledges</p>
					</FormGroup>
					<Button onClick={this.onSubmit} bsStyle="primary" type="submit">Submit</Button>
				</form> 
			</div>
		)
	}
}

export default withRouter(Signup);