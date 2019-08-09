import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { initialState, reducer } from '../components/todos'
import Spinner from '../utils/Spinner'
import LoadingOverlay from 'react-loading-overlay'

export const SomeContext = React.createContext()
const Index = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState)


    return (
        <LoadingOverlay
        active={state.loading}
        spinner={<Spinner />}
    >
        <SomeContext.Provider value={{ state, dispatch }}>
                <App />
        </SomeContext.Provider>
    </LoadingOverlay>


    )
}





ReactDOM.render(<Index />,
    document.getElementById('root')
);