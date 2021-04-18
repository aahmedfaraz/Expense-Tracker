import {DISPLAY_ALERT, CLEAR_ALERT} from '../types';

const alertReducer = (state, action) => {
    switch (action.type) {
        case DISPLAY_ALERT:
            return action.payload
        case CLEAR_ALERT:
            return ''
        default:
            break;
    }
}

export default alertReducer;