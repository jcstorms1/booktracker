export default function onChangeReducer(
    state = { selectedChild: 'home'}, action) {
    switch(action.type) {
        case "ON_CHILD_CLICK":
            return (
                { ...state,  selectedChild: action.child }
            )
        default:
            return (
                state
            )
        }
    }