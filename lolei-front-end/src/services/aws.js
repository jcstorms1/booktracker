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

export const fetchISBN = (isbn, userId) => {
  return(
    fetch(`${API_ROOT}/byisbn/`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({isbn: isbn, user_id: userId})
    })
    .then(res => res.json())
  )
}