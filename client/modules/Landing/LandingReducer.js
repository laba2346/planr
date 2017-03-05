import { INVALID_FIELD, RESET_INVALID_STATUS} from './LandingActions';

// Initial State
const initialState = { usernameInvalid: false, emailInvalid: false, passwordInvalid: false };
const LandingReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_INVALID_STATUS:
            return Object.assign({}, state, {
                usernameInvalid: false,
                emailInvalid: false,
                passwordInvalid: false,
            });
        case INVALID_FIELD:
            if(action.field === 'username'){
                return Object.assign({}, state, {
                    usernameInvalid: true,
                });
            }
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

// Export Reducer
export default LandingReducer;
