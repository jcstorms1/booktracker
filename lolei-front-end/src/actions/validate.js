export function setError(bool) {
  return dispatch => {
    dispatch({ type: "FORM_ERROR", bool });
  };
}

export function setFirstNameError(bool, message) {
  return dispatch => {
    dispatch({ type: "FIRST_NAME_ERROR", bool, message });
  };
}

export function setLastNameError(bool) {
  return dispatch => {
    dispatch({ type: "LAST_NAME_ERROR", bool });
  };
}