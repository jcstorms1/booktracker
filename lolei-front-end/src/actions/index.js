import { login, fetchCurrentUser } from '../services/api';

export function loginUser(formData) {
    return (dispatch) => {
        login(formData)
            .then(res =>{
                localStorage.setItem('token', res.token)          
                dispatch({type: 'LOGIN_USER', res})
            })
    }
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch({type: 'LOGOUT_USER'})
    }
}

export function getCurrentUser() {
    return (dispatch) => {
        fetchCurrentUser()
        .then(res => {
            if(res.errors) {
                localStorage.removeItem('token')
            } else {
                dispatch({type: 'SET_USER', res})
            }
        })
    }
}
