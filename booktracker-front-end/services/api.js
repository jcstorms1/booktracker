const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
}

const getCurrentUser = () => {
    fetch(`${API_ROOT}/users`, {
        headers: { Authorization: token}
    }).then(res => res.json())
}

const login = data => {
    fetch(`${API_ROOT}/login/`, {
        method: 'post',
        headers: headers,
        body: JSON.stringify(data)
    })
}

const signup = data => {
    fetch(`${API_ROOT}/users/`, {
        method: 'post',
        headers: headers,
        body: JSON.stringify(data)
    })
}