import React from 'react'
import { Helpers } from '../service/helpers'

let adsId = {}
let prevId = 0
export default ({ id }) => {
    let rdId = adsId[id]
    if (!rdId) {
        rdId = Helpers.randomAdsId(prevId)

        prevId = rdId
        adsId[id] = rdId
    }
    return (
        <tr>
            <td>
                <img src={`/ads/?r=${rdId}`} />
          </td>
      </tr>

    )

}