import React from 'react';
import BookList from './bookList';
import NoBook  from './noBook';

import { Header } from 'semantic-ui-react';

const ParentBookList = props => {
	const latestBooks = props.child.books.sort((a,b) => {
		return a.id - b.id}).slice(-3)
	return(
		<div>
			{ latestBooks.length !== 0 ?
				<div>
					<Header
						as='h1'
						style={{fontFamily: 'Schoolbell', marginBottom: '2.5vh'}}
						textAlign='center'>
						{props.child.first_name}'s recently read books 
					</Header>
					<BookList 
						activeMenuItem={props.activeMenuItem}
						onFavorite={props.onFavorite}
						books={latestBooks}
					/> 
				</div>
				:
				<div>
				<Header
					as='h1'
					style={{fontFamily: 'Schoolbell', marginBottom: '2.5vh'}}
					textAlign='center'>
					{props.child.first_name}'s recently read books 
				</Header>
				<NoBook child={props.child}/>
				</div>
			
			}
			</div>
	)
}

export default ParentBookList;