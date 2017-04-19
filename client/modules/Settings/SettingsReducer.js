import { INVALID_FIELD, RESET_INVALID_STATUS} from './SettingsActions';

// Initial State
const initialState = { emailInvalid: false, passwordInvalid: false };
const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
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
