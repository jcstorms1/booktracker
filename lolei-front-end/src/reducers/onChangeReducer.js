export default function onChangeReducer(
    state = { selectedChild: 'home', selectedFilter: 'All'}, action) {
    switch(action.type) {
        case "ON_CHILD_CLICK":
            return (
                { ...state,  selectedChild: action.child }
            )
        case "SET_FILTER":
            return(
                { ...state, selectedFilter: action.name }
            )
        default:
            return (
                state
            )
        }
    }