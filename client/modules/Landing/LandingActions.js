import callApi from '../../util/apiCaller';

export const INVALID_FIELD = 'INVALID_FIELD';
export const RESET_INVALID_STATUS = 'RESET_INVALID_STATUS';
export const INVALID_LOGIN = 'INVALID_LOGIN';


/**
 Returns an invalid login if that login isn't in the database 
*/
export function invalidLogin(){
    return {
        type: INVALID_LOGIN,
    }
}

/**
 Sends a login request to the server if the login info is valid
 @param {formstate} Gives the state 
*/
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

/**
 Highlights a field if it's invalid
 @param {field} the field that we want to mark as invalid
*/
export function invalidField(field){
    console.log("invalid field: " + field)
    return {
        type: INVALID_FIELD,
        field
    }
}
/**
 After submitting this resets the status of the form
*/
export function resetInvalidStatus(){
    return {
        type: RESET_INVALID_STATUS,
    }
}

/**
 This function checks if the current field is valid based on regex
 @param {formstate} The form to check 
*/
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
        var usernamereg = /(?=^.{8,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/ 
            
        var passwordreg = /(?=^.{8,80}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/ 


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

/**
 Sends the sign up request to the api
 @param {formstate} The formstate of the form 
*/
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
