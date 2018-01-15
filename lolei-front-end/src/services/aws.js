import { parseString } from 'xml2js';
import * as CryptoJS from 'crypto-js';

const AWS_SECRET = 'tAkeqrCP80VwhD59RP9IJ/uaPq0TraQUOGpjcST8'


let timestamp = encodeURIComponent(new Date(new Date().toUTCString()).toISOString())


function unsigned(itemId){
    let id = itemId.replace("-", "")
    return `http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIZKG3UBDKNMSPWNA&AssociateTag=jcstorms-20&IdType=ISBN&ItemId=${id}&Operation=ItemLookup&ResponseGroup=Images%2CItemAttributes&SearchIndex=All&Service=AWSECommerceService&Timestamp=${timestamp}&`
}

function signURL (unsigned) {
    let encrypted = CryptoJS.HmacSHA256(unsigned, AWS_SECRET) 
    let signed = encrypted.toString(CryptoJS.enc.Base64)
    let signedURL = unsigned + `Signature=${signed}`
    return signedURL
}

export const fetchISBN = itemId => {
    return(
    fetch(signURL(unsigned(itemId)))
    .then(res => res.text())
    .then()
    )
}