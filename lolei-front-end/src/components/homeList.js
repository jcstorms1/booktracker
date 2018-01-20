import React from 'react';
import { Button, Card, Image, Rating,Icon} from 'semantic-ui-react'

const HomeList = props => {
	console.log(props)
	const childBooks = props.children.map((child,index) => {
		// return (
			// <div>
			// 	<Card fluid color='red' header={child.firstName}>Recently Read Books</Card>
			// 	<Card.Group itemsPerRow={3}>
			// 		<Card>
			// 			<Image size="medium" src={child.books[-1].thumbnail}/>
			// 			<Card.Content>
			// 				<Card.Header>
			// 				</Card.Header>
			// 				<Card.Meta>
			// 					<span className='date'>
			// 					{child.books[-1].read_at}
			// 					</span>
			// 				</Card.Meta>
			// 				<Card.Description>
			// 					{child.books[-1].title}
			// 				</Card.Description>
			// 				</Card.Content>
			// 				<Card.Content extra>
			// 			<Rating icon='heart'>Favorite</Rating>
			// 			</Card.Content>
			// 		</Card>
			// 	</Card.Group>
			// </div>
	// 	)
		
	})
	return (
		<div></div>
		// {childBooks}
	)
}

export default HomeList;