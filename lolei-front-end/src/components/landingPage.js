import React from 'react';
import { withRouter } from 'react-router-dom';
import { Image ,Button, Header, Grid } from 'semantic-ui-react';
import logo from '../../src/lolei2Large.svg'
import '../styling/landing.css';

const LandingPage = props => {
	return (
		<div className="center-div">
			<Grid.Column verticalAlign='middle' centered textAlign='center'>
			<Header style={{fontFamily: 'Schoolbell'}} textAlign='center' as='h1'>Welcome To</Header>
			<Image centered src={logo}/>
			<Header textAlign='center' style={{fontFamily: 'Schoolbell'}} as='h3' content=
				"Lo lei translates to `I read it` in Spanish, and here at Lolei,
				we are all about keeping children reading. Reading a 1000 books 
				before Kindergarten? No Problem! Summer reading? We got you covered. 
				We offer a simple and fun way for children to keep track of books 
				they have read, while allowing parents or teachers to monitor their 
				progress. We know, it's too good to be true, so signup or login if
				you already have an account!"
			/>
			<div >
				<Button.Group fluid id='landing-buttons'>
					<Button id='login-btn' onClick={props.logInButton}>Login</Button>
						<Button.Or id='or-btn' />
					<Button id='signup-btn' align='center' onClick={props.signUpButton}>Sign Up</Button>
				</Button.Group>
			</div>
			</Grid.Column>
		</div>
	)
}

export default withRouter(LandingPage);