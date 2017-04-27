import {ADD_ASSIGNMENTS, ADD_ASSIGNMENT} from './AssignmentListActions';

// Initial State
const initialState = { assignments: [] };

/**
    The reducer for the AssignmentList. Adds or removes assignments from the store
    @param {Object} state State is the current active state
    @param {Object} action The action to do.
*/
const AssignmentListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSIGNMENT:
            let newAssignments = state.assignments.slice();
            var newAssignmentDate = (new Date(action.assignment.assignment_due)).setHours(0,0,0,0);
            var added = false;
            for (var i in newAssignments){
                if (newAssignments[i].date == newAssignmentDate){
                    newAssignments[i].assignments.push(action.assignment);
                    added = true;
                }
            }
            if (!added){
                var newDate = {
                    date: action.assignment.assignment_due,
                    assignments: [action.assignment],
                };
                for (var i in newAssignments){
                    var currentDate = (new Date(newAssignments[i].date)).setHours(0,0,0,0);
                    if (currentDate > newAssignmentDate){
                        newAssignments.splice(newDate, 0, i-1);
                        break;
                    }
                }
                newAssignments.push(newDate);
            }
            return {
                assignments: newAssignments,
            };
        case ADD_ASSIGNMENTS:
            return Object.assign({}, state, {
                assignments: action.assignments
            });
        default:
            return state;
    }
};

// Selector
export const getAssignments = state => state.assignmentslist.assignments;


// Export Reducer
export default AssignmentListReducer;

/*if(newDate){
    var date = (new Date(result[i].assignment_due)).setHours(0,0,0,0);
    var newDate = {
        date: date,
        assignments: [result[i]],
    };
    dates.push(newDate);
}*/
