export const fetchISBN = itemId => {
    return(
    fetch(signURL(unsigned(itemId)), {
        headers: { 
            'content-type': 'application/xml',
            'Accept': 'application/xml'
        }
    })
    .then(res => res.text())
    )
}