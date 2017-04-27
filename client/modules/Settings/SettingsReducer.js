import { RESET_SUCCESS, SUCCESS, INVALID_FIELD, RESET_SETTINGS, CHANGE_THEME } from './SettingsActions';

/**
    An object that contains the initial state when the page is loaded.
*/
const initialState = { emailInvalid: false, passwordInvalid: false, usernameInvalid: false, success: false, themeColor: '#705e8b' };

/**
    A redux reducer that changes the state for the settings page given certain actions.
    Changes settings based on user inputs.
    @param {Object} state Initialized to initialState
    @param {Object} action Object containing a type that determines how we change the state.
*/
const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return Object.assign({}, state, {
                themeColor: action.themeColor,
            });
        case RESET_SETTINGS:
            return Object.assign({}, state, {
                emailInvalid: false,
                usernameInvalid: false,
                passwordInvalid: false,
                success: false,
            });
        case INVALID_FIELD:
            if(action.field === 'email'){
                return Object.assign({}, state, {
                    emailInvalid: true,
                });
            }
            if(action.field === 'password'){
                return Object.assign({}, state, {
                    passwordInvalid: true,
                });
            }
            if(action.field === 'username'){
                return Object.assign({}, state, {
                    usernameInvalid: true,
                });
            }
        case SUCCESS:
            return Object.assign({}, state, {
                success: true,
            });
        case RESET_SUCCESS:
            return Object.assign({}, state, {
                success: false,
            });

        default:
            return state;
    }
};

/* Selectors */
// Export Reducer`
export default SettingsReducer;
