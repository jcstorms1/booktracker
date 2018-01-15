export default function authReducer(state = {currentUser: {}}, action){
    switch(action.type) {
        case "GET_ISBN":
            return(
                { ...state, book: action.res}
            )
        default:
            return (
                state
            )
    } 
}