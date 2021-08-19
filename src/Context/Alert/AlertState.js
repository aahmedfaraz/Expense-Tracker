import React, {useReducer} from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import {DISPLAY_ALERT, CLEAR_ALERT} from '../types';

const AlertState = props => {

    const initialState = '';

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Display Alert
    const displayAlert = msg => {
        dispatch({
            type: DISPLAY_ALERT,
            payload: msg
        })
    }

    // Clear Alert
    const clearAlert = () => dispatch({type: CLEAR_ALERT});

    return <alertContext.Provider
            value={{
                message: state,
                displayAlert,
                clearAlert
            }}>
        {props.children}
    </alertContext.Provider>
}

export default AlertState;