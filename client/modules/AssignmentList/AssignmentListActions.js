import callApi from '../../util/apiCaller';

export const ADD_ASSIGNMENTS = 'ADD_ASSIGNMENTS';

export function addAssignments(assignments){
    console.log("adding assignments...")
    return{
        type: ADD_ASSIGNMENTS,
        assignments
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
