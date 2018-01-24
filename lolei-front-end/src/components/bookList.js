import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import BookCard from '../components/bookCard';


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
		<div id='my-active-cardgroup'>
		{props.activeMenuItem === 'home' ? 
			<Card.Group 
				itemsPerRow={3}>
				{sortedBooks}
			</Card.Group>
			:
			<Card.Group 
				id='my-card-group'
				itemsPerRow={3}>
				{sortedBooks}
			</Card.Group>
		}
		</div>
	)
}

const mapStateToProps = state => ({
	selectedFilter: state.change.selectedFilter
})

export default connect(mapStateToProps, null)(BookList);