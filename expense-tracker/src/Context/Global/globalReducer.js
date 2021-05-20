import {ADD_TRANSACTION, CLEAR_TRANSACTION} from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            // local variable to store updated history
            const updatedHistory = [...state.history,{
                description: action.payload.description,
                amount: parseInt(action.payload.amount),
                type: action.payload.type
            }];
            // Update localStorage
            localStorage.setItem('history', JSON.stringify(updatedHistory));
            // update state
            return {
                ...state,
                history: updatedHistory
            }
        case CLEAR_TRANSACTION:
            // local variable to store updated history
            const updatedClearedHistory = state.history.filter((ele,ind) => ind !== action.payload);
            // Update localStorage
            localStorage.setItem('history', JSON.stringify(updatedClearedHistory));
            // remove local storage when history is clear
            JSON.parse(localStorage.getItem('history')).length === 0 && localStorage.removeItem('history');
            // update state
            return {
                ...state,
                history: updatedClearedHistory
            }
        default:
            return state;
    }
}

export default globalReducer;