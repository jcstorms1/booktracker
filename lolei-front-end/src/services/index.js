// sconst API_ROOT = `https://lo-lei.herokuapp.com/api/v1`;
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

export const fetchCurrentUser = () => {
	return(
		fetch(`${API_ROOT}/auth`, {
			headers: getHeaders() 
		}).then(res => res.json())
	)
}

export const login = data => {
	return(
		fetch(`${API_ROOT}/login/`, {
			method: 'post',
			headers: getHeaders(),
			body: JSON.stringify(data)
		}).then(res => res.json())
	)
} 

export const signup = data => {
	return(
		fetch(`${API_ROOT}/users/`, {
			method: 'post',
			headers: getHeaders(),
			body: JSON.stringify({user: data})
		}).then(res => res.json())
	)
}
