import React from 'react'

let cacheID = null

export default () => {
    let adNo = Math.floor(Math.random() * 1000)


    while (cacheID === adNo) {
        adNo = Math.floor(Math.random() * 1000)
    }
    cacheID = adNo

    return (
        <tr>
            <td>
                <img src={`/ads/?r=${adNo}`} />
            </td>
        </tr>

    )


}