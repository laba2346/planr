import callApi from '../../util/apiCaller';

export const INVALID_FIELD = 'INVALID_FIELD';
export const RESET_INVALID_STATUS = 'RESET_INVALID_STATUS';
export const INVALID_LOGIN = 'INVALID_LOGIN';


export function invalidLogin(){
    return {
        type: INVALID_LOGIN,
    }
}

export function sendLoginRequest(formState){
    const apiUrl = 'login';
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(validLogin => {
            if (validLogin){

            }
            else{
                // call action to let user know login failed
                dispatch(invalidLogin());
            }
        });
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

export function checkIfFieldsValid(formState){
    console.log(formState)
    return (dispatch) => {
        for (var i in formState){
            if(formState[i] === ""){
                console.log(i);
                dispatch(invalidField(i))
                return false;
            }
        }

        var emailreg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (emailreg.exec(formState.email) === null)
        {
          console.log("finna dispatch invalidField")
          dispatch(invalidField("email"))
          return false;
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
                console.log(res)
                dispatch(invalidField(res.existingField));
            }
            else{
                // trigger redirect
            }
        });
    }
}
