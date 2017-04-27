import { CHANGE_VIEW } from './SidebarActions';
/**
    Object containing the initial state when the page is loaded.
*/
const initialState = { activeView: 'assignments', success: false };

/**
    Redux reducer that changes the view given certain actions.
    @param {Object} state see initialState
    @param {Object} action Object containing the dispatched action and its type
*/
const SidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return Object.assign({}, state, {
                activeView: action.view,
            });
        default:
            return state;
    }
};

/* Selectors */
// Export Reducer`
export default SidebarReducer;
