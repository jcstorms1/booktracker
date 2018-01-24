import React from 'react';
import {connect} from 'react-redux';
import { Form, Header, Button } from 'semantic-ui-react';
import { setFilter } from '../actions/onChange'
import '../styling/form.css'
const IsbnSearch = props => {
	return (

		<Form onSubmit={props.onClick}>
			<Form.Field>
				<Header id='isbn-header' as='h2' textAlign="center">Add a new book by ISBN</Header>
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
				<Button onClick={()=> props.setFilter('Favorites')} id='filter-fav-btn' attached='right'>Favorites</Button>
			</Form.Group>
		</Form>
	)
}

export default connect(null, { setFilter })(IsbnSearch);