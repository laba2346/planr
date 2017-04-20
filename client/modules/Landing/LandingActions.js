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
        return callApi(apiUrl, "post", formState).then(res => {
            if (res.validLogin){
                window.location.pathname = '/';
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
        var usernamereg = /^[0-9A-Za-z!?-_]{8,20}\z/;  

        var passwordreg = /^[0-9A-Za-z!?-_]{8,80}\z/;  

        if (emailreg.exec(formState.email) === null)
        {
          dispatch(invalidField("email"))
          return false;
        }

        if (usernamereg.exec(formState.username) === null)
        {
            console.log("test")
            dispatch(invalidField("username"))
            return false;
        }

        if (passwordreg.exec(formState.password) === null)
        {
            dispatch(invalidField("password"))
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
                callApi('login', "post", formState).then( res => {
                    if (res){
                        window.location.pathname = '/';
                    }
                    else{
                        // call action to let user know login failed
                        dispatch(invalidLogin());
                    }
                })
            }
        });
    }
}
