const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
}

export const fetchCurrentUser = () => {
    return(
        fetch(`${API_ROOT}/auth`, {
            headers: { 'Authorization': token }
        }).then(res => res.json())
    )
}

export const login = data => {
    return(
        fetch(`${API_ROOT}/login/`, {
            method: 'post',
            headers: headers,
            body: JSON.stringify(data)
        }).then(res => res.json())
    )
} 

export const signup = data => {
    return(
        fetch(`${API_ROOT}/users/`, {
            method: 'post',
            headers: headers,
            body: JSON.stringify(data)
        }).then(res => res.json())
    )
}