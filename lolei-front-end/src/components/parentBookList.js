import React from 'react';
import BookList from './bookList';
import NoBook  from './noBook';
import { Grid, Card, Header } from 'semantic-ui-react';

const ParentBookList = props => {
	const latestBooks = props.child.books.sort((a,b) => {
		return a.id - b.id}).slice(-3)
	return(
		<Grid divided='vertically'>
			{ latestBooks.length !== 0 ?
				<Grid.Row>
				<Header textAlign='center'>{props.child.first_name}'s recently read books </Header>
				<Card.Group itemsPerRow={3}>
					<BookList 
						onFavorite={props.onFavorite}
						books={latestBooks}
					/> 
				</Card.Group>
					
				</Grid.Row>
				:
				<Grid.Row>
				<Header textAlign='center'>{props.child.first_name}'s recently read books </Header>
					
					<NoBook child={props.child}/>
				</Grid.Row>
			}
		</Grid>
	)
}

export default ParentBookList;