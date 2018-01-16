import {fetchISBN} from '../services/aws'

export default function getByISBN(isbn) {
  return(dispatch) => {
    fetchISBN(isbn)
    .then(console.log)
  }
}