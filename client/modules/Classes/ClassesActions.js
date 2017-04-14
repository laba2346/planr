import callApi from '../../util/apiCaller';

export function createClassRequest(formState){
    const apiUrl = 'createClass';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(validLogin => {
            if(validLogin){

            }
            else{

            }
        });
    }

}
