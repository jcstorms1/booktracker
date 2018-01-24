import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Menu, Icon, Segment, Sidebar, Image } from 'semantic-ui-react';
import IsbnSearch from '../components/isbnSearch';
import BookList from '../components/bookList';
import NoBook from '../components/noBook';
import HomeList from '../components/homeList';
import AddChildModal from '../components/addChildModal';
import  withAuth  from '../hocs/withAuth'
import getByISBN from '../actions/aws'
import { onChildClick, onDeleteBook } from '../actions/onChange';
import { createUser } from '../actions/'
import { updateFavorites } from '../services/onChange';
import logo from '../../src/lolei2.svg';
import '../styling/menu.css';

class Dashboard extends Component {
	
	state = {
		search: '',
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		modal: false,
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
		if (name === 'home') {
			this.onPickChild(null, {name})
		}
		this.setState({ activeMenuItem: name })
		this.toggleMenuVisible()
	}

	onRemoveBook = (e, { name }) => {
		this.props.onDeleteBook(name)
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
		console.log(onDeleteBook)
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
				<Menu id='menu-bar' fixed="top">
					<Menu.Item id='menu-logo' as='h3' header>
						<Image src={logo}/>
					</Menu.Item>
					{this.props.accountType === 'Parent' ? 
					<Menu.Item id='menu-menu' onClick={this.toggleMenuVisible} >
						<Icon name="sidebar" />Menu
					</Menu.Item>  : null }        
					<Menu.Item id='right-menu' position='right'>
						<Button id='logout-btn' onClick={ this.props.onLogout }>Log Out</Button>
					</Menu.Item> 
				</Menu>
				{this.props.accountType === 'Parent' ? 
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
						<Menu.Item  id='menu-home' name='home' active={this.state.activeMenuItem === 'home'} onClick={this.handleActive} >
							<Icon   name="home" />Home
						</Menu.Item>
						<Menu.Item id='menu-kids' name='kids' active={this.state.activeMenuItem === 'kids'} onClick={this.handleActive}>
							<Icon name="child" />
							<Menu.Header>Kids</Menu.Header>
								{children}
						</Menu.Item>
						<Menu.Item id='menu-add-child' onClick={this.addChild}>
							<Icon name="user plus" />Add A Child
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher dimmed={this.state.menuVisible} style={{backgroundColor: 'lightblue'}}>
            			{/* <Segment basic > */}
							<div className="center-div">
								<div style={{ marginTop: '50px'}}>
								{this.props.selectedChild === 'home' 
									?
									<HomeList 
									onFavorite={this.onFavorite}
									children={this.props.children}/> 
									:
										this.props.children[this.props.selectedChild].books.length !== 0 
										?
										<div>
										<IsbnSearch 
											onClick={this.onClick} 
											onChange={this.onChange}
											search={this.state.search}
										/>
										<BookList 
											onFavorite={this.onFavorite}
											onRemoveBook={this.onRemoveBook} 
											child={this.props.children[this.props.selectedChild]}
											accountType={this.props.accountType}
										/>
										</div>
										:
										<div>
										<IsbnSearch 
											onClick={this.onClick} 
											onChange={this.onChange}
											search={this.state.search}
										/>
										<NoBook child={this.props.children[this.props.selectedChild]}/>
										</div>
								}
								</div>
							</div>
						{/* </Segment> */}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
				: 
				<div className="center-div">
				<IsbnSearch 
					onClick={this.onClick} 
					onChange={this.onChange}
					search={this.state.search}
				/>
				<BookList 
					books={this.props.userBooks} 
					onFavorite={this.onFavorite}
					accountType={this.props.accountType}
				/>
				</div>}

			</div>
			
		)
	}
}

const mapStateToProps = state => ({
	userId: state.auth.currentUser.id,
	firstName: state.auth.currentUser.firstName,
	lastName: state.auth.currentUser.lastName,
	accountType: state.auth.currentUser.accountType,
	userBooks: state.auth.currentUser.books || [],
	children: state.auth.currentUser.children || [],
	selectedChild: state.change.selectedChild,
	addChildAccount: state.change.addChildAccount
})

export default withRouter(
	withAuth(
		connect(mapStateToProps, 
			{ getByISBN, 
				onChildClick, 
				createUser,
				onDeleteBook }
		)(Dashboard)));