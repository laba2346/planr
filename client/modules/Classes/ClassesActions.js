import callApi from '../../util/apiCaller';

/**
    Sends create class request to the server
    @param {Object} formState The current fields in the create class form.
*/
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
