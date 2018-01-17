import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar'
import BookList from '../components/bookList';
import HomeList from '../components/homeList';
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'
import onChildClick from '../actions/onChange';



class Dashboard extends Component {

	state = {
		search: ''
	}

	onClick = e => {
		if(this.props.selectedChild==='home') {
			this.props.getByISBN('9780544568037', this.props.userId)
		} else {
			this.props.getByISBN(
				'9780544568037', 
				this.props.children[this.props.selectedChild]['id'])
		}
	}
	
	onPickChild = e => {
		e.preventDefault()
		this.props.onChildClick(e.target.name)
	}

	onChange = e => {
		this.setState({
			search: e.target.value
		})

	}

	render() {
		return (
		
			<div>
				<Sidebar 
					onPickChild={this.onPickChild} 
					children={this.props.children}
				/>
				<div className="center-div">
					<div className="input-group">
						<input style={{marginTop: '10px'}} onChange={this.onChange} value={this.state.search} type="text" className="form-control" placeholder="Search by isbn..."/>
						<span className="input-group-btn">
							<button style={{marginTop: '10px'}} onClick={this.onClick} className="btn btn-secondary" type="button">Go!</button>
						</span>						
					</div>
					{this.props.selectedChild === 'home' ?
						<HomeList/> : 
						<BookList child={this.props.children[this.props.selectedChild]}/>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	userId: state.auth.currentUser.id,
	firstName: state.auth.currentUser.firstName,
	lastName: state.auth.currentUser.lastName,
	accountType: state.auth.currentUser.accountType,
	children: state.auth.currentUser.children,
	selectedChild: state.change.selectedChild
})

export default withRouter(withAuth(connect(mapStateToProps, { getByISBN, onChildClick })(Dashboard)));