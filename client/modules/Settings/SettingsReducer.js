import { RESET_SUCCESS, SUCCESS, INVALID_FIELD, RESET_SETTINGS, CHANGE_THEME } from './SettingsActions';

// Initial State
const initialState = { emailInvalid: false, passwordInvalid: false, success: false, themeColor: '#705e8b' };
const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return Object.assign({}, state, {
                themeColor: action.themeColor,
            });
        case RESET_SETTINGS:
            return Object.assign({}, state, {
                emailInvalid: false,
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
