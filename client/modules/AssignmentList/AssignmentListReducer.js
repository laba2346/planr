import {ADD_ASSIGNMENTS, ADD_ASSIGNMENT, DELETE_ASSIGNMENT, EDIT_ASSIGNMENT, FILTER_BY_CLASS} from './AssignmentListActions';

// Initial State
const initialState = { assignments: [], filteredAssignments: [] };
const DateObjectReducer = (state, action) => {
    switch (action.type) {
        case ADD_ASSIGNMENT:
            var newAssignmentDate = (new Date(action.assignment.assignment_due)).setHours(0,0,0,0);
            var currentDate = (new Date(state.date)).setHours(0,0,0,0);
            let currentAssignments = state.assignments.slice();
            if(currentDate == newAssignmentDate){
                if (currentAssignments.length > 0){
                    // add by time
                }
                return Object.assign({}, state, {
                    assignments: [action.assignment, ...state.assignments]
                });
            }
        case DELETE_ASSIGNMENT:
            let currentAssignmentList = state.assignments.slice();
            var numOfAssignments = state.assignments.length;
            var delAssignmentId = action.assignment.id;
            for(var i = 0; i < numOfAssignments; i++){
                if(delAssignmentId === state.assignments[i].id){
                    currentAssignmentList.splice(i, 1);
                    break;
                }
            }
            return Object.assign({}, state, {
                assignments: currentAssignmentList
            });
        case FILTER_BY_CLASS:
            let currentAssignmentsArray = state.assignments.slice();
            var num = currentAssignmentsArray.length;
            var classId = action._class.id;
            for(var i = 0; i < num; i++){
                if(classId != currentAssignmentsArray[i].class_id){
                    currentAssignmentsArray.splice(i, 1);
                }
            }
            console.log(currentAssignmentsArray);
            return Object.assign({}, state, {
                assignments: currentAssignmentsArray
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
            let assignmentCopy = state.assignments.slice();
            // check if date exists already
            var newAssignmentDate = (new Date(action.assignment.assignment_due)).setHours(0,0,0,0);
            var newDate = true;
            if (assignmentCopy.length > 0){
                for (var i in assignmentCopy){
                    // set date to 0 hours you doofus
                    var assignmentCopyDate = (new Date(assignmentCopy[i].date)).setHours(0,0,0,0);
                    if (assignmentCopyDate == newAssignmentDate){
                        newDate = false;
                    }
                }
            }
            let newDateObject = null;
            let newAssignments = null;
            if(newDate){
                var newDateObject = {
                    date: newAssignmentDate,
                    assignments: [action.assignment],
                };

                var added = false;
                if(assignmentCopy.length > 0){
                    for (var i in assignmentCopy){
                        var currentDate = (new Date(assignmentCopy[i].date)).setHours(0,0,0,0);
                        if (currentDate > newAssignmentDate){
                            assignmentCopy.splice(i, 0, newDateObject);
                            added = true;
                            break;
                        }
                    }
                }
                if (!added){
                    assignmentCopy.push(newDateObject);
                }
                newAssignments = assignmentCopy;
            }
            else{
                newAssignments = assignmentCopy.map(dateObject =>
                        DateObjectReducer(dateObject, action)
                );
            }
            return {
                assignments: newAssignments,
                filteredAssignments: [],
            };
        case ADD_ASSIGNMENTS:
            return Object.assign({}, state, {
                assignments: action.assignments,
                filteredAssignments: [],
            });
        case DELETE_ASSIGNMENT:
            let currentAssignments = state.assignments.slice();
            var delAssignmentId = action.assignment.id;
            var length = currentAssignments.length;
            var newAssignments = currentAssignments.map(dateObject =>
                    DateObjectReducer(dateObject, action)
            );

            if (newAssignments.length > 0){
                for (var i in newAssignments){
                    if (newAssignments[i].assignments.length == 0){
                        newAssignments.splice(i, 1);
                    }
                }
            }
            return Object.assign({}, state, {
                assignments: newAssignments,
                filteredAssignments: [],
            })
        case EDIT_ASSIGNMENT:
            let editedAssignments = state.assignments.slice();
            var assignment = action.assignment;
            var length = editedAssignments.length;
            for(var i = 0; i < length; i++){
                var numEvents = editedAssignments[i].assignments.length;
                for(var j = 0; j < numEvents; j++){
                    if(assignment.id === editedAssignments[i].assignments[j].id){
                        editedAssignments[i].assignments[j] = assignment;
                        break;
                    }
                }
            }
            return Object.assign({}, state, {
                assignments: editedAssignments,
                filteredAssignments: [],
            })
        case FILTER_BY_CLASS:
            console.log(state.assignments);
            let oldAssignments = state.assignments.slice();
            var newAssignments = oldAssignments.map(dateObject =>
                    DateObjectReducer(dateObject, action)
            );
            var len = newAssignments.length;
            var i = 0;
            while(i < len){
                if(newAssignments[i]){
                    if(newAssignments[i].assignments.length == 0){
                        newAssignments.splice(i,1);
                        i--;
                    }
                }
                i++;
            }
            return Object.assign({}, state, {
                assignments: state.assignments,
                filteredAssignments: newAssignments,
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
