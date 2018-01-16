import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/bubble';
import '../styling/menu.css'

class Example extends React.Component {
  showSettings (event) {
	event.preventDefault();
  }

  render () {
	return (
		<div>
			<Menu noOverlay burgerButtonClassName={ "my-button" }>
				<ul className="nav flex-column">
					<li className="nav-item ">
						<a className="nav-link active" href="#">Hi</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">Hey</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">Ho</a>
					</li>
				</ul>
			</Menu>
		</div>

	);
  }
}

export default withRouter(Example);
