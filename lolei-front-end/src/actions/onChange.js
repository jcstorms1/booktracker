export default function onChildClick (child) {
    return (dispatch) => {
        dispatch({type: 'ON_CHILD_CLICK', child})
    }
}