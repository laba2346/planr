import {ADD_ASSIGNMENTS, ADD_ASSIGNMENT} from './AssignmentListActions';

// Initial State
const initialState = { assignments: [] };

const DateExistsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ASSIGNMENT:
            return Object.assign({}, state, {
                assignment: [],
            });
        default:
            return state;
    }
};

/**
    The reducer for the AssignmentList. Adds or removes assignments from the store
    @param {Object} state State is the current active state
    @param {Object} action The action to do.
*/
const AssignmentListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSIGNMENT:
            var date = (new Date(action.assignment.assignment_due)).setHours(0,0,0,0);
            var newDate = {
                date: date,
                assignments: [action.assignment],
            };
            return {
                assignments: [newDate, ...state.assignments],
            };
        case ADD_ASSIGNMENTS:
            return Object.assign({}, state, {
                assignments: action.assignments
            });
        default:
            return state;
    }
};

// Export Reducer`
export default AssignmentListReducer;

/*if(newDate){
    var date = (new Date(result[i].assignment_due)).setHours(0,0,0,0);
    var newDate = {
        date: date,
        assignments: [result[i]],
    };
    dates.push(newDate);
}*/
