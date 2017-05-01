import {ADD_ASSIGNMENTS, ADD_ASSIGNMENT, DELETE_ASSIGNMENT, EDIT_ASSIGNMENT} from './AssignmentListActions';

// Initial State
const initialState = { assignments: [] };
const DateObjectReducer = (state, action) => {
    switch (action.type) {
        case ADD_ASSIGNMENT:
            var newAssignmentDate = (new Date(action.assignment.assignment_due)).setHours(0,0,0,0);
            if(state.date == newAssignmentDate){
                return Object.assign({}, state, {
                    assignments: [action.assignment, ...state.assignments]
                });
            }
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
            let assignmentCopy = state.assignments.slice();
            // check if date exists already
            var newAssignmentDate = (new Date(action.assignment.assignment_due)).setHours(0,0,0,0);
            var newDate = true;
            for (var i in assignmentCopy){
                if (assignmentCopy[i].date == newAssignmentDate){
                    console.log('not new date!');
                    newDate = false;
                }
            }
            let newDateObject = null;
            let newAssignments = null;
            if(newDate){
                var newDateObject = {
                    date: action.assignment.assignment_due,
                    assignments: [action.assignment],
                };
                var added = false;
                if(assignmentCopy.length > 0){
                    for (var i in assignmentCopy){
                        var currentDate = (new Date(assignmentCopy[i].date)).setHours(0,0,0,0);
                        if (currentDate > newAssignmentDate){
                            assignmentCopy.splice(newDateObject, 0, i-1);
                            added = true;
                            break;
                        }
                    }
                }
                if (!added){
                    assignmentCopy.push(newDateObject);
                }
                console.log(assignmentCopy);
                newAssignments = assignmentCopy;
            }
            else{
                newAssignments = assignmentCopy.map(dateObject =>
                        DateObjectReducer(dateObject, action)
                );
            }
            console.log(newAssignments);
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
