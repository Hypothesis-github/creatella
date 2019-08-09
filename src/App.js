import React, { useState ,useEffect } from 'react'
import { getAscii } from '../service/getData'
import { SomeContext } from './index'
import './css/main.css'
import { Helpers } from '../service/helpers'
import Spinner from '../utils/Spinner'



export default () => {
    const { state, dispatch } = React.useContext(SomeContext)
    const [isFetching, setIsFetching] = useState(false);

    React.useEffect(() => {
        getAscii(1, 21, dispatch)

    }, [])

        React.useEffect(() => {

            window.addEventListener('scroll', onScroll)

        },[state , onScroll])

       const onScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight  && state.more == false && state.loading ==false  ) {
                getAscii(state.page, 21, dispatch)
            }
        }





    // useEffect(() => {
    //     getAscii(1, 21, dispatch)
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // function handleScroll() {
    //     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    //     setIsFetching(true);
    // }

    // useEffect(() => {
    //     if (!isFetching) return;
    //     fetchMoreListItems();
    // }, [isFetching , state]);



    // function fetchMoreListItems() {
    //     console.log('fetchMoreListItems runs')
    //     setTimeout(() => {
    //         getAscii(state.page, 21, dispatch);
    //         setIsFetching(false);
    //     }, 500);
    // }









    const addRender = (id) => {
        return (
            <tr>
                <td>
                    <img src={`/ads/?r=6`} />
                </td>
                {/* {hasMore()} */}
            </tr>

        )
    }

    const HasMore = () => (state.more = true ? <tr><td>loading</td></tr> : <tr><td>NOT</td></tr>)

    const Table = () => {
        return (
            <table className="container">
                <thead>
                    <tr>
                        <th onClick={() => console.log('ID clicked')} ><h1>ID</h1></th>
                        <th><h1>Size</h1></th>
                        <th><h1>Face</h1></th>
                        <th><h1>Price</h1></th>
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
                                {i !== 0 && i % 20 === 0 && addRender(r.id)}
                                {/* {i !== 0 && i % 20 === 0 &&  <HasMore />} */}
                                <tr>
                                    <td>{r.id}</td>
                                    <td>{r.size}</td>
                                    <td style={{ fontSize: r.size }}>{r.face}</td>
                                    <td>{currencyString}</td>
                                    <td>{
                                        Helpers.daysDiff(tnow, tdate, r.date)
                                    }</td>
                                </tr>

                            </tbody>

                        )
                    })
                }
            </table>
        )
    }


    return (

        <>
          {state.loading ? <Spinner /> : <Table />}
        </>
    )
}





