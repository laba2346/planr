import callApi from '../../util/apiCaller';
import getAssignments from './AssignmentListReducer';

/**
    Variable with string name to be used in reducer.
*/
export const ADD_ASSIGNMENTS = 'ADD_ASSIGNMENTS';
/**
    Variable with string name to be used in reducer.
*/
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';

/**
    Adds multiple assignments to the store
    @param {Object} assignments Assignments to add to the store
*/
export function addAssignments(assignments){
    return{
        type: ADD_ASSIGNMENTS,
        assignments
    }
}

/**
    Add single assignment to the store
    @param {Object} assignment Assignment to add to the store
*/
export function addAssignment(assignment){
    return{
        type: ADD_ASSIGNMENT,
        assignment
    }
}

/**
    Sends a request to the server to create a new assignment for the user
    @param {Object} formState The current state of NewAssignmentForm as an object
*/
export function createAssignmentRequest(formState){
    const apiUrl = 'createAssignment';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if(res){
                dispatch(addAssignment(res));
            }
        });
    }
}

/**
    Fetches all of the users assignments from the server
*/
export function fetchAssignments(){
    const apiUrl = 'fetchAssignments';
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            if (res){
                dispatch(addAssignments(res));
            }
            else{
                // dispatch no assignments yet thing
            }
        });
    }
}

export function deleteAssignment(assignmentId){
    console.log('called');
    const apiUrl = 'deleteAssignment';
    console.log(assignmentId);
    var assignment = { id: assignmentId };
    return (dispatch) => {
        return callApi(apiUrl, "post", assignment);
    }
}
