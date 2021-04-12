import {ADD_TRANSACTION, CLEAR_TRANSACTION} from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                state
            }
        case CLEAR_TRANSACTION:
            return {
                state
            }
        default:
            return state;
    }
}

export default globalReducer;