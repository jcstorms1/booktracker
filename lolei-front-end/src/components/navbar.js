import React from 'react';
import { Button, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Nav = props => {
    return (
        <nav className="navbar navbar-toggleable">
          <div>
            <Button onClick={ props.onLogout } bsStyle="success">Log Out</Button>
          </div>
        </nav>
    )
}

export default Nav

