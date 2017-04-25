import callApi from '../../util/apiCaller';

export const ADD_ASSIGNMENTS = 'ADD_ASSIGNMENTS';
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';

export function addAssignments(assignments){
    return{
        type: ADD_ASSIGNMENTS,
        assignments
    }
}

export function addAssignment(assignment){
    return{
        type: ADD_ASSIGNMENT,
        assignment
    }
}

export function createAssignmentRequest(formState, assignments){
    const apiUrl = 'createAssignment';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if(res){
                console.log(res);
                dispatch(addAssignment(res));
            }
        });
    }
}

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
