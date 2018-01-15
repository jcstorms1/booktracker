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
			</div>
		)
	}
}

export default withRouter(withAuth(Dashboard));