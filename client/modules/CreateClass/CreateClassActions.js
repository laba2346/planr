import callApi from '../../util/apiCaller';

export function createClassRequest(formState){
    const apiUrl = 'createClass';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(success => {
            if (success){

            }
            else {
                
            }
        })
    }
}
