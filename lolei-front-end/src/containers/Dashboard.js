import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Example from './Example'
import BookList from '../components/bookList';
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'

class Dashboard extends Component {
	state = {
	}

	onClick = e => {
		this.props.getByISBN('9780544568037')
	}

	ComponentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Example/>
				<div className="center-div">
					<div className="input-group">
						<input style={{marginTop: '10px'}} type="text" className="form-control" placeholder="Search by isbn..."/>
						<span className="input-group-btn">
							<button style={{marginTop: '10px'}} onClick={this.onClick} className="btn btn-secondary" type="button">Go!</button>
						</span>
					</div>
					<BookList/>
				</div>
			</div>
		)
	}
}

export default withRouter(withAuth(connect(null, { getByISBN })(Dashboard)));