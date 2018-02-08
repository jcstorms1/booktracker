// const API_ROOT = `https://lo-lei.herokuapp.com/api/v1`;
const API_ROOT = `http://localhost:3001/api/v1`;

const getHeaders = () => {
	const token = localStorage.getItem('token');
	
	return(
	 	{
		'Content-Type': 'application/json',
		'Accepts': 'application/json',
		Authorization: token
		}
	)
}

export const updateFavorites = (list_id, rating) => {
    return(
        fetch(`${API_ROOT}/lists/${list_id}`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify({favorite: rating})
        }).then(res => res.json())
    )
}

export const removeBook = (list_id) => {
    return(
        fetch(`${API_ROOT}/lists/${list_id}`, {
            method: 'DELETE',
            headers: getHeaders()
        }).then(res => res.json())
    )   
}
