import { CHANGE_VIEW } from './SidebarActions';
import { SUCCESS } from '../Settings/SettingsActions';
// Initial State
const initialState = { activeView: 'assignments', success: true };
const SidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return Object.assign({}, state, {
                activeView: action.view,
                success: false,
            });
        default:
            return state;
    }
};

/* Selectors */
// Export Reducer`
export default SidebarReducer;
