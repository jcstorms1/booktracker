import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Example from './Example'
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'

class Dashboard extends Component {
	state = {

	}

	onClick = e => {
		this.props.getByISBN('9780544568037')
	}

	render() {
		return (
			<div>
				<Example/>
				<div className="center-div">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Search by isbn..."/>
						<span className="input-group-btn">
							<button onClick={this.onClick} className="btn btn-secondary" type="button">Go!</button>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(withAuth(connect(null, { getByISBN })(Dashboard)));