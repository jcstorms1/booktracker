import React from 'react';
import  ParentBookList  from './parentBookList';

const HomeList = props => {
	const childBooks = props.children.map((child,index) => {
		return(
			<ParentBookList
				key={index}
				child={child}
				onFavorite={props.onFavorite}
			/>
		)
	})

	return (
		<div>
			{childBooks}
		</div>

	)
}

export default HomeList;