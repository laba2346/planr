import callApi from '../../util/apiCaller';

export const INVALID_FIELD = 'INVALID_FIELD';
export const RESET_INVALID_STATUS = 'RESET_INVALID_STATUS';


export function invalidField(field){
    return {
        type: INVALID_FIELD,
        field
    }
}
export function resetInvalidStatus(){
    return {
        type: RESET_INVALID_STATUS,
    }
}

export function checkIfFieldsValid(formState){
    return (dispatch) => {
        for (var i in formState){
            if(formState[i] === ""){
                console.log(i);
                dispatch(invalidField(i))
                return false;
            }
        }
        dispatch(resetInvalidStatus())
        return true;
    }
}

export function sendSignUpRequest(formState){
    const apiUrl = 'signUp';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if (!(res.newUser)){
                dispatch(invalidField(res.existingField));
            }
            else{
                // trigger redirect
            }
        });
    }
}
