import { CHANGE_VIEW } from './SidebarActions';

// Initial State
const initialState = { activeView: 'assignments'};
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
