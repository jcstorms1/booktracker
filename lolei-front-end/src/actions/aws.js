import { fetchISBN } from '../services/aws'

export default function getByISBN(isbn, userId) {
  return(dispatch) => {
    fetchISBN(isbn, userId)
    .then(res => {
      if (res.error) {
        alert("Oops! Something went wrong.\nTry re-entering the ISBN. If you still get errors, this book is most likely in your list.")
      } else {
        dispatch({type: "SET_USER", res})
      }
    })
  }
}