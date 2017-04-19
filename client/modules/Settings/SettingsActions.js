import callApi from '../../util/apiCaller';


export const INVALID_FIELD = 'INVALID_FIELD';
export const RESET_INVALID_STATUS = 'RESET_INVALID_STATUS';

export function changeSettingRequest(formState){
    const apiUrl = 'updateSettings';
    console.log(formState.email)
    return (dispatch) => {
        return callApi(apiUrl, "post", formState);
    }
}

export function checkIfFieldsValid(formState){
    return (dispatch) => {
        var emailreg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (formState.email !== '' && emailreg.exec(formState.email) === null)
        {
            dispatch(invalidField("email"))
            return false;
        }
        if (formState.password1 !== formState.password2){

            console.log("passwords dont match")
            dispatch(invalidField("password"))
            return false;
        }

        dispatch(resetInvalidStatus())
        return true;
    }
}

export function invalidField(field){
    console.log("invalid field: " + field)
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
