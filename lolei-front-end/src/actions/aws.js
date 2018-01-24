import { fetchISBN } from '../services/aws'

export default function getByISBN(isbn, userId) {
  return(dispatch) => {
    fetchISBN(isbn, userId)
    .then(res => {
      if (res.error) {
        alert('Oops! This book is already in your list.')
      } else {
        dispatch({type: "SET_USER", res})
      }
    })
  }
}