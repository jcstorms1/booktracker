import React from 'react';
import { withRouter } from 'react-router-dom';
import { Image ,Button, Header } from 'semantic-ui-react';
import logo from '../../src/lolei2Large.svg'
const LandingPage = props => {
	return (
		<div className="center-div">
			<Image fluid src={logo}/>
			<h1>I'm a landing page</h1>
				<Button  onClick={props.logInButton}>Login</Button>
				<Button  onClick={props.signUpButton}>Sign Up</Button>
		</div>
	)
}

export default withRouter(LandingPage);