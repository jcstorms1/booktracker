import React from 'react';
import * as moment from 'moment';
import { Card, Image, Rating, Header} from 'semantic-ui-react';

const BookList = props => {
	const sortedBooks = props.child.books.sort((a, b) => {
		return Date.parse(b.read_at) - Date.parse(a.read_at)
	}).map((book, index) => {
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
						<Header textAlign='center'><Rating onClick={()=>console.log('clicked')} size='big' icon='heart'/></Header>
				</Card.Content>
			</Card>
		)				
	})
	return(
			<Card.Group itemsPerRow={3}>
			{sortedBooks}
			</Card.Group>

	)
}

export default BookList;