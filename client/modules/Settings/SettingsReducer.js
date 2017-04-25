import { INVALID_FIELD, RESET_INVALID_STATUS, CHANGE_THEME } from './SettingsActions';

// Initial State
const initialState = { emailInvalid: false, passwordInvalid: false, themeColor: '#705e8b' };
const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return Object.assign({}, state, {
                themeColor: action.themeColor,
            });
        case RESET_INVALID_STATUS:
            return Object.assign({}, state, {
                emailInvalid: false,
                passwordInvalid: false,
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
        default:
            return state;
    }
};

/* Selectors */
// Export Reducer`
export default SettingsReducer;
