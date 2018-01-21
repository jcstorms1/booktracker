import React from 'react';
import * as moment from 'moment';
import { Button, Card, Image, Rating, Header} from 'semantic-ui-react'

const HomeList = props => {
	const childBooks = props.children.map((child,index) => {
		
		let bookList = child.books
		if (bookList.length !== 0) {
			let recentBooks = bookList.slice(-3)
			return (
			recentBooks.sort((a,b) => {
				return Date.parse(b.read_at) - Date.parse(a.read_at)
			}).map((book, index) => {
				return (
					<div>
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
									<Header textAlign='center'><Rating onClick={()=>console.log('clicked')} icon='heart'/></Header>
							</Card.Content>
						</Card>
					</div>
				)
			}))
		} else {
			<div></div>
		}
	})
	return (
		<Card.Group itemsPerRow={3}>
			{childBooks}
		</Card.Group>
	)
}

export default HomeList;