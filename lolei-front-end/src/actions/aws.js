import {fetchISBN} from '../services/aws'

export default function getByISBN(isbn, userId) {
  return(dispatch) => {
    fetchISBN(isbn, userId)
    .then(console.log)
  }
}