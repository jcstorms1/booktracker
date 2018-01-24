import React from 'react';
import { Form, Header } from 'semantic-ui-react';
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
			</Form.Group>
		</Form>
	)
}

export default IsbnSearch;