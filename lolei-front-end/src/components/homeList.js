import React from 'react';
import * as moment from 'moment';
import { Button, Card, Image, Rating, Header} from 'semantic-ui-react'
import  ParentBookList  from './parentBookList';

const HomeList = props => {
	const childBooks = props.children.map((child,index) => {
		return(
			<ParentBookList child={child}/>	
		)
	})

	return (
		<div>
			{childBooks}
		</div>
		
	)
}

export default HomeList;