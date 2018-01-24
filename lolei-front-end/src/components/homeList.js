import React from 'react';
import  ParentBookList  from './parentBookList';

const HomeList = props => {
	const childBooks = props.children.map((child,index) => {
		return(
			<div key={index} className='parent-home-view'>
			<ParentBookList
				child={child}
				onFavorite={props.onFavorite}
			/>
			</div>
		)
	})

	return (
		<div>
			{childBooks}
		</div>

	)
}

export default HomeList;