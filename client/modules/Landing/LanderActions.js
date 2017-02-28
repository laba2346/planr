import callApi from '../../util/apiCaller';

export function sendSignUpRequest(formState){
    const apiUrl = 'signUp';
    callApi(apiUrl).then(res => {});
}
