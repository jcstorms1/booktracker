import React from 'react';
import {connect} from 'react-redux';
import { Form, Header, Button } from 'semantic-ui-react';
import { setFilter } from '../actions/onChange'
import '../styling/form.css'
const IsbnSearch = props => {
	const name = () => {
		const childsName = props.children[props.selectedChild].first_name
		return(
		 childsName.slice(-1) !== 's' ? childsName + "'s" : childsName + "'"
		)
	}
	return (

		<Form onSubmit={props.onClick}>
			<Form.Field>
				<Header id='isbn-header' as='h2' textAlign="center">
					{ props.children.length !== 0 ? `Add a new book by ISBN to ${name()} list` : `Add a new book by ISBN`} 
				</Header>
			</Form.Field>
			<Form.Group>
				<input
						onChange={props.onChange} 
						value={props.search} 
						type="text" 
						name="search"
						placeholder="Search by a single isbn..."
				/>
				<Form.Button id='isbn-button' content="Submit"/>
				<Button onClick={()=> props.setFilter('All')} id='filter-all-btn' name='All' attached='left'>All</Button>
				<Button toggle onClick={()=> props.setFilter('Favorites')} id='filter-fav-btn' attached='right'>Favorites</Button>
			</Form.Group>
		</Form>
	)
}

const mapStateToProps = state => ({
	children: state.auth.currentUser.children || [],
	selectedChild: state.change.selectedChild
})

export default connect(mapStateToProps, { setFilter })(IsbnSearch);