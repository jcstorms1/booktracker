import React from 'react';
import { Button, Navbar, FormGroup } from 'react-bootstrap';


const Nav = props => {
  return (
    <Navbar fixedTop={true}>
      <Navbar.Form pullRight>
        <FormGroup>
          <Button onClick={ props.onLogout } bsStyle="success">Log Out</Button>
        </FormGroup>
      </Navbar.Form>
    </Navbar>  
  )
}

export default Nav

