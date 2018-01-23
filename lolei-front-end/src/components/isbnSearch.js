import React from 'react';
import { Form, Header } from 'semantic-ui-react';

const IsbnSearch = props => {
	return (

		<Form onSubmit={props.onClick}>
			<Form.Field>
				<Header textAlign="center">Add a new book by ISBN</Header>
			</Form.Field>
			<Form.Group>
				<input
						onChange={props.onChange} 
						value={props.search} 
						type="text" 
						name="search"
						placeholder="Search by a single isbn..."
				/>
				<Form.Button color="green" content="Submit"/>
			</Form.Group>
		</Form>
	)
}

export default IsbnSearch;