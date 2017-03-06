// Import Actions
import { INVALID_LOGIN } from './AppActions';

// Initial State
const initialState = { failedLogin: false};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INVALID_LOGIN:
            return Object.assign({}, state, {
                failedLogin: true,
            });
        default:
            return state;
    }
};

/* Selectors */

// Export Reducer
export default AppReducer;
