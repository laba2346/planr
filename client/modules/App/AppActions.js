import callApi from '../../util/apiCaller';

export function sendLoginRequest(formState){
    const apiUrl = 'login';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if (!(res)){

            }
            else{
                // trigger redirect
            }
        });
    }
}
