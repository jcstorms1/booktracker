import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header,Segment, Icon } from 'semantic-ui-react'
import { createUser } from '../actions'
import '../styling/form.css'

class Signup extends Component {
	state = {
		firstName: '',
		lastName: '',
		username: '',
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
		this.props.createUser(this.state, this.props.history)
	}

	render() {
		return (
			<div className='signup-form'>
				<Grid id='signup' textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{maxWidth: 450}}>
						<Header id='signup-header' as='h2'  textAlign='center'>
							<Icon name='id card'/>{' '}Create A New Account!
						</Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input fluid
									icon='user circle'
									iconPosition='left'
									type="text"
									name="firstName"
									placeholder="First Name"
									onChange={this.onChange}
									value={this.state.firstName}                    
								/>
								<Form.Input fluid
									icon='user circle'
									iconPosition='left'
									type="text"
									name="lastName"
									placeholder="Last Name"
									onChange={this.onChange}
									value={this.state.lastName}                    
								/>
								<Form.Input fluid
									icon='user'
									iconPosition='left'
									type="text"
									name="username"
									placeholder="Username"
									onChange={this.onChange}
									value={this.state.email}                    
								/>
								<Form.Input fluid
									icon='lock'
									iconPosition='left'
									type="password"
									name="password"
									placeholder="password"
									onChange={this.onChange}
									value={this.state.password}                                      
								/>					
								<Button fluid color='orange' onClick={this.onSubmit} type="submit">Submit</Button>
								
							</Segment>
						</Form>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default withRouter(connect(null, { createUser})(Signup));