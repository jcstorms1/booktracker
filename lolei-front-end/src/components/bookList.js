import React from 'react';
import * as moment from 'moment';
import { Card, Image, Rating } from 'semantic-ui-react';

const BookList = props => {
	const childBooks = props.child.books.map((book, index) => {
		console.log(book.author.constructor)
		return(
			<Card key={index}>
				<Image size="medium" src={book.thumbnail}/>
				<Card.Content>
					<Card.Header>
						{book.title}
					</Card.Header>
					<Card.Meta>
						<span className='date'>
						Read on {moment(book['read_at']).format("M/DD/YYYY")}
						</span>
					</Card.Meta>
					<Card.Description>
						{book.author.constructor === Array ?
							book.author.join(' & ') :
							book.author}
					</Card.Description>
					</Card.Content>
					<Card.Content extra>
				<Rating icon='heart'>Favorite</Rating>
				</Card.Content>
			</Card>
		)				
	})
	return(
		<div>
			<Card.Group itemsPerRow={3}>
			{childBooks}
			</Card.Group>

		</div>
	)
}

export default BookList;