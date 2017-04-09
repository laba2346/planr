import callApi from '../../util/apiCaller';

export function fetchAssignments(){
    const apiUrl = 'fetchAssignments';
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            if (res){
                console.log(res);
            }
            else{
                // dispatch no assignments yet thing
            }
        });
    }
}
