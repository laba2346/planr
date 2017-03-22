import {TOGGLE_SIDEBAR} from './HeaderActions';

// Initial State
const initialState = { sidebarShown : false };
const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                sidebarShown : !state.sidebarShown 
            });
        default:
            return state;
    }
};

/* Selectors */
// Export Reducer`
export default HeaderReducer;
