import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import Sidebar from '../components/sidebar'
import BookList from '../components/bookList';
import HomeList from '../components/homeList';
import AddChildModal from '../components/addChildModal';
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'
import onChildClick from '../actions/onChange';


class Dashboard extends Component {

	state = {
		search: '',
		modal: false,
		firstName: '',
		lastName: '',
		username: '',
		password: ''
	}

	onClick = e => {
		if(this.props.selectedChild==='home') {
			this.props.getByISBN(this.state.search, this.props.userId)
		} else {
			this.props.getByISBN(
				this.state.search, 
				this.props.children[this.props.selectedChild]['id'])
		}
	}
	
	onPickChild = e => {
		e.preventDefault()
		this.props.onChildClick(e.target.name)
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addChild = () => {
		this.setState({
			modal: true
		})
	}
	
	addChildSubmit = () => {
		// DON'T FORGET TO PASS BACK ACCOUNT TYPE
		this.closeModal()
		this.props.addChildAccount()
	}

	closeModal = () => {
		this.setState({
			modal: false
		})
	}

	render() {
		console.log(this.state.firstName)
		return (
			<div>
				<AddChildModal 
					onChange={this.onChange}
					modal={this.state.modal}
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					username={this.state.username}
					password={this.state.password}
				/>
			<div>				
				<Sidebar 
					onPickChild={this.onPickChild} 
					children={this.props.children}
					addChild={this.addChild}
				/>
				<div className="center-div">
					<Form inline>
						<FormGroup>
							<FormControl
								style={{marginTop: '10px'}} 
								onChange={this.onChange} 
								value={this.state.search} 
								type="text" 
								name="search"
								className="form-control" 
								placeholder="Search by isbn..."
								/>
							<Button style={{marginTop: '10px'}}	onClick={this.onClick} bsStyle="primary">Go!</Button>
						</FormGroup>
					</Form>
					{this.props.selectedChild === 'home' ?
						<HomeList/> : 
						<BookList child={this.props.children[this.props.selectedChild]}/>
					}
				</div>
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