import { login } from '../services/api';

export function loginUser(formData) {
    return (dispatch) => {
        login(formData)
            .then(res => res.json())
            .then(userData =>{
                localStorage.setItem('token', userData.token)          
                dispatch(setUser(userData))
            })
    }
}

export function setUser(userData) {
    return ({type: 'LOGIN_USER', userData})
}


export function logoutUser() {
    localStorage.removeItem('token')
}