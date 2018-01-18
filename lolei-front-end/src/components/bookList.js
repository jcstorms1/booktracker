import React from 'react';
import * as moment from 'moment';

const BookList = props => {
	const childBooks = props.child.books.map((book, index) => {
		return(
			<div key={index} className="card-deck" style={{ marginTop: '100px'}}>
			<div className="card">
				<img className="card-img-top" src={book['thumbnail']} alt="Card cap"/>
				<div className="card-block">
					<h4 className="card-title">{book['title']}</h4>
					<p className="card_text">Author: {book['author']}</p>
					<p className="card-text"><small className="text-muted">Read on {moment(book['read_at']).format("M/DD/YYYY")}</small></p>
				</div>
			</div>
			</div>
		)				
	})
	return(
		<div>
			{childBooks}
		</div>
	)
}

export default BookList;