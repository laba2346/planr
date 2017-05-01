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
    Variable with string name to be used in reducer.
*/
export const DELETE_ASSIGNMENT = 'DELETE_ASSIGNMENT';

/**
    Variable with string name to be used in the reducer.
*/
export const EDIT_ASSIGNMENT = 'EDIT_ASSIGNMENT';

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
    Dispatches the frontend deleteAssignment to update the assignments list
    @param {Integer} id Assignment ID to be deleted
*/
export function delAssignment(assignment){
    return{
        type: DELETE_ASSIGNMENT,
        assignment,
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
    const apiUrl = 'deleteAssignment';
    var assignment = { id: assignmentId };
    return (dispatch) => {
        return callApi(apiUrl, "post", assignment).then(res => {
            if(res.success){
                dispatch(delAssignment(assignment))
            }
        });
    }
}

/**
    Edits one assignment in the store
    @param {Object} formState object containing the new assignment name/date/id
*/
export function editAssignmentFront(assignment){
    return {
        type: EDIT_ASSIGNMENT,
        assignment
    }
}

/**
    Makes an API call to edit the assignment in the backend.
    @param {Object} formState object containing the new assignment name/date/id
*/
export function editAssignment(assignment){
    const apiUrl = 'editAssignment';
    return (dispatch) => {
        return callApi(apiUrl, "post", assignment).then(res => {
            if(res.success){
                dispatch(editAssignmentFront(assignment));
            }
            else {
                console.log("grr");
            }
        });
    }
}
