import {TOGGLE_SIDEBAR} from './HeaderActions';

// Initial State
const initialState = { sidebarShown : false };

/**
 Switches the sidebar from shown to not show
 @param {} gives the initial state of the sidebar
 @param {
*/
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
