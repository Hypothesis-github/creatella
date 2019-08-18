import React, { useState, useEffect } from 'react'
import { getAscii } from '../service/getData'
import { SomeContext } from './index'
import './css/main.css'
import { Helpers } from '../service/helpers'
import Spinner from '../utils/Spinner'
import AddRender from '../components/Addrender'
import { Config } from '../utils/config'



export default () => {
    const { state, dispatch } = React.useContext(SomeContext)
    const [isFetching, setIsFetching] = useState(false);



    useEffect(() => {
        getAscii(1, Config.ADS_PER_ROW, dispatch, state.sortBy, false)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            !isFetching
        ) {
            setIsFetching(true);
        } else {
            setIsFetching(false);
        }
    };

    React.useEffect(() => {
        isFetching && getAscii(state.page, Config.ADS_PER_ROW, dispatch, state.sortBy, false);
    }, [isFetching]);



    const AddRender = (cb) => {

        let idNew = cb()
        return (
            <tr>
                <td>
                    <img src={`/ads/?r=${idNew}`} />
                </td>
            </tr>

        )
    }


    return (

        <>
            {state.loading ? <Spinner /> : null}
            <table className="container">
                <thead>
                    <tr>
                        <th onClick={() => getAscii(1, Config.ADS_PER_ROW, dispatch, 'id', true)} ><h1>{state.sortBy == 'id' && <p>Sorted by</p>} ID  </h1></th>
                        <th onClick={() => getAscii(1, Config.ADS_PER_ROW, dispatch, 'size', true)}><h1>{state.sortBy == 'size' && <p>Sorted by</p>}Size</h1></th>
                        <th><h1>Face</h1></th>
                        <th onClick={() => getAscii(1, Config.ADS_PER_ROW, dispatch, 'price', true)}><h1>{state.sortBy == 'price' && <p> Sorted by </p>} Price  </h1></th>
                        <th><h1>Date</h1></th>
                    </tr>
                </thead>
                {
                    state.data.map((r, i) => {
                        let tnow = new Date().getTime()
                        let tdate = new Date(r.date).getTime()
                        let currencyString = "£" + (r.price / 100).toFixed(2);
                        return (

                            <tbody key={r.id}>


                                {!isFetching && i && i % 20 === 0 ? AddRender(Helpers.getRandom) : null}



                                <tr>
                                    <td>{r.id}</td>
                                    <td>{r.size}</td>
                                    <td style={{ fontSize: r.size }}>{r.face}</td>
                                    <td>{currencyString}</td>
                                    <td>{
                                        Helpers.daysDiff(tnow, tdate, r.date)
                                    }</td>
                                </tr>
                                {state.more == false && <td>~ end of catalogue ~</td>}

                            </tbody>


                        )
                    }

                    )

                }
            </table>
            {isFetching && <Spinner />}
        </>
    )
}