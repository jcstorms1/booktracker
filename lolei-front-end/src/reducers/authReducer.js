
export default function authReducer(state = {currentUser: {}}, action){
    switch(action.type) {
        case "LOGIN_USER":
            const { id, username } = action.userData
            return(
                { ...state, currentUser: { id, username } }
            )
        case "LOGOUT_USER":
            return(
                { ...state, currentUser: {} }
            )
        default:
            return (
                state
            )
    } 
}