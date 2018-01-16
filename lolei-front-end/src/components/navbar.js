import React from 'react';

const Nav = props => {
    return (
        <nav className="navbar navbar-toggleable">
          <div>
            <button onClick={ props.onLogout } className="btn btn-outline-success my-2 my-sm-0">Log Out</button>
          </div>
        </nav>
    )
}

export default Nav

