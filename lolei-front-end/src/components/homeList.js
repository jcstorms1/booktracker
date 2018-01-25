import React from 'react';
import  ParentBookList  from './parentBookList';
import NoChildren from './noChildren';

const HomeList = props => {
	
	const childBooks = props.children.length !==0 ?
		props.children.map((child,index) => {
			return(
				
				<div key={index} className='parent-home-view'>
				<ParentBookList
					child={child}
					onFavorite={props.onFavorite}
					activeMenuItem={props.activeMenuItem}
				/>
				</div>
			)
		})
		:
		<div className='parent-home-view'>
			<NoChildren />
		</div>

	return (
		<div id='home-list-container'>
			{childBooks}
		</div>

	)
}

export default HomeList;