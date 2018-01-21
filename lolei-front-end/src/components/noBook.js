import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const NoBook = props => {
	return (
	<Header color='grey' textAlign='center' as='h2' icon>
    	<Icon name='book' />
    		Oh no!
		<Header.Subheader>
			{props.child.first_name} has not added any books yet!			
		</Header.Subheader>
		<Header.Subheader>
			Add some books by entering an ISBN in the search bar above.			
		</Header.Subheader>
	</Header>
	)
}

export default NoBook;