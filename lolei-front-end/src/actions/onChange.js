import { removeBook } from '../services/onChange';

export function onChildClick (child) {
	return (dispatch) => {
		dispatch({type: 'ON_CHILD_CLICK', child})
	}
}

export function onDeleteBook(list_id) {
	return (dispatch) => {
		console.log("HEY")}}
			