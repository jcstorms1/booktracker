import React from 'react';
import { Button } from 'react-bootstrap';
// Navbar, NavItem, NavDropdown, MenuItem

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

