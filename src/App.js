import React from 'react'
import { getAscii } from '../service/getData'
import { SomeContext } from './index'
import './css/main.css'
import { Helpers } from '../service/helpers'




export default () => {
    const { state, dispatch } = React.useContext(SomeContext)

    React.useEffect(() => {
        getAscii(1, 21, dispatch)
    }, [])

    React.useEffect(() => {

        window.addEventListener('scroll', () => {

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && state.more == false) {
                getAscii(state.page, 21, dispatch)

                // console.log("you're at the bottom of the page", state.page)
                // getAscii(state.page, 22, dispatch)
                //show loading spinner and make fetch request to api
            }

        })


    }, [state])



    const addRender = (id) => {
        return (
            <tr>
                <td>
                    <img src={`/ads/?r=6`} />
                </td>
            </tr>

        )
    }

    const hasMore = () => {
        return (
            <tr>
            <td>
                {state.more == true  ? 'LOADING MORE': null}
                </td> 
            </tr>
        )
    }

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
                                {i !== 0 && i % 20 === 0 && hasMore()}
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
            {/* {state.loading ? <Spinner /> : (renderTable()) } */}
            {Table()}
        </>
    )
}





