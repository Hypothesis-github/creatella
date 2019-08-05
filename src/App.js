import React from 'react'
import { getAscii } from '../service/getData'
import { SomeContext } from './index'
import 'antd/dist/antd.css'
import { Table, Button , Typography  } from 'antd';
import { Row, Col } from 'antd';

export default () => {
    const { state, dispatch } = React.useContext(SomeContext)
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            defaultSortOrder: 'descend',
            //   sorter: (a, b) => a.id - b.id,
            onHeaderCell: (column) => {
                return {
                    onClick: () => {
                        console.log(column);
                    }
                };
            }
        },
        {
            title: 'Size',
            dataIndex: 'size',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.size - b.size,
        },
        {
            title: 'Face',
            dataIndex: 'face',
            render: (face, record) => (
                <Typography.Text style={{ fontSize: record.size }}>
                  {face}
                </Typography.Text>
              ),
            onHeaderCell: (column) => {
                return {
                    onClick: () => {
                        console.log(column);
                    }
                };
            }

        },
        {
            title: 'Date',
            dataIndex: 'date',
            onHeaderCell: (column) => {
                return {
                    onClick: () => {
                        console.log(column);
                    }
                };
            }

        },
        {
            title: 'Price',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
    ];



    function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
    }


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
        getAscii(1, 11, dispatch)
        // console.log(serverItems)
        // setfData(getAscii('2','3'))
        // dispatch({type : 'LoadItems' , serverItems})
    }, [])




    return (
        <>
            <Row type='flex' align='middle' >

                <Col span={24} >
                    <Table columns={columns} dataSource={state.data} onChange={onChange} pagination={false} rowKey={record => record.id} />
                    {console.log(state.data)}

                    {/* <button onClick={() => dispatch({type : 'loadingFalse' })}> click </button> */}

                    {/* {
                    <div style={{ justifyContent: 'center', verticalAlign: 'center' }} >
                        <Button type="dashed">Dashed</Button>
                        {console.log(state.data)}
                        <h1>Hello, world!v</h1>
                        <button onClick={() => dispatch({ type: "+" })}> click </button>
                    </div> } */}
                </Col>

            </Row>


        </>
    )
}