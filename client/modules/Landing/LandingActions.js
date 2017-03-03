import callApi from '../../util/apiCaller';

export const NOT_NEW_USER = 'NOT_NEW_USER';

export function notNewUser(field){
    return {
        type: NOT_NEW_USER,
        field
    }
}


export function sendSignUpRequest(formState){
    const apiUrl = 'signUp';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if (!(res.newUser)){
                dispatch(notNewUser(res.existingField));
            }
            else{
                // trigger redirect
            }
        });
    }
}
