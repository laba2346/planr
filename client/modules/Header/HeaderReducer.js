import {TOGGLE_SIDEBAR, LOAD_SETTINGS} from './HeaderActions';

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
        case LOAD_SETTINGS:
            return Object.assign({}, state, {
                color: action.settings.color,
                email: action.settings.email,
                username: action.settings.username,
                profile_pic: action.settings.profile_pic
              });
        default:
            return state;
    }
};

/* Selectors */
// Export Reducer`
export default HeaderReducer;
