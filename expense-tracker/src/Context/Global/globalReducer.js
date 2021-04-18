import {ADD_TRANSACTION, CLEAR_TRANSACTION} from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                history: [...state.history,{
                    description: action.payload.description,
                    amount: parseInt(action.payload.amount),
                    type: action.payload.type
                }]
            }
        case CLEAR_TRANSACTION:
            const updated = state.history.filter((ele,ind) => ind !== action.payload);
            return {
                ...state,
                history: updated
            }
        default:
            return state;
    }
}

export default globalReducer;