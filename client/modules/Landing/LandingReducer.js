import { NOT_NEW_USER } from './LandingActions';

// Initial State
const initialState = { failedSignUp: false };
const LandingReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOT_NEW_USER:
            console.log(action.field)
            state.failedSignUp = true;     
        default:
            return state;
    }
};

/* Selectors */
// Export Reducer
export default LandingReducer;
