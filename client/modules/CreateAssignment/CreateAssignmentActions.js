import callApi from '../../util/apiCaller';

export function createAssignmentRequest(formState){
    const apiUrl = 'createAssignment';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(validLogin => {
            if (validLogin){

            }
            else{
                // call action to let user know login failed
                //dispatch(invalidLogin());
            }
        });
    }
}


