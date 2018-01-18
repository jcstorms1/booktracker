import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loginUser } from '../actions';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class LoginForm extends Component {

	state = {
		username: '',
		password: ''
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.loginUser(this.state, this.props.history)
	}
	
	render() {
		return(
			<div className='center-div'>
				<form>
					<FormGroup>
						<ControlLabel>Email address</ControlLabel>
						<FormControl type="email" onChange= {this.onChange} name="username" value={this.state.username} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Password</ControlLabel>
						<FormControl type="password" onChange= {this.onChange} name="password" value={this.state.password} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
					</FormGroup>
					<Button onClick={this.onSubmit} bsStyle="primary">Submit</Button>
				</form>      
			</div>
	)}
}

export default withRouter(connect(null, { loginUser })(LoginForm));