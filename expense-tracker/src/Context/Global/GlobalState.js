import React, {useReducer} from 'react';
import {ADD_TRANSACTION, CLEAR_TRANSACTION} from '../types';
import globalReducer from './globalReducer';
import globalContext from './globalContext';

const GlobalState = props => {

    // Defining initial State
    const initalState = {
        history: JSON.parse(localStorage.getItem('history')) || [
            {
              description: 'Salary',
              amount: 100000,
              type: 'income'
            },
            {
              description: 'Shopping',
              amount: 30000,
              type: 'expenses'
            }
        ]
    };

    // defining reducer
    const [state, dispatch] = useReducer(globalReducer, initalState);

    // Add transaction
    const addTransaction = (description, amount, type) => {
        dispatch({
            type: ADD_TRANSACTION,
            payload: {
              description,
              amount,
              type
            }
        })
    }
    
    // clear transaction
    const clearTransaction = index => {
        dispatch({
            type: CLEAR_TRANSACTION,
            payload: index
        })
    }

    return <globalContext.Provider
                value={{
                    history: state.history,
                    addTransaction,
                    clearTransaction
                }}>
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;
