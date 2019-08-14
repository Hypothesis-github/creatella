import React from 'react'

let cacheID = []

export default (id) => {
let idNew = id.replace(/[^0-9]/g, '').substring(0,3)
    while (cacheID.includes(idNew)) {
        idNew = Math.floor(Math.random() * 1000)
    }
    
// console.log('page' , page , 'length' , cacheID.length , 'cacheID' , cacheID)
console.log(idNew)

    cacheID.push(idNew)
    return (
        <tr>
            <td>

                <img src={`/ads/?r=${idNew}`} />
            </td>
        </tr>

    )






}