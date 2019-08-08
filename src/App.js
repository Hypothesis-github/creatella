import React from 'react'
import { getAscii } from '../service/getData'
import { SomeContext } from './index'
import './css/main.css'
import { Helpers } from '../service/helpers'
import Spinner from '../utils/Spinner'



export default () => {
    const { state, dispatch } = React.useContext(SomeContext)




    // React.useEffect(() => {
    //     fetch('http://localhost:3000/products')
    //         .then(res => res.json())
    //         .then((data) => {
    //             setfData(data)
    //             console.log(data)
    //         })
    //         .catch(console.log)
    // }) , [fData];

    React.useEffect(() => {
        getAscii(1, 22, dispatch)

        // setfData(getAscii('2','3'))
        // dispatch({type : 'LoadItems' , serverItems})
    }, [])

    const addRender = (id) => {
        return (
            <tr>
                <td>
                    <img src={`/ads/?r=6`} />
                </td>
            </tr>
        )
    }

    const renderTable = () => {
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
            {state.loading == false ? (renderTable()) : <Spinner />}
        </>
    )
}