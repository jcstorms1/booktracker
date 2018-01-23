const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
	'Content-Type': 'application/json',
	'Accepts': 'application/json',
	Authorization: token
}

export const updateFavorites = (list_id, rating) => {
    return(
        fetch(`${API_ROOT}/lists/${list_id}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({favorite: rating})
        })
    )
}

export const removeBook = (list_id) => {
    return(
        fetch(`${API_ROOT}/lists/${list_id}`, {
            method: 'DELETE',
            headers: headers
        }).then(res => res.json())
    )   
}
