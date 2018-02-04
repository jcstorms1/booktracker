
export default function authReducer(state = {currentUser: {}}, action){
    switch(action.type) {
        case "SET_USER":
        case "LOGIN_USER":
            let user = action.res.user;
            return (
                { ...state, currentUser: { 
                    id: user.id, 
                    username: user.username,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    accountType: user.account_type,
                    books: user.books,
                    children: user.children
                }}
            )
        case "LOGOUT_USER":
            return(
                {currentUser: {} }
            )
        default:
            return (
                state
            )
    } 
}