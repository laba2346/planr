import callApi from '../../util/apiCaller';

/**
 creates a class request and calls the api
 @param {object} tells the function what the state of the store is
*/
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
