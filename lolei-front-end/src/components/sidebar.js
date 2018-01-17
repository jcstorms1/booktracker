import React from 'react';
import {bubble as Menu} from 'react-burger-menu';
import '../styling/menu.css'

const Sidebar = props => {
	const children = props.children.map((child, index) => {
		return <a	key={index} name={index} href="/dashboard" className="menu-item"		
						onClick={props.onPickChild}>{child['first_name']}</a>
	})
	return (
		<div>
			<Menu 
				noOverlay  
				burgerButtonClassName={ "my-button" } 
				// menuClassName={ "sidebar-menu" } 
				// itemListClassName={ "sidebar-list" }
			>
				
				<a name="home" href="/dashboard" className="menu-item" onClick={props.onChildClick}>Home</a>
				{children}
			</Menu>
		</div>
	);
}

export default Sidebar;
