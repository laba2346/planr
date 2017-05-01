import {ADD_ASSIGNMENTS, ADD_ASSIGNMENT, DELETE_ASSIGNMENT, EDIT_ASSIGNMENT} from './AssignmentListActions';

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
                var numEvents = currentAssignments[i].assignments.length;
                for(var j = 0; j < numEvents; j++){
                    if(delAssignment.id === currentAssignments[i].assignments[j].id){
                        console.log("found and deleted assignment")
                        currentAssignments[i].assignments.splice(j, 1);
                        if(numEvents == 1){
                            currentAssignments.splice(i,1);
                        }
                        break;
                    }
                }
            }
            console.log(currentAssignments);
            return Object.assign({}, state, {
                assignments: currentAssignments,
            })
        case EDIT_ASSIGNMENT:
            let editedAssignments = state.assignments.slice();
            var assignment = action.assignment;
            var length = editedAssignments.length;
            for(var i = 0; i < length; i++){
                var numEvents = editedAssignments[i].assignments.length;
                for(var j = 0; j < numEvents; j++){
                    if(assignment.id === editedAssignments[i].assignments[j].id){
                        console.log("found and EDITED assignment")
                        editedAssignments[i].assignments[j] = assignment;
                        break;
                    }
                }
            }
            return Object.assign({}, state, {
                assignments: editedAssignments,
            })
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
