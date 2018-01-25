import React, { Component } from 'react';
import * as moment from 'moment';
import { Card, Button, Image, Rating, Header, Dimmer } from 'semantic-ui-react';

class BookCard extends Component {

	state = {
		active: false
	}

	handleShow = () => {
		this.setState({
			active: true
		})
	}

	handleHide = () => {
		this.setState({
			active: false
		})
	}
	removeOnClick = () => {

	}

	
	render() {

		const { active } = this.state

		const defaultRating = this.props.book.favorite ? 1 : 0
		const content = (
			<div>
				<Header 
					inverted
					as='h2' 
					content='Hey!'
					subheader="You didn't read this!"
				/>
				<Button
					name={this.props.book.list_id}
					onClick={this.props.removeBook} 
					color={'grey'}
				>Remove
				</Button>
			</div>
		)
		
		return(
			<Card>
				{this.props.accountType === 'Parent' ?
				<Dimmer.Dimmable
					as={Image}
					dimmed={active}
					dimmer={{active, content}}
					onMouseEnter={this.handleShow}
					onMouseLeave={this.handleHide}
					size='medium'
					src={this.props.book.thumbnail}
				/>
				:
				<Image size='medium' src={this.props.book.thumbnail}/>
				}	
				<Card.Content>
					<Card.Header>
						{this.props.book.title}
					</Card.Header>
					<Card.Meta>
						<span className='date'>
						Read on {moment(this.props.book['read_at']).format("M/DD/YYYY")}
						</span>
					</Card.Meta>
					<Card.Description>
						{this.props.book.author.constructor === Array ?
							this.props.book.author.join(' & ') :
							this.props.book.author}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
						<Header textAlign='center'>
							<Rating
								clearable
								name={this.props.book.list_id}
								onRate={this.props.onFavorite}
								rating={defaultRating}
								icon='heart'
							/>
						</Header>
				</Card.Content>
			</Card>
		)
	}
}

export default BookCard;

