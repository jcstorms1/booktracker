import React from 'react';

const BookList = props => {
	const childBooks = props.child.books.map((book, index) => {
		return(
			<div key={index} className="card-deck" style={{ marginTop: '100px'}}>
			<div className="card">
				<img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51m07BAiMTL._SL160_.jpg" alt="Card cap"/>
				<div className="card-block">
					<h4 className="card-title">{book['title']}</h4>
					<p className="card-text"><small className="text-muted">Read on {book['read_at']}</small></p>
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