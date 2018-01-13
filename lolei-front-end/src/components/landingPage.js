import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { ButtonToolbar, Button } from 'react-bootstrap';

const LandingPage = props => {
    console.log(props)
    return (
        <div className="center-div">
            <h1>I'm a landing page</h1>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={props.logInButton}>Login</Button>

                <Button bsStyle="success" onClick={props.signUpButton}>Sign Up</Button>
            </ButtonToolbar>
        </div>
    )
}

export default withRouter(LandingPage);