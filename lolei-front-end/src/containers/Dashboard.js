import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Example from './Example'
import  withAuth  from '../hocs/withAuth'

class Dashboard extends Component {
	render() {
		return (
			<div>
				<Example/>
				<div className="center-div">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Search by isbn..."/>
						<span class="input-group-btn">
							<button class="btn btn-secondary" type="button">Go!</button>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(withAuth(Dashboard));