import { removeBook, updateFavorites } from "../services/onChange";

export function onChildClick(child) {
  return dispatch => {
    dispatch({ type: "ON_CHILD_CLICK", child });
  };
}

export function setFavorite(list_id, rating) {
  return dispatch => {
    updateFavorites(list_id, rating).then(res => {
      dispatch({ type: "SET_USER", res });
    });
  };
}

export function onDeleteBook(list_id) {
  return dispatch => {
    removeBook(list_id).then(res => {
      dispatch({ type: "SET_USER", res });
    });
  };
}

export function setFilter(name) {
  return dispatch => {
    dispatch({ type: "SET_FILTER", name });
  };
}
