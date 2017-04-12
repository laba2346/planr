import callApi from '../../util/apiCaller';

export function changeSettingRequest(formState){
    const apiUrl = 'settings';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState);
    }
}
