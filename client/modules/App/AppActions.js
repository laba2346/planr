import callApi from '../../util/apiCaller';
export const INVALID_LOGIN = 'INVALID_LOGIN';


export function invalidLogin(){
    return {
        type: INVALID_LOGIN,
    }
}

export function sendLoginRequest(formState){
    const apiUrl = 'login';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(validLogin => {
            if (validLogin){

            }
            else{
                // call action to let user know login failed
                dispatch(invalidLogin());
            }
        });
    }
}
