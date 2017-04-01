import callApi from '../../util/apiCaller';

export function changeSettingRequest(formState){
    const apiUrl = 'changeSetting';
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
