import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Header, Menu, Icon, 
					Segment, Sidebar} from 'semantic-ui-react';
import BookList from '../components/bookList';
import NoBook from '../components/noBook';
import HomeList from '../components/homeList';
import AddChildModal from '../components/addChildModal';
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'
import { onChildClick } from '../actions/onChange';
import { createUser } from '../actions/'
import { updateFavorites } from '../services/onChange';


class Dashboard extends Component {

	state = {
		search: '',
		modal: false,
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		menuVisible: false,
		activeMenuItem: 'home'
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
	
	onPickChild = (e, { name }) => {
		console.log(name)
		e.preventDefault()
		this.props.onChildClick(name)
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	addChild = () => { 
		this.setState({ modal: true })
	}
	
	addChildSubmit = (e) => {
		// DON'T FORGET TO PASS BACK ACCOUNT TYPE
		e.preventDefault()
		this.closeModal()
		this.props.createUser({
			  firstName: this.state.firstName,
				lastName: this.state.lastName,
				username: this.state.username,
				password: this.state.password,
				accountType: "Child",
				parentId: this.props.userId
		}, this.props.history)
	}

	onFavorite = (e, {name, rating}) => {
		updateFavorites(name, !!rating)
	}

	closeModal = () => {
		this.setState({ modal: false })
	}

	toggleMenuVisible = () => {
		this.setState({ menuVisible: !this.state.menuVisible})
	}

	handleActive = (e, { name }) => {
		this.setState({ activeMenuItem: name })
		this.toggleMenuVisible()
	}

	render() {

		const children = this.props.children.map((child, index) => {
			return (
				<Menu.Menu key={index}>
					<Menu.Item name={index} onClick={this.onPickChild}> 
							{child.first_name}
					</Menu.Item>
				</Menu.Menu>
			)
		})

		return (

			<div>
				
				<AddChildModal 
					onChange={this.onChange}
					modal={this.state.modal}
					closeModal={this.closeModal}
					addChildSubmit={this.addChildSubmit}
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					username={this.state.username}
					password={this.state.password}
				/>
				<Menu fixed="top">
					<Menu.Item id='my-menu-header' as='h3' header>
						LoLei
					</Menu.Item>
					<Menu.Item onClick={this.toggleMenuVisible} >
						<Icon name="sidebar" />Menu
					</Menu.Item>         
					<Menu.Item position='right'>
						<Button color='grey' onClick={ this.props.onLogout }>Log Out</Button>
					</Menu.Item> 
				</Menu>
				<Sidebar.Pushable as={Segment} attached="bottom">
					<Sidebar 
						width='thin' 
						as={Menu} 
						animation="uncover" 
						style={{top: '5vh'}}
						visible={this.state.menuVisible} 
						icon="labeled" 
						vertical 
						inline='true' 
						inverted
					>
						<Menu.Item name='home' active={this.state.activeMenuItem === 'home'} onClick={this.handleActive} >
							<Icon  name="home" />Home
						</Menu.Item>
						<Menu.Item name='kids' active={this.state.activeMenuItem === 'kids'} onClick={this.handleActive}>
							<Icon name="child" />
							<Menu.Header>Kids</Menu.Header>
							
								{children}
						</Menu.Item>
						<Menu.Item onClick={this.addChild}>
							<Icon name="user plus" />Add A Child
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher dimmed={this.state.menuVisible}>
            			<Segment basic style={{backgroundColor: 'lightblue'}}>
							<div className="center-div">
						
								<Form onSubmit={this.onClick}>
									<Form.Field>
										<Header textAlign="center">Add a new book by ISBN</Header>
									</Form.Field>
									<Form.Group>
										<input
											onChange={this.onChange} 
											value={this.state.search} 
											type="text" 
											name="search"
											placeholder="Search by a single isbn..."
											/>
										<Form.Button inverted color="green" content="Submit"/>
									</Form.Group>
								</Form>
								<div style={{ marginTop: '50px'}}>
								{this.props.selectedChild === 'home' 
									?
									<HomeList 
									onFavorite={this.onFavorite}
									children={this.props.children}/> 
									:
										this.props.children[this.props.selectedChild].books.length !== 0 
										?
										<BookList 
											onFavorite={this.onFavorite} 
											child={this.props.children[this.props.selectedChild]}
										/> 
										:
										<NoBook child={this.props.children[this.props.selectedChild]}/>
								}
								</div>
							</div>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
			
		)
	}
}

const mapStateToProps = state => ({
	userId: state.auth.currentUser.id,
	firstName: state.auth.currentUser.firstName,
	lastName: state.auth.currentUser.lastName,
	accountType: state.auth.currentUser.accountType,
	children: state.auth.currentUser.children || [],
	selectedChild: state.change.selectedChild,
	addChildAccount: state.change.addChildAccount
})

export default withRouter(withAuth(connect(mapStateToProps, { getByISBN, onChildClick, createUser })(Dashboard)));