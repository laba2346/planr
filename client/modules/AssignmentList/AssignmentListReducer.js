import {ADD_ASSIGNMENTS, ADD_ASSIGNMENT, DELETE_ASSIGNMENT} from './AssignmentListActions';

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
        case DELETE_ASSIGNMENT:
            let currentAssignments = state.assignments.slice();
            var delAssignment = action.assignment;
            var length = currentAssignments.length;
            for(var i = 0; i < length; i++){
                if(delAssignment.date.setHours(0,0,0,0) === currentAssignments[i].date){
                    var numEvents = currentAssignments[i].assignments.length;
                    for(var j = 0; j < numEvents; j++){
                        if(delAssignment.id === currentAssignments[i].assignments[j].id){
                            currentAssignments[i].assignments.slice(j, 1);
                            break;
                        }
                    }
                }
            }

            return {
                assignments: currentAssignments,
            }
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
