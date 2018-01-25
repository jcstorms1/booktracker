import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loginUser } from '../actions';
import { Button, Form, Grid, Header,Segment, Icon, Image } from 'semantic-ui-react'
import logo  from '../../src/lolei2Medium.svg';
import '../styling/form.css';
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
			<div className='login-form'>
				<div className='login-logo-container'>
					<Image className='form-logo' src={logo}/>
				</div>
				<Grid id='login' textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header id='login-header' as='h2'  textAlign='center'>
						<Icon name='book'/>{' '}Log-in To Your Account
						</Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input fluid
									icon='user'
									iconPosition='left'
									type='text' 
									name="username" 
									placeholder="Enter username"
									onChange= {this.onChange} 
									value={this.state.username}
								/>
								<Form.Input fluid
									icon='lock'
									iconPosition='left'
									type="password" 
									name="password" 
									placeholder="Password"
									onChange= {this.onChange} 
									value={this.state.password} 
								/>
								<Button fluid size='large' color='orange' onClick={this.onSubmit}>Submit</Button>		
							</Segment>
						</Form>
					</Grid.Column>
				</Grid>
			</div>
	)}
}

export default withRouter(connect(null, { loginUser })(LoginForm));