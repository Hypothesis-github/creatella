import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { initialState, reducer } from '../components/todos'
import { Spin } from 'antd'

export const SomeContext = React.createContext()
const Index = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <SomeContext.Provider value={{ state, dispatch }}>
            <Spin tip="Loading..." spinning={state.loading}>
                <App />
            </Spin>
        </SomeContext.Provider>

    )
}





ReactDOM.render(<Index />,
    document.getElementById('root')
);