import React, {useEffect, useReducer} from 'react';
import {ADD_TRANSACTION, CLEAR_TRANSACTION} from '../types';
import globalReducer from './globalReducer';
import globalContext from './globalContext';

const GlobalState = () => {

    // Defining initial State
    const initalState = {
        totalIncome: null,
        totalExpenses: null,
        currentBalance: null,
        percentage: null,
        history: [
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
    }
    
    // defining reducer
    const [state, dispatch] = useReducer(globalReducer, initalState);


    return <globalContext.Provider
                value={{
                    totalIncome: state.totalIncome,
                    totalExpenses: state.totalExpenses,
                    currentBalance: state.currentBalance,
                    percentage: state.percentage,
                    history: state.history,
                }}
                >
        {props.children}
    </globalContext.Provider>
}
