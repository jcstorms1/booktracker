import React from 'react';
import BookCard from '../components/bookCard';
import { Card } from 'semantic-ui-react';

const BookList = props => {
	let books = props.child ? props.child.books : props.books

	const sortedBooks = books.sort((a, b) => {
		return Date.parse(b.read_at) - Date.parse(a.read_at)
	}).map((book, index) => {
		return(
			<BookCard 
				key={index} 
				book={book} 
				onFavorite={props.onFavorite}
				accountType={props.accountType}
				removeBook={props.onRemoveBook}
			/>
		)
	})
	
	return(
			<Card.Group itemsPerRow={3}>
			{sortedBooks}
			</Card.Group>

	)
}


export default BookList;