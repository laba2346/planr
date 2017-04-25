import callApi from '../../util/apiCaller';

export const INVALID_FIELD = 'INVALID_FIELD';
export const RESET_INVALID_STATUS = 'RESET_INVALID_STATUS';
export const CHANGE_THEME = 'CHANGE_THEME';
export const RESET_SETTINGS = 'RESET_SETTINGS';
export const SUCCESS = 'SUCCESS';
export const RESET_SUCCESS = 'RESET_SUCCESS'

export function changeTheme(themeColor){
    return {
        type: CHANGE_THEME,
        themeColor
    }
}

export function changeSettingRequest(formState){
    const apiUrl = 'updateSettings';
    console.log(formState.email)
    return (dispatch) => {
        return callApi(apiUrl, "post", formState).then(res => {
            if(res.success){
                dispatch(success());
            }
        });
    }
}

export function success(){
    return {
        type: SUCCESS,
    }
}

export function resetSuccess(){
    return {
        type: RESET_SUCCESS,
    }
}

export function checkIfFieldsValid(formState){
    return (dispatch) => {

        var emailreg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	var usernamereg = /(?=^.{8,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/ 
            
        var passwordreg = /(?=^.{8,80}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/ 

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

        dispatch(resetSettings())
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

export function invalidField(field){
    console.log("invalid field: " + field)
    return {
        type: INVALID_FIELD,
        field
    }
}

export function resetSettings(){
    return {
        type: RESET_SETTINGS,
    }
}
