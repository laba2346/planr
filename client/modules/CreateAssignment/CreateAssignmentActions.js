import callApi from '../../util/apiCaller';
import { addAssignments } from '../AssignmentList/AssignmentListActions';

export function createAssignmentRequest(formState, assignments){
    const apiUrl = 'createAssignment';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if(res){
                console.log(assignments)
                for(var i=0; i < assignments.length; i++){
                    if (assignments[i].date === (new Date(res.assignment_due)).setHours(0,0,0,0)){
                        assignments[i].assignments.push(res);
                        console.log("Found the day!")
                    }
                }
                console.log(assignments)
                dispatch(addAssignments(assignments));
            }
        });
    }
}
