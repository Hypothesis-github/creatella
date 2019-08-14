import React from 'react'
import { Helpers } from '../service/helpers'

let cacheID = 0
let adNo = Math.floor(Math.random() * 1000)
export default () => {


    while (cacheID === adNo) {
        adNo = Math.floor(Math.random() * 1000)
    }
    console.log(cacheID, adNo)
    cacheID = adNo
    return (
        <tr>
            <td>
                <img src={`/ads/?r=${adNo}`} />
                {adNo}
            </td>
        </tr>

    )

}