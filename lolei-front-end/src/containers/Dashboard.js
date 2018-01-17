import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar'
import BookList from '../components/bookList';
import HomeList from '../components/homeList';
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'

class Dashboard extends Component {
	state = {
		selectedChild: 'home'
	}

	onClick = e => {
		this.props.getByISBN('9780544568037')
	}
	
	onChildClick = e => {
		e.preventDefault()
		this.setState({
			selectedChild: e.target.name
		})
	}

	render() {
		console.log(this.state.selectedChild)
		
		return (
			<div>
				<Sidebar 
					onChildClick={this.onChildClick} 
					children={this.props.children}
				/>
				<div className="center-div">
					<div className="input-group">
						<input style={{marginTop: '10px'}} type="text" className="form-control" placeholder="Search by isbn..."/>
						<span className="input-group-btn">
							<button style={{marginTop: '10px'}} onClick={this.onClick} className="btn btn-secondary" type="button">Go!</button>
						</span>
					</div>
					{this.state.selectedChild === 'home' ?
						<HomeList/> : 
						<BookList child={this.props.children[this.state.selectedChild]}/>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	firstName: state.auth.currentUser.firstName,
	lastName: state.auth.currentUser.lastName,
	accountType: state.auth.currentUser.accountType,
	children: state.auth.currentUser.children
})

export default withRouter(withAuth(connect(mapStateToProps, { getByISBN })(Dashboard)));