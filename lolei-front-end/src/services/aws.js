const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json',
  'Authorization': 'token'
}

export const fetchISBN = isbn => {
  return(
    fetch(`${API_ROOT}/byisbn/`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({isbn: isbn})
    })
    .then(res => res.json())
  )
}