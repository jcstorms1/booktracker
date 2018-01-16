import React from 'react';

const BookList = props => {
	return (
		<div className="card-deck" style={{ marginTop: '100px'}}>
			<div className="card">
				<img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51m07BAiMTL._SL160_.jpg" alt="Card image cap"/>
				<div className="card-block">
					<h4 className="card-title">Little Blue Truck</h4>
					<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51wYUOlClbL._SL160_.jpg" alt="Card image cap"/>
				<div className="card-block">
					<h4 className="card-title">The Pout Pout Fish</h4>
					<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51NZAJGdUPL._SL160_.jpg" alt="Card image cap"/>
				<div className="card-block">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
		</div>					
	)
}

export default BookList;