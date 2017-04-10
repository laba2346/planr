import {ADD_ASSIGNMENTS} from './AssignmentListActions';

// Initial State
const initialState = { assignments: []};
const AssignmentListReducer= (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSIGNMENTS:
            return Object.assign({}, state, {
                assignments: action.assignments
            });
        default:
            return state;
    }
};

/* Selectors */

// Export Reducer`
export default AssignmentListReducer;
