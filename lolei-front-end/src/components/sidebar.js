import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Button } from 'semantic-ui-react';
import '../styling/menu.css'

const Sidebar = props => {
	
	const children = props.children.map((child, index) => {
		return <a key={index} name={index} href="/dashboard" className="menu-item"		
					onClick={props.onPickChild}>{child['first_name']}</a>
	})

	return (
		<div>
			<Menu noOverlay>
				<a name="home" href="/dashboard" className="menu-item" onClick={props.onChildClick}>Home</a>
				{children}
				<Button onClick={props.addChild} style={{marginTop: '50vh'}}>Add An Account</Button>
			</Menu>
		</div>
	);
}

export default Sidebar;
