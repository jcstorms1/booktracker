import React from 'react';
import { withRouter } from 'react-router-dom';
import { Image ,Button, Header } from 'semantic-ui-react';
import logo from '../../src/lolei2Large.svg'
import '../styling/landing.css';

const LandingPage = props => {
	return (
		<div className="center-div">
			<Image fluid src={logo}/>
			<Header textAlign='center' as='h1'>Welcome to LoLei!</Header>
			<Button  id='login-btn' onClick={props.logInButton}>Login</Button>
			<Button  id='signup-btn' align='center' onClick={props.signUpButton}>Sign Up</Button>
		</div>
	)
}

export default withRouter(LandingPage);