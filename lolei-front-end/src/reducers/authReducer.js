
export default function authReducer(state = {currentUser: {}}, action){
    switch(action.type) {
        case "SET_USER":
        case "LOGIN_USER":
        const { id, username } = action.res
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