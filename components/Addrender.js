import React from 'react'

let cacheID = []

export default () => {
    let adNo = Math.floor(Math.random() * 1000)


    while (cacheID.includes(adNo)) {
        adNo = Math.floor(Math.random() * 1000)
    }
    cacheID.push(adNo)

    return (
        <tr>
            <td>
                <img src={`/ads/?r=${adNo}`} />
            </td>
        </tr>

    )


}